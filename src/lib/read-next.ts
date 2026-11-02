import { episodes } from "@/constants/episodes";
import { blogPosts } from "@/data/blog-posts";
import { resourceCategoryMeta } from "@/data/resource-categories";

export type ReadNextKind = "episode" | "article" | "guest" | "resources";

export interface ReadNextItem {
  href: string;
  kind: ReadNextKind;
  title: string;
  description: string;
}

// Turns an internal path ("/episode/5", "/blog/<slug>", "/guests/<slug>",
// "/resources/<slug>") into a card using the site's own data, so titles stay
// in sync when content is renamed. Unknown paths are dropped.
export function resolveReadNext(path: string): ReadNextItem | null {
  const [, section, slug] = path.split("/");

  if (section === "episode") {
    const episode = episodes.find((e) => e.id === Number(slug));
    if (!episode) return null;
    return {
      href: path,
      kind: "episode",
      title: episode.title,
      description: episode.metaDescription ?? episode.description,
    };
  }

  if (section === "blog") {
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return null;
    return {
      href: path,
      kind: "article",
      title: post.title,
      description: post.metaDescription || post.excerpt,
    };
  }

  if (section === "guests") {
    const guest = episodes.find((e) => e.guest?.slug === slug)?.guest;
    if (!guest) return null;
    return {
      href: path,
      kind: "guest",
      title: guest.name,
      description: guest.metaDescription ?? guest.bio,
    };
  }

  if (section === "resources") {
    const cat = resourceCategoryMeta.find((c) => c.slug === slug);
    if (!cat) return null;
    return {
      href: path,
      kind: "resources",
      title: cat.heading,
      description: cat.metaDescription,
    };
  }

  return null;
}

export function resolveReadNextList(paths: string[]): ReadNextItem[] {
  return paths
    .map(resolveReadNext)
    .filter((item): item is ReadNextItem => item !== null);
}
