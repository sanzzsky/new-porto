"use client";

import type { ReactNode } from "react";
import { m } from "framer-motion";

/** One-time entrance on load. Used for the hero only. */
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
    <m.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </m.div>
  );
}
