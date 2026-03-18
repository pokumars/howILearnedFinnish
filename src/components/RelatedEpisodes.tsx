import Link from "next/link";
import { Episode, FilterTags } from "@/constants/episodes";

interface RelatedEpisodesProps {
  currentId: number;
  currentTags: FilterTags[];
  allEpisodes: Episode[];
  limit?: number;
}

const RelatedEpisodes = ({
  currentId,
  currentTags,
  allEpisodes,
  limit = 3,
}: RelatedEpisodesProps) => {
  const scored = allEpisodes
    .filter((e) => e.id !== currentId)
    .map((e) => ({
      episode: e,
      score: e.tags.filter(
        (t) => currentTags.includes(t) && t !== FilterTags.AllEpisodes,
      ).length,
    }))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score || b.episode.id - a.episode.id)
    .slice(0, limit)
    .map((s) => s.episode);

  if (scored.length === 0) return null;

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Related episodes
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {scored.map((episode) => (
          <Link
            key={episode.id}
            href={`/episode/${episode.id}`}
            className="block p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-purple-200 hover:shadow-sm transition-all duration-200"
          >
            <p className="font-semibold text-gray-800 text-sm leading-snug mb-2 line-clamp-2">
              {episode.title}
            </p>
            <div className="flex flex-wrap gap-1">
              {episode.tags
                .filter(
                  (t) =>
                    currentTags.includes(t) && t !== FilterTags.AllEpisodes,
                )
                .map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedEpisodes;
