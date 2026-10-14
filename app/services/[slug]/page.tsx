import React from "react";
import type { Metadata } from "next";
import PageBanner from "@/components/common/PageBanner";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import data from "@/data/paptrix.json";

export const metadata: Metadata = {
  title: "Services Detail | Paptrix Paper & Packaging Solutions",
  description:
    "Custom packaging solutions for a stronger brand tomorrow. Design that speaks and materials that matter.",
};

export default function ServiceDetailPage() {
  const { serviceDetailPage } = data as any;

  return (
    <main className="min-h-screen bg-white">
      {/* Reusable Page Banner */}
      <PageBanner
        title={serviceDetailPage?.banner?.title || "Services detail"}
        image={serviceDetailPage?.banner?.image || "/images/Minimalist-Plum.png"}
      />

      {/* Main Service Details Content Blocks */}
      <ServiceDetailContent />
    </main>
  );
}
