import { Phone } from "lucide-react";
import { useModal } from "../../components/landing/Modalcontext";
import { lpConfig } from "../../data/landingData";

const STYLES = `
  @keyframes fbSlideUp {
    from { opacity: 0; transform: translateY(100%); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fb-root {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 60;
    animation: fbSlideUp 0.5s cubic-bezier(0.22, 0.61, 0.36, 1) 1.2s both;
  }

  /* Gold rule on top */
  .fb-rule {
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(215,185,117,0.55) 20%,
      rgba(232,186,48,0.9) 50%,
      rgba(215,185,117,0.55) 80%,
      transparent 100%
    );
  }

  /* Bar itself */
  .fb-bar {
    display: flex;
    align-items: center;
    height: 64px;
    padding: 0 28px;
    gap: 0;
    background: linear-gradient(90deg, #062319 0%, #0B412F 60%, #082B1F 100%);
  }

  /* EOI badge */
  .fb-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-right: 20px;
    border-right: 1px solid rgba(215,185,117,0.2);
    flex-shrink: 0;
  }
  .fb-badge-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--clr-gold-bright, #E8BA30);
    animation: pulse 2s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.8); }
  }
  .fb-badge-text {
    font-family: var(--font-sans, Poppins, sans-serif);
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--clr-gold-bright, #E8BA30);
    line-height: 1.3;
  }
  .fb-badge-sub {
    font-family: var(--font-sans, Poppins, sans-serif);
    font-size: 8px;
    font-weight: 400;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(215,185,117,0.55);
    margin-top: 1px;
  }

  /* Price pill — desktop only */
  .fb-price {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    border-right: 1px solid rgba(215,185,117,0.2);
    flex-shrink: 0;
  }
  .fb-price-main {
    font-family: var(--font-serif, 'Playfair Display', serif);
    font-size: 13px;
    font-weight: 600;
    color: var(--clr-cream-text, #FAF6EB);
    line-height: 1.2;
  }
  .fb-price-sub {
    font-family: var(--font-sans, Poppins, sans-serif);
    font-size: 8.5px;
    font-weight: 400;
    letter-spacing: 0.08em;
    color: rgba(215,185,117,0.6);
    margin-top: 2px;
  }

  /* Spacer */
  .fb-spacer { flex: 1; }

  /* Phone CTA */
  .fb-phone {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 20px;
    height: 100%;
    text-decoration: none;
    border-right: 1px solid rgba(215,185,117,0.15);
    flex-shrink: 0;
    transition: opacity 0.2s;
  }
  .fb-phone:hover { opacity: 0.8; }
  .fb-phone-label {
    display: flex;
    flex-direction: column;
  }
  .fb-phone-tag {
    font-family: var(--font-sans, Poppins, sans-serif);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(215,185,117,0.5);
  }
  .fb-phone-number {
    font-family: var(--font-sans, Poppins, sans-serif);
    font-size: 13px;
    font-weight: 600;
    color: var(--clr-cream-text, #FAF6EB);
    letter-spacing: 0.04em;
  }

  /* Enquire Now CTA */
  .fb-enquire {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 0 28px;
    height: 44px;
    margin-left: 16px;
    background: linear-gradient(135deg, #E8BA30 0%, #ECC96A 100%);
    border: none;
    cursor: pointer;
    flex-shrink: 0;
    transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
    text-decoration: none;
  }
  .fb-enquire:hover {
    opacity: 0.92;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(232,186,48,0.3);
  }
  .fb-enquire-text {
    font-family: var(--font-sans, Poppins, sans-serif);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #082B1F;
  }

  /* Mobile adjustments */
  @media (max-width: 639px) {
    .fb-bar {
      height: 56px;
      padding: 0 16px;
    }
    .fb-price { display: none; }
    .fb-badge-sub { display: none; }
    .fb-phone-tag { display: none; }
    .fb-phone { padding: 0 14px; border-right: none; }
    .fb-phone-number { font-size: 12px; }
    .fb-enquire { padding: 0 18px; margin-left: 8px; }
    .fb-enquire-text { font-size: 9px; letter-spacing: 0.18em; }
  }

  @media (min-width: 640px) and (max-width: 1023px) {
    .fb-price { display: none; }
    .fb-bar { padding: 0 20px; }
  }
`;

export default function FloatingBar() {
  const { openModal } = useModal();

  return (
    <>
      <style>{STYLES}</style>
      <div className="fb-root">
        <div className="fb-rule" />
        <div className="fb-bar">

          {/* EOI Badge */}
          <div className="fb-badge">
            <div className="fb-badge-dot" />
            <div>
              <div className="fb-badge-text">EOI Open</div>
              <div className="fb-badge-sub">100% Refundable</div>
            </div>
          </div>

          {/* Price — desktop */}
          <div className="fb-price">
            <span className="fb-price-main">₹95L – ₹1.35Cr</span>
            <span className="fb-price-sub">₹8,499 / sq.ft · First 50 units</span>
          </div>

          <div className="fb-spacer" />

          {/* Phone */}
          <a href={lpConfig.phoneHref} className="fb-phone">
            <Phone size={15} strokeWidth={1.6} color="var(--clr-gold-bright, #E8BA30)" />
            <div className="fb-phone-label">
              <span className="fb-phone-tag">Call Us</span>
              <span className="fb-phone-number">{lpConfig.phone}</span>
            </div>
          </a>

          {/* Enquire Now */}
          <button className="fb-enquire" onClick={openModal}>
            <span className="fb-enquire-text">Enquire Now →</span>
          </button>

        </div>
      </div>
    </>
  );
}