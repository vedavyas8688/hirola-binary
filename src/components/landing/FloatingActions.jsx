import { useEffect, useState } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
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
        .fa-wrap {
          position: fixed; right: 18px; bottom: 18px; z-index: 90;
          display: flex; flex-direction: column; align-items: flex-end; gap: 12px;
          transition: opacity .35s, transform .35s;
        }
        .fa-hidden { opacity: 0; transform: translateY(20px); pointer-events: none; }
        .fa-btn {
          display: flex; align-items: center; gap: 10px; height: 52px; padding: 0 18px;
          border-radius: 999px; border: none; cursor: pointer; text-decoration: none;
          font-family: var(--font-sans); font-size: 12px; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          box-shadow: 0 12px 30px rgba(0,0,0,0.25); transition: transform .2s, box-shadow .2s;
        }
        .fa-btn:hover { transform: translateY(-2px); box-shadow: 0 16px 38px rgba(0,0,0,0.3); }
        .fa-btn svg { flex-shrink: 0; }
        .fa-call { background: #0B412F; color: #FAF6EB; }
        .fa-wa   { background: #25D366; color: #fff; }
        .fa-enq  { background: linear-gradient(135deg, #E8BA30, #D7B975); color: #062319; }
        .fa-icononly { width: 52px; padding: 0; justify-content: center; }
        @media (max-width: 640px) {
          .fa-label { display: none; }
          .fa-btn { width: 50px; height: 50px; padding: 0; justify-content: center; }
          .fa-wrap { right: 14px; bottom: 14px; gap: 10px; }
        }
      `}</style>

      <div className={`fa-wrap ${show ? "" : "fa-hidden"}`}>
        <a href={lpConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="fa-btn fa-wa" aria-label="Chat on WhatsApp">
          <MessageCircle size={20} strokeWidth={1.8} />
          <span className="fa-label">WhatsApp</span>
        </a>
        <a href={lpConfig.phoneHref} className="fa-btn fa-call" aria-label="Call us">
          <Phone size={19} strokeWidth={1.8} />
          <span className="fa-label">Call Now</span>
        </a>
        <button onClick={openModal} className="fa-btn fa-enq" aria-label="Enquire now">
          <span className="fa-label">Enquire Now</span>
          <span style={{ display: "inline-flex" }} className="sm:hidden">✦</span>
        </button>
      </div>
    </>
  );
}
