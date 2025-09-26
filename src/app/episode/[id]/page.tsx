import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { episodes } from "@/constants/episodes";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import PillButton from "@/components/pillButton";

interface EpisodePageProps {
  params: Promise<{
    id: string;
  }>;
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

  return {
    title: episode.title,
    description: episode.description,
    openGraph: {
      title: episode.title,
      description: episode.description,
      images: episode.thumbnail ? [episode.thumbnail] : [],
    },
  };
}

export default async function EpisodePage({ params }: EpisodePageProps) {
  const { id } = await params;
  const episode = episodes.find((e) => e.id === parseInt(id));

  if (!episode) {
    notFound();
  }

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string) => {
    const regex =
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const youtubeVideoId = getYouTubeVideoId(episode.videoUrl);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Back to Episodes Link */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all episodes
          </Link>
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

            {/* Platform Links - Moved to top for better mobile experience */}
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

            {/* Episode Description */}
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {episode.description}
            </p>
          </header>

          {/* Video/Audio Player Section */}
          <div className="mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Watch or Listen
              </h2>

              {/* YouTube Embed */}
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
