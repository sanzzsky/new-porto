import type { CertificationEntry, EducationEntry } from "@/types";

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
];

/**
 * Formal certificates. Training programmes and learning paths live in
 * src/content/training.ts so the two are never presented as the same thing.
 */
export const certifications: CertificationEntry[] = [
  {
    id: "bangkit",
    title: { id: "Mobile Development", en: "Mobile Development" },
    issuer: "Bangkit Academy by Google, GoTo, Traveloka",
    period: { id: "September–Desember 2024", en: "September–December 2024" },
  },
  {
    // Issuer and date not confirmed yet, so they are omitted rather than guessed.
    id: "toefl",
    title: { id: "TOEFL Prediction", en: "TOEFL Prediction" },
  },
];
