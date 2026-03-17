import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { episodes } from "@/constants/episodes";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import EpisodeCard from "@/components/EpisodeCard";
import { buildMetadata } from "@/lib/metadata";
import { generatePersonSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { BASE_URL } from "@/lib/config";

interface GuestPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: GuestPageProps): Promise<Metadata> {
  const { slug } = await params;
  const episode = episodes.find((e) => e.guest?.slug === slug);
  if (!episode?.guest) return { title: "Guest Not Found" };
  const { guest } = episode;

  return buildMetadata({
    title: `${guest.name} | How I Learned Finnish`,
    description: guest.bio,
    path: `/guests/${guest.slug}`,
  });
}

export default async function GuestPage({ params }: GuestPageProps) {
  const { slug } = await params;
  const episode = episodes.find((e) => e.guest?.slug === slug);
  if (!episode?.guest) notFound();

  const { guest } = episode;

  const personSchema = generatePersonSchema({
    name: guest.name,
    slug: guest.slug,
    bio: guest.bio,
    profession: guest.profession,
    socialUrl: guest.socialUrl,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Guests", url: `${BASE_URL}/guests` },
    { name: guest.name, url: `${BASE_URL}/guests/${guest.slug}` },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={personSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navigation />

      {/* Back link */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/guests"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            All guests
          </Link>
        </div>
      </section>

      {/* Guest Header */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-1">
                {guest.name}
              </h1>
              <p className="text-lg text-gray-500">
                {guest.profession}
                {guest.from ? ` · From ${guest.from}` : ""}
                {guest.movedToFinland
                  ? ` · In Finland since ${guest.movedToFinland}`
                  : ""}
              </p>
            </div>
          </div>

          {/* Bio */}
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {guest.bio}
          </p>

          {/* Social link */}
          {guest.socialUrl && (
            <a
              href={guest.socialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium mb-10"
            >
              Follow {guest.name}
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

        </div>
      </section>

      {/* Their episode */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Episode featuring {guest.name.split(" ")[0]}
          </h2>
          <EpisodeCard episode={episode} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
