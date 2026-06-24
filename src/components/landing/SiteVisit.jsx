import { useState } from "react";
import { Check, Phone, Clock, MapPin } from "lucide-react";
import { lpSiteVisit, lpConfig } from "../../data/landingData";

export default function SiteVisit() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    // TODO: wire to your CRM / API endpoint here
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="enquire" className="lp-fade bg-bg-cream py-20 md:py-28 lg:py-[120px] px-5 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 rounded-[1.75rem] overflow-hidden shadow-[0_40px_90px_rgba(8,43,31,0.12)] border border-luxury-gold/15">
          {/* left — copy on green */}
          <div className="relative p-8 md:p-12 lg:p-14" style={{ background: "linear-gradient(160deg, #0B412F 0%, #062319 100%)" }}>
            <div aria-hidden="true" className="pointer-events-none absolute -top-16 -right-16 h-52 w-52 rounded-full border border-luxury-gold/10" />
            <div className="relative">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-luxury-gold">Book Your Visit</span>
              <h2 className="mt-4 font-serif text-[30px] leading-[36px] md:text-[44px] md:leading-[50px] font-semibold text-luxury-gold">
                Experience Binary <br /><span className="italic">Temple Tree</span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-cream-text/82 max-w-md">{lpSiteVisit.intro}</p>

              <div className="mt-9 space-y-5">
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

          {/* right — inline form on cream */}
          <div className="bg-white p-8 md:p-12 lg:p-14 flex flex-col justify-center">
            {sent ? (
              <div className="flex flex-col items-center text-center gap-3 py-10">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-luxury-green-dark text-luxury-gold"><Check size={30} strokeWidth={2.5} /></span>
                <h3 className="font-serif text-[26px] text-luxury-green-dark">Visit Requested</h3>
                <p className="text-foreground-green/65 text-[14px] max-w-xs">Thank you. Our relationship manager will call you shortly to confirm your preferred slot.</p>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-[24px] md:text-[28px] font-semibold text-luxury-green-dark">Schedule a Site Visit</h3>
                <p className="mt-2 text-foreground-green/60 text-[14px]">Fill in your details and we'll arrange a private, guided walkthrough.</p>

                <form onSubmit={submit} className="mt-7 space-y-4">
                  <Field label="Full Name">
                    <input type="text" required placeholder="Your name" autoComplete="name" className="sv-input" />
                  </Field>
                  <Field label="Phone Number">
                    <div className="flex gap-2">
                      <span className="flex items-center px-3.5 rounded-lg border border-luxury-gold/25 bg-luxury-cream text-luxury-green-dark text-[14px] font-semibold">+91</span>
                      <input
                        type="tel" required placeholder="10-digit mobile" inputMode="numeric" maxLength={10} autoComplete="tel"
                        onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/\D/g, ""); }}
                        className="sv-input flex-1"
                      />
                    </div>
                  </Field>
                  <Field label="Configuration of Interest">
                    <select className="sv-input" defaultValue="">
                      <option value="" disabled>Select a configuration</option>
                      <option>2 BHK Ultra Luxury</option>
                      <option>3 BHK Ultra Luxury</option>
                      <option>Not sure yet</option>
                    </select>
                  </Field>

                  <button type="submit" className="w-full mt-2 rounded-lg bg-luxury-green-dark text-cream-text py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#062319] transition-colors border-0 cursor-pointer">
                    Request My Site Visit →
                  </button>
                  <p className="text-center text-[11px] text-foreground-green/45">EOI is 100% refundable · Your details stay private</p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .sv-input {
          width: 100%; border-radius: 8px; padding: 13px 15px;
          border: 1px solid rgba(215,185,117,0.3); background: #FAF7F0;
          color: #082B1F; font-size: 14px; font-family: var(--font-sans); outline: none;
          transition: border-color .2s, background .2s;
        }
        .sv-input::placeholder { color: rgba(8,43,31,0.4); }
        .sv-input:focus { border-color: #D7B975; background: #fff; }
      `}</style>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground-green/55 mb-1.5">{label}</span>
      {children}
    </label>
  );
}
