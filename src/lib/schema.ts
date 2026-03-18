import { BASE_URL } from "./config";
import { SITE_NAME } from "./metadata";

// ─── Shared types ────────────────────────────────────────────────────────────

export interface BreadcrumbItem {
  name: string;
  url: string;
}

// ─── Breadcrumb ──────────────────────────────────────────────────────────────

export const generateBreadcrumbSchema = (items: BreadcrumbItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

// ─── PodcastEpisode ──────────────────────────────────────────────────────────

export const generatePodcastEpisodeSchema = ({
  id,
  title,
  description,
  thumbnail,
  videoUrl,
  youtubeVideoId,
}: {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  youtubeVideoId: string | null;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: title,
    description,
    url: `${BASE_URL}/episode/${id}`,
    partOfSeries: {
      "@type": "PodcastSeries",
      name: SITE_NAME,
      url: BASE_URL,
    },
    ...(youtubeVideoId && {
      associatedMedia: {
        "@type": "VideoObject",
        name: title,
        description,
        thumbnailUrl: `${BASE_URL}${thumbnail}`,
        embedUrl: `https://www.youtube.com/embed/${youtubeVideoId}`,
        url: videoUrl,
      },
    }),
  };
};

// ─── Article (blog posts) ─────────────────────────────────────────────────────

export const generateArticleSchema = ({
  slug,
  title,
  description,
  author,
  authorUrl,
  publishDate,
  featuredImage,
}: {
  slug: string;
  title: string;
  description: string;
  author: string;
  authorUrl?: string;
  publishDate: string;
  featuredImage?: string;
}) => {
  const url = `${BASE_URL}/blog/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished: publishDate,
    dateModified: publishDate,
    ...(featuredImage && { image: `${BASE_URL}${featuredImage}` }),
    author: {
      "@type": "Person",
      name: author,
      ...(authorUrl && { url: authorUrl }),
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: BASE_URL,
    },
  };
};

// ─── Person (guest profiles) ─────────────────────────────────────────────────

export const generatePersonSchema = ({
  name,
  slug,
  bio,
  profession,
  socialUrl,
}: {
  name: string;
  slug: string;
  bio: string;
  profession: string;
  socialUrl?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    description: bio,
    url: `${BASE_URL}/guests/${slug}`,
    jobTitle: profession,
    ...(socialUrl && { sameAs: [socialUrl] }),
  };
};

// ─── CollectionPage (tag hub pages) ──────────────────────────────────────────

export const generateCollectionPageSchema = ({
  slug,
  heading,
  intro,
  episodes,
}: {
  slug: string;
  heading: string;
  intro: string;
  episodes: { id: number; title: string }[];
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: heading,
    description: intro,
    url: `${BASE_URL}/learn-finnish/${slug}`,
    hasPart: episodes.map((ep) => ({
      "@type": "PodcastEpisode",
      name: ep.title,
      url: `${BASE_URL}/episode/${ep.id}`,
    })),
  };
};

// ─── ItemList (resource category pages) ──────────────────────────────────────

export const generateResourceItemListSchema = ({
  slug,
  heading,
  metaDescription,
  resources,
}: {
  slug: string;
  heading: string;
  metaDescription: string;
  resources: { id: string; name: string; description: string }[];
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: heading,
    description: metaDescription,
    url: `${BASE_URL}/resources/${slug}`,
    itemListElement: resources.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: r.name,
      description: r.description,
    })),
  };
};
