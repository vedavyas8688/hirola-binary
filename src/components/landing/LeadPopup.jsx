import { useState, useEffect } from "react";
import { X, Check } from "lucide-react";
import logoLeft from "../../assets/images/logo-left3.png";

export default function LeadPopup() {
  const [visible, setVisible] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [submitted, setSubmitted] = useState(false);

  // Show after 2.5s
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Wire to your API / CRM here
    setSubmitted(true);
  };

  const onClose = () => setVisible(false);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 backdrop-blur-xl"
        style={{ background: "rgba(4,12,6,0.92)" }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative z-10 w-full overflow-hidden flex"
        style={{
          maxWidth: "780px",
          borderRadius: "20px",
          boxShadow:
            "0 50px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(201,168,76,0.2)",
          animation: "lpSlideUp 0.38s cubic-bezier(0.22,0.61,0.36,1)",
        }}
      >
        {/* ── Left panel — dark green ── */}
        <div
          className="hidden md:flex flex-col justify-between w-[260px] shrink-0 px-8 py-9 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, #1a3a22 0%, #0d2016 50%, #081510 100%)",
            borderRight: "1px solid rgba(201,168,76,0.15)",
          }}
        >
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201,168,76,0.8) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />
          {/* Glow orb */}
          <div
            className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)",
              transform: "translate(-30%, 30%)",
            }}
          />

          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <img
                src={logoLeft}
                alt="Binary Ventures"
                className="h-10 mb-8 opacity-90"
              />
              <p
                className="font-sans text-[10px] tracking-[0.4em] uppercase mb-3"
                style={{ color: "rgba(201,168,76,0.5)" }}
              >
                Sarjapur Road · Bengaluru
              </p>
              <h2
                className="font-serif text-2xl leading-snug mb-6"
                style={{ color: "#f0e6cc" }}
              >
                Where Luxury
                <br />
                <span style={{ color: "#c9a84c" }}>Meets Life</span>
              </h2>
              <div
                className="h-px w-10 mb-6"
                style={{ background: "rgba(201,168,76,0.4)" }}
              />
              <p className="font-sans text-xs leading-relaxed text-white">
                Ultra-luxury 2 &amp; 3 BHK residences with 80% open space and no
                common walls.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { value: "2 & 3 BHK", label: "Configurations" },
                { value: "₹95 Lakhs", label: "Starting Price" },
                { value: "6 Units", label: "Per Floor Only" },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    className="font-serif text-base"
                    style={{ color: "#c9a84c" }}
                  >
                    {s.value}
                  </p>
                  <p className="font-sans text-[10px] uppercase tracking-widest mt-0.5 text-white">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right panel — gold bg ── */}
        <div
          className="flex-1 flex flex-col relative overflow-hidden"
          style={{ background: "var(--color-luxury-gold, #D7B975)" }}
        >
          {/* Sheen top */}
          <div
            className="absolute top-0 left-0 right-0 h-28 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)",
            }}
          />
          {/* Sheen bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
            style={{
              background:
                "linear-gradient(0deg, rgba(0,0,0,0.08) 0%, transparent 100%)",
            }}
          />

          {submitted ? (
            /* ── Success state ── */
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-10 py-14 gap-6">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{
                  border: "2px solid rgba(8,21,16,0.25)",
                  background: "rgba(8,21,16,0.1)",
                }}
              >
                <Check
                  className="w-9 h-9"
                  style={{ color: "#081510" }}
                  strokeWidth={2}
                />
              </div>
              <div>
                <p
                  className="font-sans text-[10px] tracking-[0.4em] uppercase mb-2"
                  style={{ color: "rgba(8,21,16,0.45)" }}
                >
                  Received
                </p>
                <h3
                  className="font-serif text-3xl mb-3"
                  style={{ color: "#081510" }}
                >
                  Thank You
                </h3>
                <p
                  className="font-sans text-sm leading-relaxed"
                  style={{ color: "rgba(8,21,16,0.55)" }}
                >
                  Our team will reach out with a personalised offer within 24
                  hours.
                </p>
              </div>
              <button
                onClick={onClose}
                className="px-10 py-3 rounded-full font-sans text-xs tracking-[0.25em] uppercase transition-all duration-300"
                style={{
                  border: "1px solid rgba(8,21,16,0.25)",
                  color: "#081510",
                  background: "rgba(8,21,16,0.08)",
                }}
              >
                Close
              </button>
            </div>
          ) : (
            /* ── Form state ── */
            <div className="relative z-10 flex-1 px-8 pt-7 pb-8 flex flex-col">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p
                    className="font-sans text-[10px] tracking-[0.4em] uppercase mb-1.5"
                    style={{ color: "rgba(8,21,16,0.45)" }}
                  >
                    Limited Units · Launch Offer
                  </p>
                  <h3
                    className="font-serif text-xl"
                    style={{ color: "#081510" }}
                  >
                    Get Exclusive Pricing
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 mt-0.5"
                  style={{
                    border: "1px solid rgba(8,21,16,0.18)",
                    color: "rgba(8,21,16,0.5)",
                    background: "rgba(8,21,16,0.06)",
                  }}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-2.5 flex-1"
              >
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  autoComplete="off"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  autoComplete="off"
                />

                {/* Phone with country code */}
                <div className="flex gap-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    style={{ width: "86px", flexShrink: 0 }}
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+971">🇦🇪 +971</option>
                    <option value="+65">🇸🇬 +65</option>
                  </select>
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    inputMode="numeric"
                    maxLength={15}
                    autoComplete="off"
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(
                        /\D/g,
                        "",
                      );
                    }}
                    style={{ flex: 1, width: "auto" }}
                  />
                </div>

                {/* BHK + Budget */}
                <div className="grid grid-cols-2 gap-2">
                  <select required defaultValue="">
                    <option value="" disabled>
                      Unit Type
                    </option>
                    <option value="2bhk">Ultra Luxury 2 BHK</option>
                    <option value="3bhk">Ultra Luxury 3 BHK</option>
                  </select>
                  <select required defaultValue="">
                    <option value="" disabled>
                      Budget
                    </option>
                    <option value="75-1cr">₹75L – ₹1Cr</option>
                    <option value="1-1.5cr">₹1 – ₹1.5Cr</option>
                    <option value="1.5-2cr">₹1.5 – ₹2Cr</option>
                    <option value="2cr+">₹2Cr+</option>
                  </select>
                </div>

                {/* CTA */}
                <button
                  type="submit"
                  className="mt-auto pt-3 w-full rounded-full py-4 font-sans font-semibold text-xs tracking-[0.3em] uppercase transition-all duration-300 group"
                  style={{
                    background:
                      "linear-gradient(135deg, #081510 0%, #0d2016 100%)",
                    color: "var(--color-luxury-gold, #D7B975)",
                    boxShadow: "0 8px 24px rgba(8,21,16,0.3)",
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    Request a Callback
                    <span className="transition-transform duration-300 group-hover:translate-x-1 text-sm">
                      →
                    </span>
                  </span>
                </button>

                <div className="flex items-center gap-3 mt-1">
                  <div
                    className="flex-1 h-px"
                    style={{ background: "rgba(8,21,16,0.15)" }}
                  />
                  <p
                    className="font-sans text-[10px] tracking-[0.2em] uppercase"
                    style={{ color: "rgba(8,21,16,0.35)" }}
                  >
                    100% Confidential
                  </p>
                  <div
                    className="flex-1 h-px"
                    style={{ background: "rgba(8,21,16,0.15)" }}
                  />
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes lpSlideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }

        .fixed form input,
        .fixed form select {
          width: 100%;
          border-radius: 9999px;
          background: rgba(8,21,16,0.08);
          border: 1px solid rgba(8,21,16,0.18);
          color: #081510;
          padding: 11px 16px;
          font-size: 0.8125rem;
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          appearance: none;
          -webkit-appearance: none;
        }
        .fixed form input::placeholder {
          color: rgba(8,21,16,0.35);
        }
        .fixed form input:focus,
        .fixed form select:focus {
          border-color: rgba(8,21,16,0.4);
          background: rgba(8,21,16,0.13);
          box-shadow: 0 0 0 3px rgba(8,21,16,0.07);
        }
        .fixed form select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%23081510' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          padding-right: 30px;
          color: rgba(8,21,16,0.35);
          cursor: pointer;
        }
        .fixed form select:valid {
          color: rgba(8,21,16,0.85);
        }
        .fixed form select option {
          background: #f5e6c0;
          color: #081510;
        }

        @media (max-width: 640px) {
          .fixed form .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
