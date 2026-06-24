import {
  Building2,
  Trees,
  Dumbbell,
  MapPin,
  TrendingUp,
  Train,
  Users,
  LayoutGrid,
} from "lucide-react";

const CARDS = [
  {
    icon: LayoutGrid,
    num: "01",
    title: "6 Homes Per Floor",
    desc: "Only 6 exclusive residences per floor with no common walls — maximum privacy by design.",
  },
  {
    icon: Trees,
    num: "02",
    title: "80% Open Space",
    desc: "3.5 acres with 80%+ devoted to open landscapes, central gardens and green corridors.",
  },
  {
    icon: Building2,
    num: "03",
    title: "8,000 sq.ft Clubhouse",
    desc: "60+ curated amenities across a grand private clubhouse built for elevated living.",
  },
  {
    icon: Train,
    num: "04",
    title: "Metro Connectivity",
    desc: "Upcoming metro access. 10–15 min to ORR, Whitefield, Electronic City & Bellandur.",
  },
  {
    icon: TrendingUp,
    num: "05",
    title: "Strong ROI",
    desc: "High rental demand, IT catchment proximity and a prime growth corridor advantage.",
  },
  {
    icon: MapPin,
    num: "06",
    title: "Prime Address",
    desc: "Sarjapur Main Road frontage. 100 ft / 80 ft wide road access. STRR & PRR corridors.",
  },
  {
    icon: Dumbbell,
    num: "07",
    title: "60+ Amenities",
    desc: "Sky cinema, BBQ lawn, yoga courts, star gazing deck, pool lounge and much more.",
  },
  {
    icon: Users,
    num: "08",
    title: "234 Exclusive Units",
    desc: "Ultra luxury 2 & 3 BHK homes. Vaastu compliant. East & north facing options.",
  },
];

const STATS = [
  { value: "234", label: "Exclusive Units" },
  { value: "3.5", label: "Acres of Land" },
  { value: "60+", label: "Amenities" },
  { value: "80%", label: "Open Space" },
];

