"use client";

import { useCallback, useEffect, useId, useRef, type ReactNode } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { lockScroll, unlockScroll } from "@/lib/scroll-lock";

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
  const triggerRef = useRef<HTMLButtonElement>(null);
  // Whether this dialog currently holds a scroll lock. Guards `release` so the
  // lock is dropped exactly once per open cycle, no matter which path closes it.
  const lockedRef = useRef(false);
  const titleId = useId();

  /**
   * Ends one open cycle: drops the lock and returns focus to the trigger.
   * Idempotent, because `close` is not dispatched consistently across engines
   * for programmatic closes — so both the explicit handlers and the native
   * listener call it, and only the first call has an effect.
   */
  const release = useCallback(() => {
    if (!lockedRef.current) return;
    lockedRef.current = false;
    unlockScroll();
    // Deferred because the browser finishes its own focus handling right after
    // closing and would otherwise leave focus on <body>.
    setTimeout(() => triggerRef.current?.focus(), 0);
  }, []);

  const open = useCallback(() => {
    const dialog = ref.current;
    if (!dialog || dialog.open) return;
    lockScroll();
    lockedRef.current = true;
    try {
      dialog.showModal();
    } catch {
      // showModal refuses a detached or already-open dialog; do not keep a lock.
      lockedRef.current = false;
      unlockScroll();
    }
  }, []);

  const close = useCallback(() => {
    ref.current?.close();
    release();
  }, [release]);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    // Escape fires `cancel`; take the close over so the lock release stays in
    // our hands. Some engines never dispatch `close` for modal dialogs, so
    // relying on that event alone leaves the page unscrollable.
    const onCancel = (event: Event) => {
      event.preventDefault();
      close();
    };
    dialog.addEventListener("cancel", onCancel);
    // Fallback for engines/paths that do report `close` (guarded, so it cannot
    // release twice).
    dialog.addEventListener("close", release);
    return () => {
      dialog.removeEventListener("cancel", onCancel);
      dialog.removeEventListener("close", release);
      // Safety net: if the component unmounts while its dialog is open.
      release();
    };
  }, [close, release]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        aria-label={`${triggerLabel}: ${title}`}
        onClick={open}
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
        // Every close path releases the lock in its own handler; `close` is only
        // a fallback, because a programmatic `close()` may not emit any event.
        onClick={(event) => {
          // A click on the backdrop targets the dialog element itself.
          if (event.target === event.currentTarget) close();
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
              onClick={close}
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
