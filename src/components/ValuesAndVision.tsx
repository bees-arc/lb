"use client";

import React, { useState } from "react";
import { BRAND_VALUES, BUSINESS_MODEL_BREAKDOWN } from "@/data/collection";
import { playTactileSound } from "@/utils/soundEngine";
import { Compass, Sparkles, Building2, Layers, CheckCircle2, XCircle } from "lucide-react";

export function ValuesAndVision() {
  const [activeValue, setActiveValue] = useState<number>(0);

  const materialsList = [
    { name: "Ash Wood, Beech, Oak & Teak", category: "Natural Woods", approved: true },
    { name: "Unbleached Linen, Organic Cotton & Canvas", category: "Textiles", approved: true },
    { name: "2700K & 3000K Calibrated LEDs", category: "Architectural Light", approved: true },
    { name: "Solid Brass & Natural Plant Oils", category: "Hardware & Finish", approved: true },
    { name: "Plastics & Glossy Finishes", category: "Synthetic Finishes", approved: false },
    { name: "Cheap Synthetic Fabrics", category: "Low Grade Textiles", approved: false },
  ];

  const targetMarkets = [
    "Interior Designers",
    "Architects",
    "Luxury Homeowners",
    "Boutique Hotels",
    "Luxury Villas",
    "Art Collectors & Offices",
  ];

  const brandHorizon = [
    { year: "2026", label: "Collectible Sculptural Lighting" },
    { year: "2027", label: "Architectural Ceiling & Wall Installations" },
    { year: "2028", label: "Luminous Room Dividers & Partitions" },
    { year: "2029", label: "Architectural Furniture & Sanctuary Objects" },
    { year: "2030+", label: "Global Hospitality & Bespoke Art Collections" },
  ];

  return (
    <section
      id="materials"
      className="relative py-32 px-6 md:px-12 bg-[#F9F6EF] border-t border-[#D8CFC7]"
    >
      <div className="max-w-6xl mx-auto space-y-32">
        {/* Core Values Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.35em] text-[#7A726D] font-medium">
              Tenets of Form
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-5xl text-[#595552] font-light">
              10 Principles of Architectural Silence
            </h2>
            <p className="mt-4 text-sm text-[#7A726D] font-light">
              Click any value to explore how it governs every object crafted in our studio.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {BRAND_VALUES.map((val, idx) => (
              <div
                key={val.title}
                onClick={() => {
                  playTactileSound("wood");
                  setActiveValue(idx);
                }}
                className={`cursor-pointer p-5 border transition-all duration-300 ${
                  activeValue === idx
                    ? "bg-[#D8CFC7] border-[#A9978B] shadow-md scale-[1.02]"
                    : "bg-[#D8CFC7]/20 border-[#D8CFC7]/60 hover:bg-[#D8CFC7]/50"
                }`}
              >
                <span className="text-xs uppercase tracking-widest text-[#A9978B] font-mono font-medium">
                  {val.title.split(".")[0]}
                </span>
                <h4 className="mt-2 font-serif text-lg text-[#595552] font-medium">
                  {val.title.split(".")[1]}
                </h4>
                <p className="mt-2 text-xs text-[#7A726D] font-light leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Materials & Strict Craft Standards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.35em] text-[#7A726D] font-medium">
              Material Purity
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#595552] font-light">
              Only Wood, Linen & Warm Light
            </h2>
            <p className="text-sm text-[#7A726D] font-light leading-relaxed">
              We strictly forbid plastic components, glossy lacquers, or cheap synthetic
              textiles. Every material is selected for its capacity to age gracefully,
              absorbing light and shadow like raw timber and honed stone.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {materialsList.map((item) => (
                <div
                  key={item.name}
                  className={`p-4 border flex items-start gap-3 ${
                    item.approved
                      ? "bg-[#F9F6EF] border-[#D8CFC7]"
                      : "bg-[#D8CFC7]/20 border-red-200/50 opacity-60"
                  }`}
                >
                  {item.approved ? (
                    <CheckCircle2 className="w-4 h-4 text-[#A9978B] mt-0.5 shrink-0" />
                  ) : (
                    <XCircle className="w-4 h-4 text-rose-800/60 mt-0.5 shrink-0" />
                  )}
                  <div>
                    <h5 className="text-xs font-semibold text-[#595552]">{item.name}</h5>
                    <span className="text-[11px] text-[#7A726D]">{item.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Model Breakdown Card */}
          <div className="lg:col-span-6 bg-[#D8CFC7]/40 border border-[#D8CFC7] p-8 md:p-10 shadow-lg space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#7A726D]">
                Strategic Mix
              </span>
              <h3 className="mt-1 font-serif text-2xl text-[#595552] font-light">
                Business Vision & Revenue Structure
              </h3>
            </div>

            <div className="space-y-4">
              {BUSINESS_MODEL_BREAKDOWN.map((bm) => (
                <div
                  key={bm.area}
                  className="p-4 bg-[#F9F6EF] border border-[#D8CFC7]/60 flex items-center justify-between"
                >
                  <div>
                    <h5 className="text-xs font-medium text-[#595552]">{bm.area}</h5>
                    <p className="text-[11px] text-[#7A726D] font-light">{bm.description}</p>
                  </div>
                  <span className="font-serif text-lg text-[#A9978B] font-semibold pl-4">
                    {bm.percentage}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Brand Horizon Roadmap */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.35em] text-[#7A726D] font-medium">
              Future Expansion
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-[#595552] font-light">
              Brand Evolution (2026 – 2030+)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {brandHorizon.map((item, idx) => (
              <div
                key={item.year}
                className="p-5 bg-[#D8CFC7]/30 border border-[#D8CFC7]/60 flex flex-col justify-between h-40 hover:bg-[#D8CFC7]/60 transition-colors"
              >
                <span className="text-xs font-mono font-medium text-[#A9978B]">
                  {item.year}
                </span>
                <p className="font-serif text-base text-[#595552] font-normal leading-snug">
                  {item.label}
                </p>
                <div className="w-full h-1 bg-[#A9978B]/30 overflow-hidden">
                  <div
                    className="h-full bg-[#A9978B]"
                    style={{ width: `${(idx + 1) * 20}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
