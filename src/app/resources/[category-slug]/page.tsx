import { notFound } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { resources } from "@/data/resources";
import { resourceCategoryMeta } from "@/data/resource-categories";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import {
  generateResourceItemListSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { BASE_URL } from "@/lib/config";

interface CategoryPageProps {
  params: Promise<{ "category-slug": string }>;
}

export function generateStaticParams() {
  return resourceCategoryMeta.map((cat) => ({ "category-slug": cat.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { "category-slug": slug } = await params;
  const cat = resourceCategoryMeta.find((c) => c.slug === slug);
  if (!cat) return { title: "Not Found" };

  return buildMetadata({
    title: `${cat.heading} | How I Learned Finnish`,
    description: cat.metaDescription,
    path: `/resources/${cat.slug}`,
  });
}

export default async function ResourceCategoryPage({ params }: CategoryPageProps) {
  const { "category-slug": slug } = await params;
  const cat = resourceCategoryMeta.find((c) => c.slug === slug);
  if (!cat) notFound();

  const categoryResources = resources.filter((r) => r.category === cat.category);
  const totalMentions = categoryResources.reduce((sum, r) => sum + r.mentions.length, 0);
  const uniqueGuests = new Set(
    categoryResources.flatMap((r) => r.mentions.map((m) => m.personName))
  ).size;

  const otherCategories = resourceCategoryMeta.filter((c) => c.slug !== slug);

  const itemListSchema = generateResourceItemListSchema({
    slug: cat.slug,
    heading: cat.heading,
    metaDescription: cat.metaDescription,
    resources: categoryResources.map((r) => ({
      id: r.id,
      name: r.name,
      description: r.description,
    })),
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Resources", url: `${BASE_URL}/resources` },
    { name: cat.heading, url: `${BASE_URL}/resources/${cat.slug}` },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={itemListSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navigation />

      {/* Breadcrumbs */}
      <section className="bg-gray-50 py-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Resources", href: "/resources" },
              { label: cat.heading, href: `/resources/${cat.slug}` },
            ]}
          />
        </div>
      </section>

      {/* Header */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{cat.heading}</h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">{cat.intro}</p>
          <p className="mt-6 text-sm text-gray-400">
            {categoryResources.length} resource{categoryResources.length !== 1 ? "s" : ""} ·{" "}
            {totalMentions} mention{totalMentions !== 1 ? "s" : ""} · {uniqueGuests} guest
            {uniqueGuests !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* Resources list */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categoryResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3"
              >
                <div>
                  <h2 className="font-semibold text-gray-900 text-base leading-snug mb-1">
                    {resource.name}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed">{resource.description}</p>
                </div>

                <div className="mt-auto pt-3 border-t border-gray-100 flex flex-col gap-1">
                  {resource.mentions.map((mention, i) => (
                    <p key={i} className="text-xs text-gray-500">
                      Mentioned by{" "}
                      <span className="font-medium text-gray-700">{mention.personName}</span> in{" "}
                      <Link
                        href={`/episode/${mention.episodeId}`}
                        className="text-purple-600 hover:text-purple-800 font-medium hover:underline"
                      >
                        Episode {mention.episodeId}
                      </Link>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other categories */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Browse other resource types</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {otherCategories.map((other) => {
              const count = resources.filter((r) => r.category === other.category).length;
              return (
                <Link
                  key={other.slug}
                  href={`/resources/${other.slug}`}
                  className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-sm transition-all duration-200"
                >
                  <p className="font-medium text-gray-800 text-sm leading-snug">{other.category}</p>
                  <p className="text-xs text-purple-600 mt-1">{count} resource{count !== 1 ? "s" : ""} →</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
