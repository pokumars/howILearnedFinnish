import Link from "next/link";
import { Fragment } from "react";
import { episodes } from "@/constants/episodes";

interface GuestRef {
  label: string;
  slug: string;
}

function buildGuestRefs(): GuestRef[] {
  const seen = new Set<string>();
  const refs: GuestRef[] = [];

  for (const episode of episodes) {
    if (!episode.guest) continue;
    const { name, slug } = episode.guest;
    const firstName = name.split(" ")[0];

    for (const label of [name, firstName]) {
      if (seen.has(label)) continue;
      seen.add(label);
      refs.push({ label, slug });
    }
  }

  // Longest label first so e.g. "Deborah Laajanen" matches before "Deborah".
  return refs.sort((a, b) => b.label.length - a.label.length);
}

const GUEST_REFS = buildGuestRefs();
const GUEST_PATTERN = new RegExp(
  `\\b(${GUEST_REFS.map((ref) => ref.label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})\\b`,
  "g"
);

/** Turns guest name mentions in prose into links to their guest page. */
export function linkifyGuestNames(text: string) {
  const parts = text.split(GUEST_PATTERN);

  return parts.map((part, i) => {
    const ref = GUEST_REFS.find((g) => g.label === part);
    if (!ref) return <Fragment key={i}>{part}</Fragment>;

    return (
      <Link
        key={i}
        href={`/guests/${ref.slug}`}
        className="text-purple-700 underline decoration-purple-200 hover:decoration-purple-500 font-medium"
      >
        {part}
      </Link>
    );
  });
}
