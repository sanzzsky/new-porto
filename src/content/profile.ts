import type { Localized, Portrait } from "@/types";

interface Profile {
  name: string;
  initials: string;
  role: Localized;
  github: string;
  githubHandle: string;
  email: string | null;
  /** Full wa.me link: digits with the country code, no leading zero. */
  whatsapp: string;
  /** Readable phone number for the contact list. */
  whatsappDisplay: string;
  linkedin: string | null;
  /** Readable profile path for the contact list. */
  linkedinDisplay: string;
  portrait: Portrait | null;
  copyrightYear: number;
}

export const profile: Profile = {
  name: "Sandi Zikrullah",
  initials: "SZ",
  role: { id: "Software Developer", en: "Software Developer" },
  github: "https://github.com/sanzzsky",
  githubHandle: "sanzzsky",
  email: "sandizikrullah.official@gmail.com",
  whatsapp: "https://wa.me/6282311256308",
  whatsappDisplay: "+62 823-1125-6308",
  linkedin: "https://www.linkedin.com/in/sandi-zikrullah-7186a1253",
  linkedinDisplay: "linkedin.com/in/sandi-zikrullah-7186a1253",
  portrait: { src: "/profile.jpg", width: 1792, height: 2390 },
  // Fixed on purpose: reading the clock during prerender is not allowed with cacheComponents.
  copyrightYear: 2026,
};
