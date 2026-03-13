import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { episodes } from "@/constants/episodes";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import PillButton from "@/components/pillButton";

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

  return {
    title: `${guest.name} | How I Learned Finnish`,
    description: guest.bio,
  };
}

export default async function GuestPage({ params }: GuestPageProps) {
  const { slug } = await params;
  const episode = episodes.find((e) => e.guest?.slug === slug);
  if (!episode?.guest) notFound();

  const { guest } = episode;

  return (
    <div className="min-h-screen bg-white">
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
            {guest.currentLevel && (
              <span className="text-sm font-semibold bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
                Finnish level: {guest.currentLevel}
              </span>
            )}
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

          {/* Their episode */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Episode featuring {guest.name.split(" ")[0]}
            </h2>
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-purple-300 hover:shadow-md transition-all duration-200">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <Link href={`/episode/${episode.id}`} className="block">
                    <Image
                      src={episode.thumbnail}
                      alt={episode.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>
                <div className="md:w-3/5 p-6">
                  <Link href={`/episode/${episode.id}`}>
                    <h3 className="text-xl font-bold text-gray-800 hover:text-purple-600 transition-colors mb-3">
                      {episode.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {episode.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {episode.tags.map((tag) => (
                      <PillButton
                        key={tag}
                        text={tag}
                        activated={false}
                      />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {episode.platforms.map((platform) => (
                      <a
                        key={platform.name}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 bg-purple-50 px-3 py-1.5 rounded-lg border border-purple-200 hover:bg-purple-100 transition-colors text-sm font-medium text-gray-700"
                      >
                        {platform.name}
                        <ExternalLink className="w-3 h-3 text-gray-400" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
