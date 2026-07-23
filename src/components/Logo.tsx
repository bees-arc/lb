"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Logo({
  className = "",
  size = "md",
}: LogoProps) {
  const sizeMap = {
    sm:  72,
    md:  100,
    lg:  140,
    xl:  180,
  };

  const s = sizeMap[size];

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Light Bucket"
        width={s}
        height={s}
        sizes="(max-width: 768px) 72px, 140px"
        priority
        style={{ mixBlendMode: "multiply" }}
        className="transition-transform duration-700 ease-out hover:scale-[1.02]"
      />
    </div>
  );
}
