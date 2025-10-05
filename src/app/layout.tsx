import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "How I Learned Finnish - with Ohe",
  description:
    "Learn Finnish fluently as an adult immigrant. Documenting real success stories of adult Finnish learners and sharing practical strategies to achieve fluency.",
  keywords:
    "Finnish, language learning, immigrant, fluency, podcast, YouTube, adult learning",
  authors: [{ name: "Ohe" }],
  icons: {
    icon: "/HILF_logo.png",
    shortcut: "/HILF_logo.png",
    apple: "/HILF_logo.png",
  },
  openGraph: {
    title: "How I Learned Finnish - with Ohe",
    description:
      "Learn Finnish fluently as an adult immigrant through real success stories and practical strategies.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/HILF_logo.png",
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
    images: ["/HILF_logo.png"],
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
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
