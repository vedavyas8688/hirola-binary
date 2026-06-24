import { Flower2, Dumbbell, Users, Waves, Sparkles } from "lucide-react";
import { lpClubhouse } from "../../data/landingData";

// map the data's icon keys → lucide icons
const ICONS = {
  spa: Flower2,
  fitness_center: Dumbbell,
  groups: Users,
  pool: Waves,
};

export default function Clubhouses() {
  return (
    <section id="amenities" className="lp-fade relative py-20 md:py-28 lg:py-[120px] overflow-hidden bg-luxury-green-dark text-cream-text">
      {/* immersive background image + gradient veil */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-25 md:bg-fixed"
          style={{ backgroundImage: `url('${lpClubhouse.bg}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-green-dark via-luxury-green-dark/85 to-luxury-green-dark" />
      </div>

      {/* soft gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-72 md:h-[28rem] md:w-[28rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--clr-gold) 60%, transparent), transparent 70%)" }}
      />

      <div className="relative z-10 px-5 sm:px-8 md:px-12 lg:px-20 max-w-screen-2xl mx-auto">
        {/* header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5 md:mb-6">
            <span className="h-px w-8 md:w-10 bg-luxury-gold" />
            <span className="font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.3em] md:tracking-[0.35em] text-luxury-gold">The Lifestyle</span>
            <span className="h-px w-8 md:w-10 bg-luxury-gold" />
          </div>

          <h2 className="text-[30px] leading-[36px] sm:text-[40px] sm:leading-[46px] md:text-[56px] md:leading-[62px] font-serif font-semibold">
            4 Grand <span className="italic text-luxury-gold">Clubhouses</span>
          </h2>

          <p className="mt-5 md:mt-6 text-[16px] leading-[24px] md:text-[18px] md:leading-[28px] font-serif text-cream-text/85">
            <span className="text-luxury-gold font-semibold">1,50,000+ sq.ft</span> of luxurious amenities to indulge in the extravaganzas of life.
          </p>

          <p className="mt-4 md:mt-5 text-[14px] leading-[23px] md:text-[16px] md:leading-[26px] font-light text-cream-text/60">{lpClubhouse.intro}</p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mt-12 md:mt-16">
          {lpClubhouse.cards.map((c) => {
            const Ic = ICONS[c.icon] || Sparkles;
            return (
              <div
                key={c.title}
                className="group relative overflow-hidden rounded-2xl p-7 sm:p-8 md:p-9 transition-all duration-300 hover:-translate-y-2"
                style={{
                  background: "color-mix(in srgb, var(--clr-gold) 6%, transparent)",
                  border: "1px solid color-mix(in srgb, var(--clr-gold) 22%, transparent)",
                  backdropFilter: "blur(14px) saturate(140%)",
                  WebkitBackdropFilter: "blur(14px) saturate(140%)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                {/* sheen sweep on hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-full top-0 h-full w-2/3 -skew-x-12 opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100"
                  style={{ background: "linear-gradient(100deg, transparent, color-mix(in srgb, var(--clr-gold) 16%, transparent), transparent)" }}
                />

                {/* gold icon badge (lucide) */}
                <span className="relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border border-luxury-gold/30 bg-luxury-gold/10 mb-5 md:mb-7">
                  <Ic className="text-luxury-gold" size={24} strokeWidth={1.6} />
                </span>

                {/* gold heading */}
                <h4 className="text-[20px] leading-[26px] md:text-[22px] md:leading-[28px] font-serif font-semibold text-luxury-gold">{c.title}</h4>
                <span className="mt-3 block h-0.5 w-8 rounded-full bg-luxury-gold transition-all duration-500 group-hover:w-14" />

                {/* white description */}
                <p className="mt-4 text-[13px] md:text-sm leading-relaxed font-light text-white/90">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}