import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Monospace chip for technical metadata. */
export function Tag({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-border px-2.5 py-1 font-mono text-[0.8125rem] leading-none text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
