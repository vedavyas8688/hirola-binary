 import { useEffect, useRef } from "react";

const FEATURES = [
  {
    tag: "The Residences",
    title: "Architectural Excellence",
    body: "Only 6 ultra-luxury residences per floor with no common walls. East & North facing options, large balconies, cross ventilation, and maximum natural light — Vaastu compliant homes built for discerning families.",
    cta: "Explore the Configurations",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXz0LRbapZqRvwkrvcc9D_BTGuxEVDjfHLI9tte4EWdg_w-hZCq3Qk9RLuXhuxDIqs2tCgrPh_sLyvOzIFOrvFcNqah4zZ4DWDVBUNHb5pN1jv2mTJtqRiyliUzUVZQpj_6AXAhmVDUqGsnVeJnarSFcvwnUuP-xKvMZbcuW_NYafrXVZGtNcewcwLq4pSqb9myIdvi2aBzT5t30OhOfmTB-ApLZ-Alo8OB-QcISNnuJ6r2zpQi7Ptiql0qD0pBJg8e0_fw3fKtxE",
    imageAlt: "Binary Project 4 ultra luxury apartment interior",
    imageRight: true,
  },
  {
    tag: "The Lifestyle",
    title: "60+ Curated Amenities",
    body: "An 8,000+ sq.ft grand clubhouse, sky cinema terrace, BBQ lawn, yoga court, star gazing deck, pool lounge, toddler zones, senior park, butterfly garden, amphitheatre, skating rink, cricket nets and more — every inch designed for extraordinary living.",
    cta: "View All Amenities",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD51uG4ySflgDLBstECuN9Hgtx6QTIDQEFw7kEvOpQgedcCnYnlgINPxhy9Sf0ryAD9G0h3PlcHwQzudbPfMiEDwUsc8m27uCVshUhY4vpuKl0XRNTmTtBjbUp-KmkVlxHnwuhcGSM9dbUvsTXw4VVZargdNywbNfX9sUcg3q_TpgaC9gFjAqrlq2LkWqsdHfD9TrqIV0ti6powoc9a_uq8BNoJSuT9RCuFPOM_EXMYWPcr75evnHwhQRFpgjFxYFAZBltaMHbNfdQ",
    imageAlt: "Binary Project 4 premium amenities and clubhouse",
    imageRight: false,
  },
];

function useReveal(direction) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("reveal", direction);
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("is-visible"); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [direction]);
  return ref;
}

function FeatureRow({ tag, title, body, cta, image, imageAlt, imageRight }) {
  const textRef = useReveal(imageRight ? "reveal-left" : "reveal-right");
  const imgRef  = useReveal(imageRight ? "reveal-right" : "reveal-left");

  const textBlock = (
    <div ref={textRef} style={{ display: "flex", flexDirection: "column", gap: "20px", justifyContent: "center", padding: "8px 0" }}>
      <span style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "10px", fontWeight: 600, letterSpacing: "0.24em", textTransform: "uppercase", color: "#D7B975" }}>
        {tag}
      </span>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: "clamp(24px, 2.4vw, 36px)", fontWeight: 600, lineHeight: 1.25, color: "#FAF6EB", margin: 0 }}>
          {title}
        </h2>
        <div style={{ width: "40px", height: "2px", background: "linear-gradient(90deg, #E8BA30, #D7B975)", borderRadius: "2px" }} />
      </div>
      <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: "14px", lineHeight: 1.75, fontWeight: 400, color: "#8DB5A6", margin: 0, maxWidth: "400px" }}>
        {body}
      </p>
      <button
        className="kf-cta"
        style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "none", border: "none", padding: 0, cursor: "pointer", fontFamily: '"Montserrat", sans-serif', fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#D7B975", width: "fit-content", transition: "opacity 0.3s" }}
      >
        {cta}
        <svg className="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "transform 0.3s ease" }}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  );

  const imageBlock = (
    <div
      ref={imgRef}
      style={{ borderRadius: "16px", overflow: "hidden", aspectRatio: "3 / 2", border: "1px solid rgba(215,185,117,0.15)", flexShrink: 0 }}
      onMouseEnter={e => e.currentTarget.querySelector("img").style.transform = "scale(1.05)"}
      onMouseLeave={e => e.currentTarget.querySelector("img").style.transform = "scale(1)"}
    >
      <img src={image} alt={imageAlt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)" }} />
    </div>
  );

  return (
    <div className="kf-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
      {imageRight ? <>{textBlock}{imageBlock}</> : <>{imageBlock}{textBlock}</>}
    </div>
  );
}

export default function KeyFeatures() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@400;500;600&family=Montserrat:wght@400;500;600;700&display=swap');
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s cubic-bezier(0.22,0.61,0.36,1), transform 0.7s cubic-bezier(0.22,0.61,0.36,1); will-change: opacity, transform; }
        .reveal-left  { transform: translateX(-32px); }
        .reveal-right { transform: translateX(32px); }
        .reveal.is-visible { opacity: 1 !important; transform: none !important; }
        .kf-cta:hover { opacity: 0.8; }
        .kf-cta:hover .cta-arrow { transform: translateX(4px); }
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
        }
        @media (max-width: 860px) {
          .kf-row { grid-template-columns: 1fr !important; gap: 28px !important; }
          .kf-row > *:first-child { order: 2; }
          .kf-row > *:last-child  { order: 1; }
        }
        @media (max-width: 540px) {
          .kf-features-section { padding: 60px 24px !important; }
        }
      `}</style>

      <section className="kf-features-section" style={{ background: "linear-gradient(180deg, #0B412F, #082B1F)", padding: "80px 80px" }}>
        {/* Section header */}
        <div style={{ maxWidth: "1440px", margin: "0 auto 56px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", textAlign: "center" }}>
          <span style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "10px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "#D7B975" }}>
            Key Features
          </span>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 600, color: "#FAF6EB", margin: 0, lineHeight: 1.2 }}>
            Crafted for the{" "}
            <span style={{ color: "#D7B975", fontWeight: 500 }}>Discerning Few</span>
          </h2>
          <div style={{ width: "48px", height: "2px", background: "linear-gradient(90deg, #E8BA30, #D7B975)", borderRadius: "2px", marginTop: "4px" }} />
        </div>

        {/* Rows */}
        <div style={{ maxWidth: "1440px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "56px" }}>
          {FEATURES.map((f) => <FeatureRow key={f.title} {...f} />)}
        </div>
      </section>
    </>
  );
}