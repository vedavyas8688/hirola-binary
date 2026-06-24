import { useState, useEffect, useRef } from "react";

const CONFIGS = {
  "2bhk": {
    label: "2 BHK (1100–1200 sq.ft)",
    eoi: 1.17, market: 1.49, savings: 31.50,
    eoiRate: "₹9,950 – ₹10,250 / sq.ft",
    marketRate: "₹11,000 – ₹13,500 / sq.ft",
  },
  "3bhk": {
    label: "3 BHK (1500–1650 sq.ft)",
    eoi: 1.65, market: 1.98, savings: 33.00,
    eoiRate: "₹10,250 – ₹10,500 / sq.ft",
    marketRate: "₹11,500 – ₹14,000 / sq.ft",
  },
  "4bhk": {
    label: "4 BHK (2200–2400 sq.ft)",
    eoi: 2.20, market: 2.75, savings: 55.00,
    eoiRate: "₹10,500 – ₹10,950 / sq.ft",
    marketRate: "₹12,000 – ₹15,000 / sq.ft",
  },
};

/* ─── Animate from current value → new target (never resets to 0) ── */
function useSmooth(target, duration = 700) {
  const valRef   = useRef(target);   // live interpolated value
  const fromRef  = useRef(target);   // snapshot at animation start
  const rafRef   = useRef(null);
  const startRef = useRef(null);
  const [, forceRender] = useState(0);

  useEffect(() => {
    cancelAnimationFrame(rafRef.current);
    fromRef.current = valRef.current; // start from wherever we currently are
    startRef.current = null;

    const tick = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const t = Math.min((ts - startRef.current) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3); // ease-out cubic
      valRef.current = fromRef.current + (target - fromRef.current) * ease;
      forceRender(n => n + 1);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  return valRef.current;
}

/* ─── Gauge: all animation via useSmooth, zero CSS transitions ── */
function SavingsGauge({ targetPct, targetSavings }) {
  const pct     = useSmooth(targetPct,     700);
  const savings = useSmooth(targetSavings, 700);

  const R    = 58;
  const CIRC = 2 * Math.PI * R;
  const dash = Math.max(0, Math.min((pct / 100) * CIRC, CIRC));

  return (
    <div style={{ position: "relative", width: 170, height: 170, flexShrink: 0 }}>
      <svg width="170" height="170" style={{ transform: "rotate(-90deg)", display: "block" }}>
        {/* track */}
        <circle cx="85" cy="85" r={R} fill="none"
          stroke="var(--clr-border)" strokeWidth="13" strokeLinecap="round" />
        {/* filled arc — NO CSS transition, driven purely by RAF */}
        <circle cx="85" cy="85" r={R} fill="none"
          stroke="var(--clr-gold)" strokeWidth="13" strokeLinecap="round"
          strokeDasharray={`${dash} ${CIRC}`}
          strokeDashoffset="0"
        />
      </svg>

      {/* centre */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
      }}>
        <span style={{
          fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase",
          color: "var(--clr-sage)", marginBottom: 3,
          fontFamily: "var(--font-sans, 'Poppins', sans-serif)",
        }}>Savings</span>
        <span style={{
          fontSize: 19, fontWeight: 700, lineHeight: 1,
          color: "var(--clr-fg-green)",
          fontFamily: "var(--font-serif, 'Playfair Display', serif)",
        }}>
          ₹{savings.toFixed(1)} L
        </span>
      </div>
    </div>
  );
}

export default function EOIPriceCalculator() {
  const [selected, setSelected] = useState("2bhk");
  const cfg = CONFIGS[selected];

  const savingsPct = Math.min(
    Math.round((cfg.savings / (cfg.market * 100)) * 10000),
    95
  );

  const eoiVal     = useSmooth(cfg.eoi,     700);
  const marketVal  = useSmooth(cfg.market,  700);
  const savingsVal = useSmooth(cfg.savings, 700);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@400;500;600;700&display=swap');

        .eoi * { box-sizing: border-box; }
        .eoi {
          font-family: var(--font-sans, 'Poppins', sans-serif);
          background: linear-gradient(145deg, var(--clr-bg-cream, #FAF7F0) 0%, var(--clr-cream, #F3EACE) 100%);
          border: 1px solid var(--clr-border, #E0D8C7);
          border-radius: 28px;
          padding: 44px 40px 36px;
          color: var(--clr-fg-green, #082B1F);
        }
        @media (max-width: 640px) { .eoi { padding: 28px 20px 24px; border-radius: 20px; } }

        .eoi-h {
          font-family: var(--font-serif, 'Playfair Display', serif);
          font-size: 30px; font-weight: 700;
          color: var(--clr-fg-green, #082B1F);
          line-height: 1.25; margin: 0 0 10px;
        }
        .eoi-h em { font-style: normal; color: var(--clr-gold, #D7B975); }
        @media (max-width: 640px) { .eoi-h { font-size: 22px; } }

        .eoi-sub {
          font-size: 13.5px; color: var(--clr-sage, #478570);
          line-height: 1.75; margin: 0 0 32px; max-width: 680px;
        }

        /* ── grid ── */
        .eoi-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
        @media (min-width: 1024px) { .eoi-grid { grid-template-columns: 38fr 42fr 28fr; } }

        /* ── select ── */
        .eoi-lbl {
          font-size: 11px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--clr-sage, #478570);
          display: block; margin-bottom: 9px;
        }
        .eoi-sel {
          width: 100%; padding: 13px 40px 13px 15px; border-radius: 12px;
          border: 1.5px solid var(--clr-border, #E0D8C7);
          background: var(--clr-white, #fff);
          font-family: var(--font-sans, 'Poppins', sans-serif);
          font-size: 14px; color: var(--clr-fg-green, #082B1F);
          outline: none; cursor: pointer;
          appearance: none; -webkit-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23D7B975' stroke-width='2.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-position: right 13px center;
          transition: border-color .2s, box-shadow .2s;
        }
        .eoi-sel:focus {
          border-color: var(--clr-gold, #D7B975);
          box-shadow: 0 0 0 3px rgba(215,185,117,0.2);
        }

        /* ── rate boxes ── */
        .eoi-rates { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 14px; }
        .eoi-rate-box {
          background: var(--clr-panel, #F0EBDB);
          border: 1px solid var(--clr-border, #E0D8C7);
          border-radius: 12px; padding: 13px 15px;
        }
        .eoi-rate-lbl {
          font-size: 9px; font-weight: 600; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--clr-sage, #478570);
          display: block; margin-bottom: 5px;
        }
        .eoi-rate-val { font-size: 12.5px; font-weight: 600; color: var(--clr-fg-green, #082B1F); }

        /* ── compare cards ── */
        .eoi-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .eoi-card { border-radius: 16px; padding: 20px 18px; }
        .eoi-card-eoi {
          background: var(--clr-primary-green, #0B412F);
          border: 1px solid rgba(215,185,117,0.2);
        }
        .eoi-card-mkt {
          background: var(--clr-white, #fff);
          border: 1.5px solid var(--clr-border, #E0D8C7);
        }
        .eoi-card-lbl {
          font-size: 10px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; display: block; margin-bottom: 10px;
        }
        .eoi-card-eoi .eoi-card-lbl { color: rgba(215,185,117,0.65); }
        .eoi-card-mkt .eoi-card-lbl { color: var(--clr-sage, #478570); }
        .eoi-card-val {
          font-family: var(--font-serif, 'Playfair Display', serif);
          font-size: 28px; font-weight: 700; line-height: 1;
        }
        .eoi-card-eoi .eoi-card-val { color: var(--clr-gold, #D7B975); }
        .eoi-card-mkt .eoi-card-val { color: var(--clr-fg-green, #082B1F); }
        @media (max-width: 400px) { .eoi-card-val { font-size: 22px; } }

        /* ── gauge row ── */
        .eoi-gauge-row {
          margin-top: 14px;
          background: rgba(255,255,255,0.65);
          border: 1px solid var(--clr-border, #E0D8C7);
          border-radius: 18px; padding: 18px 20px;
          display: flex; align-items: center; gap: 20px;
        }
        .eoi-legend { display: flex; flex-direction: column; gap: 10px; flex: 1; }
        .eoi-legend-row {
          display: flex; align-items: center; gap: 9px;
          font-size: 12px; color: var(--clr-sage, #478570); font-weight: 500;
        }
        .eoi-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
        .eoi-legend-pct {
          margin-top: 8px; padding-top: 10px;
          border-top: 1px solid var(--clr-border, #E0D8C7);
          font-size: 11px; font-weight: 600;
          color: var(--clr-fg-green, #082B1F);
        }

        /* ── savings card ── */
        .eoi-savings {
          background: var(--grad-green, linear-gradient(160deg, #0B412F 0%, #062319 100%));
          border-radius: 20px; padding: 26px 22px;
          display: flex; flex-direction: column; justify-content: space-between;
          min-height: 210px; position: relative; overflow: hidden;
        }
        @media (max-width: 1024px) { .eoi-savings { min-height: auto; } }
        .eoi-savings::before {
          content: ''; position: absolute; top: -32px; right: -32px;
          width: 130px; height: 130px; border-radius: 50%;
          background: rgba(215,185,117,0.07); pointer-events: none;
        }
        .eoi-savings-eye {
          font-size: 9px; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; color: rgba(215,185,117,0.6);
          display: block; margin-bottom: 12px;
        }
        .eoi-savings-val {
          font-family: var(--font-serif, 'Playfair Display', serif);
          font-size: 34px; font-weight: 700;
          color: var(--clr-gold, #D7B975); line-height: 1.1;
        }
        @media (max-width: 640px) { .eoi-savings-val { font-size: 26px; } }
        .eoi-savings-sub {
          font-size: 12px; color: rgba(250,246,235,0.55); margin-top: 7px;
        }
        .eoi-savings-icon {
          font-size: 42px; color: rgba(215,185,117,0.12);
          line-height: 1; margin-top: 18px;
          font-family: var(--font-serif, 'Playfair Display', serif);
        }

        /* ── CTA ── */
        .eoi-cta-wrap { margin-top: 30px; display: flex; justify-content: center; }
        .eoi-cta {
          background: var(--grad-gold, linear-gradient(135deg, #E8BA30, #D7B975));
          color: var(--clr-fg-green, #082B1F);
          font-family: var(--font-sans, 'Poppins', sans-serif);
          font-size: 12px; font-weight: 700; letter-spacing: 0.16em;
          text-transform: uppercase; border: none; cursor: pointer;
          padding: 17px 52px; border-radius: 12px;
          transition: opacity .2s, transform .15s;
        }
        .eoi-cta:hover { opacity: .88; transform: translateY(-2px); }
        .eoi-cta:active { transform: translateY(0); opacity: .8; }

        .eoi-disclaimer {
          font-size: 10.5px; color: var(--clr-sage, #478570);
          font-style: italic; margin-top: 10px; opacity: 0.65;
        }
      `}</style>

      <div className="eoi">
        <h2 className="eoi-h">
          EOI Price Advantage — <em>Discover Your Savings</em>
        </h2>
        <p className="eoi-sub">
          Market price in the Whitefield–Sarjapur corridor: ₹11,000–₹13,500/sq.ft.
          Enter early with Codename New Dimension at ₹9,950–₹10,250/sq.ft — all inclusive.
        </p>

        <div className="eoi-grid">

          {/* ── LEFT ── */}
          <div>
            <label className="eoi-lbl" htmlFor="eoi-cfg">Preferred configuration</label>
            <select id="eoi-cfg" className="eoi-sel"
              value={selected} onChange={e => setSelected(e.target.value)}>
              {Object.entries(CONFIGS).map(([k, v]) => (
                <option key={k} value={k}>{v.label}</option>
              ))}
            </select>

            <div className="eoi-rates">
              <div className="eoi-rate-box">
                <span className="eoi-rate-lbl">EOI Rate</span>
                <span className="eoi-rate-val">{cfg.eoiRate}</span>
              </div>
              <div className="eoi-rate-box">
                <span className="eoi-rate-lbl">Market Rate</span>
                <span className="eoi-rate-val" style={{ color: "var(--clr-sage, #478570)" }}>
                  {cfg.marketRate}
                </span>
              </div>
            </div>
            <p className="eoi-disclaimer">*All inclusive, excluding PLC + FRC</p>
          </div>

          {/* ── MIDDLE ── */}
          <div>
            <div className="eoi-cards">
              <div className="eoi-card eoi-card-eoi">
                <span className="eoi-card-lbl">Tentative EOI Price</span>
                <div className="eoi-card-val">₹{eoiVal.toFixed(2)} Cr*</div>
              </div>
              <div className="eoi-card eoi-card-mkt">
                <span className="eoi-card-lbl">Market Price</span>
                <div className="eoi-card-val">₹{marketVal.toFixed(2)} Cr</div>
              </div>
            </div>

            <div className="eoi-gauge-row">
              {/* No key prop — never remounts, animates in-place */}
              <SavingsGauge targetPct={savingsPct} targetSavings={cfg.savings} />
              <div className="eoi-legend">
                <div className="eoi-legend-row">
                  <div className="eoi-dot" style={{ background: "var(--clr-border, #E0D8C7)" }} />
                  Tentative EOI Price
                </div>
                <div className="eoi-legend-row">
                  <div className="eoi-dot" style={{ background: "var(--clr-gold, #D7B975)" }} />
                  Savings at EOI
                </div>
                <div className="eoi-legend-pct">
                  You save ~{savingsPct}% vs market
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="eoi-savings">
            <div>
              <span className="eoi-savings-eye">Total savings if you book now</span>
              <div className="eoi-savings-val">₹{savingsVal.toFixed(2)} L*</div>
              <p className="eoi-savings-sub">
                Approx. ₹{cfg.savings} L savings at EOI vs market.
              </p>
            </div>
            <div className="eoi-savings-icon">↑</div>
          </div>

        </div>

        <div className="eoi-cta-wrap">
          <button className="eoi-cta">Get EOI Pre-Booking Offer</button>
        </div>
      </div>
    </>
  );
}