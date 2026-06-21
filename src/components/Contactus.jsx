import { useState } from "react";
import { Check, X } from "lucide-react";
import logoLeft from "../assets/images/logo-left.svg";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-4 md:px-8 bg-luxury-green-dark"
    >
      <div className="mx-auto w-full max-w-[1100px]">
        {/* ── Two column layout ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left: Branding + Info ── */}
          <div className="flex flex-col gap-6">
            <img
              src={logoLeft}
              alt="Binary Ventures logo"
              className="h-12 md:h-14 w-fit"
            />

            <div>
              <p className="font-sans text-xs tracking-[0.3em] text-luxury-gold uppercase mb-3">
                Limited Units Available
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-tight text-cream-text">
                FIND YOUR <br />
                <span className="text-luxury-gold">DREAM HOME</span>
              </h2>
            </div>

            <p className="font-sans text-sm md:text-base text-cream-text/60 leading-relaxed max-w-sm">
              Premium residences on Sarjapur Road. Share your details and our
              team will craft a personalised offer just for you.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-2">
              {[
                { value: "2 & 3", label: "BHK Homes" },
                { value: "1296+", label: "Sq.ft" },
                { value: "Q4", label: "Possession" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="border border-luxury-gold/20 rounded-2xl px-4 py-4 text-center"
                >
                  <p className="font-serif text-lg md:text-xl text-luxury-gold">
                    {s.value}
                  </p>
                  <p className="font-sans text-xs text-cream-text/50 mt-1 tracking-wide uppercase">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Form card ── */}
          <div
            className="rounded-3xl p-6 md:p-8 border border-luxury-gold/20"
            style={{
              background:
                "color-mix(in srgb, var(--clr-white) 5%, transparent)",
              backdropFilter: "blur(12px)",
            }}
          >
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-luxury-gold mb-5">
              Request a Callback
            </p>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {/* Name */}
              <input type="text" required placeholder="Full Name *" />

              {/* Phone with country code */}
              <div className="flex gap-3">
                <select
                  aria-label="Country code"
                  className="text-luxury-gold"
                  style={{
                    width: "110px",
                    flexShrink: 0,
                    color: "var(--clr-gold)",
                  }}
                >
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+965">🇰🇼 Kuwait (+965)</option>
                  <option value="+971">🇦🇪 UAE (+971)</option>
                </select>
                <input
                  type="tel"
                  required
                  placeholder="Phone Number *"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={15}
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(
                      /\D/g,
                      "",
                    );
                  }}
                  style={{ flex: 1, width: "auto" }}
                />
              </div>
              {/* Email */}
              <input type="email" required placeholder="Email Address *" />

              {/* Unit + Budget */}
              <div className="grid grid-cols-2 gap-3">
                <select required>
                  <option value="" disabled selected>
                    Unit Type
                  </option>
                  <option value="2bhk">2 BHK</option>
                  <option value="3bhk">3 BHK</option>
                  <option value="penthouse">Penthouse</option>
                </select>
                <select required>
                  <option value="" disabled selected>
                    Budget
                  </option>
                  <option value="75-1cr">₹75L – ₹1 Cr</option>
                  <option value="1-1.5cr">₹1 – ₹1.5 Cr</option>
                  <option value="1.5-2cr">₹1.5 – ₹2 Cr</option>
                  <option value="2cr+">₹2 Cr+</option>
                </select>
              </div>

              {/* Purpose */}
              <select required>
                <option value="" disabled selected>
                  Purpose of Purchase
                </option>
                <option value="self-use">Self Use</option>
                <option value="investment">Investment</option>
                <option value="nri">NRI Investment</option>
              </select>

              {/* Submit */}
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

      {/* ── Bottom divider line ── */}
      <div className="mt-16 md:mt-20 h-px w-full bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent" />

      {/* ── Thank-you popup ── */}
      {submitted && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSubmitted(false)}
          />

          {/* Card */}
          <div className="relative z-10 w-full max-w-sm rounded-2xl border border-luxury-gold/30 bg-luxury-green-dark p-8 text-center shadow-2xl">
            {/* Close */}
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              aria-label="Close"
              className="absolute top-4 right-4 text-cream-text/50 hover:text-luxury-gold transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Check badge */}
            <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-luxury-gold flex items-center justify-center">
              <Check
                className="w-8 h-8 text-luxury-green-dark"
                strokeWidth={3}
              />
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

      <style>{`
        form input,
        form select {
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
        form input::placeholder {
          color: color-mix(in srgb, var(--clr-cream-text) 30%, transparent);
        }
        form input:focus,
        form select:focus {
          border-color: color-mix(in srgb, var(--clr-gold) 60%, transparent);
          background: color-mix(in srgb, var(--clr-white) 10%, transparent);
        }
        form select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23D7B975' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 36px;
          color: color-mix(in srgb, var(--clr-cream-text) 35%, transparent);
          cursor: pointer;
        }
        form select:valid,
        form select option:checked {
          color: var(--clr-cream-text);
        }
        form select option {
          background: var(--clr-green);
          color: var(--clr-cream-text);
        }
      `}</style>
    </section>
  );
}