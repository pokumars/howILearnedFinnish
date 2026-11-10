"use client";

import { Flag } from "lucide-react";
import { useFeedback } from "./FeedbackWidget";

interface ReportProblemButtonProps {
  /** Identifies the item being reported, e.g. { episode: 5 } */
  metadata: Record<string, unknown>;
  label?: string;
}

// Opens the feedback panel as a bug report about one item.
export default function ReportProblemButton({
  metadata,
  label = "Report a problem",
}: ReportProblemButtonProps) {
  const { available, open } = useFeedback();
  if (!available) return null;

  return (
    <button
      type="button"
      onClick={() => open({ category: "bug", metadata })}
      aria-haspopup="dialog"
      className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-purple-600 transition-colors duration-200"
    >
      <Flag className="w-3.5 h-3.5" aria-hidden />
      {label}
    </button>
  );
}
