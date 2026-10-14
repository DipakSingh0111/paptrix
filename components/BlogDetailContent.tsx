"use client";

import React from "react";
import Image from "next/image";
import data from "@/data/paptrix.json";

export default function BlogDetailContent() {
  const { blogDetailPage } = data as any;

  if (!blogDetailPage) return null;

  return (
    <article className="w-full bg-[#fcfbfa] text-[#191919] pt-14 sm:pt-20 pb-20 sm:pb-28 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-[1360px] mx-auto">
        {/* ================= 1. HEADER SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-14 sm:mb-16">
          {/* Left Column: Date/Author Tag + Giant Display Headline */}
          <div className="lg:col-span-8 flex flex-col justify-start">
            {/* Meta bar: Plum Dash + Date + Separator + Author */}
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="w-12 h-[3.5px] bg-[#582f49] inline-block" />
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#55555c] uppercase">
                {blogDetailPage.header.date}
              </span>
              <span className="text-neutral-400 font-normal">|</span>
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#55555c] uppercase">
                {blogDetailPage.header.author}
              </span>
            </div>

            {/* Giant Display Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black tracking-[-0.04em] leading-[0.92] uppercase select-text">
              <span className="block text-[#111113]">
                {blogDetailPage.header.titleLine1}
              </span>
              <span className="block text-[#582f49]">
                {blogDetailPage.header.titleLine2}
              </span>
            </h1>

            {/* Subtitle / Tagline below headline */}
            <p className="text-[12px] sm:text-[13.5px] font-bold tracking-[0.16em] text-[#141416] uppercase mt-4">
              {blogDetailPage.header.subtitle}
            </p>
          </div>

          {/* Right Column: Intro Quote with Left Border Divider */}
          <div className="lg:col-span-4 lg:pl-8 relative flex flex-col justify-start pt-2">
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[1.5px] bg-[#3a3a40]" />
            <p className="text-[13.5px] sm:text-[14.5px] text-[#55555e] font-normal leading-relaxed">
              {blogDetailPage.header.introQuote}
            </p>
          </div>
        </div>

        {/* ================= 2. MAIN HERO PHOTO ================= */}
        <div className="relative w-full aspect-[16/8] sm:aspect-[16/7.5] md:aspect-[16/7] overflow-hidden bg-neutral-100 shadow-sm mb-10 sm:mb-12">
          <Image
            src={blogDetailPage.heroImage}
            alt={blogDetailPage.header.titleLine1}
            fill
            priority
            sizes="(max-width: 1360px) 100vw, 1360px"
            className="object-cover object-center"
          />
        </div>

        {/* Lead Paragraph */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <p className="text-[14px] sm:text-[15.5px] text-[#4a4a52] font-normal leading-relaxed">
            {blogDetailPage.leadParagraph}
          </p>
        </div>

        {/* ================= 3. SECTION 01: SIMPLICITY BUILDS A STRONGER BRAND PRESENCE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-20">
          {/* Left: Curved Kraft/Plum Sheet Image */}
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[16/9.5] sm:aspect-[16/9] overflow-hidden bg-neutral-100 shadow-sm">
              <Image
                src={blogDetailPage.section01.image}
                alt="Simplicity Builds a Stronger Brand Presence"
                fill
                sizes="(max-width: 1024px) 100vw, 650px"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right: Step 01 + Heading + Description */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* 01 with thin plum dash */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[12px] font-bold tracking-wider text-[#141416]">
                {blogDetailPage.section01.step}
              </span>
              <span className="w-8 h-[2px] bg-[#582f49] inline-block" />
            </div>

            {/* Headline */}
            <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-[-0.03em] leading-[1.02] uppercase mb-4">
              <span className="block text-[#111113]">
                {blogDetailPage.section01.titleLine1}
              </span>
              <span className="block text-[#111113]">
                {blogDetailPage.section01.titleLine2}
              </span>
              <span className="block text-[#582f49]">
                {blogDetailPage.section01.titleHighlight}
              </span>
            </h3>

            {/* Description */}
            <p className="text-[13.5px] sm:text-[14.5px] text-[#55555e] font-normal leading-relaxed max-w-lg">
              {blogDetailPage.section01.description}
            </p>
          </div>
        </div>

        {/* ================= 4. SECTION 02: LESS MATERIAL A BRIGHTER FUTURE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-20">
          {/* Left: Step 02 + Heading + Description */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            {/* 02 with thin plum dash */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[12px] font-bold tracking-wider text-[#141416]">
                {blogDetailPage.section02.step}
              </span>
              <span className="w-8 h-[2px] bg-[#582f49] inline-block" />
            </div>

            {/* Headline */}
            <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-[-0.03em] leading-[1.02] uppercase mb-4">
              <span className="block text-[#111113]">
                {blogDetailPage.section02.titleLine1}
              </span>
              <span className="block text-[#582f49]">
                {blogDetailPage.section02.titleHighlight}
              </span>
            </h3>

            {/* Description */}
            <p className="text-[13.5px] sm:text-[14.5px] text-[#55555e] font-normal leading-relaxed max-w-lg">
              {blogDetailPage.section02.description}
            </p>
          </div>

          {/* Right: Open Box Overhead Image */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative w-full aspect-[16/9.5] sm:aspect-[16/9] overflow-hidden bg-neutral-100 shadow-sm">
              <Image
                src={blogDetailPage.section02.image}
                alt="Less Material A Brighter Future"
                fill
                sizes="(max-width: 1024px) 100vw, 650px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* ================= 5. SECTION 03 & PULL QUOTE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Pull Quote Box with Double Quote Icon & Plum Dash */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="bg-transparent border-l-2 border-transparent lg:pl-4 py-4">
              {/* Double quotation mark icon */}
              <div className="text-[#582f49] text-5xl sm:text-6xl font-serif leading-none mb-3">
                “
              </div>
              <blockquote className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#582f49] tracking-tight leading-snug">
                <span className="block">{blogDetailPage.pullQuote.line1}</span>
                <span className="block">{blogDetailPage.pullQuote.line2}</span>
              </blockquote>
              <div className="w-14 h-[2.5px] bg-[#582f49] mt-6" />
            </div>
          </div>

          {/* Right: Step 03 + THOUGHTFUL DESIGN CREATES LASTING VALUE */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* 03 with thin plum dash */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[12px] font-bold tracking-wider text-[#141416]">
                {blogDetailPage.section03.step}
              </span>
              <span className="w-8 h-[2px] bg-[#582f49] inline-block" />
            </div>

            {/* Headline */}
            <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-[-0.03em] leading-[1.02] uppercase mb-4">
              <span className="block text-[#111113]">
                {blogDetailPage.section03.titleLine1}
              </span>
              <span className="block text-[#111113]">
                {blogDetailPage.section03.titleLine2}{" "}
                <span className="text-[#582f49]">
                  {blogDetailPage.section03.titleHighlight}
                </span>
              </span>
            </h3>

            {/* Description */}
            <p className="text-[13.5px] sm:text-[14.5px] text-[#55555e] font-normal leading-relaxed max-w-lg">
              {blogDetailPage.section03.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
