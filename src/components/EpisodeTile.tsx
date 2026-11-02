import Image from "next/image";
import Link from "next/link";
import { Episode } from "@/constants/episodes";
import Flag from "./Flag";

interface EpisodeTileProps {
  episode: Episode;
  /** Where the tile sits, sent to Umami with the click */
  source: string;
}

export default function EpisodeTile({ episode, source }: EpisodeTileProps) {
  return (
    <Link
      href={`/episode/${episode.id}`}
      className="group flex flex-col bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-purple-300 hover:shadow-md transition-all duration-200"
      data-umami-event="episode_opened"
      data-umami-event-episode-id={episode.id}
      data-umami-event-episode-title={episode.title}
      data-umami-event-source={source}
    >
      <Image
        src={episode.thumbnail}
        alt={episode.title}
        width={400}
        height={225}
        className="w-full aspect-video object-cover"
      />
      <div className="p-4">
        <p className="font-semibold text-gray-800 leading-snug line-clamp-2 group-hover:text-purple-600 transition-colors duration-200">
          {episode.title}
        </p>
        {episode.guest && (
          <p className="mt-2 text-sm text-gray-500">
            <Flag country={episode.guest.from} className="mr-1.5 align-middle" />
            {episode.guest.name} · {episode.guest.profession}
          </p>
        )}
      </div>
    </Link>
  );
}
