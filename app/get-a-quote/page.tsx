import React from "react";
import type { Metadata } from "next";
import PageBanner from "@/components/common/PageBanner";
import GetAQuoteSection from "@/components/GetAQuoteSection";
import { getPaptrixSections, getPageBanners } from "@/lib/paptrix";

export const metadata: Metadata = {
  title: "Get a Quote | Paptrix Paper & Packaging Solutions",
  description:
    "Request a personalized custom packaging quote with material options, sizes, and pricing tailored for your brand.",
};

export default function GetAQuotePage() {
  const sections = getPaptrixSections();
  const pageBanners = getPageBanners();
  const banner = pageBanners?.getAQuote;
  const quoteData = sections.GetQuote?.variants?.PaptrixGetQuote1;

  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title={banner?.title || "Get a Quote"}
        image={banner?.image || "/images/Minimalist-Plum.png"}
      />

      <GetAQuoteSection data={quoteData} />
    </main>
  );
}
