"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import data from "@/data/paptrix.json";

export default function Navbar() {
  const { brand, navLinks, cta } = data.navbar;
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-black border-b border-neutral-900 transition-all duration-300">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-[88px]">
          {/* Brand Logo */}
          <Link
            href={brand.href}
            className="flex items-center group select-none shrink-0 py-1"
          >
            <div className="relative h-16 w-auto flex items-center">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={300}
                height={75}
                priority
                className="h-14 sm:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center space-x-2">
              {navLinks.map((item, index) => {
                const isSelected =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <React.Fragment key={item.id}>
                    <Link
                      href={item.href}
                      className={`text-[15px] transition-all duration-200 select-none ${
                        isSelected
                          ? "bg-[#45273c] text-white px-6 py-2.5 rounded-xl font-medium tracking-wide shadow-sm"
                          : "text-white hover:text-white/80 px-4 py-2 font-medium tracking-wide"
                      }`}
                    >
                      {item.label}
                    </Link>

                    {/* Vertical Divider */}
                    {index < navLinks.length - 1 && (
                      <span
                        className="h-4 w-[1px] bg-neutral-700/80 mx-1 select-none"
                        aria-hidden="true"
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              href={cta.href}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-[15px] font-medium text-white bg-[#4a2a40] hover:bg-[#5b334f] active:scale-[0.98] transition-all duration-200 shadow-sm"
            >
              <span>{cta.label}</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0d0d] border-b border-white/10 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((item) => {
            const isSelected =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isSelected
                    ? "bg-[#45273c] text-white font-semibold"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-3">
            <Link
              href={cta.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-base font-medium text-white bg-[#55314a] hover:bg-[#683b5b] transition-colors"
            >
              <span>{cta.label}</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
