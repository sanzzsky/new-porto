/**
 * Canonical site URL, from NEXT_PUBLIC_SITE_URL (e.g. https://your-domain.com).
 *
 *  - Development: falls back to http://localhost:<PORT or 3000> so `npm run dev`
 *    works with nothing configured.
 *  - Production: there is NO fallback. If the variable is missing or invalid,
 *    `getSiteUrl()` returns null, a warning is logged, and callers must omit
 *    anything that needs an absolute URL (canonical, hreflang, Open Graph,
 *    sitemap) instead of emitting localhost or a made-up domain.
 *
 * The value is read at build time (pages are statically generated), so it must
 * be set in the environment of `next build`, not only of `next start`.
 */

const VAR = "NEXT_PUBLIC_SITE_URL";

let cached: URL | null | undefined;
const warned = new Set<string>();

function warnOnce(message: string) {
  if (warned.has(message)) return;
  warned.add(message);
  console.warn(`[site] ${message}`);
}

function parseOrigin(value: string): URL | null {
  try {
    const url = new URL(value);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    // The site is served from the domain root, so only the origin matters.
    return new URL(url.origin);
  } catch {
    return null;
  }
}

function isLocalHost(url: URL) {
  return ["localhost", "127.0.0.1", "[::1]", "0.0.0.0"].includes(url.hostname);
}

function resolveSiteUrl(): URL | null {
  const isProduction = process.env.NODE_ENV === "production";
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (raw) {
    const parsed = parseOrigin(raw);
    if (parsed) {
      if (isProduction && isLocalHost(parsed)) {
        warnOnce(
          `${VAR} is "${raw}", a local address, in a production build. Canonical, hreflang and Open Graph URLs will point at it.`,
        );
      }
      return parsed;
    }
    warnOnce(
      `${VAR} is set to "${raw}", which is not a valid http(s) URL. Use an absolute URL such as https://your-domain.com.`,
    );
    // fall through: treat as missing
  }

  if (!isProduction) {
    return new URL(`http://localhost:${process.env.PORT ?? 3000}`);
  }

  warnOnce(
    `${VAR} is not set. Absolute-URL SEO metadata (canonical, hreflang, Open Graph image, sitemap) is being omitted so it cannot point at localhost. Set ${VAR}=https://your-domain.com in the build environment before deploying.`,
  );
  return null;
}

/** The configured site origin, or null when production has no valid URL configured. */
export function getSiteUrl(): URL | null {
  if (cached === undefined) cached = resolveSiteUrl();
  return cached;
}

/** Absolute URL for a site path, or null when no site URL is available. */
export function absoluteUrl(path: string): string | null {
  const base = getSiteUrl();
  return base ? new URL(path, base).toString() : null;
}
