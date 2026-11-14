export const navItems = [
  { id: "expertise", inHeader: true },
  { id: "projects", inHeader: true },
  { id: "stack", inHeader: true },
  { id: "about", inHeader: true },
  { id: "education", inHeader: false },
  { id: "training", inHeader: false },
  { id: "contact", inHeader: true },
] as const;

export type NavId = (typeof navItems)[number]["id"];
