import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./container";

export function Section({
  id,
  labelledBy,
  tone = "default",
  className,
  children,
}: {
  id: string;
  labelledBy: string;
  tone?: "default" | "surface";
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "py-section",
        tone === "surface" && "border-y border-border bg-surface",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  id,
  index,
  eyebrow,
  title,
  intro,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-[0.8125rem] uppercase tracking-[0.14em] text-accent-text">
        <span aria-hidden="true">{index} — </span>
        {eyebrow}
      </p>
      <h2 id={id} className="mt-4 font-display text-title font-semibold text-balance">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 max-w-2xl text-lead text-muted">{intro}</p>
      ) : null}
    </div>
  );
}
