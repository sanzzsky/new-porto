import type { TrainingEntry } from "@/types";

/**
 * Training programmes, courses and learning paths that were completed.
 *
 * The Google Cloud item is one learning path with three modules — not five
 * separate certificates, and not the "Generative AI Leader" professional
 * certification, which was not taken.
 */
export const training: TrainingEntry[] = [
  {
    id: "bangkit",
    title: { id: "Mobile Development", en: "Mobile Development" },
    provider: "Bangkit Academy by Google, GoTo, Traveloka",
    period: { id: "September–Desember 2024", en: "September–December 2024" },
    status: "completed",
  },
  {
    id: "gen-ai-leader",
    title: {
      id: "Generative AI Leader Learning Path",
      en: "Generative AI Leader Learning Path",
    },
    provider: "Google Cloud",
    period: { id: "Oktober 2026", en: "October 2026" },
    topics: ["Gen AI fundamentals", "Gen AI applications", "Gen AI agents"],
    status: "completed",
  },
  {
    id: "ai-fluency",
    title: {
      id: "AI Fluency: Framework and Foundations",
      en: "AI Fluency: Framework and Foundations",
    },
    provider: "Claude Academy",
    period: { id: "Oktober 2026", en: "October 2026" },
    status: "completed",
  },
  {
    id: "ai-introduction",
    title: {
      id: "Artificial Intelligence Introduction",
      en: "Artificial Intelligence Introduction",
    },
    provider: "MySkill / PT Linimuda Inspirasi Negeri",
    period: { id: "22 September 2025", en: "22 September 2025" },
    meta: { id: "Durasi 1 jam", en: "1 hour" },
    status: "completed",
  },
];
