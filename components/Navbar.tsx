"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/mentorship", label: "Mentorship" },
    { href: "/membership", label: "Membership" },
    { href: "/institutions", label: "For Institutions" },
    { href: "/octopus-tank", label: "Octopus Tank" },
    { href: "/resources", label: "Resources" },
    { href: "/about", label: "About" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-sm"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark with mini avatar */}
          <Link href="/" className="group flex items-center space-x-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gold-500/50 shadow-sm shrink-0">
              <Image
                src="/images/anuj-avatar.jpg"
                alt="Anuj Dwivedi"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-navy-950 group-hover:text-gold-600 transition-colors">
                {SITE_CONFIG.brandName}
              </span>
              <span className="text-[9px] tracking-[0.25em] text-gold-600 font-bold uppercase">
                {SITE_CONFIG.subwordmark}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-wider transition-colors relative py-1 ${
                    isActive
                      ? "text-gold-600 font-bold"
                      : "text-slate-600 hover:text-navy-950 font-medium"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Actions */}
          <div className="hidden sm:flex items-center space-x-4">
            <Link
              href="/book"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-4 py-2.5 rounded bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950 transition-all duration-200 shadow-sm"
            >
              <span>Book An Engagement</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center space-x-2">
            <Link
              href="/book"
              className="text-xs uppercase tracking-wider font-bold px-3 py-1.5 rounded bg-navy-950 text-white"
            >
              Book
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded text-slate-700 hover:text-navy-950 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 transition-all animate-fadeIn shadow-xl">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm tracking-wide py-1.5 border-b border-slate-100 ${
                  pathname === link.href
                    ? "text-gold-600 font-bold"
                    : "text-slate-700 hover:text-navy-950 font-medium"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/book"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex justify-center items-center space-x-2 text-xs uppercase tracking-wider font-bold py-3 rounded bg-gold-500 text-navy-950"
              >
                <span>Book an Engagement</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
