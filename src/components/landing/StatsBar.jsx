export default function StatsSection() {
  return (
    <section className="bg-[#0B412F] px-6 pb-12 md:px-12 lg:px-20 w-full box-border">

      {/* Divider */}
      <div className="max-w-[1440px] mx-auto mb-10 md:mb-14 h-px bg-gradient-to-r from-transparent via-[rgba(215,185,117,0.4)] to-transparent" />

      {/* Desktop & Tablet: flex row */}
      <div className="max-w-[1440px] mx-auto hidden md:flex items-end">

        {/* 1 — 3.5 Acres */}
        <div className="flex-1 flex flex-col justify-end">
          <p className="font-serif font-bold text-[#FAF6EB] text-[clamp(42px,5vw,64px)] leading-none m-0">3.5</p>
          <p className="font-serif font-semibold text-[#FAF6EB] text-[clamp(26px,3vw,42px)] leading-tight mt-1">Acres</p>
          <p className="font-sans font-semibold text-[10px] tracking-[0.18em] uppercase text-[rgba(215,185,117,0.65)] mt-2.5">Total Land Area</p>
        </div>

        <div className="w-px self-stretch mx-10 my-1.5 bg-[rgba(215,185,117,0.22)] shrink-0" />

        {/* 2 — 234 Units */}
        <div className="flex-1 flex flex-col justify-end">
          <p className="font-serif font-bold text-[#FAF6EB] text-[clamp(42px,5vw,64px)] leading-none m-0">234</p>
          <p className="font-serif font-semibold text-[#FAF6EB] text-[clamp(26px,3vw,42px)] leading-tight mt-1">Units</p>
          <p className="font-sans font-semibold text-[10px] tracking-[0.18em] uppercase text-[rgba(215,185,117,0.65)] mt-2.5">Total Apartments</p>
        </div>

        <div className="w-px self-stretch mx-10 my-1.5 bg-[rgba(215,185,117,0.22)] shrink-0" />

        {/* 3 — 8,000+ */}
        <div className="flex-1 flex flex-col justify-end">
          <p className="font-serif font-bold text-[#FAF6EB] text-[clamp(38px,4.5vw,58px)] leading-none m-0">8,000+</p>
          <p className="font-sans font-semibold text-[10px] tracking-[0.18em] uppercase text-[rgba(215,185,117,0.65)] mt-2.5">Sq.Ft Clubhouse</p>
        </div>

        <div className="w-px self-stretch mx-10 my-1.5 bg-[rgba(215,185,117,0.22)] shrink-0" />

        {/* 4 — 60+ */}
        <div className="flex-1 flex flex-col justify-end">
          <p className="font-serif font-bold text-[#FAF6EB] text-[clamp(38px,4.5vw,58px)] leading-none m-0">60+</p>
          <p className="font-sans font-semibold text-[10px] tracking-[0.18em] uppercase text-[rgba(215,185,117,0.65)] mt-2.5">Amenities</p>
        </div>

        <div className="w-px self-stretch mx-10 my-1.5 bg-[rgba(215,185,117,0.22)] shrink-0" />

        {/* 5 — 80% */}
        <div className="flex-1 flex flex-col justify-end">
          <p className="font-serif font-bold text-[#FAF6EB] text-[clamp(38px,4.5vw,58px)] leading-none m-0">80%</p>
          <p className="font-sans font-semibold text-[10px] tracking-[0.18em] uppercase text-[rgba(215,185,117,0.65)] mt-2.5">Open Space</p>
        </div>

      </div>

      {/* Mobile: cards grid */}
      <div className="grid grid-cols-2 gap-3 md:hidden">

        {/* 1 — 3.5 Acres */}
        <div className="flex flex-col items-start bg-[rgba(255,255,255,0.05)] border border-[rgba(215,185,117,0.2)] rounded-xl p-4">
          <p className="font-serif font-bold text-[#FAF6EB] text-[40px] leading-none m-0">3.5</p>
          <p className="font-serif font-semibold text-[#FAF6EB] text-[24px] leading-tight mt-1">Acres</p>
          <p className="font-sans font-semibold text-[9px] tracking-[0.18em] uppercase text-[rgba(215,185,117,0.65)] mt-2">Total Land Area</p>
        </div>

        {/* 2 — 234 Units */}
        <div className="flex flex-col items-start bg-[rgba(255,255,255,0.05)] border border-[rgba(215,185,117,0.2)] rounded-xl p-4">
          <p className="font-serif font-bold text-[#FAF6EB] text-[40px] leading-none m-0">234</p>
          <p className="font-serif font-semibold text-[#FAF6EB] text-[24px] leading-tight mt-1">Units</p>
          <p className="font-sans font-semibold text-[9px] tracking-[0.18em] uppercase text-[rgba(215,185,117,0.65)] mt-2">Total Apartments</p>
        </div>

        {/* 3 — 8,000+ */}
        <div className="flex flex-col items-start bg-[rgba(255,255,255,0.05)] border border-[rgba(215,185,117,0.2)] rounded-xl p-4">
          <p className="font-serif font-bold text-[#FAF6EB] text-[36px] leading-none m-0">8,000+</p>
          <p className="font-sans font-semibold text-[9px] tracking-[0.18em] uppercase text-[rgba(215,185,117,0.65)] mt-2">Sq.Ft Clubhouse</p>
        </div>

        {/* 4 — 60+ */}
        <div className="flex flex-col items-start bg-[rgba(255,255,255,0.05)] border border-[rgba(215,185,117,0.2)] rounded-xl p-4">
          <p className="font-serif font-bold text-[#FAF6EB] text-[36px] leading-none m-0">60+</p>
          <p className="font-sans font-semibold text-[9px] tracking-[0.18em] uppercase text-[rgba(215,185,117,0.65)] mt-2">Amenities</p>
        </div>

        {/* 5 — 80% (full width, centered) */}
        <div className="col-span-2 flex flex-col items-center text-center bg-[rgba(255,255,255,0.05)] border border-[rgba(215,185,117,0.2)] rounded-xl p-4">
          <p className="font-serif font-bold text-[#FAF6EB] text-[36px] leading-none m-0">80%</p>
          <p className="font-sans font-semibold text-[9px] tracking-[0.18em] uppercase text-[rgba(215,185,117,0.65)] mt-2">Open Space</p>
        </div>

      </div>
    </section>
  );
}