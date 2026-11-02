import { Episode } from "@/constants/episodes";

const DAY_MS = 86_400_000;

// Walks through the archive a few episodes per day, so every older episode
// gets its turn on the homepage instead of the same ones always showing.
// Deterministic per UTC day, so every visitor sees the same picks.
export function getArchivePicks(
  archive: Episode[],
  count: number,
  now: Date = new Date()
): Episode[] {
  if (archive.length <= count) return archive;

  const day = Math.floor(now.getTime() / DAY_MS);
  const start = (day * count) % archive.length;
  return Array.from(
    { length: count },
    (_, i) => archive[(start + i) % archive.length]
  );
}
