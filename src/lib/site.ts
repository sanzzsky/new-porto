/**
 * Canonical site URL used for metadata, Open Graph and hreflang.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://your-domain.com).
 */
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
);
