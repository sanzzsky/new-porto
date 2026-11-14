import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Expertise } from "@/components/sections/expertise";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";
import { Training } from "@/components/sections/training";
import { getDictionary, getLocale } from "@/lib/i18n";

export default async function Page() {
  const lang = await getLocale();
  const t = getDictionary(lang);

  return (
    <>
      <SiteHeader lang={lang} t={t} />
      <main id="main" className="flex-1">
        <Hero t={t} />
        <Expertise t={t} />
        <Projects lang={lang} t={t} />
        <Stack t={t} />
        <About t={t} />
        <Education lang={lang} t={t} />
        <Training lang={lang} t={t} />
        <Contact t={t} />
      </main>
      <SiteFooter t={t} />
    </>
  );
}
