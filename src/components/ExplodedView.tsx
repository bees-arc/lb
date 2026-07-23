"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArchitecturalObject } from "@/data/collection";
import { playTactileSound } from "@/utils/soundEngine";
import { Sparkles, Layers, Sliders, Check } from "lucide-react";

interface ExplodedViewProps {
  object: ArchitecturalObject;
  onClose?: () => void;
  onInquire: (objectName: string) => void;
}

export function ExplodedView({ object, onInquire }: ExplodedViewProps) {
  const [explosionOffset, setExplosionOffset] = useState(40);
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setExplosionOffset(val);
    if (val % 25 === 0) {
      playTactileSound("wood");
    }
  };

  return (
    <section
      id="exploded-view"
      className="relative py-32 px-6 md:px-12 bg-[#F9F6EF] border-t border-[#D8CFC7]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.35em] text-[#7A726D] font-medium">
            Architectural Assembly — How We Made It
          </span>

          <h2 className="mt-4 font-serif text-3xl sm:text-5xl text-[#595552] font-light">
            Exploded View of <span className="italic text-[#A9978B]">{object.name}</span>
          </h2>

          <p className="mt-4 text-sm text-[#7A726D] font-light max-w-lg mx-auto">
            Drag the assembly expansion slider to decompose the sculpture into its core
            elements: fabric, wood, light, and precision brass connections.
          </p>
        </div>

        {/* Interactive Expansion Control Bar */}
        <div className="mt-12 max-w-xl mx-auto bg-[#D8CFC7]/40 border border-[#D8CFC7] rounded-full p-4 flex items-center justify-between gap-4 shadow-sm">
          <span className="text-xs font-serif text-[#595552] uppercase tracking-wider pl-2">
            Assembled
          </span>
          <div className="flex-1 flex items-center gap-3">
            <Sliders className="w-4 h-4 text-[#A9978B]" />
            <input
              type="range"
              min="0"
              max="100"
              value={explosionOffset}
              onChange={handleSliderChange}
              className="w-full h-1.5 accent-[#A9978B] cursor-pointer"
            />
          </div>
          <span className="text-xs font-serif text-[#595552] uppercase tracking-wider pr-2">
            Exploded ({explosionOffset}%)
          </span>
        </div>

        {/* 3D Visual Exploded Component Stage */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: 4 Layer Interactive Canvas Visual */}
          <div className="lg:col-span-7 relative h-[500px] md:h-[600px] rounded-3xl bg-[#D8CFC7]/30 border border-[#D8CFC7] overflow-hidden flex items-center justify-center p-8">
            {/* Background Texture & Glow */}
            <div
              className="absolute inset-0 transition-opacity duration-700 blur-[80px] pointer-events-none"
              style={{
                background: `radial-gradient(circle at 50% 50%, rgba(230, 200, 160, ${
                  0.3 + (explosionOffset / 100) * 0.4
                }) 0%, transparent 70%)`,
              }}
            />

            {/* Layer Stack Presentation */}
            <div className="relative w-full max-w-md h-full flex flex-col justify-center items-center">
              {object.explodedLayers.map((layer, idx) => {
                const translateY = (idx - 1.5) * (explosionOffset * 1.8);
                const isSelected = activeLayer === idx;

                return (
                  <div
                    key={layer.name}
                    onClick={() => {
                      playTactileSound("fabric");
                      setActiveLayer(idx);
                    }}
                    style={{
                      transform: `translateY(${translateY}px) rotateX(${
                        explosionOffset * 0.1
                      }deg)`,
                    }}
                    className={`absolute cursor-pointer transition-all duration-700 ease-out w-full p-6 rounded-2xl border backdrop-blur-md flex items-center justify-between shadow-md ${
                      isSelected
                        ? "bg-[#F9F6EF] border-[#A9978B] scale-[1.03] z-30 ring-2 ring-[#A9978B]/40"
                        : "bg-[#F9F6EF]/90 border-[#D8CFC7] hover:border-[#A9978B] z-10"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#A9978B]/20 text-[#595552] flex items-center justify-center font-serif text-xs font-semibold">
                        0{idx + 1}
                      </div>
                      <div>
                        <h4 className="font-serif text-base text-[#595552] font-medium">
                          {layer.name}
                        </h4>
                        <span className="text-xs text-[#7A726D] font-light">
                          {layer.material}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs uppercase tracking-widest text-[#A9978B] font-serif">
                      {idx === 0
                        ? "Fabric"
                        : idx === 1
                        ? "Wood"
                        : idx === 2
                        ? "Light"
                        : "Connections"}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Detailed Layer Explanations */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#7A726D]">
              Layer Specifications
            </span>

            <div className="space-y-4">
              {object.explodedLayers.map((layer, idx) => (
                <div
                  key={layer.name}
                  onClick={() => {
                    playTactileSound("wood");
                    setActiveLayer(idx);
                  }}
                  className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 ${
                    activeLayer === idx
                      ? "bg-[#D8CFC7] border-[#A9978B] shadow-sm"
                      : "bg-[#D8CFC7]/30 border-[#D8CFC7]/60 hover:bg-[#D8CFC7]/60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-lg text-[#595552] font-medium">
                      {layer.name}
                    </h4>
                    <span className="text-xs uppercase tracking-wider text-[#A9978B] font-mono">
                      {idx === 0
                        ? "70% Linen"
                        : idx === 1
                        ? "30% Wood"
                        : idx === 2
                        ? "2700K"
                        : "Brass"}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-[#7A726D] font-light leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button
                onClick={() => onInquire(object.name)}
                className="w-full py-4 rounded-full bg-[#A9978B] hover:bg-[#595552] text-[#F9F6EF] text-xs uppercase tracking-[0.25em] font-medium transition-colors shadow-md"
              >
                Inquire About {object.name}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
