"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { SectionProps } from "@/types/paptrix.types";

export default function AboutSection({ data }: SectionProps.About) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
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
      className="w-full bg-white text-[#191919] py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto">
        <div
          className={`mb-10 sm:mb-12 transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[3px] bg-[#58344e] rounded-full inline-block" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#58344e] uppercase">
              {data.badge}
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-black tracking-tight leading-[1.02] text-[#1c1c1e]">
            <span className="block">{data.heading.main}</span>
            <span className="block">
              BUILT AROUND{" "}
              <span className="text-[#58344e]">{data.heading.highlight.replace("BUILT AROUND ", "")}</span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div
            className={`lg:col-span-6 relative transition-all duration-1000 delay-200 ease-out transform ${
              isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-10 scale-[0.96]"
            }`}
          >
            <div className="relative w-full max-w-[580px] mx-auto px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-center">
              <div
                className="absolute left-0 sm:-left-3 top-[18%] w-14 sm:w-24 h-44 sm:h-64 bg-[#543048] rounded-[24px] sm:rounded-[32px] -z-0"
                aria-hidden="true"
              />

              <div
                className="absolute right-0 sm:-right-2 top-[30%] w-20 sm:w-36 h-36 sm:h-56 bg-[#543048] rounded-[28px] sm:rounded-[36px] -z-0"
                aria-hidden="true"
              />

              <div
                className="absolute -left-1 sm:-left-5 bottom-8 sm:bottom-6 w-10 h-10 sm:w-14 sm:h-14 bg-[#e8e6df] rounded-xl sm:rounded-2xl -z-0 shadow-sm"
                aria-hidden="true"
              />

              <div className="relative z-10 w-full aspect-[4/3] rounded-[30px] sm:rounded-[46px] overflow-hidden shadow-2xl border border-black/5 bg-neutral-100">
                <Image
                  src={data.image.src}
                  alt="Paptrix Packaging Workshop"
                  fill
                  sizes="(max-width: 768px) 100vw, 580px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>

          <div
            className={`lg:col-span-6 flex flex-col justify-between space-y-8 lg:space-y-12 transition-all duration-1000 delay-300 ease-out transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="max-w-xl">
              <p className="text-[15px] sm:text-[17px] leading-relaxed text-[#4a4a4f] font-normal">
                {data.description}
              </p>
            </div>

            <div className="pt-2 sm:pt-4">
              <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black tracking-tight leading-[1.04] text-[#1c1c1e]">
                <span className="block">{data.bottomHeading.line1}</span>
                <span className="block">
                  {data.bottomHeading.line2}{" "}
                  <span className="text-[#58344e]">
                    {data.bottomHeading.highlight}
                  </span>
                </span>
                <span className="block text-[#58344e]">
                  {data.bottomHeading.line3}
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
