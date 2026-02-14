"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/content";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About Us",
    children: [
      { href: "/about", label: "About the Academy" },
      { href: "/about#founder", label: "Founder" },
      { href: "/about#vision", label: "Vision & Mission" },
      { href: "/about#faculty", label: "Faculty" },
    ],
  },
  { href: "/courses", label: "Courses" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/chithirambyjplogo.png"
              alt={siteConfig.name}
              width={56}
              height={56}
              className="w-14 h-14 object-contain"
              priority
            />
            <div>
              <span className="text-xl font-heading font-bold text-primary">
                {siteConfig.name}
              </span>
              <p className="text-xs text-gray-500">{siteConfig.tagline}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() =>
                  link.children && setOpenDropdown(link.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-dark hover:text-primary transition-colors rounded-md hover:bg-warm-gray"
                >
                  {link.label}
                  {link.children && (
                    <svg
                      className="inline-block w-3 h-3 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] border border-gray-100">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-dark hover:text-primary hover:bg-warm-gray transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I'd like to enroll in a course!")}`}
              target="_blank"
              className="ml-4 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary-dark transition-colors"
            >
              Enroll Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-dark hover:text-primary"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-dark hover:text-primary hover:bg-warm-gray rounded-md"
                >
                  {link.label}
                </Link>
                {link.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    className="block pl-8 pr-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-warm-gray rounded-md"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I'd like to enroll!")}`}
              target="_blank"
              onClick={() => setMobileOpen(false)}
              className="block mx-3 mt-3 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-md text-center hover:bg-primary-dark"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
