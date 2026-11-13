import { Check, Info } from "lucide-react";
import type { Dictionary } from "@/content/translations";
import { projects } from "@/content/projects";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";
import { ProjectVisual } from "@/components/visuals/project-visuals";
import { cn } from "@/lib/cn";
import type { Lang, Project } from "@/types";
import { ProjectDetails } from "./project-details";

// 7/5, 5/7, 7/5 on desktop: the rhythm alternates instead of repeating one card.
const spans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-7",
  "lg:col-span-5",
];

function DetailBody({ project, lang, t }: { project: Project; lang: Lang; t: Dictionary }) {
  const highlights = project.highlights[lang];
  const { repo, demo } = project.links;
  return (
    <div className="mt-5 space-y-6 text-[0.9375rem]">
      <p className="font-mono text-[0.8125rem] text-accent-text">{project.category[lang]}</p>
      <p className="text-muted">{project.description[lang]}</p>

      {highlights.length > 0 ? (
        <div>
          <h4 className="font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-subtle">
            {t.projects.highlights}
          </h4>
          <ul className="mt-3 space-y-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <Check size={16} aria-hidden="true" className="mt-1 shrink-0 text-accent-text" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div>
        <h4 className="font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-subtle">
          {t.projects.stack}
        </h4>
        {project.stack.length > 0 ? (
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li key={item}>
                <Tag>{item}</Tag>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-muted">{t.projects.stackPending}</p>
        )}
      </div>

      <div>
        <h4 className="font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-subtle">
          {t.projects.links}
        </h4>
        {repo || demo ? (
          <div className="mt-3 flex flex-wrap gap-3">
            {repo ? (
              <Button href={repo} variant="secondary" external externalHint={t.contact.opensInNewTab}>
                {t.projects.repo}
              </Button>
            ) : null}
            {demo ? (
              <Button href={demo} variant="secondary" external externalHint={t.contact.opensInNewTab}>
                {t.projects.demo}
              </Button>
            ) : null}
          </div>
        ) : (
          <p className="mt-3 text-muted">{t.projects.linksPending}</p>
        )}
      </div>

      {project.caveat ? (
        <p className="flex items-start gap-2.5 rounded-md border border-border bg-bg p-3.5">
          <Info size={16} aria-hidden="true" className="mt-1 shrink-0 text-accent-text" />
          <span>{project.caveat[lang]}</span>
        </p>
      ) : null}

      <p className="border-t border-border pt-4 text-sm text-subtle">{t.projects.previewNote}</p>
    </div>
  );
}

export function Projects({ lang, t }: { lang: Lang; t: Dictionary }) {
  return (
    <Section id="projects" labelledBy="projects-title">
      <SectionHeading
        id="projects-title"
        index="02"
        eyebrow={t.projects.eyebrow}
        title={t.projects.title}
        intro={t.projects.intro}
      />

      {/* grid-cols-1 uses minmax(0,1fr) tracks: without it the implicit single
          column grew to the illustration's min-content width and overflowed
          320px viewports by ~17px. */}
      <ol className="mt-14 grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2 lg:grid-cols-12">
        {projects.map((project, index) => (
          <li key={project.slug} className={cn("group flex min-w-0 flex-col", spans[index])}>
            <div className="h-72 overflow-hidden rounded-lg border border-border bg-surface sm:h-80 lg:h-[22rem]">
              <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                <ProjectVisual slug={project.slug} />
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3 font-mono text-[0.8125rem]">
              <span className="text-accent-text">0{index + 1}</span>
              <span className="text-muted">{project.category[lang]}</span>
            </div>
            <h3 className="mt-2 font-display text-heading font-semibold">{project.title}</h3>
            <p className="mt-2 max-w-prose text-muted">{project.summary[lang]}</p>
            <div className="mt-4">
              <ProjectDetails
                title={project.title}
                triggerLabel={t.projects.viewDetails}
                closeLabel={t.projects.close}
              >
                <DetailBody project={project} lang={lang} t={t} />
              </ProjectDetails>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
