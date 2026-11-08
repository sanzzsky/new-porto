import type { Lang } from "@/types";

export const locales = ["id", "en"] as const satisfies readonly Lang[];
export const defaultLocale: Lang = "id";

export function hasLocale(value: string): value is Lang {
  return (locales as readonly string[]).includes(value);
}

export const localeMeta: Record<Lang, { name: string; short: string; og: string }> = {
  id: { name: "Bahasa Indonesia", short: "ID", og: "id_ID" },
  en: { name: "English", short: "EN", og: "en_US" },
};
