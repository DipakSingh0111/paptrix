import React from "react";
import type { Metadata } from "next";
import PageBanner from "@/components/common/PageBanner";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import { getPaptrixSections, getPageBanners } from "@/lib/paptrix";

export const metadata: Metadata = {
  title: "Services Detail | Paptrix Paper & Packaging Solutions",
  description:
    "Custom packaging solutions for a stronger brand tomorrow. Design that speaks and materials that matter.",
};

export default function ServiceDetailPage() {
  const sections = getPaptrixSections();
  const pageBanners = getPageBanners();
  const banner = pageBanners?.serviceDetail;
  const serviceDetails = sections.Services?.variants?.PaptrixServices1?.serviceDetails;

  return (
    <main className="min-h-screen bg-white">
      {/* Reusable Page Banner */}
      <PageBanner
        title={banner?.title || "Services detail"}
        image={banner?.image || "/images/Minimalist-Plum.png"}
      />

      {/* Main Service Details Content Blocks */}
      <ServiceDetailContent data={serviceDetails} />
    </main>
  );
}
