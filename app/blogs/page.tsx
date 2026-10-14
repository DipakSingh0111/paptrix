import React from "react";
import type { Metadata } from "next";
import PageBanner from "@/components/common/PageBanner";
import BlogsListingSection from "@/components/BlogsListingSection";
import { getPaptrixSections, getPageBanners } from "@/lib/paptrix";

export const metadata: Metadata = {
  title: "Blogs & Insights | Paptrix Paper & Packaging Solutions",
  description:
    "Explore the latest insights, sustainable packaging innovations, and expert guides from Paptrix.",
};

export default function BlogsPage() {
  const sections = getPaptrixSections();
  const pageBanners = getPageBanners();
  const banner = pageBanners?.blogs;
  const blogPageData = sections.BlogNews?.variants?.PaptrixBlogNews1?.page;

  return (
    <main className="min-h-screen bg-white">
      {/* Reusable Page Banner */}
      <PageBanner
        title={banner?.title || "Blogs"}
        image={banner?.image || "/images/Open-Cardboard.png"}
      />

      {/* Blogs 2x2 Grid Listing Section */}
      <BlogsListingSection data={blogPageData} />
    </main>
  );
}
