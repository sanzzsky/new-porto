import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

export const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-[0.9375rem] font-medium transition duration-200 ease-out active:scale-[0.98] hover:-translate-y-px active:translate-y-0";

export const buttonVariants = {
  primary: "bg-accent text-white hover:bg-accent-deep",
  secondary: "border border-border-strong text-fg hover:border-fg/60 hover:bg-elevated",
} as const;

export function Button({
  href,
  variant = "primary",
  external = false,
  externalHint,
  icon,
  className,
  children,
}: {
  href: string;
  variant?: keyof typeof buttonVariants;
  external?: boolean;
  /** Screen-reader text appended to external links, e.g. "(opens in a new tab)". */
  externalHint?: string;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={cn(buttonBase, buttonVariants[variant], className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {external ? (
        <>
          <ArrowUpRight size={18} aria-hidden="true" />
          {externalHint ? <span className="sr-only">{externalHint}</span> : null}
        </>
      ) : (
        icon
      )}
    </a>
  );
}
