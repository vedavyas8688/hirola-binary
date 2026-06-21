import { useState } from "react";
import { locationSection } from "../data/siteData";
import Reveal from "./Reveal";

export default function LocationSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const { eyebrow, title, intro, image, categories } = locationSection;

  return (
    <section className="relative overflow-hidden py-12 md:py-16 lg:py-0 bg-luxury-green-dark">
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8 lg:px-12 h-full">
        <div className="grid gap-8 md:gap-10 lg:gap-0 lg:grid-cols-2 items-start relative h-full">

          {/* ── Left: Text + Accordion ── */}
          <div className="w-full py-4 md:py-6 lg:py-12 relative z-20">
            <Reveal variant="left" className="text-left mb-6 md:mb-8">
              {/* Eyebrow */}
              <div className="mb-3 flex items-center gap-3">
                <span className="block h-px w-8 bg-luxury-gold" />
                <span className="font-serif text-[11px] font-semibold uppercase tracking-[0.28em] text-luxury-gold">
                  {eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-wide text-luxury-gold">
                {title}
              </h2>
              <p className="font-sans text-sm md:text-base text-cream-text/70 max-w-2xl mt-3 md:mt-4 leading-relaxed">
                {intro}
              </p>
            </Reveal>

            {/* Accordion */}
            <div className="space-y-0">
              {categories.map((cat, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={cat.label} className="relative">
                    {/* Gold accent bar when open */}
                    <span
                      className={`absolute left-0 top-0 h-[58px] w-0.5 bg-luxury-gold transition-opacity duration-300 ${
                        isOpen ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      className={`group w-full flex items-center justify-between text-left py-4 md:py-4.5 border-b border-cream-text/15 pl-4 pr-2 transition-colors ${
                        isOpen ? "" : "hover:bg-cream-text/[0.03]"
                      }`}
                    >
                      <span
                        className={`font-serif text-base md:text-lg font-normal tracking-wide transition-colors ${
                          isOpen ? "text-luxury-gold" : "text-cream-text group-hover:text-luxury-gold"
                        }`}
                      >
                        {cat.label}
                      </span>
                      <span
                        className="text-xl md:text-2xl text-cream-text/70 leading-none select-none transition-transform duration-300 flex-shrink-0"
                        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {cat.items.length > 0 ? (
                        <ul className="mt-3 mb-5 pl-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                          {cat.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 font-sans text-xs sm:text-sm md:text-[0.95rem] text-cream-text/85 leading-relaxed"
                            >
                              <span className="mt-1.5 h-1 w-1 rounded-full bg-luxury-gold/70 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-2 mb-4 pl-4 font-sans text-sm text-cream-text/50 italic">
                          Coming soon…
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Right: Location Image (layout unchanged) ── */}
          <div className="w-full flex items-start justify-end lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full pb-8 lg:pb-0">
            <img
              src={image}
              alt="Project 4 Location"
              className="w-full h-full object-cover rounded-md lg:rounded-none"
            />
          </div>

        </div>
      </div>
    </section>
  );
}