import { useState } from "react";
import { CalendarDays, PhoneCall, Check } from "lucide-react";
import { lpSiteVisit } from "../../data/landingData";

export default function SiteVisit() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    e.target.reset();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const field =
    "w-full bg-bg-cream border border-transparent rounded-lg p-4 text-[15px] focus:border-luxury-green-dark focus:ring-2 focus:ring-luxury-green-dark/30 focus:outline-none transition";
  const label = "text-[11px] text-luxury-green-dark font-semibold uppercase tracking-[0.15em] block mb-2";

  return (
    <section className="lp-fade py-20 md:py-28 lg:py-[120px] px-5 sm:px-8 md:px-12 lg:px-20 max-w-screen-xl mx-auto">
      <div className="bg-luxury-green-dark rounded-[28px] md:rounded-[32px] p-7 sm:p-10 md:p-16 text-cream-text grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center relative overflow-hidden">
        {/* decorative glows */}
        <div aria-hidden="true" className="absolute -bottom-24 -right-24 w-80 h-80 bg-luxury-gold opacity-10 rounded-full blur-2xl" />
        <div aria-hidden="true" className="absolute -top-28 -left-20 w-72 h-72 bg-luxury-gold opacity-[0.06] rounded-full blur-3xl" />

        {/* left: copy */}
        <div className="space-y-7 md:space-y-8 relative z-10">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-luxury-gold" />
            <span className="font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.35em] text-luxury-gold">Visit Us</span>
          </div>

          <h2 className="text-[30px] leading-[36px] md:text-[40px] md:leading-[48px] font-serif font-semibold">
            Schedule a <span className="italic text-luxury-gold">Site Visit</span>
          </h2>

          <p className="text-[16px] leading-[26px] md:text-[18px] md:leading-[28px] text-cream-text/75 font-light">{lpSiteVisit.intro}</p>

          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-luxury-gold/30 bg-luxury-gold/10 text-luxury-gold">
                <CalendarDays size={18} strokeWidth={1.8} />
              </span>
              <span className="text-[15px] text-cream-text/85">{lpSiteVisit.hours}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-luxury-gold/30 bg-luxury-gold/10 text-luxury-gold">
                <PhoneCall size={18} strokeWidth={1.8} />
              </span>
              <span className="text-[15px] text-cream-text/85">{lpSiteVisit.phone}</span>
            </div>
          </div>
        </div>

        {/* right: form */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 text-foreground-green relative z-10 shadow-2xl">
          {sent ? (
            <div className="flex flex-col items-center justify-center text-center py-12 px-4 min-h-[420px]">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-luxury-gold text-luxury-green-dark mb-5">
                <Check size={30} strokeWidth={2.5} />
              </span>
              <h3 className="font-serif text-2xl text-luxury-green-dark mb-2">Visit Requested</h3>
              <p className="text-sm text-foreground-green/60">Thank you — our team will confirm your slot shortly.</p>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={submit}>
              <div>
                <label className={label}>Your Name</label>
                <input required className={field} placeholder="Enter Full Name" type="text" />
              </div>
              <div>
                <label className={label}>Phone Number</label>
                <div className="flex gap-2">
                  <span className="bg-bg-cream flex items-center px-4 rounded-lg text-foreground-green/75 font-medium">+91</span>
                  <input required className={field} placeholder="Mobile Number" type="tel" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={label}>Date</label>
                  <input required className={field} type="date" />
                </div>
                <div>
                  <label className={label}>Preferred Slot</label>
                  <select required defaultValue="" className={field}>
                    <option value="" disabled>Select</option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </select>
                </div>
              </div>
              <button
                className="w-full bg-luxury-green-dark text-cream-text py-4 rounded-lg text-[13px] tracking-[0.1em] font-semibold uppercase hover:brightness-110 transition-all shadow-lg"
                type="submit"
              >
                Schedule Visit
              </button>
              <p className="text-[10px] text-center text-foreground-green/55 leading-relaxed">
                I authorize to be contacted via phone / SMS / WhatsApp overriding my 'DND' status.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}