"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { ArrowUpRight, X } from "lucide-react";

/**
 * "View details" trigger plus a native <dialog>. The dialog gives us focus
 * trapping, Escape-to-close and a backdrop for free. The content is rendered
 * on the server and passed in as children, so no project data ships as JS.
 */
export function ProjectDetails({
  title,
  triggerLabel,
  closeLabel,
  children,
}: {
  title: string;
  triggerLabel: string;
  closeLabel: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(
    () => () => {
      document.documentElement.style.overflow = "";
    },
    [],
  );

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-label={`${triggerLabel}: ${title}`}
        onClick={() => {
          document.documentElement.style.overflow = "hidden";
          ref.current?.showModal();
        }}
        className="link-draw group/btn inline-flex min-h-11 items-center gap-1.5 font-medium text-fg"
      >
        {triggerLabel}
        <ArrowUpRight
          size={18}
          aria-hidden="true"
          className="text-accent-text transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
        />
      </button>

      <dialog
        ref={ref}
        aria-labelledby={titleId}
        onClose={() => {
          document.documentElement.style.overflow = "";
        }}
        onClick={(event) => {
          // A click on the backdrop targets the dialog element itself.
          if (event.target === event.currentTarget) ref.current?.close();
        }}
        className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100vw-2rem)] max-w-xl overflow-y-auto rounded-lg border border-border-strong bg-surface p-0 text-fg backdrop:bg-black/70"
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <h3 id={titleId} className="font-display text-heading font-semibold">
              {title}
            </h3>
            <button
              type="button"
              aria-label={closeLabel}
              onClick={() => ref.current?.close()}
              className="-mr-2 -mt-2 flex size-11 shrink-0 items-center justify-center rounded-md text-muted transition-colors duration-200 hover:bg-elevated hover:text-fg"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>
          {children}
        </div>
      </dialog>
    </>
  );
}
