"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/paptrix.json";

export default function ServicesSection() {
  const { services } = data;

  return (
    <section className="w-full bg-[#141414] pt-14 sm:pt-16 pb-8 sm:pb-12 px-6 sm:px-10 lg:px-16">
      <div className="max-w-[1360px] mx-auto">
        <div className="mb-10 sm:mb-12">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight leading-[0.95] select-none">
            <span className="block text-white">
              {services.heading.whiteText}
            </span>
            <span className="block text-[#5c3751] mt-1">
              {services.heading.plumText}
            </span>
          </h2>
        </div>
        <div className="relative flex flex-col pb-6 sm:pb-8">
          {services.items.map((service, index) => {
            const topOffset = 96 + index * 14;

            return (
              <div
                key={service.id}
                style={{
                  top: `${topOffset}px`,
                  zIndex: index + 1,
                }}
                className="sticky mb-8 sm:mb-10 last:mb-0 transition-transform duration-300 ease-out will-change-transform"
              >
                <div className="relative w-full rounded-2xl sm:rounded-[28px] overflow-hidden bg-neutral-900 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] aspect-[16/8] sm:aspect-[16/7] md:aspect-[16/6] min-h-[300px] sm:min-h-[360px] md:min-h-[420px] group">
                  <Image
                    src={service.image}
                    alt={`${service.titleLine1} ${service.titleLine2}`}
                    fill
                    sizes="(max-width: 1360px) 100vw, 1360px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent z-10 pointer-events-none" />
                  <div className="relative z-20 h-full w-full flex flex-col justify-between p-7 sm:p-10 md:p-14">
                    <div className="flex items-start justify-between">
                      <p className="text-sm sm:text-base md:text-lg font-normal text-white/90 leading-snug tracking-wide">
                        <span className="block">{service.categoryLine1}</span>
                        <span className="block">{service.categoryLine2}</span>
                      </p>

                      <Link
                        href={service.href}
                        className="group/cta inline-flex flex-col items-end pt-1"
                      >
                        <div className="flex items-center gap-1.5 text-xs sm:text-sm md:text-base font-bold tracking-wider text-white">
                          <span>{service.ctaText}</span>
                          <svg
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </div>
                        <span className="w-full h-[1.5px] bg-white/70 mt-1 transition-all duration-200 group-hover/cta:bg-white" />
                      </Link>
                    </div>
                    <div className="mt-auto">
                      <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-black tracking-tight text-white leading-[0.92] uppercase select-none drop-shadow-md">
                        <span className="block">{service.titleLine1}</span>
                        <span className="block">{service.titleLine2}</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
