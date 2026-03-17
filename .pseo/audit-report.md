# pSEO Audit Report
**Site:** howilearnedfinnish.fi
**Date:** 2026-03-16
**Framework:** Next.js 15.4.10, App Router
**Discovery report:** `.pseo/discovery-report.md` (2026-03-13)

---

## Framework & Rendering

- **Framework**: Next.js 15.4.10 with App Router (`src/app/`)
- **Rendering**: SSG by default; no `revalidate` or `export const dynamic` set on any page
- **Routing**: File-based dynamic segments — `[id]`, `[slug]`, `[tag-slug]`, `[category-slug]`
- **MDX**: Configured via `@next/mdx` in `next.config.ts` (lines 1–14) — enables `.mdx` page extensions but blog posts are stored as TypeScript strings, not MDX files
- **Build**: `next build` with Turbopack in dev (`--turbopack` flag in `package.json` line 7)

---

## Data Architecture

- **Data sources**: All in-memory TypeScript files in `src/data/` and `src/constants/`
  - `src/constants/episodes.ts` — 13 episodes with `Guest` embedded objects (name, slug, age, profession, bio, socialUrl, from, movedToFinland)
  - `src/data/blog-posts.ts` — 9 blog posts as TypeScript string literals (including full markdown content)
  - `src/data/tags.ts` — 9 tag hub entries with slug, heading, intro, body paragraphs
  - `src/data/resources.ts` — ~65 resources across 9 categories, with `mentions[]` linking back to episodes by ID
  - `src/data/resource-categories.ts` — 9 category metadata objects with slug, heading, metaDescription, intro
  - `src/data/transcripts/` — 12 Markdown transcript files, loaded at runtime via `fs.readdirSync` (`episode/[id]/page.tsx` lines 61–76)

- **SEO fields on episodes**: `id`, `title`, `description`, `tags[]`, `videoUrl`, `thumbnail`, `platforms[]`, `timeToFluency?`, `keyMethods?[]`, `resourcesMentioned?[]`, `keyTakeaways?[]`, `guest` object with `name`, `slug`, `bio`, `profession`, `from`, `movedToFinland`, `socialUrl`
- **SEO fields on blog posts**: `slug`, `title`, `author`, `authorUrl`, `publishDate`, `metaDescription`, `excerpt`, `featuredImage?`, `content` (markdown string)
- **SEO fields on tags**: `slug`, `heading`, `intro`, `body?[]`, `label`, `filterTag` — sufficient for unique pages
- **SEO fields on resources**: `id`, `name`, `description`, `category`, `mentions[]` — no `url` field on resources (cannot link out)
- **Slug strategy**: slugs are hardcoded strings per record. No uniqueness enforcement at build time.
- **Readiness**: Ready (current scale). Needs migration to database-backed layer before ~200+ pages.

---

## Routing & Templates

### Dynamic routes implemented

