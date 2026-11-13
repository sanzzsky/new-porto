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

/** Technology overview, grouped. Add items here only once they are confirmed. */
export const stackGroups: Array<{ id: StackGroupId; items: string[] }> = [
  { id: "mobile", items: ["Kotlin", "Android Studio"] },
  {
    id: "frontend",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  { id: "backend", items: ["Firebase", "REST API"] },
  { id: "ai", items: ["Python", "LLM applications", "Prompt engineering"] },
  // GitHub is a tool, not an AI technology, so it sits in its own group.
  { id: "tools", items: ["GitHub"] },
];
