"use client";

import { useState } from "react";
import { Check, Share2 } from "lucide-react";
import { BASE_URL } from "@/lib/config";

interface SharePromptProps {
  /** Site path of the page being shared, e.g. "/episode/5" */
  path: string;
  heading: string;
  /** Message that goes with the link in the share sheet */
  text: string;
  /** Page type sent to Umami, e.g. "episode" or "blog" */
  context: string;
}

// Opens the device's share sheet where there is one (phones, Safari),
// otherwise copies the link, or shows it to copy by hand if the clipboard is blocked.
export default function SharePrompt({
  path,
  heading,
  text,
  context,
}: SharePromptProps) {
  const [copied, setCopied] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const url = `${BASE_URL}${path}`;

  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ text, url });
      } catch {
        // Closing the share sheet rejects; nothing to do
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(`${text} ${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setShowLink(true);
    }
  };

  return (
    <div className="p-6 bg-purple-50 border border-purple-100 rounded-lg">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="font-semibold text-gray-800">{heading}</p>
          <p className="text-sm text-gray-600 mt-1">
            Personal recommendations are how this podcast grows.
          </p>
        </div>
        <button
          type="button"
          onClick={share}
          className="inline-flex items-center justify-center gap-2 shrink-0 bg-purple-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200"
          data-umami-event="share_click"
          data-umami-event-context={context}
          data-umami-event-path={path}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Link copied
            </>
          ) : (
            <>
              <Share2 className="w-4 h-4" />
              Share
            </>
          )}
        </button>
      </div>
      {showLink && (
        <input
          readOnly
          value={url}
          aria-label="Link to share"
          onFocus={(e) => e.currentTarget.select()}
          autoFocus
          className="mt-4 w-full px-3 py-2 text-sm text-gray-700 bg-white border border-purple-200 rounded-lg"
        />
      )}
    </div>
  );
}
