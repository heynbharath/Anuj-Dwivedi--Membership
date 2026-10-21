import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/app/globals.css";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: {
    default: "Octopus Tank 2026 | Flagship Startup Pitch & Mentorship",
    template: "%s | Octopus Tank 2026",
  },
  description:
    "Octopus Tank 2026 — The flagship startup pitch competition for B.Tech & M.Tech students at DSU School of Engineering. Presented by Tempête AI Club & DSU, co-hosted by Circle13, with 30-day 1:1 mentorship by Archzos Technologies.",
  keywords: [
    "Octopus Tank",
    "Octopus Tank 2026",
    "Tempête AI Club",
    "Tempete AI Club",
    "DSU School of Engineering",
    "Archzos Technologies",
    "Circle13",
    "Anuj Dwivedi",
    "Startup Pitch",
    "Technical Mentorship",
  ],
  authors: [{ name: "Octopus Tank & Circle13" }],
  creator: "Circle13 Platform Architecture",
  metadataBase: new URL("https://anujdwivedi.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anujdwivedi.com",
    title: "Octopus Tank 2026 | Eight arms. Infinite ideas.",
    description:
      "Eight arms. Infinite ideas. The flagship startup pitch competition and structured mentorship programme presented by Tempête AI Club, DSU School of Engineering, Archzos Technologies, and Circle13.",
    siteName: "Octopus Tank 2026",
  },
  twitter: {
    card: "summary_large_image",
    title: "Octopus Tank 2026 | Eight arms. Infinite ideas.",
    description:
      "Eight arms. Infinite ideas. Flagship startup pitch competition & 30-day 1:1 mentorship.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-neutral-900 antialiased selection:bg-black selection:text-white font-sans">
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
