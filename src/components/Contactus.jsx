import { useState } from "react";
import { Check, X, MapPin, Phone, Mail } from "lucide-react";
import logoLeft from "../assets/images/logo-left.svg";
import { contactSection } from "../data/siteData";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  const { phone, phoneHref, email, address, intro, interests } = contactSection;

  return (
    <>
      {/* ============================================================
          MOBILE — kept exactly as before (dark "Find Your Dream Home")
          ============================================================ */}
      <section
        id="contact"
        className="lg:hidden contact-mobile py-16 px-4 bg-luxury-green-dark"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="flex flex-col gap-12">
            {/* Branding + Info */}
            <div className="flex flex-col gap-6">
              <img src={logoLeft} alt="Binary Ventures logo" className="h-12 w-fit" />
              <div>
                <p className="font-sans text-xs tracking-[0.3em] text-luxury-gold uppercase mb-3">
                  Limited Units Available
                </p>
                <h2 className="font-serif text-4xl sm:text-5xl font-normal leading-tight text-cream-text">
                  FIND YOUR <br />
                  <span className="text-luxury-gold">DREAM HOME</span>
                </h2>
              </div>
              <p className="font-sans text-sm text-cream-text/60 leading-relaxed max-w-sm">
                Premium residences on Sarjapur Road. Share your details and our team
                will craft a personalised offer just for you.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-2">
                {[
                  { value: "2 & 3", label: "BHK Homes" },
                  { value: "1117+", label: "Sq.ft" },
                  { value: "Q4", label: "Possession" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="border border-luxury-gold/20 rounded-2xl px-4 py-4 text-center"
                  >
                    <p className="font-serif text-lg text-luxury-gold">{s.value}</p>
                    <p className="font-sans text-xs text-cream-text/50 mt-1 tracking-wide uppercase">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
              <a
                href={phoneHref}
                className="flex items-center gap-3 mt-2 group w-fit"
              >
                <span className="w-8 h-8 rounded-full border border-luxury-gold/30 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-luxury-gold" />
                </span>
                <span className="font-sans text-sm text-cream-text/60 group-hover:text-luxury-gold transition-colors">
                  {phone}
                </span>
              </a>
            </div>

            {/* Form card */}
            <div className="rounded-3xl p-6 border border-luxury-gold/20 bg-cream-text/5 backdrop-blur-md">
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-luxury-gold mb-5">
                Request a Callback
              </p>
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input type="text" required placeholder="Full Name *" />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number *"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={15}
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
                  }}
                />
                <input type="email" required placeholder="Email Address *" />
                <select required defaultValue="">
                  <option value="" disabled>Unit Type</option>
                  {interests.map((i) => (
                    <option key={i} value={i}>{i}</option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-luxury-gold hover:bg-bright-gold text-foreground-green font-semibold text-sm tracking-widest uppercase py-3.5 transition-all duration-300 hover:scale-[1.02]"
                >
                  Request a Callback
                </button>
                <p className="text-center font-sans text-xs text-cream-text/25 -mt-1">
                  Your information is 100% confidential and secure.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          DESKTOP — new "Get In Touch / Say Something" (from image)
          ============================================================ */}
      <section className="hidden lg:block relative overflow-hidden bg-card-white">
        {/* Dark green band at the bottom that the card overlaps */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-luxury-green-dark" />

        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-8 pt-20 pb-28">
          <div className="grid grid-cols-2 gap-16 items-start">

            {/* ── Left: Get In Touch ── */}
            <div className="pt-4">
              <h2 className="font-serif text-4xl xl:text-5xl font-normal text-foreground-green">
                Get In Touch
              </h2>
              <div className="mt-3 h-0.5 w-16 bg-luxury-gold" />

              <p className="mt-6 font-sans text-base text-muted-sage leading-relaxed max-w-md">
                {intro}
              </p>

              <div className="mt-10 space-y-6">
                {[
                  { icon: Mail, text: email, href: `mailto:${email}` },
                  { icon: Phone, text: phone, href: phoneHref },
                  { icon: MapPin, text: address, href: null },
                ].map(({ icon: Icon, text, href }) => {
                  const inner = (
                    <>
                      <span className="w-11 h-11 rounded-full bg-luxury-cream flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-luxury-gold" />
                      </span>
                      <span className="font-sans text-base text-foreground-green/80 group-hover:text-luxury-gold transition-colors">
                        {text}
                      </span>
                    </>
                  );
                  return href ? (
                    <a key={text} href={href} className="flex items-center gap-4 group w-fit">
                      {inner}
                    </a>
                  ) : (
                    <div key={text} className="flex items-center gap-4">
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── Right: Say Something form card ── */}
            <div className="rounded-xl bg-card-white shadow-2xl overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-luxury-gold via-bright-gold to-luxury-gold" />
              <div className="p-8">
                <p className="font-serif text-sm font-semibold tracking-[0.2em] uppercase text-foreground-green mb-1">
                  Say Something
                </p>
                <div className="h-0.5 w-10 bg-luxury-gold mb-6" />

                <form className="flex flex-col gap-4 contact-desktop" onSubmit={handleSubmit}>
                  <input type="text" required placeholder="Your Name.." />
                  <input
                    type="tel"
                    required
                    placeholder="Your Phone.."
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={15}
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
                    }}
                  />
                  <input type="email" required placeholder="Your Mail.." />
                  <select required defaultValue="">
                    <option value="" disabled>Interested In..</option>
                    {interests.map((i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                  <textarea rows={4} placeholder="Message.." className="resize-none" />
                  <button
                    type="submit"
                    className="mt-1 w-full bg-gradient-to-r from-luxury-gold to-bright-gold text-cream-text font-semibold text-sm tracking-[0.2em] uppercase py-3.5 rounded-md transition-all duration-300 hover:brightness-105"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Shared thank-you popup ── */}
      {submitted && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-luxury-green-dark/70 backdrop-blur-sm"
            onClick={() => setSubmitted(false)}
          />
          <div className="relative z-10 w-full max-w-sm rounded-2xl border border-luxury-gold/30 bg-luxury-green-dark p-8 text-center shadow-2xl">
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              aria-label="Close"
              className="absolute top-4 right-4 text-cream-text/50 hover:text-luxury-gold transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-luxury-gold flex items-center justify-center">
              <Check className="w-8 h-8 text-luxury-green-dark" strokeWidth={3} />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-luxury-gold mb-2">
              Thank You!
            </h3>
            <p className="font-sans text-sm md:text-base text-cream-text/70 leading-relaxed">
              Your request has been received. Our team will reach you shortly.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-6 inline-block px-8 py-2.5 rounded-full bg-luxury-gold hover:bg-bright-gold text-foreground-green text-xs font-semibold tracking-widest uppercase transition-all duration-300"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* ── Mobile form styling (dark theme, scoped) ── */}
      <style>{`
        .contact-mobile form input,
        .contact-mobile form select {
          width: 100%;
          border-radius: 9999px;
          background: color-mix(in srgb, var(--clr-white) 7%, transparent);
          border: 1px solid color-mix(in srgb, var(--clr-white) 12%, transparent);
          color: var(--clr-cream-text);
          padding: 12px 18px;
          font-size: 0.875rem;
          font-family: inherit;
          outline: none;
          transition: border-color 0.25s, background 0.25s;
          appearance: none;
          -webkit-appearance: none;
        }
        .contact-mobile form input::placeholder {
          color: color-mix(in srgb, var(--clr-cream-text) 35%, transparent);
        }
        .contact-mobile form input:focus,
        .contact-mobile form select:focus {
          border-color: color-mix(in srgb, var(--clr-gold) 60%, transparent);
          background: color-mix(in srgb, var(--clr-white) 10%, transparent);
        }
        .contact-mobile form select { color: color-mix(in srgb, var(--clr-cream-text) 60%, transparent); cursor: pointer; }
        .contact-mobile form select option { background: var(--clr-green); color: var(--clr-cream-text); }

        /* Desktop "Say Something" inputs (light theme, scoped) */
        .contact-desktop input,
        .contact-desktop select,
        .contact-desktop textarea {
          width: 100%;
          border: 1px solid var(--clr-border);
          border-radius: 6px;
          background: var(--clr-white);
          color: var(--clr-fg-green);
          padding: 12px 16px;
          font-size: 0.9rem;
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          appearance: none;
          -webkit-appearance: none;
        }
        .contact-desktop ::placeholder { color: color-mix(in srgb, var(--clr-sage) 65%, transparent); }
        .contact-desktop input:focus,
        .contact-desktop select:focus,
        .contact-desktop textarea:focus {
          border-color: var(--clr-gold);
          box-shadow: 0 0 0 1px color-mix(in srgb, var(--clr-gold) 40%, transparent);
        }
        .contact-desktop select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23082B1F' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 36px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}