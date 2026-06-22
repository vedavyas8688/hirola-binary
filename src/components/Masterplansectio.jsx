import React, { useState } from "react";
import img31 from "../assets/images/31.jpg";

const MasterPlanSection = () => {
  const [zoomed, setZoomed] = useState(false);

  return (
    <section className="py-10 md:py-20 lg:py-24 overflow-hidden bg-bg-cream">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8 space-y-8 md:space-y-12">

        <div className="text-center space-y-4">
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-luxury-gold uppercase">
            Master Plan
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-foreground-green">
            A LANDSCAPE CRAFTED FOR EVERYDAY DISCOVERY
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <img
            src={img31}
            alt="Master Plan"
            onClick={() => setZoomed(true)}
            className="w-full h-auto object-contain rounded-xl cursor-zoom-in hover:opacity-90 transition-opacity"
          />
          <p className="text-center text-sm text-muted-sage mt-3">
            Click image to zoom
          </p>
        </div>

      </div>

      {/* ── Lightbox ── */}
      {zoomed && (
        <div
          onClick={() => setZoomed(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 cursor-zoom-out p-4"
        >
          {/* Close button */}
          <button
            onClick={() => setZoomed(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl flex items-center justify-center transition-colors"
          >
            ✕
          </button>

          <img
            src={banner1}
            alt="Master Plan Zoomed"
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
};

export default MasterPlanSection;