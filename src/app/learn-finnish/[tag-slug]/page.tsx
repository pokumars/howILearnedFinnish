import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { tagData } from "@/data/tags";
import { episodes } from "@/constants/episodes";
import EpisodeCard from "@/components/EpisodeCard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { buildMetadata, truncate } from "@/lib/metadata";
import {
  generateCollectionPageSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { BASE_URL } from "@/lib/config";

interface TagHubPageProps {
  params: Promise<{ "tag-slug": string }>;
}

export async function generateStaticParams() {
  return tagData.map((tag) => ({ "tag-slug": tag.slug }));
}

export async function generateMetadata({
  params,
}: TagHubPageProps): Promise<Metadata> {
  const { "tag-slug": tagSlug } = await params;
  const tag = tagData.find((t) => t.slug === tagSlug);
  if (!tag) return { title: "Not Found" };

  const description = truncate(tag.intro, 155);
  return buildMetadata({
    title: `${tag.label} | How I Learned Finnish`,
    description,
    path: `/learn-finnish/${tag.slug}`,
  });
}

export default async function TagHubPage({ params }: TagHubPageProps) {
  const { "tag-slug": tagSlug } = await params;
  const tag = tagData.find((t) => t.slug === tagSlug);
  if (!tag) notFound();

  const tagEpisodes = episodes.filter((e) => e.tags.includes(tag.filterTag));

  const collectionSchema = generateCollectionPageSchema({
    slug: tag.slug,
    heading: tag.heading,
    intro: tag.intro,
    episodes: tagEpisodes.map((e) => ({ id: e.id, title: e.title })),
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Learn Finnish", url: `${BASE_URL}/learn-finnish` },
    { name: tag.label, url: `${BASE_URL}/learn-finnish/${tag.slug}` },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={collectionSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navigation />

      {/* Back link */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/learn-finnish"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            All topics
          </Link>
        </div>
      </section>

      {/* Header */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {tag.heading}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            {tag.intro}
          </p>
          {tag.body && (
            <div className="mt-6 max-w-3xl space-y-4">
              {tag.body.map((paragraph, i) => (
                <p key={i} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
          <p className="mt-6 text-sm text-gray-400">
            {tagEpisodes.length} episode{tagEpisodes.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* Episodes */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {tagEpisodes.length > 0 ? (
            <div className="space-y-6">
              {tagEpisodes.map((episode) => (
                <EpisodeCard key={episode.id} episode={episode} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No episodes yet for this topic.</p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
