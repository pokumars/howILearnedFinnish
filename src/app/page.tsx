import HomeClient from "@/components/HomeClient";
import { blogPosts } from "@/data/blog-posts";

export default function Home() {
  const latest = [...blogPosts].sort((a, b) =>
    b.publishDate.localeCompare(a.publishDate)
  )[0];

  return (
    <HomeClient
      latestPost={latest && { slug: latest.slug, title: latest.title }}
    />
  );
}
