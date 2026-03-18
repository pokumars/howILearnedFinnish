import type { Metadata } from "next";
import { BASE_URL } from "./config";

export const SITE_NAME = "How I Learned Finnish";
export const DEFAULT_OG_IMAGE = `${BASE_URL}/HILF_logo.png`;
const SITE_SUFFIX = " | How I Learned Finnish";

interface BuildMetadataProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  author?: string;
}

/** Truncate text to maxLen chars, appending ellipsis if cut. */
export function truncate(text: string, maxLen: number): string {
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen - 1).trimEnd() + "…";
}

/**
 * Build a SERP-safe <title> tag (target: 30–70 chars).
 * Prefers "Title | How I Learned Finnish"; drops suffix when it
 * would exceed maxLen, and truncates with ellipsis as a last resort.
 */
export function clampTitle(raw: string, max = 70): string {
  const base = raw.endsWith(SITE_SUFFIX)
    ? raw.slice(0, -SITE_SUFFIX.length)
    : raw;

  const withSuffix = `${base}${SITE_SUFFIX}`;
  if (withSuffix.length <= max) return withSuffix;
  if (base.length <= max) return base;
  return base.slice(0, max - 1).trimEnd() + "…";
}

export const buildMetadata = ({
  title,
  description,
  path,
  ogImage,
  ogType = "website",
  publishedTime,
  author,
}: BuildMetadataProps): Metadata => {
  const url = `${BASE_URL}${path}`;
  const image = ogImage ?? DEFAULT_OG_IMAGE;
  const metaDescription = truncate(description, 160);
  const seoTitle = clampTitle(title);

  return {
    title: seoTitle,
    description: metaDescription,
    ...(author && { authors: [{ name: author }] }),
    alternates: { canonical: url },
    openGraph: {
      title: seoTitle,
      description: metaDescription,
      url,
      type: ogType,
      siteName: SITE_NAME,
      locale: "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: metaDescription,
      images: [image],
    },
  };
};
