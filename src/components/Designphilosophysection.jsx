import React from "react";
import { Download } from "lucide-react";

const DesignPhilosophySection = ({
  image = "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  imageAlt = "Project interior",
  enquireHref = "#enquire",
  brochureHref = "/brochure.pdf",
}) => {
  return (
    <section className="relative py-12 md:py-20 lg:py-28 overflow-hidden section-primary-bg">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Layered image collage ── */}
          <div className="relative max-w-xl mx-auto lg:mx-0 aspect-[4/3]">
            {/* back panel — tall white backdrop on the right */}
            <div className="absolute top-[2%] right-0 w-3/5 h-[95%] bg-card-white" />
            {/* front panel — wider image, offset up-left, in front with shadow */}
            <div className="absolute top-[12%] left-[8%] w-[84%] h-[74%] bg-muted-panel shadow-2xl overflow-hidden">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* ── Text content ── */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed uppercase mb-4">
              <span className="text-luxury-gold">Beyond Brick and Beam,</span>
              <br />
              <span className="text-cream-text">Lies Intention</span>
            </h2>
            <p className="font-sans text-sm sm:text-base md:text-lg text-cream-text/80 leading-relaxed max-w-xl">
              At Project 4, every space is designed with purpose and precision,
              where light, air, and energy flow in perfect harmony. Expansive
              layouts invite natural sunlight to fill your home, while cross
              ventilation ensures freshness throughout the day. Each residence
              is meticulously aligned with Vastu principles, blending spiritual
              balance with modern comfort.
            </p>
          </div>
        </div>
      </div>

      {/* ── Vertical "Enquire Now" tab ── */}
      <a
        href={enquireHref}
        className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 px-2 py-5 bg-luxury-green-dark border border-luxury-gold/40 text-luxury-gold text-xs tracking-widest uppercase hover:bg-luxury-gold hover:text-foreground-green transition-colors duration-300"
        style={{ writingMode: "vertical-rl" }}
      >
        Enquire Now
      </a>

      {/* ── Circular download button ── */}
      <a
        href={brochureHref}
        download
        className="absolute bottom-8 right-8 md:right-12 flex items-center justify-center w-12 h-12 rounded-full border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-foreground-green transition-colors duration-300"
      >
        <Download className="w-5 h-5" strokeWidth={2} />
      </a>
    </section>
  );
};

export default DesignPhilosophySection;