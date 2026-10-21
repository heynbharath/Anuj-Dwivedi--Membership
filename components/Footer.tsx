import React from "react";
import Link from "next/link";
import { OCTOPUS_TANK_GOOGLE_FORM_URL } from "@/lib/config";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200 text-neutral-600 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-100">
          {/* Brand & Ethos Column */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center space-x-2.5">
              <div className="w-6 h-6 rounded bg-black text-white flex items-center justify-center font-mono text-[11px] font-semibold">
                AD
              </div>
              <span className="font-sans text-sm font-semibold tracking-tight text-neutral-950">
                ANUJ DWIVEDI
              </span>
            </Link>
            <p className="text-sm text-neutral-500 max-w-sm leading-relaxed">
              Think Clearly. Build Intentionally. Independent practice spanning generative AI systems, high-leverage advisory, and the Octopus Tank arena.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.linkedin.com/in/anuj-dwivedi-1352831b1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-black hover:border-black transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/ANUJDWIVDI"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-black hover:border-black transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:anujd0009@gmail.com"
                className="w-8 h-8 rounded-md border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-black hover:border-black transition-colors"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Octopus Tank Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[11px] font-mono font-medium text-neutral-400 uppercase tracking-widest">
              Octopus Tank 2026
            </h4>
            <ul className="space-y-2 text-[13px]">
              <li>
                <a
                  href={OCTOPUS_TANK_GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-black font-medium hover:underline"
                >
                  <span>Apply to Pitch</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <Link href="/octopus-tank#domains" className="text-neutral-600 hover:text-black transition-colors">
                  The 8 Domains
                </Link>
              </li>
              <li>
                <Link href="/octopus-tank#format" className="text-neutral-600 hover:text-black transition-colors">
                  Format & Workshop
                </Link>
              </li>
              <li>
                <Link href="/octopus-tank#perks" className="text-neutral-600 hover:text-black transition-colors">
                  Perks & Awards
                </Link>
              </li>
              <li>
                <Link href="/octopus-tank#faq" className="text-neutral-600 hover:text-black transition-colors">
                  Rules & FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Membership & Advisory Column */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-[11px] font-mono font-medium text-neutral-400 uppercase tracking-widest">
              Membership
            </h4>
            <ul className="space-y-2 text-[13px]">
              <li>
                <Link href="/membership#the-library" className="text-neutral-600 hover:text-black transition-colors">
                  The Library
                </Link>
              </li>
              <li>
                <Link href="/membership#the-builder" className="text-neutral-600 hover:text-black transition-colors">
                  The Builder
                </Link>
              </li>
              <li>
                <Link href="/membership#the-inner-circle" className="text-neutral-600 hover:text-black transition-colors">
                  The Inner Circle
                </Link>
              </li>
              <li>
                <Link href="/mentorship" className="text-neutral-600 hover:text-black transition-colors">
                  Advisory Sprints
                </Link>
              </li>
            </ul>
          </div>

          {/* Venue & Presence Column */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-[11px] font-mono font-medium text-neutral-400 uppercase tracking-widest">
              Co-Hosts &amp; Venue
            </h4>
            <div className="text-[13px] text-neutral-600 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 relative rounded bg-white border border-neutral-200 p-0.5 shrink-0 flex items-center justify-center">
                  <img
                    src="/images/circle13-logo-transparent.png"
                    alt="Circle13"
                    className="w-3.5 h-3.5 object-contain"
                  />
                </div>
                <div>
                  <span className="font-medium text-black block leading-none">Circle13</span>
                  <span className="text-[10px] text-neutral-400 font-mono">Platform Architecture</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 relative rounded bg-white border border-neutral-200 p-0.5 shrink-0 flex items-center justify-center">
                  <img
                    src="/images/archzos-logo.png"
                    alt="Archzos"
                    className="w-3.5 h-3.5 object-contain"
                  />
                </div>
                <div>
                  <span className="font-medium text-black block leading-none">Archzos Tech</span>
                  <span className="text-[10px] text-neutral-400 font-mono">AI &amp; Mentorship</span>
                </div>
              </div>
              <div className="pt-1 border-t border-neutral-100">
                <p className="font-medium text-black leading-tight">DSU School of Engg</p>
                <p className="text-[11px] text-neutral-500">Dayananda Sagar University</p>
                <p className="font-mono text-[10px] text-neutral-400">31 October 2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Minimal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-400">
          <div>
            © 2026 Anuj Dwivedi. Co-Hosted by <Link href="/#cohosts" className="text-neutral-600 hover:text-black underline underline-offset-2">Circle13</Link> (N Bharath, CEO &amp; Akhil Vipin Nair, CTO).
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/terms" className="hover:text-black transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-black transition-colors">
              Privacy
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=919019458974"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-800 font-medium transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="mailto:anujd0009@gmail.com"
              className="hover:text-black transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
