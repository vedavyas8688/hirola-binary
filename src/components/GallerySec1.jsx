import React from "react";
import img30 from "../assets/images/30.jpg";


const GallerySec1 = () => {
  return (
    <section className="py-12 md:py-20 lg:py-28 overflow-hidden bg-luxury-green-dark">
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">

          {/* ── Image ── */}
          <div className="relative border-4 border-luxury-gold rounded-2xl overflow-hidden shadow-xl">
            <img
              src={img30}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-black/50 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded">
              <p className="font-serif text-cream-text text-sm sm:text-base md:text-lg lg:text-xl">
                Clubhouse
              </p>
            </div>
          </div>

          {/* ── Text content ── */}
          <div className="space-y-4 md:space-y-6 text-center lg:text-left px-2 md:px-0">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-luxury-gold uppercase leading-tight">
              OUR CLUBHOUSE
            </h2>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cream-text uppercase leading-tight">
              THE HEARTBEAT OF COMMUNITY LIVING
            </h2>
            <div className="space-y-4 md:space-y-5">
              <p className="font-sans text-sm sm:text-base md:text-lg text-cream-text/90 leading-relaxed">
                Step into a world of indulgence at our 8,000+ sq.ft. clubhouse
                with 60+ modern amenities.
              </p>
              <p className="font-sans text-sm sm:text-base md:text-lg text-cream-text/90 leading-relaxed">
                A multi-level retreat of recreation and lifestyle — from
                terrace barbecues and a games lounge to the gym's energy,
                indoor courts and yoga decks. Our clubhouse is the true pulse
                of Project 4.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySec1;