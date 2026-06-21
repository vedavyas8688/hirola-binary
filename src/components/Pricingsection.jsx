import React from "react";
import Reveal from "./Reveal";

const PricingSection = () => {
  return (
    <section className="py-10 md:py-20 lg:py-24 overflow-hidden bg-bg-cream">
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">

        {/* ── Heading ── */}
        <Reveal className="text-center mb-8 md:mb-12 lg:mb-16 px-2">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-foreground-green">
            PRICING &amp; <span className="text-luxury-gold">CONFIGURATIONS</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto font-sans text-sm sm:text-base md:text-lg text-muted-sage">
            Ultra-luxury 2 &amp; 3 BHK residences at ₹8,499/sq.ft. — with a
            limited launch offer for the first 50 homes.
          </p>
        </Reveal>

        {/* ── BHK pricing cards ── */}
        <Reveal delay={100} className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
          <div className="bg-card-white rounded-lg shadow-lg p-6 md:p-8 text-center border border-luxury-gold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground-green mb-2">
              2 BHK
            </h3>
            <p className="font-sans text-sm md:text-base text-muted-sage mb-4">
              Ultra Luxury 2 BHK
            </p>
            <div className="font-serif text-3xl md:text-4xl text-luxury-gold mb-2">
              ₹95 Lakhs*
            </div>
            <p className="font-sans text-xs md:text-sm text-muted-sage uppercase tracking-widest">
              Starting Price
            </p>
          </div>

          <div className="bg-card-white rounded-lg shadow-lg p-6 md:p-8 text-center border border-luxury-gold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground-green mb-2">
              3 BHK
            </h3>
            <p className="font-sans text-sm md:text-base text-muted-sage mb-4">
              Ultra Luxury 3 BHK
            </p>
            <div className="font-serif text-3xl md:text-4xl text-luxury-gold mb-2">
              ₹1.35 Crore*
            </div>
            <p className="font-sans text-xs md:text-sm text-muted-sage uppercase tracking-widest">
              Starting Price
            </p>
          </div>
        </Reveal>

        {/* ── Quick stats ── */}
        <Reveal delay={150} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mt-8">
          <div className="bg-card-white rounded-lg shadow-lg p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="font-serif text-xl md:text-2xl text-luxury-gold mb-2">
              ₹8,499
            </div>
            <p className="font-sans text-xs md:text-sm text-muted-sage uppercase tracking-widest">
              Price / Sq.ft.
            </p>
          </div>

          <div className="bg-card-white rounded-lg shadow-lg p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="font-serif text-xl md:text-2xl text-luxury-gold mb-2">
              1117 + 507 Sq.ft.
            </div>
            <p className="font-sans text-xs md:text-sm text-muted-sage uppercase tracking-widest">
              Unit Sizes
            </p>
          </div>

          <div className="bg-card-white rounded-lg shadow-lg p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="font-serif text-xl md:text-2xl text-luxury-gold mb-2">
              Refundable
            </div>
            <p className="font-sans text-xs md:text-sm text-muted-sage uppercase tracking-widest">
              EOI
            </p>
          </div>
        </Reveal>

        {/* ── Disclaimer ── */}
        <p className="text-center font-sans text-xs md:text-sm text-muted-sage mt-8 max-w-3xl mx-auto">
          *Indicative starting prices. Launch offer of ₹8,500/sq.ft. applicable
          for the first 50 flats, limited period only. Prices exclusive of
          taxes, registration and other charges.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;