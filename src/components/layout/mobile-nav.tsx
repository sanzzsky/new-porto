"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Menu, X } from "lucide-react";
import { buttonBase, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export function MobileNav({
  links,
  ctaLabel,
  ctaHref,
  navLabel,
  openLabel,
  closeLabel,
}: {
  links: Array<{ href: string; label: string }>;
  ctaLabel: string;
  ctaHref: string;
  navLabel: string;
  openLabel: string;
  closeLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  const close = useCallback((restoreFocus: boolean) => {
    setOpen(false);
    if (restoreFocus) buttonRef.current?.focus();
  }, []);

  // Lock page scroll while the menu is open.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = previous;
    };
  }, [open]);

  // Move focus into the menu when it opens.
  useEffect(() => {
    if (open) panelRef.current?.querySelector<HTMLElement>("a")?.focus();
  }, [open]);

  // Close if the viewport grows into the desktop layout.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const onChange = () => query.matches && setOpen(false);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  // Escape closes; Tab is kept inside the toggle button + the menu links.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close(true);
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = [
        buttonRef.current,
        ...Array.from(panelRef.current?.querySelectorAll<HTMLElement>("a") ?? []),
      ].filter((el): el is HTMLElement => el !== null);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? closeLabel : openLabel}
        onClick={() => (open ? close(false) : setOpen(true))}
        className="flex size-11 items-center justify-center rounded-md border border-border text-fg transition-colors duration-200 hover:bg-elevated lg:hidden"
      >
        {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
      </button>

      <AnimatePresence>
        {open ? (
          <m.nav
            key="panel"
            id={panelId}
            ref={panelRef}
            aria-label={navLabel}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-0 bottom-0 top-16 z-30 flex flex-col overflow-y-auto bg-bg px-gutter pb-8 pt-4 lg:hidden"
          >
            <ul className="divide-y divide-border border-y border-border">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => close(false)}
                    className="flex min-h-16 items-center font-display text-heading font-semibold transition-colors duration-200 hover:text-accent-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={ctaHref}
              onClick={() => close(false)}
              className={cn(buttonBase, buttonVariants.primary, "mt-8 w-full")}
            >
              {ctaLabel}
            </a>
          </m.nav>
        ) : null}
      </AnimatePresence>
    </>
  );
}
