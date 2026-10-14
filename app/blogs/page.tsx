import React from "react";
import type { Metadata } from "next";
import PageBanner from "@/components/common/PageBanner";
import BlogsListingSection from "@/components/BlogsListingSection";
import data from "@/data/paptrix.json";

export const metadata: Metadata = {
  title: "Blogs & Insights | Paptrix Paper & Packaging Solutions",
  description:
    "Explore the latest insights, sustainable packaging innovations, and expert guides from Paptrix.",
};

export default function BlogsPage() {
  const { blogsPage } = data as any;

  return (
    <main className="min-h-screen bg-white">
      {/* Reusable Page Banner */}
      <PageBanner
        title={blogsPage?.banner?.title || "Blogs"}
        image={blogsPage?.banner?.image || "/images/Open-Cardboard.png"}
      />

      {/* Blogs 2x2 Grid Listing Section */}
      <BlogsListingSection />
    </main>
  );
}
