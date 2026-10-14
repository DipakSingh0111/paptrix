"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import data from "@/data/paptrix.json";

export default function Hero() {
  const { hero } = data;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full bg-black overflow-hidden select-none">
      <div className="relative w-full max-w-[1920px] mx-auto aspect-[16/7] sm:aspect-[16/6.8] md:aspect-[16/6.5] min-h-[380px] sm:min-h-[460px] md:min-h-[540px] lg:min-h-[620px] flex items-center justify-center">
        {/* Background Graphic Mosaic with Packaging Products */}
        <div
          className={`absolute inset-0 transition-all duration-1000 ease-out transform ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={hero.bannerImage}
            alt={`${hero.titleLine1} ${hero.titleLine2}`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center pointer-events-none"
          />
        </div>

        {/* Center Typography matching reference image */}
        <div
          className={`relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl transition-all duration-1000 delay-200 ease-out transform ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="font-extrabold tracking-tight leading-[1.08] select-text">
            <span className="block text-white text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-black tracking-tight drop-shadow-sm">
              {hero.titleLine1}
            </span>
            <span className="block text-[#58344e] text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-black tracking-tight mt-1 sm:mt-2 drop-shadow-sm">
              {hero.titleLine2}
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
