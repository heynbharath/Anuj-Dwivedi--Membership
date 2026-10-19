import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import VeerbhogyaLogo from "@/components/VeerbhogyaLogo";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-gold-500/20 text-silver-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block space-y-3 group">
              <VeerbhogyaLogo
                variant="lockup_reverse_on_black"
                width={220}
                title="Veerbhogya Vasundhara"
                className="opacity-95 group-hover:opacity-100 transition-opacity"
              />
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider text-ivory-100">
                  {SITE_CONFIG.brandName}
                </span>
                <p className="text-[11px] tracking-[0.25em] text-gold-500 font-semibold uppercase mt-0.5">
                  {SITE_CONFIG.subwordmark}
                </p>
              </div>
            </Link>
            <p className="text-sm text-silver-400 max-w-sm leading-relaxed">
              &ldquo;{SITE_CONFIG.editorialCampaignLine}&rdquo;
            </p>
            <p className="text-xs text-slate-400 italic">
              {SITE_CONFIG.proposedDescriptor}
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={SITE_CONFIG.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded border border-white/10 flex items-center justify-center text-silver-400 hover:text-gold-400 hover:border-gold-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded border border-white/10 flex items-center justify-center text-silver-400 hover:text-gold-400 hover:border-gold-500/40 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded border border-white/10 flex items-center justify-center text-silver-400 hover:text-gold-400 hover:border-gold-500/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded border border-white/10 flex items-center justify-center text-silver-400 hover:text-gold-400 hover:border-gold-500/40 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Engagements */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-ivory-100 uppercase tracking-widest">
              Advisory & Pathways
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/offers" className="hover:text-gold-400 transition-colors flex items-center space-x-1 font-medium text-gold-300">
                  <span>Commercial Offers (Route A/B/C)</span>
                </Link>
              </li>
              <li>
                <Link href="/recognition" className="hover:text-gold-400 transition-colors">
                  Recognition Tokens Gallery
                </Link>
              </li>
              <li>
                <Link href="/agreements" className="hover:text-gold-400 transition-colors">
                  Agreements & Seals
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold-400 transition-colors">
                  Services Catalogue
                </Link>
              </li>
              <li>
                <Link href="/mentorship" className="hover:text-gold-400 transition-colors">
                  1:1 & 30-Day Mentorship
                </Link>
              </li>
            </ul>
          </div>

          {/* Initiatives & Work */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-ivory-100 uppercase tracking-widest">
              Ecosystem & Work
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/octopus-tank" className="hover:text-gold-400 transition-colors flex items-center space-x-1">
                  <span>Octopus Tank 2026</span>
                  <span className="text-[10px] text-gold-500 font-bold px-1 py-0.2 border border-gold-500/40 rounded">Event</span>
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-gold-400 transition-colors">
                  Verified Technical Projects
                </Link>
              </li>
              <li>
                <Link href="/institutions" className="hover:text-gold-400 transition-colors">
                  Institutional Workshops
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-gold-400 transition-colors">
                  Frameworks & Checklists
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-gold-400 transition-colors">
                  Managed Booking Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Management & Governance */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-ivory-100 uppercase tracking-widest">
              Operational Desk
            </h4>
            <div className="text-xs space-y-2 text-silver-500">
              <p className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.location}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-gold-400">
                  {SITE_CONFIG.contact.email}
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                <a href={SITE_CONFIG.contact.whatsappUrl} className="hover:text-gold-400">
                  {SITE_CONFIG.contact.phone}
                </a>
              </p>
              <div className="pt-2 border-t border-white/5">
                <p className="text-[11px] text-slate-400 leading-snug">
                  Management partner: <strong className="text-ivory-100">{SITE_CONFIG.management.entity}</strong>. Scheduling, onboarding, and commercial terms are managed by Circle13.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Persuasion & Integrity Statement */}
        <div className="py-6 border-b border-white/5 text-[11px] text-slate-400 leading-relaxed space-y-2">
          <p>
            <strong className="text-silver-400">Governance & Professional Integrity:</strong> All consultancy and mentorship engagements are educational and advisory in scope. Progress and execution depend on the client&apos;s independent decisions and operational effort. Pricing notes marked &apos;Reference Price&apos; originate from internal strategic proposals and are verified with the client during onboarding. Recognition cards awarded at Octopus Tank reflect assessed performance during judged sessions and remain strictly decoupled from paid engagements.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 space-y-3 sm:space-y-0">
          <p>© {new Date().getFullYear()} Anuj Dwivedi. All rights reserved. Platform architecture by Circle13.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-gold-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold-400 transition-colors">
              Terms of Engagement
            </Link>
            <Link href="/contact" className="hover:text-gold-400 transition-colors">
              Contact Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
