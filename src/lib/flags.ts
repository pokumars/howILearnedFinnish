const countryCode: Record<string, string> = {
  "United Kingdom": "gb",
  Germany: "de",
  Iran: "ir",
  Russia: "ru",
  Ghana: "gh",
  Cameroon: "cm",
  Vietnam: "vn",
  Philippines: "ph",
  Sweden: "se",
  Canada: "ca",
  Indonesia: "id",
};

export function getCountryCode(country: string | undefined): string {
  if (!country) return "";
  return countryCode[country] ?? "";
}
