import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { translations } from "@/content/translations";
import { MotionProvider } from "@/components/motion/motion-provider";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { fontVariables } from "@/lib/fonts";
import { getDictionary, getLocale } from "@/lib/i18n";
import { hasLocale, locales, localeMeta } from "@/lib/locales";
import { getSiteUrl } from "@/lib/site";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#101312",
  colorScheme: "dark",
};

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { meta } = translations[lang];
  const other = lang === "id" ? "en" : "id";
  // Null in production when NEXT_PUBLIC_SITE_URL is missing/invalid (see lib/site.ts).
  const siteUrl = getSiteUrl();

  return {
    title: meta.title,
    description: meta.description,
    authors: [{ name: "Sandi Zikrullah", url: "https://github.com/sanzzsky" }],
    // Everything below needs an absolute URL. Without a site URL it is left out
    // entirely rather than emitted as relative or localhost URLs.
    ...(siteUrl && {
      metadataBase: siteUrl,
      alternates: {
        canonical: `/${lang}`,
        languages: { id: "/id", en: "/en", "x-default": "/id" },
      },
    }),
    openGraph: {
      type: "website",
      siteName: "Sandi Zikrullah",
      title: meta.title,
      description: meta.description,
      locale: localeMeta[lang].og,
      alternateLocale: [localeMeta[other].og],
      // Explicit empty images stops the file-based opengraph-image from being
      // attached with a localhost URL when no site URL is configured.
      ...(siteUrl ? { url: `/${lang}` } : { images: [] }),
    },
    twitter: {
      card: siteUrl ? "summary_large_image" : "summary",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const lang = await getLocale();
  const t = getDictionary(lang);

  return (
    <html lang={lang} className={`${fontVariables} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <MotionProvider>
          <ScrollProgress />
          <a
            href="#main"
            className="sr-only z-[60] rounded-md bg-accent px-4 py-3 font-medium text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            {t.a11y.skipToContent}
          </a>
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
