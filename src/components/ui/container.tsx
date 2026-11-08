import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** The single content width. Every section sits on these same left and right edges. */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-wrap px-gutter", className)}>
      {children}
    </div>
  );
}
