"use client";

import React from "react";
import Image from "next/image";
import type { SectionProps } from "@/types/paptrix.types";

export default function ServiceDetailContent({ data }: SectionProps.ServiceDetail) {
  if (!data) return null;

  return (
    <section className="w-full bg-[#fcfbfa] text-[#191919] pt-14 sm:pt-20 pb-20 sm:pb-28 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-[1360px] mx-auto">
        {/* ================= 1. TOP HEADER & APPROACH SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 sm:mb-20">
          {/* Left Column: Big Display Headline */}
          <div className="lg:col-span-8 flex flex-col justify-start">
            {/* Top Plum Dash + Badge */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[3.5px] bg-[#582f49] inline-block" />
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.22em] text-[#55555c] uppercase">
                {data.header.badge}
              </span>
            </div>

            {/* Giant Display Typography */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[82px] font-black tracking-[-0.04em] leading-[0.92] uppercase select-text">
              <span className="block text-[#111113]">
                {data.header.titleLines[0]}
              </span>
              <span className="block text-[#111113]">
                {data.header.titleLines[1]}
              </span>
              <span className="block text-[#582f49]">
                {data.header.titleLines[2]}
              </span>
              <span className="block text-[#582f49]">
                {data.header.titleLines[3]}
              </span>
            </h1>

            {/* Subtitle / Intro */}
            <p className="text-[14px] sm:text-[16px] text-[#55555e] font-normal leading-relaxed mt-6 sm:mt-8 max-w-xl">
              {data.header.description}
            </p>
          </div>

          {/* Right Column: OUR APPROACH Card with Left Border Divider */}
          <div className="lg:col-span-4 lg:pl-8 relative flex flex-col justify-start pt-2">
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[1.5px] bg-[#3a3a40]" />
            <h4 className="text-[12px] sm:text-[13px] font-bold tracking-[0.16em] uppercase text-[#141416] mb-4">
              {data.ourApproach.title}
            </h4>
            <p className="text-[13px] sm:text-[14px] text-[#55555e] font-normal leading-relaxed mb-4">
              {data.ourApproach.paragraphs[0]}
            </p>
            <p className="text-[13px] sm:text-[14px] text-[#55555e] font-normal leading-relaxed">
              {data.ourApproach.paragraphs[1]}
            </p>
          </div>
        </div>

        {/* ================= 2. LARGE PHOTO & TAPE PHOTO + DESIGN THAT SPEAKS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          {/* Left: Large Packaging Box Studio Visual */}
          <div className="lg:col-span-8">
            <div className="relative w-full aspect-[16/9.5] sm:aspect-[16/9] overflow-hidden bg-neutral-100 shadow-sm">
              <Image
                src={data.gallery.largeHeroImage}
                alt="Custom Packaging Presentation"
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Right: Tape Photo + DESIGN THAT SPEAKS Typography */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-8">
            <div className="relative w-full aspect-[16/11] overflow-hidden bg-neutral-100 shadow-sm">
              <Image
                src={data.gallery.tapeImage}
                alt="Branded Packaging Detail"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover object-center"
              />
            </div>

            {/* DESIGN THAT SPEAKS */}
            <div>
              <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-[-0.03em] leading-[1.02] uppercase select-text">
                <span className="block text-[#111113]">
                  {data.designThatSpeaks.heading.lines[0]}
                </span>
                <span className="block text-[#111113]">
                  {data.designThatSpeaks.heading.lines[1]}{" "}
                  <span className="text-[#582f49]">
                    {data.designThatSpeaks.heading.highlight}
                  </span>
                </span>
              </h3>
              <p className="text-[13px] sm:text-[14px] text-[#55555e] font-normal leading-relaxed mt-4 max-w-sm">
                {data.designThatSpeaks.description}
              </p>
            </div>
          </div>
        </div>

        {/* ================= 3. MATERIAL MATTERS + STACKED PHOTO STRIP ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          {/* Left: Section Header & Description */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="w-10 sm:w-12 h-[3px] bg-[#582f49] mb-4" />
            <h4 className="text-[12px] sm:text-[13px] font-bold tracking-[0.16em] uppercase text-[#141416] mb-3">
              {data.materialMatters.badge}
            </h4>
            <p className="text-[13px] sm:text-[14px] text-[#55555e] font-normal leading-relaxed max-w-md">
              {data.materialMatters.description}
            </p>
          </div>

          {/* Right: Stacked Corrugated Paper Close-up photo */}
          <div className="lg:col-span-4">
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100 shadow-sm">
              <Image
                src={data.gallery.corrugatedImage}
                alt="Material Close-up"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* ================= 4. MADE TO CREATE LASTING IMPACT. ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading + Description */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-black tracking-[-0.04em] leading-[0.92] uppercase select-text">
              <span className="block text-[#111113]">
                {data.madeToCreate.heading.lines[0]}
              </span>
              <span className="block text-[#111113]">
                {data.madeToCreate.heading.lines[1]}
              </span>
              <span className="block text-[#582f49]">
                {data.madeToCreate.heading.highlight}
              </span>
              <span className="block text-[#111113]">
                {data.madeToCreate.heading.end}
              </span>
            </h2>

            {/* Plum dash below heading */}
            <div className="w-12 h-[3.5px] bg-[#582f49] mt-4 sm:mt-5 mb-5 sm:mb-6" />

            <p className="text-[13px] sm:text-[15px] text-[#55555e] font-normal leading-relaxed max-w-md">
              {data.madeToCreate.description}
            </p>
          </div>

          {/* Right Column: Big Display Photo of Custom Boxes */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] overflow-hidden bg-neutral-100 shadow-sm">
              <Image
                src={data.gallery.bigBottomImage}
                alt="Made to Create Lasting Impact"
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
