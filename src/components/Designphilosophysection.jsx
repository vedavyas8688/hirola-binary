import React from "react";
import { Download } from "lucide-react";
import eighteen from "../assets/images/18.jpg";
import twentythree from "../assets/images/23.jpg";
import Reveal from "./Reveal";

const DesignPhilosophySection = ({
  image = twentythree,
  backImage = eighteen,
  imageAlt = "Project interior",
  enquireHref = "#enquire",
  brochureHref = "/brochure.pdf",
}) => {
  return (
    <section className="relative py-12 md:py-20 lg:py-28 pb-28 md:pb-32 overflow-hidden bg-luxury-green-dark">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Layered image collage ── */}
          <Reveal variant="left" className="relative w-full max-w-xl mx-auto lg:mx-0 aspect-[4/3]">

            {/* Back panel — image with overlay */}
            <div className="absolute top-[2%] right-0 w-3/5 h-[95%] overflow-hidden">
              <img
                src={backImage}
                alt="background panel"
                className="w-full h-full object-cover opacity-40"
              />
            </div>

            {/* Front panel — main image */}
            <div className="absolute top-[12%] left-[8%] w-[84%] h-[74%] shadow-2xl overflow-hidden">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>

          </Reveal>

          {/* ── Text content ── */}
          <Reveal variant="right" delay={150}>
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
          </Reveal>

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
        className="absolute bottom-6 right-6 md:bottom-8 md:right-12 z-20 flex items-center justify-center w-12 h-12 rounded-full border border-luxury-gold bg-luxury-green-dark text-luxury-gold hover:bg-luxury-gold hover:text-foreground-green transition-colors duration-300 shadow-lg"
      >
        <Download className="w-5 h-5" strokeWidth={2} />
      </a>
    </section>
  );
};

export default DesignPhilosophySection;