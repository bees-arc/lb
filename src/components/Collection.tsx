"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ARCHITECTURAL_COLLECTIONS, ArchitecturalObject } from "@/data/collection";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { playTactileSound } from "@/utils/soundEngine";

interface CollectionProps {
  onSelectObject: (object: ArchitecturalObject) => void;
  onInquire: (objectName: string) => void;
}

export function Collection({ onSelectObject, onInquire }: CollectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");
  const [activeObjIndex, setActiveObjIndex] = useState<number>(0);

  const filters = ["ALL", "FLOAT", "AURA", "FORM", "VOID", "NOVA"];

  const filteredObjects =
    selectedFilter === "ALL"
      ? ARCHITECTURAL_COLLECTIONS
      : ARCHITECTURAL_COLLECTIONS.filter((obj) => obj.collection === selectedFilter);

  const activeObject = filteredObjects[activeObjIndex] || filteredObjects[0];

  return (
    <section
      id="collection"
      className="relative py-32 px-6 md:px-12 bg-[#F9F6EF] overflow-hidden"
    >
      {/* Header Statement */}
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.35em] text-[#7A726D] font-medium">
          Architectural Objects
        </span>

        <h2 className="mt-4 font-serif text-4xl sm:text-6xl text-[#595552] font-light">
          The Floating Collection
        </h2>

        <p className="mt-6 text-sm sm:text-base text-[#7A726D] max-w-xl mx-auto font-light leading-relaxed">
          Collectible objects crafted from wood, linen, and warm light. Positioned not as
          lamps, but as moments of silence designed to transform your space.
        </p>

        {/* Collection Category Filter Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                playTactileSound("wood");
                setSelectedFilter(filter);
                setActiveObjIndex(0);
              }}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.25em] transition-all duration-300 ${
                selectedFilter === filter
                  ? "bg-[#A9978B] text-[#F9F6EF] shadow-sm"
                  : "bg-[#D8CFC7]/40 text-[#595552] hover:bg-[#D8CFC7]"
              }`}
            >
              {filter === "ALL" ? "All Objects" : `${filter} Collection`}
            </button>
          ))}
        </div>
      </div>

      {/* Main Apple-Style Hero Object Showcase */}
      {activeObject && (
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="rounded-3xl bg-[#D8CFC7]/30 border border-[#D8CFC7] p-8 md:p-14 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Huge Architectural Image */}
            <div className="lg:col-span-7 relative group">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[#D8CFC7] bg-[#D8CFC7]/50 shadow-md">
                <Image
                  src={activeObject.image}
                  alt={activeObject.name}
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                />

                {/* Subtle Price & Tag */}
                <div className="absolute top-6 left-6 bg-[#F9F6EF]/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#D8CFC7] text-xs font-serif text-[#595552]">
                  {activeObject.collection} Series
                </div>

                <div className="absolute bottom-6 right-6 bg-[#A9978B] text-[#F9F6EF] px-5 py-2 rounded-full text-sm font-serif font-medium shadow-md">
                  {activeObject.price}
                </div>
              </div>
            </div>

            {/* Right: Architectural Specs & Apple-style Storytelling */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#7A726D]">
                  {activeObject.subtitle}
                </span>

                <h3 className="mt-2 font-serif text-3xl md:text-4xl text-[#595552] font-light">
                  {activeObject.name}
                </h3>

                <p className="mt-4 text-sm text-[#7A726D] font-light leading-relaxed">
                  {activeObject.description}
                </p>
              </div>

              {/* Three Pill Core Spec Callouts */}
              <div className="space-y-4 pt-4 border-t border-[#D8CFC7]">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#F9F6EF] border border-[#D8CFC7]/60">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#A9978B]" />
                    <span className="text-xs font-medium text-[#595552]">Fabric</span>
                  </div>
                  <span className="text-xs text-[#7A726D] font-serif italic">
                    {activeObject.specs.linenRatio}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#F9F6EF] border border-[#D8CFC7]/60">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#A9978B]" />
                    <span className="text-xs font-medium text-[#595552]">Wood</span>
                  </div>
                  <span className="text-xs text-[#7A726D] font-serif italic">
                    {activeObject.specs.woodRatio}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#F9F6EF] border border-[#D8CFC7]/60">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#A9978B]" />
                    <span className="text-xs font-medium text-[#595552]">Temperature</span>
                  </div>
                  <span className="text-xs text-[#7A726D] font-serif italic">
                    {activeObject.specs.lightSpec}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <button
                  onClick={() => {
                    playTactileSound("wood");
                    onSelectObject(activeObject);
                  }}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#A9978B] hover:bg-[#595552] text-[#F9F6EF] text-xs uppercase tracking-[0.25em] font-medium transition-colors flex items-center justify-center gap-3 shadow-md"
                >
                  <span>Exploded View</span>
                  <Sparkles className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    playTactileSound("fabric");
                    onInquire(activeObject.name);
                  }}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-[#A9978B] text-[#595552] hover:bg-[#A9978B] hover:text-[#F9F6EF] text-xs uppercase tracking-[0.25em] font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <span>Acquire Piece</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Other Objects */}
      <div className="mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredObjects.map((obj, index) => (
          <div
            key={obj.id}
            onClick={() => {
              playTactileSound("fabric");
              setActiveObjIndex(index);
            }}
            className={`cursor-pointer rounded-2xl bg-[#D8CFC7]/20 border p-6 transition-all duration-500 hover:shadow-md ${
              activeObject.id === obj.id
                ? "border-[#A9978B] bg-[#D8CFC7]/50 shadow-sm"
                : "border-[#D8CFC7]/60 hover:border-[#A9978B]/50"
            }`}
          >
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden mb-6 bg-[#D8CFC7]">
              <Image
                src={obj.image}
                alt={obj.name}
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#7A726D]">
                  {obj.collection}
                </span>
                <h4 className="font-serif text-xl text-[#595552] font-normal">
                  {obj.name}
                </h4>
              </div>
              <span className="font-serif text-base text-[#A9978B] font-medium">
                {obj.price}
              </span>
            </div>

            <p className="mt-2 text-xs text-[#7A726D] font-light line-clamp-2">
              {obj.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
