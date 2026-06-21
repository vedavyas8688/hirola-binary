import { Link } from "react-router-dom";
import { unitPlans } from "../data/siteData";

export default function UnitPlansSection() {
  return (
    <section
      className="py-16 md:py-24 overflow-hidden bg-luxury-green-dark"
      style={{
        backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGUlEQVR4nGPkMVRlIAUwkaR6VMOohiGlAQBfYgCCrIcb8AAAAABJRU5ErkJggg==")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">

        {/* ── Heading ── */}
        <div className="text-center mb-12 md:mb-20">
          <p className="font-sans text-xs md:text-sm tracking-[0.3em] text-luxury-gold uppercase mb-3">
            Floor Plans
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-white">
            HOMES DESIGNED FOR{" "}
            <span className="text-luxury-gold">ELEVATED LIVING</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-muted-sage max-w-2xl mx-auto mt-5 px-2 leading-relaxed">
            Thoughtfully planned 2 &amp; 3 BHK layouts that maximize space,
            light, and functionality
          </p>
        </div>

        {/* ── Unit plan rows ── */}
        <div className="space-y-16 md:space-y-28">
          {unitPlans.map((unit, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={unit.type}
                className="relative flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-10 lg:gap-0"
              >
                {/* Gold vertical divider */}
                <div className="hidden lg:flex absolute inset-y-0 left-1/2 -translate-x-1/2 flex-col items-center gap-0 z-10">
                  <div className="flex-1 w-px bg-gradient-to-b from-transparent via-luxury-gold/50 to-transparent" />
                  <div className="w-2 h-2 rounded-full border border-luxury-gold/60 bg-bg-cream" />
                  <div className="flex-1 w-px bg-gradient-to-b from-transparent via-luxury-gold/50 to-transparent" />
                </div>

                {/* ── Text side ── */}
                <div
                  className={`flex justify-center order-1 lg:px-10 xl:px-16 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="max-w-md w-full text-center lg:text-left">

                    {/* Logo */}
                    <img
                      src={unit.logo}
                      alt="Project logo"
                      className="h-10 md:h-12 lg:h-14 mx-auto lg:mx-0 mb-5"
                    />

                    {/* Type + size badge */}
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className="font-serif text-xl md:text-2xl lg:text-3xl text-white tracking-wide">
                        {unit.type}
                      </span>
                      {unit.size && (
                        <span className="font-sans text-xs md:text-sm text-luxury-gold tracking-widest uppercase">
                          {unit.size}
                        </span>
                      )}
                    </div>

                    {/* Starting price */}
                    {unit.price && (
                      <p className="font-serif text-2xl md:text-3xl text-luxury-gold mb-4">
                        {unit.price}
                        <span className="font-sans text-xs text-muted-sage tracking-widest uppercase ml-2">
                          Starting
                        </span>
                      </p>
                    )}

                    {/* Description */}
                    <p className="font-sans text-sm md:text-base lg:text-lg text-muted-sage leading-relaxed">
                      {unit.description}
                    </p>

                    {/* Specs row */}
                    {unit.specs && (
                      <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
                        {unit.specs.map((spec) => (
                          <div key={spec.label} className="text-center lg:text-left">
                            <p className="font-serif text-lg text-luxury-gold">{spec.value}</p>
                            <p className="font-sans text-xs text-muted-sage tracking-wider uppercase mt-0.5">{spec.label}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* CTA */}
                    <Link
                      to={unit.priceLink || "/contact"}
                      className="mt-8 group relative inline-flex items-center gap-3 border border-luxury-gold/60 hover:border-luxury-gold text-luxury-gold text-xs tracking-[0.2em] uppercase font-sans px-7 py-3 transition-all duration-300 hover:bg-luxury-gold/10"
                    >
                      Check Prices
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>

                  </div>
                </div>

                {/* ── Image side ── */}
                <div
                  className={`order-2 w-full flex justify-center lg:px-10 xl:px-16 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative w-full max-w-[500px]">

                    {/* Corner accent — top left */}
                    <div className="absolute -top-3 -left-3 w-10 h-10 border-t border-l border-luxury-gold/50 z-10" />
                    {/* Corner accent — bottom right */}
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b border-r border-luxury-gold/50 z-10" />

                    {/* Image */}
                    <div className="aspect-square overflow-hidden rounded-sm">
                      <img
                        src={unit.floorPlan}
                        alt={`${unit.type} floor plan`}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-luxury-cream/20" />
                    </div>

                    {/* Floating label */}
                    <div className="absolute bottom-4 left-4 bg-bg-cream/90 backdrop-blur-sm px-4 py-2 border border-luxury-gold/30">
                      <p className="font-sans text-xs tracking-[0.2em] uppercase text-luxury-gold">
                        {unit.type}
                        {unit.size ? ` · ${unit.size}` : ""}
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}