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
              Learn Finnish: Less Effort and Real Results
            </h1>
            <div className="flex flex-col mb-8">
              <h2 className="text-xl md:text-2xl">
                Is Finnish hard or you just don&apos;t know how to go about it?
                I got you covered.
              </h2>
              <p className=" text-purple-100 max-w-3xl">
                These guys did it, so can you. Listen to their stories and learn
                from their mistakes.
              </p>
            </div>
            {/*   
                Is Finnish hard or you just don&apos;t know how to go about it? I got you covered.
                Is Finnish really hard or you just don&apos;t know anyone who managed to learn it as an adult.
                Is Finnish actually hard or are you talking to people who have no idea what they are doing?
             */}
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
