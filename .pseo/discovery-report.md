# pSEO Discovery Report
**Site:** howilearnedfinnish.fi
**Date:** 2026-03-13
**Business:** Non-profit podcast — real people sharing how they learned Finnish

---

## Data Assets Found

| Entity | Record Count | Key Fields | Source |
|--------|-------------|------------|--------|
| Episodes | 13 | id, title, description, tags (10 values), videoUrl, thumbnail, platforms (3) | `src/constants/episodes.ts` |
| Blog Posts | 9 | slug, title, author, authorUrl, publishDate, metaDescription, excerpt, content (markdown) | `src/data/blog-posts.ts` |
| Filter Tags (taxonomy) | 10 | AllEpisodes, Parent, Student, FinnishSpeakingPartner, NonFinnishSpeakingPartner, A1toC, B1toC, WithKids, Immersion, FastPaced | `src/constants/episodes.ts` (enum) |
| Authors | 2 named | name, authorUrl | `src/data/blog-posts.ts` |
| Guest speakers | 13 | name embedded in episode title + description only | `src/constants/episodes.ts` |

---

## Proposed Page Types (ranked by opportunity)

### 1. Tag/Situation Hub Pages

- **Pattern**: `/learn-finnish/[situation-or-method]`
  - `/learn-finnish/as-a-parent`
  - `/learn-finnish/as-a-student`
  - `/learn-finnish/with-a-finnish-speaking-partner`
  - `/learn-finnish/with-a-non-finnish-speaking-partner`
  - `/learn-finnish/with-kids`
  - `/learn-finnish/immersion-method`
  - `/learn-finnish/fast-paced`
  - `/learn-finnish/a1-to-c-level`
  - `/learn-finnish/b1-to-c-level`
- **Record count**: 9 hub pages (AllEpisodes tag excluded)
- **Search intent**: Informational — "how to learn Finnish as a parent", "Finnish immersion method", "learn Finnish fast"
- **Keyword patterns**:
  - `learn Finnish as a [life situation]`
  - `how to learn Finnish [method]`
  - `Finnish language learning [situation]`
  - `Finnish [method] learning`
- **Data source**: `FilterTags` enum + episodes grouped by tag
- **Content uniqueness**: Medium — each hub page aggregates a different subset of episodes with genuinely different guest stories, life circumstances, and strategies. Intro copy per page needs to be hand-written (≈200 words) to avoid thin content.
- **Data gaps**:
  - No tag-level descriptions or editorial copy exist yet
  - Some tags have only 2–3 episodes (WithKids: 3, B1toC: 1) — thin at current scale
  - No SEO-friendly slug field on tags (needs mapping from enum to URL slug)
- **Feasibility**: Ready with minor data enrichment (add tag descriptions; wait for 3+ episodes per tag before publishing sparse ones)

---

### 2. Enhanced Episode Pages (upgrade, not new)

