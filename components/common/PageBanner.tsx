"use client";

import React, { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SectionProps } from "@/types/paptrix.types";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

function BreadcrumbBar({
  title,
  breadcrumbs,
}: {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
}) {
  const pathname = usePathname();

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    if (breadcrumbs && breadcrumbs.length > 0) return breadcrumbs;

    const items: BreadcrumbItem[] = [{ label: "Home", href: "/" }];

    if (!pathname || pathname === "/") return items;

    const segments = pathname.split("/").filter(Boolean);
    let accumulatedPath = "";

    segments.forEach((segment, index) => {
      accumulatedPath += `/${segment}`;
      const isLast = index === segments.length - 1;

      const formattedLabel = segment
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

      items.push({
        label: isLast ? title : formattedLabel,
        href: isLast ? undefined : accumulatedPath,
      });
    });

    return items;
  };

  const activeBreadcrumbs = getBreadcrumbs();

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center flex-wrap gap-2 sm:gap-2.5 mt-4 sm:mt-5 text-[12px] sm:text-[13px] font-medium"
    >
      {activeBreadcrumbs.map((crumb, idx) => {
        const isLast = idx === activeBreadcrumbs.length - 1;

        return (
          <div key={idx} className="flex items-center gap-2 sm:gap-2.5">
            {crumb.href && !isLast ? (
              <Link
                href={crumb.href}
                className="text-white/60 hover:text-white transition-colors flex items-center gap-1.5 hover:underline underline-offset-4"
              >
                {idx === 0 && (
                  <svg
                    className="w-3.5 h-3.5 inline-block opacity-75"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                )}
                <span>{crumb.label}</span>
              </Link>
            ) : (
              <span className="text-[#c48cb2] font-semibold flex items-center gap-1.5">
                {idx === 0 && (
                  <svg
                    className="w-3.5 h-3.5 inline-block"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                )}
                <span>{crumb.label}</span>
              </span>
            )}

            {!isLast && (
              <span className="text-white/30 text-[11px] select-none">/</span>
            )}
          </div>
        );
      })}
    </nav>
  );
}

export default function PageBanner({
  title,
  image = "/images/Open-Cardboard.png",
  subtitle,
  breadcrumbs,
}: SectionProps.PageBanner) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full bg-[#110f13] overflow-hidden select-none">
      {/* Container with exact alignment to logo and section grids */}
      <div className="relative w-full max-w-[1360px] mx-auto min-h-[220px] sm:min-h-[260px] md:min-h-[300px] lg:min-h-[340px] flex items-center justify-between px-6 sm:px-10 lg:px-16">
        {/* Subtle Dark Lighting & Gradient Backdrop */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-transparent z-10 pointer-events-none" />

        {/* Right Background Graphic / 3D Packaging Boxes from the image */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-full sm:w-2/3 lg:w-1/2 h-full transition-all duration-1000 ease-out transform ${
            loaded
              ? "opacity-100 scale-100 translate-x-0"
              : "opacity-0 scale-105 translate-x-10"
          }`}
        >
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-right pointer-events-none"
          />
        </div>

        {/* Left Title & Breadcrumbs */}
        <div
          className={`relative z-20 max-w-2xl transition-all duration-1000 delay-150 ease-out transform ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black text-white tracking-tight leading-none drop-shadow-md">
            {title}
          </h1>

          {/* Breadcrumb Navigation below title wrapped in Suspense */}
          <Suspense fallback={<div className="h-5 mt-4 sm:mt-5" />}>
            <BreadcrumbBar title={title} breadcrumbs={breadcrumbs} />
          </Suspense>

          {subtitle && (
            <p className="text-sm sm:text-base text-white/70 font-normal mt-3 max-w-md">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
