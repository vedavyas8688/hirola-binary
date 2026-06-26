import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { lpConfig } from "../../data/landingData";
import { useModal } from "./Modalcontext";

export default function FloatingActions() {
  const { openModal } = useModal();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        /* ── Desktop: stacked column, bottom-right ── */
        .fa-desktop {
          position: fixed; right: 18px; bottom: 24px; z-index: 90;
          display: flex; flex-direction: column; align-items: flex-end; gap: 12px;
          transition: opacity .35s, transform .35s;
        }
        .fa-hidden { opacity: 0; transform: translateY(20px); pointer-events: none; }

        .fa-btn {
          display: flex; align-items: center; gap: 10px;
          height: 52px; padding: 0 20px;
          border-radius: 999px; border: none; cursor: pointer; text-decoration: none;
          font-family: var(--font-sans, 'Poppins', sans-serif);
          font-size: 12px; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          box-shadow: 0 12px 30px rgba(0,0,0,0.22);
          transition: transform .2s, box-shadow .2s;
        }
        .fa-btn:hover { transform: translateY(-2px); box-shadow: 0 16px 38px rgba(0,0,0,0.3); }
        .fa-btn svg { flex-shrink: 0; }

        /* icon-only pill (desktop WA + Call) */
        .fa-icon { width: 52px; padding: 0; justify-content: center; }

        .fa-call { background: var(--clr-primary-green, #0B412F); color: var(--clr-cream-text, #FAF6EB); }
        .fa-wa   { background: #25D366; color: #fff; }
        .fa-enq  {
          background: var(--grad-gold, linear-gradient(135deg, #E8BA30, #D7B975));
          color: var(--clr-fg-green, #062319);
        }

        /* ── Mobile bar: hidden on ≥641px ── */
        .fa-mobile {
          display: none;
          position: fixed; bottom: 0; left: 0; right: 0; z-index: 90;
          background: var(--clr-white, #fff);
          border-top: 1px solid var(--clr-border, #E0D8C7);
          padding: 10px 16px 14px;
          align-items: center; gap: 10px;
        }
        .fa-mobile-icon {
          width: 48px; height: 48px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          border: none; cursor: pointer; text-decoration: none; flex-shrink: 0;
          box-shadow: 0 4px 14px rgba(0,0,0,0.15);
          transition: transform .2s;
        }
        .fa-mobile-icon:hover { transform: scale(1.07); }
        .fa-mobile-enq {
          flex: 1; height: 48px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          border: none; cursor: pointer;
          background: var(--grad-gold, linear-gradient(135deg, #E8BA30, #D7B975));
          color: var(--clr-fg-green, #062319);
          font-family: var(--font-sans, 'Poppins', sans-serif);
          font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
          box-shadow: 0 4px 14px rgba(215,185,117,0.35);
          transition: opacity .2s, transform .15s;
        }
        .fa-mobile-enq:hover { opacity: .9; transform: translateY(-1px); }

        @media (max-width: 640px) {
          .fa-desktop { display: none; }
          .fa-mobile  { display: flex; }
        }
      `}</style>

      {/* ── Desktop floating stack (icon-only WA + Call, full Enquire pill) ── */}
      <div className={`fa-desktop ${show ? "" : "fa-hidden"}`}>
        <a href={lpConfig.whatsapp} target="_blank" rel="noopener noreferrer"
          className="fa-btn fa-wa fa-icon" aria-label="Chat on WhatsApp">
          <FaWhatsapp size={22} color="#fff" />
        </a>
        <a href={lpConfig.phoneHref}
          className="fa-btn fa-call fa-icon" aria-label="Call us">
          <Phone size={19} strokeWidth={1.8} />
        </a>
        <button onClick={openModal} className="fa-btn fa-enq" aria-label="Enquire now">
          Enquire Now
        </button>
      </div>

      {/* ── Mobile bottom bar (always visible, no scroll gate) ── */}
      <div className="fa-mobile">
        <a href={lpConfig.whatsapp} target="_blank" rel="noopener noreferrer"
          className="fa-mobile-icon fa-wa" aria-label="Chat on WhatsApp">
          <FaWhatsapp size={22} color="#fff" />
        </a>
        <button onClick={openModal} className="fa-mobile-enq" aria-label="Enquire now">
          Enquire Now
        </button>
        <a href={lpConfig.phoneHref}
          className="fa-mobile-icon fa-call" aria-label="Call us">
          <Phone size={19} strokeWidth={1.8} color="#FAF6EB" />
        </a>
      </div>
    </>
  );
}