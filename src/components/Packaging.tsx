"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Package, Stamp, Tag } from "lucide-react";
import { playTactileSound } from "@/utils/soundEngine";

export function Packaging() {
  const elements = [
    {
      icon: Package,
      title: "Linen Pouch & Wraps",
      desc: "Every architectural object is wrapped in raw unbleached linen fabric bags—zero synthetic plastic covers.",
    },
    {
      icon: Tag,
      title: "Hand-Carved Wooden Tags",
      desc: "Numbered wooden tag engraved with the LB monogram and Sri Lanka studio craftsman signet.",
    },
    {
      icon: Stamp,
      title: "Red Wax Stamp Seal",
      desc: "Hand-pressed botanical wax seal securing the unbleached certificate of authenticity envelope.",
    },
    {
      icon: ShieldCheck,
      title: "Recycled Paper & Cotton Bag",
      desc: "Textured unbleached paper and heavy organic cotton carrying bag designed for timeless preservation.",
    },
  ];

  return (
    <section
      id="packaging"
      className="relative py-32 px-6 md:px-12 bg-[#F9F6EF] border-t border-[#D8CFC7]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Packaging Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#D8CFC7] shadow-xl bg-[#D8CFC7]/40">
              <Image
                src="/images/packaging_linen_pouch.png"
                alt="LIGHT BUCKET Sustainable Packaging — Linen Pouch, Wooden Tag & Wax Stamp"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#595552]/40 via-transparent to-transparent flex flex-col justify-end p-8 text-[#F9F6EF]">
                <span className="text-xs uppercase tracking-[0.3em] font-light">
                  Unboxing Silence
                </span>
                <p className="font-serif italic text-xl mt-1 font-light">
                  "No plastic. No disposable boxes. Only linen pouch, wooden tags, and wax stamp."
                </p>
              </div>
            </div>
          </div>

          {/* Right: Packaging Details */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.35em] text-[#7A726D] font-medium">
                Unboxing Philosophy
              </span>

              <h2 className="mt-4 font-serif text-3xl sm:text-5xl text-[#595552] font-light">
                Tactile Packaging & Authenticity
              </h2>

              <p className="mt-4 text-sm text-[#7A726D] font-light leading-relaxed">
                We believe the experience of receiving an architectural object should begin
                with tactile reverence. Plastic covers are replaced by soft linen, and printed
                stickers give way to hand-pressed wax seals and carved wooden tags.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {elements.map((item, idx) => (
                <div
                  key={item.title}
                  onMouseEnter={() => playTactileSound("fabric")}
                  className="p-5 bg-[#D8CFC7]/30 border border-[#D8CFC7]/60 space-y-2 hover:bg-[#D8CFC7]/60 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-[#A9978B]" />
                  <h4 className="font-serif text-base text-[#595552] font-medium">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#7A726D] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
