import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { episodes } from "@/constants/episodes";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import PillButton from "@/components/pillButton";
import { BASE_URL } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";
import {
  generatePodcastEpisodeSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import fs from "fs";
import path from "path";
import { transcriptFileByEpisodeId } from "@/data/transcripts/manifest";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedEpisodes from "@/components/RelatedEpisodes";

interface EpisodePageProps {
  params: Promise<{
    id: string;
  }>;
}

interface TranscriptEntry {
  timestamp: string;
  seconds: number;
  speaker: string;
  text: string;
}

function toSeconds(ts: string): number {
  const [h, m, s] = ts.split(":").map(Number);
  return h * 3600 + m * 60 + s;
}

function parseTranscript(raw: string): TranscriptEntry[] {
  const entries: TranscriptEntry[] = [];
  const lines = raw.split("\n");
  const speakerPattern = /^\[(\d{2}:\d{2}:\d{2})\] \*\*([^*]+)\*\*:?\s*(.*)/;
  const inlineTimestamp = /\[\d{2}:\d{2}:\d{2}\]/g;
  let current: TranscriptEntry | null = null;

  for (const line of lines) {
    if (line.startsWith("#")) continue;
    const match = line.match(speakerPattern);
    if (match) {
      if (current && current.text) entries.push(current);
      const [, ts, speaker, text] = match;
      current = {
        timestamp: ts,
        seconds: toSeconds(ts),
        speaker: speaker.trim(),
        text: text.replace(inlineTimestamp, "").trim(),
      };
    } else if (current) {
      const cleaned = line.replace(inlineTimestamp, "").trim();
      if (cleaned) {
        current.text += (current.text ? " " : "") + cleaned;
      }
    }
  }
  if (current && current.text) entries.push(current);
  return entries;
}

function loadTranscript(episodeId: number): TranscriptEntry[] {
  try {
    const transcriptsDir = path.join(process.cwd(), "src/data/transcripts");
    const transcriptFile = transcriptFileByEpisodeId[episodeId];
    if (!transcriptFile) return [];
    const raw = fs.readFileSync(
      path.join(transcriptsDir, transcriptFile),
      "utf-8"
    );
    return parseTranscript(raw);
  } catch {
    return [];
  }
}

export function generateStaticParams() {
  return episodes.map((e) => ({ id: String(e.id) }));
}

export async function generateMetadata({
  params,
}: EpisodePageProps): Promise<Metadata> {
  const { id } = await params;
  const episode = episodes.find((e) => e.id === parseInt(id));

  if (!episode) {
    return {
      title: "Episode Not Found",
    };
  }

  return buildMetadata({
    title: episode.title,
    description: episode.description,
    path: `/episode/${episode.id}`,
    ogImage: episode.thumbnail ? `${BASE_URL}${episode.thumbnail}` : undefined,
    ogType: "article",
  });
}

export default async function EpisodePage({ params }: EpisodePageProps) {
  const { id } = await params;
  const episode = episodes.find((e) => e.id === parseInt(id));

  if (!episode) {
    notFound();
  }

  const getYouTubeVideoId = (url: string) => {
    const regex =
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const youtubeVideoId = getYouTubeVideoId(episode.videoUrl);
  const transcriptEntries = loadTranscript(episode.id);

  const episodeSchema = generatePodcastEpisodeSchema({
    id: episode.id,
    title: episode.title,
    description: episode.description,
    thumbnail: episode.thumbnail,
    videoUrl: episode.videoUrl,
    youtubeVideoId,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: episode.title, url: `${BASE_URL}/episode/${episode.id}` },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={episodeSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navigation />

      {/* Breadcrumbs */}
      <section className="bg-gray-50 py-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Episodes", href: "/" },
              { label: episode.title, href: `/episode/${episode.id}` },
            ]}
          />
        </div>
      </section>

      {/* Episode Header */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {episode.title}
            </h1>

            {/* Episode Tags */}
            <div className="flex flex-row flex-wrap gap-2 mb-6">
              {episode.tags.map((tag) => (
                <PillButton text={tag} key={tag} activated={false} />
              ))}
            </div>

            {/* Platform Links */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Listen on:
              </h3>
              <div className="flex flex-wrap gap-3">
                {episode.platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-lg border border-purple-200 hover:border-purple-300 hover:bg-purple-100 transition-all duration-200"
                  >
                    {platform.name === "Apple" && (
                      <Image
                        src="/Apple.svg"
                        alt="Apple Podcasts"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    )}
                    {platform.name === "Spotify" && (
                      <Image
                        src="/Spotify.svg"
                        alt="Spotify"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    )}
                    {platform.name === "YouTube" && (
                      <Image
                        src="/youtube.svg"
                        alt="YouTube"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    )}
                    <span className="font-medium text-gray-700 text-sm">
                      {platform.name}
                    </span>
                    <ExternalLink className="w-3 h-3 text-gray-400" />
                  </a>
                ))}
              </div>
            </div>
          </header>

          {/* Video/Audio Player Section */}
          <div className="mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Watch or Listen
              </h2>
              {youtubeVideoId && (
                <div className="mb-6">
                  <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                      title={episode.title}
                      className="absolute top-0 left-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Episode Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              About this episode
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {episode.description}
            </p>
          </div>

          {/* Key Takeaways */}
          {episode.keyTakeaways && episode.keyTakeaways.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Key takeaways
              </h2>
              <ul className="space-y-3">
                {episode.keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-700 text-sm font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-gray-700 leading-relaxed">{takeaway}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Time to Fluency + Key Methods */}
          {(episode.timeToFluency || episode.keyMethods) && (
            <div className="mb-8 bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                How they did it
              </h2>
              {episode.timeToFluency && (
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Time to fluency:</span>{" "}
                  {episode.timeToFluency}
                </p>
              )}
              {episode.keyMethods && episode.keyMethods.length > 0 && (
                <>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Methods used
                  </h3>
                  <ul className="space-y-2">
                    {episode.keyMethods.map((method, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="flex-shrink-0 text-purple-500 mt-px leading-none">
                          ›
                        </span>
                        <span className="leading-relaxed">{method}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}

          {/* Resources Mentioned */}
          {episode.resourcesMentioned && episode.resourcesMentioned.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Resources mentioned
              </h2>
              <ul className="space-y-2">
                {episode.resourcesMentioned.map((resource, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <span className="flex-shrink-0 text-purple-500 mt-px leading-none">›</span>
                    <span className="leading-relaxed">{resource}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Guest Links */}
          {episode.guest && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Meet the guest
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/guests/${episode.guest.slug}`}
                  className="inline-flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-lg border border-purple-200 hover:border-purple-300 hover:bg-purple-100 transition-all duration-200 font-medium text-gray-700 text-sm"
                >
                  {episode.guest.name}&apos;s profile →
                </Link>
                <Link
                  href="/guests"
                  className="inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-100 transition-all duration-200 font-medium text-gray-700 text-sm"
                >
                  All guests →
                </Link>
              </div>
            </div>
          )}

          {/* Transcript */}
          {transcriptEntries.length > 0 && (
            <div className="mb-8">
              <details className="group border border-gray-200 rounded-lg overflow-hidden">
                <summary className="cursor-pointer list-none flex items-center justify-between px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Transcript
                  </h2>
                  <span className="text-sm font-medium text-purple-600">
                    <span className="group-open:hidden">Show transcript</span>
                    <span className="hidden group-open:inline">
                      Hide transcript
                    </span>
                  </span>
                </summary>
                <div className="divide-y divide-gray-100 max-h-[70vh] overflow-y-auto">
                  {transcriptEntries.map((entry, i) => (
                    <div key={i} className="flex gap-4 px-6 py-3">
                      <div className="flex-shrink-0 w-20 pt-1">
                        {youtubeVideoId ? (
                          <a
                            href={`https://www.youtube.com/watch?v=${youtubeVideoId}&t=${entry.seconds}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-mono text-purple-500 hover:text-purple-700 hover:underline"
                          >
                            {entry.timestamp}
                          </a>
                        ) : (
                          <span className="text-xs font-mono text-gray-400">
                            {entry.timestamp}
                          </span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span
                          className={`text-xs font-semibold uppercase tracking-wide ${
                            entry.speaker === "Oheneba"
                              ? "text-gray-400"
                              : "text-purple-600"
                          }`}
                        >
                          {entry.speaker}
                        </span>
                        <p className="text-sm text-gray-700 leading-relaxed mt-0.5">
                          {entry.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            </div>
          )}
          {/* Related Episodes */}
          <RelatedEpisodes
            currentId={episode.id}
            currentTags={episode.tags}
            allEpisodes={episodes}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
