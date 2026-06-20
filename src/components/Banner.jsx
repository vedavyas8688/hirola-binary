import { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight, FaDownload } from "react-icons/fa";
import { bannerSlides, bannerSlidesMobile, siteConfig } from "../data/siteData";


export default function Banner() {
  const [current, setCurrent] = useState(0);
  const total = bannerSlides.length;

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full mt-16 md:mt-20 bg-luxury-green-dark overflow-hidden h-[58vh] sm:h-[68vh] md:h-[75vh] lg:h-[calc(100vh-5rem)]">

      {/* ── Desktop slides ── */}
      <div className="absolute inset-0 hidden md:block">
        {bannerSlides.map((slide, i) => (
          <img
            key={i}
            src={slide.image}
            alt={slide.alt}
            draggable="false"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* ── Mobile slides ── */}
      <div className="absolute inset-0 md:hidden">
        {bannerSlidesMobile.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              draggable="false"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* Top gradient */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-luxury-green-dark/60 via-luxury-green-dark/30 to-transparent pointer-events-none" />

            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-luxury-green-dark/90 via-luxury-green-dark/50 to-transparent pointer-events-none" />
          </div>
        ))}

        {/* Mobile dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {bannerSlidesMobile.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === current ? "bg-luxury-gold w-6" : "bg-white/50 w-2 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Mobile prev arrow */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-luxury-green/60 border border-luxury-gold/40 flex items-center justify-center hover:bg-luxury-green-dark/80 transition-colors"
        >
          <FaChevronLeft className="w-5 h-5 text-luxury-gold" />
        </button>

        {/* Mobile next arrow */}
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-luxury-green/60 border border-luxury-gold/40 flex items-center justify-center hover:bg-luxury-green-dark/80 transition-colors"
        >
          <FaChevronRight className="w-5 h-5 text-luxury-gold" />
        </button>
      </div>

      {/* ── Desktop prev arrow ── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-luxury-green/80 border border-luxury-gold/60 items-center justify-center hover:bg-luxury-green-dark/80 transition-colors"
      >
        <FaChevronLeft className="w-6 h-6 text-luxury-gold" />
      </button>

      {/* ── Desktop next arrow ── */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-luxury-green/80 border border-luxury-gold/60 items-center justify-center hover:bg-luxury-green-dark/80 transition-colors"
      >
        <FaChevronRight className="w-6 h-6 text-luxury-gold" />
      </button>

      {/* ── Desktop dots ── */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 items-center gap-2">
        {bannerSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === current ? "bg-luxury-gold w-6" : "bg-white/50 w-2 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

    </section>
  );
}