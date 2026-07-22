import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kashish Phulwani - Software Developer",
  description:
    "Software developer. Data pipelines, RESTful services and AI retrieval systems - observable, reproducible, and hard to break.",
  openGraph: {
    title: "Kashish Phulwani - Software Developer",
    description:
      "Data pipelines, RESTful services and AI retrieval systems - observable, reproducible, and hard to break.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${interTight.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
