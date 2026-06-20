import { useState, useEffect, useCallback } from "react";
import { galleryCategories } from "../data/siteData";

export default function GallerySection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % galleryCategories.length);
  }, []);

  // Auto-advance on mobile
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-24 bg-bg-cream overflow-hidden">
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-relaxed text-foreground-green">
            A GLIMPSE INTO THE LIFE YOU{" "}
            <span className="text-luxury-gold">DESERVE</span>
          </h2>
        </div>

        {/* ── Mobile: slider ── */}
        <div className="md:hidden relative">
          <div className="relative overflow-hidden">
            {galleryCategories.map((item, i) => (
              <div
                key={item.label}
                className={`transition-opacity duration-700 ${
                  i === current
                    ? "opacity-100"
                    : "opacity-0 absolute inset-0"
                }`}
              >
                <div className="relative">
                  {/* Number + label */}
                  <div className="flex items-end gap-2 mb-2 select-none">
                    <span className="font-serif text-7xl leading-none text-luxury-green/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-sans text-sm text-luxury-green pb-1">
                      {item.label}
                    </span>
                  </div>
                  {/* Image */}
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile dots */}
          <div className="flex justify-center gap-2 mt-4">
            {galleryCategories.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === current
                    ? "bg-luxury-green w-6"
                    : "bg-luxury-green/30 w-2"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop: staggered 3-column grid ── */}
        <div className="hidden md:grid gap-8 md:grid-cols-3">
          {galleryCategories.map((item, i) => (
            <div
              key={item.label}
              className={`cursor-pointer ${
                i === 1 ? "md:translate-y-6 lg:translate-y-12" : ""
              }`}
            >
              {/* Number + label */}
              <div className="flex items-end gap-2 mb-3 select-none">
                <span className="font-serif text-8xl leading-none text-luxury-green/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-sans text-base text-luxury-green pb-2">
                  {item.label}
                </span>
              </div>
              {/* Image with hover zoom */}
              <div className="overflow-hidden rounded-md group">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}