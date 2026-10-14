"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/paptrix.json";

export default function ServicesGridSection() {
  const { services } = data;
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Map the 4 items according to the reference screenshot grid layout:
  // Row 1: 01 CORRUGATED BOXES (Open-Cardboard) & 02 CUSTOM PACKAGING (Minimalist-Plum)
  // Row 2: 03 KRAFT PAPER (Kraft-Paper) & 04 FOLDING CARTONS (Premium-Purple)
  const gridItems = [
    {
      id: "01",
      category: ["Corrugated Packaging", "Solutions"],
      title: "CORRUGATED\nBOXES",
      ctaText: "SEE DETAIL",
      href: "/services/corrugated-boxes",
      image: "/images/Open-Cardboard.png",
    },
    {
      id: "02",
      category: ["Custom Packaging", "& Branding"],
      title: "CUSTOM\nPACKAGING",
      ctaText: "SEE DETAIL",
      href: "/services/custom-packaging",
      image: "/images/Minimalist-Plum.png",
    },
    {
      id: "03",
      category: ["Kraft Paper", "Products"],
      title: "KRAFT\nPAPER",
      ctaText: "SEE DETAIL",
      href: "/services/kraft-paper",
      image: "/images/Kraft-Paper.png",
    },
    {
      id: "04",
      category: ["Folding Carton", "Packaging"],
      title: "FOLDING\nCARTONS",
      ctaText: "SEE DETAIL",
      href: "/services/folding-cartons",
      image: "/images/Premium-Purple.png",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#111111] text-white pt-14 sm:pt-18 pb-16 sm:pb-24 px-6 sm:px-10 lg:px-16 overflow-hidden select-none"
    >
      <div className="max-w-[1360px] mx-auto">
        {/* Section Heading matching screenshot */}
        <div
          className={`mb-10 sm:mb-14 transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight leading-[0.94] uppercase">
            <span className="block text-white">
              {services.heading.whiteText}
            </span>
            <span className="block text-[#5c3751] mt-1">
              {services.heading.plumText}
            </span>
          </h2>
        </div>

        {/* 2x2 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {gridItems.map((item, index) => (
            <Link
              key={item.id}
              href={item.href}
              className={`group relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[390px] rounded-none overflow-hidden bg-neutral-900 border border-white/5 transition-all duration-700 ease-out transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Background Image with Hover Micro-Zoom */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Subtle dark gradient overlay on left for typography readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent pointer-events-none" />
              </div>

              {/* Card Content Overlay */}
              <div className="relative z-10 w-full h-full p-6 sm:p-8 lg:p-9 flex flex-col justify-between">
                {/* Top Row: 01 Category info on left, SEE DETAIL ↗ on right */}
                <div className="flex items-start justify-between gap-4">
                  <div className="text-white/80 font-normal">
                    <span className="text-xs sm:text-sm font-bold tracking-wider mr-2 text-white/90">
                      {item.id}.
                    </span>
                    <span className="text-xs sm:text-[13px] leading-tight inline-block">
                      {item.category[0]}
                      <br />
                      {item.category[1]}
                    </span>
                  </div>

                  {/* See Detail Action Link */}
                  <div className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold tracking-wider text-white uppercase pb-0.5 border-b border-white group-hover:border-[#c48cb2] group-hover:text-[#c48cb2] transition-colors shrink-0">
                    <span>{item.ctaText}</span>
                    <span className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </div>
                </div>

                {/* Bottom Row: Big Bold White Title */}
                <div>
                  <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white tracking-tight leading-[1.05] whitespace-pre-line group-hover:text-white/95 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
