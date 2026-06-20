import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import twentythree from "../assets/images/23.jpg";
import twentyfour from "../assets/images/24.jpg";
import twentyfive from "../assets/images/25.jpg";
import twentysix from "../assets/images/26.jpg";
import twentyseven from "../assets/images/27.jpg";
import twentyeight from "../assets/images/28.jpg";
import twentynine from "../assets/images/29.jpg";

const UNIT_PLANS = [
  { id: 1, bedType: "2 BED", image: twentythree },
  { id: 2, bedType: "2 BED", image: twentyfour },
  { id: 3, bedType: "2 BED", image: twentyfive },
  { id: 4, bedType: "2 BED", image: twentysix },
  { id: 5, bedType: "3 BED", image: twentyseven },
  { id: 6, bedType: "3 BED", image: twentyeight },
  { id: 7, bedType: "3 BED", image: twentynine },
];

const FILTERS = ["All", "2 BED", "3 BED"];

const FloorPlanSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [revealed, setRevealed] = useState({});

  const filteredUnits =
    activeFilter === "All"
      ? UNIT_PLANS
      : UNIT_PLANS.filter((u) => u.bedType === activeFilter);

  const slidesCount = Math.max(1, Math.ceil(filteredUnits.length / 2));
  const visibleUnits = filteredUnits.slice(currentSlide * 2, currentSlide * 2 + 2);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentSlide(0);
  };

  const goPrev = () => setCurrentSlide((p) => (p - 1 + slidesCount) % slidesCount);
  const goNext = () => setCurrentSlide((p) => (p + 1) % slidesCount);

  return (
    <section
      className="py-16 md:py-24 overflow-hidden bg-bg-cream"
      style={{
        backgroundImage:
          'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGUlEQVR4nGPkMVRlIAUwkaR6VMOohiGlAQBfYgCCrIcb8AAAAABJRU5ErkJggg==")',
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">

        {/* ── Heading ── */}
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-xs tracking-[0.3em] text-luxury-gold uppercase mb-3">
            Floor Plans
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-white">
            THE BLUEPRINT OF{" "}
            <span className="text-luxury-gold">YOUR DREAMS</span>
          </h2>
          <div className="h-px w-14 bg-luxury-gold/50 mx-auto mt-5 mb-5" />
          <p className="font-sans text-sm md:text-base text-muted-sage max-w-2xl mx-auto leading-relaxed">
            Expertly crafted layouts designed to maximise space, light and
            comfort — discover a home that speaks to your lifestyle.
          </p>
        </div>

        {/* ── Filter pills ── */}
        <div className="flex justify-center gap-3 mb-10 md:mb-14">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => handleFilterChange(filter)}
                className={`px-7 py-2.5 rounded-full text-sm font-sans tracking-widest uppercase transition-all duration-300 border ${
                  isActive
                    ? "bg-luxury-gold text-foreground-green border-luxury-gold"
                    : "bg-transparent text-luxury-gold border-luxury-gold/40 hover:border-luxury-gold/80"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* ── Cards + Arrows ── */}
        <div className="relative max-w-5xl mx-auto flex items-center gap-5">

          {/* Left arrow */}
          {slidesCount > 1 && (
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous"
              className="shrink-0 w-10 h-10 rounded-full border border-luxury-gold/40 text-luxury-gold flex items-center justify-center hover:bg-luxury-gold hover:text-foreground-green transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Cards */}
          <div className="flex-1 grid gap-6 md:gap-8 md:grid-cols-2">
            {visibleUnits.map((unit) => {
              const isRevealed = revealed[unit.id];
              return (
                <div
                  key={unit.id}
                  className="group relative overflow-hidden rounded-2xl border border-luxury-gold/15"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={unit.image}
                      alt={unit.bedType}
                      className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                        isRevealed ? "blur-none" : "blur-md scale-105"
                      }`}
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Reveal button */}
                    {!isRevealed && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          type="button"
                          onClick={() =>
                            setRevealed((p) => ({ ...p, [unit.id]: true }))
                          }
                          className="rounded-full border border-luxury-gold text-luxury-gold text-xs tracking-[0.2em] uppercase px-7 py-3 bg-black/30 backdrop-blur-sm hover:bg-luxury-gold hover:text-foreground-green transition-all duration-300"
                        >
                          Click to View
                        </button>
                      </div>
                    )}

                    {/* BED type label */}
                    <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
                      <p className="font-serif text-lg md:text-xl text-luxury-gold leading-snug">
                        {unit.bedType}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right arrow */}
          {slidesCount > 1 && (
            <button
              type="button"
              onClick={goNext}
              aria-label="Next"
              className="shrink-0 w-10 h-10 rounded-full border border-luxury-gold/40 text-luxury-gold flex items-center justify-center hover:bg-luxury-gold hover:text-foreground-green transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

        </div>

        {/* ── Pagination dots ── */}
        {slidesCount > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: slidesCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentSlide(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === i
                    ? "bg-luxury-gold w-8"
                    : "bg-luxury-gold/25 w-4 hover:bg-luxury-gold/50"
                }`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default FloorPlanSection;