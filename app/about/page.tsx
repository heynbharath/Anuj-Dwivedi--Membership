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
  Presentation,
  Mic,
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
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

            {/* Quick Infographic Meta Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] uppercase font-mono text-gold-600 font-bold">Role</span>
                <div className="font-serif font-bold text-sm text-navy-950">AI Engineer</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] uppercase font-mono text-gold-600 font-bold">Company</span>
                <div className="font-serif font-bold text-sm text-navy-950">Archzos Tech</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] uppercase font-mono text-gold-600 font-bold">Keynote</span>
                <div className="font-serif font-bold text-sm text-navy-950">Bangalore Stage</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] uppercase font-mono text-gold-600 font-bold">Desk</span>
                <div className="font-serif font-bold text-sm text-navy-950">Circle13</div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/book"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-7 py-3.5 rounded-xl bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950 transition-colors shadow-md"
              >
                <span>Initiate Advisory Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Keynote Photo of Anuj */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-2xl p-3 sm:p-4">
              <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-slate-900 border border-gold-400/40">
                <Image
                  src="/images/anuj-keynote.png"
                  alt="Anuj Dwivedi speaking at keynote podium with microphone in black suit and sunglasses"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute top-3 left-3 flex items-center space-x-2">
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-navy-950/90 text-white text-[10px] font-mono border border-gold-400/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>KEYNOTE ADDRESS</span>
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 text-white pointer-events-none">
                  <div className="text-[10px] font-mono text-gold-300">Live Stage • Bangalore</div>
                  <div className="font-serif text-sm font-bold">Anuj Dwivedi</div>
                </div>
              </div>
              <div className="p-3 text-center">
                <div className="font-serif font-bold text-navy-950 text-sm">Anuj Dwivedi</div>
                <div className="text-[11px] text-slate-500 font-mono">Strategic Scholar & AI Practitioner</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Stage & Workshop Gallery Strip */}
        <section className="space-y-6 border-t border-slate-200 pt-12">
          <SectionHeader
            eyebrow="AUTHENTIC PERSPECTIVES"
            title="Stage Presence & Hands-On Engineering"
            subtitle="Demonstrated evidence across keynote auditoriums, campus engineering labs, and technical founder practice."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Keynote & Pitching */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 space-y-4 shadow-sm">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200">
                <Image
                  src="/images/anuj-keynote.png"
                  alt="Keynote podium address by Anuj Dwivedi"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-navy-950/90 text-gold-400 border border-gold-400/30 text-[10px] font-mono px-2.5 py-1 rounded-full font-bold">
                  KEYNOTE & PITCH DEFENSE
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl font-bold text-navy-950">
                  Commanding The Room With Clarity
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Stepping up to the podium to dismantle startup buzzwords and challenge founders on architectural defensibility, market reality, and unit economics.
                </p>
              </div>
            </div>

            {/* Card 2: Campus Masterclasses */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 space-y-4 shadow-sm">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200">
                <Image
                  src="/images/anuj-workshop-event-opt.jpg"
                  alt="Anuj Dwivedi speaking into microphone with DSU lanyard at engineering AI workshop"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-navy-950/90 text-gold-400 border border-gold-400/30 text-[10px] font-mono px-2.5 py-1 rounded-full font-bold">
                  DSU CAMPUS MASTERCLASS
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl font-bold text-navy-950">
                  Live Technical Code & Architecture
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Leading interactive engineering masterclasses at Dayananda Sagar University, breaking down LLM pipelines, FastAPI services, and production deployment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* High Infographic Grid: Four Pillars */}
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
