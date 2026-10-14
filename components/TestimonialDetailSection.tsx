"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { SectionProps } from "@/types/paptrix.types";

export default function TestimonialDetailSection({ data }: SectionProps.TestimonialDetail) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!data || !data.list || !data.list.length) return null;

  const total = data.list.length;
  const currentItem = data.list[currentIndex];

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
                  {data.badge}
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

            {/* Testimonial Headline */}
            <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-[#141416] leading-[1.08] mb-4">
              <span className="block">{currentItem.titleLine1}</span>
              <span className="block text-[#58344e]">
                {currentItem.titleLine2}
              </span>
            </h3>

            {/* Testimonial Long Description */}
            <p className="text-[14px] sm:text-[15.5px] leading-relaxed text-[#55555c] font-normal mb-8 line-clamp-5">
              {currentItem.description}
            </p>

            {/* Bottom Row: Author details on left, Carousel controls on right */}
            <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#141416] tracking-tight">
                  {currentItem.author}
                </h4>
                <p className="text-xs sm:text-sm text-[#787880] font-normal mt-0.5">
                  {currentItem.role}
                </p>
              </div>

              {/* Prev / Next Circular Arrows */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-neutral-300 flex items-center justify-center text-[#141416] hover:bg-[#58344e] hover:text-white hover:border-[#58344e] transition-all duration-300 cursor-pointer active:scale-95"
                  aria-label="Previous Testimonial"
                >
                  <svg
                    className="w-4 h-4 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-neutral-300 flex items-center justify-center text-[#141416] hover:bg-[#58344e] hover:text-white hover:border-[#58344e] transition-all duration-300 cursor-pointer active:scale-95"
                  aria-label="Next Testimonial"
                >
                  <svg
                    className="w-4 h-4 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
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
