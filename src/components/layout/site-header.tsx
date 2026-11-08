import Link from "next/link";
import { navItems } from "@/content/navigation";
import { profile } from "@/content/profile";
import type { Dictionary } from "@/content/translations";
import type { Lang } from "@/types";
import { buttonBase, buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { LanguageSwitcher } from "./language-switcher";
import { MobileNav } from "./mobile-nav";

export function SiteHeader({ lang, t }: { lang: Lang; t: Dictionary }) {
  const links = navItems
    .filter((item) => item.inHeader)
    .map((item) => ({ href: `#${item.id}`, label: t.nav[item.id] }));

  return (
    <header
      id="top"
      // The blur lives on a pseudo-element: backdrop-filter on the header itself would make it
      // the containing block for the mobile menu's `position: fixed`, collapsing the menu.
      className="sticky top-0 z-40 border-b border-border before:absolute before:inset-0 before:-z-10 before:bg-bg/90 before:backdrop-blur-md"
    >
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

        <nav aria-label={t.a11y.mainNav} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="link-draw inline-flex min-h-11 items-center px-3 text-[0.9375rem] text-muted transition-colors duration-200 hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher current={lang} groupLabel={t.a11y.languageGroup} />
          {/* Wrapper hides it: `hidden` and the button's own `inline-flex` would otherwise fight. */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className={cn(buttonBase, buttonVariants.primary, "min-h-11")}
            >
              {t.nav.cta}
            </a>
          </div>
          <MobileNav
            links={links}
            ctaLabel={t.nav.cta}
            ctaHref="#contact"
            navLabel={t.a11y.mainNav}
            openLabel={t.a11y.menuOpen}
            closeLabel={t.a11y.menuClose}
          />
        </div>
      </Container>
    </header>
  );
}
