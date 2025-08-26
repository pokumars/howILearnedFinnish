"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { filterTags, episodes } from "@/constants/episodes";
import { useState, useMemo } from "react";
import EpisodeCard from "@/components/EpisodeCard";
import PillButton from "@/components/pillButton";

export default function Home() {
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const filteredEpisodes = useMemo(() => {
    if (selectedTag === "All") {
      return episodes;
    }
    return episodes.filter((episode) =>
      episode.tags.some((tag) => tag === selectedTag)
    );
  }, [selectedTag]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-purple-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              How I Learned Finnish - with Ohe
            </h1>
            <p className="text-xl md:text-2xl mb-4">
              How to Learn Finnish Fluently as an Adult Immigrant
            </p>
            <p className="text-lg md:text-xl text-purple-100 max-w-3xl">
              Documenting real success stories of adult Finnish learners and
              sharing practical strategies to achieve fluency
            </p>
            <p className="text-lg md:text-xl text-purple-100 max-w-3xl">
              This body of work needed to exist because
            </p>
            <ul className="">
              <li>
                If you have a goal, why not hear from how others have achieved
                it to help you out?
              </li>
              <li>
                Too many people don’t learn the Finnish language beyond what is
                required to get the passport (quite low), preventing them from
                reaching their potential.
              </li>
              <li>
                Finland is losing or under-utilising so many brilliant people
                due to language deficiency.
              </li>
              <li>
                Too many insanely talented people are missing opportunities in
                an amazing country like Finland.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              />
            ))}
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <Footer />
    </div>
  );
}
