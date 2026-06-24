import { lpMasterPlan } from "../../data/landingData";

/** Standalone master plan block. Not rendered in the live page (MainMasterplansection is used). */
export default function MasterPlan() {
  return (
    <section className="bg-luxury-green-dark py-20 px-6 md:px-20 text-cream-text">
      <div className="max-w-5xl mx-auto text-center">
        <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-luxury-gold">The Master Plan</span>
        <h2 className="mt-4 font-serif text-3xl md:text-5xl font-semibold text-luxury-gold">A 3.5-Acre Enclave</h2>
        <p className="mt-5 text-cream-text/80 text-[16px] leading-relaxed max-w-2xl mx-auto">{lpMasterPlan.intro}</p>
      </div>
    </section>
  );
}
