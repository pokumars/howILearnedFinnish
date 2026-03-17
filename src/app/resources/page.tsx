import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { resources } from "@/data/resources";
import { resourceCategoryMeta } from "@/data/resource-categories";
import ResourcesClient from "@/components/ResourcesClient";
import { buildMetadata } from "@/lib/metadata";
import { BASE_URL } from "@/lib/config";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Finnish Learning Resources | How I Learned Finnish",
  description:
    "Every book, app, podcast, TV show, and tool mentioned across all episodes — with the person who recommended it and the episode where they discuss it.",
  path: "/resources",
});

const resourceHubSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Finnish Learning Resources",
  description:
    "Every book, app, podcast, TV show, and tool mentioned across all How I Learned Finnish episodes.",
  url: `${BASE_URL}/resources`,
  hasPart: resourceCategoryMeta.map((cat) => ({
    "@type": "ItemList",
    name: cat.heading,
    url: `${BASE_URL}/resources/${cat.slug}`,
  })),
};

export default function ResourcesPage() {
  const totalResources = resources.length;

  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={resourceHubSchema} />
      <Navigation />

      {/* Hero */}
      <section className="bg-purple-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Finnish Learning Resources</h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl">
            Every book, app, podcast, and tool mentioned across all episodes — with the person who
            recommended it and where you can hear them talk about it.
          </p>
          <p className="mt-4 text-purple-200 text-sm">
            {totalResources} resources across {resourceCategoryMeta.length} categories
          </p>
        </div>
      </section>

      {/* Browse by category */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Browse by category:</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {resourceCategoryMeta.map((cat) => {
              const count = resources.filter((r) => r.category === cat.category).length;
              return (
                <Link
                  key={cat.slug}
                  href={`/resources/${cat.slug}`}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-sm transition-all duration-200 group"
                >
                  <span className="font-medium text-gray-800 text-sm group-hover:text-purple-700 transition-colors">
                    {cat.category}
                  </span>
                  <span className="text-xs text-purple-600 font-medium ml-2 shrink-0">
                    {count} →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client-side filter + resources list */}
      <ResourcesClient />

      <Footer />
    </div>
  );
}
