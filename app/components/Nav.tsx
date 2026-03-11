"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Über mich", href: "#ueber-mich" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Projekte", href: "#projekte" },
  { label: "Skills", href: "#skills" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAFAF8]/95 backdrop-blur-md shadow-sm border-b border-[#E0DBD5]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-[#C4622D] text-white flex items-center justify-center font-bold text-sm tracking-wider rounded-sm">
            MS
          </div>
          <span className="font-semibold text-[#1C1C1C] text-sm hidden sm:block">
            Michael Strobl Consulting GmbH
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#6B6B6B] hover:text-[#1C1C1C] transition-colors duration-200 font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#kontakt"
          className="hidden md:inline-flex items-center px-4 py-2 bg-[#C4622D] text-white text-sm font-semibold rounded-sm hover:bg-[#A84E22] transition-colors duration-200"
        >
          Projekt anfragen
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-[#1C1C1C]"
          onClick={() => setOpen(!open)}
          aria-label="Menü öffnen"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#FAFAF8] border-t border-[#E0DBD5] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-[#1C1C1C] font-medium py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center items-center px-4 py-2 bg-[#C4622D] text-white text-sm font-semibold rounded-sm"
          >
            Projekt anfragen
          </a>
        </div>
      )}
    </nav>
  );
}
