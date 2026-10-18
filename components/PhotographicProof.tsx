"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Mic, Code2, Presentation, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function PhotographicProof() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const photos = [
    {
      id: "keynote",
      title: "Keynote Address & Pitch Defensibility",
      tag: "KEYNOTE PODIUM",
      icon: Presentation,
      image: "/images/anuj-keynote.png",
      alt: "Anuj Dwivedi speaking at keynote podium with microphone in black suit and sunglasses",
      location: "Bangalore Keynote Stage",
      context: "Strategic pitching, executive clarity, and engineering communication.",
      bullet: "Auditing assumptions and dismantling jargon for founders.",
      stats: [
        { label: "Format", value: "Keynote Address" },
        { label: "Focus", value: "Pitch & Defensibility" },
        { label: "Protocol", value: "Circle13 Coordinated" },
      ],
    },
    {
      id: "workshop",
      title: "Campus Engineering Masterclasses",
      tag: "WORKSHOP & LAB",
      icon: Mic,
      image: "/images/anuj-workshop-event-opt.jpg",
      alt: "Anuj Dwivedi speaking into microphone with DSU lanyard at engineering AI workshop",
      location: "DSU School of Engineering",
      context: "Hands-on machine learning architectures, FastAPI backends, and agent loops.",
      bullet: "Guiding university engineers from toy notebooks to production pipelines.",
      stats: [
        { label: "Campus", value: "Dayananda Sagar Univ" },
        { label: "Audience", value: "Engineering Cohorts" },
        { label: "Execution", value: "Live Code Audits" },
      ],
    },
    {
      id: "architecture",
      title: "Archzos Technologies Practice",
      tag: "FOUNDER & ARCHITECT",
      icon: Code2,
      image: "/images/anuj-prof-3.png",
      alt: "Anuj Dwivedi founder of Archzos Technologies portrait",
      location: "Archzos Tech HQ • Bangalore",
      context: "Building production Generative AI systems, computer vision, and automation tools.",
      bullet: "Active contributor across verified GitHub repositories and deployed webapps.",
      stats: [
        { label: "Role", value: "Founder & AI Engineer" },
        { label: "Core Stack", value: "Python / TS / PyTorch" },
        { label: "Evidence", value: "Public GitHub Repos" },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Visual Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200 max-w-xl mx-auto">
        {photos.map((item, idx) => {
          const Icon = item.icon;
          const isActive = activeTab === idx;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`flex-1 min-w-[150px] inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs font-mono font-bold transition-all ${
                isActive
                  ? "bg-navy-950 text-white shadow-md border border-gold-500/40"
                  : "text-slate-600 hover:text-navy-950 hover:bg-white/80"
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? "text-gold-400" : "text-slate-400"}`} />
              <span>{item.tag}</span>
            </button>
          );
        })}
      </div>

      {/* Featured Photo Display Card */}
      <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Photo Frame */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-slate-900 border-2 border-gold-400/30 shadow-2xl group">
              <Image
                src={photos[activeTab].image}
                alt={photos[activeTab].alt}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                priority
              />

              {/* Gradient Vignette for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-black/20 pointer-events-none" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 flex items-center space-x-2">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-navy-950/90 backdrop-blur-md text-white border border-gold-400/40 text-[10px] font-mono font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{photos[activeTab].tag}</span>
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white pointer-events-none">
                <div>
                  <div className="text-[10px] uppercase font-mono text-gold-300 font-bold">
                    {photos[activeTab].location}
                  </div>
                  <div className="font-serif text-lg font-bold">
                    Anuj Dwivedi
                  </div>
                </div>
                <div className="text-[10px] font-mono text-slate-300 bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-sm border border-white/10">
                  Verified In Situ
                </div>
              </div>
            </div>
          </div>

          {/* Context & Technical Metrics (Least Text) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 text-[10px] font-mono font-bold uppercase tracking-wider text-gold-600">
                <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                <span>DOCUMENTED PUBLIC RECORD</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 leading-tight">
                {photos[activeTab].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                {photos[activeTab].context}
              </p>
            </div>

            {/* Bullet Point */}
            <div className="p-3.5 rounded-xl bg-gold-50/60 border border-gold-200/80 flex items-start space-x-2.5 text-xs text-navy-950 font-medium">
              <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
              <span>{photos[activeTab].bullet}</span>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-3 gap-2.5 pt-1">
              {photos[activeTab].stats.map((s, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                  <div className="text-[9px] uppercase font-mono text-slate-400 font-bold">
                    {s.label}
                  </div>
                  <div className="font-serif text-xs font-bold text-navy-950 mt-0.5">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Links */}
            <div className="pt-2 flex items-center space-x-3">
              <Link
                href="/about"
                className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold uppercase tracking-wider text-navy-950 hover:text-gold-600"
              >
                <span>Read Verified Dossier</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gold-500" />
              </Link>
              <span className="text-slate-300">•</span>
              <Link
                href="/institutions"
                className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-600 hover:text-navy-950"
              >
                <span>Host A Workshop</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
