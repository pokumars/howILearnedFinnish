import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Play, ArrowRight } from "lucide-react";

const filterTags = [
  "All Episodes",
  "Parent",
  "Student",
  "Finnish-speaking partner",
  "Non-Finnish-speaking partner",
  "A1 to C1",
  "With Kids",
  "Immersion method",
];

const episodes = [
  {
    id: 1,
    title: "FROM BEGINNER TO FLUENT IN 2 YEARS",
    description:
      "Maria shares her journey from not knowing a single word of Finnish to reaching C1 level in just two years. She discusses her immersion techniques, study habits, and how she overcame the challenges of Finnish grammar. Her unique approach combines traditional classroom learning with...",
    tags: ["Student", "A1 to C1", "Immersion method"],
    videoUrl: "#",
    platforms: ["apple", "spotify", "youtube"],
  },
  {
    id: 2,
    title: "LEARNING FINNISH WITH CHILDREN",
    description:
      "In this episode, Javier explains how having children in Finnish daycare accelerated his own language learning. He shares practical tips for parents who want to learn alongside their children and how to create a bilingual home environment that benefits everyone in the family...",
    tags: ["Parent", "With Kids", "Immersion method"],
    videoUrl: "#",
    platforms: ["apple", "spotify", "youtube"],
  },
  {
    id: 3,
    title: "FINNISH THROUGH RELATIONSHIPS",
    description:
      "Aisha discusses how her relationship with a Finnish partner helped her learn the language naturally. She shares honest insights about the challenges of language barriers in relationships and provides strategies for using everyday conversations as learning opportunities...",
    tags: ["Finnish-speaking partner", "A1 to C1"],
    videoUrl: "#",
    platforms: ["apple", "spotify", "youtube"],
  },
];

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
                  <div className="md:w-2/5 bg-purple-100 flex items-center justify-center p-8">
                    <div className="relative">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Episode Content */}
                  <div className="md:w-3/5 p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 uppercase">
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
                      <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200 flex items-center gap-2">
                        WATCH EPISODE
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      {/* Platform Icons */}
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            A
                          </span>
                        </div>
                        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">♪</span>
                        </div>
                        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                          <Play className="w-3 h-3 text-white" />
                        </div>
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
