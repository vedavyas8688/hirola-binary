import { lpHero } from "../../data/landingData";

const STYLES = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .lh-1 { animation: fadeUp 1s cubic-bezier(.22,.61,.36,1) 0.08s both; }
  .lh-2 { animation: fadeUp 1s cubic-bezier(.22,.61,.36,1) 0.22s both; }
  .lh-3 { animation: fadeUp 1s cubic-bezier(.22,.61,.36,1) 0.36s both; }
  .lh-4 { animation: fadeUp 1s cubic-bezier(.22,.61,.36,1) 0.50s both; }
  .lh-5 { animation: fadeUp 1s cubic-bezier(.22,.61,.36,1) 0.62s both; }
  .lh-6 { animation: fadeUp 1s cubic-bezier(.22,.61,.36,1) 0.74s both; }

  /* Left panel — deep luxury green */
  .lh-panel {
    position: relative;
    background: var(--clr-primary-green);
  }

  /* Slim gold right-edge accent */
  .lh-panel::after {
    content: "";
    position: absolute;
    top: 12%;
    bottom: 12%;
    right: 0;
    width: 1px;
    background: linear-gradient(
      to bottom,
      transparent,
      var(--clr-gold-bright) 30%,
      var(--clr-gold-bright) 70%,
      transparent
    );
    opacity: 0.6;
    pointer-events: none;
  }

  /* Subtle top-left corner ornament */
  .lh-panel::before {
    content: "";
    position: absolute;
    top: 32px;
    left: 40px;
    width: 32px;
    height: 32px;
    border-top: 1px solid var(--clr-gold-bright);
    border-left: 1px solid var(--clr-gold-bright);
    opacity: 0.45;
    pointer-events: none;
  }

  /* Gold hairline divider */
  .lh-rule {
    width: 100%;
    height: 0.5px;
    background: linear-gradient(to right, var(--clr-gold-bright), transparent);
    opacity: 0.4;
    margin: 24px 0;
  }

  /* Price block — gold left border */
  .lh-price-block {
    border-left: 2px solid var(--clr-gold-bright);
    padding-left: 18px;
  }

  /* CTA button */
  .lh-cta {
    font-family: var(--font-serif);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    background: transparent;
    color: var(--clr-gold-bright);
    border: 1px solid var(--clr-gold-bright);
    cursor: pointer;
    padding: 15px 42px;
    transition: background 0.35s, color 0.35s, transform 0.3s, box-shadow 0.35s;
    position: relative;
    overflow: hidden;
  }
  .lh-cta::before {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--clr-gold-bright);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s cubic-bezier(.22,.61,.36,1);
    z-index: 0;
  }
  .lh-cta:hover::before { transform: scaleX(1); }
  .lh-cta span {
    position: relative;
    z-index: 1;
    transition: color 0.35s;
  }
  .lh-cta:hover span { color: var(--clr-fg-green); }
  .lh-cta:hover { transform: translateY(-1px); box-shadow: 0 6px 24px rgba(0,0,0,0.3); }
