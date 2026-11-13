import { GitBranch, Link2, Mail, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import type { Dictionary } from "@/content/translations";
import { profile } from "@/content/profile";
import { WordHighlight } from "@/components/motion/word-highlight";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

function Row({
  icon: Icon,
  label,
  href,
  external,
  value,
  pendingTag,
  t,
}: {
  icon: LucideIcon;
  label: string;
  href: string | null;
  external?: boolean;
  value: ReactNode;
  pendingTag?: string;
  t: Dictionary;
}) {
  const body = (
    <>
      <span className="flex size-11 shrink-0 items-center justify-center rounded-md border border-border text-accent-text">
        <Icon size={19} aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-subtle">
          {label}
        </span>
        <span className="mt-0.5 block break-words">{value}</span>
      </span>
      {pendingTag ? (
        <span className="shrink-0 rounded-sm border border-dashed border-border-strong px-2 py-1 font-mono text-xs text-muted">
          {pendingTag}
        </span>
      ) : null}
    </>
  );

  const base = "flex items-center gap-4 py-4";
  return href ? (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} transition-colors duration-200 hover:bg-surface`}
    >
      {body}
      {external ? <span className="sr-only">{t.contact.opensInNewTab}</span> : null}
    </a>
  ) : (
    <div className={base}>{body}</div>
  );
}

export function Contact({ t }: { t: Dictionary }) {
  const { email, linkedin, github, githubHandle } = profile;
  // Snugger bottom padding: the footer already carries its own top spacing.
  return (
    <Section id="contact" labelledBy="contact-title" className="pb-16 lg:pb-20">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="font-mono text-[0.8125rem] uppercase tracking-[0.14em] text-accent-text">
            <span aria-hidden="true">06 — </span>
            {t.contact.eyebrow}
          </p>
          <WordHighlight
            id="contact-title"
            text={t.contact.statement}
            className="mt-4 font-display text-title font-semibold text-balance"
          />
          <p className="mt-6 max-w-xl text-lead text-muted">{t.contact.intro}</p>
          <div className="mt-9">
            {email ? (
              <Button href={`mailto:${email}`}>{t.contact.ctaEmail}</Button>
            ) : (
              <Button href={github} external externalHint={t.contact.opensInNewTab}>
                {t.contact.ctaGithub}
              </Button>
            )}
          </div>
        </div>

        <ul className="divide-y divide-border border-y border-border lg:col-span-5 lg:self-end">
          <li>
            <Row
              icon={Mail}
              label={t.contact.email}
              href={email ? `mailto:${email}` : null}
              value={email ?? <span className="text-muted">{t.contact.emailPending}</span>}
              pendingTag={email ? undefined : t.contact.placeholderTag}
              t={t}
            />
          </li>
          <li>
            <Row
              icon={GitBranch}
              label={t.contact.github}
              href={github}
              external
              value={`github.com/${githubHandle}`}
              t={t}
            />
          </li>
          <li>
            <Row
              icon={Link2}
              label={t.contact.linkedin}
              href={linkedin}
              external
              value={linkedin ?? <span className="text-muted">{t.contact.linkedinPending}</span>}
              pendingTag={linkedin ? undefined : t.contact.placeholderTag}
              t={t}
            />
          </li>
        </ul>
      </div>
    </Section>
  );
}
