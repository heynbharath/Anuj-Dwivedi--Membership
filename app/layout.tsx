import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/app/globals.css";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: {
    default: "Anuj Dwivedi | AI Engineering, Advisory & Mentorship",
    template: "%s | Anuj Dwivedi",
  },
  description:
    "Explore practical guidance across AI engineering, system architecture, startup pitching, and execution discipline with Anuj Dwivedi. Advisory, 1:1 mentorship, and institutional programmes.",
  keywords: [
    "Anuj Dwivedi",
    "AI Engineering",
    "Generative AI",
    "Startup Pitching",
    "Technical Mentorship",
    "Octopus Tank 2026",
    "Dayananda Sagar University",
    "Circle13 Management",
  ],
  authors: [{ name: "Anuj Dwivedi" }],
  creator: "Circle13 Platform Architecture",
  metadataBase: new URL("https://anujdwivedi.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anujdwivedi.com",
    title: "Anuj Dwivedi | Think Clearly. Build Intentionally.",
    description:
      "A digital commercial platform around Anuj Dwivedi's engineering, consultancy, mentorship, and institutional engagements.",
    siteName: "Anuj Dwivedi Platform",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anuj Dwivedi | Think Clearly. Build Intentionally.",
    description:
      "Advisory, structured mentorship, and engineering programmes by Anuj Dwivedi.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col bg-navy-950 text-ivory-100 antialiased selection:bg-gold-500 selection:text-navy-950">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
