import {
  Brain,
  ClipboardList,
  Database,
  Gamepad2,
  Layers,
  Map,
  PenTool,
  Server,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { Dictionary } from "@/content/translations";
import { stackGroups } from "@/content/skills";
import { Section, SectionHeading } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";
import type { StackGroupId } from "@/types";

const icons: Record<StackGroupId, LucideIcon> = {
  mobile: Smartphone,
  frontend: Layers,
  backend: Server,
  database: Database,
  ai: Brain,
  gis: Map,
  game: Gamepad2,
  tools: Wrench,
  design: PenTool,
  productivity: ClipboardList,
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

      {/* Compact cards instead of tall lists: ten groups stay scannable, and each
          card keeps the emerald top rule from the original single-column layout. */}
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {stackGroups.map((group) => {
          const Icon = icons[group.id];
          const headingId = `stack-${group.id}`;
          return (
            <div
              key={group.id}
              className="flex flex-col rounded-lg border border-border border-t-2 border-t-accent bg-bg p-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-md border border-accent/50 bg-accent/10 text-accent-text">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <h3
                  id={headingId}
                  className="min-w-0 font-display text-base font-semibold text-balance"
                >
                  {t.stack.groups[group.id]}
                </h3>
              </div>
              <ul aria-labelledby={headingId} className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
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
