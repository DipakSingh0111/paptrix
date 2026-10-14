"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { SectionProps } from "@/types/paptrix.types";

export default function ContactSection({ data }: SectionProps.ContactPage) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!data) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section className="w-full bg-white text-[#191919] pt-12 sm:pt-16 pb-16 sm:pb-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-[1360px] mx-auto">
        {/* Top Header Row: Big Bold Title on Left + Intro Paragraph on Right */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-16 mb-12 sm:mb-16">
          <div className="flex-1 max-w-[800px]">
            {/* Badge with horizontal line */}
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="w-10 sm:w-14 h-[3px] bg-[#58344e] rounded-full inline-block" />
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.22em] text-[#55555c] uppercase">
                {data.badge}
              </span>
            </div>

            {/* Massive Display Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black tracking-[-0.04em] leading-[0.92] uppercase select-text">
              <span className="block text-[#111113]">{data.heading.lines[0]}</span>
              <span className="block text-[#111113]">{data.heading.lines[1]}</span>
              <span className="block text-[#582f49]">{data.heading.lines[2]}</span>
              <span className="block text-[#582f49]">{data.heading.lines[3]}</span>
            </h1>
          </div>

          <div className="lg:max-w-md flex flex-col justify-end pt-2">
            <p className="text-[14px] sm:text-[16px] text-[#55555e] font-normal leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>

        {/* Content Section: Left Photo + Right Underlined Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 sm:mb-24">
          {/* Left Column: Packaging Visual matching screenshot proportions */}
          <div className="lg:col-span-5 w-full">
            <div className="relative w-full aspect-[4/5] sm:aspect-[4/4.8] lg:aspect-[4/5.2] overflow-hidden bg-neutral-100 shadow-sm">
              <Image
                src={data.image}
                alt="Paptrix Packaging Workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Right Column: Clean Underlined Form */}
          <div className="lg:col-span-7 flex flex-col justify-start pt-2">
            <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    className="w-full bg-transparent border-b border-neutral-300 py-3 text-sm sm:text-base text-[#111113] placeholder-neutral-400 focus:outline-none focus:border-[#582f49] transition-colors"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    className="w-full bg-transparent border-b border-neutral-300 py-3 text-sm sm:text-base text-[#111113] placeholder-neutral-400 focus:outline-none focus:border-[#582f49] transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full bg-transparent border-b border-neutral-300 py-3 text-sm sm:text-base text-[#111113] placeholder-neutral-400 focus:outline-none focus:border-[#582f49] transition-colors"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full bg-transparent border-b border-neutral-300 py-3 text-sm sm:text-base text-[#111113] placeholder-neutral-400 focus:outline-none focus:border-[#582f49] transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Subject */}
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject / Service Requirement"
                  className="w-full bg-transparent border-b border-neutral-300 py-3 text-sm sm:text-base text-[#111113] placeholder-neutral-400 focus:outline-none focus:border-[#582f49] transition-colors"
                />
              </div>

              {/* Row 4: Message */}
              <div className="relative">
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you? *"
                  className="w-full bg-transparent border-b border-neutral-300 py-3 text-sm sm:text-base text-[#111113] placeholder-neutral-400 focus:outline-none focus:border-[#582f49] transition-colors resize-none"
                />
              </div>

              {/* Submit Button Row */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-[#582f49] hover:bg-[#6c395a] text-white text-xs sm:text-[13px] font-bold tracking-[0.16em] uppercase rounded-none transition-all duration-300 shadow-sm active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                >
                  <span>
                    {isSubmitting ? "SENDING..." : data.form.buttonText}
                  </span>
                  <span className="text-sm">→</span>
                </button>
              </div>

              {submitted && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-medium">
                  ✓ Thank you! Your message has been sent successfully. We will get back to you shortly.
                </div>
              )}
            </form>

            {/* Bottom Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 pt-10 sm:pt-14 mt-10 sm:mt-12 border-t border-neutral-200">
              {data.list.map((card) => (
                <div
                  key={card.id}
                  className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-0 p-4 sm:p-0 rounded-2xl sm:rounded-none bg-[#fbf9fa] sm:bg-transparent border border-neutral-100 sm:border-0"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-none bg-[#f6eff3] text-[#582f49] flex items-center justify-center sm:mb-4 transition-transform duration-300 hover:scale-105 shrink-0">
                    {card.icon === "map-pin" && (
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.75">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                    {card.icon === "mail" && (
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.75">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                    {card.icon === "phone" && (
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.75">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h5 className="text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#141416] mb-1">
                      {card.title}
                    </h5>

                    {card.href ? (
                      <a
                        href={card.href}
                        className="text-xs sm:text-[13px] text-[#4a4a52] hover:text-[#582f49] transition-colors inline-flex items-center gap-1 group font-normal break-all"
                      >
                        <span>{card.detail}</span>
                        <span className="text-[11px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0">
                          ↗
                        </span>
                      </a>
                    ) : (
                      <p className="text-xs sm:text-[13px] text-[#4a4a52] font-normal leading-relaxed whitespace-pre-line">
                        {card.detail}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Feature Block: IDEAS PACKAGED BETTER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-14 sm:pt-20 border-t border-neutral-200">
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Dark plum top dash */}
            <div className="w-12 sm:w-14 h-[3.5px] bg-[#582f49] mb-6 sm:mb-8" />
            
            {/* Bold 3-line headline */}
            <h3 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-black tracking-[-0.03em] leading-[0.94] uppercase select-text">
              <span className="block text-[#111113]">
                {data.bottomFeature.heading.lines[0]}
              </span>
              <span className="block text-[#111113]">
                {data.bottomFeature.heading.lines[1]}
              </span>
              <span className="block text-[#582f49]">
                {data.bottomFeature.heading.lines[2]}
              </span>
            </h3>

            {/* Subtitle / Description text */}
            <p className="text-[14px] sm:text-[16px] text-[#55555e] font-normal leading-relaxed mt-6 max-w-md">
              {data.bottomFeature.description}
            </p>
          </div>

          <div className="lg:col-span-7">
            {/* 16:9 Image container matching the clean wide perspective in user screenshot */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/9.5] overflow-hidden bg-neutral-100 shadow-sm">
              <Image
                src={data.bottomFeature.image}
                alt="Ideas Packaged Better"
                fill
                sizes="(max-width: 1024px) 100vw, 750px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
