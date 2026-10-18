import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SITE_CONFIG,
  SERVICES_CATALOGUE,
  OCTOPUS_TANK_CONFIG,
  MEMBERSHIP_TIERS,
} from "@/lib/config";
import { formatINR } from "@/lib/utils";
import SectionHeader from "@/components/SectionHeader";
import VerificationNotice from "@/components/VerificationNotice";
import EvidenceModule from "@/components/EvidenceModule";
import CardDisplay from "@/components/CardDisplay";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Cpu,
  Layers,
  Sparkles,
  Users,
  Building,
  BookOpen,
  Target,
  Shield,
  HelpCircle,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-24 sm:space-y-32">
      {/* =========================================================
          SECTION 2: HERO
      ========================================================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-grid-pattern overflow-hidden">
        {/* Subtle radial ambient lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>AI / PRODUCT THINKING / EXECUTION</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ivory-100 leading-[1.1]">
            Knowledge is everywhere. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-amber-200">
              Clarity is the advantage.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="max-w-2xl mx-auto text-base sm:text-xl text-silver-400 font-light leading-relaxed">
            {SITE_CONFIG.heroSupporting}
          </p>

          {/* Dual CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-wider font-bold px-7 py-4 rounded bg-gold-500 text-navy-950 hover:bg-gold-400 transition-all duration-200 shadow-lg shadow-gold-500/10"
            >
              <span>Find Your Engagement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-wider font-semibold px-7 py-4 rounded border border-white/15 text-ivory-100 hover:border-gold-500/40 hover:bg-white/5 transition-all duration-200"
            >
              <span>Explore the Work</span>
              <ArrowUpRight className="w-4 h-4 text-silver-400" />
            </Link>
          </div>

          {/* Three Concise Descriptors */}
          <div className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto border-t border-white/10 text-center">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-400">
                Technical Depth
              </span>
              <p className="text-xs text-silver-400">
                Real machine learning models, API systems & production code.
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-400">
                Structured Thinking
              </span>
              <p className="text-xs text-silver-400">
                Deciding which questions matter before writing a single line.
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-400">
                Practical Execution
              </span>
              <p className="text-xs text-silver-400">
                Moving from theoretical tutorials to functional deliverables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: PROOF BEFORE PROMISE
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="EVIDENCE FIRST"
          title="Look at the work. Then decide."
          subtitle="Before investing in advisory or mentorship, inspect genuine repositories, deployed web applications, and documented materials."
        />
        <EvidenceModule />
      </section>

      {/* =========================================================
          SECTION 4: THE PROBLEM
      ========================================================= */}
      <section className="bg-navy-900/40 border-y border-white/5 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest text-gold-500 uppercase">
            <span>THE EXECUTION BOTTLENECK</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory-100 leading-tight">
            More information isn&apos;t always the answer.
          </h2>
          <p className="text-base sm:text-lg text-silver-400 font-light leading-relaxed max-w-2xl mx-auto">
            You can spend weeks learning new tools, refining an idea, or adding features to a project. But progress depends on the questions you ask, the assumptions you test, and the decisions you make.
          </p>
          <p className="text-base sm:text-lg text-silver-300 font-light leading-relaxed max-w-2xl mx-auto">
            Sometimes the most valuable next step is not another tutorial. It is a clearer way forward.
          </p>
          <div className="pt-4">
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-6 py-3.5 rounded border border-gold-500/60 bg-gold-500/10 text-gold-400 hover:bg-gold-500 hover:text-navy-950 transition-all duration-200"
            >
              <span>Explore How We Can Work Together</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 5: SELECT YOUR PATH (CONTRAST & IDENTIFICATION)
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="ENGAGEMENT CONTRAST"
          title="Select your path."
          subtitle="Different stages require different formats. Identify the structure that matches your current operational challenge."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Path A */}
          <div className="p-6 rounded-xl bg-navy-950 border border-white/10 hover:border-gold-500/40 transition-all flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-gold-500">
                PATH A
              </span>
              <h3 className="font-serif text-xl font-bold text-ivory-100">
                &ldquo;I want a clearer perspective.&rdquo;
              </h3>
              <p className="text-xs text-silver-400 leading-relaxed">
                For founders or builders confronting a single high-stakes architectural, AI pipeline, or pitch narrative hurdle.
              </p>
            </div>
            <Link
              href="/services#personal-consultancy"
              className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider font-semibold text-gold-400 group-hover:text-gold-300"
            >
              <span>Personal Consultancy</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Path B */}
          <div className="p-6 rounded-xl bg-navy-950 border border-gold-500/30 bg-gradient-to-b from-navy-900 to-navy-950 hover:border-gold-500/60 transition-all flex flex-col justify-between space-y-6 group shadow-lg">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-gold-500">
                PATH B
              </span>
              <h3 className="font-serif text-xl font-bold text-ivory-100">
                &ldquo;I want structured guidance.&rdquo;
              </h3>
              <p className="text-xs text-silver-400 leading-relaxed">
                For builders who need 4 sequenced sessions to diagnose, prioritise, review, and lock in a disciplined execution plan.
              </p>
            </div>
            <Link
              href="/mentorship"
              className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider font-semibold text-gold-400 group-hover:text-gold-300"
            >
              <span>One-to-One Mentorship</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Path C */}
          <div className="p-6 rounded-xl bg-navy-950 border border-white/10 hover:border-gold-500/40 transition-all flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-silver-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                PATH C
              </span>
              <h3 className="font-serif text-xl font-bold text-ivory-100">
                &ldquo;I want continued learning.&rdquo;
              </h3>
              <p className="text-xs text-silver-400 leading-relaxed">
                For practitioners interested in ongoing access to curated repositories, technical frameworks, and upcoming member tiers.
              </p>
            </div>
            <Link
              href="/membership"
              className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider font-semibold text-gold-400 group-hover:text-gold-300"
            >
              <span>Explore Membership</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Path D */}
          <div className="p-6 rounded-xl bg-navy-950 border border-white/10 hover:border-gold-500/40 transition-all flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-silver-400">
                <Building className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                PATH D
              </span>
              <h3 className="font-serif text-xl font-bold text-ivory-100">
                &ldquo;I represent an institution.&rdquo;
              </h3>
              <p className="text-xs text-silver-400 leading-relaxed">
                For universities, hackathons, and corporate incubators seeking AI bootcamps, keynote masterclasses, or pitch judging.
              </p>
            </div>
            <Link
              href="/institutions"
              className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider font-semibold text-gold-400 group-hover:text-gold-300"
            >
              <span>Institutional Enquiries</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: SIGNATURE SERVICES
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="COMMERCIAL OFFERS"
          title="Signature advisory & mentorship."
          subtitle="Clear scopes, transparent reference pricing, and structured expectations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES_CATALOGUE.filter((s) => s.id !== "institutional-programmes").map(
            (service) => {
              const isAnchor = service.id === "thirty-day-premium-mentorship";

              return (
                <div
                  key={service.id}
                  className={`rounded-2xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                    isAnchor
                      ? "bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950 border-2 border-gold-500 shadow-2xl shadow-gold-500/10"
                      : "bg-navy-950 border border-white/10 hover:border-gold-500/30"
                  }`}
                >
                  {service.badge && (
                    <div className="absolute -top-3 left-8">
                      <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest bg-gold-500 text-navy-950">
                        {service.badge}
                      </span>
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-gold-400">
                        {service.eyebrow}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-ivory-100 mt-1">
                        {service.title}
                      </h3>
                      <p className="text-xs text-silver-400 mt-2 font-light leading-relaxed">
                        {service.headline}
                      </p>
                    </div>

                    {/* Price Block */}
                    <div className="py-4 border-y border-white/5 space-y-1">
                      <div className="flex items-baseline space-x-2">
                        <span className="font-serif text-3xl font-bold text-ivory-100">
                          {service.referencePriceINR
                            ? formatINR(service.referencePriceINR)
                            : "Custom Quote"}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          (Reference)
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        {service.priceNote}
                      </p>
                    </div>

                    {/* Audience & Scope */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold text-silver-300 uppercase tracking-wider">
                        Who It Is For
                      </h4>
                      <p className="text-xs text-silver-400 leading-relaxed">
                        {service.audience}
                      </p>
                    </div>

                    {/* Included Features */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-semibold text-silver-300 uppercase tracking-wider">
                        Included In Scope
                      </h4>
                      <ul className="space-y-2">
                        {service.included.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-2 text-xs text-silver-400 leading-relaxed"
                          >
                            <Check className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="pt-8 mt-6 border-t border-white/5">
                    <Link
                      href={`/book?service=${service.id}`}
                      className={`w-full inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-wider font-bold py-3.5 rounded transition-all duration-200 ${
                        isAnchor
                          ? "bg-gold-500 text-navy-950 hover:bg-gold-400"
                          : "border border-gold-500/60 bg-gold-500/10 text-gold-400 hover:bg-gold-500 hover:text-navy-950"
                      }`}
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>

      {/* =========================================================
          SECTION 7: THE ANUJ APPROACH (TEACH / JUDGE / REWARD / CONVERT)
      ========================================================= */}
      <section className="bg-navy-900/30 border-y border-white/5 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <SectionHeader
            centered
            eyebrow="OPERATIONAL FRAMEWORK"
            title="Teach. Judge. Reward. Convert."
            subtitle="The structured methodology inspired by the Octopus Tank master plan. Build understanding first, evaluate critically, recognize potential, and convert commitment into real outcomes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SITE_CONFIG.positioning.theFourPillars.map((pillar) => (
              <div
                key={pillar.id}
                className="p-6 rounded-xl bg-navy-950 border border-white/10 hover:border-gold-500/40 transition-all duration-300 relative group"
              >
                <div className="text-4xl font-serif font-bold text-gold-500/20 group-hover:text-gold-500/40 transition-colors">
                  {pillar.step}
                </div>
                <h3 className="font-serif text-xl font-bold text-ivory-100 mt-2">
                  {pillar.label}
                </h3>
                <p className="text-xs font-semibold text-gold-400 mt-1">
                  {pillar.summary}
                </p>
                <p className="text-xs text-silver-400 mt-3 leading-relaxed">
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto p-4 rounded-lg bg-navy-950 border border-white/10 text-center text-xs text-slate-400">
            <p>
              <strong className="text-silver-300">Merit Separation Notice:</strong> Evaluation and judging (e.g. at hackathons or campus competitions) are conducted strictly on independent stage merit. Commercial mentorship and consultancy services are separate advisory offerings and do not guarantee or influence contest judging results.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 8: MEMBERSHIP TEASER
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-8 sm:p-12 bg-navy-950 border border-gold-500/20 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <VerificationNotice
              status="proposed_copy"
              label="Proposed Membership Model"
            />
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory-100 leading-tight">
              Stay close to the work.
            </h2>
            <p className="text-sm sm:text-base text-silver-400 leading-relaxed font-light">
              Explore an ongoing relationship with selected learning resources, structured guidance, and member benefits as they become available. Designed for practitioners who want consistent technical perspective without full 1:1 retainer overhead.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {MEMBERSHIP_TIERS.map((tier) => (
                <div
                  key={tier.id}
                  className="p-4 rounded-lg bg-navy-900/60 border border-white/10 space-y-2"
                >
                  <div className="text-[10px] uppercase font-mono text-gold-500 font-bold">
                    LEVEL 0{tier.tierLevel}
                  </div>
                  <h4 className="font-serif font-bold text-ivory-100 text-sm">
                    {tier.name}
                  </h4>
                  <p className="text-[11px] text-silver-400 leading-snug">
                    {tier.positioning}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/membership"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-6 py-3.5 rounded bg-gold-500 text-navy-950 hover:bg-gold-400 transition-colors"
              >
                <span>Explore Membership Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-xs text-slate-400 italic">
                * Membership pricing and live benefits currently in finalisation with Anuj.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 9: OCTOPUS TANK 2026 & RECOGNITION CARDS
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeader
            eyebrow="CAMPUS INITIATIVE"
            title="Octopus Tank 2026."
            subtitle="8 Arms. Infinite Ideas. Pitch. Compete. Launch. A proposed campus startup pitch initiative co-hosted by N Bharath, Akhil Vipin Nair, and Anuj Dwivedi at Dayananda Sagar University School of Engineering."
            className="mb-0"
          />
          <Link
            href="/octopus-tank"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-5 py-3 rounded border border-gold-500/60 bg-gold-500/10 text-gold-400 hover:bg-gold-500 hover:text-navy-950 transition-all shrink-0"
          >
            <span>View Full Event Architecture</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 10 Recognition Cards Display */}
        <CardDisplay />
      </section>

      {/* =========================================================
          SECTION 10: FINAL CONVERSION (HIGH-CONTRAST DARK)
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="rounded-3xl p-8 sm:p-16 bg-gradient-to-br from-navy-900 via-navy-950 to-obsidian border border-gold-500/40 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-gold-400 font-semibold">
              READY TO MOVE FORWARD
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory-100 leading-tight">
              Start with the challenge in front of you.
            </h2>
            <p className="text-sm sm:text-base text-silver-400 font-light leading-relaxed">
              Tell us what you&apos;re working on and what you want to move forward. Explore the available options or request an advisory engagement.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-wider font-bold px-8 py-4 rounded bg-gold-500 text-navy-950 hover:bg-gold-400 transition-all shadow-lg"
              >
                <span>Book or Enquire</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-wider font-semibold px-8 py-4 rounded border border-white/20 text-ivory-100 hover:bg-white/5 transition-all"
              >
                <span>General Contact</span>
              </Link>
            </div>
            <div className="pt-4 text-xs text-slate-500">
              Coordinated via {SITE_CONFIG.management.entity} • All enquiries reviewed within 24-48h
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
