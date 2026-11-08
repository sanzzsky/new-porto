import type { Localized, Portrait } from "@/types";

interface Profile {
  name: string;
  initials: string;
  role: Localized;
  github: string;
  githubHandle: string;
  /** TODO: add the real address. While null the site shows a marked placeholder. */
  email: string | null;
  /** TODO: add the real profile URL. While null the site shows a marked placeholder. */
  linkedin: string | null;
  /**
   * TODO: add a real portrait, e.g.
   * { src: "/portrait.jpg", width: 800, height: 1000 } with the file in /public.
   */
  portrait: Portrait | null;
  copyrightYear: number;
}

export const profile: Profile = {
  name: "Sandi Zikrullah",
  initials: "SZ",
  role: { id: "Software Developer", en: "Software Developer" },
  github: "https://github.com/sanzzsky",
  githubHandle: "sanzzsky",
  email: null,
  linkedin: null,
  portrait: null,
  // Fixed on purpose: reading the clock during prerender is not allowed with cacheComponents.
  copyrightYear: 2026,
};
