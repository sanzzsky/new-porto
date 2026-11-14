import type { Dictionary } from "@/content/translations";
import { certifications, education as entries } from "@/content/education";
import { Section, SectionHeading } from "@/components/ui/section";
import type { EducationKind, Lang } from "@/types";

/**
 * Formal education and formal certificates in one list. Training programmes and
 * learning paths are deliberately kept in their own section (Training).
 */
export function Education({ lang, t }: { lang: Lang; t: Dictionary }) {
  const rows: Array<{
    id: string;
    kind: EducationKind;
    title: string;
    detail?: string;
    period?: string;
  }> = [
    ...entries.map((entry) => ({
      id: entry.id,
      kind: entry.kind,
      title: entry.title[lang],
      detail: entry.institution,
      period: entry.period,
    })),
    ...certifications.map((entry) => ({
      id: entry.id,
      kind: "certification" as const,
      title: entry.title[lang],
      detail: entry.issuer,
      period: entry.period?.[lang],
    })),
  ];

  return (
    <Section id="education" labelledBy="education-title" tone="surface">
      <SectionHeading
        id="education-title"
        index="05"
        eyebrow={t.education.eyebrow}
        title={t.education.title}
      />

      <ol className="mt-14 divide-y divide-border border-y border-border">
        {rows.map((row) => (
          <li
            key={row.id}
            className="grid gap-2 py-7 sm:grid-cols-[10rem_1fr_auto] sm:items-baseline sm:gap-8"
          >
            <p className="font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-accent-text">
              {t.education.kinds[row.kind]}
            </p>
            <div className="min-w-0">
              <h3 className="font-display text-heading font-semibold text-balance">{row.title}</h3>
              {row.detail ? <p className="mt-1 text-muted">{row.detail}</p> : null}
            </div>
            {row.period ? (
              <p className="font-mono text-[0.9375rem] text-muted">{row.period}</p>
            ) : null}
          </li>
        ))}
      </ol>
    </Section>
  );
}
