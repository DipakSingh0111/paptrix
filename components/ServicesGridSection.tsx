"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { SectionProps } from "@/types/paptrix.types";

export default function ServicesGridSection({ data }: SectionProps.Services) {
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

  if (!data) return null;

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#111111] text-white pt-14 sm:pt-18 pb-16 sm:pb-24 px-6 sm:px-10 lg:px-16 overflow-hidden select-none"
    >
      <div className="max-w-[1360px] mx-auto">
        <div
          className={`mb-10 sm:mb-14 transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight leading-[0.94] uppercase">
            <span className="block text-white">
              {data.heading.main}
            </span>
            <span className="block text-[#5c3751] mt-1">
              {data.heading.highlight}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {data.list.map((item, index) => (
            <Link
              key={item.id}
              href={item.cta.href}
              className={`group relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[390px] rounded-none overflow-hidden bg-neutral-900 border border-white/5 transition-all duration-700 ease-out transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image}
                  alt={`${item.titleLine1} ${item.titleLine2}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent pointer-events-none" />
              </div>

              <div className="relative z-10 w-full h-full p-6 sm:p-8 lg:p-9 flex flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-white/80 font-normal">
                    <span className="text-xs sm:text-sm font-bold tracking-wider mr-2 text-white/90">
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    <span className="text-xs sm:text-[13px] leading-tight inline-block">
                      {item.categoryLine1}
                      <br />
                      {item.categoryLine2}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold tracking-wider text-white uppercase pb-0.5 border-b border-white group-hover:border-[#c48cb2] group-hover:text-[#c48cb2] transition-colors shrink-0">
                    <span>{item.cta.label}</span>
                    <span className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white tracking-tight leading-[1.05] whitespace-pre-line group-hover:text-white/95 transition-colors">
                    {item.titleLine1}
                    <br />
                    {item.titleLine2}
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