`;

export default function LandingHero() {
  return (
    <>
      <style>{STYLES}</style>

      <section style={{ display: "flex", width: "100%", height: "100vh", paddingTop: "69px" }}>

        {/* ══════════════════════════════════
            LEFT PANEL
        ══════════════════════════════════ */}
        <div
          className="lh-panel"
          style={{
            width: "40%",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 56px 0 60px",
            overflow: "hidden",
            zIndex: 10,
          }}
        >

          {/* Eyebrow */}
          <p className="lh-1" style={{
            fontFamily: "var(--font-serif)",
            fontSize: "11px",
            fontWeight: 400,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "var(--clr-white)",
            opacity: 0.6,
            margin: "0 0 14px",
          }}>
            Introducing
          </p>

          {/* Project 4 */}
          <h1 className="lh-2" style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(48px, 5.5vw, 72px)",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--clr-gold-bright)",   /* #E8BA30 */
            lineHeight: 0.95,
            margin: "0 0 10px",
          }}>
            Project 4
          </h1>

          {/* By Binary Ventures */}
          <p className="lh-2" style={{
            fontFamily: "var(--font-serif)",
            fontSize: "12px",
            fontWeight: 300,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--clr-white)",
            opacity: 0.55,
            margin: 0,
          }}>
            by Binary Ventures
          </p>

          <div className="lh-rule lh-3" />

          {/* Description */}
          <p className="lh-3" style={{
            fontFamily: "var(--font-serif)",
            fontSize: "15px",
            fontWeight: 400,
            lineHeight: 1.85,
            color: "var(--clr-white)",
            opacity: 0.8,
            maxWidth: "320px",
            margin: "0 0 28px",
          }}>
            A 3.5-acre private sanctuary on Sarjapur Road — 80% open
            landscapes, only 6 residences per floor, no common walls.
          </p>

          {/* Pricing */}
          <div className="lh-price-block lh-4" style={{ marginBottom: "30px" }}>
            <p style={{
              fontFamily: "var(--font-serif)",
              fontSize: "22px",
              fontWeight: 600,
              color: "var(--clr-white)",
              margin: "0 0 6px",
              lineHeight: 1.25,
            }}>
              2 BHK from ₹95 L &nbsp;·&nbsp; 3 BHK from ₹1.35 Cr
            </p>
            <p style={{
              fontFamily: "var(--font-serif)",
              fontSize: "11px",
              fontWeight: 300,
              color: "var(--clr-gold-bright)",  /* #E8BA30 — full brightness */
              letterSpacing: "0.06em",
              margin: 0,
            }}>
              ₹8,499 / sq.ft &nbsp;·&nbsp; Pre-Launch &nbsp;·&nbsp; EOI 100% Refundable
            </p>
          </div>

          {/* Location */}
          <div className="lh-5" style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "28px" }}>
            <svg width="11" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                stroke="var(--clr-gold-bright)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                stroke="var(--clr-gold-bright)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{
              fontFamily: "var(--font-serif)",
              fontSize: "12px",
              fontWeight: 300,
              color: "var(--clr-white)",
              opacity: 0.65,
              letterSpacing: "0.08em",
            }}>
              Chambenahalli, Sarjapur Road, Bengaluru
            </span>
          </div>

          {/* CTA */}
          <div className="lh-6">
            <button className="lh-cta">
              <span>SUBMIT YOUR EOI NOW</span>
            </button>
          </div>

        </div>

        {/* ══════════════════════════════════
            RIGHT PANEL — full-bleed image
        ══════════════════════════════════ */}
        <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>

          <img
            src={lpHero.bg}
            alt="Binary Project 4 — Sarjapur Road, Bengaluru"
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center",
              transform: "scale(1.04)",
              transition: "transform 8s ease-out",
            }}
          />

          {/* Dark gradient — heavier at bottom */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(6,35,25,0.65) 0%, rgba(6,35,25,0.18) 50%, transparent 100%)",
            pointerEvents: "none",
          }} />

          {/* Left-edge green blend */}
          <div style={{
            position: "absolute", inset: "0 auto 0 0", width: "100px",
            background: "linear-gradient(to right, rgba(11,65,47,0.72), transparent)",
            pointerEvents: "none",
          }} />

          {/* Centred overlay text */}
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            textAlign: "center", padding: "0 52px",
            pointerEvents: "none",
          }}>
            <h2 className="lh-4" style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(22px, 3vw, 44px)",
              fontWeight: 700,
              color: "var(--clr-cream-text)",
              lineHeight: 1.2,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              maxWidth: "500px",
              textShadow: "0 2px 28px rgba(6,35,25,0.55)",
              margin: "0 0 18px",
            }}>
              Where Space, Privacy &amp; Nature Converge.
            </h2>

            <p className="lh-5" style={{
              fontFamily: "var(--font-serif)",
              fontSize: "13px",
              fontWeight: 300,
              color: "rgba(250,246,235,0.75)",
              letterSpacing: "0.1em",
              margin: 0,
            }}>
              Bengaluru's Most Anticipated Address on Sarjapur Road
            </p>
          </div>

          {/* Pre-Launch badge — bottom right */}
          <div className="lh-6" style={{
            position: "absolute", bottom: "30px", right: "30px",
            display: "flex", alignItems: "center", gap: "12px",
          }}>
            <div style={{ width: "36px", height: "0.5px", background: "rgba(232,186,48,0.55)" }} />
            <span style={{
              fontFamily: "var(--font-serif)",
              fontSize: "10px",
              fontWeight: 400,
              color: "var(--clr-gold-bright)",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
            }}>
              Pre-Launch
            </span>
            <div style={{ width: "36px", height: "0.5px", background: "rgba(232,186,48,0.55)" }} />
          </div>

        </div>

      </section>
    </>
  );
}