| Route | File | `generateStaticParams`? | 404 handling |
|-------|------|------------------------|--------------|
| `/episode/[id]` | `src/app/episode/[id]/page.tsx` | ❌ Missing | ✅ `notFound()` |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` | ❌ Missing | ✅ `notFound()` |
| `/guests/[slug]` | `src/app/guests/[slug]/page.tsx` | ❌ Missing | ✅ `notFound()` |
| `/learn-finnish/[tag-slug]` | `src/app/learn-finnish/[tag-slug]/page.tsx` | ✅ Present (line 15) | ✅ `notFound()` |
| `/resources/[category-slug]` | `src/app/resources/[category-slug]/page.tsx` | ✅ Present (line 14) | ✅ `notFound()` |

- **Critical gap**: `/episode/[id]`, `/blog/[slug]`, and `/guests/[slug]` are missing `generateStaticParams`. Without it, Next.js will not pre-render these pages at build time — they will be rendered on-demand (SSR) or return 404 in static export mode. At 1,000+ episodes, this creates a crawl/indexing bottleneck since pages aren't pre-built.
- **Content uniqueness**: Each template produces genuinely differentiated content per page — title, description, guest bio, transcript, key takeaways, methods, resources mentioned all vary per episode. Tag hub pages render distinct editorial copy (`heading`, `intro`, `body[]`) unique per tag. No thin template filling is occurring.
- **Transcript file loading risk**: `loadTranscript()` in `episode/[id]/page.tsx` (lines 61–76) calls `fs.readdirSync` on every page render. At 13 episodes this is fine; at 1,000+ this would scan the full transcript directory for every page build, adding O(n) overhead.

- **Readiness**: Needs Work — missing `generateStaticParams` on 3 of 5 dynamic routes.

---

## SEO Foundations

### Metadata

| Page type | Dynamic title | Dynamic description | Canonical URL | OG tags | Twitter card |
|-----------|--------------|---------------------|---------------|---------|--------------|
| Root layout (`layout.tsx`) | Static only | Static only | ❌ None | ✅ (static) | ✅ (static) |
| `/episode/[id]` | ✅ line 91 | ✅ line 92 | ❌ None | ✅ (title, desc, image) | ❌ Inherits static from layout |
| `/blog/[slug]` | ✅ line 36 | ✅ line 37 | ❌ None | ✅ (title, desc, image) | ❌ Inherits static from layout |
| `/guests/[slug]` | ✅ line 23 | ✅ line 24 | ❌ None | ❌ Not set | ❌ Not set |
| `/learn-finnish/[tag-slug]` | ✅ line 29 | ✅ line 30 | ❌ None | ❌ Not set | ❌ Not set |
| `/resources/[category-slug]` | ✅ line 24 | ✅ line 25 | ❌ None | ❌ Not set | ❌ Not set |

- **Canonical URLs**: Not set anywhere — confirmed via grep returning no results for `canonical`. Every page is missing self-referencing canonical URLs. This is a significant duplicate content risk, especially since episode pages are accessible via both `/episode/1` and `/episode/01` (integer vs. padded strings).
- **OG/Twitter gap**: Guest pages, tag hub pages, and resource category pages have no Open Graph or Twitter card metadata — they will render with the generic static site-wide tags from `layout.tsx` (line 31–51), which uses a generic site logo as the OG image for all these pages.
- **Static root metadata**: `layout.tsx` (lines 18–52) sets one static metadata object used as the global fallback. Page-level `generateMetadata` overrides this, but pages without OG/Twitter metadata fall through to the static defaults — sharing a guest page link on social media will show the generic podcast logo and site description, not the guest's name or bio.

### JSON-LD Schema

| Page type | Schema implemented | Type |
|-----------|--------------------|------|
| `/episode/[id]` | ✅ lines 119–140 | `PodcastEpisode` + `VideoObject` (associated media) |
| `/blog/[slug]` | ❌ Not implemented | — |
| `/guests/[slug]` | ❌ Not implemented | — |
| `/learn-finnish/[tag-slug]` | ❌ Not implemented | — |
| `/resources/[category-slug]` | ❌ Not implemented | — |

- Episode schema has one URL bug: `url` field uses `https://howilearnedfinnish.fi/episode/...` (line 124) while the sitemap uses `https://www.howilearnedfinnish.fi/...` (line 8 of `sitemap.ts`). The `www.` prefix is inconsistent — choose one canonical domain and use it everywhere.

### Sitemap (`src/app/sitemap.ts`)

- ✅ Dynamic sitemap covers all 6 page types: static pages, episodes, blogs, guests, tag hubs, resource categories
- ✅ `publishDate` used for `lastModified` on blog posts (line 55)
- ⚠️ All other pages use `new Date()` (current date at build time) for `lastModified` — this means every page appears "recently updated" on every deploy, which may reduce crawl precision. Use actual content dates where available.
- ⚠️ Sitemap does not include `/guests` index page (only individual guest pages are listed)
- ⚠️ Episode pages are listed with `priority: 0.9` but blog posts at `0.7` — appropriate given the site's core content is episodes, but worth reviewing as blog content grows.

### robots.txt

- ❌ No `robots.txt` file found anywhere. Without it, search engines will crawl all paths by default (which is acceptable here), but you cannot control crawler behaviour, disallow dev/staging paths, or reference the sitemap URL. Add `src/app/robots.ts` returning a `MetadataRoute.Robots` object.

- **Readiness**: Needs Work — canonical URLs missing site-wide, no robots.txt, partial OG/Twitter coverage, schema only on episode pages.

---

## Internal Linking

| Link type | Implemented | Location |
|-----------|-------------|----------|
| Episode → guest profile | ✅ | `episode/[id]/page.tsx` lines 337–350 |
| Guest profile → their episode | ✅ | `guests/[slug]/page.tsx` via `EpisodeCard` |
| Resource card → episode | ✅ | `resources/[category-slug]/page.tsx` lines 93–98 |
| Resource category → other categories | ✅ | `resources/[category-slug]/page.tsx` lines 109–128 |
| Tag hub → other tag hubs | ❌ Not implemented | — |
| Episode → related episodes (same tags) | ❌ Not implemented | — |
| Episode → related tag hub pages | ❌ Not implemented | — |
| Breadcrumb component | ❌ Not implemented | — |
| Blog post → related episodes or tags | ❌ Not implemented | — |

