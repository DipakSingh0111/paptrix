import React from "react";
import type { Metadata } from "next";
import PageBanner from "@/components/common/PageBanner";
import GetAQuoteSection from "@/components/GetAQuoteSection";
import data from "@/data/paptrix.json";

export const metadata: Metadata = {
  title: "Get a Quote | Paptrix Paper & Packaging Solutions",
  description:
    "Request a personalized custom packaging quote with material options, sizes, and pricing tailored for your brand.",
};

export default function GetAQuotePage() {
  const { getAQuotePage } = data as any;

  return (
    <main className="min-h-screen bg-white">
      {/* Reusable Page Banner */}
      <PageBanner
        title={getAQuotePage?.banner?.title || "Get a Quote"}
        image={getAQuotePage?.banner?.image || "/images/Minimalist-Plum.png"}
      />

      {/* Main Quote Details, Form & How It Works */}
      <GetAQuoteSection />
    </main>
  );
}