- **Pattern**: `/episode/[id]` ← already exists
- **Record count**: 13 (and growing)
- **Search intent**: Navigational + informational — people searching guest names, episode topics
- **Current gaps that limit SEO value**:
  - No structured show notes / key takeaways field
  - No guest bio field (nationality, background, how long they've lived in Finland)
  - No "time to fluency" structured field
  - No resources-mentioned field (books, apps, courses cited in episode)
  - No transcript or auto-generated summary
  - Episode schema (PodcastEpisode + VideoObject JSON-LD) is not implemented
- **Feasibility**: Pages exist. Schema markup can be added immediately. Richer content requires data enrichment per episode.
- **Why this matters for pSEO**: With 5–10 structured fields per episode, episodes become linkable data nodes that power the hub pages above and comparison pages below.

---

### 3. Guest Speaker Profile Pages

- **Pattern**: `/guests/[guest-slug]`
  - e.g., `/guests/deborah-laajanen`, `/guests/jamie-mcdonald`
- **Record count**: 13 guests (one per episode today; grows with each episode)
- **Search intent**: Navigational — people searching guest names after hearing an episode
- **Content uniqueness**: Low with current data. Each guest only has: a name, an episode description, and tags. This is insufficient for a standalone page.
- **Data gaps**: No guest biography, nationality, profession, current Finnish level, social links, or background story as structured fields. All of this lives in unstructured episode descriptions.
- **Feasibility**: Needs data enrichment. Add a `guest` object to each episode: `{ name, slug, bio, nationality, profession, currentFinnishLevel, socialUrl }`. With that, guest pages become genuinely unique and useful.

---

### 4. Resource/Tool Roundup Pages

- **Pattern**: `/learn-finnish/[resource-type]`
  - `/learn-finnish/best-apps`
  - `/learn-finnish/best-textbooks`
  - `/learn-finnish/best-youtube-channels`
  - `/learn-finnish/best-podcasts` ← blog post already exists, could be a standalone page
- **Record count**: Potentially 5–10 resource category pages
- **Search intent**: Commercial investigation — "best app to learn Finnish", "Finnish learning resources"
- **Data gaps**: No structured resource data exists. Would need a new data file: `src/data/resources.ts` with structured entries (name, type, url, description, pros/cons, guest mentions).
- **Feasibility**: Needs new data source. High value if built — these queries have clear search intent and commercial adjacency.

---

### 5. "Learning Finnish in [X months/years]" Journey Pages

- **Pattern**: `/learn-finnish/[duration]-journey`
  - `/learn-finnish/one-year-fluency`
  - `/learn-finnish/three-year-journey`
- **Record count**: Could map to 2–4 pages
- **Search intent**: Informational — "can I learn Finnish in a year", "how long to become fluent in Finnish"
- **Data gaps**: No structured `learningDuration` field on episodes. It's mentioned in descriptions but not extractable. Would need to be added.
- **Feasibility**: Low now. Worth adding a `timeToFluency` field to episodes for future use.

---

## Rejected Candidates

| Entity | Reason Rejected |
|--------|----------------|
| Location pages (`/learn-finnish-in/[city]`) | No location data for guests. Finnish learners are spread across Finland and globally — no geographic data collected. |
| Grammar/vocabulary guide pages | No vocabulary or grammar data exists in the codebase. Entirely different content type requiring new data architecture. |
| Comparison pages (`[tool] vs [tool]`) | No structured resource data. Can revisit after Resource pages (opportunity #4) are built. |
| B1-to-C hub page | Only 1 episode (Episode 2) has this tag. Not enough content to be a useful hub page. |
| "AllEpisodes" hub page | Redundant with the existing homepage/episodes index. |

---

## YMYL Assessment

- **YMYL category**: Partially Civic (immigration/citizenship content in 3 blog posts)
- **Risk level**: Low
- **Recommendation**: Standard pSEO OK. The citizenship and YKI posts provide general orientation information, not legal advice. No medical, financial, or legal claims. Continue flagging citizenship-adjacent posts with a disclaimer ("consult official Migri sources") but pSEO approach does not require human review per page.

---

## Recommended URL Structure

```
/                                        # Homepage (episodes index + filter)
/episode/[id]                            # Individual episode (existing)
/blog/                                   # Blog index (existing)
/blog/[slug]                             # Individual blog post (existing)
/learn-finnish/                          # Hub: all situation/method hub pages
/learn-finnish/[tag-slug]               # Tag hub pages (NEW — opportunity #1)
/guests/                                 # Guest index (FUTURE)
/guests/[guest-slug]                     # Guest profile page (FUTURE — needs enrichment)
/quick-links/                            # Link-in-bio (existing)
```

**Tag slug mapping** (enum → URL):
| FilterTag enum | URL slug |
|---------------|----------|
| Parent | as-a-parent |
| Student | as-a-student |
| FinnishSpeakingPartner | with-a-finnish-speaking-partner |
| NonFinnishSpeakingPartner | without-a-finnish-speaking-partner |
| A1toC | a1-to-c-level |
| B1toC | b1-to-c-level |
| WithKids | with-kids |
| Immersion | immersion-method |
| FastPaced | fast-paced |

---

## Data Enrichment Needed

### Priority 1 — Unlocks Tag Hub Pages
Add per-tag editorial data (in a new `src/data/tags.ts` or inline in episodes constants):
```ts
{
  slug: "as-a-parent",
  label: "Learn Finnish as a Parent",
  metaDescription: "...",
  intro: "...",   // ~150 words, hand-written
  filterTag: FilterTags.Parent,
}
```

### Priority 2 — Unlocks Guest Profile Pages + Richer Episodes
Add a `guest` object to each episode in `episodes.ts`:
```ts
guest: {
  name: string,
  slug: string,
  nationality: string,
  bio: string,           // 2-3 sentences
  currentFinnishLevel: string,   // e.g., "C1-C2"
  socialUrl?: string,
  profession?: string,
}
```

### Priority 3 — Unlocks Resource Pages
Create `src/data/resources.ts`:
```ts
{
  name: string,
  type: "app" | "textbook" | "podcast" | "youtube" | "website" | "course",
  url: string,
  description: string,
  mentionedByGuests: number[],  // episode IDs
  pros: string[],
  cons: string[],
}
```

### Priority 4 — Unlocks Journey Pages + Analytics
Add to each episode:
```ts
timeToFluency?: string,   // e.g., "1 year", "3 years"
startingLevel: string,    // e.g., "A1", "B1", "complete beginner"
endingLevel: string,      // e.g., "C1", "C2", "fluent"
keyMethods: string[],     // e.g., ["immersion", "speaking practice", "Anki"]
```

---

## Honest Assessment of Current Scale

With 13 episodes, pSEO is viable but limited. The site is at the seed stage for programmatic content:

- **Do now**: Tag hub pages — 9 pages, each powered by 2–10 episodes. Worth building because the taxonomy already exists and these pages answer real questions ("how do parents learn Finnish?").
- **Do next**: Enrich episode data with guest objects and structured fields. This is the highest-leverage investment — it makes every existing episode a richer data node and unlocks future page types without needing new episodes.
- **Do later**: Guest profiles and resource pages — once data enrichment is complete and the episode count reaches 30+.

**Key insight**: This site grows in pSEO value automatically with each new episode. Every episode released should include the enriched data fields above. The architecture is right; the data density per episode is what needs to grow.

---

## Next Steps

1. **Confirm page types** — Review this report and confirm which opportunities to prioritize
2. **Write tag-level editorial copy** — 9 × ~150 words intro text per hub page (hand-written for quality)
3. **Run `pseo-audit`** — Check codebase readiness for metadata, schema, sitemap coverage
4. **Enrich episode data** — Add `guest` object and structured fields to all 13 existing episodes
5. **Implement Tag Hub Pages** — Use `pseo-templates` to build `/learn-finnish/[tag-slug]` routes
6. **Add episode schema markup** — `PodcastEpisode` + `VideoObject` JSON-LD on every episode page

---

## Todo List

### Page Types to Build

- [x] Tag/Situation Hub Pages — `/learn-finnish/[tag-slug]` (9 pages, fully implemented with `generateStaticParams`, editorial copy, dynamic metadata, sitemap coverage)
- [x] Enhanced Episode Pages — `/episode/[id]` (structured fields added; `PodcastEpisode` + `VideoObject` schema implemented)
- [x] Guest Profile Pages — `/guests/[slug]` (guest pages built with bio, profession, social links, episode cross-links)
- [x] Resource/Tool Roundup Pages — `/resources/[category-slug]` (9 category pages with unique metadata and episode cross-links)
- [ ] Journey Pages — `/learn-finnish/[duration]-journey` (not built yet; `timeToFluency` field exists on episodes but no route or template created)

### Data Enrichment

- [x] Priority 1 — Add per-tag editorial data (`src/data/tags.ts` created with `slug`, `heading`, `metaDescription`, `intro`, `body[]` per tag)
- [x] Priority 2 — Add `guest` object to every episode (`name`, `slug`, `bio`, `profession`, `from`, `movedToFinland`, `socialUrl` added to all 13 episodes)
- [x] Priority 3 — Create `src/data/resources.ts` (~65 resources across 9 categories, with `mentions[]` linking back to episodes)
- [x] Priority 4 (partial) — Add `timeToFluency` and `keyMethods` to every episode ✅
- [ ] Priority 4 (remaining) — Add `startingLevel` and `endingLevel` fields to episodes (not yet added to the `Episode` interface or data)

### Data Gaps

- [x] Add tag-level editorial descriptions (resolved via `src/data/tags.ts`)
- [x] Add SEO-friendly slug mapping for `FilterTags` enum (tag slug mapping implemented)
- [x] Add transcripts (12 of 13 episode transcripts added as Markdown files in `src/data/transcripts/`)
- [ ] Grow episode count for thin tags — `WithKids` (3 episodes) and `B1toC` (1 episode) still below a comfortable content threshold; ongoing with each new episode recorded

### Next Steps (from this report)

- [x] Step 1 — Confirm page types to prioritize
- [x] Step 2 — Write tag-level editorial copy (~150 words per hub page × 9)
- [x] Step 3 — Run `pseo-audit` (completed 2026-03-16, see `.pseo/audit-report.md`)
- [x] Step 4 — Enrich episode data (guest objects + structured fields added to all 13 episodes)
- [x] Step 5 — Implement Tag Hub Pages
- [x] Step 6 — Add episode schema markup (`PodcastEpisode` + `VideoObject` JSON-LD on episode pages)

### What Comes Next (from audit report)

These tasks are not in this discovery report but flow directly from it — see `.pseo/audit-report.md` for full detail.

- [ ] Add `generateStaticParams` to `/episode/[id]`, `/blog/[slug]`, and `/guests/[slug]` (currently missing — pages may not pre-render at build time)
- [ ] Add canonical URLs to all pages (missing site-wide; also fix `www.` inconsistency between sitemap and episode JSON-LD)
- [ ] Add `src/app/robots.ts`
- [ ] Noindex `/quick-links/` page
- [ ] Add Open Graph + Twitter card metadata to guest, tag hub, and resource category pages
- [ ] Add JSON-LD schema to blog posts (`Article`), guest pages (`Person`), tag hub pages (`CollectionPage`), and resource pages (`ItemList`)
- [ ] Add `BreadcrumbList` JSON-LD and a breadcrumb component across all dynamic pages
- [ ] Add cross-links from episode pages to their matching tag hub pages
- [ ] Add cross-links between related tag hub pages (e.g. `as-a-parent` → `with-kids`)
- [ ] Move blog post content out of the TypeScript module bundle into individual `.md`/`.mdx` files
- [ ] Verify `next/image` remote domain configuration for external thumbnail URLs
- [ ] Add `body[]` editorial content to the `B1toC` tag entry to reduce thin content risk
- [ ] Add YMYL disclaimer ("consult official Migri sources") to citizenship-adjacent blog posts
