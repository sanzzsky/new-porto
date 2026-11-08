import Image from "next/image";
import { profile } from "@/content/profile";
import { cn } from "@/lib/cn";

/**
 * Profile photo. Renders the real image once `profile.portrait` is set in
 * src/content/profile.ts; until then it shows an honest, clearly marked placeholder.
 */
export function Portrait({
  variant,
  alt,
  placeholderAlt,
  label,
  sizes,
  className,
}: {
  variant: "chip" | "full";
  alt: string;
  placeholderAlt: string;
  label?: string;
  sizes?: string;
  className?: string;
}) {
  const { portrait, initials } = profile;

  if (variant === "chip") {
    return portrait ? (
      <Image
        src={portrait.src}
        width={48}
        height={48}
        alt={alt}
        className={cn("size-12 shrink-0 rounded-full border border-border-strong object-cover", className)}
      />
    ) : (
      <span
        role="img"
        aria-label={placeholderAlt}
        className={cn(
          "flex size-12 shrink-0 items-center justify-center rounded-full border border-border-strong bg-elevated font-display text-sm font-semibold text-accent-text",
          className,
        )}
      >
        {initials}
      </span>
    );
  }

  return (
    <figure className={cn("w-full", className)}>
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-border bg-surface">
        {portrait ? (
          <Image
            src={portrait.src}
            width={portrait.width}
            height={portrait.height}
            alt={alt}
            sizes={sizes}
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={placeholderAlt}
            className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[linear-gradient(135deg,var(--color-surface),var(--color-elevated))]"
          >
            <span className="font-display text-[clamp(4rem,12vw,7rem)] font-semibold leading-none tracking-tight text-accent/80">
              {initials}
            </span>
            {label ? (
              <span className="px-6 text-center font-mono text-[0.8125rem] text-muted">{label}</span>
            ) : null}
          </div>
        )}
      </div>
    </figure>
  );
}
