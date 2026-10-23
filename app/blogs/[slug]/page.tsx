import React from "react";
import type { Metadata } from "next";
import PageBanner from "@/components/common/PageBanner";
import BlogDetailContent from "@/components/BlogDetailContent";
import { getPaptrixSections, getPageBanners } from "@/lib/paptrix";

export const metadata: Metadata = {
  title: "The Power of Less: Minimal Packaging | Paptrix Insights",
  description:
    "In a world of constant visual noise, minimal packaging stands out. Learn how minimal packaging creates lasting brand impact.",
};

export default function BlogDetailPage() {
  const sections = getPaptrixSections();
  const pageBanners = getPageBanners();
  const banner = pageBanners?.blogDetail;
  const blogDetails = sections.BlogNews?.variants?.PaptrixBlogNews1?.details;

  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title={banner?.title || "Blog Detail"}
        image={banner?.image || "/images/Open-Cardboard.png"}
      />

      <BlogDetailContent data={blogDetails} />
    </main>
  );
}
