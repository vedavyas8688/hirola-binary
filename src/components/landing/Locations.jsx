import { useState } from "react";
import { MapPin, Clock } from "lucide-react";
import { lpLocation, lpConfig } from "../../data/landingData";

export default function Locations() {
  const [tab, setTab] = useState(0);
  const active = lpLocation.groups[tab];

  return (
    <section
      id="location"
      className="lp-fade bg-muted-panel py-20 md:py-28 lg:py-[120px]"
    >
      <div className="px-5 sm:px-8 md:px-12 lg:px-20 max-w-screen-2xl mx-auto">
        {/* header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 md:w-10 bg-luxury-gold" />
            <span className="font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.3em] md:tracking-[0.35em] text-luxury-gold">
              Connectivity
            </span>
            <span className="h-px w-8 md:w-10 bg-luxury-gold" />
          </div>
          <h2 className="text-[28px] leading-[34px] md:text-[44px] md:leading-[52px] font-serif font-medium text-luxury-green-dark">
            Perfectly Placed on{" "}
            <span className="italic text-luxury-gold">Sarjapura Road</span>
          </h2>
          <p className="mt-5 text-[15px] md:text-[16px] leading-relaxed text-foreground-green/65">
            Minutes from the ORR IT corridor, top schools, healthcare and retail
            — with upcoming metro connectivity on the doorstep.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* left: tabs + list */}
          <div>
            <div className="flex flex-wrap gap-2 mb-7">
              {lpLocation.groups.map((g, i) => (
                <button
                  key={g.tab}
                  onClick={() => setTab(i)}
                  className={`px-5 py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.14em] border transition-all duration-200 cursor-pointer ${
                    tab === i
                      ? "bg-luxury-green-dark text-cream-text border-luxury-green-dark"
                      : "bg-transparent text-foreground-green/70 border-luxury-gold/25 hover:border-luxury-gold/50"
                  }`}
                >
                  {g.tab}
                </button>
              ))}
            </div>

            <div className="space-y-1">
              {active.items.map(([place, time]) => (
                <div
                  key={place}
                  className="flex items-center justify-between gap-4 py-4 border-b border-luxury-gold/15 group"
                >
                  <span className="flex items-center gap-3">
                    <MapPin
                      size={16}
                      strokeWidth={1.6}
                      className="text-luxury-gold flex-shrink-0"
                    />
                    <span className="text-[15px] md:text-[16px] text-luxury-green-dark font-medium">
                      {place}
                    </span>
                  </span>
                  <span className="flex items-center gap-1.5 text-[13px] text-foreground-green/55 font-semibold whitespace-nowrap">
                    <Clock
                      size={13}
                      strokeWidth={1.8}
                      className="text-luxury-gold/70"
                    />
                    {time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* right: map + address card */}
          <div className="space-y-5">
            <div className="relative rounded-2xl overflow-hidden border border-luxury-gold/20 shadow-[0_30px_60px_rgba(8,43,31,0.1)] h-[350px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.950295086763!2d77.68184167525969!3d12.910916216205425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1377591db561%3A0x77bf70ae3c020cf4!2sSarjapur%20Main%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1782328249171!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Sarjapur Main Road Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
