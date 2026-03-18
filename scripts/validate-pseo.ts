import fs from "node:fs";
import path from "node:path";
import { BASE_URL } from "../src/lib/config";
import { truncate } from "../src/lib/metadata";
import sitemap from "../src/app/sitemap";
import { episodes } from "../src/constants/episodes";
import { blogPosts } from "../src/data/blog-posts";
import { tagData } from "../src/data/tags";
import { resourceCategoryMeta } from "../src/data/resource-categories";
import { resources } from "../src/data/resources";
import { transcriptFileByEpisodeId } from "../src/data/transcripts/manifest";

type CheckScope =
  | "all"
  | "thin"
  | "duplicates"
  | "cannibalization"
  | "metadata"
  | "abuse"
  | "prune"
  | "delta";

type IssueLevel = "critical" | "warning" | "info";

type PageType =
  | "static"
  | "episode"
  | "blog"
  | "guest"
  | "tag-hub"
  | "resource-category";

type SchemaType =
  | "BreadcrumbList"
  | "PodcastEpisode"
  | "Article"
  | "Person"
  | "CollectionPage"
  | "ItemList"
  | "Blog"
  | "ItemListHub"
  | "Unknown";

interface PageRecord {
  type: PageType;
  path: string;
  title?: string;
  description?: string;
  h1?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  schemaTypes: SchemaType[];
  bodyText: string;
  firstParagraph?: string;
  keywordsPrimary?: string;
}

interface Issue {
  level: IssueLevel;
  page?: string;
  message: string;
  details?: Record<string, string | number | boolean | null | undefined>;
}

function isScopeEnabled(scope: CheckScope, requested: CheckScope) {
  if (requested === "all" || requested === "prune" || requested === "delta") return true;
  return scope === requested;
}

function readFileIfExists(filePath: string): string | null {
  try {
    return fs.readFileSync(filePath, "utf-8");
  } catch {
    return null;
  }
}

