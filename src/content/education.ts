import type { EducationEntry } from "@/types";

/**
 * Titles and dates are only filled in where the owner confirmed them.
 * No certificate IDs or links are included on purpose.
 */
export const education: EducationEntry[] = [
  {
    id: "umri",
    kind: "education",
    institution: "Universitas Muhammadiyah Riau",
    title: { id: "Teknik Informatika", en: "Informatics Engineering" },
  },
  {
    id: "bangkit",
    kind: "program",
    institution: "Bangkit Academy",
    title: { id: "Mobile Development", en: "Mobile Development" },
    period: "2024",
  },
  {
    id: "myskill",
    kind: "course",
    institution: "MySkill",
    title: {
      id: "Artificial Intelligence Introduction",
      en: "Artificial Intelligence Introduction",
    },
  },
];
