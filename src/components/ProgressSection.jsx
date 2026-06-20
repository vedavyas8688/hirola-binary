import React from "react";

const ProgressSection = () => {
  return (
    <div>

      {/* ── Heading ── */}
      <section className="py-12 md:py-16 bg-bg-cream">
        <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
          <div className="text-center px-2">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-green-800 uppercase mb-4 md:mb-6">
              Witness The{" "}
              <span className="text-luxury-gold">Progress</span>
            </h2>
            <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest developments at Project 4. Our
              commitment to transparency ensures you're always informed about
              the progress of your future home. Every milestone brings us
              closer to delivering the lifestyle you deserve.
            </p>
          </div>
        </div>
      </section>

 
    </div>
  );
};

export default ProgressSection;