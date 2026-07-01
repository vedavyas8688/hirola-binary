import { Wind, Trees, LayoutGrid, CheckCircle2 } from "lucide-react";

const FEATURES = [
  {
    icon: <Wind size={32} strokeWidth={1.2} color="#FFFFFF" />,
    tag: "Air & Light",
    title: "180° Ventilation",
    desc: "Every residence is architecturally designed to receive natural cross-ventilation from all four sides — ensuring cool, fresh air flows through your home year-round, with no stuffy corners.",
    checks: [],
    accent: false,
  },
  {
    icon: <Trees size={32} strokeWidth={1.2} color="#FFFFFF" />,
    tag: "Exclusive Outdoors",
    title: "Private Gardens",
    desc: "Select residences come with dedicated private garden spaces — a rare luxury in the city. Step out into your own green sanctuary, away from shared courtyards and common areas.",
    checks: [],
    accent: false,
  },
  {
    icon: <LayoutGrid size={32} strokeWidth={1.2} color="#FFFFFF" />,
    tag: "Signature Design",
    title: "Premium Corner Flats",
    desc: "Every apartment is a premium corner unit — three open sides, no shared walls, abundant natural light, and panoramic outlooks. There are no compromise homes here.",
    checks: [
      "No Common Walls",
      "6 Homes / Floor",
      "Large Balconies",
      "East Facing",
      "Vaastu Compliant",
    ],
    accent: true,
  },
];

