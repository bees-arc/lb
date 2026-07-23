"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Sparkles, Send } from "lucide-react";
import { playTactileSound } from "@/utils/soundEngine";
import confetti from "canvas-confetti";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledObject?: string;
}

export function InquiryModal({ isOpen, onClose, prefilledObject }: InquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "Private Acquisition",
    objectName: prefilledObject || "FLOAT 01",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playTactileSound("light");
    setSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#A9978B", "#D8CFC7", "#BDB2A7"],
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#595552]/40 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#F9F6EF] rounded-3xl border border-[#D8CFC7] shadow-2xl p-8 md:p-10 text-[#595552]">
        {/* Close Button */}
        <button
          onClick={() => {
            playTactileSound("wood");
            onClose();
            setSubmitted(false);
          }}
          className="absolute top-6 right-6 p-2 rounded-full border border-[#D8CFC7] hover:border-[#A9978B] text-[#595552] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-12 space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#A9978B]/20 text-[#A9978B] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-3xl text-[#595552] font-light">
              Inquiry Received
            </h3>

            <p className="text-sm text-[#7A726D] max-w-md mx-auto leading-relaxed">
              Thank you for reaching out to LIGHT BUCKET Studio. Our architectural lighting
              curator will review your inquiry and respond within 24 hours.
            </p>

            <button
              onClick={() => {
                onClose();
                setSubmitted(false);
              }}
              className="px-8 py-3.5 rounded-full bg-[#A9978B] text-[#F9F6EF] text-xs uppercase tracking-[0.25em] font-medium"
            >
              Return to Gallery
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <span className="text-xs uppercase tracking-[0.3em] text-[#7A726D]">
                Studio Commission Inquiry
              </span>
              <h3 className="mt-2 font-serif text-3xl text-[#595552] font-light">
                Acquire Architectural Object
              </h3>
              <p className="mt-2 text-xs text-[#7A726D] font-light">
                Direct consultation for private residences, boutique hotels, and architectural installations.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-[#7A726D] mb-1.5 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Elena Rostova"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#D8CFC7]/30 border border-[#D8CFC7] text-sm text-[#595552] focus:outline-none focus:border-[#A9978B] placeholder:text-[#7A726D]/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-widest text-[#7A726D] mb-1.5 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="elena@studio.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#D8CFC7]/30 border border-[#D8CFC7] text-sm text-[#595552] focus:outline-none focus:border-[#A9978B] placeholder:text-[#7A726D]/50"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-widest text-[#7A726D] mb-1.5 font-medium">
                    Inquiry Type
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#D8CFC7]/30 border border-[#D8CFC7] text-sm text-[#595552] focus:outline-none focus:border-[#A9978B]"
                  >
                    <option value="Private Acquisition">Private Acquisition</option>
                    <option value="Architect / Interior Designer">
                      Architect / Interior Designer
                    </option>
                    <option value="Boutique Hotel / Villa">Boutique Hotel / Villa</option>
                    <option value="Bespoke Installation">Bespoke Installation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest text-[#7A726D] mb-1.5 font-medium">
                  Object of Interest
                </label>
                <input
                  type="text"
                  value={formData.objectName}
                  onChange={(e) =>
                    setFormData({ ...formData, objectName: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#D8CFC7]/30 border border-[#D8CFC7] text-sm text-[#595552] focus:outline-none focus:border-[#A9978B]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest text-[#7A726D] mb-1.5 font-medium">
                  Project Notes or Architectural Dimensions
                </label>
                <textarea
                  rows={3}
                  placeholder="Share any spatial details, timeline, or quantity specifications..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#D8CFC7]/30 border border-[#D8CFC7] text-sm text-[#595552] focus:outline-none focus:border-[#A9978B] placeholder:text-[#7A726D]/50"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#A9978B] hover:bg-[#595552] text-[#F9F6EF] text-xs uppercase tracking-[0.3em] font-medium transition-colors flex items-center justify-center gap-3 shadow-md mt-4"
              >
                <span>Submit Studio Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
