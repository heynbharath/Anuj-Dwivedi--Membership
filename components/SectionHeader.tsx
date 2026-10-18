import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  dark?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className = "",
  dark = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-3xl ${
        centered ? "mx-auto text-center" : ""
      } mb-10 sm:mb-14 ${className}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center space-x-2 text-[11px] font-mono font-bold tracking-[0.2em] text-gold-600 uppercase mb-2">
          <span className="w-4 h-[2px] bg-gold-500 inline-block" />
          <span>{eyebrow}</span>
          {centered && <span className="w-4 h-[2px] bg-gold-500 inline-block" />}
        </div>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] ${
          dark ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-sm sm:text-base leading-relaxed font-light ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
