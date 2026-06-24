import { lpMasterPlan } from "../../data/landingData";

export default function MasterPlan() {
  return (
    <section id="masterplan" className="lp-fade py-[120px] px-5 md:px-20 max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
      <div className="lg:w-1/3 space-y-8">
        <h2 className="text-[36px] leading-[42px] md:text-[32px] md:leading-[40px] font-serif font-medium text-luxury-green-dark">A Thoughtfully Designed <br /><span className="italic">45-Acre Master Plan</span></h2>
        <p className="text-[18px] leading-[28px] text-foreground-green/75">{lpMasterPlan.intro}</p>
        <div className="flex flex-col gap-4">
          {lpMasterPlan.checks.map((c) => (
            <div key={c} className="flex items-center gap-3 text-foreground-green/60">
              <span className="material-symbols-outlined text-luxury-gold">check_circle</span><span>{c}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-2/3 relative group">
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <img alt="Master Plan" className="w-full h-auto filter blur-sm group-hover:blur-none transition-all duration-500" src={lpMasterPlan.image} />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-all">
            <button className="bg-luxury-gold text-cream-text px-8 py-4 rounded-lg text-[14px] tracking-[0.05em] font-semibold shadow-xl flex items-center gap-2 group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined">visibility</span> VIEW FULL MASTERPLAN
            </button>
          </div>
        </div>
        <p className="text-center text-xs text-foreground-green/60 mt-6 italic">Click to enquire &amp; unlock masterplan</p>
      </div>
    </section>
  );
}