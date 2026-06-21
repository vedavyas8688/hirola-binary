import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

import banner9 from "../assets/images/banner9.jpg";
import banner10 from "../assets/images/banner10.jpg";
import banner11 from "../assets/images/banner11.jpg";
import banner12 from "../assets/images/banner12.jpg";

import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";
import img7 from "../assets/images/7.jpg";
import img8 from "../assets/images/8.jpg";
import img9 from "../assets/images/9.jpg";
import img10 from "../assets/images/10.jpg";
import img11 from "../assets/images/11.jpg";
import img12 from "../assets/images/12.jpg";
import img13 from "../assets/images/13.jpg";
import img14 from "../assets/images/14.jpg";
import img15 from "../assets/images/15.jpg";
import img16 from "../assets/images/16.jpg";
import img17 from "../assets/images/17.jpg";
import img18 from "../assets/images/18.jpg";
import img19 from "../assets/images/19.jpg";
import img20 from "../assets/images/20.jpg";
import img21 from "../assets/images/21.jpg";
import img22 from "../assets/images/22.jpg";
import img23 from "../assets/images/23.jpg";
import img24 from "../assets/images/24.jpg";
import img25 from "../assets/images/25.jpg";
import img26 from "../assets/images/26.jpg";
import img27 from "../assets/images/27.jpg";
import img28 from "../assets/images/28.jpg";
import img29 from "../assets/images/29.jpg";

// const GALLERY_TITLES = [
//   "Large Balconies",
//   "Central Landscape Garden",
//   "Community Spine Walkway",
//   "Skating Rink",
//   "Walking Trail",
//   "Leisure Court",
//   "Community Plaza",
//   "Wellness Garden",
//   "Avenue Plantation",
//   "Main Swimming Pool",
//   "Yoga Court",
//   "Walking Trail",
//   "Butterfly Garden",
//   "Meditation Court",
//   "Tower Lobby Drop-Off",
//   "Sky Cinema Terrace",
//   "Premium Pool Lounge",
//   "Clubhouse Entrance",
//   "Landscape Avenue",
//   "Children's Play Area",
//   "Rooftop Terrace",
//   "Indoor Gym",
//   "2 BED Floor Plan",
//   "2 BED Floor Plan",
//   "2 BED Floor Plan",
//   "2 BED Floor Plan",
//   "3 BED Floor Plan",
//   "3 BED Floor Plan",
//   "3 BED Floor Plan",
// ];

const IMAGES = [
  banner9,
  banner10,
  banner11,
  banner12,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
];

// const GALLERY_ITEMS = IMAGES.map((image, index) => ({
//   id: index,
//   title: GALLERY_TITLES[index] ?? `Gallery ${index + 1}`,
//   image,
// }));

const INITIAL_VISIBLE = 9;
const LOAD_STEP = 6;

const GallerySec2 = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const visibleItems = IMAGES.slice(0, visibleCount);
  const hasMore = visibleCount < IMAGES.length;
  const activeImage = lightboxIndex !== null ? IMAGES[lightboxIndex] : null;

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () =>
    setLightboxIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  const showNext = () => setLightboxIndex((prev) => (prev + 1) % IMAGES.length);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden bg-bg-cream"
      style={{
        backgroundImage:
          'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGUlEQVR4nGPkMVRlIAUwkaR6VMOohiGlAQBfYgCCrIcb8AAAAABJRU5ErkJggg==")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
        {/* ── Heading ── */}
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-xs tracking-[0.3em] text-luxury-gold uppercase mb-3">
            Gallery
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-luxury-gold uppercase">
            THE ESSENCE OF PROJECT 4
          </h2>
          <div className="h-px w-14 bg-luxury-gold/50 mx-auto mt-5 mb-5" />
          <p className="font-sans text-sm md:text-base text-muted-sage max-w-2xl mx-auto leading-relaxed">
            Explore every angle of your future community through a curated
            visual journey — from grand entrances to serene interiors.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {visibleItems.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-2xl border border-luxury-gold/20 hover:border-luxury-gold/60 transition-all duration-300 h-56 sm:h-64 md:h-72 focus:outline-none"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Title (commented out for now) */}
              {false && (
                <div className="absolute bottom-0 left-0 right-0 px-4 py-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="font-serif text-sm md:text-base text-luxury-gold">
                    Gallery {index + 1}
                  </p>
                </div>
              )}

              {/* Zoom icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-11 h-11 rounded-full border border-luxury-gold/60 bg-black/30 backdrop-blur-sm flex items-center justify-center">
                  <ZoomIn className="w-4 h-4 text-luxury-gold" />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* ── Load more ── */}
        {hasMore && (
          <div className="flex justify-center mt-10 md:mt-14">
            <button
              type="button"
              onClick={() =>
                setVisibleCount((prev) =>
                  Math.min(prev + LOAD_STEP, IMAGES.length),
                )
              }
              className="group inline-flex items-center gap-3 rounded-full border border-luxury-gold/50 hover:border-luxury-gold text-luxury-gold text-xs tracking-[0.25em] uppercase font-sans px-10 py-3.5 transition-all duration-300 hover:bg-luxury-gold/10"
            >
              Load More
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </button>
          </div>
        )}
      </div>

      {/* ── Lightbox ── */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4 md:p-8"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute top-5 right-5 w-10 h-10 rounded-full border border-white/20 bg-white/10 hover:bg-luxury-gold hover:border-luxury-gold flex items-center justify-center text-white hover:text-foreground-green transition-all duration-300"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-luxury-gold/40 bg-black/40 text-luxury-gold hover:bg-luxury-gold hover:text-foreground-green flex items-center justify-center transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Image */}
          <div
            className="max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage}
              alt={`Gallery ${lightboxIndex + 1}`}
              className="max-h-[78vh] w-auto object-contain rounded-xl border border-luxury-gold/30"
            />
            {/* Title display is commented out for now */}
            {false && (
              <p className="mt-5 font-serif text-base md:text-lg text-luxury-gold text-center">
                Gallery {lightboxIndex + 1}
              </p>
            )}
            <p className="mt-1 font-sans text-xs text-white/40 tracking-widest">
              {lightboxIndex + 1} / {IMAGES.length}
            </p>
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-luxury-gold/40 bg-black/40 text-luxury-gold hover:bg-luxury-gold hover:text-foreground-green flex items-center justify-center transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySec2;
