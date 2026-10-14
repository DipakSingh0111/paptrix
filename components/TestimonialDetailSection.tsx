"use client";

import React, { useState } from "react";
import Image from "next/image";
import data from "@/data/paptrix.json";

export default function TestimonialDetailSection() {
  const { testimonialsPage } = data;
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!testimonialsPage || !testimonialsPage.items.length) return null;

  const total = testimonialsPage.items.length;
  const currentItem = testimonialsPage.items[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  return (
    <section className="w-full bg-white text-[#191919] py-16 sm:py-24 px-6 sm:px-10 lg:px-16 overflow-hidden select-none">
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait Photograph with fixed height and width */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-[560px] h-[380px] sm:h-[440px] md:h-[480px] lg:h-[520px] overflow-hidden rounded-none shadow-sm bg-neutral-100 shrink-0">
              <Image
                src={currentItem.image}
                alt={currentItem.author}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover object-center transition-all duration-700 ease-out"
              />
            </div>
          </div>

          {/* Right Column: Detailed Testimonial Content with locked height */}
          <div className="lg:col-span-6 flex flex-col justify-between max-w-[560px] min-h-[380px] sm:min-h-[440px] md:min-h-[480px] lg:min-h-[520px]">
            {/* Top Row: Badge + Horizontal Bar on Left */}
            <div className="flex items-center mb-6 sm:mb-8">
              <div className="flex items-center gap-3">
                <span className="w-8 sm:w-11 h-[2.5px] bg-[#58344e] rounded-full inline-block" />
                <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.25em] text-[#55555c] uppercase">
                  {testimonialsPage.badge}
                </span>
              </div>
            </div>

            {/* Giant Mauve Quote Icon ("") */}
            <div className="mb-3 sm:mb-4">
              <svg
                className="w-12 h-10 sm:w-16 sm:h-12 text-[#e3d8df] fill-current"
                viewBox="0 0 48 36"
              >
                <path d="M0 21.6C0 9.7 7.7 2.3 20.3 0l2.3 5.4C14.7 7.2 11.2 11.5 11 16.5h9.4V36H0V21.6zm25.7 0C25.7 9.7 33.4 2.3 46 0l2.3 5.4C40.4 7.2 36.9 11.5 36.7 16.5H46V36H25.7V21.6z" />
              </svg>
            </div>

            {/* Headline with fixed height container to avoid jumping */}
            <div className="h-[76px] sm:h-[90px] lg:h-[100px] flex items-center overflow-hidden">
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.08] text-[#141416]">
                <span className="block text-[#141416]">
                  {currentItem.titleLine1}
                </span>
                <span className="block text-[#58344e]">
                  {currentItem.titleLine2}
                </span>
              </h2>
            </div>

            {/* Paragraph Review with fixed height container to avoid layout shift */}
            <div className="h-[120px] sm:h-[130px] flex items-start overflow-hidden mt-3 sm:mt-4">
              <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#55555c] font-normal line-clamp-5">
                {currentItem.description}
              </p>
            </div>

            {/* Author info & Prev/Next Circle Buttons */}
            <div className="flex items-end justify-between mt-6 sm:mt-8 pt-2">
              <div className="h-[68px] flex flex-col justify-end">
                <h4 className="text-lg sm:text-xl font-black text-[#141416] tracking-tight">
                  {currentItem.author}
                </h4>
                <p className="text-xs sm:text-[13px] text-[#71717a] font-normal mt-0.5">
                  {currentItem.role}
                </p>
                {/* Horizontal bottom plum accent bar */}
                <div className="w-10 sm:w-12 h-[2.5px] bg-[#58344e] rounded-full mt-3" />
              </div>

              {/* Prev / Next Outline Circle Buttons */}
              <div className="flex flex-col items-center gap-3">
                <button
                  onClick={handleNext}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-neutral-300 flex items-center justify-center text-[#58344e] hover:border-[#58344e] hover:bg-[#58344e] hover:text-white transition-all duration-300 shadow-sm"
                  aria-label="Next review"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>

                <button
                  onClick={handlePrev}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-400 hover:border-[#141416] hover:text-[#141416] transition-all duration-300 shadow-sm"
                  aria-label="Previous review"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
