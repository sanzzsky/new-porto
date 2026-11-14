export type Lang = "id" | "en";

/** A value that exists in every supported language. */
export type Localized<T = string> = Record<Lang, T>;

export type ProjectSlug =
  | "vert2"
  | "pentol-oy"
  | "maha"
  | "dompetku"
  | "food-recognition-ai"
  | "cuminfo";

export interface Project {
  slug: ProjectSlug;
  title: string;
  /** Short label such as "Android · Health". */
  category: Localized;
  summary: Localized;
  description: Localized;
  /** Only facts confirmed by the owner. Leave empty rather than guess. */
  highlights: Localized<string[]>;
  /** Only verified technologies. Leave empty until confirmed. */
  stack: string[];
  /** Add real URLs here when they exist. Never invent them. */
  links: { repo?: string; demo?: string };
  /** An honesty caveat shown in the details dialog. */
  caveat?: Localized;
}

export type EducationKind = "education" | "certification";

export interface EducationEntry {
  id: string;
  kind: EducationKind;
  institution: string;
  title: Localized;
  /** Only when verified. */
  period?: string;
}

/** A formal certificate. Kept apart from training programmes on purpose. */
export interface CertificationEntry {
  id: string;
  title: Localized;
  /** Omitted when the issuer has not been confirmed. */
  issuer?: string;
  period?: Localized;
}

/** A course, programme or learning path that was worked through. */
export interface TrainingEntry {
  id: string;
  title: Localized;
  provider: string;
  period: Localized;
  /** Extra detail such as a duration. Never a grade or a score. */
  meta?: Localized;
  /** Modules the training covered, when the owner listed them. */
  topics?: string[];
  status: "completed";
}

export type DisciplineId = "android" | "web" | "ai";
export type StackGroupId =
  | "mobile"
  | "frontend"
  | "backend"
  | "database"
  | "ai"
  | "gis"
  | "game"
  | "tools"
  | "design"
  | "productivity";

export interface Portrait {
  src: string;
  width: number;
  height: number;
}
