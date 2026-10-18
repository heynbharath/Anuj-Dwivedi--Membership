import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-3xl ${
        centered ? "mx-auto text-center" : ""
      } mb-12 sm:mb-16 ${className}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.2em] text-gold-500 uppercase mb-3">
          <span className="w-5 h-[1px] bg-gold-500/60 inline-block" />
          <span>{eyebrow}</span>
          {centered && <span className="w-5 h-[1px] bg-gold-500/60 inline-block" />}
        </div>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ivory-100 leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-silver-400 leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
}
