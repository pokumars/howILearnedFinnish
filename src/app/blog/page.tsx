import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogClient from "@/components/BlogClient";
import { buildMetadata } from "@/lib/metadata";
import { BASE_URL } from "@/lib/config";
import { blogPosts } from "@/data/blog-posts";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Blog & Articles | How I Learned Finnish",
  description:
    "In-depth articles on Finnish language learning strategies, methods, and advice from the How I Learned Finnish podcast.",
  path: "/blog",
});

const blogHubSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "How I Learned Finnish — Blog & Articles",
  description:
    "In-depth articles on Finnish language learning strategies, methods, and advice.",
  url: `${BASE_URL}/blog`,
  blogPost: blogPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: `${BASE_URL}/blog/${post.slug}`,
    datePublished: post.publishDate,
    author: { "@type": "Person", name: post.author },
  })),
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={blogHubSchema} />
      <Navigation />

      {/* Hero */}
      <section className="bg-purple-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Blog & Articles</h1>
          <p className="text-xl md:text-2xl">
            Educational zone for in-depth strategies and language-learning advice
          </p>
          <p className="mt-4 text-purple-200 text-sm">
            {blogPosts.length} article{blogPosts.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* Client-side search + list */}
      <BlogClient />

      <Footer />
    </div>
  );
}