export default function ApartmentFeatures() {
  return (
    <>
      <style>{`

        .af * { box-sizing: border-box; }

        .af {
          background: #FAF7F0;
          padding: 96px 80px;
          font-family: var(--font-sans);
          position: relative;
          overflow: hidden;
        }
        .af::before {
          content: '';
          position: absolute;
          top: -120px; right: -120px;
          width: 480px; height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(215,185,117,0.10) 0%, transparent 70%);
          pointer-events: none;
        }
        .af::after {
          content: '';
          position: absolute;
          bottom: -80px; left: -80px;
          width: 320px; height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(215,185,117,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .af-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Header */
        .af-header { text-align: center; margin-bottom: 72px; }
        .af-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          margin-bottom: 20px;
        }
        .af-eyebrow-line {
          width: 32px; height: 1px;
          background: linear-gradient(90deg, transparent, #D7B975);
        }
        .af-eyebrow-line.right {
          background: linear-gradient(90deg, #D7B975, transparent);
        }
        .af-eyebrow-text {
          font-size: 10px; font-weight: 600;
          letter-spacing: 0.28em; text-transform: uppercase;
          color: #B9903F;
        }
        .af-heading {
          font-family: var(--font-serif);
          font-size: clamp(34px, 4vw, 52px);
          font-weight: 600; line-height: 1.18;
          color: #082B1F; margin: 0 0 18px;
        }
        .af-heading em {
          font-style: italic; color: #B9903F;
        }
        .af-sub {
          font-size: 14.5px; line-height: 1.8;
          color: rgba(8,43,31,0.55);
          max-width: 520px; margin: 0 auto;
          font-weight: 300;
        }

        /* Grid */
        .af-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          align-items: stretch;
        }

        /* Card */
        .af-card {
          background: #FFFFFF;
          border: 1px solid rgba(215,185,117,0.28);
          border-radius: 2px;
          padding: 44px 36px 40px;
          display: flex; flex-direction: column;
          gap: 0;
          position: relative;
          overflow: hidden;
          transition: border-color 0.35s, background 0.35s, transform 0.3s, box-shadow 0.35s;
          cursor: default;
          box-shadow: 0 4px 20px rgba(8,43,31,0.04);
        }
        .af-card::before {
          content: '';
          position: absolute;
          top: 0; left: 20%; right: 20%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(215,185,117,0.7), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .af-card:hover {
          background: #FFFFFF;
          border-color: rgba(215,185,117,0.5);
          transform: translateY(-5px);
          box-shadow: 0 14px 34px rgba(8,43,31,0.08);
        }
        .af-card:hover::before { opacity: 1; }

        /* Accent card */
        .af-card-accent {
          background: rgba(215,185,117,0.10);
          border-color: rgba(215,185,117,0.45);
        }
        .af-card-accent::before { opacity: 1; }
        .af-card-accent:hover {
          background: rgba(215,185,117,0.14);
          border-color: rgba(215,185,117,0.65);
        }

        /* Corner label */
        .af-card-tag {
          font-size: 9px; font-weight: 600;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: rgba(185,144,63,0.75);
          margin-bottom: 28px;
          display: block;
        }
        .af-card-accent .af-card-tag {
          color: rgba(185,144,63,0.95);
        }

        /* Icon */
        .af-icon-wrap {
          width: 64px; height: 64px;
          border: 1px solid #0B412F;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 28px;
          background: #0B412F;
          flex-shrink: 0;
        }

        /* Title */
        .af-card-title {
          font-family: var(--font-serif);
          font-size: 24px; font-weight: 600;
          color: #082B1F; line-height: 1.2;
          margin: 0 0 16px;
        }

        /* Desc */
        .af-card-desc {
          font-size: 13.5px; line-height: 1.8;
          color: rgba(8,43,31,0.78);
          margin: 0;
          font-weight: 300;
          flex: 1;
        }

        /* Divider */
        .af-divider {
          width: 40px; height: 1px;
          background: linear-gradient(90deg, #D7B975, transparent);
          margin: 28px 0;
          opacity: 0.6;
        }

        /* Checklist */
        .af-checks {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px 16px;
        }
        .af-check {
          display: flex; align-items: center; gap: 8px;
        }
        .af-check-label {
          font-size: 11.5px; font-weight: 500;
          letter-spacing: 0.04em;
          color: #9C7A34;
          text-transform: uppercase;
          font-family: var(--font-sans);
        }

        /* Bottom rule */
        .af-card-foot {
          position: absolute;
          bottom: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(215,185,117,0.35), transparent);
          opacity: 0;
          transition: opacity 0.35s;
        }
        .af-card:hover .af-card-foot { opacity: 1; }
        .af-card-accent .af-card-foot { opacity: 0.7; }

        /* Responsive */
        @media (max-width: 1024px) {
          .af { padding: 64px 32px; }
          .af-grid { grid-template-columns: 1fr; gap: 16px; }
          .af-card { padding: 36px 28px 32px; }
        }
        @media (max-width: 600px) {
          .af { padding: 56px 20px; }
          .af-header { margin-bottom: 48px; }
          .af-card-title { font-size: 21px; }
          .af-checks { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="af" id="features">
        <div className="af-inner">

          <div className="af-header">
            <div className="af-eyebrow">
              <span className="af-eyebrow-line" />
              <span className="af-eyebrow-text">Residence Highlights</span>
              <span className="af-eyebrow-line right" />
            </div>
            <h2 className="af-heading">
              Designed for Those Who <em>Expect More</em>
            </h2>
            <p className="af-sub">
              Every detail at Codename New Dimension is intentional — where privacy,
              natural light, and rare architectural choices come together as one.
            </p>
          </div>

          <div className="af-grid">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className={`af-card${f.accent ? " af-card-accent" : ""}`}
              >
                <span className="af-card-tag">{f.tag}</span>
                <div className="af-icon-wrap">{f.icon}</div>
                <h3 className="af-card-title">{f.title}</h3>
                <p className="af-card-desc">{f.desc}</p>

                {f.checks.length > 0 && (
                  <>
                    <div className="af-divider" />
                    <div className="af-checks">
                      {f.checks.map((c) => (
                        <div key={c} className="af-check">
                          <CheckCircle2
                            size={14}
                            strokeWidth={2}
                            color="#B9903F"
                            style={{ flexShrink: 0 }}
                          />
                          <span className="af-check-label">{c}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                <div className="af-card-foot" />
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}