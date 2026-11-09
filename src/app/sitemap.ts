import type { MetadataRoute } from "next";
import { defaultLocale, locales } from "@/lib/locales";
import { absoluteUrl, getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // No configured site URL (production only): publish an empty sitemap instead
  // of invalid, relative or localhost URLs.
  if (!getSiteUrl()) return [];

  const languages: Record<string, string> = Object.fromEntries(
    locales.map((locale) => [locale, absoluteUrl(`/${locale}`) as string]),
  );
  languages["x-default"] = absoluteUrl(`/${defaultLocale}`) as string;

  return locales.map((locale) => ({
    url: absoluteUrl(`/${locale}`) as string,
    alternates: { languages },
  }));
}
