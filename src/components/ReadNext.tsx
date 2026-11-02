import Link from "next/link";
import { ReadNextItem, ReadNextKind } from "@/lib/read-next";

const kindLabels: Record<ReadNextKind, string> = {
  episode: "Listen",
  article: "Read",
  guest: "Guest",
  resources: "Resources",
};

interface ReadNextProps {
  items: ReadNextItem[];
  /** Page the links sit on, sent to Umami so clicks can be traced back */
  source: string;
  heading?: string;
}

const ReadNext = ({
  items,
  source,
  heading = "Read or listen next",
}: ReadNextProps) => {
  if (items.length === 0) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{heading}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col p-5 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-200"
            data-umami-event="read_next_click"
            data-umami-event-source={source}
            data-umami-event-target={item.href}
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-purple-600 mb-2">
              {kindLabels[item.kind]}
            </span>
            <p className="font-semibold text-gray-800 leading-snug mb-2 line-clamp-2">
              {item.title}
            </p>
            <p className="text-sm text-gray-600 line-clamp-3">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ReadNext;