- **Hub-and-spoke gap**: Tag hub pages (`/learn-finnish/[tag-slug]`) are the strongest pSEO page type on the site, but they have no cross-links to each other. A page about learning Finnish as a parent should link to related tags like `with-kids` and `immersion-method`.
- **Episode isolation**: Episode pages link to the guest profile and all-guests list, but have no links to the tag hub pages the episode belongs to. An episode tagged with `immersion-method`, `fast-paced`, and `as-a-student` should surface links to all three hub pages at the bottom.
- **No breadcrumbs**: The back-links (ArrowLeft) in episode/blog/guest/tag pages are minimal one-level back-links, not structured breadcrumb schema. No `BreadcrumbList` JSON-LD is emitted, which Google uses to display breadcrumbs in SERPs.

- **Readiness**: Needs Work — basic parent↔child links exist but no hub-spoke topology, no breadcrumbs, no related-content linking.

---

## Performance at Scale

- **Image optimisation**: `next/image` is used in `episode/[id]/page.tsx` (line 194) and `blog/[slug]/page.tsx` (line 113) ✅. YouTube thumbnails in EpisodeCard may be external URLs — confirm `next.config.ts` has domain allowlisting.
- **Bundle**: Dependencies are lean. `lucide-react`, `marked`, `gray-matter` are the notable additions. No large visualisation or analytics libraries beyond `@vercel/analytics`.
- **`next/image` domain config**: `next.config.ts` (lines 10–12) has no `images.domains` or `images.remotePatterns` set. If episode thumbnails point to external YouTube CDN URLs, they will fail at runtime. This should be verified.
- **Transcript file I/O at build**: `loadTranscript()` in `episode/[id]/page.tsx` (lines 61–76) uses `fs.readdirSync` + `fs.readFileSync` synchronously at render time. At 13 episodes this is trivial. At 100+ it adds measurable build overhead. Move to async `fs.promises` or pre-index transcript files.
- **Blog post content in JS bundle**: Full blog post markdown content (including long posts) is stored as TypeScript string literals in `blog-posts.ts`. The entire file is loaded into the JS module graph even when rendering a single post. At 50+ posts this will bloat the data bundle. Move to MDX files or a lazy-loaded data access pattern.
- **ISR not configured**: No `revalidate` export on any page. This is fine for a fully-static site, but means any content update requires a full redeploy. At the current scale this is acceptable.
- **No `generateStaticParams` on 3 routes**: Without static params, pages are not pre-built. Next.js 15 with App Router will server-render them on first request (if deployed to a Node.js server) or 404 them (if using `output: 'export'`). This is the single biggest performance and crawlability risk.

- **Readiness**: Needs Work — missing `generateStaticParams` on core routes, potential image domain config gap, blog content in bundle.

---

## Content Quality Safeguards

- **Content differentiation**: Tag hub pages have hand-written editorial copy (`intro`, `body[]`) — 200–800 words of unique content per page. Episode pages carry full transcripts where available, plus key takeaways, methods, and resources. Resource category pages have distinct headings, meta descriptions, and intro copy. Content quality is genuinely good.
- **Thin content risk**:
  - `B1toC` tag hub (`/learn-finnish/b1-to-c-level`) is backed by only the intro field with no `body[]` content (tags.ts lines 87–94) and maps to very few episodes. This page risks a thin content penalty.
  - Resource category pages with 1–2 resources (e.g., `Music` with 4 resources, `Exams & Certifications` with 2) may be considered thin by Google's quality bar given identical page structure and short resource lists.
- **No duplicate content detection**: No build-time check for duplicate titles, descriptions, or slugs. Currently safe with manual data entry, but as the site scales slug collisions become possible.
- **No noindex rules**: No `noindex` set on any page. The `/quick-links/` page (`src/app/quick-links/page.tsx`) is a link-in-bio utility page with no original content — it should be `noindex`ed to avoid wasting crawl budget.
- **No minimum content length validation**: No checks that tag hub pages, resource pages, or guest pages meet a content length threshold before being served to crawlers.
- **Keyword cannibalization risk**: The `AllEpisodes` filter tag maps to all episodes — it is excluded from the sitemap and tag pages, which is correct. The `/learn-finnish/` hub and the homepage both list all episodes — ensure they have differentiated `<h1>` text and descriptions so Google doesn't treat them as duplicates.

- **Readiness**: Needs Work — thin content risk on 2–3 pages, no noindex on utility pages, no duplicate detection.

---

## Discovery Report Cross-Check

The discovery report (2026-03-13) proposed 5 page types. Here is the codebase readiness for each:

