"use client";

import { useEffect, useState } from "react";

interface VideoEmbedProps {
  videoId: string;
  title: string;
  thumbnail?: string;
  releaseAt?: string;
}

function formatRemaining(ms: number): string {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  const time = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  return days > 0 ? `${days}d ${time}` : time;
}

const VideoEmbed = ({ videoId, title, thumbnail, releaseAt }: VideoEmbedProps) => {
  const releaseTime = releaseAt ? new Date(releaseAt).getTime() : null;
  // null until mounted so server and client render the same markup
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    if (!releaseTime) return;
    setNow(Date.now());
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, [releaseTime]);

  const isReleased = !releaseTime || (now !== null && now >= releaseTime);

  if (isReleased) {
    return (
      <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          className="absolute top-0 left-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  const releaseLabel = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Helsinki",
  }).format(new Date(releaseTime));

  return (
    <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden bg-gray-900">
      {thumbnail && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={thumbnail}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-purple-200">
          Coming soon
        </span>
        <span className="mt-2 text-4xl sm:text-6xl font-bold font-mono tabular-nums">
          {now !== null ? formatRemaining(releaseTime - now) : "--:--:--"}
        </span>
        <span className="mt-3 text-sm sm:text-base text-gray-200">
          Releases {releaseLabel} (Helsinki time)
        </span>
      </div>
    </div>
  );
};

export default VideoEmbed;
