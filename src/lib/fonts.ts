import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";

// All three are self-hosted by next/font at build time: no runtime requests to Google.
const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const sans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const fontVariables = `${display.variable} ${sans.variable} ${mono.variable}`;
