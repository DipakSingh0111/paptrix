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
      className="w-full bg-white text-[#1a1a1a] pt-10 sm:pt-14 pb-16 sm:pb-24 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto">
        <div
          className={`flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10 sm:mb-14 transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="w-7 sm:w-9 h-[1.5px] bg-[#4a152c] inline-block" />
              <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] text-[#666666] uppercase">
                {data.badge}
              </span>
            </div>
            <h2 className="text-[42px] sm:text-5xl md:text-6xl lg:text-[72px] font-black tracking-[-0.04em] text-[#1a1a1a] leading-none uppercase">
              {data.heading.main}
              <span className="text-[#4a152c]">.</span>
            </h2>
          </div>

          <Link
            href={data.cta.href}
            className="group inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] font-semibold tracking-[0.14em] text-[#1a1a1a] uppercase border-b border-[#1a1a1a] pb-0.5 w-fit hover:text-[#4a152c] hover:border-[#4a152c] transition-colors sm:mb-1.5"
          >
            <span>{data.cta.label}</span>
            <span
              aria-hidden
              className="text-[13px] leading-none transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              ↗
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-10">
          {articles.map((article, idx) => {
            const isFeatured = idx === 0;

            return (
              <Link
                key={article.id}
                href={`/blogs/${article.slug}`}
                className={`group flex flex-col cursor-pointer transition-all duration-700 ease-out transform ${
                  isFeatured ? "lg:col-span-7" : "lg:col-span-5"
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${200 + idx * 150}ms` }}
              >
                <div className="relative w-full overflow-hidden bg-[#e8e4de] aspect-[16/11] sm:aspect-[16/10] lg:h-[360px] xl:h-[400px] lg:aspect-auto">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes={
                      isFeatured
                        ? "(max-width: 1024px) 100vw, 60vw"
                        : "(max-width: 1024px) 100vw, 40vw"
                    }
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <div className="pt-5 sm:pt-6 flex flex-col gap-2.5">
                  <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold text-[#1a1a1a] tracking-[-0.02em] leading-[1.3] group-hover:text-[#4a152c] transition-colors whitespace-pre-line">
                    {article.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-[#666666] font-normal">
                    {article.date}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
