import type { Dictionary } from "@/content/translations";
import { education as entries } from "@/content/education";
import { Section, SectionHeading } from "@/components/ui/section";
import type { Lang } from "@/types";

export function Education({ lang, t }: { lang: Lang; t: Dictionary }) {
  return (
    <Section id="education" labelledBy="education-title" tone="surface">
      <SectionHeading
        id="education-title"
        index="05"
        eyebrow={t.education.eyebrow}
        title={t.education.title}
      />

      <ol className="mt-14 divide-y divide-border border-y border-border">
        {entries.map((entry) => (
          <li
            key={entry.id}
            className="grid gap-2 py-7 sm:grid-cols-[10rem_1fr_auto] sm:items-baseline sm:gap-8"
          >
            <p className="font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-accent-text">
              {t.education.kinds[entry.kind]}
            </p>
            <div>
              <h3 className="font-display text-heading font-semibold">{entry.title[lang]}</h3>
              <p className="mt-1 text-muted">{entry.institution}</p>
            </div>
            {entry.period ? (
              <p className="font-mono text-[0.9375rem] text-muted">{entry.period}</p>
            ) : null}
          </li>
        ))}
      </ol>
    </Section>
  );
}
