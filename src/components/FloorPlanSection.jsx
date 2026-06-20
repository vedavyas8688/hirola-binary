import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PLACEHOLDER_PLAN =
  "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22%23e9e5dc%22/%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%23968c7c%22%20stroke-opacity%3D%220.28%22%20stroke-width%3D%226%22%3E%3Crect%20x%3D%22510%22%20y%3D%22336%22%20width%3D%22180%22%20height%3D%22128%22%20rx%3D%2214%22/%3E%3Ccircle%20cx%3D%22545%22%20cy%3D%22382%22%20r%3D%2218%22/%3E%3C/g%3E%3Cpolygon%20points%3D%22530%2C454%20588%2C394%20630%2C430%20672%2C388%20672%2C454%22%20fill%3D%22%23968c7c%22%20fill-opacity%3D%220.22%22/%3E%3C/svg%3E";

 const UNIT_PLANS = [
  {
    id: 1,
    bedType: "2 BED",
    label: "2 BED – Unit 107 (West Entry)",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    bedType: "2 BED",
    label: "2 BED – Unit 109 (West Entry)",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    bedType: "2 BED",
    label: "2 BED – Unit 203 (East Entry)",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    bedType: "2 BED",
    label: "2 BED – Unit 211 (East Entry)",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    bedType: "3 BED",
    label: "3 BED – Unit 301 (West Entry)",
    image: "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    bedType: "3 BED",
    label: "3 BED – Unit 305 (East Entry)",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 7,
    bedType: "3 BED",
    label: "3 BED – Unit 410 (West Entry)",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 8,
    bedType: "3 BED",
    label: "3 BED – Unit 414 (East Entry)",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
];

const FILTERS = ["All", "2 BED", "3 BED"];

const FloorPlanSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [revealed, setRevealed] = useState({});

  const filteredUnits =
    activeFilter === "All"
      ? UNIT_PLANS
      : UNIT_PLANS.filter((unit) => unit.bedType === activeFilter);

  const slidesCount = Math.max(1, Math.ceil(filteredUnits.length / 2));
  const visibleUnits = filteredUnits.slice(currentSlide * 2, currentSlide * 2 + 2);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentSlide(0);
  };

  const goToSlide = (index) => setCurrentSlide(index);
  const goPrev = () => setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);
  const goNext = () => setCurrentSlide((prev) => (prev + 1) % slidesCount);

  const revealUnit = (id) => setRevealed((prev) => ({ ...prev, [id]: true }));

  return (
    <section
      className="py-10 md:py-20 lg:py-24 overflow-hidden"
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
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-white mb-4">
            THE BLUEPRINT OF <span className="text-luxury-gold">YOUR DREAMS</span>
          </h2>
          <p className="font-sans text-sm sm:text-base md:text-lg text-muted-sage max-w-4xl mx-auto leading-relaxed">
            Explore the details of Project 4's expertly crafted unit plans, each
            layout thoughtfully designed to maximise space, light and comfort.
            Discover a home that speaks to you and resonates with your unique
            lifestyle.
          </p>
        </div>

        {/* ── Filter buttons ── */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12 lg:mb-16 px-2">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => handleFilterChange(filter)}
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap h-10 px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all ${
                  isActive
                    ? "bg-luxury-green text-white"
                    : "bg-bright-gold text-luxury-green border-2 border-luxury-green hover:bg-bright-gold"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* ── Carousel ── */}
        <div className="space-y-6 md:space-y-8">
          <div className="relative max-w-6xl mx-auto">
            <div className="grid gap-6 md:gap-10 md:grid-cols-2">
              {visibleUnits.map((unit) => {
                const isRevealed = revealed[unit.id];
                return (
                  <div key={unit.id} className="space-y-3 md:space-y-4">
                    <div className="relative">
                      <img
                        src={unit.image}
                        alt={unit.label}
                        className={`w-full h-auto object-contain rounded-lg transition-all ${
                          isRevealed ? "" : "blur-sm opacity-90"
                        }`}
                      />
                      {!isRevealed && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button
                            type="button"
                            onClick={() => revealUnit(unit.id)}
                            className="bg-luxury-green text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-luxury-green/90 transition-colors"
                          >
                            Click to View
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="text-center space-y-1">
                      <h3 className="font-serif text-xl md:text-2xl font-bold "
                      style={{ color: "var(--color-luxury-gold)" }}
>
                        {unit.label}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>

            {slidesCount > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous plans"
                  className="flex absolute -left-4 sm:-left-6 lg:-left-12 top-1/2 -translate-y-1/2 bg-card-white text-luxury-green border border-luxury-green rounded-full p-2 sm:p-3 hover:bg-luxury-green hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next plans"
                  className="flex absolute -right-4 sm:-right-6 lg:-right-12 top-1/2 -translate-y-1/2 bg-card-white text-luxury-green border border-luxury-green rounded-full p-2 sm:p-3 hover:bg-luxury-green hover:text-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* ── Pagination dots ── */}
          {slidesCount > 1 && (
            <div className="flex items-center justify-center gap-2">
              {Array.from({ length: slidesCount }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === index
                      ? "bg-luxury-green w-6"
                      : "bg-luxury-green/30 w-3 hover:bg-luxury-green/60"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FloorPlanSection;