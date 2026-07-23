"use client";

import React from "react";
import { Logo } from "./Logo";
import { playTactileSound } from "@/utils/soundEngine";

interface FooterProps {
  onOpenInquiry: () => void;
}

export function Footer({ onOpenInquiry }: FooterProps) {
  return (
    <footer id="contact" className="py-24 px-6 md:px-12 bg-[#F9F6EF] border-t border-[#D8CFC7]/60">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-10">
        {/* Logo */}
        <div className="opacity-90">
          <Logo showText={true} size="md" />
        </div>

        {/* Core Strict Tagline from Prompt */}
        <div className="space-y-2 max-w-lg">
          <p className="font-serif text-2xl sm:text-3xl text-[#595552] font-light italic">
            Crafted in Sri Lanka.
          </p>
          <p className="text-xs uppercase tracking-[0.35em] text-[#7A726D] font-light">
            for modern living.
          </p>
        </div>

        {/* Minimal Social & Direct Contact Links */}
        <div className="flex items-center space-x-10 text-xs uppercase tracking-[0.25em] text-[#595552] pt-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playTactileSound("fabric")}
            className="hover:text-[#A9978B] transition-colors py-1 relative group"
          >
            Instagram
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#A9978B] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <button
            onClick={() => {
              playTactileSound("wood");
              onOpenInquiry();
            }}
            className="hover:text-[#A9978B] transition-colors py-1 relative group"
          >
            Contact Studio
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#A9978B] transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>

        <div className="pt-8 text-[11px] text-[#7A726D]/70 font-light tracking-widest uppercase">
          © {new Date().getFullYear()} LIGHT BUCKET Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
