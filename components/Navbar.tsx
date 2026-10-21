"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { OCTOPUS_TANK_GOOGLE_FORM_URL } from "@/lib/config";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/octopus-tank", label: "Octopus Tank" },
    { href: "/membership", label: "Membership" },
    { href: "/mentorship", label: "Advisory" },
    { href: "/about", label: "About" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-neutral-200 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
          : "bg-white/90 backdrop-blur-xs border-b border-neutral-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Minimalist Brand Wordmark */}
          <Link href="/" className="group flex items-center space-x-3">
            <div className="w-7 h-7 rounded-md bg-black text-white flex items-center justify-center font-mono text-xs font-semibold tracking-tighter shadow-xs">
              AD
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-sm font-semibold tracking-tight text-neutral-950 group-hover:text-neutral-700 transition-colors">
                ANUJ DWIVEDI
              </span>
              <span className="text-[10px] font-mono text-neutral-400 tracking-wider uppercase">
                Think / Build / Execute
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] font-medium transition-colors ${
                    isActive
                      ? "text-black font-semibold"
                      : "text-neutral-500 hover:text-black"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Clean Primary Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link
              href="/membership"
              className="text-[13px] font-medium text-neutral-600 hover:text-black px-3 py-1.5 transition-colors"
            >
              Explore Tiers
            </Link>
            <a
              href={OCTOPUS_TANK_GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-[13px] font-semibold px-4 py-2 rounded-lg bg-black text-white hover:bg-neutral-800 transition-all duration-150 shadow-xs"
            >
              <span>Apply to Pitch</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <a
              href={OCTOPUS_TANK_GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold px-3 py-1.5 rounded-md bg-black text-white"
            >
              Apply
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-md text-neutral-700 hover:text-black hover:bg-neutral-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-neutral-200 bg-white px-4 pt-3 pb-5 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-neutral-800 hover:text-black py-2 px-2 rounded-md hover:bg-neutral-50"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-2 border-t border-neutral-100 flex flex-col gap-2">
            <a
              href={OCTOPUS_TANK_GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center text-xs font-semibold py-2.5 rounded-lg bg-black text-white"
            >
              Apply for Octopus Tank (Google Form)
            </a>
            <Link
              href="/membership"
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-xs font-medium py-2 rounded-lg border border-neutral-200 text-neutral-800"
            >
              View Membership
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
