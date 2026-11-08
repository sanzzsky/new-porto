"use client";

import type { ReactNode } from "react";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

/**
 * Loads only Framer Motion's DOM-animation feature set (smaller bundle) and
 * honours prefers-reduced-motion for every motion component in the tree.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
