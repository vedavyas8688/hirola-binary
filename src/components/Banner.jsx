import { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { bannerSlides } from "../data/siteData";

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const total = bannerSlides.length;

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + total) % total),
    [total]
  );
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full mt-16 md:mt-20 bg-luxury-green-dark overflow-hidden aspect-[208/299] md:aspect-auto md:h-[75svh] lg:h-[calc(100vh-5rem)]">

      {/* ── Slides (same images on mobile + desktop, shown 100% full) ── */}
      <div className="absolute inset-0">
        {bannerSlides.map((slide, i) => (
          <img
            key={i}
            src={slide.image}
            alt={slide.alt}
            draggable="false"
            loading={i === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-contain lg:object-cover transition-opacity duration-700 ease-in-out ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* ── Prev arrow ── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-luxury-green/70 md:bg-luxury-green/80 border border-luxury-gold/50 md:border-luxury-gold/60 hover:bg-luxury-green-dark/80 transition-colors"
      >
        <FaChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-luxury-gold" />
      </button>

      {/* ── Next arrow ── */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-luxury-green/70 md:bg-luxury-green/80 border border-luxury-gold/50 md:border-luxury-gold/60 hover:bg-luxury-green-dark/80 transition-colors"
      >
        <FaChevronRight className="w-5 h-5 md:w-6 md:h-6 text-luxury-gold" />
      </button>

      {/* ── Dots ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {bannerSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === current
                ? "bg-luxury-gold w-6"
                : "bg-white/50 w-2 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

    </section>
  );
}