import { ShieldCheck, Wine } from "lucide-react";

const ALCOHOL_URL = "https://www.passipro.com/en/alcohol";
const HYGIENE_URL = "https://www.passipro.com/en/hygiene";

interface SupportBarProps {
  /** Page/location sent to Umami so clicks can be traced back, e.g. "blog_my-slug_top" */
  source: string;
}

// Deliberately styled like a regular banner ad (bordered box, "Ad" tag) rather
// than blended into the article, since it's promoting the author's own paid products.
export default function SupportBar({ source }: SupportBarProps) {
  const linkProps = (product: "alcohol" | "hygiene") => ({
    target: "_blank",
    rel: "noopener noreferrer",
    className:
      "font-semibold text-gray-900 underline decoration-[#FFD166] decoration-2 underline-offset-2 hover:decoration-[#E6B84D]",
    "data-umami-event": "support_bar_click",
    "data-umami-event-product": product,
    "data-umami-event-source": source,
  });

  return (
    <div className="my-8 border border-[#FFD166] bg-[#FFD166]/15 rounded-md overflow-hidden not-prose">
      <div className="flex items-start gap-3 px-4 py-3">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-900 bg-[#FFD166] border border-[#E6B84D] rounded px-1.5 py-0.5 shrink-0 mt-0.5">
          Ad
        </span>
        <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
          <Wine className="w-4 h-4 text-gray-700" />
          <ShieldCheck className="w-4 h-4 text-gray-700" />
        </div>
        <div>
          <p className="text-sm text-gray-800">
            I also built <span className="font-semibold">PassiPRO</span> —
            prep for the{" "}
            <a href={ALCOHOL_URL} {...linkProps("alcohol")}>
              alcohol pass
            </a>{" "}
            and the{" "}
            <a href={HYGIENE_URL} {...linkProps("hygiene")}>
              hygiene pass
            </a>{" "}
            online.
          </p>
          <p className="text-xs text-gray-600 mt-0.5">
            Support my ability to keep &quot;How I Learned Finnish&quot; free.
            Use my other projects.
          </p>
        </div>
      </div>
    </div>
  );
}
