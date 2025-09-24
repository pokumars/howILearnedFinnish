interface PillButtonProps {
  text: string;
  onClick?: () => void;
  activated: boolean;
}

export default function PillButton({
  text,
  onClick,
  activated,
}: PillButtonProps) {
  // If no onClick is provided, render as a span (display-only)
  if (!onClick) {
    return (
      <span
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
          activated === true
            ? "bg-purple-600 text-white"
            : "bg-white text-gray-700 border border-purple-600"
        }`}
      >
        {text}
      </span>
    );
  }

  // If onClick is provided, render as a button (interactive)
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
        activated === true
          ? "bg-purple-600 text-white"
          : "bg-white text-gray-700 border border-purple-600 hover:bg-purple-50"
      }`}
    >
      {text}
    </button>
  );
}
