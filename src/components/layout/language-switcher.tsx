"use client";

import { useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";
import { locales, localeMeta } from "@/lib/locales";
import type { Lang } from "@/types";

function subscribeToHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}
const getHash = () => window.location.hash;
const getServerHash = () => "";

/**
 * Switches `/id` <-> `/en` with plain anchors. The two languages are separate
 * statically generated documents sharing one root layout, so a normal
 * navigation keeps `<html lang>` correct and never leaves a hidden, cached
 * copy of the other language in the DOM (which would duplicate anchor ids).
 * The current #hash is appended so the reader stays on the same section.
 */
export function LanguageSwitcher({
  current,
  groupLabel,
}: {
  current: Lang;
  groupLabel: string;
}) {
  const hash = useSyncExternalStore(subscribeToHash, getHash, getServerHash);

  return (
    <div
      role="group"
      aria-label={groupLabel}
      className="flex items-center rounded-md border border-border p-0.5"
    >
      {locales.map((locale) => {
        const active = locale === current;
        const { name, short } = localeMeta[locale];
        return (
          <a
            key={locale}
            href={`/${locale}${hash}`}
            lang={locale}
            hrefLang={locale}
            aria-label={`${name} (${short})`}
            aria-current={active ? "true" : undefined}
            onClick={active ? (event) => event.preventDefault() : undefined}
            className={cn(
              "flex min-h-11 min-w-11 items-center justify-center rounded-[0.3125rem] px-2.5 font-mono text-[0.8125rem] font-medium transition-colors duration-200",
              active ? "bg-elevated text-fg" : "text-muted hover:text-fg",
            )}
          >
            {short}
          </a>
        );
      })}
    </div>
  );
}
