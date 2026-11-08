import { Brain, Globe, Smartphone, type LucideIcon } from "lucide-react";
import type { Dictionary } from "@/content/translations";
import { disciplines } from "@/content/skills";
import { Section, SectionHeading } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";
import type { DisciplineId } from "@/types";

const icons: Record<DisciplineId, LucideIcon> = {
  android: Smartphone,
  web: Globe,
  ai: Brain,
};

export function Expertise({ t }: { t: Dictionary }) {
  return (
    <Section id="expertise" labelledBy="expertise-title">
      <SectionHeading
        id="expertise-title"
        index="01"
        eyebrow={t.expertise.eyebrow}
        title={t.expertise.title}
        intro={t.expertise.intro}
      />

      {/* Hairline grid: the 1px gaps show the border colour behind the cells. */}
      <ol className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-3">
        {disciplines.map((discipline, index) => {
          const Icon = icons[discipline.id];
          const copy = t.expertise.items[discipline.id];
          return (
            <li key={discipline.id} className="flex flex-col bg-bg p-7 sm:p-9">
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-md border border-accent/50 bg-accent/10 text-accent-text">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span aria-hidden="true" className="font-mono text-sm text-subtle">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-8 font-display text-heading font-semibold">{copy.title}</h3>
              <p className="mt-3 text-muted">{copy.description}</p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {discipline.items.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
