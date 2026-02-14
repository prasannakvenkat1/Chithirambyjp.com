"use client";

import { useState } from "react";
import { galleryItems } from "@/data/content";
import PlaceholderImage from "@/components/PlaceholderImage";

const categories = [
  { id: "all", label: "All" },
  { id: "faculty", label: "Faculty Works" },
  { id: "student", label: "Student Works" },
  { id: "event", label: "Events" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxItem, setLightboxItem] = useState<number | null>(null);

  const filtered =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const openLightbox = (id: number) => setLightboxItem(id);
  const closeLightbox = () => setLightboxItem(null);

  const currentIndex = filtered.findIndex((item) => item.id === lightboxItem);
  const navigateLightbox = (direction: "prev" | "next") => {
    if (currentIndex === -1) return;
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % filtered.length
        : (currentIndex - 1 + filtered.length) % filtered.length;
    setLightboxItem(filtered[newIndex].id);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-primary relative overflow-hidden py-24">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-divider !bg-secondary" />
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Gallery
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Explore artwork created by our talented faculty and students
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-[76px] z-40 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat.id
                    ? "bg-primary text-white shadow-sm"
                    : "bg-warm-gray text-dark/70 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => openLightbox(item.id)}
                className="group relative overflow-hidden rounded-xl text-left card-hover"
              >
                <PlaceholderImage
                  text={item.title}
                  aspect="square"
                  className="group-hover:scale-110 transition-transform duration-700 !rounded-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <p className="text-white text-sm font-medium">
                      {item.title}
                    </p>
                    <p className="text-white/60 text-xs capitalize">
                      {item.category}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 py-16">
              No items found in this category.
            </p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxItem !== null && (
        <div
          className="fixed inset-0 z-[60] bg-dark/95 flex items-center justify-center backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("prev");
            }}
            className="absolute left-4 text-white/50 hover:text-white transition-colors"
            aria-label="Previous"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            className="max-w-4xl max-h-[80vh] mx-auto px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <PlaceholderImage
              text={
                filtered.find((item) => item.id === lightboxItem)?.title || ""
              }
              className="!aspect-auto min-h-[50vh] shadow-2xl rounded-xl"
            />
            <p className="text-white text-center mt-4 font-heading text-lg">
              {filtered.find((item) => item.id === lightboxItem)?.title}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("next");
            }}
            className="absolute right-4 text-white/50 hover:text-white transition-colors"
            aria-label="Next"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
