import { GitBranch, Link2, Mail } from "lucide-react";
import type { ReactNode } from "react";
import type { Dictionary } from "@/content/translations";
import { profile } from "@/content/profile";
import { WordHighlight } from "@/components/motion/word-highlight";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

/** WhatsApp brand mark (lucide ships no brand icons). */
function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={19}
      height={19}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.13-.13.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.05-.52-.099-.148-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  );
}

function Row({
  icon: iconNode,
  label,
  href,
  external,
  value,
  pendingTag,
  t,
}: {
  icon: ReactNode;
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
        {iconNode}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-subtle">
          {label}
        </span>
        {/* `anywhere` lets long addresses (email, profile URLs) shrink the grid
            item instead of pushing the column past the viewport at 320px. */}
        <span className="mt-0.5 block [overflow-wrap:anywhere]">{value}</span>
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
  const { email, whatsapp, whatsappDisplay, linkedin, linkedinDisplay, github, githubHandle } = profile;
  // Snugger bottom padding: the footer already carries its own top spacing.
  return (
    <Section id="contact" labelledBy="contact-title" className="pb-16 lg:pb-20">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="min-w-0 lg:col-span-7">
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
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={whatsapp} external externalHint={t.contact.opensInNewTab}>
              {t.contact.ctaWhatsapp}
            </Button>
            {email ? (
              <Button href={`mailto:${email}`} variant="secondary">
                {t.contact.ctaEmail}
              </Button>
            ) : null}
          </div>
        </div>

        <ul className="min-w-0 divide-y divide-border border-y border-border lg:col-span-5 lg:self-end">
          <li>
            <Row
              icon={<Mail size={19} aria-hidden="true" />}
              label={t.contact.email}
              href={email ? `mailto:${email}` : null}
              value={email ?? <span className="text-muted">{t.contact.emailPending}</span>}
              pendingTag={email ? undefined : t.contact.placeholderTag}
              t={t}
            />
          </li>
          <li>
            <Row
              icon={<WhatsAppIcon />}
              label={t.contact.whatsapp}
              href={whatsapp}
              external
              value={whatsappDisplay}
              t={t}
            />
          </li>
          <li>
            <Row
              icon={<GitBranch size={19} aria-hidden="true" />}
              label={t.contact.github}
              href={github}
              external
              value={`github.com/${githubHandle}`}
              t={t}
            />
          </li>
          <li>
            <Row
              icon={<Link2 size={19} aria-hidden="true" />}
              label={t.contact.linkedin}
              href={linkedin}
              external
              value={linkedin ? linkedinDisplay : <span className="text-muted">{t.contact.linkedinPending}</span>}
              pendingTag={linkedin ? undefined : t.contact.placeholderTag}
              t={t}
            />
          </li>
        </ul>
      </div>
    </Section>
  );
}
