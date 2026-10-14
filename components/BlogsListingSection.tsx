"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { SectionProps } from "@/types/paptrix.types";

export default function BlogsListingSection({ data }: SectionProps.BlogListing) {
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
      className="w-full bg-white text-[#191919] pt-12 sm:pt-16 pb-20 sm:pb-28 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto">
        {/* Section Header: FROM OUR BLOG + INSIGHTS. */}
        <div
          className={`mb-10 sm:mb-14 transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge with horizontal plum line */}
          <div className="flex items-center gap-3 mb-3">
            <span className="w-10 sm:w-12 h-[3px] bg-[#582f49] inline-block" />
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.22em] text-[#55555c] uppercase">
              {data.badge}
            </span>
          </div>

          {/* Heading with square plum period */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[78px] font-black tracking-[-0.04em] text-[#111113] leading-none uppercase flex items-baseline select-text">
            <span>{data.heading.main}</span>
            <span className="inline-block w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#582f49] ml-1.5 sm:ml-2 translate-y-[-2px]" />
          </h2>
        </div>

        {/* 2x2 Grid of Blog Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 sm:gap-y-16">
          {data.list.map((article, idx) => (
            <Link
              key={article.id}
              href={`/blogs/${article.slug}`}
              className={`group flex flex-col cursor-pointer transition-all duration-700 ease-out transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${150 + idx * 100}ms` }}
            >
              {/* Article Image Container */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] overflow-hidden bg-neutral-100 shadow-xs">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 650px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Meta & Title Row with Circular Arrow Button */}
              <div className="pt-5 sm:pt-6">
                {/* Date with thin accent dash */}
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="w-6 h-[2px] bg-[#582f49] inline-block" />
                  <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.14em] text-[#66666e] uppercase">
                    {article.date}
                  </span>
                </div>

                {/* Title & Circular Arrow Icon */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#111113] tracking-tight leading-snug group-hover:text-[#582f49] transition-colors whitespace-pre-line flex-1">
                    {article.title}
                  </h3>

                  {/* Circular Arrow Button */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-neutral-300 group-hover:border-[#582f49] group-hover:bg-[#582f49] flex items-center justify-center shrink-0 transition-all duration-300 mt-1">
                    <svg
                      className="w-4 h-4 text-neutral-700 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
