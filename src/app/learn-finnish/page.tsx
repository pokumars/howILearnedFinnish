import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { tagData } from "@/data/tags";
import { episodes } from "@/constants/episodes";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn Finnish | How I Learned Finnish",
  description:
    "Real stories of learning Finnish, organised by life situation and method. Find the guests whose circumstances match yours.",
};

export default function LearnFinnishPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Learn Finnish
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Find guests whose situation matches yours — your life circumstances,
            learning method, or language level. Real stories, not textbooks.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tagData.map((tag) => {
              const count = episodes.filter((e) =>
                e.tags.includes(tag.filterTag)
              ).length;
              return (
                <Link
                  key={tag.slug}
                  href={`/learn-finnish/${tag.slug}`}
                  className="block p-6 border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all duration-200"
                >
                  <h2 className="text-lg font-bold text-gray-800 mb-2">
                    {tag.heading}
                  </h2>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                    {tag.intro}
                  </p>
                  <p className="text-xs font-semibold text-purple-600">
                    {count} episode{count !== 1 ? "s" : ""} →
                  </p>
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
