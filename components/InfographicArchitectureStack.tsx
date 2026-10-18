"use client";

import React, { useState } from "react";
import { Database, Cpu, Bot, Rocket, Check, ArrowRight } from "lucide-react";

export default function InfographicArchitectureStack() {
  const [selectedLayer, setSelectedLayer] = useState<number>(2);

  const layers = [
    {
      id: 1,
      level: "LAYER 01",
      title: "Data & Ingestion Pipeline",
      short: "Vector Stores & Embeddings",
      icon: Database,
      tags: ["ChromaDB", "FAISS", "Preprocessing", "Clean ETL"],
      description: "High-throughput data parsing, vector embedding indexing, and chunking strategies that eliminate garbage-in, garbage-out failure modes.",
      metric: "Sub-50ms Vector Retrieval",
    },
    {
      id: 2,
      level: "LAYER 02",
      title: "Model & Inference Engine",
      short: "Open Weights & APIs",
      icon: Cpu,
      tags: ["PyTorch", "HuggingFace", "FastAPI", "Latency Budgets"],
      description: "Selecting between fine-tuned open-source weights and proprietary APIs. Optimization of KV caching, quantisation, and token cost curves.",
      metric: "Predictable Token Economics",
    },
    {
      id: 3,
      level: "LAYER 03",
      title: "Agentic Orchestration",
      short: "Tool Use & Memory Loops",
      icon: Bot,
      tags: ["Autonomous Loops", "State Machines", "RAG", "Guardrails"],
      description: "Multi-step reasoning loops with deterministic fallback rules, structured JSON outputs, tool calling, and persistent conversation context.",
      metric: "Zero Hallucination Traps",
    },
    {
      id: 4,
      level: "LAYER 04",
      title: "Commercial Pitch & Production",
      short: "Cloud Deploy & Defensibility",
      icon: Rocket,
      tags: ["Docker", "Vercel / AWS", "Pitch Deck", "Unit Economics"],
      description: "Wrapping technical pipelines in resilient cloud infrastructure while translating raw architecture into an airtight, defensible commercial narrative.",
      metric: "Validated Market Defensibility",
    },
  ];

  return (
    <div className="space-y-6">
      {/* 4-Layer Architectural Diagram */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {layers.map((layer, idx) => {
          const Icon = layer.icon;
          const isSelected = selectedLayer === idx;

          return (
            <div
              key={layer.id}
              onClick={() => setSelectedLayer(idx)}
              className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? "bg-navy-950 text-white border-gold-500 shadow-xl ring-2 ring-gold-400/20"
                  : "bg-white text-navy-950 border-slate-200 hover:border-gold-300 hover:shadow-md"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold tracking-widest ${
                    isSelected ? "text-gold-400" : "text-gold-600"
                  }`}>
                    {layer.level}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isSelected ? "bg-white/10 text-gold-400" : "bg-slate-100 text-slate-700"
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h4 className="font-serif text-lg font-bold">
                    {layer.title}
                  </h4>
                  <p className={`text-xs mt-0.5 ${isSelected ? "text-slate-300" : "text-slate-500"}`}>
                    {layer.short}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {layer.tags.map((t, i) => (
                    <span
                      key={i}
                      className={`text-[9px] font-mono px-2 py-0.5 rounded ${
                        isSelected
                          ? "bg-white/10 text-slate-200 border border-white/10"
                          : "bg-slate-100 text-slate-600 border border-slate-200"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metric Callout */}
              <div className={`mt-5 pt-3 border-t text-[10px] font-mono font-bold flex items-center justify-between ${
                isSelected ? "border-white/10 text-gold-300" : "border-slate-100 text-gold-700"
              }`}>
                <span>{layer.metric}</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Layer Deep-Dive Banner */}
      <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-[10px] font-mono uppercase tracking-wider text-gold-600 font-bold">
            ARCHITECTURAL DETAIL • {layers[selectedLayer].level}
          </div>
          <p className="text-xs sm:text-sm text-slate-700 font-normal max-w-2xl">
            {layers[selectedLayer].description}
          </p>
        </div>
        <div className="shrink-0 text-xs font-mono font-bold px-4 py-2 rounded-xl bg-white border border-slate-200 text-navy-950 shadow-sm">
          Audited by Anuj
        </div>
      </div>
    </div>
  );
}
