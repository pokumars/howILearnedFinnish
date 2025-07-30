import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Play, ArrowRight } from "lucide-react";
import { filterTags, episodes } from "@/constants/episodes";
import Image from "next/image";

export default function Home() {
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
              Learn Finnish fluently as an adult immigrant
            </p>
            <p className="text-lg md:text-xl text-purple-100 max-w-3xl">
              Documenting real success stories of adult Finnish learners and
              sharing practical strategies to achieve fluency
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Filter Episodes By:
          </h2>
          <div className="flex flex-wrap gap-3">
            {filterTags.map((tag, index) => (
              <button
                key={tag}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  index === 0
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-700 border border-purple-600 hover:bg-purple-50"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            Latest Episodes
          </h2>
          <div className="space-y-8">
            {episodes.map((episode) => (
              <div
                key={episode.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Video Thumbnail */}
                  <div className="md:w-2/5 relative">
                    <a
                      href={episode.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full cursor-pointer"
                    >
                      <Image
                        src={episode.thumbnail}
                        alt={episode.title}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-200">
                          <Play className="w-6 h-6 text-gray-800 ml-1" />
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Episode Content */}
                  <div className="md:w-3/5 p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {episode.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {episode.description}
                      <a
                        href="#"
                        className="text-purple-600 hover:text-purple-700 ml-1"
                      >
                        Read More
                      </a>
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <a
                        href={episode.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200 flex items-center gap-2 w-fit"
                      >
                        WATCH EPISODE
                        <ArrowRight className="w-4 h-4" />
                      </a>

                      {/* Platform Icons */}
                      <div className="flex gap-3">
                        {episode.platforms.map((platform) => (
                          <a
                            key={platform.name}
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-60 transition-colors duration-200"
                            title={platform.name}
                          >
                            {platform.name === "Apple" && (
                              <Image
                                src="/Apple.svg"
                                alt="Apple"
                                width={24}
                                height={24}
                                className="w-12 h-12"
                              />
                            )}
                            {platform.name === "Spotify" && (
                              <Image
                                src="/Spotify.svg"
                                alt="Spotify"
                                width={24}
                                height={24}
                                className="w-12 h-12"
                              />
                            )}
                            {platform.name === "YouTube" && (
                              <Image
                                src="/youtube.svg"
                                alt="YouTube"
                                width={24}
                                height={24}
                                className="w-12 h-12"
                              />
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
