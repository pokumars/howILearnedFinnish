import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog-posts";
import { Calendar, User } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";
import { marked } from "marked";
import { Metadata } from "next";
import { BASE_URL } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";

// Configure marked options for better HTML output
marked.setOptions({
  breaks: true,
  gfm: true,
});

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const description = post.metaDescription || post.excerpt;
  return buildMetadata({
    title: post.title,
    description,
    path: `/blog/${post.slug}`,
    ogImage: post.featuredImage ? `${BASE_URL}${post.featuredImage}` : undefined,
    ogType: "article",
    publishedTime: post.publishDate,
    author: post.author,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

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

  // Process markdown content with proper HTML output
  const processedContent = marked(post.content);

  const articleSchema = generateArticleSchema({
    slug: post.slug,
    title: post.title,
    description: post.metaDescription || post.excerpt,
    author: post.author,
    authorUrl: post.authorUrl,
    publishDate: post.publishDate,
    featuredImage: post.featuredImage,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Blog", url: `${BASE_URL}/blog` },
    { name: post.title, url: `${BASE_URL}/blog/${post.slug}` },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navigation />

      {/* Breadcrumbs */}
      <section className="bg-gray-50 py-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title, href: `/blog/${post.slug}` },
            ]}
          />
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
                {post.authorUrl ? (
                  <a
                    href={post.authorUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 transition-colors duration-200"
                  >
                    {post.author}
                  </a>
                ) : (
                  <span>{post.author}</span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.publishDate)}</span>
              </div>
            </div>

            {post.featuredImage && (
              <div className="mb-6">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  width={800}
                  height={256}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            )}
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div
              className="markdown-content text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: processedContent,
              }}
            />
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}
