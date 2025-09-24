import { Play, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PillButton from "./pillButton";

interface Platform {
  name: string;
  url: string;
}

interface Episode {
  id: number;
  title: string;
  description: string;
  tags: string[];
  videoUrl: string;
  thumbnail: string;
  platforms: Platform[];
}

interface EpisodeCardProps {
  episode: Episode;
}

export default function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Video Thumbnail */}
        <div className="md:w-2/5 relative">
          <Link
            href={`/episode/${episode.id}`}
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
          </Link>
        </div>

        {/* Episode Content */}
        <div className="md:w-3/5 p-6">
          <Link href={`/episode/${episode.id}`}>
            <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-purple-600 transition-colors duration-200">
              {episode.title}
            </h3>
          </Link>
          <p className="text-gray-600 mb-4 line-clamp-3">
            {episode.description}
            <Link
              href={`/episode/${episode.id}`}
              className="text-purple-600 hover:text-purple-700 ml-1"
            >
              Read More
            </Link>
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Link
              href={`/episode/${episode.id}`}
              className="hidden md:block bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200 flex items-center gap-2 w-fit"
            >
              WATCH EPISODE
              <ArrowRight className="w-4 h-4" />
            </Link>

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
          <div className="flex flex-row flex-wrap gap-2 pt-4">
            {episode.tags.map((tag) => {
              return (
                <PillButton
                  text={tag}
                  key={tag}
                  onClick={() => {}}
                  activated={false}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
