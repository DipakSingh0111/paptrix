import React from "react";
import type { Metadata } from "next";
import PageBanner from "@/components/common/PageBanner";
import BlogDetailContent from "@/components/BlogDetailContent";
import data from "@/data/paptrix.json";

export const metadata: Metadata = {
  title: "The Power of Less: Minimal Packaging | Paptrix Insights",
  description:
    "In a world of constant visual noise, minimal packaging stands out. Learn how minimal packaging creates lasting brand impact.",
};

export default function BlogDetailPage() {
  const { blogDetailPage } = data as any;

  return (
    <main className="min-h-screen bg-white">
      {/* Reusable Page Banner */}
      <PageBanner
        title={blogDetailPage?.banner?.title || "Blog Detail"}
        image={blogDetailPage?.banner?.image || "/images/Open-Cardboard.png"}
      />

      {/* Main Blog Post Content */}
      <BlogDetailContent />
    </main>
  );
}
