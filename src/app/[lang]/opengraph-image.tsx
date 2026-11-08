import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { translations } from "@/content/translations";
import { hasLocale, locales } from "@/lib/locales";

export const alt = "Sandi Zikrullah — Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { hero } = translations[lang];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#101312",
          color: "#f3f5f4",
          padding: "72px",
          borderLeft: "16px solid #0e7a4f",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#3fd08f",
          }}
        >
          Software Developer · Android · Web · AI
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 700, letterSpacing: -3 }}>
            Sandi Zikrullah
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 36,
              lineHeight: 1.3,
              color: "#a6b1aa",
              maxWidth: 940,
            }}
          >
            {hero.headline}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
