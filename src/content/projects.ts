import type { Project } from "@/types";

/**
 * Reusable project data. Rules for editing:
 *  - `stack` stays empty until the technologies are confirmed.
 *  - `links.repo` / `links.demo` are added only when real URLs exist.
 *  - `highlights` lists only confirmed facts or features.
 */
export const projects: Project[] = [
  {
    slug: "vert2",
    title: "Vert2",
    category: { id: "Web · Tiket acara", en: "Web · Event ticketing" },
    summary: {
      id: "Situs web pembelian tiket konser dan festival.",
      en: "A website for buying concert and festival tickets.",
    },
    description: {
      id: "Situs web untuk membeli tiket konser dan festival, dikembangkan dalam proyek akademik rekayasa perangkat lunak bersama klien nyata.",
      en: "A website for buying concert and festival tickets, developed in an academic software engineering project with a real client.",
    },
    highlights: {
      id: ["Proyek akademik rekayasa perangkat lunak", "Dikerjakan bersama klien nyata"],
      en: ["Academic software engineering project", "Built with a real client"],
    },
    stack: [],
    links: {},
  },
  {
    slug: "pentol-oy",
    title: "Pentol-OY",
    category: { id: "Android · Pemesanan", en: "Android · Ordering" },
    summary: {
      id: "Aplikasi Android pemesanan mandiri untuk usaha pentol.",
      en: "An Android self-service ordering app for a pentol business.",
    },
    description: {
      id: "Aplikasi Android pemesanan mandiri (self-service) untuk usaha pentol, dikembangkan dengan klien, tenggat waktu, dan konteks pembayaran yang nyata.",
      en: "An Android self-service ordering app for a pentol business, developed with a real client, a deadline, and a payment context.",
    },
    highlights: {
      id: ["Dikerjakan untuk klien", "Dikerjakan dengan tenggat waktu", "Memiliki konteks pembayaran"],
      en: ["Built for a client", "Delivered against a deadline", "Includes a payment context"],
    },
    stack: [],
    links: {},
  },
  {
    slug: "maha",
    title: "MAHA",
    category: { id: "Android · Kesehatan", en: "Android · Health" },
    summary: {
      id: "Asisten kesehatan Android dengan rekomendasi untuk diabetes dan hipertensi.",
      en: "An Android health assistant with recommendations for diabetes and hypertension.",
    },
    description: {
      id: "MAHA (juga dikenal sebagai MONEV MAHA) adalah aplikasi asisten kesehatan Android yang berfokus pada rekomendasi untuk diabetes dan hipertensi.",
      en: "MAHA (also known as MONEV MAHA) is an Android health assistant app focused on recommendations for diabetes and hypertension.",
    },
    highlights: {
      id: ["Profil pengguna", "Perhitungan BMI", "Rekomendasi makanan", "Rekomendasi olahraga", "Informasi kesehatan"],
      en: ["User profiles", "BMI calculation", "Food recommendations", "Exercise recommendations", "Health information"],
    },
    stack: [],
    links: {},
    caveat: {
      id: "Aplikasi ini bukan alat diagnosis dan tidak divalidasi secara medis.",
      en: "This app is not a diagnostic tool and has not been medically validated.",
    },
  },
  {
    slug: "dompetku",
    title: "DompetKu",
    category: { id: "Aplikasi · Keuangan pribadi", en: "App · Personal finance" },
    summary: {
      id: "Aplikasi pengelolaan keuangan pribadi.",
      en: "A personal finance application.",
    },
    description: {
      id: "Aplikasi keuangan pribadi. Rincian fitur akan ditambahkan setelah dikonfirmasi dari proyek aslinya.",
      en: "A personal finance application. Feature details will be added once confirmed from the actual project.",
    },
    highlights: { id: [], en: [] },
    stack: [],
    links: {},
  },
  {
    slug: "food-recognition-ai",
    title: "Food Recognition AI",
    category: { id: "AI · Computer vision", en: "AI · Computer vision" },
    summary: {
      id: "Aplikasi AI computer vision untuk mengenali makanan.",
      en: "An AI computer vision application for recognizing food.",
    },
    description: {
      id: "Aplikasi AI berbasis computer vision yang mengenali makanan dari gambar.",
      en: "An AI application using computer vision to recognize food from images.",
    },
    highlights: { id: [], en: [] },
    stack: [],
    links: {},
    caveat: {
      id: "Akurasi model dan ukuran dataset belum dicantumkan.",
      en: "Model accuracy and dataset size are not stated.",
    },
  },
  {
    slug: "cuminfo",
    title: "Cuminfo",
    category: { id: "Web · Artikel", en: "Web · Articles" },
    summary: {
      id: "Situs web artikel dan informasi.",
      en: "An article and information website.",
    },
    description: {
      id: "Situs web artikel dan informasi yang dikembangkan sebagai proyek pemrograman web.",
      en: "An article and information website developed as a web programming project.",
    },
    highlights: {
      id: ["Proyek pemrograman web"],
      en: ["Web programming project"],
    },
    stack: [],
    links: {},
  },
];
