import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/profile";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getDictionary, getLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLocale();
  const { notFound: copy } = getDictionary(lang);

  return {
    title: `${copy.code} — ${copy.title}`,
    description: copy.description,
    robots: { index: false, follow: false },
  };
}

export default async function NotFound() {
  const lang = await getLocale();
  const t = getDictionary(lang);

  return (
    <>
      <header className="border-b border-border">
        <Container className="flex h-16 items-center justify-between gap-4">
          <Link
            href={`/${lang}`}
            aria-label={t.a11y.home}
            className="flex min-h-11 min-w-11 items-center gap-3 font-display text-base font-semibold tracking-tight"
          >
            <span
              aria-hidden="true"
              className="flex size-9 items-center justify-center rounded-md border border-accent/60 bg-accent/15 text-sm text-accent-text"
            >
              {profile.initials}
            </span>
            <span aria-hidden="true" className="hidden min-[400px]:inline">
              {profile.name}
            </span>
          </Link>
          <LanguageSwitcher current={lang} groupLabel={t.a11y.languageGroup} />
        </Container>
      </header>
      <main id="main" className="flex flex-1 flex-col">
        <Container className="flex flex-1 flex-col justify-center py-section">
          <p className="font-mono text-[0.8125rem] uppercase tracking-[0.14em] text-accent-text">
            {t.notFound.code}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-display font-semibold text-balance">
            {t.notFound.title}
          </h1>
          <p className="mt-6 max-w-xl text-lead text-muted">{t.notFound.description}</p>
          <div className="mt-9">
            <Button href={`/${lang}`}>{t.notFound.home}</Button>
          </div>
        </Container>
      </main>
    </>
  );
}
