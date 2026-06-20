import { Download } from "lucide-react";

export default function BrochureSection() {
  return (
    <section className="py-12 md:py-20 lg:py-28 overflow-hidden section-primary-bg">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-luxury-gold mb-4 uppercase">
            Your Future Unfolded
            <br />
            <span className="text-cream-text">Download Our Brochure</span>
          </h2>

          <p className="font-sans text-sm sm:text-base md:text-lg text-cream-text/80 leading-relaxed mb-7 md:mb-9 lg:mb-11 max-w-3xl mx-auto">
            Discover every detail of your dream home. Download our comprehensive
            brochure to explore floor plans, amenities, location advantages, and
            everything that makes Project 4 extraordinary.
          </p>

          <a
            href="/brochure.pdf"
            download
            className="inline-flex items-center gap-2.5 md:gap-3.5 rounded-full bg-luxury-gold hover:bg-bright-gold text-foreground-green font-semibold px-8 sm:px-10 md:px-14 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg shadow-lg transition-colors duration-300"
          >
            <Download className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2} />
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
}