function normalizeWhitespace(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

function stripMarkdown(md: string): string {
  let s = md;
  s = s.replace(/```[\s\S]*?```/g, " ");
  s = s.replace(/`[^`]*`/g, " ");
  s = s.replace(/!\[[^\]]*]\([^)]*\)/g, " ");
  s = s.replace(/\[([^\]]+)]\(([^)]+)\)/g, "$1");
  s = s.replace(/\[([^\]]+)]\[[^\]]+]/g, "$1");
  s = s.replace(/^\s{0,3}#{1,6}\s+/gm, "");
  s = s.replace(/^\s{0,3}>\s?/gm, "");
  s = s.replace(/^\s*[-*+]\s+/gm, "");
  s = s.replace(/^\s*\d+\.\s+/gm, "");
  s = s.replace(/[*_]{1,3}/g, "");
  return normalizeWhitespace(s);
}

function tokenize(text: string): string[] {
  return normalizeWhitespace(
    text
      .toLowerCase()
      .replace(/https?:\/\/\S+/g, " ")
      .replace(/&[a-z]+;/g, " ")
      .replace(/[^a-z0-9äöå]+/gi, " ")
  )
    .split(" ")
    .map((t) => t.trim())
    .filter((t) => t.length >= 2);
}

function uniqueWordCount(text: string): number {
  return new Set(tokenize(text)).size;
}

function wordCount(text: string): number {
  return tokenize(text).length;
}

function wordNgrams(tokens: string[], n: number): Set<string> {
  const out = new Set<string>();
  if (tokens.length < n) return out;
  for (let i = 0; i <= tokens.length - n; i++) out.add(tokens.slice(i, i + n).join(" "));
  return out;
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 && b.size === 0) return 1;
  if (a.size === 0 || b.size === 0) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / (a.size + b.size - inter);
}

function detectFillerIntro(text: string): boolean {
  const t = text.toLowerCase();
  const patterns = [
    "in today's world",
    "when it comes to",
    "if you're looking for",
    "in the modern world",
    "now more than ever",
  ];
  return patterns.some((p) => t.includes(p));
}

function extractFirstParagraph(text: string): string | undefined {
  const parts = text
    .split(/\n{2,}/)
    .map((p) => normalizeWhitespace(stripMarkdown(p)))
    .filter(Boolean);
  return parts[0];
}

function schemaTypesForPageType(type: PageType): SchemaType[] {
  switch (type) {
    case "episode":
      return ["PodcastEpisode", "BreadcrumbList"];
    case "blog":
      return ["Article", "BreadcrumbList"];
    case "guest":
      return ["Person", "BreadcrumbList"];
    case "tag-hub":
      return ["CollectionPage", "BreadcrumbList"];
    case "resource-category":
      return ["ItemList", "BreadcrumbList"];
    case "static":
      return ["Unknown"];
  }
}

function getExpectedCanonical(pagePath: string) {
  return `${BASE_URL}${pagePath}`;
}

function buildPages(): PageRecord[] {
  const pages: PageRecord[] = [];

  // Static/hub pages (best-effort)
  pages.push({
    type: "static",
    path: "/",
    title: "How I Learned Finnish - with Ohe",
    description:
      "Learn Finnish fluently as an adult immigrant. Documenting real success stories of adult Finnish learners and sharing practical strategies to achieve fluency.",
    h1: "Learn Finnish: Less Effort and Real Results",
    canonical: getExpectedCanonical("/"),
    ogTitle: "How I Learned Finnish - with Ohe",
    ogDescription:
      "Learn Finnish fluently as an adult immigrant through real success stories and practical strategies.",
    ogUrl: getExpectedCanonical("/"),
    schemaTypes: ["Unknown"],
    bodyText:
      "Learn Finnish: Less Effort and Real Results. Filter episodes by life circumstance and listen to real success stories of adult Finnish learners.",
    firstParagraph:
      "Learn Finnish: Less Effort and Real Results. Is Finnish hard or you just don't know how to go about it? I got you covered.",
    keywordsPrimary: "How I Learned Finnish",
  });

  pages.push({
    type: "static",
    path: "/blog",
    title: "Blog & Articles | How I Learned Finnish",
    description:
      "In-depth articles on Finnish language learning strategies, methods, and advice from the How I Learned Finnish podcast.",
    h1: "Blog & Articles",
    canonical: getExpectedCanonical("/blog"),
    ogTitle: "Blog & Articles | How I Learned Finnish",
    ogDescription:
      "In-depth articles on Finnish language learning strategies, methods, and advice from the How I Learned Finnish podcast.",
    ogUrl: getExpectedCanonical("/blog"),
    schemaTypes: ["Blog"],
    bodyText:
      "Blog & Articles. In-depth strategies and language-learning advice from the How I Learned Finnish podcast.",
    firstParagraph: "Educational zone for in-depth strategies and language-learning advice",
    keywordsPrimary: "Blog & Articles",
  });

  pages.push({
    type: "static",
    path: "/resources",
    title: "Finnish Learning Resources | How I Learned Finnish",
    description:
      "Every book, app, podcast, TV show, and tool mentioned across all episodes — with the person who recommended it and the episode where they discuss it.",
    h1: "Finnish Learning Resources",
    canonical: getExpectedCanonical("/resources"),
    ogTitle: "Finnish Learning Resources | How I Learned Finnish",
    ogDescription:
      "Every book, app, podcast, TV show, and tool mentioned across all episodes — with the person who recommended it and the episode where they discuss it.",
    ogUrl: getExpectedCanonical("/resources"),
    schemaTypes: ["CollectionPage"],
    bodyText:
      "Finnish Learning Resources. Browse by category to find books, apps, podcasts, TV shows, and tools mentioned across all episodes.",
    firstParagraph:
      "Every book, app, podcast, and tool mentioned across all episodes — with the person who recommended it and where you can hear them talk about it.",
    keywordsPrimary: "Finnish learning resources",
  });

  pages.push({
    type: "static",
    path: "/learn-finnish",
    title: "Learn Finnish | How I Learned Finnish",
    description:
      "Real stories of learning Finnish, organised by life situation and method. Find the guests whose circumstances match yours.",
    h1: "Learn Finnish",
    canonical: getExpectedCanonical("/learn-finnish"),
    ogTitle: "Learn Finnish | How I Learned Finnish",
    ogDescription:
      "Real stories of learning Finnish, organised by life situation and method. Find the guests whose circumstances match yours.",
    ogUrl: getExpectedCanonical("/learn-finnish"),
    schemaTypes: ["CollectionPage"],
    bodyText:
      "Learn Finnish. Find guests whose situation matches yours — life circumstances, learning method, or language level.",
    firstParagraph:
      "Find guests whose situation matches yours — your life circumstances, learning method, or language level.",
    keywordsPrimary: "Learn Finnish",
  });

  pages.push({
    type: "static",
    path: "/guests",
    title: "Guests | How I Learned Finnish",
    description:
      "Meet the people who share their Finnish language learning stories on the How I Learned Finnish podcast.",
    h1: "Guests",
    canonical: getExpectedCanonical("/guests"),
    ogTitle: "Guests | How I Learned Finnish",
    ogDescription:
      "Meet the people who share their Finnish language learning stories on the How I Learned Finnish podcast.",
    ogUrl: getExpectedCanonical("/guests"),
    schemaTypes: ["ItemListHub"],
    bodyText:
      "Guests. Real people who learned Finnish as adults and share their stories on the podcast.",
    firstParagraph: "Every episode features a real person who learned Finnish as an adult.",
    keywordsPrimary: "How I Learned Finnish guests",
  });

  // Quick links page does not define page-level metadata in this repo.
  pages.push({
    type: "static",
    path: "/quick-links",
    schemaTypes: ["Unknown"],
    bodyText: "How I Learned Finnish - with Ohe. All important links in one place.",
    firstParagraph: "All important links in one place",
    keywordsPrimary: "Quick links",
  });

  // Episodes
  for (const ep of episodes) {
    const transcriptFile = transcriptFileByEpisodeId[ep.id];
    const transcriptText = transcriptFile
      ? stripMarkdown(
          readFileIfExists(path.join(process.cwd(), "src", "data", "transcripts", transcriptFile)) ??
            ""
        )
      : "";

    const bodyParts: string[] = [
      ep.title,
      ep.description,
      ep.timeToFluency ?? "",
      ...(ep.keyTakeaways ?? []),
      ...(ep.keyMethods ?? []),
      ...(ep.resourcesMentioned ?? []),
      transcriptText,
    ].filter(Boolean);

    pages.push({
      type: "episode",
      path: `/episode/${ep.id}`,
      title: ep.title,
      description: ep.description,
      h1: ep.title,
      canonical: getExpectedCanonical(`/episode/${ep.id}`),
      ogTitle: ep.title,
      ogDescription: ep.description,
      ogUrl: getExpectedCanonical(`/episode/${ep.id}`),
      schemaTypes: schemaTypesForPageType("episode"),
      bodyText: normalizeWhitespace(bodyParts.join("\n\n")),
      firstParagraph: ep.description,
      keywordsPrimary: ep.title.replace(/^\d{3}:\s*/, "").split(" - ")[0],
    });
  }

  // Blog posts
  for (const post of blogPosts) {
    const description = post.metaDescription || post.excerpt;
    const bodyText = normalizeWhitespace(
      stripMarkdown([post.title, post.excerpt, post.content].join("\n\n"))
    );
    pages.push({
      type: "blog",
      path: `/blog/${post.slug}`,
      title: post.title,
      description,
      h1: post.title,
      canonical: getExpectedCanonical(`/blog/${post.slug}`),
      ogTitle: post.title,
      ogDescription: description,
      ogUrl: getExpectedCanonical(`/blog/${post.slug}`),
      schemaTypes: schemaTypesForPageType("blog"),
      bodyText,
      firstParagraph: extractFirstParagraph(post.content) ?? stripMarkdown(post.excerpt),
      keywordsPrimary: post.title,
    });
  }

  // Guest profiles (derived from episodes)
  const guestEpisodes = episodes.filter((e) => e.guest);
  for (const ep of guestEpisodes) {
    const guest = ep.guest!;
    const bodyText = normalizeWhitespace(
      stripMarkdown([guest.name, guest.profession, guest.bio, `Episode ${ep.id}`].join("\n\n"))
    );
    pages.push({
      type: "guest",
      path: `/guests/${guest.slug}`,
      title: `${guest.name} | How I Learned Finnish`,
      description: guest.bio,
      h1: guest.name,
      canonical: getExpectedCanonical(`/guests/${guest.slug}`),
      ogTitle: `${guest.name} | How I Learned Finnish`,
      ogDescription: guest.bio,
      ogUrl: getExpectedCanonical(`/guests/${guest.slug}`),
      schemaTypes: schemaTypesForPageType("guest"),
      bodyText,
      firstParagraph: guest.bio,
      keywordsPrimary: guest.name,
    });
  }

  // Tag hubs
  for (const tag of tagData) {
    const description = truncate(tag.intro, 155);
    const bodyText = normalizeWhitespace(
      stripMarkdown([tag.heading, tag.intro, ...(tag.body ?? [])].join("\n\n"))
    );
    pages.push({
      type: "tag-hub",
      path: `/learn-finnish/${tag.slug}`,
      title: `${tag.label} | How I Learned Finnish`,
      description,
      h1: tag.heading,
      canonical: getExpectedCanonical(`/learn-finnish/${tag.slug}`),
      ogTitle: `${tag.label} | How I Learned Finnish`,
      ogDescription: description,
      ogUrl: getExpectedCanonical(`/learn-finnish/${tag.slug}`),
      schemaTypes: schemaTypesForPageType("tag-hub"),
      bodyText,
      firstParagraph: tag.intro,
      keywordsPrimary: tag.label,
    });
  }

  // Resource category pages
  for (const cat of resourceCategoryMeta) {
    const categoryResources = resources.filter((r) => r.category === cat.category);
    const listText = categoryResources
      .map(
        (r) =>
          `${r.name}. ${r.description}. Mentioned by ${r.mentions
            .map((m) => m.personName)
            .join(", ")}.`
      )
      .join("\n");
    const bodyText = normalizeWhitespace(
      stripMarkdown([cat.heading, cat.intro, cat.metaDescription, listText].join("\n\n"))
    );
    pages.push({
      type: "resource-category",
      path: `/resources/${cat.slug}`,
      title: `${cat.heading} | How I Learned Finnish`,
      description: cat.metaDescription,
      h1: cat.heading,
      canonical: getExpectedCanonical(`/resources/${cat.slug}`),
      ogTitle: `${cat.heading} | How I Learned Finnish`,
      ogDescription: cat.metaDescription,
      ogUrl: getExpectedCanonical(`/resources/${cat.slug}`),
      schemaTypes: schemaTypesForPageType("resource-category"),
      bodyText,
      firstParagraph: cat.intro,
      keywordsPrimary: cat.category,
    });
  }

  return pages;
}

function groupBy<T, K extends string>(items: T[], keyFn: (item: T) => K): Record<K, T[]> {
  const out = {} as Record<K, T[]>;
  for (const it of items) {
    const k = keyFn(it);
    if (!out[k]) out[k] = [];
    out[k].push(it);
  }
  return out;
}

function validateThinContent(pages: PageRecord[]): Issue[] {
  const issues: Issue[] = [];

  // Tag hubs: enforce strong editorial substance.
  for (const p of pages.filter((p) => p.type === "tag-hub")) {
    const wc = wordCount(p.bodyText);
    if (wc < 300) {
      issues.push({
        level: "critical",
        page: p.path,
        message: "Thin content: < 300 words of page-owned editorial text",
        details: { words: wc, uniqueWords: uniqueWordCount(p.bodyText) },
      });
    }
  }

  // Resource category pages are list-format. Flag, but don't block, unless extremely thin.
  for (const p of pages.filter((p) => p.type === "resource-category")) {
    const wc = wordCount(p.bodyText);
    if (wc < 200) {
      issues.push({
        level: "critical",
        page: p.path,
        message: "Extremely thin list page: < 200 words of unique content",
        details: { words: wc, uniqueWords: uniqueWordCount(p.bodyText) },
      });
    } else if (wc < 300) {
      issues.push({
        level: "warning",
        page: p.path,
        message:
          "Potentially thin list page: < 300 words of content (consider longer intro or more items)",
        details: { words: wc, uniqueWords: uniqueWordCount(p.bodyText) },
      });
    }
  }

  return issues;
}

function validateDuplicateContent(pages: PageRecord[]): Issue[] {
  const issues: Issue[] = [];
  const byType = groupBy(
    pages.filter((p) => p.type === "tag-hub" || p.type === "resource-category"),
    (p) => p.type
  );

  for (const [type, list] of Object.entries(byType) as [string, PageRecord[]][]) {
    for (let i = 0; i < list.length; i++) {
      const a = list[i];
      const aTokens = tokenize(a.bodyText);
      const aNgrams = wordNgrams(aTokens, 5);
      for (let j = i + 1; j < list.length; j++) {
        const b = list[j];
        const bTokens = tokenize(b.bodyText);
        const bNgrams = wordNgrams(bTokens, 5);
        const sim = jaccard(aNgrams, bNgrams);
        if (sim >= 0.8) {
          issues.push({
            level: "critical",
            message: `Near-duplicate content (${type}): similarity >= 0.80`,
            details: { a: a.path, b: b.path, similarity: Number(sim.toFixed(3)) },
          });
        } else if (sim >= 0.6) {
          issues.push({
            level: "warning",
            message: `High similarity content (${type}): similarity >= 0.60`,
            details: { a: a.path, b: b.path, similarity: Number(sim.toFixed(3)) },
          });
        }
      }
    }
  }
  return issues;
}

function validateCannibalization(pages: PageRecord[]): Issue[] {
  const issues: Issue[] = [];

  const tagPages = pages.filter((p) => p.type === "tag-hub");
  const tagBySlug = new Map(tagData.map((t) => [t.slug, t]));

  // Overlap-based cannibalization for tag hubs: too many shared episodes.
  const tagEpisodes = new Map<string, Set<number>>();
  for (const t of tagData) {
    const eps = episodes.filter((e) => e.tags.includes(t.filterTag)).map((e) => e.id);
    tagEpisodes.set(t.slug, new Set(eps));
  }

  for (let i = 0; i < tagPages.length; i++) {
    for (let j = i + 1; j < tagPages.length; j++) {
      const a = tagPages[i];
      const b = tagPages[j];
      const aSlug = a.path.split("/").pop()!;
      const bSlug = b.path.split("/").pop()!;
      const aSet = tagEpisodes.get(aSlug) ?? new Set<number>();
      const bSet = tagEpisodes.get(bSlug) ?? new Set<number>();
      const inter = new Set([...aSet].filter((x) => bSet.has(x)));
      const union = new Set([...aSet, ...bSet]);
      const overlap = union.size === 0 ? 0 : inter.size / union.size;
      if (overlap >= 0.7 && inter.size >= 2) {
        issues.push({
          level: "warning",
          message: "Potential keyword/intent overlap between tag hubs (shared episode roster)",
          details: {
            a: a.path,
            b: b.path,
            sharedEpisodes: inter.size,
            overlap: Number(overlap.toFixed(3)),
            aLabel: tagBySlug.get(aSlug)?.label ?? aSlug,
            bLabel: tagBySlug.get(bSlug)?.label ?? bSlug,
          },
        });
      }
    }
  }

  return issues;
}

function validateMetadata(pages: PageRecord[]): Issue[] {
  const issues: Issue[] = [];

  const titleMap = new Map<string, string[]>();
  const descMap = new Map<string, string[]>();

  for (const p of pages) {
    const expectedCanonical = getExpectedCanonical(p.path);

    if (!p.title || !p.description || !p.canonical) {
      issues.push({
        level: "critical",
        page: p.path,
        message: "Missing page-level metadata (title/description/canonical)",
      });
    } else {
      if (p.canonical !== expectedCanonical) {
        issues.push({
          level: "critical",
          page: p.path,
          message: "Canonical URL is not self-referencing",
          details: { expected: expectedCanonical, actual: p.canonical },
        });
      }

      const tLen = p.title.length;
      if (tLen < 30 || tLen > 70) {
        issues.push({
          level: "warning",
          page: p.path,
          message: "Title length outside 30–70 chars",
          details: { length: tLen },
        });
      }

      const dLen = p.description.length;
      if (dLen < 100 || dLen > 170) {
        issues.push({
          level: "warning",
          page: p.path,
          message: "Meta description length outside 100–170 chars",
          details: { length: dLen },
        });
      }

      titleMap.set(p.title, [...(titleMap.get(p.title) ?? []), p.path]);
      descMap.set(p.description, [...(descMap.get(p.description) ?? []), p.path]);
    }

    if (p.title && (!p.ogTitle || !p.ogDescription || !p.ogUrl)) {
      issues.push({
        level: "warning",
        page: p.path,
        message: "Open Graph metadata missing/incomplete (og:title/og:description/og:url)",
      });
    }
  }

  for (const [t, paths] of titleMap.entries()) {
    if (paths.length >= 2) {
      issues.push({
        level: "critical",
        message: "Duplicate <title> across pages",
        details: { title: t, pages: paths.join(", ") },
      });
    }
  }

  for (const [d, paths] of descMap.entries()) {
    if (paths.length >= 2) {
      issues.push({
        level: "warning",
        message: "Duplicate meta description across pages",
        details: { description: truncate(d, 90), pages: paths.join(", ") },
      });
    }
  }

  return issues;
}

function validateInternalLinkHealth(): Issue[] {
  const issues: Issue[] = [];

  // Sitemap coverage: /guests hub exists but is missing from sitemap.ts
  const sm = sitemap();
  const sitemapUrls = new Set(sm.map((x) => new URL(x.url).pathname));
  if (!sitemapUrls.has("/guests")) {
    issues.push({
      level: "warning",
      page: "/guests",
      message: "Indexable hub page missing from sitemap",
    });
  }

  const episodePagePath = path.join(process.cwd(), "src", "app", "episode", "[id]", "page.tsx");
  const episodePageSource = readFileIfExists(episodePagePath) ?? "";
  if (episodePageSource.includes("{episode.tags.map") && episodePageSource.includes("<PillButton")) {
    issues.push({
      level: "warning",
      page: "/episode/[id]",
      message:
        "Episode tags are not internal links to `/learn-finnish/[tag-slug]` (rendered as display-only pills)",
    });
  }

  if (
    episodePageSource.includes("Resources mentioned") &&
    episodePageSource.includes("{episode.resourcesMentioned.map")
  ) {
    issues.push({
      level: "warning",
      page: "/episode/[id]",
      message:
        "`Resources mentioned` are rendered as plain text; consider linking to related `/resources/[category-slug]` where possible",
    });
  }

  return issues;
}

function validateHeadingHierarchy(): Issue[] {
  const issues: Issue[] = [];
  const episodePagePath = path.join(process.cwd(), "src", "app", "episode", "[id]", "page.tsx");
  const src = readFileIfExists(episodePagePath) ?? "";
  const headings = Array.from(src.matchAll(/<h([1-6])\b/g)).map((m) => Number(m[1]));
  const firstH2 = headings.indexOf(2);
  const firstH3 = headings.indexOf(3);
  if (firstH3 !== -1 && (firstH2 === -1 || firstH3 < firstH2)) {
    issues.push({
      level: "critical",
      page: "/episode/[id]",
      message: "Heading hierarchy issue: h3 appears before the first h2 on episode pages",
    });
  }
  return issues;
}

function validateScaledContentAbuse(pages: PageRecord[]): Issue[] {
  const issues: Issue[] = [];

  const tagPages = pages.filter((p) => p.type === "tag-hub");
  const resourcePages = pages.filter((p) => p.type === "resource-category");

  const computeBoilerplateRatio = (list: PageRecord[]) => {
    const tokenSets = list.map((p) => new Set(tokenize(p.bodyText)));
    const freq = new Map<string, number>();
    for (const s of tokenSets) for (const tok of s) freq.set(tok, (freq.get(tok) ?? 0) + 1);
    const threshold = Math.ceil(list.length * 0.8);
    const boilerplateTokens = new Set(
      [...freq.entries()].filter(([, c]) => c >= threshold).map(([t]) => t)
    );

    const ratios = tokenSets.map((s) => {
      if (s.size === 0) return 0;
      let b = 0;
      for (const tok of s) if (boilerplateTokens.has(tok)) b++;
      return b / s.size;
    });
    const avg = ratios.reduce((a, b) => a + b, 0) / Math.max(1, ratios.length);
    return { avgRatio: avg };
  };

  const tagBoiler = computeBoilerplateRatio(tagPages);
  const resBoiler = computeBoilerplateRatio(resourcePages);
  const avgBoiler = (tagBoiler.avgRatio + resBoiler.avgRatio) / 2;

  const fillerCount = pages.filter((p) => detectFillerIntro(p.firstParagraph ?? "")).length;

  if (avgBoiler > 0.8) {
    issues.push({
      level: "critical",
      message: "Scaled content abuse risk: boilerplate ratio > 80%",
      details: { boilerplateRatio: Number(avgBoiler.toFixed(3)) },
    });
  } else if (avgBoiler > 0.6) {
    issues.push({
      level: "warning",
      message: "Scaled content abuse risk: boilerplate ratio 60–80%",
      details: { boilerplateRatio: Number(avgBoiler.toFixed(3)) },
    });
  }

  if (fillerCount > 0) {
    issues.push({
      level: fillerCount >= 5 ? "warning" : "info",
      message: "Filler intro patterns detected (possible low-value preamble)",
      details: { pages: fillerCount },
    });
  }

  return issues;
}

function formatIssue(i: Issue): string {
  const prefix =
    i.level === "critical" ? "**CRITICAL**" : i.level === "warning" ? "**Warning**" : "**Info**";
  const page = i.page ? `\`${i.page}\`` : "";
  const details =
    i.details && Object.keys(i.details).length
      ? ` (${Object.entries(i.details)
          .map(([k, v]) => `${k}: ${String(v)}`)
          .join(", ")})`
      : "";
  return `- ${prefix} ${page} ${i.message}${details}`.replace(/\s+/g, " ").trim();
}

function main() {
  const requested = (process.argv[2] as CheckScope | undefined) ?? "all";
  const pages = buildPages();
  const issues: Issue[] = [];

  if (isScopeEnabled("thin", requested)) issues.push(...validateThinContent(pages));
  if (isScopeEnabled("duplicates", requested)) issues.push(...validateDuplicateContent(pages));
  if (isScopeEnabled("cannibalization", requested)) issues.push(...validateCannibalization(pages));
  if (isScopeEnabled("metadata", requested)) issues.push(...validateMetadata(pages));
  if (requested === "all" || requested === "prune") issues.push(...validateInternalLinkHealth());
  if (requested === "all" || requested === "prune") issues.push(...validateHeadingHierarchy());
  if (isScopeEnabled("abuse", requested)) issues.push(...validateScaledContentAbuse(pages));

  const critical = issues.filter((i) => i.level === "critical");
  const warnings = issues.filter((i) => i.level === "warning");
  const infos = issues.filter((i) => i.level === "info");

  const reportLines: string[] = [];
  reportLines.push("## pSEO Quality Report");
  reportLines.push("");
  reportLines.push("### Summary");
  reportLines.push(`- Total pages checked: ${pages.length}`);
  reportLines.push(
    `- Issues found: ${issues.length} (${critical.length} critical, ${warnings.length} warnings, ${infos.length} informational)`
  );
  reportLines.push("");

  reportLines.push("### Thin Content");
  const thinIssues = issues.filter((i) => i.message.toLowerCase().includes("thin"));
  reportLines.push(thinIssues.length ? thinIssues.map(formatIssue).join("\n") : "- None");
  reportLines.push("");

  reportLines.push("### Duplicate Content");
  const dupIssues = issues.filter(
    (i) => i.message.toLowerCase().includes("duplicate") || i.message.toLowerCase().includes("similarity")
  );
  reportLines.push(dupIssues.length ? dupIssues.map(formatIssue).join("\n") : "- None");
  reportLines.push("");

  reportLines.push("### Keyword Cannibalization");
  const canIssues = issues.filter((i) => i.message.toLowerCase().includes("keyword") || i.message.toLowerCase().includes("intent"));
  reportLines.push(canIssues.length ? canIssues.map(formatIssue).join("\n") : "- None");
  reportLines.push("");

  reportLines.push("### Metadata Issues");
  const metaIssues = issues.filter((i) =>
    ["title", "meta description", "canonical", "metadata", "open graph"].some((k) =>
      i.message.toLowerCase().includes(k)
    )
  );
  reportLines.push(metaIssues.length ? metaIssues.map(formatIssue).join("\n") : "- None");
  reportLines.push("");

  reportLines.push("### Linking Issues");
  const linkIssues = issues.filter((i) => i.message.toLowerCase().includes("sitemap") || i.message.toLowerCase().includes("link"));
  reportLines.push(linkIssues.length ? linkIssues.map(formatIssue).join("\n") : "- None");
  reportLines.push("");

  reportLines.push("### Scaled Content Abuse Risk");
  const abuseIssues = issues.filter(
    (i) => i.message.toLowerCase().includes("scaled content") || i.message.toLowerCase().includes("filler intro")
  );
  reportLines.push(abuseIssues.length ? abuseIssues.map(formatIssue).join("\n") : "- Low / None detected");
  reportLines.push("");

  reportLines.push("### Heading Hierarchy");
  const headingIssues = issues.filter((i) => i.message.toLowerCase().includes("heading"));
  reportLines.push(headingIssues.length ? headingIssues.map(formatIssue).join("\n") : "- None");
  reportLines.push("");

  reportLines.push("### Robots and Indexation");
  const robotsPath = path.join(process.cwd(), "public", "robots.txt");
  reportLines.push(fs.existsSync(robotsPath) ? "- `robots.txt` present ✅" : "- `robots.txt` missing ❌");
  reportLines.push("- Sitemap: generated via `src/app/sitemap.ts`");
  reportLines.push("");

  reportLines.push("### Pruning Recommendations");
  const enrichPages = thinIssues.filter((i) => i.page).map((i) => i.page!).sort();
  reportLines.push("- Pages to remove: 0");
  reportLines.push("- Pages to merge: 0");
  reportLines.push("- Pages to noindex: 0");
  reportLines.push(`- Pages to enrich: ${enrichPages.length}`);
  if (enrichPages.length) for (const p of enrichPages) reportLines.push(`  - \`${p}\``);
  reportLines.push("");

  reportLines.push("### Action Required");
  const prioritized = [...critical, ...warnings, ...infos].slice(0, 30);
  if (!prioritized.length) {
    reportLines.push("1. No action required.");
  } else {
    let idx = 1;
    for (const it of prioritized) {
      reportLines.push(`${idx}. ${formatIssue(it).replace(/^- /, "")}`);
      idx++;
    }
  }
  reportLines.push("");

  const report = reportLines.join("\n");
  const outPath = path.join(process.cwd(), ".pseo", "quality-guard-report.md");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, report, "utf-8");

  console.log(
    `Checked ${pages.length} pages. ${issues.length} issues (${critical.length} critical).`
  );
  console.log(`Report written to .pseo/quality-guard-report.md`);
  for (const i of [...critical, ...warnings].slice(0, 25)) console.log(formatIssue(i));

  process.exit(critical.length > 0 ? 1 : 0);
}

main();
