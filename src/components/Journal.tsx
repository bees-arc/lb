"use client";

import React from "react";
import Image from "next/image";
import { playTactileSound } from "@/utils/soundEngine";
import { ArrowUpRight } from "lucide-react";

export function Journal() {
  const articles = [
    {
      title: "The Geometry of Shadows in Contemporary Architecture",
      category: "Architectural Reflection",
      date: "Spring 2026",
      readTime: "4 min read",
      image: "/images/hero_floating_lamp.png",
      excerpt:
        "Why true luxury lighting does not illuminate surfaces directly, but softly sculpts ambient volume through shadowless warm bounce.",
    },
    {
      title: "2700K and Human Circadian Calm",
      category: "Light Science & Well-being",
      date: "Winter 2026",
      readTime: "6 min read",
      image: "/images/lamp_kaze_detail.png",
      excerpt:
        "Exploring how warm indirect light temperatures restore biological serenity in high-density urban environments.",
    },
    {
      title: "Living with Natural Unbleached Linen",
      category: "Material Craftsmanship",
      date: "Autumn 2025",
      readTime: "5 min read",
      image: "/images/lamp_exploded_materials.png",
      excerpt:
        "From raw flax fields to hand-loomed diffusers: the acoustic and luminous qualities of organic textile weaves.",
    },
  ];

  return (
    <section
      id="journal"
      className="relative py-32 px-6 md:px-12 bg-[#F9F6EF] border-t border-[#D8CFC7]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-[#7A726D] font-medium">
              Stories & Essays
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-5xl text-[#595552] font-light">
              Journal of Light & Silence
            </h2>
          </div>
          <p className="text-xs text-[#7A726D] font-light max-w-sm">
            Reflections on Scandinavian simplicity, Japanese minimalism, and Sri Lankan woodcraft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article
              key={art.title}
              onMouseEnter={() => playTactileSound("fabric")}
              className="group cursor-pointer bg-[#D8CFC7]/20 border border-[#D8CFC7]/60 overflow-hidden hover:bg-[#D8CFC7]/40 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#D8CFC7]">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#F9F6EF]/90 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest text-[#595552] font-mono">
                    {art.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-[11px] text-[#7A726D] mb-3">
                    <span>{art.date}</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl text-[#595552] font-normal leading-snug group-hover:text-[#A9978B] transition-colors">
                    {art.title}
                  </h3>

                  <p className="mt-3 text-xs text-[#7A726D] font-light line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center gap-2 text-xs uppercase tracking-widest text-[#A9978B] font-medium group-hover:translate-x-1 transition-transform">
                <span>Read Story</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
