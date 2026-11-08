"use client";

import { m, useScroll } from "framer-motion";

/**
 * Scroll moment 1: a thin reading-progress line at the top of the viewport.
 * Hidden with CSS under prefers-reduced-motion, which avoids the server/client
 * mismatch that reading the preference in JS would cause during hydration.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <m.div
      aria-hidden="true"
      style={{ scaleX: scrollYProgress }}
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-accent-text motion-reduce:hidden"
    />
  );
}
