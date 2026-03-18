import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { BASE_URL } from "@/lib/config";
import "./globals.css";

const borna = localFont({
  src: [
    {
      path: "../fonts/borna/borna-medium-webfont.woff",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-borna",
});

export const metadata: Metadata = {
  title: "How I Learned Finnish - with Ohe",
  description:
    "Learn Finnish fluently as an adult immigrant. Documenting real success stories of adult Finnish learners and sharing practical strategies to achieve fluency.",
  keywords:
    "Finnish, language learning, immigrant, fluency, podcast, YouTube, adult learning",
  authors: [{ name: "Ohe" }],
  alternates: { canonical: BASE_URL },
  icons: {
    icon: "/HILF_logo.png",
    shortcut: "/HILF_logo.png",
    apple: "/HILF_logo.png",
  },
  openGraph: {
    title: "How I Learned Finnish - with Ohe",
    description:
      "Learn Finnish fluently as an adult immigrant through real success stories and practical strategies.",
    url: BASE_URL,
    type: "website",
    siteName: "How I Learned Finnish",
    locale: "en_US",
    images: [
      {
        url: `${BASE_URL}/HILF_logo.png`,
        width: 1200,
        height: 630,
        alt: "How I Learned Finnish - with Ohe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How I Learned Finnish - with Ohe",
    description:
      "Learn Finnish fluently as an adult immigrant through real success stories and practical strategies.",
    images: [`${BASE_URL}/HILF_logo.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/HILF_logo.png" type="image/png" />
        <link rel="shortcut icon" href="/HILF_logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/HILF_logo.png" />
      </head>
      <body className={borna.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
