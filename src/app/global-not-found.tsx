import type { Metadata, Viewport } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

/**
 * 404 for URLs that match no route at all (e.g. /id/tidak-ada).
 *
 * This has to be `global-not-found` rather than `not-found`: the root layout
 * lives in the `[lang]` segment, so only the app-wide convention can answer
 * unmatched URLs. It also bypasses the root layout, which is why it imports the
 * stylesheet and fonts itself and returns a full document. The copy is bilingual
 * because a URL that matched nothing has no language to read the locale from;
 * each language is marked with `lang` and links to its own homepage.
 */
export const metadata: Metadata = {
  title: "404 — Halaman tidak ditemukan / Page not found",
  description:
    "Alamat yang Anda buka tidak ada di situs ini. / That address is not on this site.",
  // No `robots` here: Next already emits `noindex` for a 404 document, and
  // declaring it again produced two conflicting meta tags.
};

export const viewport: Viewport = {
  themeColor: "#101312",
  colorScheme: "dark",
};

export default function GlobalNotFound() {
  return (
    <html lang="id" className={`${fontVariables} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <main id="main" className="flex flex-1 flex-col justify-center">
          <Container className="flex flex-1 flex-col justify-center py-section">
            <p className="font-mono text-[0.8125rem] uppercase tracking-[0.14em] text-accent-text">
              404
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-display font-semibold text-balance">
              Halaman tidak ditemukan
            </h1>
            <p lang="en" className="mt-2 max-w-xl font-display text-heading text-muted">
              Page not found
            </p>
            <p className="mt-6 max-w-xl text-lead text-muted">
              Alamat yang Anda buka tidak ada di situs ini.
            </p>
            <p lang="en" className="mt-2 max-w-xl text-muted">
              That address is not on this site.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/id">
                <span lang="id">Kembali ke beranda</span>
              </Button>
              <Button href="/en" variant="secondary">
                <span lang="en">Back to home</span>
              </Button>
            </div>
          </Container>
        </main>
      </body>
    </html>
  );
}