| Discovery Opportunity | Status |
|-----------------------|--------|
| 1. Tag/Situation Hub Pages (`/learn-finnish/[tag-slug]`) | ✅ **Fully implemented** — 9 pages with `generateStaticParams`, unique editorial copy, dynamic metadata, sitemap coverage |
| 2. Enhanced Episode Pages (`/episode/[id]`) | ✅ **Partially implemented** — `keyMethods`, `timeToFluency`, `resourcesMentioned`, `keyTakeaways`, `guest` objects all added. Schema ✅. Missing: `generateStaticParams`, canonical URL |
| 3. Guest Profile Pages (`/guests/[slug]`) | ✅ **Implemented** — guest pages exist with bio, profession, social links, EpisodeCard. Missing: `generateStaticParams`, OG tags, schema, canonical |
| 4. Resource/Tool Roundup Pages (`/resources/[category-slug]`) | ✅ **Implemented** — 9 category pages with `generateStaticParams`, unique metadata, resource cards with episode cross-links. Missing: canonical, OG tags, schema, resource `url` field |
| 5. Journey Pages (`/learn-finnish/[duration]`) | ❌ **Not implemented** — `timeToFluency` field added to episodes but no journey pages built yet. Low priority at current episode count. |

All four actively implemented page types match the discovery proposals. The remaining gaps are metadata completeness and missing `generateStaticParams`.

---

## Priority Actions (ordered)

1. **Add `generateStaticParams` to `/episode/[id]`, `/blog/[slug]`, `/guests/[slug]`**
   Without this, these pages may not be pre-rendered. This is the highest-risk gap for both crawlability and build correctness. Add `export async function generateStaticParams()` to each file returning the full set of IDs/slugs from the data layer.

2. **Add canonical URLs to all pages**
   Add `alternates: { canonical: '<full URL>' }` to every `generateMetadata` return value. Also resolve the `www.` inconsistency between `sitemap.ts` and episode page JSON-LD (`episode/[id]/page.tsx` line 124).

3. **Add `robots.ts` to `src/app/`**
   Create `src/app/robots.ts` that returns a sitemap reference and disallows any paths that should not be indexed (e.g. `/quick-links/`).

4. **Noindex `/quick-links/`**
   Add `export const metadata = { robots: { index: false } }` to `src/app/quick-links/page.tsx`.

5. **Add OG + Twitter card metadata to guest, tag hub, and resource category pages**
   These 3 page types currently inherit the static root-layout metadata when shared on social media. Add per-page `openGraph` and `twitter` fields to their `generateMetadata` functions.

6. **Add JSON-LD schema to blog, guest, tag hub, and resource category pages**
   Blog posts should emit `Article` schema. Guest pages should emit `Person` schema. Tag hub pages should emit `CollectionPage` or `ItemList`. Resource category pages should emit `ItemList`.

7. **Add `BreadcrumbList` JSON-LD and a Breadcrumb component**
   All dynamic pages are missing breadcrumb schema. Add a lightweight breadcrumb component and emit `BreadcrumbList` JSON-LD per page.

8. **Add cross-linking from episode pages to their tag hub pages**
   Each episode should render links to all `learn-finnish/[tag-slug]` pages matching its tags. This creates the hub-and-spoke topology that passes authority from episode pages to tag hubs.

9. **Add cross-linking between related tag hub pages**
   Tag hub pages should link to semantically related tags (e.g., `as-a-parent` → `with-kids`; `fast-paced` → `immersion-method`).

10. **Move blog post content out of the TypeScript module bundle**
    Storing all blog post markdown in `blog-posts.ts` as string literals means the full file is loaded for every request. Migrate to individual `.md` or `.mdx` files loaded on demand.

11. **Verify `next/image` remote domain configuration**
    `next.config.ts` has no `images.remotePatterns`. If any episode thumbnails point to YouTube CDN or other external domains, add the necessary configuration.

12. **Address thin content pages**
    Add `body[]` editorial content to the `B1toC` tag entry in `src/data/tags.ts`. Consider adding a `noindex` guard for resource category pages with fewer than 3 resources until more data is available.

---

## Recommended Skill Sequence

Based on this audit and the discovery report, run skills in this order:

1. **`pseo-metadata`** — Fix canonical URLs site-wide, complete OG/Twitter coverage on all 5 page types, resolve `www.` domain inconsistency
2. **`pseo-schema`** — Add `Article`, `Person`, `CollectionPage`, `ItemList`, and `BreadcrumbList` JSON-LD to the 4 page types currently missing schema
3. **`pseo-linking`** — Build hub-and-spoke cross-links from episodes to tag hubs, between related tags, and add breadcrumb component
4. **`pseo-templates`** — Add `generateStaticParams` to the 3 routes missing it; ensure all routes are fully static
5. **`pseo-quality-guard`** — Validate thin content pages (`B1toC`, low-resource categories), add noindex to `/quick-links/`, validate no duplicate titles/descriptions
6. **`pseo-llm-visibility`** — Implement `llms.txt`, ensure transcript content is structured for LLM extraction, optimize for AI Overview citations on Finnish learning queries

Skip `pseo-scale` and `pseo-performance` — the data architecture (in-memory TypeScript) is appropriate at 13–100 episodes. Revisit at 500+ episodes when build times or memory pressure becomes observable.
