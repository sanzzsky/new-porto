/**
 * Reference-counted page scroll lock.
 *
 * Two overlays can be open at once (the mobile menu and a project dialog), so a
 * naive `overflow = "hidden"` / `overflow = ""` pair restores scrolling while the
 * other overlay is still open. Counting the locks keeps that correct.
 *
 * No scrollbar compensation is needed: `html { scrollbar-gutter: stable }` in
 * globals.css already reserves the gutter, so hiding overflow cannot shift the
 * layout, and the scroll position is left untouched.
 */
let locks = 0;
let previousOverflow = "";

export function lockScroll() {
  if (typeof document === "undefined") return;
  locks += 1;
  if (locks > 1) return;
  const root = document.documentElement;
  previousOverflow = root.style.overflow;
  root.style.overflow = "hidden";
}

export function unlockScroll() {
  if (typeof document === "undefined") return;
  locks = Math.max(0, locks - 1);
  if (locks > 0) return;
  document.documentElement.style.overflow = previousOverflow;
}
