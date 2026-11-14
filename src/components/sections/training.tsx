import { Check, GraduationCap } from "lucide-react";
import type { Dictionary } from "@/content/translations";
import { training } from "@/content/training";
import { Section, SectionHeading } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";
import type { Lang } from "@/types";

/**
 * Training, courses and learning paths. Separate from the Education section so
 * a learning path is never read as a professional certification.
 */
export function Training({ lang, t }: { lang: Lang; t: Dictionary }) {
  return (
    <Section id="training" labelledBy="training-title">
      <SectionHeading
        id="training-title"
        index="06"
        eyebrow={t.training.eyebrow}
        title={t.training.title}
        intro={t.training.intro}
      />

      <ol className="mt-14 divide-y divide-border border-y border-border">
        {training.map((entry) => (
          <li
            key={entry.id}
            className="grid gap-4 py-7 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-10"
          >
            <div className="min-w-0">
              <div className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-md border border-accent/50 bg-accent/10 text-accent-text">
                  <GraduationCap size={18} aria-hidden="true" />
                </span>
                <h3 className="font-display text-heading font-semibold text-balance">
                  {entry.title[lang]}
                </h3>
              </div>
              <p className="mt-2 text-muted">{entry.provider}</p>

              {entry.topics ? (
                <div className="mt-4">
                  <p className="font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-subtle">
                    {t.training.topics}
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {entry.topics.map((topic) => (
                      <li key={topic}>
                        <Tag>{topic}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:flex-col sm:items-end sm:gap-2 sm:text-right">
              <p className="font-mono text-[0.9375rem] text-muted">{entry.period[lang]}</p>
              {entry.meta ? <p className="text-sm text-subtle">{entry.meta[lang]}</p> : null}
              <span className="inline-flex items-center gap-1.5 rounded-sm border border-accent/50 bg-accent/10 px-2 py-1 font-mono text-xs text-accent-text">
                <Check size={13} aria-hidden="true" />
                {t.training.completed}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
