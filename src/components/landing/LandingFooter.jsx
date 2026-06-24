import { Globe, Camera, Compass, BadgeCheck } from "lucide-react";
import { lpFooter as f } from "../../data/landingData";
import logo from "../../assets/images/logo-right.png";

export default function LandingFooter() {
  return (
    <footer className="relative w-full overflow-hidden bg-luxury-green-dark pt-24 md:pt-32 pb-12 text-cream-text">
      {/* giant faint wordmark */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 flex w-full -translate-x-1/2 -translate-y-1/2 justify-center overflow-hidden">
        <span
          className="font-serif font-bold uppercase select-none"
          style={{
            fontSize: "22vw",
            lineHeight: 0.8,
            letterSpacing: "-0.05em",
            color: "transparent",
            opacity: 0.06,
            WebkitTextStroke: "1px color-mix(in srgb, var(--clr-gold) 50%, transparent)",
          }}
        >
          {f.wordmark}
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-screen-2xl px-6 sm:px-8 md:px-12 lg:px-20">
        {/* top editorial grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-8 items-start">
          {/* branding + ethos */}
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-6">
              <img src={logo} alt="Binary Project 4" className="h-14 md:h-16 w-auto" />
              <p className="max-w-xs text-[15px] leading-relaxed tracking-wide text-cream-text/60">{f.ethos}</p>
            </div>
            <div className="flex flex-col space-y-4 pt-2">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-luxury-gold">Credentials</span>
              <div className="flex items-center gap-2 text-cream-text/55">
                <BadgeCheck size={16} className="text-luxury-gold" />
                <span className="font-sans text-[11px] uppercase tracking-widest">{f.rera}</span>
              </div>
            </div>
          </div>

          {/* nav columns */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-x-8">
            <div className="space-y-8 md:space-y-10">
              <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-luxury-gold">{f.colCuration.title}</h4>
              <ul className="space-y-5 md:space-y-6">
                {f.colCuration.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="lp-underline font-serif text-[19px] md:text-[20px] text-cream-text/90 hover:text-luxury-gold transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8 md:space-y-10">
              <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-luxury-gold">{f.colRefinement.title}</h4>
              <ul className="space-y-5 md:space-y-6">
                {f.colRefinement.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[15px] text-cream-text/70 hover:text-luxury-gold transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* concierge */}
          <div className="lg:col-span-3">
            <div
              className="group pl-6 transition-all duration-500"
              style={{ borderLeft: "1px solid color-mix(in srgb, var(--clr-gold) 22%, transparent)" }}
            >
              <h4 className="mb-8 md:mb-10 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-luxury-gold">
                {f.concierge.title}
              </h4>
              <div className="space-y-8">
                <div>
                  <span className="mb-2 block font-sans text-[10px] uppercase tracking-wide text-cream-text/40">{f.concierge.phoneLabel}</span>
                  <a href={f.concierge.phoneHref} className="block font-serif text-[24px] md:text-[26px] text-luxury-gold hover:text-cream-text transition-colors">
                    {f.concierge.phone}
                  </a>
                </div>
                <div>
                  <span className="mb-2 block font-sans text-[10px] uppercase tracking-wide text-cream-text/40">{f.concierge.emailLabel}</span>
                  <a href={f.concierge.emailHref} className="border-b border-luxury-gold/30 pb-1 text-[16px] text-cream-text/90 hover:border-luxury-gold transition-all">
                    {f.concierge.email}
                  </a>
                </div>
                <div className="flex gap-7 pt-4">
                  {[Globe, Camera, Compass].map((Ic, i) => (
                    <a key={i} href="#" className="text-cream-text/40 hover:text-luxury-gold transition-colors">
                      <Ic size={22} strokeWidth={1.6} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* hairline */}
        <div
          className="mt-24 md:mt-32 h-px w-full opacity-30"
          style={{ background: "linear-gradient(90deg, transparent, color-mix(in srgb, var(--clr-gold) 45%, transparent) 15%, color-mix(in srgb, var(--clr-gold) 45%, transparent) 85%, transparent)" }}
        />

        {/* bottom row */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 text-[11px] uppercase tracking-[0.2em] text-cream-text/40 md:flex-row">
          <div>{f.copyright}</div>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {f.legalRight.map((t) => (
              <span key={t} className="cursor-default transition-colors hover:text-luxury-gold">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-full"
        style={{ background: "linear-gradient(90deg, transparent, color-mix(in srgb, var(--clr-gold) 25%, transparent), transparent)" }}
      />
    </footer>
  );
}