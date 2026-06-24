import { useState } from "react";
import { useModal } from "./Modalcontext";

const CONFIGS = {
  "2bhk": { label: "2 BHK Ultra Luxury", size: 1117, eoiRate: 8499, marketRate: 9500, tag: "Best Value" },
  "3bhk": { label: "3 BHK Ultra Luxury", size: 1624, eoiRate: 8499, marketRate: 9500, tag: "Most Popular" },
};

const TRUST = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D7B975" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "RERA Certified",
    sub: "Transparency Assured",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D7B975" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Ultra Luxury",
    sub: "Premium Finishes",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D7B975" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    title: "Prime Location",
    sub: "Sarjapura Road",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D7B975" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
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
  const cfg = CONFIGS[active];

  const eoiTotal = cfg.eoiRate * cfg.size;
  const marketTotal = cfg.marketRate * cfg.size;
  const saving = marketTotal - eoiTotal;
  const savingPct = Math.round((saving / marketTotal) * 100);

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

        .pa-card { display: grid; grid-template-columns: 1fr 420px; border: 1px solid rgba(119,90,25,0.12); border-radius: 4px; overflow: hidden; background: #fff; box-shadow: 0 40px 80px rgba(8,43,31,0.06); }
        .pa-left { padding: 56px 60px; display: flex; flex-direction: column; gap: 40px; }
        .pa-config-label { font-size: 10px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: #D7B975; margin-bottom: 6px; }
        .pa-config-value { font-family: 'Playfair Display', serif; font-size: 26px; font-weight: 600; color: #082B1F; }
        .pa-config-size { font-size: 13px; color: #478570; margin-top: 2px; font-weight: 500; }

        .pa-prices { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
        .pa-price-block { padding: 28px 0; }
        .pa-price-block + .pa-price-block { padding-left: 40px; border-left: 1px solid rgba(215,185,117,0.2); margin-left: 40px; }
        .pa-price-tag { font-size: 10px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: #478570; margin-bottom: 10px; }
        .pa-price-num { font-family: 'Playfair Display', serif; font-size: clamp(32px, 3.5vw, 44px); font-weight: 700; color: #082B1F; line-height: 1; }
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
        .pa-saving-num { font-family: 'Playfair Display', serif; font-size: clamp(40px, 5vw, 62px); font-weight: 700; font-style: italic; color: #FAF6EB; line-height: 1; position: relative; z-index: 1; transition: opacity 0.3s; }
        .pa-saving-pct { margin-top: 16px; display: flex; align-items: center; gap: 10px; padding: 12px 0; border-top: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06); position: relative; z-index: 1; }
        .pa-saving-pct-val { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 600; color: #D7B975; }
        .pa-saving-pct-label { font-size: 10px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(215,185,117,0.6); }
        .pa-cta { width: 100%; background: #D7B975; color: #082B1F; border: none; cursor: pointer; padding: 18px 24px; font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; display: flex; align-items: center; justify-content: space-between; transition: background 0.3s, color 0.3s; position: relative; z-index: 1; border-radius: 2px; }
        .pa-cta:hover { background: #E8BA30; }

        .pa-trust { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 48px; }
        .pa-trust-item { display: flex; flex-direction: column; align-items: center; gap: 12px; text-align: center; padding: 28px 16px; border: 1px solid rgba(119,90,25,0.1); border-radius: 4px; background: #fff; transition: border-color 0.3s, background 0.3s; cursor: default; }
        .pa-trust-item:hover { border-color: rgba(215,185,117,0.3); background: rgba(215,185,117,0.03); }
        .pa-trust-icon { width: 48px; height: 48px; border-radius: 50%; border: 1px solid rgba(215,185,117,0.25); display: flex; align-items: center; justify-content: center; }
        .pa-trust-title { font-size: 11px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #082B1F; }
        .pa-trust-sub { font-size: 10px; color: #B0BAB7; letter-spacing: 0.1em; text-transform: uppercase; }

        @media (max-width: 1024px) {
          .pa-card { grid-template-columns: 1fr; }
          .pa-trust { grid-template-columns: repeat(2, 1fr); }
          .pa-section { padding: 64px 24px; }
          .pa-left { padding: 40px 32px; }
          .pa-right { padding: 40px 32px; }
        }
        @media (max-width: 600px) {
          .pa-prices { grid-template-columns: 1fr; }
          .pa-price-block + .pa-price-block { padding-left: 0; border-left: none; margin-left: 0; border-top: 1px solid rgba(215,185,117,0.2); padding-top: 24px; }
          .pa-trust { grid-template-columns: 1fr; }
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

          {/* Main card */}
          <div className="pa-card">
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
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D7B975" strokeWidth="2" strokeLinecap="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
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
