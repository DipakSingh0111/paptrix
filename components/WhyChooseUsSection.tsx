"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { SectionProps } from "@/types/paptrix.types";

export default function WhyChooseUsSection({ data }: SectionProps.WhyChooseUs) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 },
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
      className="w-full bg-white text-[#191919] pt-14 sm:pt-16 pb-2 sm:pb-3 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto">
        {/* Top Header */}
        <div
          className={`transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[3px] bg-[#58344e] rounded-full inline-block" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#58344e] uppercase">
              {data.badge}
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight leading-[0.98] text-[#1c1c1e] mb-6 select-none">
            <span className="block">{data.heading.main}</span>
            <span className="block">{data.heading.middle}</span>
            <span className="block text-[#58344e]">
              {data.heading.highlight}
            </span>
          </h2>
          <p className="max-w-2xl text-[15px] sm:text-[17px] leading-relaxed text-[#4a4a4f] mb-12 sm:mb-16 font-normal">
            {data.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-14 sm:mb-16">
          {data.list.map((feature, idx) => (
            <div
              key={feature.id}
              className={`flex items-center gap-4 transition-all duration-700 ease-out transform group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${200 + idx * 150}ms`,
              }}
            >
              <div className="shrink-0 w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-2xl bg-[#f5f1f3] flex items-center justify-center text-[#582a44] transition-all duration-300 group-hover:scale-105 shadow-sm">
                {feature.icon === "ribbon-badge" && (
                  <svg
                    className="w-8 h-8 sm:w-9 sm:h-9"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2l1.6 1.8 2.4-.4.8 2.3 2.3.8-.4 2.4 1.8 1.6-1.8 1.6.4 2.4-2.3.8-.8 2.3-2.4-.4L12 21l-1.6-1.8-2.4.4-.8-2.3-2.3-.8.4-2.4-1.8-1.6 1.8-1.6-.4-2.4 2.3-.8.8-2.3 2.4.4L12 2z" />
                    <polyline points="9 11.5 11 13.5 15 9.5" />
                    <path d="M8.5 18l-1.5 4 4-1.5" />
                    <path d="M15.5 18l1.5 4-4-1.5" />
                  </svg>
                )}

                {feature.icon === "lightbulb-idea" && (
                  <svg
                    className="w-8 h-8 sm:w-9 sm:h-9"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v2" />
                    <path d="M5.5 5.5l1.4 1.4" />
                    <path d="M18.5 5.5l-1.4 1.4" />
                    <path d="M3 12h2" />
                    <path d="M19 12h2" />
                    <path d="M9 18h6" />
                    <path d="M10 21h4" />
                    <path d="M12 6a5.5 5.5 0 0 0-3.5 9.7V17a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-1.3A5.5 5.5 0 0 0 12 6z" />
                    <path d="M12 10v4" />
                    <path d="M10 12h4" />
                  </svg>
                )}

                {feature.icon === "leaf-eco" && (
                  <svg
                    className="w-8 h-8 sm:w-9 sm:h-9"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 18c0-7 6-12 14-14-2 8-7 14-14 14z" />
                    <path d="M6 18l7-7" />
                    <path d="M10 11l3 1" />
                    <path d="M13 8l1 3" />
                    <path d="M4 22c1-2 2-4 2-4" />
                  </svg>
                )}
              </div>

              <div className="h-12 w-[1.5px] bg-neutral-300/80 shrink-0 select-none" />

              <div className="flex-1">
                <h4 className="text-base sm:text-lg font-bold text-[#141416] tracking-tight leading-snug mb-1">
                  {feature.title}
                </h4>
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#55555c] font-normal">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`relative w-full rounded-2xl sm:rounded-[32px] overflow-hidden aspect-[16/8] sm:aspect-[16/7] md:aspect-[16/6] min-h-[300px] sm:min-h-[360px] md:min-h-[440px] shadow-2xl transition-all duration-1000 ease-out transform ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-[0.98]"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <Image
            src={data.banner.image}
            alt="Packaging Solutions"
            fill
            sizes="(max-width: 1360px) 100vw, 1360px"
            className="object-cover object-center"
          />
          <div className="absolute left-0 bottom-0 z-20 w-full max-w-[340px] sm:max-w-[460px] md:max-w-[540px] bg-[#3a1d30] text-white pt-8 sm:pt-11 pb-10 sm:pb-12 px-7 sm:px-11 rounded-tr-[36px] sm:rounded-tr-[44px] shadow-2xl select-none">
            {/* Title */}
            <h3 className="text-2xl sm:text-3xl md:text-[38px] font-extrabold tracking-tight leading-[1.12] text-white">
              <span className="block">
                {data.banner.overlayCard.titleLine1}
              </span>
              <span className="block">
                {data.banner.overlayCard.titleLine2}
              </span>
            </h3>
            <div className="w-12 sm:w-14 h-[3px] bg-white/90 rounded-full my-4 sm:my-5" />
            <div className="text-sm sm:text-base md:text-[17px] text-white/90 font-normal leading-relaxed tracking-wide">
              <p>{data.banner.overlayCard.subLine1}</p>
              <p>{data.banner.overlayCard.subLine2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
