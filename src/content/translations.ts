import type { Lang } from "@/types";

/**
 * Centralized UI copy. `en` is typed against `id`'s shape, so a missing key
 * in either language is a compile error. Project, skill and education data
 * live in their own content modules.
 */
const id = {
  meta: {
    title: "Sandi Zikrullah — Software Developer (Android, Web, AI)",
    description:
      "Portofolio Sandi Zikrullah, Software Developer yang berfokus pada pengembangan aplikasi Android, web, dan AI. Lulusan Teknik Informatika Universitas Muhammadiyah Riau.",
    ogAlt: "Sandi Zikrullah — Software Developer",
  },
  a11y: {
    skipToContent: "Lewati ke konten utama",
    mainNav: "Navigasi utama",
    menuOpen: "Buka menu",
    menuClose: "Tutup menu",
    languageGroup: "Bahasa",
    home: "Sandi Zikrullah, ke bagian atas",
  },
  nav: {
    expertise: "Keahlian",
    projects: "Proyek",
    stack: "Teknologi",
    about: "Tentang",
    education: "Pendidikan",
    contact: "Kontak",
    cta: "Hubungi saya",
  },
  hero: {
    eyebrow: "Software Developer",
    headline: "Membangun aplikasi digital yang fungsional, modern, dan bermakna.",
    intro:
      "Saya Sandi Zikrullah, Software Developer yang berfokus pada aplikasi Android, web, dan AI. Lulusan Teknik Informatika Universitas Muhammadiyah Riau yang senang membangun perangkat lunak praktis dan terus belajar.",
    ctaProjects: "Lihat proyek",
    ctaContact: "Hubungi saya",
    credential: "Teknik Informatika · UMRI",
    visualLabel: "Ilustrasi antarmuka aplikasi Android, web, dan AI",
  },
  expertise: {
    eyebrow: "Keahlian",
    title: "Tiga bidang yang saya tekuni",
    intro: "Teknologi di bawah ini adalah yang saya gunakan dalam proyek dan pembelajaran saya.",
    items: {
      android: {
        title: "Pengembangan Android",
        description: "Aplikasi Android yang dibangun dengan Kotlin dan Android Studio, terhubung ke Firebase dan REST API.",
      },
      web: {
        title: "Pengembangan Web",
        description: "Situs dan aplikasi web yang responsif, dibangun dengan ekosistem JavaScript dan TypeScript.",
      },
      ai: {
        title: "Pengembangan Aplikasi AI",
        description: "Aplikasi yang memanfaatkan AI: integrasi model, aplikasi berbasis LLM, dan prompt engineering dengan Python.",
      },
    },
  },
  projects: {
    eyebrow: "Proyek",
    title: "Proyek terpilih",
    intro: "Enam proyek yang pernah saya kerjakan. Pratinjau adalah ilustrasi antarmuka, bukan tangkapan layar.",
    viewDetails: "Lihat detail",
    close: "Tutup",
    highlights: "Poin penting",
    stack: "Teknologi",
    stackPending: "Daftar teknologi akan ditambahkan setelah dikonfirmasi.",
    links: "Tautan",
    linksPending: "Tautan repositori dan demo belum tersedia.",
    repo: "Kode sumber",
    demo: "Demo langsung",
    previewNote: "Pratinjau berupa ilustrasi antarmuka, bukan tangkapan layar proyek.",
  },
  stack: {
    eyebrow: "Teknologi",
    title: "Teknologi yang saya gunakan",
    intro: "Dikelompokkan menurut bidang.",
    groups: {
      mobile: "Pengembangan Mobile",
      frontend: "Pengembangan Frontend",
      backend: "Backend & Database",
      ai: "AI & Tools",
    },
  },
  about: {
    eyebrow: "Tentang",
    title: "Tentang saya",
    paragraphs: [
      "Saya Sandi Zikrullah, lulusan Teknik Informatika Universitas Muhammadiyah Riau (UMRI) yang berfokus pada pengembangan perangkat lunak.",
      "Pada 2024 saya mengikuti Bangkit Academy di jalur Mobile Development.",
      "Saya tertarik pada pengembangan aplikasi Android, web, dan AI, dengan fokus pada perangkat lunak yang praktis dan berguna, serta terus belajar dari setiap proyek.",
    ],
    portraitLabel: "Foto profil — ganti dengan potret asli",
    portraitAlt: "Potret Sandi Zikrullah",
    portraitPlaceholderAlt: "Tempat foto profil Sandi Zikrullah (placeholder)",
  },
  education: {
    eyebrow: "Pendidikan",
    title: "Pendidikan & sertifikasi",
    kinds: { education: "Pendidikan", program: "Program", course: "Kursus" },
  },
  contact: {
    eyebrow: "Kontak",
    statement: "Mari membangun sesuatu yang bermanfaat bersama.",
    intro: "Terbuka untuk berdiskusi tentang proyek, kolaborasi, atau peluang di bidang pengembangan Android, web, dan aplikasi AI.",
    ctaEmail: "Kirim email",
    ctaGithub: "Lihat profil GitHub",
    email: "Email",
    emailPending: "Alamat email belum ditambahkan",
    github: "GitHub",
    linkedin: "LinkedIn",
    linkedinPending: "Tautan LinkedIn belum ditambahkan",
    placeholderTag: "Placeholder",
    opensInNewTab: "(terbuka di tab baru)",
  },
  footer: {
    tagline: "Software Developer — Android, Web, dan AI.",
    navLabel: "Navigasi footer",
    backToTop: "Kembali ke atas",
    rights: "Seluruh hak cipta dilindungi.",
  },
  notFound: {
    code: "404",
    title: "Halaman tidak ditemukan",
    description: "Alamat yang Anda buka tidak ada di situs ini.",
    home: "Kembali ke beranda",
  },
};

