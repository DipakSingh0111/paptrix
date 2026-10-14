"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { SectionProps } from "@/types/paptrix.types";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiArrowUpRight, FiArrowRight, FiArrowUp } from "react-icons/fi";

const getSocialIcon = (iconName: string) => {
  const lower = (iconName || "").toLowerCase();
  if (lower.includes("facebook") || lower === "f") {
    return <FaFacebookF className="w-4 h-4" />;
  }
  if (lower.includes("twitter") || lower.includes("x")) {
    return <FaXTwitter className="w-4 h-4" />;
  }
  if (lower.includes("linkedin") || lower === "in") {
    return <FaLinkedinIn className="w-4 h-4" />;
  }
  if (lower.includes("instagram") || lower.includes("insta")) {
    return <FaInstagram className="w-4 h-4" />;
  }
  return <FaFacebookF className="w-4 h-4" />;
};

export default function Footer({ data }: SectionProps.Footer) {
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

  if (!data) return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-[#170a14] text-white overflow-hidden select-none"
    >
      <div className="absolute inset-0 w-full h-full -z-0 pointer-events-none select-none">
        <Image
          src="/images/Footer-image.png"
          alt="Paptrix Footer Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right lg:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#170a14]/90 via-[#170a14]/50 to-transparent pointer-events-none" />
      </div>
      <div
        className={`relative z-10 w-full max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16 pt-10 sm:pt-14 pb-6 sm:pb-8 transition-all duration-1000 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/10 pb-8 sm:pb-10 gap-8 lg:gap-0 items-stretch">
          <div className="lg:col-span-4 lg:pr-12 flex flex-col justify-between py-1">
            <div>
              <div className="relative h-14 sm:h-16 w-auto inline-flex items-center mb-5">
                <Image
                  src={data.logo || "/images/logo.png"}
                  alt="Paptrix Packaging"
                  width={300}
                  height={75}
                  priority
                  className="h-14 sm:h-16 w-auto object-contain object-left"
                />
              </div>

              {/* Description */}
              <p className="text-sm sm:text-[15px] leading-relaxed text-white/70 max-w-[340px] font-normal mb-6">
                {data.description}
              </p>
            </div>

            {/* Social Icons with react-icons and Link */}
            <div className="flex items-center gap-3 pt-2">
              {(data.socials || []).map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href || social.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors"
                  aria-label={social.name}
                >
                  {getSocialIcon(social.icon || social.name)}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 lg:border-l lg:border-white/10 lg:pl-10 lg:pr-8 flex flex-col justify-center py-2">
            <div className="divide-y divide-white/10 w-full">
              {(data.socialLinks || []).map((item) => (
                <Link
                  key={item.id}
                  href={item.href || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-3 hover:text-[#e5b3d6] transition-colors"
                >
                  <div className="flex items-center gap-5 sm:gap-6">
                    <span className="text-xs sm:text-sm font-mono text-white/40 tracking-wider">
                      {item.id}
                    </span>
                    <span className="text-sm font-bold tracking-[0.16em] uppercase text-white/90 group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <FiArrowUpRight className="text-base text-white/50 group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-10 flex flex-col justify-between min-h-[300px]">
            <div className="pt-1">
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#ab739b] uppercase mb-2">
                {data.letsTalkCard.badge ||
                  data.letsTalkCard.subtitle ||
                  "HAVE A PROJECT?"}
              </p>
              <h3 className="text-5xl sm:text-6xl lg:text-[76px] font-black tracking-tight leading-[0.9] uppercase select-none">
                <span className="block text-white">
                  {data.letsTalkCard.titleLine1 || "LET'S"}
                </span>
                <span className="block text-[#a0688f] mt-1">
                  {data.letsTalkCard.titleLine2 || "TALK."}
                </span>
              </h3>

              <p className="text-sm leading-relaxed text-white/70 max-w-[280px] mt-3.5 font-normal">
                {data.letsTalkCard.description ||
                  "Got a packaging challenge or a new idea? We're here to help."}
              </p>
            </div>
            <div className="mt-8 pb-1">
              <Link
                href={data.letsTalkCard.cta.href || "/contact-us"}
                className="group inline-flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-full bg-[#6a3d5e] flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#854d76] group-hover:scale-105 shadow-lg">
                  <span className="text-base transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
                <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase text-white pb-0.5 border-b border-white group-hover:border-[#c48cb2] group-hover:text-[#c48cb2] transition-colors">
                  {data.letsTalkCard.cta.label || "GET IN TOUCH"}
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-6 sm:pt-8 relative flex items-center justify-between">
          <div className="w-10 hidden sm:block" />
          <p className="text-xs sm:text-[13px] text-white/60 font-normal text-center w-full sm:w-auto">
            {data.bottom?.copyright}
          </p>
          <div className="shrink-0">
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-all duration-300 hover:scale-105"
              aria-label="Scroll to top"
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
