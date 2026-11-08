# Sandi Zikrullah — Portfolio

Bilingual (Indonesian / English) developer portfolio built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Framer Motion and Lucide React.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000  (redirects to /id)
npm run build      # production build
npm run start      # serve the production build
npm run lint
```

Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://your-domain.com`) in production so canonical, hreflang and Open Graph URLs are correct.

## Languages

- `/id` Indonesian (default, `/` redirects here) and `/en` English.
- UI copy: `src/content/translations.ts` (typed; a missing key in either language is a compile error).
- Projects, skills and education: `src/content/*.ts`, each with `id` / `en` text.

## Replacing placeholders

| What | Where |
| --- | --- |
| Email address | `email` in `src/content/profile.ts` |
| LinkedIn URL | `linkedin` in `src/content/profile.ts` |
| Portrait | put the file in `public/` and set `portrait` in `src/content/profile.ts` |
| Project tech stack | `stack` in `src/content/projects.ts` (leave empty until confirmed) |
| Project repo / demo links | `links.repo` / `links.demo` in `src/content/projects.ts` |
| Project previews | illustrations in `src/components/visuals/project-visuals.tsx`; swap for real screenshots when available |

## Structure

```
src/
├── app/[lang]/        root layout (html lang, metadata), page, opengraph-image
├── components/
│   ├── ui/            Container, Section, Button, Tag
│   ├── layout/        SiteHeader, MobileNav, LanguageSwitcher, SiteFooter
│   ├── sections/      Hero, Expertise, Projects, Stack, About, Education, Contact
│   ├── visuals/       frames, hero composition, project compositions, portrait
│   └── motion/        MotionProvider, Enter, ScrollProgress, WordHighlight
├── content/           profile, projects, skills, education, navigation, translations
├── lib/               locales, i18n, fonts, site, cn
├── proxy.ts           redirects unprefixed paths to /id
└── types/
```

Design tokens (colour, type scale, radius, spacing) live in `src/app/globals.css`.
