# pSEO Quality Guard Report

**Date:** 2026-03-17
**Site:** https://www.howilearnedfinnish.fi
**Scope:** All pages (full audit)

---

## Summary

- **Total pages checked:** 57 (13 episodes + 8 blog posts + 12 guests + 9 tag hubs + 9 resource categories + 6 hub/static pages)
- **Issues found: 17** — 3 critical, 7 warnings, 7 informational
- **Scaled content abuse risk:** Low — content is substantive and experience-driven, not variable-swap templates

---

## 1. Thin Content

### Critical: 2 tag hub pages have no body paragraphs

| Page | Slug | Own Editorial Content | Status |
|------|------|-----------------------|--------|
| From A1 to C Level Finnish | `/learn-finnish/a1-to-c-level` | ~95 words (intro only, no `body`) | ❌ THIN |
| Breaking the Intermediate Plateau: B1 to C Level | `/learn-finnish/b1-to-c-level` | ~100 words (intro only, no `body`) | ❌ THIN |

Every other tag hub page has 5–7 body paragraphs (700–900 words). These two are outliers. Episode cards add some content, but the page's own editorial substance is significantly below the 300-word threshold.

**All other page types pass the thin content check:**
- Episode pages: rich content (description, key takeaways, methods, resources, transcript) ✅
- Blog posts: full markdown content (500–2000+ words) ✅
- Guest pages: bio + episode card — borderline but defensible as profile pages ✅
- Other 7 tag hubs: 800–900+ words of unique editorial content ✅
- Resource category pages: short intros (~45 words) but padded by resource listings; acceptable for list-format pages ✅

---

## 2. Duplicate Content

### No exact or near-duplicates detected

Each tag hub page has distinct body content written specifically for that topic. Each resource category page contains a different set of resources. Template HTML structure is shared but body text diverges significantly.

**Boilerplate ratio estimate:**
- Tag hub pages: ~35% structural HTML boilerplate, ~65% unique text content → **Low risk** ✅
- Resource category pages: ~45% structural boilerplate, ~55% unique content → **Low risk** ✅
- Both page types are well below the 60% boilerplate threshold that triggers scaled content abuse concerns.

### Warning: cross-page content repetition in Related/Browse sections

Every tag hub page renders an "Explore other topics" grid linking to the other 8 tags. Every resource page renders a "Browse other resource types" grid with the other 8 categories. These sections are structurally identical across all pages in each type. This is acceptable cross-linking but means a portion of the HTML on each page is nearly identical to its siblings. Not a penalty risk at this scale, but worth noting.

---

## 3. Keyword Cannibalization

### Warning: `as-a-parent` and `with-kids` overlap significantly

| Page | Target Keyword | Featured Guests |
|------|----------------|-----------------|
| `/learn-finnish/as-a-parent` | "Learning Finnish as a Parent" | Anita Anttila, Deborah Laajanen |
| `/learn-finnish/with-kids` | "Learning Finnish with Kids at Home" | Anita Anttila, Deborah Laajanen |

Both pages feature the **same two guests** (Anita and Deborah), reference the same stories, and serve overlapping search intent. A user searching "learn Finnish as a parent" and "learn Finnish with kids" is likely the same person. Google may choose one page to rank and suppress the other.

**The pages are differentiated in angle** — "as-a-parent" emphasises the systemic pressures (school meetings, Kela, custody), while "with-kids" focuses on the time/attention constraints of early parenting. The keywords are distinct enough that this is a warning rather than a critical issue — but the shared guest roster creates genuine content overlap that could trigger cannibalization signals.

**No other cannibalization detected:** all other tag combinations have distinct intent, distinct featured guests, or both.

---

## 4. Metadata Quality

### Critical: 3 resource category title tags exceed 70 characters

The resource page template uses `${cat.heading} | How I Learned Finnish`, which adds 24 characters to every heading. Three headings are too long:

| Page | Title | Length |
|------|-------|--------|
| `/resources/textbooks-and-grammar` | "Finnish Textbooks & Grammar Books Recommended by Real Learners \| How I Learned Finnish" | 87 chars ❌ |
| `/resources/tv-and-video` | "Finnish TV Shows & YouTube Channels for Language Learning \| How I Learned Finnish" | 81 chars ❌ |
| `/resources/reading` | "Finnish Books & Reading Materials Recommended by Learners \| How I Learned Finnish" | 81 chars ❌ |

Google will truncate these in SERPs. The tail " | How I Learned Finnish" may be cut entirely for these pages.

### Warning: Guest bio descriptions not length-checked

The guest page `generateMetadata` passes `guest.bio` directly as the meta description with no truncation:

```typescript
// src/app/guests/[slug]/page.tsx:29
description: guest.bio,
```

Guest bios written as multiple sentences can easily exceed 160 characters. Unlike tag hub pages (which use `truncate(tag.intro, 155)`), guest bios receive no cap. This means Google will truncate the description in the SERP in an uncontrolled way.

