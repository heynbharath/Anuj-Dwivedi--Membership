"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Award,
  Terminal,
  Cpu,
  Layers,
} from "lucide-react";
import { CIRCLE13_CONFIG, SITE_CONFIG } from "@/lib/config";

export default function TheMindsBehind() {
  const [activeProof, setActiveProof] = useState<number>(0);

  const leaders = [
    {
      id: "anuj",
      name: "Anuj Dwivedi",
      role: "Lead Mentor & Keynote Evaluator",
      title: "Founder, Archzos Technologies Pvt Ltd",
      tagline: "AI Systems • Pitch Defensibility • Executive Presence",
      image: "/images/anuj-portrait.png",
      badge: "Archzos Technologies",
      badgeColor: "bg-blue-50 text-blue-800 border-blue-200",
      companyLogo: "/images/archzos-logo.png",
      bio: "Founder of Archzos Technologies. Specialist in artificial intelligence pipelines, high-stakes startup pitch defensibility, and executive communication. Keynote speaker and lead judge guiding student engineering cohorts into production-grade builders.",
      quote:
        "Builders do not buy hours. They buy clarity, direction, and unshakeable execution momentum.",
      badges: ["AI Systems", "Keynote Speaker", "Pitch Defensibility", "Venture Mentorship"],
      links: {
        whatsapp: SITE_CONFIG.contact.whatsappUrl,
        linkedin: SITE_CONFIG.contact.linkedinUrl,
        github: SITE_CONFIG.contact.githubUrl,
        email: `mailto:${SITE_CONFIG.contact.email}`,
      },
    },
    {
      id: "bharath",
      name: "N Bharath",
      role: "Platform Architect & Co-Host",
      title: "Founder & CEO, Circle13",
      tagline: "Autonomous AI • Trust Infrastructure • Venture Systems",
      image: "/images/bharath-square.jpg",
      badge: "Circle13 Platform",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
      companyLogo: "/images/circle13-logo-transparent.png",
      bio: "Founder & CEO @ Circle13. Engineering trust infrastructure for autonomous AI and enterprise agent governance. Co-hosting Octopus Tank 2026 to provide campus founders with enterprise-grade operational architecture, digital platforms, and venture systems.",
      quote:
        "True venture engineering begins where the demo script ends—in bulletproof reliability, system trust, and real-world utility.",
      badges: ["Autonomous AI", "Trust Infra", "Platform Architecture", "Venture Systems"],
      links: {
        whatsapp: CIRCLE13_CONFIG.founders[0].links.whatsapp,
        linkedin: CIRCLE13_CONFIG.founders[0].links.linkedin,
        github: CIRCLE13_CONFIG.founders[0].links.github,
        email: `mailto:${CIRCLE13_CONFIG.founders[0].links.email}`,
      },
    },
    {
      id: "akhil",
      name: "Akhil Vipin Nair",
      role: "Systems Architect & Co-Host",
      title: "Co-Founder & CTO, Circle13",
      tagline: "AI Infrastructure • Agent Security • Distributed Systems",
      image: "/images/akhil-square.jpg",
      badge: "Circle13 Platform",
      badgeColor: "bg-purple-50 text-purple-800 border-purple-200",
      companyLogo: "/images/circle13-logo-transparent.png",
      bio: "Co-Founder & CTO @ Circle13. Driving distributed AI infrastructure, agent security, and high-concurrency systems. Co-architecting the Octopus Tank platform to empower ambitious student teams to convert weekend prototypes into resilient production systems.",
      quote:
        "Scalable architecture is not an afterthought; it is the fundamental discipline that separates an ephemeral demo from an enterprise platform.",
      badges: ["AI Infrastructure", "Agent Security", "Distributed Systems", "Cloud Architecture"],
      links: {
        whatsapp: CIRCLE13_CONFIG.founders[1].links.whatsapp,
        linkedin: CIRCLE13_CONFIG.founders[1].links.linkedin,
        github: CIRCLE13_CONFIG.founders[1].links.github,
        email: `mailto:${CIRCLE13_CONFIG.founders[1].links.email}`,
      },
    },
  ];

  const proofItems = [
    {
      id: 0,
      title: "Keynote Address & Live Hackathon Judging",
      subtitle: "Anuj Dwivedi on the Live Stage",
      tag: "Live Keynote",
      tagColor: "bg-blue-500",
      image: "/images/anuj-keynote.png",
      description:
        "Anuj delivering the keynote on Artificial Intelligence and Venture Engineering, critiquing engineering architectures live before university audiences.",
    },
    {
      id: 1,
      title: "Hands-on Technical Workshop & Mentorship",
      subtitle: "Campus Builder Masterclass",
      tag: "Direct Mentorship",
      tagColor: "bg-amber-500",
      image: "/images/anuj-workshop-event-opt.jpg",
      description:
        "Leading interactive student workshops, stress-testing LLM pipelines, and teaching founders how to build with intentionality.",
    },
    {
      id: 2,
      title: "Platform Infrastructure & Venture Systems",
      subtitle: "Circle13 Co-Founders",
      tag: "Co-Host Platform",
      tagColor: "bg-emerald-500",
      image: "/images/circle13-cohosts.jpg",
      description:
        "N Bharath & Akhil Vipin Nair co-hosting the digital platform architecture, venture tracking systems, and operational backbone for Octopus Tank.",
    },
  ];

  return (
    <section id="leadership" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-neutral-100 bg-neutral-50/30 scroll-mt-16 relative">
      <span id="cohosts" className="absolute -top-16" />
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 border border-neutral-200/90 rounded-full px-3.5 py-1 text-[11px] font-mono text-neutral-800 bg-white shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
              <span>THE MINDS BEHIND OCTOPUS TANK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-semibold tracking-tight text-neutral-950">
              Mentorship, Architecture &amp; Venture Engineering.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Brought together by <strong className="text-neutral-950 font-semibold">Archzos Technologies</strong> and{" "}
              <strong className="text-neutral-950 font-semibold">Circle13</strong> in collaboration with{" "}
              <strong className="text-neutral-950 font-semibold">Tempête AI Club</strong> &amp;{" "}
              <strong className="text-neutral-950 font-semibold">DSU School of Engineering</strong>.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-600 bg-white border border-neutral-200 px-3.5 py-2 rounded-xl shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Bangalore, India · 2026 Cohort</span>
          </div>
        </div>

        {/* 3 Executive Leaders Grid: Anuj, Bharath, Akhil */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xs hover:border-neutral-300 hover:shadow-md transition-all duration-300 group"
            >
              <div className="space-y-5">
                {/* Portrait Frame */}
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/90 shadow-2xs">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    priority
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/85 backdrop-blur-xs text-white text-[10px] font-mono font-medium">
                    {leader.role}
                  </div>
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-white/95 backdrop-blur-xs border border-neutral-200 p-1 flex items-center justify-center shadow-2xs">
                    <Image
                      src={leader.companyLogo}
                      alt="Company Logo"
                      width={18}
                      height={18}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Identity Header */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-sans font-bold text-neutral-950">
                      {leader.name}
                    </h3>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${leader.badgeColor}`}
                    >
                      {leader.badge}
                    </span>
                  </div>
                  <span className="block text-xs font-semibold text-neutral-800">
                    {leader.title}
                  </span>
                  <span className="block text-[11px] font-mono text-neutral-500">
                    {leader.tagline}
                  </span>
                </div>

                {/* Bio */}
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {leader.bio}
                </p>

                {/* Philosophical Quote */}
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80">
                  <blockquote className="font-serif italic text-xs text-neutral-800 leading-snug">
                    &ldquo;{leader.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {leader.badges.map((b) => (
                    <span
                      key={b}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-100 text-neutral-700 border border-neutral-200"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Actions & Socials */}
              <div className="pt-4 border-t border-neutral-100 space-y-3">
                <div className="flex items-center gap-2">
                  {leader.links.whatsapp && (
                    <a
                      href={leader.links.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors"
                      title="Chat on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>WhatsApp</span>
                      <ArrowUpRight className="w-3 h-3 opacity-70" />
                    </a>
                  )}
                  {leader.links.linkedin && (
                    <a
                      href={leader.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 flex items-center justify-center text-neutral-700 hover:text-black transition-colors shadow-2xs"
                      title="LinkedIn Profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {leader.links.github && (
                    <a
                      href={leader.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 flex items-center justify-center text-neutral-700 hover:text-black transition-colors shadow-2xs"
                      title="GitHub Profile"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {leader.links.email && (
                    <a
                      href={leader.links.email}
                      className="w-10 h-10 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 flex items-center justify-center text-neutral-700 hover:text-black transition-colors shadow-2xs"
                      title="Send Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Stage Proof & Campus Experience Gallery */}
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10 space-y-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                CAMPUS &amp; LIVE STAGE PROOF
              </span>
              <h3 className="text-xl sm:text-2xl font-sans font-semibold text-neutral-950">
                Ground Reality · Mentoring Founders Where They Build
              </h3>
            </div>
            <div className="flex items-center gap-2">
              {proofItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveProof(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                    activeProof === idx
                      ? "bg-black text-white"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  }`}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200 shadow-sm">
              <Image
                src={proofItems[activeProof].image}
                alt={proofItems[activeProof].title}
                fill
                className="object-cover object-center transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-black/80 text-neutral-200 uppercase tracking-wider">
                  {proofItems[activeProof].tag}
                </span>
                <h4 className="text-base sm:text-lg font-bold">
                  {proofItems[activeProof].title}
                </h4>
                <p className="text-xs text-neutral-300 max-w-xl line-clamp-2">
                  {proofItems[activeProof].description}
                </p>
              </div>
            </div>

            <div className="md:col-span-4 space-y-4">
              <div className="space-y-3">
                {proofItems.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveProof(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      activeProof === idx
                        ? "border-black bg-neutral-950 text-white shadow-xs"
                        : "border-neutral-200 bg-white text-neutral-900 hover:border-neutral-300"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className={activeProof === idx ? "text-amber-400 font-bold" : "text-neutral-500"}>
                        {item.tag.toUpperCase()}
                      </span>
                      <span className={activeProof === idx ? "text-neutral-400" : "text-neutral-400"}>
                        0{idx + 1}
                      </span>
                    </div>
                    <h5 className="font-semibold text-xs sm:text-sm leading-snug">
                      {item.title}
                    </h5>
                    <p className={`text-[11px] mt-1 line-clamp-2 ${activeProof === idx ? "text-neutral-300" : "text-neutral-500"}`}>
                      {item.subtitle}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Institutional 4-Partner Alliance Bar */}
          <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                OFFICIAL INSTITUTIONAL ALLIANCE:
              </span>
              <div className="flex items-center gap-5">
                {/* DSU */}
                <div className="flex items-center gap-1.5" title="DSU School of Engineering">
                  <img
                    src="/octopus-assets/dsu-logo.png"
                    alt="DSU Crest"
                    className="w-5 h-5 rounded-full object-contain"
                  />
                  <span className="text-xs font-semibold text-neutral-900">DSU SOE</span>
                </div>
                <span className="text-neutral-300">×</span>

                {/* Tempête AI Club */}
                <div className="flex items-center gap-1.5" title="Tempête AI Club">
                  <img
                    src="/images/tempete/tempete-icon-color.svg"
                    alt="Tempête AI Club"
                    className="w-5 h-5 rounded object-contain"
                  />
                  <span className="text-xs font-semibold text-neutral-900">Tempête AI Club</span>
                </div>
                <span className="text-neutral-300">×</span>

                {/* Archzos Technologies */}
                <div className="flex items-center gap-1.5" title="Archzos Technologies">
                  <img
                    src="/images/archzos-logo.png"
                    alt="Archzos Technologies"
                    className="w-4 h-4 object-contain"
                  />
                  <span className="text-xs font-semibold text-neutral-900">Archzos</span>
                </div>
                <span className="text-neutral-300">×</span>

                {/* Circle13 */}
                <div className="flex items-center gap-1.5" title="Circle13 Platform">
                  <img
                    src="/images/circle13-logo-transparent.png"
                    alt="Circle13 Platform"
                    className="w-4 h-4 object-contain"
                  />
                  <span className="text-xs font-semibold text-neutral-900">Circle13</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-neutral-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Bangalore, Karnataka · 31 October 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
