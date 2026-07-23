"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowDown, Sun, Sparkles } from "lucide-react";
import { playTactileSound } from "@/utils/soundEngine";

interface HeroProps {
  onDiscoverClick: () => void;
}

export function Hero({ onDiscoverClick }: HeroProps) {
  const [lightIntensity, setLightIntensity] = useState(85);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Defer video load until after first paint — never blocks LCP
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.src = "/images/hero.mp4";
    video.load();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between pb-16 px-6 md:px-12 overflow-hidden">

      {/* ── Fullscreen Background Video ── */}
      <div className="absolute inset-0 z-0">
        {/* Warm cream placeholder while video loads */}
        <div
          className={`absolute inset-0 bg-[#EDE8DF] transition-opacity duration-1000 pointer-events-none ${
            videoLoaded ? "opacity-0" : "opacity-100"
          }`}
        />

        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          onCanPlay={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Dark gradient overlay so text stays readable over the video */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />

        {/* Warm ambient glow overlay tied to slider */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 mix-blend-soft-light"
          style={{
            background: `radial-gradient(circle at 50% 45%, rgba(255, 220, 160, ${
              lightIntensity / 100
            }) 0%, transparent 65%)`,
          }}
        />
      </div>

      {/* ── Content Layer ── */}

      {/* Spacer for fixed header */}
      <div className="pt-32" />

      {/* Main Headline */}
      <div className="max-w-5xl mx-auto w-full text-center relative z-10 my-auto py-8">
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.08] font-light drop-shadow-md">
          Crafting <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#F5E3C6]">Architectural Light</span>{" "}
          <br className="hidden sm:inline" />
          for Modern Living.
        </h1>
      

        {/* CTA */}
        <div className="mt-10">
          <button
            onClick={() => {
              playTactileSound("wood");
              onDiscoverClick();
            }}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white text-xs uppercase tracking-[0.3em] font-medium transition-all duration-500 shadow-md hover:shadow-lg hover:translate-y-[-2px]"
          >
            <span>Discover Collection</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ── Ambient Light Control (bottom-right) ── */}
      <div className="absolute bottom-24 right-6 z-20 bg-black/20 backdrop-blur-sm border border-white/20 px-4 py-1.5 flex items-center space-x-3 text-xs text-white/80">
        <Sun className="w-3.5 h-3.5 text-[#F5E3C6]" />
        <span className="font-serif italic text-xs">2700K</span>
        <input
          type="range"
          min="30"
          max="100"
          value={lightIntensity}
          onChange={(e) => {
            setLightIntensity(Number(e.target.value));
            playTactileSound("light");
          }}
          className="w-16 h-1 accent-[#F5E3C6] cursor-pointer"
        />
      </div>

      {/* ── Bottom Bar ── */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] text-white/60 uppercase tracking-[0.2em] relative z-10 pt-8 border-t border-white/20">
        <span>Scandinavian &amp; Japanese Minimalism</span>
        <span className="hidden sm:inline font-serif italic text-xs capitalize text-white/70">
          &ldquo;Light creates space&rdquo;
        </span>
        <span>Crafted in Sri Lanka</span>
      </div>
    </section>
  );
}
