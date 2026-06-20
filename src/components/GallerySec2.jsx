import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const PLACEHOLDER_PHOTO =
  "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22%23e9e5dc%22/%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%23968c7c%22%20stroke-opacity%3D%220.28%22%20stroke-width%3D%226%22%3E%3Crect%20x%3D%22510%22%20y%3D%22336%22%20width%3D%22180%22%20height%3D%22128%22%20rx%3D%2214%22/%3E%3Ccircle%20cx%3D%22545%22%20cy%3D%22382%22%20r%3D%2218%22/%3E%3C/g%3E%3Cpolygon%20points%3D%22530%2C454%20588%2C394%20630%2C430%20672%2C388%20672%2C454%22%20fill%3D%22%23968c7c%22%20fill-opacity%3D%220.22%22/%3E%3C/svg%3E";

const GALLERY_TITLES = [
  "Large Balconies",
  "Central Landscape Garden",
  "Community Spine Walkway",
  "Skating Rink",
  "Walking Trail",
  "Leisure Court",
  "Community Plaza",
  "Wellness Garden",
  "Avenue Plantation",
  "Main Swimming Pool",
  "Yoga Court",
  "Walking Trail",
  "Butterfly Garden",
  "Meditation Court",
  "Tower Lobby Drop-Off",
  "Sky Cinema Terrace",
  "Premium Pool Lounge",
];

const GALLERY_ITEMS = GALLERY_TITLES.map((title, index) => ({
  id: index,
  title,
  image: PLACEHOLDER_PHOTO,
}));

const INITIAL_VISIBLE = 9;
const LOAD_STEP = 6;

const GallerySec2 = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const visibleItems = GALLERY_ITEMS.slice(0, visibleCount);
  const hasMore = visibleCount < GALLERY_ITEMS.length;
  const activeItem = lightboxIndex !== null ? GALLERY_ITEMS[lightboxIndex] : null;

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () =>
    setLightboxIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  const showNext = () =>
    setLightboxIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);

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
      className="relative py-10 md:py-20 lg:py-24 overflow-hidden"
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
        <div className="text-center mb-8 md:mb-12 lg:mb-16 px-2">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-luxury-gold uppercase">
            THE ESSENCE OF PROJECT 4
          </h2>
          <p className="mt-4 max-w-3xl mx-auto font-sans text-sm sm:text-base md:text-lg text-foreground-green">
            Explore every angle of your future community through a curated
            visual journey—from grand entrances and landscaped avenues to
            vibrant amenity zones and serene interiors.
          </p>
        </div>

        {/* ── 3-column grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {visibleItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-2xl shadow-lg border-2 border-luxury-gold/70 hover:border-luxury-gold transition-all duration-300 h-56 sm:h-64 md:h-72 lg:h-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="w-full px-3 pb-3 text-left font-serif text-sm md:text-base text-cream-text">
                  {item.title}
                </p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-cream-text/30 flex items-center justify-center">
                  <ZoomIn className="w-5 h-5 text-cream-text" />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* ── Load more ── */}
        {hasMore && (
          <div className="flex justify-center mt-8 md:mt-12">
            <button
              type="button"
              onClick={() =>
                setVisibleCount((prev) => Math.min(prev + LOAD_STEP, GALLERY_ITEMS.length))
              }
              className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-sm md:text-base bg-luxury-green text-white hover:bg-luxury-green/90 transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* ── Lightbox ── */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute top-4 right-4 md:top-6 md:right-6 text-cream-text hover:text-luxury-gold transition-colors"
          >
            <X className="w-7 h-7 md:w-8 md:h-8" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 bg-cream-text/10 hover:bg-luxury-gold text-cream-text hover:text-foreground-green border border-luxury-gold/60 rounded-full p-2 md:p-3 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div
            className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl border-2 border-luxury-gold"
            />
            <p className="mt-4 font-serif text-base md:text-xl text-cream-text text-center">
              {activeItem.title}
            </p>
            <p className="mt-1 font-sans text-xs md:text-sm text-cream-text/70">
              {lightboxIndex + 1} / {GALLERY_ITEMS.length}
            </p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 bg-cream-text/10 hover:bg-luxury-gold text-cream-text hover:text-foreground-green border border-luxury-gold/60 rounded-full p-2 md:p-3 transition-colors"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySec2;