"use client";

import React from "react";
import Image from "next/image";
import type { SectionProps } from "@/types/paptrix.types";

export default function BlogDetailContent({ data }: SectionProps.BlogDetail) {
  if (!data) return null;

  const section01 = data.sections?.[0];
  const section02 = data.sections?.[1];
  const section03 = data.sections?.[2];

  return (
    <article className="w-full bg-[#fcfbfa] text-[#191919] pt-14 sm:pt-20 pb-20 sm:pb-28 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-14 sm:mb-16">
          <div className="lg:col-span-8 flex flex-col justify-start">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="w-12 h-[3.5px] bg-[#582f49] inline-block" />
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#55555c] uppercase">
                {data.header.date}
              </span>
              <span className="text-neutral-400 font-normal">|</span>
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#55555c] uppercase">
                {data.header.author}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black tracking-[-0.04em] leading-[0.92] uppercase select-text">
              <span className="block text-[#111113]">
                {data.header.titleLine1}
              </span>
              <span className="block text-[#582f49]">
                {data.header.titleLine2}
              </span>
            </h1>

            <p className="text-[12px] sm:text-[13.5px] font-bold tracking-[0.16em] text-[#141416] uppercase mt-4">
              {data.header.subtitle}
            </p>
          </div>

          <div className="lg:col-span-4 lg:pl-8 relative flex flex-col justify-start pt-2">
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[1.5px] bg-[#3a3a40]" />
            <p className="text-[13.5px] sm:text-[14.5px] text-[#55555e] font-normal leading-relaxed">
              {data.header.introQuote}
            </p>
          </div>
        </div>

        <div className="relative w-full aspect-[16/8] sm:aspect-[16/7.5] md:aspect-[16/7] overflow-hidden bg-neutral-100 shadow-sm mb-10 sm:mb-12">
          <Image
            src={data.heroImage}
            alt={data.header.titleLine1}
            fill
            priority
            sizes="(max-width: 1360px) 100vw, 1360px"
            className="object-cover object-center"
          />
        </div>

        <div className="max-w-4xl mb-16 sm:mb-20">
          <p className="text-[14px] sm:text-[15.5px] text-[#4a4a52] font-normal leading-relaxed">
            {data.leadParagraph}
          </p>
        </div>

        {section01 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-20">
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[16/9.5] sm:aspect-[16/9] overflow-hidden bg-neutral-100 shadow-sm">
                <Image
                  src={section01.image || "/images/Premium-Purple.png"}
                  alt="Simplicity Builds a Stronger Brand Presence"
                  fill
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[12px] font-bold tracking-wider text-[#141416]">
                  {section01.step}
                </span>
                <span className="w-8 h-[2px] bg-[#582f49] inline-block" />
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-[-0.03em] leading-[1.02] uppercase mb-4">
                {section01.heading.lines.map((line, idx) => (
                  <span key={idx} className="block text-[#111113]">
                    {line}
                  </span>
                ))}
                <span className="block text-[#582f49]">
                  {section01.heading.highlight}
                </span>
              </h3>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#55555e] font-normal leading-relaxed max-w-lg">
                {section01.description}
              </p>
            </div>
          </div>
        )}

        {section02 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-20">
            <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[12px] font-bold tracking-wider text-[#141416]">
                  {section02.step}
                </span>
                <span className="w-8 h-[2px] bg-[#582f49] inline-block" />
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-[-0.03em] leading-[1.02] uppercase mb-4">
                {section02.heading.lines.map((line, idx) => (
                  <span key={idx} className="block text-[#111113]">
                    {line}
                  </span>
                ))}
                <span className="block text-[#582f49]">
                  {section02.heading.highlight}
                </span>
              </h3>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#55555e] font-normal leading-relaxed max-w-lg">
                {section02.description}
              </p>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative w-full aspect-[16/9.5] sm:aspect-[16/9] overflow-hidden bg-neutral-100 shadow-sm">
                <Image
                  src={section02.image || "/images/Eco-Friendly.png"}
                  alt="Less Material A Brighter Future"
                  fill
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="bg-transparent border-l-2 border-transparent lg:pl-4 py-4">
              <div className="text-[#582f49] text-5xl sm:text-6xl font-serif leading-none mb-3">
                “
              </div>
              <blockquote className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#582f49] tracking-tight leading-snug">
                <span className="block">{data.pullQuote.line1}</span>
                <span className="block">{data.pullQuote.line2}</span>
              </blockquote>
              <div className="w-14 h-[2.5px] bg-[#582f49] mt-6" />
            </div>
          </div>

          {section03 && (
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[12px] font-bold tracking-wider text-[#141416]">
                  {section03.step}
                </span>
                <span className="w-8 h-[2px] bg-[#582f49] inline-block" />
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-[-0.03em] leading-[1.02] uppercase mb-4">
                <span className="block text-[#111113]">
                  {section03.heading.lines[0]}
                </span>
                <span className="block text-[#111113]">
                  {section03.heading.lines[1]}{" "}
                  <span className="text-[#582f49]">
                    {section03.heading.highlight}
                  </span>
                </span>
              </h3>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#55555e] font-normal leading-relaxed max-w-lg">
                {section03.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
