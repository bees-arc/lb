"use client";

import React, { useState } from "react";
import Image from "next/image";
import { playTactileSound } from "@/utils/soundEngine";
import { Sparkles, Layers, Flame, Feather } from "lucide-react";

export function Philosophy() {
  const [activeSound, setActiveSound] = useState<string | null>(null);
  const [glowIntensity, setGlowIntensity] = useState(60);

  const handleSoundClick = (type: "wood" | "fabric" | "light") => {
    setActiveSound(type);
    playTactileSound(type);
    setTimeout(() => setActiveSound(null), 800);
  };

  return (
    <section
      id="philosophy"
      className="relative py-32 md:py-48 px-6 md:px-12 bg-[#F9F6EF] overflow-hidden"
    >
      {/* Generous White Space Header */}
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.35em] text-[#7A726D] font-medium">
          Our Philosophy
        </span>

        <h2 className="mt-8 font-serif text-3xl sm:text-5xl md:text-6xl text-[#595552] leading-[1.2] font-light">
          "We don't design lamps. <br className="hidden sm:inline" />
          <span className="italic text-[#A9978B] font-normal">
            We design floating sculptures
          </span>{" "}
          that happen to illuminate spaces."
        </h2>

        <p className="mt-8 text-sm md:text-base text-[#7A726D] max-w-2xl mx-auto leading-relaxed font-light">
          Light doesn't illuminate the space. It creates the space. Every object is
          conceived as a silent architectural gesture—crafted by hand from natural
          linen, steam-bent ash, and 2700K quiet glow.
        </p>
      </div>

      {/* Atmospheric Video & Tactile Sensory Sanctuary */}
      <div className="mt-20 max-w-6xl mx-auto">
        <div className="relative overflow-hidden bg-[#D8CFC7]/50 border border-[#D8CFC7] shadow-xl p-4 sm:p-8 md:p-12">
          {/* Main Visual Presentation Frame */}
          <div className="relative aspect-[4/3] sm:aspect-[16/9] w-full overflow-hidden border border-[#D8CFC7]">
            <Image
              src="/images/craftsmanship_wood_fabric.png"
              alt="Hands making floating lamps with natural linen and ash wood"
              fill
              className="object-cover object-center filter brightness-[0.96] contrast-[0.98]"
            />

            {/* Dynamic Slow Ambient Glow Effect */}
            <div
              className="absolute inset-0 pointer-events-none transition-all duration-700"
              style={{
                background: `radial-gradient(circle at 60% 50%, rgba(240, 210, 170, ${
                  glowIntensity / 100
                }) 0%, transparent 65%)`,
              }}
            />

            {/* Video-style atmospheric Overlay Quote */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#595552]/40 via-transparent to-transparent flex flex-col justify-end p-4 sm:p-8 text-[#F9F6EF]">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-light opacity-90">
                Atmospheric Sanctuary — Sri Lanka Workshop
              </span>
              <p className="font-serif italic text-base sm:text-xl md:text-2xl mt-1 max-w-lg font-light">
                Fabric moving slowly. Wood details. Light glowing. Hands making products.
              </p>
            </div>
          </div>

          {/* NO MUSIC. ONLY SOUNDS. Interactive Tactile Bar */}
          <div className="mt-10 pt-8 border-t border-[#BDB2A7]/40 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col text-center md:text-left">
              <span className="text-xs uppercase tracking-[0.3em] text-[#595552] font-semibold">
                No music. Only sounds.
              </span>
              <span className="text-xs text-[#7A726D] mt-1 font-serif italic">
                Touch each element to hear its physical resonance
              </span>
            </div>

            {/* Tactile Sound Trigger Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={() => handleSoundClick("wood")}
                className={`px-4 sm:px-5 py-2.5 sm:py-3 border text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2 ${
                  activeSound === "wood"
                    ? "bg-[#A9978B] text-[#F9F6EF] border-[#A9978B] scale-95"
                    : "bg-[#F9F6EF] text-[#595552] border-[#D8CFC7] hover:border-[#A9978B]"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Wood.</span>
              </button>

              <button
                onClick={() => handleSoundClick("fabric")}
                className={`px-4 sm:px-5 py-2.5 sm:py-3 border text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2 ${
                  activeSound === "fabric"
                    ? "bg-[#A9978B] text-[#F9F6EF] border-[#A9978B] scale-95"
                    : "bg-[#F9F6EF] text-[#595552] border-[#D8CFC7] hover:border-[#A9978B]"
                }`}
              >
                <Feather className="w-3.5 h-3.5" />
                <span>Fabric.</span>
              </button>

              <button
                onClick={() => handleSoundClick("light")}
                className={`px-4 sm:px-5 py-2.5 sm:py-3 border text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2 ${
                  activeSound === "light"
                    ? "bg-[#A9978B] text-[#F9F6EF] border-[#A9978B] scale-95"
                    : "bg-[#F9F6EF] text-[#595552] border-[#D8CFC7] hover:border-[#A9978B]"
                }`}
              >
                <Flame className="w-3.5 h-3.5 text-[#A9978B]" />
                <span>Light.</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
