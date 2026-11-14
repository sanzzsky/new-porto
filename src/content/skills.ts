import type { DisciplineId, StackGroupId } from "@/types";

/** The three primary disciplines and the technologies listed for each. */
export const disciplines: Array<{ id: DisciplineId; items: string[] }> = [
  {
    id: "android",
    items: ["Kotlin", "Android Studio", "Firebase", "REST API"],
  },
  {
    id: "web",
    items: ["JavaScript", "TypeScript", "Next.js", "React", "Tailwind CSS"],
  },
  {
    id: "ai",
    items: ["Python", "AI integration", "LLM applications", "Prompt engineering"],
  },
];

/**
 * Technology overview, grouped by discipline. Names are the plain product or
 * competency names — no proficiency levels, since none are measured.
 */
export const stackGroups: Array<{ id: StackGroupId; items: string[] }> = [
  { id: "mobile", items: ["Kotlin", "XML", "Android Studio"] },
  {
    id: "frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  { id: "backend", items: ["PHP", "REST API"] },
  { id: "database", items: ["MySQL", "Firebase"] },
  {
    id: "ai",
    items: [
      "Python",
      "Machine Learning",
      "LLM Applications",
      "Prompt Engineering",
      "Google Colab",
      "Anaconda",
    ],
  },
  { id: "gis", items: ["QGIS", "Spatial Data Processing", "Map Visualization"] },
  { id: "game", items: ["Unity", "Unreal Engine"] },
  {
    id: "tools",
    items: ["Git", "GitHub", "Visual Studio Code", "Cursor", "Software Testing"],
  },
  { id: "design", items: ["Figma", "Canva", "UI/UX Design"] },
  {
    id: "productivity",
    items: ["Microsoft Office", "Data Management", "Report Preparation"],
  },
];
