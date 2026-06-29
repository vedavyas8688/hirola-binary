import { useState } from "react";
import { ShieldCheck, Star, MapPin, TrendingUp, Lock, ArrowRight } from "lucide-react";
import { useModal } from "./Modalcontext";

const CONFIGS = {
  "2bhk": { label: "2 BHK Ultra Luxury", size: 1117, eoiRate: 8499, marketRate: 9500, tag: "Best Value" },
  "3bhk": { label: "3 BHK Ultra Luxury", size: 1624, eoiRate: 8499, marketRate: 9500, tag: "Most Popular" },
};

const TRUST = [
  {
    icon: <ShieldCheck size={22} strokeWidth={1.5} color="#D7B975" />,
    title: "Trusted Developer",
    sub: "Transparency Assured",
  },
  {
    icon: <Star size={22} strokeWidth={1.5} color="#D7B975" />,
    title: "Ultra Luxury",
    sub: "Premium Finishes",
  },
  {
    icon: <MapPin size={22} strokeWidth={1.5} color="#D7B975" />,
    title: "Prime Location",
    sub: "Sarjapura Road",
  },
  {
    icon: <TrendingUp size={22} strokeWidth={1.5} color="#D7B975" />,
    title: "High Appreciation",
    sub: "Metro Growth Corridor",
  },
];

