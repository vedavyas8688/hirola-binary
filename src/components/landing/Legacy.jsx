import { lpLegacy } from "../../data/landingData";

/** Standalone legacy intro block. Not rendered in the live page (HeritageSection is used). */
export default function Legacy() {
  return (
    <section className="bg-bg-cream py-20 px-6 md:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-luxury-gold">The Legacy</span>
        <h2 className="mt-4 font-serif text-3xl md:text-5xl font-semibold text-luxury-green-dark">
          Binary <span className="italic text-luxury-gold">Temple Tree</span>
        </h2>
        <p className="mt-5 text-foreground-green/65 text-[16px] leading-relaxed">{lpLegacy.intro}</p>
      </div>
    </section>
  );
}
