import { ArrowUp, GitBranch } from "lucide-react";
import { navItems } from "@/content/navigation";
import { profile } from "@/content/profile";
import type { Dictionary } from "@/content/translations";
import { Container } from "@/components/ui/container";

export function SiteFooter({ t }: { t: Dictionary }) {
  return (
    <footer className="border-t border-border">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-heading font-semibold">{profile.name}</p>
            <p className="mt-3 max-w-xs text-muted">{t.footer.tagline}</p>
          </div>

          <nav aria-label={t.footer.navLabel}>
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="inline-flex min-h-11 items-center text-muted transition-colors duration-200 hover:text-fg"
                  >
                    {t.nav[item.id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-muted transition-colors duration-200 hover:text-fg"
            >
              <GitBranch size={18} aria-hidden="true" />
              GitHub · {profile.githubHandle}
              <span className="sr-only">{t.contact.opensInNewTab}</span>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-subtle">
            © {profile.copyrightYear} {profile.name}. {t.footer.rights}
          </p>
          <a
            href="#top"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-fg"
          >
            <ArrowUp size={16} aria-hidden="true" />
            {t.footer.backToTop}
          </a>
        </div>
      </Container>
    </footer>
  );
}
