"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { heroBanners, courses, galleryItems, siteConfig } from "@/data/content";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <FeaturedCourses />
      <GalleryPreview />
      <CTASection />
    </>
  );
}

function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroBanners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const banner = heroBanners[current];

  return (
    <section className="relative h-[80vh] min-h-[550px] overflow-hidden bg-primary-dark">
      {/* Background */}
      <div className="absolute inset-0">
        <PlaceholderImage
          text=""
          aspect="hero"
          className="!rounded-none h-full !aspect-auto"
        />
      </div>
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <div className="w-16 h-1 bg-secondary mb-6 rounded-full" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-[1.15]">
            {banner.title}
          </h1>
          <p className="text-lg sm:text-xl text-white/85 mb-10 leading-relaxed max-w-lg">
            {banner.subtitle}
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href={banner.cta.href}
              className="px-8 py-3.5 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-light transition-colors text-base shadow-lg shadow-secondary/25"
            >
              {banner.cta.text}
            </Link>
            <Link
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I'd like to book a free trial class!")}`}
              target="_blank"
              className="px-8 py-3.5 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white hover:text-primary-dark transition-colors text-base backdrop-blur-sm"
            >
              Free Trial Class
            </Link>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {heroBanners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-secondary w-8"
                : "bg-white/40 w-2 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function WelcomeSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/founder.jpeg"
                alt="Founder JP at Chithiram Art School"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Text side */}
          <div>
            <div className="w-12 h-1 bg-secondary mb-6 rounded-full" />
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-6 leading-tight">
              Welcome to {siteConfig.name}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {siteConfig.description} We believe that every individual has an
              innate creative potential waiting to be unlocked. Our experienced
              faculty and thoughtfully designed curriculum provide the perfect
              environment for artistic growth.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              From young children discovering the joy of colors to adults
              mastering fine art techniques, Chithiram offers a nurturing space
              where creativity flourishes.
            </p>
            <Link
              href="/about"
              className="link-underline text-primary font-semibold hover:text-primary-dark transition-colors inline-flex items-center gap-2"
            >
              Learn More About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedCourses() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-divider" />
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-4">
            Our Courses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our range of art courses designed for all ages and skill levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="group bg-white rounded-2xl overflow-hidden card-hover shadow-sm"
            >
              <div className="overflow-hidden">
                <PlaceholderImage
                  text={course.title}
                  className="group-hover:scale-105 transition-transform duration-500 !rounded-none"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {course.ageGroup} yrs
                  </span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                    {course.duration}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-dark mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                  {course.shortDescription}
                </p>
                <div className="mt-4 flex items-center text-primary font-medium text-sm">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}

function GalleryPreview() {
  const preview = galleryItems.slice(0, 8);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-divider" />
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-4">
            Our Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A glimpse of the beautiful artwork created by our faculty and students
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {preview.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <PlaceholderImage
                text={item.title}
                aspect={index === 0 || index === 5 ? "square" : "square"}
                className="group-hover:scale-110 transition-transform duration-700 !rounded-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white text-sm font-medium p-4">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="link-underline inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            View Full Gallery
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
          Ready to Begin Your Artistic Journey?
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join our community of passionate artists. Book a free trial class
          today and discover the artist within you.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I'd like to enroll in a course at Chithiram Art School!")}`}
            target="_blank"
            className="px-8 py-3.5 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-light transition-colors text-base shadow-lg shadow-black/20"
          >
            Enroll Now
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors text-base"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
