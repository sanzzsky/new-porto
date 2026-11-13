import { ArrowDown } from "lucide-react";
import type { Dictionary } from "@/content/translations";
import { profile } from "@/content/profile";
import { Enter } from "@/components/motion/enter";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { HeroComposition } from "@/components/visuals/hero-composition";
import { Portrait } from "@/components/visuals/portrait";

export function Hero({ t }: { t: Dictionary }) {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="border-b border-border"
    >
      {/* Two columns from 768px up so the composition is not pushed below the
          first screen on tablets. The 7/5 split keeps the headline wide enough
          for four lines at desktop instead of six. */}
      <Container className="grid items-center gap-12 py-12 sm:py-16 md:grid-cols-12 md:gap-8 lg:min-h-[calc(88svh-4rem)] lg:gap-12">
        <div className="md:col-span-7">
          <Enter>
            <p className="flex items-center gap-3 font-mono text-[0.8125rem] uppercase tracking-[0.14em] text-accent-text">
              <span aria-hidden="true" className="size-2 bg-accent-text" />
              {t.hero.eyebrow}
            </p>
          </Enter>
          <Enter delay={0.08}>
            <h1
              id="hero-title"
              className="mt-6 font-display text-display font-semibold text-balance"
            >
              {t.hero.headline}
            </h1>
          </Enter>
          <Enter delay={0.16}>
            <p className="mt-6 max-w-xl text-lead text-muted">{t.hero.intro}</p>
          </Enter>
          <Enter delay={0.24} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#projects" icon={<ArrowDown size={18} aria-hidden="true" />}>
              {t.hero.ctaProjects}
            </Button>
            <Button href="#contact" variant="secondary">
              {t.hero.ctaContact}
            </Button>
          </Enter>
          <Enter delay={0.32} className="mt-10 flex items-center gap-4 border-t border-border pt-6">
            <Portrait
              variant="chip"
              alt={t.about.portraitAlt}
              placeholderAlt={t.about.portraitPlaceholderAlt}
            />
            <div>
              <p className="font-medium">{profile.name}</p>
              <p className="font-mono text-[0.8125rem] text-muted">{t.hero.credential}</p>
            </div>
          </Enter>
        </div>

        <Enter delay={0.2} className="md:col-span-5">
          <HeroComposition label={t.hero.visualLabel} />
        </Enter>
      </Container>
    </section>
  );
}
