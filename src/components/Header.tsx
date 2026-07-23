"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { playTactileSound } from "@/utils/soundEngine";

interface HeaderProps {
  onOpenInquiry: (objectTitle?: string) => void;
}

export function Header({ onOpenInquiry }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Collection", href: "#collection" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Craftsmanship", href: "#craftsmanship" },
    { label: "Packaging", href: "#packaging" },
    { label: "Journal", href: "#journal" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    playTactileSound("wood");
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
          isScrolled
            ? "py-4 bg-[#F9F6EF]/95 backdrop-blur-md border-b border-[#D8CFC7]/50 shadow-sm"
            : "py-6 bg-gradient-to-b from-black/40 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center group"
            onClick={() => playTactileSound("light")}
          >
            <Logo showText={true} size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-9">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`text-xs uppercase tracking-[0.25em] transition-colors font-medium relative group py-1 ${
                  isScrolled
                    ? "text-[#595552] hover:text-[#A9978B]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                  isScrolled ? "bg-[#A9978B]" : "bg-white"
                }`}></span>
              </button>
            ))}
          </nav>

          {/* Action controls */}
          <div className="flex items-center space-x-4">
            {/* Bespoke Inquiry CTA */}
            <button
              onClick={() => {
                playTactileSound("wood");
                onOpenInquiry();
              }}
              className="hidden lg:inline-flex items-center space-x-2 text-xs tracking-[0.2em] uppercase px-5 py-2.5 bg-[#A9978B] text-[#F9F6EF] hover:bg-[#595552] transition-colors shadow-sm"
            >
              <span>Inquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                playTactileSound("fabric");
                setMenuOpen(!menuOpen);
              }}
              className={`md:hidden p-2 transition-colors ${
                isScrolled ? "text-[#595552]" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Quiet Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#F9F6EF] flex flex-col justify-between p-8 md:p-16 animate-fadeIn">
          <div className="flex items-center justify-between">
            <Logo showText={true} size="sm" />
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 border border-[#D8CFC7] text-[#595552]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="my-auto flex flex-col space-y-6 max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[#7A726D]">
              Navigation
            </span>
            {navLinks.map((link, idx) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left font-serif text-3xl md:text-5xl text-[#595552] hover:text-[#A9978B] transition-colors flex items-center justify-between group"
              >
                <span>{link.label}</span>
                <span className="text-xs font-sans text-[#7A726D] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  0{idx + 1}
                </span>
              </button>
            ))}
          </div>

          <div className="pt-8 border-t border-[#D8CFC7] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-[#7A726D] tracking-widest uppercase">
            <p>Crafted in Sri Lanka. for modern living.</p>
            <p>© LIGHT BUCKET Studio</p>
          </div>
        </div>
      )}
    </>
  );
}
