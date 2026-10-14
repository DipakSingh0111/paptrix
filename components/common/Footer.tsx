"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/paptrix.json";

export default function Footer() {
  const { footer } = data;
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (!footer) return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className="w-full bg-[#130a11] text-white overflow-hidden select-none"
    >
      {/* Upper 3-Column Section */}
      <div
        className={`w-full max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16 pt-10 sm:pt-12 pb-6 sm:pb-8 transition-all duration-1000 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/10 pb-8 sm:pb-10 gap-8 lg:gap-0">
          {/* Column 1: Brand Info (Left) */}
          <div className="lg:col-span-4 lg:pr-12 flex flex-col justify-between">
            <div>
              {/* Brand Logo - Matches Navbar Logo size exactly */}
              <div className="relative h-14 sm:h-16 w-auto inline-flex items-center mb-5">
                <Image
                  src={footer.brand.logo}
                  alt="Paptrix Packaging"
                  width={300}
                  height={75}
                  priority
                  className="h-14 sm:h-16 w-auto object-contain object-left"
                />
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm leading-relaxed text-white/70 max-w-[320px] font-normal mb-5">
                {footer.brand.description}
              </p>
            </div>

            {/* Social Circle Icons */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors"
                aria-label="Twitter X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors"
                aria-label="Instagram"
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
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Social Links Menu with Numbers (Middle) */}
          <div className="lg:col-span-3 lg:border-l lg:border-white/10 lg:pl-10 lg:pr-8 flex flex-col justify-center py-2">
            <div className="divide-y divide-white/10 w-full">
              {footer.socialLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between py-2.5 sm:py-3.5 hover:text-[#e5b3d6] transition-colors"
                >
                  <div className="flex items-center gap-5 sm:gap-6">
                    <span className="text-xs font-mono text-white/40 tracking-wider">
                      {item.id}
                    </span>
                    <span className="text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-white/90 group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-white/50 group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: "LET'S TALK." Graphic Card (Right) */}
          <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-10 relative overflow-hidden flex flex-col justify-between min-h-[300px] sm:min-h-[340px]">
            {/* Background Geometric Polygonal Paptrix Brand 'P' Watermark */}
            <div className="absolute -right-8 -top-6 w-[320px] sm:w-[380px] h-[320px] sm:h-[380px] pointer-events-none opacity-20 -z-0">
              <svg
                viewBox="0 0 200 200"
                fill="none"
                stroke="#c48cb2"
                className="w-full h-full"
              >
                {/* Hexagonal Isometric Logo outline bands like Paptrix 'P' */}
                <path
                  d="M100 20 L160 55 L160 125 L100 160 L40 125 L40 55 Z"
                  strokeWidth="6"
                  strokeLinejoin="round"
                />
                <path
                  d="M100 35 L145 61 L145 119 L100 145 L55 119 L55 61 Z"
                  strokeWidth="5"
                  strokeLinejoin="round"
                />
                <path
                  d="M100 50 L130 67 L130 113 L100 130 L70 113 L70 67 Z"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
                <path
                  d="M100 20 L100 90 L160 125"
                  strokeWidth="5"
                  strokeLinejoin="round"
                />
                <path
                  d="M100 90 L40 125"
                  strokeWidth="5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Isometric 3D Boxes Image positioned at the bottom right */}
            <div className="absolute -right-4 -bottom-4 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 pointer-events-none select-none z-0">
              <Image
                src={footer.letsTalkCard.bgGraphicImage}
                alt="Packaging Boxes"
                fill
                className="object-contain object-bottom-right"
              />
            </div>

            {/* Subtitle */}
            <div className="relative z-10 pt-1">
              <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#c48cb2] uppercase mb-1.5">
                {footer.letsTalkCard.subtitle}
              </p>

              {/* Massive Heading: LET'S TALK. */}
              <h3 className="text-4xl sm:text-5xl lg:text-[62px] font-black tracking-tight leading-[0.92] uppercase">
                <span className="block text-white">
                  {footer.letsTalkCard.titleLine1}
                </span>
                <span className="block text-[#a06d8f]">
                  {footer.letsTalkCard.titleLine2}
                </span>
              </h3>

              <p className="text-[11px] sm:text-xs leading-relaxed text-white/70 max-w-[260px] mt-2.5 font-normal">
                {footer.letsTalkCard.description}
              </p>
            </div>

            {/* Action Button: Pill with Arrow */}
            <div className="relative z-10 mt-5 pb-1">
              <Link
                href={footer.letsTalkCard.ctaHref}
                className="group inline-flex items-center gap-3"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#58344e] flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#7a486c] group-hover:scale-105 shadow-lg">
                  <span className="text-sm sm:text-base transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase text-white pb-0.5 border-b border-white group-hover:border-[#c48cb2] group-hover:text-[#c48cb2] transition-colors">
                  {footer.letsTalkCard.ctaText}
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Scroll-to-Top Button */}
        <div className="pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-xs text-white/50 font-normal">
            {footer.bottom.copyright}
          </p>

          {/* Scroll to top */}
          <div className="flex items-center gap-6 sm:gap-10">
            {/* Scroll To Top Circle Button */}
            <button
              onClick={scrollToTop}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-all duration-300 hover:scale-105"
              aria-label="Scroll to top"
            >
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
