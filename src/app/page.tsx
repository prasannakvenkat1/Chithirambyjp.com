"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { heroBanners, courses, galleryItems, testimonials, siteConfig } from "@/data/content";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <FeaturedCourses />
      <GalleryPreview />
      {/* <TestimonialsSection /> */}
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
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <PlaceholderImage
          text=""
          className="!rounded-none h-full !aspect-auto"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-dark/70 to-dark/30" />
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 leading-tight">
            {banner.title}
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            {banner.subtitle}
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href={banner.cta.href}
              className="px-8 py-3 bg-accent text-dark font-semibold rounded-md hover:bg-accent-light transition-colors text-lg"
            >
              {banner.cta.text}
            </Link>
            <Link
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I'd like to book a free trial class!")}`}
              target="_blank"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-dark transition-colors text-lg"
            >
              Free Trial Class
            </Link>
          </div>
        </div>
      </div>
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {heroBanners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-accent w-8" : "bg-white/50 hover:bg-white/80"
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-6">
            Welcome to {siteConfig.name}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {siteConfig.description} We believe that every individual has an
            innate creative potential waiting to be unlocked. Our experienced
            faculty and thoughtfully designed curriculum provide the perfect
            environment for artistic growth.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            Learn More About Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturedCourses() {
  const featured = courses.slice(0, 4);

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-4">
            Our Courses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our range of art courses designed for all ages and skill
            levels
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <PlaceholderImage
                text={course.title}
                className="group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-dark mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {course.shortDescription}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                  <span className="px-2 py-1 bg-warm-gray rounded">
                    {course.ageGroup} yrs
                  </span>
                  <span className="px-2 py-1 bg-warm-gray rounded">
                    {course.duration}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition-colors"
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-4">
            Our Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A glimpse of the beautiful artwork created by our faculty and
            students
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {preview.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <PlaceholderImage
                text={item.title}
                aspect="square"
                className="group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/50 transition-colors flex items-end">
                <p className="text-white text-sm font-medium p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            View Full Gallery
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section className="py-20 bg-secondary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-12">
          What Our Students Say
        </h2>
        <div className="min-h-[200px] flex flex-col items-center justify-center">
          <svg className="w-10 h-10 text-accent mb-6 opacity-60" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
          </svg>
          <blockquote className="text-xl sm:text-2xl font-heading leading-relaxed mb-6 italic">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div>
            <p className="font-semibold text-accent">{t.name}</p>
            <p className="text-white/70 text-sm">{t.course}</p>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? "bg-accent w-6" : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-6">
          Ready to Begin Your Artistic Journey?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join our community of passionate artists. Book a free trial class
          today and discover the artist within you.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I'd like to enroll in a course at Chithiram Art School!")}`}
            target="_blank"
            className="px-8 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition-colors text-lg"
          >
            Enroll Now
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-white transition-colors text-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