function fmt(n) {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(0)} Lakhs`;
  return `₹${n.toLocaleString("en-IN")}`;
}

export default function PriceAdvantage() {
  const { openModal } = useModal();
  const [active, setActive] = useState("2bhk");
  const [unlocked, setUnlocked] = useState(false);
  const cfg = CONFIGS[active];

  const eoiTotal = cfg.eoiRate * cfg.size;
  const marketTotal = cfg.marketRate * cfg.size;
  const saving = marketTotal - eoiTotal;
  const savingPct = Math.round((saving / marketTotal) * 100);

  const unlock = (e) => {
    e.preventDefault();
    setUnlocked(true);
  };

  return (
    <>
      <style>{`
        .pa-section { background: #FAF7F0; padding: 100px 80px; font-family: 'Montserrat', sans-serif; }
        .pa-inner { max-width: 1280px; margin: 0 auto; }
        .pa-tag { font-size: 10px; font-weight: 600; letter-spacing: 0.28em; text-transform: uppercase; color: #D7B975; display: block; margin-bottom: 12px; font-family: 'Montserrat', sans-serif; }
        .pa-heading { font-family: 'Playfair Display', serif; font-size: clamp(32px, 4vw, 52px); font-weight: 600; line-height: 1.15; color: #082B1F; margin: 0 0 16px; }
        .pa-heading em { color: #D7B975; font-style: italic; }
        .pa-sub { font-size: 16px; line-height: 1.7; color: #478570; max-width: 600px; margin: 0 auto 60px; }

        .pa-toggle { display: inline-flex; border: 1px solid rgba(119,90,25,0.2); border-radius: 6px; overflow: hidden; margin-bottom: 48px; }
        .pa-toggle button { padding: 12px 32px; font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; border: none; cursor: pointer; transition: background 0.25s, color 0.25s; }
        .pa-toggle button.active { background: #0B412F; color: #FAF6EB; }
        .pa-toggle button:not(.active) { background: transparent; color: #478570; }
        .pa-toggle button:not(.active):hover { background: rgba(11,65,47,0.06); }

        /* ── Blur gate ── */
        .pa-gate { position: relative; }
        .pa-card.locked { filter: blur(9px); pointer-events: none; user-select: none; }
        .pa-card { transition: filter 0.45s ease; }

        .pa-lock {
          position: absolute; inset: 0; z-index: 6;
          display: flex; align-items: center; justify-content: center; padding: 24px;
          background: rgba(250,247,240,0.45);
        }
        .pa-lock-card {
          width: 100%; max-width: 380px; text-align: center;
          background: linear-gradient(160deg, #0B412F 0%, #062319 100%);
          border: 1px solid rgba(215,185,117,0.3); border-radius: 18px;
          padding: 34px 30px 28px; box-shadow: 0 30px 80px rgba(8,43,31,0.45);
        }
        .pa-lock-icon {
          width: 46px; height: 46px; margin: 0 auto 16px; border-radius: 50%;
          border: 1px solid rgba(215,185,117,0.4); background: rgba(215,185,117,0.08);
          display: flex; align-items: center; justify-content: center; color: #E8BA30;
        }
        .pa-lock-eyebrow { font-size: 9px; font-weight: 700; letter-spacing: 0.24em; text-transform: uppercase; color: #E8BA30; display: block; }
        .pa-lock-title { font-family: 'Playfair Display', serif; font-size: 23px; font-weight: 600; color: #D7B975; margin: 9px 0 20px; line-height: 1.2; }

        .pa-lock-form { display: flex; flex-direction: column; gap: 11px; }
        .pa-lock-form input {
          width: 100%; height: 48px; border-radius: 11px; padding: 0 16px;
          background: rgba(255,255,255,0.06); border: 1px solid rgba(215,185,117,0.28);
          color: #FAF6EB; font-size: 14px; font-family: 'Montserrat', sans-serif; outline: none;
          transition: border-color .2s, background .2s; box-sizing: border-box;
        }
        .pa-lock-form input::placeholder { color: rgba(250,246,235,0.45); }
        .pa-lock-form input:focus { border-color: #D7B975; background: rgba(255,255,255,0.1); }
        .pa-lock-phone { display: flex; gap: 8px; }
        .pa-lock-cc {
          display: flex; align-items: center; height: 48px; padding: 0 14px; border-radius: 11px;
          background: rgba(255,255,255,0.06); border: 1px solid rgba(215,185,117,0.28);
          color: #D7B975; font-size: 14px; font-weight: 600; flex-shrink: 0;
        }
        .pa-lock-phone input { flex: 1; min-width: 0; }
        .pa-lock-btn {
          margin-top: 5px; width: 100%; height: 50px; border: none; cursor: pointer; border-radius: 11px;
          background: linear-gradient(135deg, #E8BA30 0%, #D7B975 100%); color: #062319;
          font-size: 12px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;
          font-family: 'Montserrat', sans-serif; transition: opacity .2s, transform .2s;
        }
        .pa-lock-btn:hover { opacity: .92; transform: translateY(-1px); }
        .pa-lock-note { font-size: 10.5px; color: rgba(215,185,117,0.6); margin: 14px 0 0; letter-spacing: 0.02em; }

        .pa-card { display: grid; grid-template-columns: 1fr 420px; border: 1px solid rgba(119,90,25,0.12); border-radius: 4px; overflow: hidden; background: #fff; box-shadow: 0 40px 80px rgba(8,43,31,0.06); }
        .pa-left { padding: 56px 60px; display: flex; flex-direction: column; gap: 40px; }
        .pa-config-label { font-size: 10px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: #D7B975; margin-bottom: 6px; }
        .pa-config-value { font-family: 'Playfair Display', serif; font-size: 26px; font-weight: 600; color: #082B1F; }
        .pa-config-size { font-size: 13px; color: #478570; margin-top: 2px; font-weight: 500; }

        .pa-prices { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
        .pa-price-block { padding: 28px 0; }
        .pa-price-block + .pa-price-block { padding-left: 40px; border-left: 1px solid rgba(215,185,117,0.2); margin-left: 40px; }
        .pa-price-tag { font-size: 10px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: #478570; margin-bottom: 10px; }
        .pa-price-num { font-family: 'Montserrat', sans-serif; font-size: clamp(32px, 3.5vw, 44px); font-weight: 700; color: #082B1F; line-height: 1; }
        .pa-price-num.market { color: #B0BAB7; text-decoration: line-through; text-decoration-color: rgba(119,90,25,0.3); font-size: clamp(24px, 2.5vw, 32px); }
        .pa-price-unit { font-size: 12px; color: #478570; margin-top: 4px; font-weight: 500; }
        .pa-price-total { font-size: 12px; color: #D7B975; margin-top: 6px; font-weight: 600; letter-spacing: 0.04em; }
        .pa-underline { height: 2px; width: 40px; background: linear-gradient(90deg, #E8BA30, #D7B975); border-radius: 2px; margin-top: 10px; }
        .pa-disclaimer { font-size: 10px; color: #B0BAB7; font-style: italic; letter-spacing: 0.04em; }

        .pa-right { background: linear-gradient(160deg, #0B412F 0%, #062319 100%); padding: 56px 48px; display: flex; flex-direction: column; justify-content: space-between; position: relative; overflow: hidden; }
        .pa-right::before { content: ''; position: absolute; top: -60px; right: -60px; width: 200px; height: 200px; border-radius: 50%; border: 1px solid rgba(215,185,117,0.08); pointer-events: none; }
        .pa-right::after { content: ''; position: absolute; bottom: -40px; left: -40px; width: 140px; height: 140px; border-radius: 50%; border: 1px solid rgba(215,185,117,0.06); pointer-events: none; }
        .pa-badge { display: inline-block; padding: 5px 14px; border: 1px solid rgba(215,185,117,0.3); font-size: 9px; font-weight: 600; letter-spacing: 0.24em; text-transform: uppercase; color: #D7B975; margin-bottom: 28px; position: relative; z-index: 1; }
        .pa-saving-label { font-size: 11px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(215,185,117,0.6); margin-bottom: 10px; position: relative; z-index: 1; }
        .pa-saving-num { font-family: 'Montserrat', sans-serif; font-size: clamp(40px, 5vw, 62px); font-weight: 700; color: #FAF6EB; line-height: 1; position: relative; z-index: 1; transition: opacity 0.3s; }
        .pa-saving-pct { margin-top: 16px; display: flex; align-items: center; gap: 10px; padding: 12px 0; border-top: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06); position: relative; z-index: 1; }
        .pa-saving-pct-val { font-family: 'Montserrat', sans-serif; font-size: 22px; font-weight: 700; color: #D7B975; }
        .pa-saving-pct-label { font-size: 10px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(215,185,117,0.6); }
        .pa-cta { width: 100%; background: #D7B975; color: #082B1F; border: none; cursor: pointer; padding: 18px 24px; font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; display: flex; align-items: center; justify-content: space-between; transition: background 0.3s, color 0.3s; position: relative; z-index: 1; border-radius: 2px; }
        .pa-cta:hover { background: #E8BA30; }

        /* ── Premium trust cards ── */
        .pa-trust { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 48px; }
        .pa-trust-item {
          display: flex; flex-direction: column; align-items: center; gap: 14px; text-align: center;
          padding: 32px 20px 28px;
          background: linear-gradient(160deg, #0B412F 0%, #062319 100%);
          border: 1px solid rgba(215,185,117,0.2); border-radius: 8px;
          position: relative; overflow: hidden;
          transition: border-color 0.3s, transform 0.3s; cursor: default;
        }
        .pa-trust-item::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, #D7B975, transparent);
        }
        .pa-trust-item:hover { border-color: rgba(215,185,117,0.45); transform: translateY(-3px); }
        .pa-trust-icon {
          width: 52px; height: 52px; border-radius: 50%;
          border: 1px solid rgba(215,185,117,0.35);
          background: rgba(215,185,117,0.08);
          display: flex; align-items: center; justify-content: center;
        }
        .pa-trust-title { font-size: 11px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #FAF6EB; }
        .pa-trust-sub { font-size: 10px; color: rgba(215,185,117,0.65); letter-spacing: 0.1em; text-transform: uppercase; }

        @media (max-width: 1024px) {
          .pa-card { grid-template-columns: 1fr; }
          .pa-trust { grid-template-columns: repeat(2, 1fr); }
          .pa-section { padding: 64px 24px; }
          .pa-left { padding: 40px 32px; }
          .pa-right { padding: 40px 32px; }
        }
        @media (max-width: 600px) {
          .pa-section { padding: 48px 16px; }
          .pa-sub { margin-bottom: 36px; font-size: 14px; }
          .pa-toggle { margin-bottom: 28px; }
          .pa-toggle button { padding: 10px 18px; font-size: 10px; }
          .pa-left { padding: 28px 20px; gap: 28px; }
          .pa-right { padding: 28px 20px; }
          .pa-prices { grid-template-columns: 1fr; }
          .pa-price-block + .pa-price-block { padding-left: 0; border-left: none; margin-left: 0; border-top: 1px solid rgba(215,185,117,0.2); padding-top: 24px; }
          .pa-trust { grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 32px; }
          .pa-trust-item { padding: 22px 12px 20px; gap: 10px; }
          .pa-trust-icon { width: 42px; height: 42px; }
          .pa-lock-card { padding: 28px 20px 24px; }
          .pa-lock-title { font-size: 19px; }
        }
      `}</style>

      <section id="advantage" className="pa-section">
        <div className="pa-inner">
          {/* Header */}
          <div style={{ textAlign: "center" }}>
            <span className="pa-tag">Investment Opportunity</span>
            <h2 className="pa-heading">
              EOI Price Advantage — <em>See Your Value Appreciation</em>
            </h2>
            <p className="pa-sub">
              Compare our exclusive EOI pricing with prevailing market rates on Sarjapura Road.
              Secure your home at a significant entry-point advantage before public launch.
            </p>
          </div>

          {/* Config toggle */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="pa-toggle">
              {Object.entries(CONFIGS).map(([key, val]) => (
                <button key={key} className={active === key ? "active" : ""} onClick={() => setActive(key)}>
                  {val.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main card — blurred until the visitor submits the form */}
          <div className="pa-gate">
            <div className={`pa-card${unlocked ? "" : " locked"}`}>
              {/* Left */}
              <div className="pa-left">
                <div>
                  <div className="pa-config-label">Selected Configuration</div>
                  <div className="pa-config-value">{cfg.label}</div>
                  <div className="pa-config-size">
                    {cfg.size.toLocaleString("en-IN")} Sq.Ft · Ultra Luxury · Sompura Gate, Sarjapura Road
                  </div>
                </div>

                <div className="pa-prices">
                  <div className="pa-price-block">
                    <div className="pa-price-tag">Exclusive EOI Rate</div>
                    <div className="pa-price-num">₹{cfg.eoiRate.toLocaleString("en-IN")}</div>
                    <div className="pa-price-unit">/sq.ft</div>
                    <div className="pa-price-total">Total: {fmt(eoiTotal)}</div>
                    <div className="pa-underline" />
                  </div>
                  <div className="pa-price-block">
                    <div className="pa-price-tag">Current Market Avg.</div>
                    <div className="pa-price-num market">₹{cfg.marketRate.toLocaleString("en-IN")}</div>
                    <div className="pa-price-unit">/sq.ft</div>
                    <div className="pa-price-total" style={{ color: "#B0BAB7" }}>Total: {fmt(marketTotal)}</div>
                  </div>
                </div>

                <div className="pa-disclaimer">
                  * Prices exclusive of statutory charges, GST and floor-rise premiums. Market rate is an indicative average for the Sarjapura Road micro-market.
                </div>
              </div>

              {/* Right — savings */}
              <div className="pa-right">
                <div>
                  <div className="pa-badge">Your Advantage</div>
                  <div className="pa-saving-label">Total Capital Saving</div>
                  <div className="pa-saving-num">{fmt(saving)}</div>
                  <div className="pa-saving-pct">
                    <div>
                      <TrendingUp size={18} strokeWidth={2} color="#D7B975" />
                    </div>
                    <div>
                      <div className="pa-saving-pct-val">{savingPct}% Below Market</div>
                      <div className="pa-saving-pct-label">Immediate Price Advantage</div>
                    </div>
                  </div>

                  <div style={{ marginTop: "24px", position: "relative", zIndex: 1 }}>
                    <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(215,185,117,0.5)", marginBottom: "8px" }}>
                      EOI Deposit
                    </div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 600, color: "#FAF6EB" }}>
                      Fully Refundable
                    </div>
                    <div style={{ fontSize: "11px", color: "rgba(215,185,117,0.5)", marginTop: "4px" }}>
                      Risk-free commitment
                    </div>
                  </div>
                </div>

                <button className="pa-cta" onClick={openModal}>
                  <span>Request EOI Details</span>
                  <ArrowRight size={18} strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Lock overlay — complete the form to reveal the advantages */}
            {!unlocked && (
              <div className="pa-lock">
                <div className="pa-lock-card">
                  <div className="pa-lock-icon">
                    <Lock size={20} strokeWidth={1.6} />
                  </div>
                  <span className="pa-lock-eyebrow">Exclusive · EOI Pricing</span>
                  <h3 className="pa-lock-title">Complete the form to view your advantage</h3>

                  <form className="pa-lock-form" onSubmit={unlock}>
                    <input type="text" required placeholder="Full Name" autoComplete="name" />
                    <div className="pa-lock-phone">
                      <span className="pa-lock-cc">+91</span>
                      <input
                        type="tel" required placeholder="Phone Number" inputMode="numeric" maxLength={10} autoComplete="tel"
                        onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/\D/g, ""); }}
                      />
                    </div>
                    <input type="email" placeholder="Email (optional)" autoComplete="email" />
                    <button type="submit" className="pa-lock-btn">Submit</button>
                  </form>
                  <p className="pa-lock-note">100% refundable EOI · We never share your details</p>
                </div>
              </div>
            )}
          </div>

          {/* Trust grid */}
          <div className="pa-trust">
            {TRUST.map((t) => (
              <div key={t.title} className="pa-trust-item">
                <div className="pa-trust-icon">{t.icon}</div>
                <div className="pa-trust-title">{t.title}</div>
                <div className="pa-trust-sub">{t.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}