### Passed checks

| Field | Status |
|-------|--------|
| Canonical URLs | ✅ All pages via `buildMetadata` → `alternates.canonical` |
| OG title | ✅ Present on all pages |
| OG description | ✅ Present on all pages |
| OG url | ✅ Matches canonical |
| Twitter card | ✅ `summary_large_image` on all pages |
| Title uniqueness | ✅ All titles are unique (data-driven) |
| Description uniqueness | ✅ All descriptions are unique (data-driven) |

### Informational: Generic OG image on guest, tag, and resource pages

Guest, tag hub, and resource pages fall back to `HILF_logo.png` as their OG image. Episode and blog pages correctly use their own thumbnail/featured image. The logo is acceptable but social previews for these pages will be less compelling than custom per-page images.

---

## 5. Schema Markup

### Passed

| Page Type | Schema Types | Status |
|-----------|-------------|--------|
| Episode | PodcastEpisode + BreadcrumbList | ✅ |
| Blog post | Article + BreadcrumbList | ✅ |
| Guest | Person + BreadcrumbList | ✅ |
| Tag hub | CollectionPage + BreadcrumbList | ✅ |
| Resource category | ItemList + BreadcrumbList | ✅ |
| Hub pages | Blog / ItemList / CollectionPage inline schemas | ✅ |

All schema URLs are absolute (`${BASE_URL}/...`). No empty or placeholder values detected. Schema is present on all page types.

### Informational: `dateModified` on Article schema equals `datePublished`

The Article schema for blog posts sets `dateModified: publishDate`, which means it never reflects actual updates:

```typescript
// src/lib/schema.ts:93-94
datePublished: publishDate,
dateModified: publishDate,
```

If a post is updated, the schema won't reflect it until the data is manually changed.

### Informational: No FAQPage schema on tag hub pages

Tag hub pages answer implicit "how do I learn Finnish as a [X]?" questions in a Q&A-adjacent structure (challenge/approach/specific guest experiences). FAQPage schema with explicit Q&A pairs would strengthen these pages' eligibility for FAQ rich results.

---

## 6. Internal Linking

### Warning: Episode tags are not linked to tag hub pages

Episode tags are rendered as `PillButton` components but are **not hyperlinks**. They are display-only. This is a missed linking opportunity — each tag should link to `/learn-finnish/[tag-slug]`.

```tsx
// src/app/episode/[id]/page.tsx:171-174
{episode.tags.map((tag) => (
  <PillButton text={tag} key={tag} activated={false} />
))}
```

There are 13 episode pages, each with 2–4 tags. This represents ~30–50 unlinked references to tag hub pages.

### Warning: "Resources Mentioned" on episode pages are not linked

The episode page renders `resourcesMentioned` as a plain text list with no links:

```tsx
// src/app/episode/[id]/page.tsx:317-322
{episode.resourcesMentioned.map((resource, i) => (
  <li ...>
    <span>{resource}</span>
  </li>
))}
```

Resources Mentioned are free-text strings, not `Resource` objects, so they can't link to `/resources/[category-slug]` automatically. But these strings contain resource names that exist in the resources data — linking them would close the loop between episode pages and resource category pages.

### Warning: `/guests` hub is missing from the sitemap

`sitemap.ts` includes static pages (`/`, `/blog`, `/resources`, `/learn-finnish`, `/quick-links`) but **omits `/guests`**. The `/guests` hub is indexable and links to all 12 guest profiles — it should be in the sitemap.

### Passed

| Check | Status |
|-------|--------|
| All dynamic pages have inbound links from their hub | ✅ |
| No orphan pages | ✅ |
| All hub pages link back to their parent | ✅ |
| Tag hubs cross-link to all other tag hubs | ✅ |
| Resource categories cross-link to all other categories | ✅ |
| Episode pages link to guest profiles | ✅ |
| Resource cards link to episode pages | ✅ |

---

## 7. Scaled Content Abuse Risk

| Signal | Value | Risk |
|--------|-------|------|
| Template boilerplate ratio | ~35–45% | Low ✅ |
| Variable-swap-only pages | 0 | Low ✅ |
| Filler intro patterns ("In today's world...") | 0 detected | Low ✅ |
| Value-first content (answer in first 200 words) | All pages | Low ✅ |
| E-E-A-T: author attribution | Blog posts ✅, others N/A | Acceptable |
| E-E-A-T: real person attribution in content | All tag/resource pages cite named guests | Strong ✅ |
| E-E-A-T: last-updated dates on tag/resource pages | None | Warning ⚠️ |
| Publication velocity | Gradual | Low ✅ |

**Overall risk: Low.** The site's content is grounded in real people, real experiences, and original editorial writing. Tag hub pages have 700–900 words of unique, specific content. Resource pages list real tools recommended by identified individuals. Neither page type follows a "location page" or "variable swap" pattern that triggers Google's scaled content abuse signals.

