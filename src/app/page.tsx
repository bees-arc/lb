"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Collection } from "@/components/Collection";
import { ExplodedView } from "@/components/ExplodedView";
import { Packaging } from "@/components/Packaging";
import { ValuesAndVision } from "@/components/ValuesAndVision";
import { Journal } from "@/components/Journal";
import { Footer } from "@/components/Footer";
import { InquiryModal } from "@/components/InquiryModal";
import { ARCHITECTURAL_COLLECTIONS, ArchitecturalObject } from "@/data/collection";

export default function Home() {
  const [selectedObject, setSelectedObject] = useState<ArchitecturalObject>(
    ARCHITECTURAL_COLLECTIONS[0]
  );
  const [inquiryOpen, setInquiryOpen] = useState<boolean>(false);
  const [inquiryObjName, setInquiryObjName] = useState<string>("FLOAT 01");

  const handleOpenInquiry = (objectName?: string) => {
    if (objectName) {
      setInquiryObjName(objectName);
    }
    setInquiryOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#F9F6EF] text-[#595552] overflow-hidden">
      {/* Fixed Minimal Brand Header */}
      <Header onOpenInquiry={handleOpenInquiry} />

      {/* Hero Showcase with Interactive Warm Glow */}
      <Hero onDiscoverClick={() => scrollToSection("collection")} />

      {/* Architectural Philosophy Sanctuary */}
      <Philosophy />

      {/* The Floating Collection Showcase */}
      <Collection
        onSelectObject={(obj) => {
          setSelectedObject(obj);
          scrollToSection("exploded-view");
        }}
        onInquire={handleOpenInquiry}
      />

      {/* Interactive Exploded View Assembly */}
      <ExplodedView object={selectedObject} onInquire={handleOpenInquiry} />

      {/* Packaging & Unboxing Story */}
      <Packaging />

      {/* Principles, Materials & Business Horizon */}
      <ValuesAndVision />

      {/* Quiet Gallery Journal */}
      <Journal />

      {/* Minimal Footer */}
      <Footer onOpenInquiry={handleOpenInquiry} />

      {/* Bespoke Studio Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        prefilledObject={inquiryObjName}
      />
    </main>
  );
}
