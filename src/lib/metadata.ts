import type { Metadata } from "next";
import { BASE_URL } from "./config";

export const SITE_NAME = "How I Learned Finnish";
export const DEFAULT_OG_IMAGE = `${BASE_URL}/HILF_logo.png`;

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

  return {
    title,
    description: metaDescription,
    ...(author && { authors: [{ name: author }] }),
    alternates: { canonical: url },
    openGraph: {
      title,
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
      title,
      description: metaDescription,
      images: [image],
    },
  };
};
