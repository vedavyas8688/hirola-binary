import React from "react";

const MasterPlanSection = () => {
  return (
    <section className="py-10 md:py-20 lg:py-24 overflow-hidden bg-card-white">
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
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80"
            alt="Master Plan"
            className="w-full h-auto object-contain rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
          />
          <p className="text-center text-sm text-muted-sage mt-3">
            Click image to zoom
          </p>
        </div>
      </div>
    </section>
  );
};

export default MasterPlanSection;
