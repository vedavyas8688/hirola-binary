import { Phone, Clock, MapPin } from "lucide-react";
import { lpSiteVisit, lpConfig } from "../../data/landingData";
import LeadForm from "./LeadForm";

export default function SiteVisit() {
  return (
    <section id="enquire" className="lp-fade bg-bg-cream py-12 md:py-16 lg:py-20 px-5 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 rounded-[1.75rem] overflow-hidden shadow-[0_40px_90px_rgba(8,43,31,0.12)] border border-luxury-gold/15">
          {/* left — copy on green */}
          <div className="relative p-6 md:p-10 lg:p-12" style={{ background: "linear-gradient(160deg, #0B412F 0%, #062319 100%)" }}>
            <div aria-hidden="true" className="pointer-events-none absolute -top-16 -right-16 h-52 w-52 rounded-full border border-luxury-gold/10" />
            <div className="relative">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-luxury-gold">Book Your Visit</span>
              <h2 className="mt-3 font-serif text-[30px] leading-[36px] md:text-[44px] md:leading-[50px] font-semibold text-luxury-gold">
                Experience Codename Project 4 <br /><span className="italic"> </span>
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-cream-text/82 max-w-md">{lpSiteVisit.intro}</p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-luxury-gold/30 text-luxury-gold"><MapPin size={17} strokeWidth={1.6} /></span>
                  <div>
                    <p className="text-luxury-gold text-[10px] font-semibold uppercase tracking-[0.18em] mb-1">Site Address</p>
                    <p className="text-cream-text/85 text-[14px] leading-relaxed">{lpConfig.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-luxury-gold/30 text-luxury-gold"><Clock size={17} strokeWidth={1.6} /></span>
                  <div>
                    <p className="text-luxury-gold text-[10px] font-semibold uppercase tracking-[0.18em] mb-1">Visiting Hours</p>
                    <p className="text-cream-text/85 text-[14px]">{lpSiteVisit.hours}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-luxury-gold/30 text-luxury-gold"><Phone size={17} strokeWidth={1.6} /></span>
                  <div>
                    <p className="text-luxury-gold text-[10px] font-semibold uppercase tracking-[0.18em] mb-1">Direct Assistance</p>
                    <a href={lpConfig.phoneHref} className="lp-underline inline-block text-cream-text/85 text-[14px] hover:text-luxury-gold">{lpConfig.phone}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right — shared form on a premium cream panel */}
          <div
            className="relative overflow-hidden p-6 md:p-10 lg:p-12 flex flex-col justify-center"
            style={{ background: "linear-gradient(180deg, #ffffff 0%, #FAF7F0 100%)" }}
          >
            {/* thin gold top accent */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(215,185,117,0.7) 50%, transparent)" }}
            />
            {/* faint gold ring ornament */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full border border-luxury-gold/12"
            />
            {/* corner hairline */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-6 right-6 h-6 w-6"
              style={{ borderTop: "1px solid rgba(215,185,117,0.45)", borderRight: "1px solid rgba(215,185,117,0.45)" }}
            />

            <div className="relative">
              <LeadForm
                theme="light"
                eyebrow="Private Walkthrough"
                title="Schedule a Site Visit"
                subtitle="Fill in your details and we'll arrange a private, guided walkthrough."
                configOptions={["2 BHK Ultra Luxury", "3 BHK Ultra Luxury", "Not sure yet"]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}