import React from "react";
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
} from "lucide-react";

export const metadata = {
  title: "About Anuj Dwivedi | Professional Profile & Narrative",
  description:
    "Understand the philosophy, verified background, and practical engineering orientation of Anuj Dwivedi. From technical learning to disciplined execution.",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-20">
      {/* Page Header */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <VerificationNotice
            status="proposed_copy"
            label="Editorial Brand Narrative"
          />
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ivory-100 tracking-tight leading-[1.1]">
          From Knowledge <br />
          <span className="text-gold-400">to Judgment.</span>
        </h1>
        <p className="text-lg sm:text-xl text-silver-300 font-light max-w-3xl leading-relaxed">
          &ldquo;Knowing more is not always the same as moving forward. The scarce skill is deciding which knowledge matters, which assumptions deserve testing, and what to build next.&rdquo;
        </p>
      </div>

      {/* The Central Story */}
      <section className="space-y-8 border-t border-white/10 pt-12">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-100">
          The Problem With Information Overload
        </h2>
        <div className="prose prose-invert max-w-none text-silver-400 text-sm sm:text-base leading-relaxed space-y-5">
          <p>
            There is no shortage of technical tutorials today. Every week brings new machine learning repositories, updated Python frameworks, generative AI tools, and architectural paradigms. Anyone with an internet connection can consume hours of lectures.
          </p>
          <p>
            Yet engineers, student founders, and builders frequently get trapped in a loop: endlessly learning new tools, tweaking peripheral code, or polishing pitch decks without ever confronting the central question: <em>Are we building the right thing, and is the architecture defensible?</em>
          </p>
          <p>
            Anuj Dwivedi&apos;s work sits squarely at this intersection. Rather than acting as a theoretical lecturer or generic motivational speaker, his orientation is anchored in practical building, critical evaluation, and structured execution.
          </p>
        </div>
      </section>

      {/* Verified Professional Anchor Points */}
      <section className="space-y-8 border-t border-white/10 pt-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-100">
              Verified Evidence & Roles
            </h2>
            <p className="text-xs text-silver-400 mt-1">
              Documented affiliations, engineering activities, and community roles.
            </p>
          </div>
          <VerificationNotice status="verified" label="Attributable Public Record" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-navy-950 border border-white/10 space-y-3">
            <div className="text-xs font-mono text-gold-500 uppercase tracking-widest">
              Founding & Initiatives
            </div>
            <h3 className="font-serif text-lg font-bold text-ivory-100">
              Archzos Technologies & Tempete Club
            </h3>
            <p className="text-xs text-silver-400 leading-relaxed">
              Identified as Founder of Archzos Technologies Pvt Ltd (supplied masterplan) and Founder of Tempete Club (Octopus Tank 2026 poster). Focused on technology engineering and student innovation ecosystems.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-navy-950 border border-white/10 space-y-3">
            <div className="text-xs font-mono text-gold-500 uppercase tracking-widest">
              Technical Practice
            </div>
            <h3 className="font-serif text-lg font-bold text-ivory-100">
              AI Engineering & Software Systems
            </h3>
            <p className="text-xs text-silver-400 leading-relaxed">
              Active engineering portfolio spanning computer vision (YOLO), cognitive assessment engines (Enigma Quest), natural language tutoring, and machine learning segmentation (Flask & Scikit-Learn).
            </p>
          </div>

          <div className="p-6 rounded-xl bg-navy-950 border border-white/10 space-y-3">
            <div className="text-xs font-mono text-gold-500 uppercase tracking-widest">
              Campus & Community
            </div>
            <h3 className="font-serif text-lg font-bold text-ivory-100">
              Workshops, Hackathons & Judging
            </h3>
            <p className="text-xs text-silver-400 leading-relaxed">
              Regular technical speaking and workshop delivery, including co-hosting the upcoming Octopus Tank 2026 initiative at Dayananda Sagar University School of Engineering with Circle13.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-navy-950 border border-white/10 space-y-3">
            <div className="text-xs font-mono text-gold-500 uppercase tracking-widest">
              Personal Discipline
            </div>
            <h3 className="font-serif text-lg font-bold text-ivory-100">
              Physical Fitness & High-Grit Execution
            </h3>
            <p className="text-xs text-silver-400 leading-relaxed">
              Pursuit of boxing and athletic rigor as a foundational discipline for mental clarity, resilience under pressure, and relentless execution stamina.
            </p>
          </div>
        </div>
      </section>

      {/* The Management Model */}
      <section className="p-8 rounded-2xl bg-navy-900/40 border border-gold-500/30 space-y-4">
        <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-gold-400">
          <ShieldAlert className="w-4 h-4" />
          <span>Operational Representation</span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-ivory-100">
          Why Circle13 Manages the Practice
        </h3>
        <p className="text-xs sm:text-sm text-silver-300 leading-relaxed">
          &ldquo;My team manages my time. Bookings and payment collection are handled by management, not directly by me.&rdquo;
        </p>
        <p className="text-xs text-silver-400 leading-relaxed">
          To preserve uncompromising focus on advisory quality and engineering depth, all client intake, scheduling, commercial onboarding, and payment processing are coordinated through <strong>Circle13 Management</strong> (led by N Bharath and Akhil Vipin Nair). This ensures that every engagement begins with clear mutual expectations and zero administrative friction.
        </p>
      </section>

      {/* Direct CTA */}
      <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-serif text-xl font-bold text-ivory-100">
            Have a project or decision to evaluate?
          </h3>
          <p className="text-xs text-silver-400 mt-1">
            Explore personal consultancy or structured 1:1 mentorship.
          </p>
        </div>
        <Link
          href="/services"
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-6 py-3.5 rounded bg-gold-500 text-navy-950 hover:bg-gold-400 transition-colors"
        >
          <span>View Engagement Catalog</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
