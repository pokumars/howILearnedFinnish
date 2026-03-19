import { MetadataRoute } from "next";
import { episodes } from "@/constants/episodes";
import { blogPosts } from "@/data/blog-posts";
import { tagData } from "@/data/tags";
import { resourceCategoryMeta } from "@/data/resource-categories";
import { BASE_URL } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BASE_URL;

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date("2026-03-17"),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-02-10"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date("2026-03-17"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/learn-finnish`,
      lastModified: new Date("2026-03-17"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/quick-links`,
      lastModified: new Date("2025-12-17"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/guests`,
      lastModified: new Date("2026-03-17"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  // Episode pages
  const episodePages = episodes.map((episode) => ({
    url: `${baseUrl}/episode/${episode.id}`,
    lastModified: new Date("2026-03-18"),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Blog post pages
  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Guest pages
  const guestPages = episodes
    .filter((e) => e.guest)
    .map((e) => ({
      url: `${baseUrl}/guests/${e.guest!.slug}`,
      lastModified: new Date("2026-03-17"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  // Tag hub pages
  const tagHubPages = tagData.map((tag) => ({
    url: `${baseUrl}/learn-finnish/${tag.slug}`,
    lastModified: new Date("2026-03-17"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Resource category pages
  const resourceCategoryPages = resourceCategoryMeta.map((cat) => ({
    url: `${baseUrl}/resources/${cat.slug}`,
    lastModified: new Date("2026-03-17"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...episodePages,
    ...blogPages,
    ...guestPages,
    ...tagHubPages,
    ...resourceCategoryPages,
  ];
}
