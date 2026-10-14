"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { SectionProps } from "@/types/paptrix.types";

export default function InsightsSection({ data, limit }: SectionProps.BlogNews) {
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

  const articles = limit ? data.list.slice(0, limit) : data.list;

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white text-[#191919] pt-6 sm:pt-8 pb-14 sm:pb-20 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto">
        <div
          className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <div className="flex items-center gap-3 mb-2 sm:mb-3">
              <span className="w-8 sm:w-11 h-[2.5px] bg-[#58344e] rounded-full inline-block" />
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.25em] text-[#55555c] uppercase">
                {data.badge}
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black tracking-tighter text-[#141416] leading-none uppercase flex items-baseline">
              <span>{data.heading.main}</span>
              <span className="inline-block w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-[#45273c] ml-1 sm:ml-1.5 translate-y-[-2px]" />
            </h2>
          </div>
          <Link
            href={data.cta.href}
            className="group inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold tracking-[0.16em] text-[#141416] uppercase hover:text-[#58344e] transition-colors pb-1 border-b border-[#141416] hover:border-[#58344e] w-fit sm:mb-2"
          >
            <span>{data.cta.label}</span>
            <span className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-9 lg:gap-10">
          {articles.map((article, idx) => (
            <Link
              key={article.id}
              href={`/blogs/${article.slug}`}
              className={`group flex flex-col cursor-pointer transition-all duration-700 ease-out transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${200 + idx * 150}ms` }}
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#dcd7ce]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="pt-4 sm:pt-5 flex flex-col">
                <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-[#141416] tracking-[-0.02em] leading-[1.25] group-hover:text-[#58344e] transition-colors whitespace-pre-line">
                  {article.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-[#787880] font-normal tracking-normal mt-2.5">
                  {article.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