The absence of last-updated dates on tag hubs and resource pages is the only structural E-E-A-T gap — a `<time>` element or "Last updated: [date]" line would strengthen trust signals without requiring content changes.

---

## 8. Heading Hierarchy

### Critical: Episode pages skip h2, using h3 before any h2

In `src/app/episode/[id]/page.tsx`, the "Listen on:" heading appears at line 178 as `h3`, while the h1 is the episode title. The first `h2` ("Watch or Listen") doesn't appear until line 230. This means the heading order in the DOM is: `h1` → `h3` → `h2` — an invalid hierarchy.

```tsx
// line 165: <h1> episode.title
// line 178: <h3>Listen on:</h3>   ← skips h2
// line 230: <h2>Watch or Listen</h2>
```

Fix: either promote "Listen on:" to `h2`, or demote it to a `<p>` or `<strong>` label since it's more of a UI label than a section heading.

### Passed on all other page types

| Page Type | Heading Structure | Status |
|-----------|-------------------|--------|
| Tag hub | h1 → h2 ("Explore other topics") | ✅ |
| Resource category | h1 → h2 (resource names) → h2 ("Browse other resource types") | ✅ |
| Guest profile | h1 → h2 ("Episode featuring...") | ✅ |
| Blog post | h1 → content headings (markdown-driven) | ✅ (assumed) |

---

## 9. Robots and Indexation

### Warning: No `robots.txt` file

No `robots.txt` exists in the public directory. Without it:
- Crawlers have no signal about crawl rate or restricted paths
- The default is "crawl everything," which is acceptable here, but it's best practice to be explicit
- A minimal `robots.txt` with a sitemap pointer improves crawl efficiency

### Sitemap coverage

All indexable page types are present in the sitemap, with the exception of `/guests` hub (noted above). All URLs use the correct `www.howilearnedfinnish.fi` domain.

### Informational: Episode and tag/resource `lastModified` dates are hardcoded to `new Date()` or `new Date("2026-03-17")`

Episode pages use `lastModified: new Date()` (today's date, always), which signals to Google that all 13 episode pages change every day. This reduces the signal's credibility. Use a real publication date.

---

## Pruning Recommendations

| Action | Pages | Reason |
|--------|-------|--------|
| **Enrich** | `/learn-finnish/a1-to-c-level` | Add 5–6 body paragraphs covering the full A1→C journey, plateau-busting strategies, and guest-specific timelines |
| **Enrich** | `/learn-finnish/b1-to-c-level` | Add body paragraphs exploring the intermediate plateau: why it happens, how guests broke through it, and what differentiates B2 from C |
| **Differentiate or merge** | `/learn-finnish/as-a-parent` + `/learn-finnish/with-kids` | Sharpen the distinction between them (systemic vs time-management angle) or consider whether one tag could absorb the other |
| No pages to delete | — | All pages have genuine value |
| No pages to noindex | — | No thin-enough pages that should be hidden from Google |

---

## Action Required (Prioritised)

### Critical (fix before next deployment)

1. **Add body paragraphs to `a1-to-c-level` and `b1-to-c-level` in `tags.ts`** — these are the only two tag pages with no body content. Both are high-intent topics that deserve the same depth as the other 7 tags.

2. **Shorten 3 resource page title headings in `resource-categories.ts`** — "Finnish Textbooks & Grammar Books Recommended by Real Learners" should be shortened to stay under ~46 chars so the full title fits within 70 chars after the suffix. Similarly for TV & Video and Reading.

3. **Fix heading hierarchy on episode pages** — change the `<h3>Listen on:</h3>` at `src/app/episode/[id]/page.tsx:178` to `<h2>` or a non-heading element.

### Warnings (fix in next sprint)

4. **Add `truncate(guest.bio, 155)` to guest metadata** — `src/app/guests/[slug]/page.tsx:29` — prevents uncontrolled SERP truncation.

5. **Convert episode tag PillButtons to links** — link each tag to `/learn-finnish/[tag-slug]`. This closes ~30–50 broken internal link paths and improves crawl depth.

6. **Add `/guests` to `sitemap.ts` static pages** — one line, zero risk.

7. **Add `robots.txt`** to `/public/` with at minimum: `User-agent: * / Allow: /` and a `Sitemap:` pointer.

### Informational (quality improvements)

8. **Add "Last updated" date to tag hub and resource pages** — a simple `<p>Last updated: March 2026</p>` near the header strengthens E-E-A-T signals.

9. **Fix `lastModified: new Date()` in sitemap** for episode pages — use a real date tied to when the episode data was last updated.

10. **Differentiate the `as-a-parent` and `with-kids` tag pages** — sharpen the editorial angle of each so their bodies don't reference exactly the same two guests with the same stories. Or explicitly scope "as-a-parent" to the societal/systemic angle (custody, Kela, school) and "with-kids" to the practical/time-management angle, with distinct guest emphasis.
