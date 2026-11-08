import type { Dictionary } from "@/content/translations";
import { Section, SectionHeading } from "@/components/ui/section";
import { Portrait } from "@/components/visuals/portrait";

export function About({ t }: { t: Dictionary }) {
  return (
    <Section id="about" labelledBy="about-title">
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5 lg:order-2">
          <Portrait
            variant="full"
            alt={t.about.portraitAlt}
            placeholderAlt={t.about.portraitPlaceholderAlt}
            label={t.about.portraitLabel}
            sizes="(min-width: 1024px) 30rem, 90vw"
            className="mx-auto max-w-sm lg:max-w-none"
          />
        </div>
        <div className="lg:col-span-7 lg:order-1">
          <SectionHeading
            id="about-title"
            index="04"
            eyebrow={t.about.eyebrow}
            title={t.about.title}
          />
          <div className="mt-8 max-w-2xl space-y-5 text-lead text-muted">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
