import { getCountryCode } from "@/lib/flags";

export default function Flag({
  country,
  className = "",
}: {
  country: string | undefined;
  className?: string;
}) {
  const code = getCountryCode(country);
  if (!code) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://flagcdn.com/w20/${code}.png`}
      srcSet={`https://flagcdn.com/w40/${code}.png 2x`}
      width={20}
      height={15}
      alt={country ?? ""}
      title={country}
      className={`inline-block ${className}`}
    />
  );
}
