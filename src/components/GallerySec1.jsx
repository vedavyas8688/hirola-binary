import React from "react";

const GallerySec1 = () => {
  return (
    <section className="py-12 md:py-20 lg:py-28 overflow-hidden section-primary-bg">
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">

          {/* ── Image ── */}
          <div className="relative border-4 border-luxury-gold rounded-2xl overflow-hidden shadow-xl">
            <img
              src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22%23e9e5dc%22/%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%23968c7c%22%20stroke-opacity%3D%220.28%22%20stroke-width%3D%226%22%3E%3Crect%20x%3D%22510%22%20y%3D%22336%22%20width%3D%22180%22%20height%3D%22128%22%20rx%3D%2214%22/%3E%3Ccircle%20cx%3D%22545%22%20cy%3D%22382%22%20r%3D%2218%22/%3E%3C/g%3E%3Cpolygon%20points%3D%22530%2C454%20588%2C394%20630%2C430%20672%2C388%20672%2C454%22%20fill%3D%22%23968c7c%22%20fill-opacity%3D%220.22%22/%3E%3C/svg%3E"
              alt="Clubhouse"
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