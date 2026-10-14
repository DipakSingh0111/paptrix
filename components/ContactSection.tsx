"use client";

import React, { useState } from "react";
import Image from "next/image";
import data from "@/data/paptrix.json";

export default function ContactSection() {
  const { contactPage } = data;

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

  if (!contactPage) return null;

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
                {contactPage.badge}
              </span>
            </div>

            {/* Giant Heading matching exact reference image typography */}
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-black tracking-[-0.04em] leading-[0.9] uppercase select-text">
              <span className="block text-[#111113]">
                {contactPage.titleLine1}
              </span>
              <span className="block text-[#582f49]">
                {contactPage.titleLine2}
              </span>
              <span className="block text-[#111113]">
                {contactPage.titleLine3}
              </span>
              <span className="block text-[#111113] flex items-baseline">
                <span>{contactPage.titleLine4}</span>
                <span className="inline-block w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#582f49] ml-1.5 translate-y-[-2px]" />
              </span>
            </h2>
          </div>

          {/* Intro Paragraph on Right with Thin Dark Vertical Divider Line */}
          <div className="lg:w-[360px] shrink-0 lg:pl-10 relative flex items-center">
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[1.5px] bg-[#3a3a40]" />
            <p className="text-[14px] sm:text-[15px] leading-[1.65] text-[#4a4a52] font-normal">
              {contactPage.intro}
            </p>
          </div>
        </div>

        {/* Middle Row: Left Photo + Right Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start mb-20 sm:mb-28">
          {/* Left Column: Packaging Still Life Image */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full aspect-[4/4.9] overflow-hidden bg-neutral-100 shadow-sm">
              <Image
                src={contactPage.leftImage}
                alt="Paptrix Packaging Materials"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
              {/* Name */}
              <div>
                <label className="block text-[11px] sm:text-[12px] font-bold tracking-[0.14em] uppercase text-[#141416] mb-1">
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full pb-2 bg-transparent border-b border-neutral-300 text-sm sm:text-[15px] text-[#141416] placeholder:text-neutral-400 focus:outline-none focus:border-[#58344e] transition-colors"
                />
              </div>

              {/* Email & Phone in 2 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] sm:text-[12px] font-bold tracking-[0.14em] uppercase text-[#141416] mb-1">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourmail@mail.com"
                    className="w-full pb-2 bg-transparent border-b border-neutral-300 text-sm sm:text-[15px] text-[#141416] placeholder:text-neutral-400 focus:outline-none focus:border-[#58344e] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-[12px] font-bold tracking-[0.14em] uppercase text-[#141416] mb-1">
                    PHONE
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 300 1234567"
                    className="w-full pb-2 bg-transparent border-b border-neutral-300 text-sm sm:text-[15px] text-[#141416] placeholder:text-neutral-400 focus:outline-none focus:border-[#58344e] transition-colors"
                  />
                </div>
              </div>

              {/* Company (Optional) */}
              <div>
                <label className="block text-[11px] sm:text-[12px] font-bold tracking-[0.14em] uppercase text-[#141416] mb-1">
                  COMPANY (OPTIONAL)
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full pb-2 bg-transparent border-b border-neutral-300 text-sm sm:text-[15px] text-[#141416] placeholder:text-neutral-400 focus:outline-none focus:border-[#58344e] transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-[11px] sm:text-[12px] font-bold tracking-[0.14em] uppercase text-[#141416] mb-1">
                  SUBJECT
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full pb-2 bg-transparent border-b border-neutral-300 text-sm sm:text-[15px] text-[#141416] placeholder:text-neutral-400 focus:outline-none focus:border-[#58344e] transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] sm:text-[12px] font-bold tracking-[0.14em] uppercase text-[#141416] mb-1">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here ..."
                  className="w-full pb-2 bg-transparent border-b border-neutral-300 text-sm sm:text-[15px] text-[#141416] placeholder:text-neutral-400 focus:outline-none focus:border-[#58344e] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#4a1733] hover:bg-[#5b1f3f] text-white py-4 px-7 flex items-center justify-between transition-colors shadow-sm group disabled:opacity-70 cursor-pointer"
                >
                  <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] uppercase">
                    {isSubmitting ? "SENDING..." : contactPage.form.buttonText}
                  </span>
                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>

              {submitted && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm rounded">
                  Thank you! Your message has been sent successfully. We will get back to you shortly.
                </div>
              )}
            </form>

            {/* 3 Contact Info Cards: Location, Email, Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 sm:pt-12 mt-8">
              {contactPage.infoCards.map((card) => (
                <div key={card.id} className="flex flex-col items-start">
                  {/* Soft Rounded Icon Square with larger prominent dimensions */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[20px] bg-[#f5f0f2] flex items-center justify-center text-[#582f49] mb-4 shadow-xs">
                    {card.icon === "map-pin" && (
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.75">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                    {card.icon === "mail" && (
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.75">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                    {card.icon === "phone" && (
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.75">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    )}
                  </div>

                  <h5 className="text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#141416] mb-1">
                    {card.title}
                  </h5>

                  {card.href ? (
                    <a
                      href={card.href}
                      className="text-xs sm:text-[13px] text-[#4a4a52] hover:text-[#582f49] transition-colors inline-flex items-center gap-1 group font-normal"
                    >
                      <span>{card.detail}</span>
                      <span className="text-[11px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </a>
                  ) : (
                    <p className="text-xs sm:text-[13px] text-[#4a4a52] font-normal leading-relaxed whitespace-pre-line">
                      {card.detail}
                    </p>
                  )}
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
                {contactPage.bottomFeature.titleLine1}
              </span>
              <span className="block text-[#111113]">
                {contactPage.bottomFeature.titleLine2}
              </span>
              <span className="block text-[#582f49]">
                {contactPage.bottomFeature.titleLine3}
              </span>
            </h3>

            {/* Subtitle / Description text */}
            <p className="text-[14px] sm:text-[16px] text-[#55555e] font-normal leading-relaxed mt-6 max-w-md">
              {contactPage.bottomFeature.description}
            </p>
          </div>

          <div className="lg:col-span-7">
            {/* 16:9 Image container matching the clean wide perspective in user screenshot */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/9.5] overflow-hidden bg-neutral-100 shadow-sm">
              <Image
                src={contactPage.bottomFeature.image}
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
