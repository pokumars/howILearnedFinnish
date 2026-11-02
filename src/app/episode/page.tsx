import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import EpisodeBrowser from "@/components/EpisodeBrowser";
import { episodes } from "@/constants/episodes";
import { buildMetadata } from "@/lib/metadata";
import { BASE_URL } from "@/lib/config";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "All Episodes",
  description:
    "Every episode of the How I Learned Finnish podcast: real people who learned Finnish as adults explain the methods, resources and habits that got them there.",
  path: "/episode",
});

const sortedEpisodes = [...episodes].sort((a, b) => b.id - a.id);

const episodeListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "How I Learned Finnish — All Episodes",
  url: `${BASE_URL}/episode`,
  itemListElement: sortedEpisodes.map((e, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${BASE_URL}/episode/${e.id}`,
    name: e.title,
  })),
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: BASE_URL },
  { name: "Episodes", url: `${BASE_URL}/episode` },
]);

export default function EpisodesPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={episodeListSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navigation />

      <section className="bg-gray-50 py-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Episodes", href: "/episode" },
            ]}
          />
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">All episodes</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            In every episode, someone who learned Finnish as an adult explains what actually
            worked for them, from their first words to working, studying and living in Finnish.
          </p>
          <p className="mt-3 text-sm text-gray-400">
            {sortedEpisodes.length} episode{sortedEpisodes.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      <EpisodeBrowser episodes={sortedEpisodes} />

      <Footer />
    </div>
  );
}
