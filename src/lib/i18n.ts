import { lang } from "next/root-params";
import { notFound } from "next/navigation";
import { translations, type Dictionary } from "@/content/translations";
import type { Lang } from "@/types";
import { hasLocale } from "./locales";

/** Current language from the `[lang]` root param. Server Components only. */
export async function getLocale(): Promise<Lang> {
  const value = await lang();
  if (!hasLocale(value)) notFound();
  return value;
}

export function getDictionary(locale: Lang): Dictionary {
  return translations[locale];
}
