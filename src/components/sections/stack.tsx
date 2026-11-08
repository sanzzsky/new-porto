import { Brain, Database, Layers, Smartphone, type LucideIcon } from "lucide-react";
import type { Dictionary } from "@/content/translations";
import { stackGroups } from "@/content/skills";
import { Section, SectionHeading } from "@/components/ui/section";
import type { StackGroupId } from "@/types";

const icons: Record<StackGroupId, LucideIcon> = {
  mobile: Smartphone,
  frontend: Layers,
  backend: Database,
  ai: Brain,
};

export function Stack({ t }: { t: Dictionary }) {
  return (
    <Section id="stack" labelledBy="stack-title" tone="surface">
      <SectionHeading
        id="stack-title"
        index="03"
        eyebrow={t.stack.eyebrow}
        title={t.stack.title}
        intro={t.stack.intro}
      />

      <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {stackGroups.map((group) => {
          const Icon = icons[group.id];
          const headingId = `stack-${group.id}`;
          return (
            <div key={group.id} className="border-t-2 border-accent pt-5">
              <div className="flex items-center gap-3">
                <Icon size={20} aria-hidden="true" className="text-accent-text" />
                <h3 id={headingId} className="font-display text-lg font-semibold">
                  {t.stack.groups[group.id]}
                </h3>
              </div>
              <ul
                aria-labelledby={headingId}
                className="mt-5 divide-y divide-border border-y border-border"
              >
                {group.items.map((item) => (
                  <li key={item} className="flex min-h-12 items-center font-mono text-[0.9375rem]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
