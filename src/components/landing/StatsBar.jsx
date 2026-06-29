export default function StatsSection() {
  return (
    <section className="bg-[#0B412F] px-6 pb-12 pt-12 md:px-12 lg:px-20 w-full box-border">
      {/* Divider */}
      <div className="max-w-[1440px] mx-auto mb-10 md:mb-14 h-px bg-gradient-to-r from-transparent via-[rgba(215,185,117,0.4)] to-transparent" />

      {/* Heading */}
      <div className="max-w-[1440px] mx-auto mb-10 md:mb-14 text-center">
        <h2 className="font-serif font-semibold text-[clamp(36px,5vw,64px)] leading-tight  text-luxury-gold m-0">Project Statistics</h2>
      </div>

      {/* Desktop & Tablet: flex row — all numbers align on one baseline */}
      <div className="max-w-[1440px] mx-auto hidden md:flex items-end">
        <div className="flex-1 flex flex-col justify-end">
          <p className="font-sans font-bold text-[#FAF6EB] text-[clamp(40px,4.6vw,58px)] leading-none m-0">
            3.5 <span className="font-sans font-semibold text-[0.5em] text-[#FAF6EB]">Acres</span>
          </p>
          <p className="font-sans font-semibold text-[10px] tracking-[0.18em] uppercase text-[rgba(215,185,117,0.65)] mt-3">Total Land Area</p>
        </div>
        <div className="w-px self-stretch mx-10 my-1.5 bg-[rgba(215,185,117,0.22)] shrink-0" />
        <div className="flex-1 flex flex-col justify-end">
          <p className="font-sans font-bold text-[#FAF6EB] text-[clamp(40px,4.6vw,58px)] leading-none m-0">
            234 <span className="font-sans font-semibold text-[0.5em] text-[#FAF6EB]">Units</span>
          </p>
          <p className="font-sans font-semibold text-[10px] tracking-[0.18em] uppercase text-[rgba(215,185,117,0.65)] mt-3">Total Apartments</p>
        </div>
        <div className="w-px self-stretch mx-10 my-1.5 bg-[rgba(215,185,117,0.22)] shrink-0" />
        <div className="flex-1 flex flex-col justify-end">
          <p className="font-sans font-bold text-[#FAF6EB] text-[clamp(40px,4.6vw,58px)] leading-none m-0">8,000+</p>
          <p className="font-sans font-semibold text-[10px] tracking-[0.18em] uppercase text-[rgba(215,185,117,0.65)] mt-3">Sq.Ft Clubhouse</p>
        </div>
        <div className="w-px self-stretch mx-10 my-1.5 bg-[rgba(215,185,117,0.22)] shrink-0" />
        <div className="flex-1 flex flex-col justify-end">
          <p className="font-sans font-bold text-[#FAF6EB] text-[clamp(40px,4.6vw,58px)] leading-none m-0">60+</p>
          <p className="font-sans font-semibold text-[10px] tracking-[0.18em] uppercase text-[rgba(215,185,117,0.65)] mt-3">Amenities</p>
        </div>
        <div className="w-px self-stretch mx-10 my-1.5 bg-[rgba(215,185,117,0.22)] shrink-0" />
        <div className="flex-1 flex flex-col justify-end">
          <p className="font-sans font-bold text-[#FAF6EB] text-[clamp(40px,4.6vw,58px)] leading-none m-0">80%</p>
          <p className="font-sans font-semibold text-[10px] tracking-[0.18em] uppercase text-[rgba(215,185,117,0.65)] mt-3">Open Space</p>
        </div>
      </div>

      {/* Mobile: cards grid */}
      <div className="grid grid-cols-2 gap-3 md:hidden">
        <div className="flex flex-col items-start bg-[rgba(255,255,255,0.05)] border border-[rgba(215,185,117,0.2)] rounded-xl p-4">
          <p className="font-sans font-bold text-[#FAF6EB] text-[38px] leading-none m-0">
            3.5 <span className="font-sans font-semibold text-[20px]">Acres</span>
          </p>
          <p className="font-sans font-semibold text-[9px] tracking-[0.18em] uppercase text-[rgba(215,185,117,0.65)] mt-2.5">Total Land Area</p>
        </div>
        <div className="flex flex-col items-start bg-[rgba(255,255,255,0.05)] border border-[rgba(215,185,117,0.2)] rounded-xl p-4">
          <p className="font-sans font-bold text-[#FAF6EB] text-[38px] leading-none m-0">
            234 <span className="font-sans font-semibold text-[20px]">Units</span>
          </p>
          <p className="font-sans font-semibold text-[9px] tracking-[0.18em] uppercase text-[rgba(215,185,117,0.65)] mt-2.5">Total Apartments</p>
        </div>
        <div className="flex flex-col items-start bg-[rgba(255,255,255,0.05)] border border-[rgba(215,185,117,0.2)] rounded-xl p-4">
          <p className="font-sans font-bold text-[#FAF6EB] text-[34px] leading-none m-0">8,000+</p>
          <p className="font-sans font-semibold text-[9px] tracking-[0.18em] uppercase text-[rgba(215,185,117,0.65)] mt-2.5">Sq.Ft Clubhouse</p>
        </div>
        <div className="flex flex-col items-start bg-[rgba(255,255,255,0.05)] border border-[rgba(215,185,117,0.2)] rounded-xl p-4">
          <p className="font-sans font-bold text-[#FAF6EB] text-[34px] leading-none m-0">60+</p>
          <p className="font-sans font-semibold text-[9px] tracking-[0.18em] uppercase text-[rgba(215,185,117,0.65)] mt-2.5">Amenities</p>
        </div>
        <div className="col-span-2 flex flex-col items-center text-center bg-[rgba(255,255,255,0.05)] border border-[rgba(215,185,117,0.2)] rounded-xl p-4">
          <p className="font-sans font-bold text-[#FAF6EB] text-[34px] leading-none m-0">80%</p>
          <p className="font-sans font-semibold text-[9px] tracking-[0.18em] uppercase text-[rgba(215,185,117,0.65)] mt-2.5">Open Space</p>
        </div>
      </div>
    </section>
  );
}