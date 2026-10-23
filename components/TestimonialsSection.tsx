"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { SectionProps } from "@/types/paptrix.types";

export default function TestimonialsSection({ data }: SectionProps.Testimonials) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!data || !data.list || data.list.length === 0) return null;

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? data.list.length - 1 : prev - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === data.list.length - 1 ? 0 : prev + 1,
    );
  };

  const currentItem = data.list[currentIndex];

  return (
    <section className="w-full bg-white text-[#191919] pt-1 sm:pt-2 pb-14 sm:pb-16 px-6 sm:px-10 lg:px-16 overflow-hidden select-none">
      <div className="max-w-[1360px] mx-auto">
        <div className="relative w-full rounded-[32px] sm:rounded-[44px] bg-[#f8f6f4] shadow-2xl border border-black/5 min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] flex flex-col lg:flex-row items-center justify-end">
          <div className="relative lg:absolute lg:-left-6 lg:top-1/2 lg:-translate-y-1/2 z-30 w-full lg:w-[48%] max-w-[560px] min-h-[380px] sm:h-[430px] bg-[#3a1d30] text-white p-6 sm:p-11 lg:p-12 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.45)] rounded-[28px] sm:rounded-[36px] my-4 lg:my-0 select-none">
            <div className="space-y-4">
              <div className="h-[96px] sm:h-[105px] flex items-start overflow-hidden">
                <p className="text-[15px] sm:text-[17px] leading-relaxed text-white/95 font-normal line-clamp-4">
                  "{currentItem.quote}"
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-[#f5bd8e]">
                {[...Array(currentItem.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 sm:w-[18px] sm:h-[18px] fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 pt-3 border-t border-white/10 sm:border-0 sm:pt-0">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white/20 bg-neutral-800 shadow-md shrink-0">
                  <Image
                    src={currentItem.author.avatar || "/images/logo.png"}
                    alt={currentItem.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-sm sm:text-lg text-white tracking-tight truncate">
                    {currentItem.author.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70 font-normal truncate">
                    {currentItem.author.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3 w-full sm:w-auto">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prevSlide}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/25 flex items-center justify-center text-white hover:bg-white/15 transition-all duration-200 active:scale-95 shrink-0"
                    aria-label="Previous Testimonial"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={nextSlide}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#3d2033] flex items-center justify-center font-bold hover:bg-white/90 transition-all duration-200 shadow-md active:scale-95 shrink-0"
                    aria-label="Next Testimonial"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center gap-1.5 ml-1 sm:ml-2">
                  {data.list.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => setCurrentIndex(dotIdx)}
                      className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                        currentIndex === dotIdx
                          ? "w-4 sm:w-5 bg-[#c876a4]"
                          : "w-1.5 sm:w-2 bg-white/30 hover:bg-white/60"
                      }`}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full lg:w-[62%] min-h-[460px] lg:min-h-[520px] flex flex-col justify-start p-8 sm:p-12 lg:p-14 overflow-hidden rounded-b-[32px] lg:rounded-b-none lg:rounded-r-[44px]">
            <Image
              src={data.backgroundImage}
              alt="Paptrix Packaging Clients"
              fill
              sizes="(max-width: 1024px) 100vw, 850px"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#f8f6f4]/90 via-[#f8f6f4]/70 to-transparent z-10 pointer-events-none" />

            <div className="relative z-20 max-w-lg mt-2 lg:mt-4 lg:ml-12">
              <span
                className="block text-5xl sm:text-7xl lg:text-[84px] font-black text-transparent select-none leading-none -mb-4 sm:-mb-6 pointer-events-none"
                style={{
                  WebkitTextStroke: "1.2px rgba(80, 80, 80, 0.28)",
                }}
              >
                {data.watermark}
              </span>

              <h3 className="text-3xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-[#141416] leading-tight mb-3">
                {data.heading.main}
              </h3>
              <p className="text-sm sm:text-base text-[#4a4a52] leading-relaxed font-normal max-w-sm">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
