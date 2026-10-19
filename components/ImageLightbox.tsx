"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn, ExternalLink } from "lucide-react";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  title?: string;
  caption?: string;
  sourceNote?: string;
}

export default function ImageLightbox({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  title,
  caption,
  sourceNote = "Visual Reference Source Asset",
}: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title || "Enlarged Image Preview"}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-white rounded-2xl sm:rounded-3xl border border-gold-500/40 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 bg-warmIvory/60">
          <div>
            <div className="text-[10px] uppercase font-mono font-bold tracking-wider text-gold-700">
              {sourceNote}
            </div>
            {title && (
              <h3 className="font-serif text-lg font-bold text-navy-950">
                {title}
              </h3>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close enlarged preview"
            className="p-2 rounded-full text-slate-500 hover:text-navy-950 hover:bg-slate-200/70 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Image Area */}
        <div className="relative flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-slate-100/70 min-h-[300px]">
          <div className="relative w-full max-w-3xl aspect-[3/4] sm:aspect-[4/5] rounded-xl overflow-hidden shadow-md bg-white border border-slate-200">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
        </div>

        {/* Footer Bar with Caption and Notice */}
        <div className="px-5 py-3 border-t border-slate-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600">
          <p className="max-w-2xl font-normal leading-relaxed">
            {caption || imageAlt}
          </p>
          <div className="flex items-center space-x-3 shrink-0">
            <a
              href={imageSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 font-mono text-[11px] text-gold-700 hover:text-gold-900 font-bold"
            >
              <span>Open Raw File</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
