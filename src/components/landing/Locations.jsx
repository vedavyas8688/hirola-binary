import { useState } from "react";
import { MapPin, Navigation, ArrowRight } from "lucide-react";
import { lpLocation } from "../../data/landingData";

export default function Locations() {
  const [tab, setTab] = useState(0);
  const groups = lpLocation.groups;

  return (
    <section
      id="location"
      className="lp-fade py-20 md:py-28 lg:py-[120px] bg-muted-panel"
    >
      <div className="px-5 sm:px-8 md:px-12 lg:px-20 max-w-screen-2xl mx-auto space-y-12 md:space-y-16">
        {/* header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 md:w-10 bg-luxury-gold" />
            <span className="font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.3em] md:tracking-[0.35em] text-luxury-gold">
              Connectivity
            </span>
            <span className="h-px w-8 md:w-10 bg-luxury-gold" />
          </div>
          <h2 className="text-[28px] leading-[34px] md:text-[40px] md:leading-[48px] font-serif font-medium text-luxury-green-dark">
            Strategically Located at{" "}
            <span className="italic text-luxury-gold">
              Whitefield–Sarjapur Road
            </span>
          </h2>
          <p className="mt-4 text-[15px] md:text-base text-foreground-green/60">
            Connecting you to everything that matters in East Bengaluru.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* left: tabs + list */}
          <div className="space-y-7 md:space-y-8">
            {/* tabs */}
            <div className="flex gap-2.5 border-b border-luxury-gold/20 pb-4 overflow-x-auto whitespace-nowrap -mx-1 px-1">
              {groups.map((g, i) => (
                <button
                  key={g.tab}
                  onClick={() => setTab(i)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                    tab === i
                      ? "bg-luxury-green-dark text-cream-text shadow-md shadow-luxury-green-dark/20"
                      : "text-foreground-green/70 hover:bg-luxury-green-dark/10"
                  }`}
                >
                  {g.tab}
                </button>
              ))}
            </div>

            {/* list */}
            <div className="space-y-3">
              {groups[tab].items.map(([n, d]) => (
                <div
                  key={n}
                  className="group flex justify-between items-center gap-4 p-4 bg-bg-cream rounded-xl border border-luxury-gold/10 hover:border-luxury-gold/40 transition-colors duration-300"
                >
                  <span className="flex items-center gap-3 text-[15px] font-medium text-luxury-green-dark">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-luxury-gold/10 text-luxury-gold">
                      <MapPin size={16} strokeWidth={1.8} />
                    </span>
                    {n}
                  </span>
                  <span className="flex-shrink-0 rounded-full bg-luxury-green-dark/5 px-3 py-1 text-xs font-bold text-luxury-green-dark">
                    {d}
                  </span>
                </div>
              ))}
            </div>

            <button className="group flex w-full items-center justify-center gap-2.5 bg-luxury-green-dark text-cream-text py-4 rounded-xl text-[13px] tracking-[0.1em] font-semibold uppercase hover:bg-opacity-95 transition-all shadow-lg shadow-luxury-green-dark/20">
              Know More About Location
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* right: map */}
          <div className="relative group">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-luxury-gold/15">
              <img
                alt="Location Map"
                className="w-full h-[340px] sm:h-[420px] lg:h-[560px] object-cover block"
                src={lpLocation.map}
              />
              <div className="absolute inset-0 bg-luxury-green-dark/5 pointer-events-none" />
            </div>
            {/* floating gold badge */}
            <div className="absolute -top-4 -right-4 md:-top-5 md:-right-5 bg-luxury-gold text-luxury-green-dark p-3.5 md:p-4 rounded-full shadow-xl ring-4 ring-muted-panel">
              <Navigation size={26} strokeWidth={1.8} className="md:hidden" />
              <Navigation
                size={32}
                strokeWidth={1.6}
                className="hidden md:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
