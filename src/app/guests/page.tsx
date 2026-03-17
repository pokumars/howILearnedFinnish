import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { episodes } from "@/constants/episodes";
import Link from "next/link";
import Flag from "@/components/Flag";
import { buildMetadata } from "@/lib/metadata";
import { BASE_URL } from "@/lib/config";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Guests | How I Learned Finnish",
  description:
    "Meet the people who share their Finnish language learning stories on the How I Learned Finnish podcast.",
  path: "/guests",
});

const guestListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "How I Learned Finnish — Guests",
  description: "Real people who learned Finnish as adults and share their stories on the podcast.",
  url: `${BASE_URL}/guests`,
  itemListElement: episodes
    .filter((e) => e.guest)
    .map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Person",
        name: e.guest!.name,
        url: `${BASE_URL}/guests/${e.guest!.slug}`,
        jobTitle: e.guest!.profession,
        description: e.guest!.bio,
      },
    })),
};

export default function GuestsPage() {
  const guests = episodes.filter((e) => e.guest).map((e) => ({ episode: e, guest: e.guest! }));

  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={guestListSchema} />
      <Navigation />

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Guests</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Every episode features a real person who learned Finnish as an adult. These are their
            stories.
          </p>
          <p className="mt-3 text-sm text-gray-400">
            {guests.length} guest{guests.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {guests.map(({ episode, guest }) => (
              <Link
                key={guest.slug}
                href={`/guests/${guest.slug}`}
                className="block p-6 border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">{guest.name}</h2>
                    <p className="text-sm text-gray-500 mt-0.5">
                      {guest.profession}
                      {guest.from && (
                        <>
                          {" "}
                          ·{" "}
                          <Flag country={guest.from} className="mx-1 align-middle" />
                          {guest.from}
                        </>
                      )}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">{guest.bio}</p>
                <p className="text-xs text-purple-600 font-medium">Episode {episode.id} →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
