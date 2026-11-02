"use client";

import { useState, useMemo } from "react";
import { Episode, filterTags } from "@/constants/episodes";
import EpisodeCard from "@/components/EpisodeCard";
import PillButton from "@/components/pillButton";

export default function EpisodeBrowser({ episodes }: { episodes: Episode[] }) {
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const filteredEpisodes = useMemo(() => {
    if (selectedTag === "All") {
      return episodes;
    }
    return episodes.filter((episode) =>
      episode.tags.some((tag) => tag === selectedTag)
    );
  }, [episodes, selectedTag]);

  return (
    <>
      {/* Filter Section */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Life Circumstance Filter:
          </h2>
          <div className="flex flex-wrap gap-3">
            {filterTags.map((tag) => (
              <PillButton
                key={tag}
                text={tag}
                onClick={() => setSelectedTag(tag)}
                activated={selectedTag === tag}
                data-umami-event="filter_used"
                data-umami-event-filter-name={tag}
                data-umami-event-filter-context="episode_index_filter"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section className="pb-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            {`${selectedTag} Episodes`}
          </h2>
          <div className="space-y-8">
            {filteredEpisodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
