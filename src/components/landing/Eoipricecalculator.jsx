import { useState, useEffect, useRef } from "react";
import { useModal } from "./Modalcontext";
import { TrendingUp, IndianRupee, BadgePercent } from "lucide-react";

const CONFIGS = {
  "2bhk": {
    label: "2 BHK (1100–1200 sq.ft)",
    eoi: 1.17,
    market: 1.49,
    savings: 31.5,
    eoiRate: "₹8,499 – ₹10,250 / sq.ft",
    marketRate: "₹11,000 – ₹13,500 / sq.ft",
  },
  "3bhk": {
    label: "3 BHK (1500–1650 sq.ft)",
    eoi: 1.65,
    market: 1.98,
    savings: 33.0,
    eoiRate: "₹10,250 – ₹10,500 / sq.ft",
    marketRate: "₹11,500 – ₹14,000 / sq.ft",
  },
};

function useSmooth(target, duration = 700) {
  const valRef = useRef(target);
  const fromRef = useRef(target);
  const rafRef = useRef(null);
  const startRef = useRef(null);
  const [, forceRender] = useState(0);

  useEffect(() => {
    cancelAnimationFrame(rafRef.current);
    fromRef.current = valRef.current;
    startRef.current = null;

    const tick = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const t = Math.min((ts - startRef.current) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      valRef.current = fromRef.current + (target - fromRef.current) * ease;
      forceRender((n) => n + 1);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  return valRef.current;
}

function SavingsGauge({ targetPct, targetSavings }) {
  const arcRef = useRef(null);
  const savingsRef = useRef(null);

  const animRef = useRef(null);
  const fromPct = useRef(targetPct);
  const fromSavings = useRef(targetSavings);
  const startTs = useRef(null);

  const R = 58;
  const CIRC = 2 * Math.PI * R;

  useEffect(() => {
    const toPct = targetPct;
    const toSavings = targetSavings;
    const startPct = fromPct.current;
    const startSavings = fromSavings.current;
    startTs.current = null;

    cancelAnimationFrame(animRef.current);

    const tick = (ts) => {
      if (!startTs.current) startTs.current = ts;
      const t = Math.min((ts - startTs.current) / 700, 1);
      const ease = 1 - Math.pow(1 - t, 3);

      const curPct = startPct + (toPct - startPct) * ease;
      const curSavings = startSavings + (toSavings - startSavings) * ease;

      const dash = Math.max(0, (curPct / 100) * CIRC);
      if (arcRef.current) {
        arcRef.current.setAttribute("stroke-dasharray", `${dash} ${CIRC}`);
      }
      if (savingsRef.current) {
        savingsRef.current.textContent = `₹${curSavings.toFixed(1)} L`;
      }

      if (t < 1) animRef.current = requestAnimationFrame(tick);
      else {
        fromPct.current = toPct;
        fromSavings.current = toSavings;
      }
    };

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [targetPct, targetSavings, CIRC]);

  const initDash = (targetPct / 100) * CIRC;

  return (
    <div style={{ position: "relative", width: 170, height: 170, flexShrink: 0 }}>
      <svg width="170" height="170" style={{ transform: "rotate(-90deg)", display: "block" }}>
        {/* track — light cream border */}
        <circle cx="85" cy="85" r={R} fill="none" stroke="#E0D8C7" strokeWidth="13" strokeLinecap="round" />
        {/* animated arc — primary green */}
        <circle
          ref={arcRef}
          cx="85" cy="85" r={R}
          fill="none"
          stroke="#0B412F"
          strokeWidth="13"
          strokeLinecap="round"
          strokeDasharray={`${initDash} ${CIRC}`}
          strokeDashoffset="0"
        />
      </svg>

      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
      }}>
        <span style={{
          fontSize: 9, letterSpacing: "0.14em",
          textTransform: "uppercase", color: "#478570",
          marginBottom: 3, fontFamily: "var(--font-sans)",
        }}>
          Savings
        </span>
        <span ref={savingsRef} style={{
          fontSize: 19, fontWeight: 700, lineHeight: 1,
          color: "#0B412F",
          fontFamily: "var(--font-sans)",
          whiteSpace: "nowrap",
        }}>
          ₹{targetSavings.toFixed(1)} L
        </span>
      </div>
    </div>
  );
}

export default function EOIPriceCalculator() {
  const [selected, setSelected] = useState("2bhk");
  const { openModal } = useModal();
  const cfg = CONFIGS[selected];

  const savingsPct = Math.min(
    Math.round((cfg.savings / (cfg.market * 100)) * 100),
    95
  );

  const eoiVal = useSmooth(cfg.eoi, 700);
  const marketVal = useSmooth(cfg.market, 700);
  const savingsVal = useSmooth(cfg.savings, 700);

  return (
    <>
      <style>{`

        .eoi * { box-sizing: border-box; }
        .eoi {
          font-family: var(--font-sans);
          background: linear-gradient(145deg, #FAF7F0 0%, #F3EACE 100%);
          border: 1px solid #E0D8C7;
          border-radius: 28px;
          padding: 44px 40px 36px;
          color: #082B1F;
        }
        @media (max-width: 640px) { .eoi { padding: 28px 20px 24px; border-radius: 20px; } }

        .eoi-h {
          font-family: var(--font-serif);
          font-size: 30px; font-weight: 700;
          color: #082B1F; line-height: 1.25; margin: 0 0 10px;
        }
        .eoi-h em { font-style: normal; color: #D7B975; }
        @media (max-width: 640px) { .eoi-h { font-size: 22px; } }

        .eoi-sub {
          font-size: 13.5px; color: #478570;
          line-height: 1.75; margin: 0 0 32px; max-width: 680px;
        }

        .eoi-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
        @media (min-width: 1024px) { .eoi-grid { grid-template-columns: 38fr 42fr 28fr; } }

        .eoi-lbl {
          font-size: 11px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; color: #478570;
          display: block; margin-bottom: 9px;
        }
        .eoi-sel {
          width: 100%; padding: 13px 40px 13px 15px; border-radius: 12px;
          border: 1.5px solid #E0D8C7; background: #fff;
          font-family: var(--font-sans);
          font-size: 14px; color: #082B1F;
          outline: none; cursor: pointer;
          appearance: none; -webkit-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23D7B975' stroke-width='2.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-position: right 13px center;
          transition: border-color .2s, box-shadow .2s;
        }
        .eoi-sel:focus { border-color: #D7B975; box-shadow: 0 0 0 3px rgba(215,185,117,0.2); }

        .eoi-rates { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 14px; }
        .eoi-rate-box { background: #F0EBDB; border: 1px solid #E0D8C7; border-radius: 12px; padding: 13px 15px; }
        .eoi-rate-lbl {
          font-size: 9px; font-weight: 600; letter-spacing: 0.14em;
          text-transform: uppercase; color: #478570; display: block; margin-bottom: 5px;
        }
        .eoi-rate-val { font-size: 12.5px; font-weight: 600; color: #082B1F; }

        .eoi-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .eoi-card { border-radius: 16px; padding: 20px 18px; min-height: 108px; box-sizing: border-box; }
        .eoi-card-eoi { background: #0B412F; border: 1px solid rgba(215,185,117,0.2); }
        .eoi-card-mkt { background: #fff; border: 1.5px solid #E0D8C7; }
        .eoi-card-lbl {
          font-size: 10px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; display: block; margin-bottom: 10px;
        }
        .eoi-card-eoi .eoi-card-lbl { color: rgba(215,185,117,0.65); }
        .eoi-card-mkt .eoi-card-lbl { color: #478570; }
        .eoi-card-val {
          font-family: var(--font-sans);
          font-size: 28px; font-weight: 700; line-height: 1;
          white-space: nowrap;
        }
        /* ── both card numbers green ── */
        .eoi-card-eoi .eoi-card-val { color: #D7B975; }
        .eoi-card-mkt .eoi-card-val { color: #0B412F; }
        @media (max-width: 400px) { .eoi-card-val { font-size: 20px; } }

        .eoi-gauge-row {
          margin-top: 14px;
          background: rgba(255,255,255,0.65);
          border: 1px solid #E0D8C7;
          border-radius: 18px; padding: 18px 20px;
          display: flex; align-items: center; gap: 20px;
          min-height: 206px; box-sizing: border-box;
        }
        @media (max-width: 480px) {
          .eoi-gauge-row { flex-direction: column; text-align: center; min-height: 0; }
        }
        .eoi-legend { display: flex; flex-direction: column; gap: 10px; flex: 1; min-width: 0; }
        .eoi-legend-row { display: flex; align-items: center; gap: 9px; font-size: 12px; color: #478570; font-weight: 500; white-space: nowrap; }
        @media (max-width: 480px) { .eoi-legend-row { justify-content: center; } }
        .eoi-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
        .eoi-legend-pct {
          margin-top: 8px; padding-top: 10px;
          border-top: 1px solid #E0D8C7;
          font-size: 11px; font-weight: 600; color: #082B1F;
          white-space: nowrap;
        }

        .eoi-savings {
          background: linear-gradient(160deg, #0B412F 0%, #062319 100%);
          border: 1px solid rgba(215,185,117,0.2);
          border-radius: 20px; padding: 32px 26px;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          min-height: 210px; position: relative; overflow: hidden;
          text-align: center; gap: 0; box-sizing: border-box;
        }
        .eoi-savings::before {
          content: ''; position: absolute; top: -40px; right: -40px;
          width: 160px; height: 160px; border-radius: 50%;
          background: radial-gradient(circle, rgba(215,185,117,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .eoi-savings::after {
          content: ''; position: absolute; bottom: -30px; left: -30px;
          width: 100px; height: 100px; border-radius: 50%;
          background: radial-gradient(circle, rgba(215,185,117,0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .eoi-savings-icon-wrap {
          width: 52px; height: 52px; border-radius: 50%;
          border: 1px solid rgba(215,185,117,0.3);
          background: rgba(215,185,117,0.08);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px; flex-shrink: 0;
        }
        .eoi-savings-eye {
          font-size: 9px; font-weight: 600; letter-spacing: 0.22em;
          text-transform: uppercase; color: rgba(215,185,117,0.55);
          display: block; margin-bottom: 10px;
        }
        .eoi-savings-val {
          font-family: var(--font-sans);
          font-size: 36px; font-weight: 700;
          color: #D7B975; line-height: 1;
          letter-spacing: -0.01em;
          white-space: nowrap;
        }
        @media (max-width: 640px) { .eoi-savings-val { font-size: 28px; } }
        .eoi-savings-divider {
          width: 32px; height: 1px;
          background: rgba(215,185,117,0.25);
          margin: 14px auto;
          flex-shrink: 0;
        }
        .eoi-savings-sub {
          font-size: 11.5px; color: rgba(250,246,235,0.4);
          line-height: 1.65; max-width: 160px;
        }
        .eoi-savings-badge {
          margin-top: 20px;
          display: inline-flex; align-items: center; gap: 6px;
          padding: 6px 14px;
          border: 1px solid rgba(215,185,117,0.25);
          border-radius: 999px;
          background: rgba(215,185,117,0.07);
          flex-shrink: 0;
        }
        .eoi-savings-badge-text {
          font-size: 10px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; color: rgba(215,185,117,0.75);
          white-space: nowrap;
        }

        .eoi-cta-wrap { margin-top: 30px; display: flex; justify-content: center; }
        .eoi-cta {
          background: linear-gradient(135deg, #E8BA30, #D7B975);
          color: #082B1F;
          font-family: var(--font-sans);
          font-size: 12px; font-weight: 700; letter-spacing: 0.16em;
          text-transform: uppercase; border: none; cursor: pointer;
          padding: 17px 52px; border-radius: 12px;
          transition: background .2s, color .2s, transform .15s;
        }
        .eoi-cta:hover { background: #082B1F; color: #fff; transform: translateY(-2px); }
        .eoi-cta:active { transform: translateY(0); }

        .eoi-disclaimer { font-size: 10.5px; color: #478570; margin-top: 10px; opacity: 0.65; }
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
          {/* LEFT */}
          <div>
            <label className="eoi-lbl" htmlFor="eoi-cfg">Preferred configuration</label>
            <select id="eoi-cfg" className="eoi-sel" value={selected} onChange={(e) => setSelected(e.target.value)}>
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
                <span className="eoi-rate-val" style={{ color: "#478570" }}>{cfg.marketRate}</span>
              </div>
            </div>
            <p className="eoi-disclaimer">*All inclusive, excluding PLC + FRC</p>
          </div>

          {/* MIDDLE */}
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
              <SavingsGauge targetPct={savingsPct} targetSavings={cfg.savings} />
              <div className="eoi-legend">
                <div className="eoi-legend-row">
                  <div className="eoi-dot" style={{ background: "#E0D8C7" }} />
                  Tentative EOI Price
                </div>
                <div className="eoi-legend-row">
                  <div className="eoi-dot" style={{ background: "#0B412F" }} />
                  Savings at EOI
                </div>
                <div className="eoi-legend-pct">~{savingsPct}% saved vs market</div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="eoi-savings">
            <div className="eoi-savings-icon-wrap">
              <TrendingUp size={22} strokeWidth={1.6} color="#D7B975" />
            </div>
            <span className="eoi-savings-eye">Total savings if you book now</span>
            <div className="eoi-savings-val">₹{savingsVal.toFixed(2)} L*</div>
            <div className="eoi-savings-divider" />
            <p className="eoi-savings-sub">Approx. ₹{cfg.savings} L savings at EOI vs market.</p>
            <div className="eoi-savings-badge">
              <BadgePercent size={12} strokeWidth={1.8} color="#D7B975" style={{ opacity: 0.75 }} />
              <span className="eoi-savings-badge-text">EOI Advantage</span>
            </div>
          </div>
        </div>

        <div className="eoi-cta-wrap">
          <button className="eoi-cta" onClick={() => openModal("EOI Price Calculator")}>Get EOI Pre-Booking Offer</button>
        </div>
      </div>
    </>
  );
}