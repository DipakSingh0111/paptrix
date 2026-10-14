"use client";

import React, { useState } from "react";
import Image from "next/image";
import data from "@/data/paptrix.json";

export default function GetAQuoteSection() {
  const { getAQuotePage } = data as any;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    productType: "",
    quantity: "",
    materialPreference: "",
    packagingSize: "",
    additionalDetails: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!getAQuotePage) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        productType: "",
        quantity: "",
        materialPreference: "",
        packagingSize: "",
        additionalDetails: "",
      });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section className="w-full bg-white text-[#191919] pt-12 sm:pt-16 pb-20 sm:pb-28 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-[1360px] mx-auto">
        {/* ================= TOP SECTION ================= */}
        {/* Left Column: Title & Description | Right Column: Open Luxury Box Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-20">
          {/* Left: Giant Display Typography */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Dark plum dash badge */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[3.5px] bg-[#582f49] inline-block" />
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.22em] text-[#55555c] uppercase">
                {getAQuotePage.header.badge}
              </span>
            </div>

            {/* Display headline */}
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-[-0.04em] leading-[0.92] uppercase select-text">
              <span className="block text-[#111113]">
                {getAQuotePage.header.titleLine1}
              </span>
              <span className="block text-[#582f49]">
                {getAQuotePage.header.titleLine2}
              </span>
              <span className="block text-[#111113]">
                {getAQuotePage.header.titleLine3}
              </span>
              <span className="block text-[#111113] flex items-baseline">
                <span>{getAQuotePage.header.titleLine4.replace(/\.$/, "")}</span>
                <span className="inline-block w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#582f49] ml-1.5 translate-y-[-2px]" />
              </span>
            </h2>

            <p className="text-[14px] sm:text-[16px] text-[#55555e] font-normal leading-relaxed mt-6 max-w-lg">
              {getAQuotePage.header.description}
            </p>
          </div>

          {/* Right: Open Box Packaging Photo */}
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-neutral-100 shadow-sm">
              <Image
                src={getAQuotePage.header.heroImage}
                alt="Tailored Packaging for Your Brand"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 650px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* ================= LOWER SECTION ================= */}
        {/* Left: Detailed Quote Form | Right: How it Works & Packaging Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Custom Quote Form */}
          <div className="lg:col-span-7">
            {/* Form Section Header */}
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#111113] uppercase">
                {getAQuotePage.form.heading}
              </h3>
              <div className="w-12 h-[3px] bg-[#111113] mt-2 mb-3" />
              <p className="text-xs sm:text-[13.5px] text-[#66666e] leading-relaxed max-w-xl">
                {getAQuotePage.form.subheading}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Full Name & Email Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="border border-neutral-300 rounded-[3px] px-3.5 py-2.5 focus-within:border-[#582f49] transition-colors bg-white">
                  <label className="block text-[11px] font-bold text-[#141416] tracking-wider uppercase mb-0.5">
                    Full Name <span className="text-[#a12338]">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-transparent text-[13.5px] text-[#141416] placeholder:text-neutral-400 focus:outline-none"
                  />
                </div>

                <div className="border border-neutral-300 rounded-[3px] px-3.5 py-2.5 focus-within:border-[#582f49] transition-colors bg-white">
                  <label className="block text-[11px] font-bold text-[#141416] tracking-wider uppercase mb-0.5">
                    Email Address <span className="text-[#a12338]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-transparent text-[13.5px] text-[#141416] placeholder:text-neutral-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Phone Number & Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="border border-neutral-300 rounded-[3px] px-3.5 py-2.5 focus-within:border-[#582f49] transition-colors bg-white">
                  <label className="block text-[11px] font-bold text-[#141416] tracking-wider uppercase mb-0.5">
                    Phone Number <span className="text-[#a12338]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 300 1234567"
                    className="w-full bg-transparent text-[13.5px] text-[#141416] placeholder:text-neutral-400 focus:outline-none"
                  />
                </div>

                <div className="border border-neutral-300 rounded-[3px] px-3.5 py-2.5 focus-within:border-[#582f49] transition-colors bg-white">
                  <label className="block text-[11px] font-bold text-[#141416] tracking-wider uppercase mb-0.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full bg-transparent text-[13.5px] text-[#141416] placeholder:text-neutral-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 3: Product Type Dropdown */}
              <div className="border border-neutral-300 rounded-[3px] px-3.5 py-2.5 focus-within:border-[#582f49] transition-colors bg-white relative">
                <label className="block text-[11px] font-bold text-[#141416] tracking-wider uppercase mb-0.5">
                  Product Type <span className="text-[#a12338]">*</span>
                </label>
                <select
                  name="productType"
                  required
                  value={formData.productType}
                  onChange={handleChange}
                  className="w-full bg-transparent text-[13.5px] text-[#141416] focus:outline-none cursor-pointer appearance-none pr-8"
                >
                  <option value="">Select product type</option>
                  <option value="corrugated">Corrugated Boxes</option>
                  <option value="custom">Custom Packaging</option>
                  <option value="kraft">Kraft Paper & Rolls</option>
                  <option value="folding">Folding Cartons</option>
                  <option value="rigid">Rigid Luxury Boxes</option>
                  <option value="ecommerce">E-Commerce Mailers</option>
                </select>
                <div className="pointer-events-none absolute right-3.5 bottom-3 text-neutral-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Row 4: Quantity & Material Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="border border-neutral-300 rounded-[3px] px-3.5 py-2.5 focus-within:border-[#582f49] transition-colors bg-white">
                  <label className="block text-[11px] font-bold text-[#141416] tracking-wider uppercase mb-0.5">
                    Quantity (Approx.)
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g. 500, 1000, 5000"
                    className="w-full bg-transparent text-[13.5px] text-[#141416] placeholder:text-neutral-400 focus:outline-none"
                  />
                </div>

                <div className="border border-neutral-300 rounded-[3px] px-3.5 py-2.5 focus-within:border-[#582f49] transition-colors bg-white relative">
                  <label className="block text-[11px] font-bold text-[#141416] tracking-wider uppercase mb-0.5">
                    Material Preference
                  </label>
                  <select
                    name="materialPreference"
                    value={formData.materialPreference}
                    onChange={handleChange}
                    className="w-full bg-transparent text-[13.5px] text-[#141416] focus:outline-none cursor-pointer appearance-none pr-8"
                  >
                    <option value="">Select material</option>
                    <option value="kraft">Recycled Kraft Paper</option>
                    <option value="corrugated-3ply">3-Ply Corrugated</option>
                    <option value="corrugated-5ply">5-Ply Heavy Duty</option>
                    <option value="white-board">Bleached White Cardboard</option>
                    <option value="eco-friendly">100% Biodegradable</option>
                  </select>
                  <div className="pointer-events-none absolute right-3.5 bottom-3 text-neutral-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 5: Packaging Size (Optional) */}
              <div className="border border-neutral-300 rounded-[3px] px-3.5 py-2.5 focus-within:border-[#582f49] transition-colors bg-white">
                <label className="block text-[11px] font-bold text-[#141416] tracking-wider uppercase mb-0.5">
                  Packaging Size (Optional)
                </label>
                <input
                  type="text"
                  name="packagingSize"
                  value={formData.packagingSize}
                  onChange={handleChange}
                  placeholder="Length × Width × Height (in cm)"
                  className="w-full bg-transparent text-[13.5px] text-[#141416] placeholder:text-neutral-400 focus:outline-none"
                />
              </div>

              {/* Row 6: Additional Details */}
              <div className="border border-neutral-300 rounded-[3px] px-3.5 py-2.5 focus-within:border-[#582f49] transition-colors bg-white">
                <label className="block text-[11px] font-bold text-[#141416] tracking-wider uppercase mb-0.5">
                  Additional Details
                </label>
                <textarea
                  name="additionalDetails"
                  rows={3}
                  value={formData.additionalDetails}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements ..."
                  className="w-full bg-transparent text-[13.5px] text-[#141416] placeholder:text-neutral-400 focus:outline-none resize-none"
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
                    {isSubmitting ? "PROCESSING..." : getAQuotePage.form.buttonText}
                  </span>
                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>

              {/* Security guarantee line */}
              <div className="flex items-center gap-2 pt-1 text-neutral-500 text-[11px] sm:text-[12px]">
                <svg className="w-3.5 h-3.5 shrink-0 text-neutral-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>{getAQuotePage.form.securityNotice}</span>
              </div>

              {submitted && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm rounded">
                  Thank you! Your quote request has been received. Our team will review your specifications and contact you shortly.
                </div>
              )}
            </form>
          </div>

          {/* Right Column: How it Works & Packaging Stack */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            {/* HOW IT WORKS Block */}
            <div>
              {/* Badge */}
              <div className="flex items-center gap-3 mb-2">
                <span className="w-10 h-[3px] bg-[#582f49] inline-block" />
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#55555c] uppercase">
                  {getAQuotePage.howItWorks.badge}
                </span>
              </div>

              {/* Title */}
              <h4 className="text-3xl sm:text-4xl font-black tracking-[-0.03em] leading-[0.95] uppercase mb-8 select-text">
                <span className="block text-[#111113]">
                  {getAQuotePage.howItWorks.titleLine1}
                </span>
                <span className="block text-[#582f49]">
                  {getAQuotePage.howItWorks.titleLine2}
                </span>
              </h4>

              {/* Vertical Steps with Connected Dashed Line */}
              <div className="relative space-y-6">
                {getAQuotePage.howItWorks.steps.map(
                  (step: any, index: number) => (
                    <div key={step.step} className="relative flex items-start gap-4">
                      {/* Left: Soft rounded icon badge */}
                      <div className="relative shrink-0 flex flex-col items-center">
                        <div className="w-12 h-12 rounded-[14px] bg-[#f5f0f2] flex items-center justify-center text-[#582f49] z-10 shadow-xs">
                          {step.icon === "chat" && (
                            <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                          )}
                          {step.icon === "document" && (
                            <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          )}
                          {step.icon === "mail" && (
                            <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          )}
                        </div>

                        {/* Vertical dotted connecting line between steps */}
                        {index < getAQuotePage.howItWorks.steps.length - 1 && (
                          <div className="w-[1.5px] h-9 border-l-2 border-dotted border-neutral-300 my-1" />
                        )}
                      </div>

                      {/* Right: Text content */}
                      <div className="pt-0.5">
                        <span className="text-[11px] font-bold tracking-wider text-[#a12338] block mb-0.5">
                          {step.step}
                        </span>
                        <h5 className="text-[15px] sm:text-[16px] font-bold text-[#111113] leading-snug">
                          {step.title}
                        </h5>
                        <p className="text-xs sm:text-[13px] text-[#66666e] leading-relaxed mt-1">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Bottom Image: Packaging Boxes on Pedestal */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] overflow-hidden bg-neutral-100 shadow-sm mt-4">
              <Image
                src={getAQuotePage.howItWorks.featureImage}
                alt="Paptrix Custom Boxes"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
