import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "How I Learned Finnish - with Ohe",
  description:
    "Learn Finnish fluently as an adult immigrant. Documenting real success stories of adult Finnish learners and sharing practical strategies to achieve fluency.",
  keywords:
    "Finnish, language learning, immigrant, fluency, podcast, YouTube, adult learning",
  authors: [{ name: "Ohe" }],
  openGraph: {
    title: "How I Learned Finnish - with Ohe",
    description:
      "Learn Finnish fluently as an adult immigrant through real success stories and practical strategies.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
