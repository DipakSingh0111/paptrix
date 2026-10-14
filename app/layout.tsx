import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { getHeaderData, getFooterData } from "@/lib/paptrix";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paptrix - Paper & Packaging Solutions",
  description: "Packaging That Delivers. Premium Paper & Packaging Solutions customized for your brand.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerData = getHeaderData();
  const footerData = getFooterData();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <Suspense fallback={<div className="h-[88px] bg-black w-full" />}>
          <Navbar data={headerData} />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Footer data={footerData} />
      </body>
    </html>
  );
}
