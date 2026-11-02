import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EpisodeCard from "@/components/EpisodeCard";
import EpisodeTile from "@/components/EpisodeTile";
import { episodes } from "@/constants/episodes";
import { blogPosts } from "@/data/blog-posts";
import { tagData } from "@/data/tags";
import { getArchivePicks } from "@/lib/archive-picks";

// Rebuild at most once a day so the archive picks rotate
export const revalidate = 86400;

// Situations in the visitor's own words, each pointing at its /learn-finnish hub
const startHere = [
  { slug: "a1-to-c-level", label: "I'm starting from zero" },
  { slug: "b1-to-c-level", label: "I'm stuck at intermediate" },
  { slug: "as-a-parent", label: "I'm a parent" },
  { slug: "as-a-student", label: "I'm a student" },
  { slug: "with-a-finnish-speaking-partner", label: "My partner speaks Finnish" },
  { slug: "without-a-finnish-speaking-partner", label: "My partner doesn't speak Finnish" },
];

export default function Home() {
  const latestPost = [...blogPosts].sort((a, b) =>
    b.publishDate.localeCompare(a.publishDate)
  )[0];

  const [latestEpisode, ...archive] = [...episodes].sort((a, b) => b.id - a.id);
  const archivePicks = getArchivePicks(archive, 3);
  const countryCount = new Set(
    episodes.map((e) => e.guest?.from).filter(Boolean)
  ).size;

  const startHereCards = startHere.map((item) => {
    const tag = tagData.find((t) => t.slug === item.slug);
    const count = tag
      ? episodes.filter((e) => e.tags.includes(tag.filterTag)).length
      : 0;
    return { ...item, count };
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-purple-600 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Learn Finnish from people who actually did it
            </h1>
            <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto md:mx-0 mb-8">
              Is Finnish hard, or do you just not know anyone who&apos;s done it as an
              adult? Meet people who did, and hear what worked, what didn&apos;t, and
              how long it took.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href="#start-here"
                className="inline-flex items-center justify-center gap-2 bg-white text-purple-700 px-6 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors duration-200"
                data-umami-event="hero_click"
                data-umami-event-target="start_here"
              >
                Find your situation
                <ArrowDown className="w-4 h-4" />
              </a>
              <Link
                href={`/episode/${latestEpisode.id}`}
                className="inline-flex items-center justify-center gap-2 border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200"
                data-umami-event="hero_click"
                data-umami-event-target="latest_episode"
              >
                Watch the latest episode
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="mt-6 text-sm text-purple-200">
              {episodes.length} episodes · guests from {countryCount} countries
            </p>
          </div>
        </div>
      </section>

      {/* Latest Article */}
      {latestPost && (
        <section className="bg-purple-50 border-b border-purple-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href={`/blog/${latestPost.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-purple-900"
              data-umami-event="blog_post_opened"
              data-umami-event-slug={latestPost.slug}
              data-umami-event-title={latestPost.title}
              data-umami-event-source="homepage_latest_article"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-purple-600">
                Latest article
              </span>
              <span className="font-medium group-hover:underline">
                {latestPost.title}
              </span>
              <ArrowRight className="hidden sm:block w-4 h-4 text-purple-600 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      )}

      {/* Start Here */}
      <section id="start-here" className="py-12 bg-white scroll-mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Start here</h2>
          <p className="text-gray-600 mb-6">
            Pick the situation closest to yours and hear from people who were in it.
          </p>
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {startHereCards.map((item) => (
              <Link
                key={item.slug}
                href={`/learn-finnish/${item.slug}`}
                className="group flex items-center justify-between gap-3 p-4 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-sm transition-all duration-200"
                data-umami-event="start_here_click"
                data-umami-event-situation={item.slug}
              >
                <div>
                  <p className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-200">
                    {item.label}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {item.count} episode{item.count !== 1 ? "s" : ""}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 shrink-0 text-purple-600 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Episode */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest episode</h2>
          <EpisodeCard episode={latestEpisode} />
        </div>
      </section>

      {/* From the Archive */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">From the archive</h2>
          <p className="text-gray-600 mb-6">A few earlier conversations, different every day.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {archivePicks.map((episode) => (
              <EpisodeTile
                key={episode.id}
                episode={episode}
                source="homepage_archive_pick"
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/episode"
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200"
              data-umami-event="all_episodes_click"
              data-umami-event-source="homepage"
            >
              See all {episodes.length} episodes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
