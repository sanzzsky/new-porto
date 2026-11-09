import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * One-time entrance on load (hero only). This is a Server Component driven by
 * a CSS animation (`animate-enter`, defined in globals.css), so the content is
 * already visible in the server-rendered HTML: nothing waits for hydration, and
 * it still shows with JavaScript disabled. Under prefers-reduced-motion the
 * animation is removed entirely.
 */
export function Enter({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("animate-enter motion-reduce:animate-none", className)}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
