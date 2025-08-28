"use client";

import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog-posts";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Back to Blog Link */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all articles
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.publishDate)}</span>
              </div>
            </div>

            {post.featuredImage && (
              <div className="mb-6">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            )}
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(
                    /^# (.+)$/gm,
                    '<h1 class="text-3xl font-bold text-gray-800 mb-6">$1</h1>'
                  )
                  .replace(
                    /^## (.+)$/gm,
                    '<h2 class="text-2xl font-bold text-gray-800 mb-4 mt-8">$1</h2>'
                  )
                  .replace(
                    /^### (.+)$/gm,
                    '<h3 class="text-xl font-bold text-gray-800 mb-3 mt-6">$1</h3>'
                  )
                  .replace(
                    /^#### (.+)$/gm,
                    '<h4 class="text-lg font-bold text-gray-800 mb-2 mt-4">$1</h4>'
                  )
                  .replace(
                    /\*\*(.+?)\*\*/g,
                    '<strong class="font-semibold">$1</strong>'
                  )
                  .replace(/\*(.+?)\*/g, '<em class="italic">$1</em>')
                  .replace(/^- (.+)$/gm, '<li class="ml-4">$1</li>')
                  .replace(/^(\d+)\. (.+)$/gm, '<li class="ml-4">$1. $2</li>')
                  .replace(/\n\n/g, '</p><p class="mb-4">')
                  .replace(/^(.+)$/gm, (match) => {
                    if (
                      match.startsWith("<h") ||
                      match.startsWith("<li") ||
                      match.startsWith("<p")
                    ) {
                      return match;
                    }
                    if (match.trim() === "") {
                      return "";
                    }
                    return `<p class="mb-4">${match}</p>`;
                  })
                  .replace(/<p class="mb-4"><\/p>/g, "")
                  .replace(/<p class="mb-4"><h/g, "<h")
                  .replace(/<\/h><\/p>/g, "</h>")
                  .replace(
                    /<p class="mb-4"><li/g,
                    '<ul class="list-disc mb-4"><li'
                  )
                  .replace(/<\/li><\/p>/g, "</li></ul>")
                  .replace(/<p class="mb-4"><\/ul>/g, "</ul>"),
              }}
            />
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}