export default function Legacy() {
  return (
    <>
      <style>{`
        /* ── section base ── */
        .lg-section {
          background: white;
          padding: 100px 0 0;
          overflow: hidden;
          position: relative;
        }

        /* subtle diagonal texture lines */
        .lg-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            -55deg,
            transparent,
            transparent 48px,
            rgba(8,43,31,0.045) 48px,
            rgba(8,43,31,0.045) 49px
          );
          pointer-events: none;
        }

        .lg-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 60px;
          position: relative;
          z-index: 1;
        }

        /* ── top split: header left / stats right ── */
        .lg-top {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: end;
          margin-bottom: 72px;
        }

        /* ── eyebrow ── */
        .lg-eyebrow {
          font-family: var(--font-serif);
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.6em;
          text-transform: uppercase;
          color: var(--clr-fg-green);
          opacity: 0.5;
          margin: 0 0 18px;
        }

        /* ── heading ── */
        .lg-heading {
          font-family: var(--font-serif);
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--clr-fg-green);
          line-height: 1.05;
          margin: 0 0 24px;
        }

        /* thin dark rule under heading */
        .lg-rule {
          width: 48px;
          height: 2px;
          background: var(--clr-fg-green);
          opacity: 0.25;
          margin: 0 0 24px;
        }

        .lg-intro {
          font-family: var(--font-serif);
          font-size: 15px;
          font-weight: 400;
          line-height: 1.8;
          color: var(--clr-fg-green);
          opacity: 0.65;
          max-width: 420px;
          margin: 0;
        }

        /* ── stats block right ── */
        .lg-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          background: rgba(8,43,31,0.12);
        }

        .lg-stat {
          background: var(--clr-gold-bright);
          padding: 32px 28px;
          border-top: 2px solid transparent;
          transition: border-color 0.3s, background 0.3s;
        }
        .lg-stat:hover {
          background: var(--clr-fg-green);
          border-top-color: var(--clr-gold-bright);
        }
        .lg-stat:hover .lg-stat-value,
        .lg-stat:hover .lg-stat-label {
          color: var(--clr-gold-bright);
        }

        .lg-stat-value {
          font-family: var(--font-serif);
          font-size: 42px;
          font-weight: 700;
          color: var(--clr-fg-green);
          line-height: 1;
          margin: 0 0 6px;
          transition: color 0.3s;
        }
        .lg-stat-label {
          font-family: var(--font-serif);
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--clr-fg-green);
          opacity: 0.55;
          margin: 0;
          transition: color 0.3s, opacity 0.3s;
        }
        .lg-stat:hover .lg-stat-label { opacity: 1; }

        /* ── cards grid ── */
        .lg-cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
          background: rgba(8,43,31,0.12);
          margin: 0 -60px;        /* bleed to edges */
        }

        .lg-card {
          background: var(--clr-fg-green);
          padding: 40px 32px 44px;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0;
          transition: background 0.35s;
          overflow: hidden;
        }
        .lg-card::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--clr-gold-bright);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(.22,.61,.36,1);
        }
        .lg-card:hover::after { transform: scaleX(1); }
        .lg-card:hover { background: var(--clr-green-dark); }

        /* large ghost number */
        .lg-card-num {
          font-family: var(--font-serif);
          font-size: 72px;
          font-weight: 700;
          color: rgba(255,255,255,0.04);
          line-height: 1;
          position: absolute;
          top: 16px;
          right: 20px;
          letter-spacing: -0.02em;
          pointer-events: none;
          user-select: none;
        }

        .lg-card-icon {
          margin-bottom: 28px;
        }

        .lg-card-title {
          font-family: var(--font-serif);
          font-size: 17px;
          font-weight: 700;
          color: var(--clr-gold-bright);
          margin: 0 0 12px;
          line-height: 1.25;
        }

        .lg-card-desc {
          font-family: var(--font-serif);
          font-size: 13px;
          font-weight: 400;
          line-height: 1.8;
          color: rgba(255,255,255,0.52);
          margin: 0;
        }

        /* ── bottom bar ── */
        .lg-bottom {
          background: var(--clr-fg-green);
          margin: 0 -60px;
          padding: 22px 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          position: relative;
          z-index: 1;
        }
        .lg-bottom-text {
          font-family: var(--font-serif);
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          margin: 0;
        }
        .lg-bottom-cta {
          font-family: var(--font-serif);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: var(--clr-fg-green);
          background: var(--clr-gold-bright);
          border: none;
          padding: 13px 32px;
          cursor: pointer;
          transition: background 0.3s, transform 0.25s;
          flex-shrink: 0;
        }
        .lg-bottom-cta:hover {
          background: var(--clr-gold);
          transform: translateY(-1px);
        }

        @media (max-width: 900px) {
          .lg-top { grid-template-columns: 1fr; gap: 40px; }
          .lg-cards { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .lg-inner { padding: 0 20px; }
          .lg-cards { margin: 0 -20px; }
          .lg-cards { grid-template-columns: 1fr; }
          .lg-bottom { margin: 0 -20px; padding: 22px 20px; flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <section id="heritage" className="lp-fade lg-section">
        <div className="lg-inner">

          {/* ── Top: header + stats ── */}
          <div className="lg-top">

            {/* Left — heading */}
            <div>
              <p className="lg-eyebrow">Binary Ventures · Project 4</p>
              <h2 className="lg-heading">The Legacy of<br />New Dimension</h2>
              <div className="lg-rule" />
              <p className="lg-intro">
                Ultra luxury living on Sarjapur Road — low density, open spaces,
                no common walls, and a future-ready growth corridor address built
                to appreciate.
              </p>
            </div>

            {/* Right — stat boxes */}
            <div className="lg-stats">
              {STATS.map(({ value, label }) => (
                <div key={label} className="lg-stat">
                  <p className="lg-stat-value">{value}</p>
                  <p className="lg-stat-label">{label}</p>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* ── Cards — full bleed ── */}
        <div className="lg-inner" style={{ paddingBottom: 0 }}>
          <div className="lg-cards">
            {CARDS.map(({ icon: Icon, num, title, desc }) => (
              <div key={title} className="lg-card">

                {/* ghost number */}
                <span className="lg-card-num" aria-hidden="true">{num}</span>

                {/* icon */}
                <div className="lg-card-icon">
                  <Icon
                    size={22}
                    strokeWidth={1.25}
                    style={{ stroke: "var(--clr-gold-bright)" }}
                  />
                </div>

                <h3 className="lg-card-title">{title}</h3>
                <p className="lg-card-desc">{desc}</p>

              </div>
            ))}
          </div>

          {/* ── Bottom bar ── */}
          <div className="lg-bottom">
            <p className="lg-bottom-text">
              Chambenahalli, Sarjapur Road, Bengaluru &nbsp;·&nbsp; ₹8,499 / sq.ft &nbsp;·&nbsp; Pre-Launch
            </p>
            <button className="lg-bottom-cta">Register Your Interest</button>
          </div>

        </div>
      </section>
    </>
  );
}