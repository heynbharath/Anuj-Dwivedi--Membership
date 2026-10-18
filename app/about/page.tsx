import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import VerificationNotice from "@/components/VerificationNotice";
import { SITE_CONFIG } from "@/lib/config";
import {
  Brain,
  Code2,
  Compass,
  CheckCircle2,
  ExternalLink,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  Award,
} from "lucide-react";

export const metadata = {
  title: "About Anuj Dwivedi | Professional Profile & Narrative",
  description:
    "Understand the philosophy, verified background, and practical engineering orientation of Anuj Dwivedi. From technical learning to disciplined execution.",
};

export default function AboutPage() {
  return (
    <div className="bg-white text-navy-950 py-12 sm:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Profile Hero with Real Photos of Anuj */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center space-x-2">
              <VerificationNotice
                status="verified"
                label="Verified Profile & Evidence"
              />
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-navy-950 leading-[1.08]">
              From Knowledge <br />
              <span className="text-gold-600">to Judgment.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              &ldquo;Knowing more is not always the same as moving forward. The scarce skill is deciding which knowledge matters, which assumptions deserve testing, and what to build next.&rdquo;
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] uppercase font-mono text-gold-600 font-bold">Role</span>
                <div className="font-serif font-bold text-sm text-navy-950">AI Engineer</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] uppercase font-mono text-gold-600 font-bold">Company</span>
                <div className="font-serif font-bold text-sm text-navy-950">Archzos Tech</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] uppercase font-mono text-gold-600 font-bold">Club</span>
                <div className="font-serif font-bold text-sm text-navy-950">Tempete Club</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] uppercase font-mono text-gold-600 font-bold">Location</span>
                <div className="font-serif font-bold text-sm text-navy-950">Bangalore, IN</div>
              </div>
            </div>
          </div>

          {/* Photo of Anuj */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden bg-slate-50 border border-slate-200 shadow-xl p-3">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src="/images/anuj-profile.png"
                  alt="Anuj Dwivedi - AI Engineer"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="p-3 text-center">
                <div className="font-serif font-bold text-navy-950">Anuj Dwivedi</div>
                <div className="text-xs text-slate-500 font-mono">Strategic Scholar & AI Practitioner</div>
              </div>
            </div>
          </div>
        </div>

        {/* High Infographic Grid: Verified Pillars */}
        <section className="space-y-6 border-t border-slate-200 pt-12">
          <SectionHeader
            eyebrow="CORE FOCUS"
            title="Four Pillars of Practical Guidance"
            subtitle="Bridging the divide between theory, building, pitching, and disciplined delivery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[10px] font-mono uppercase font-bold text-gold-600">01 • PRACTICE</span>
              <h3 className="font-serif text-lg font-bold text-navy-950">AI & Web Engineering</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Computer vision, NLP pipelines, FastAPI services, and production deployment across cloud VM instances.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[10px] font-mono uppercase font-bold text-gold-600">02 • STRATEGY</span>
              <h3 className="font-serif text-lg font-bold text-navy-950">Pitch Defensibility</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Translating intricate engineering feats into clear commercial narratives that convince skeptical evaluators.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[10px] font-mono uppercase font-bold text-gold-600">03 • DISCIPLINE</span>
              <h3 className="font-serif text-lg font-bold text-navy-950">Physical Rigor & Boxing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Physical fitness and athletic training as an essential engine for mental stamina, focus, and grit under stress.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[10px] font-mono uppercase font-bold text-gold-600">04 • RECOGNITION</span>
              <h3 className="font-serif text-lg font-bold text-navy-950">Octopus Tank 2026</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Co-hosting the 8-arm campus pitching competition at DSU School of Engineering with Circle13.
              </p>
            </div>
          </div>
        </section>

        {/* Management Desk Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-navy-950 text-white border border-gold-500/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 font-bold">
              OPERATIONAL PROTOCOL
            </span>
            <h3 className="font-serif text-2xl font-bold">
              Managed Exclusively by Circle13
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              &ldquo;My team manages my time. Bookings and payment collection are coordinated by management, not directly by me.&rdquo;
            </p>
          </div>
          <Link
            href="/book"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-6 py-3.5 rounded-xl bg-gold-500 text-navy-950 hover:bg-gold-400 transition-colors shrink-0"
          >
            <span>Book an Engagement</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