export type Dictionary = typeof id;

const en: Dictionary = {
  meta: {
    title: "Sandi Zikrullah — Software Developer (Android, Web, AI)",
    description:
      "Portfolio of Sandi Zikrullah, a Software Developer focused on Android, web and AI application development. Informatics Engineering graduate of Universitas Muhammadiyah Riau.",
    ogAlt: "Sandi Zikrullah — Software Developer",
  },
  a11y: {
    skipToContent: "Skip to main content",
    mainNav: "Main navigation",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    languageGroup: "Language",
    home: "Sandi Zikrullah, back to top",
  },
  nav: {
    expertise: "Expertise",
    projects: "Projects",
    stack: "Stack",
    about: "About",
    education: "Education",
    contact: "Contact",
    cta: "Contact me",
  },
  hero: {
    eyebrow: "Software Developer",
    headline: "Building functional, modern, and meaningful digital experiences.",
    intro:
      "I'm Sandi Zikrullah, a Software Developer focused on Android, web and AI applications. An Informatics Engineering graduate of Universitas Muhammadiyah Riau who enjoys building practical software and learning continuously.",
    ctaProjects: "View projects",
    ctaContact: "Contact me",
    credential: "Informatics Engineering · UMRI",
    visualLabel: "Illustration of an Android app, a web app and an AI assistant interface",
  },
  expertise: {
    eyebrow: "Expertise",
    title: "Three areas I work in",
    intro: "The technologies below are the ones I use in my projects and learning.",
    items: {
      android: {
        title: "Android Development",
        description: "Android apps built with Kotlin and Android Studio, connected to Firebase and REST APIs.",
      },
      web: {
        title: "Web Development",
        description: "Responsive websites and web apps built in the JavaScript and TypeScript ecosystem.",
      },
      ai: {
        title: "AI Application Development",
        description: "Applications that put AI to work: model integration, LLM-based apps and prompt engineering with Python.",
      },
    },
  },
  projects: {
    eyebrow: "Projects",
    title: "Selected projects",
    intro: "Six projects I have worked on. Previews are interface illustrations, not screenshots.",
    viewDetails: "View details",
    close: "Close",
    highlights: "Highlights",
    stack: "Tech stack",
    stackPending: "The technology list will be added once confirmed.",
    links: "Links",
    linksPending: "Repository and demo links are not available yet.",
    repo: "Source code",
    demo: "Live demo",
    previewNote: "The preview is an interface illustration, not a screenshot of the project.",
  },
  stack: {
    eyebrow: "Stack",
    title: "Technologies I work with",
    intro: "Grouped by discipline.",
    groups: {
      mobile: "Mobile Development",
      frontend: "Frontend Development",
      backend: "Backend & Database",
      ai: "AI & Tools",
    },
  },
  about: {
    eyebrow: "About",
    title: "About me",
    paragraphs: [
      "I'm Sandi Zikrullah, an Informatics Engineering graduate of Universitas Muhammadiyah Riau (UMRI) focused on software development.",
      "In 2024 I took part in Bangkit Academy on the Mobile Development track.",
      "I'm interested in building Android, web and AI applications, with a focus on practical, useful software and learning from every project.",
    ],
    portraitLabel: "Profile photo — replace with a real portrait",
    portraitAlt: "Portrait of Sandi Zikrullah",
    portraitPlaceholderAlt: "Profile photo placeholder for Sandi Zikrullah",
  },
  education: {
    eyebrow: "Education",
    title: "Education & certifications",
    kinds: { education: "Education", program: "Program", course: "Course" },
  },
  contact: {
    eyebrow: "Contact",
    statement: "Let's build something useful together.",
    intro: "Open to talking about projects, collaboration or opportunities in Android, web and AI application development.",
    ctaEmail: "Send an email",
    ctaGithub: "View GitHub profile",
    email: "Email",
    emailPending: "Email address not added yet",
    github: "GitHub",
    linkedin: "LinkedIn",
    linkedinPending: "LinkedIn link not added yet",
    placeholderTag: "Placeholder",
    opensInNewTab: "(opens in a new tab)",
  },
  footer: {
    tagline: "Software Developer — Android, Web and AI.",
    navLabel: "Footer navigation",
    backToTop: "Back to top",
    rights: "All rights reserved.",
  },
  notFound: {
    code: "404",
    title: "Page not found",
    description: "That address is not on this site.",
    home: "Back to home",
  },
};

export const translations: Record<Lang, Dictionary> = { id, en };
