import { useEffect } from "react";
import { X, Phone } from "lucide-react";
import { useModal } from "./Modalcontext";
import LeadForm from "./LeadForm";
import { lpConfig } from "../../data/landingData";

/**
 * Shared enquiry modal — opened from every CTA button across the site via
 * useModal().openModal("Section Title"). The section title shows on top of
 * the form. The form itself comes from the single shared <LeadForm />.
 */
export default function EnquiryModal() {
  const { open, title, closeModal } = useModal();

  // lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeModal]);

  if (!open) return null;

  return (
    <div
      className="btt-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={title || "Enquire about Codename Project 4"}
      onClick={closeModal}
    >
      <style>{STYLES}</style>

      <div className="btt-modal" onClick={(e) => e.stopPropagation()}>
        <button className="btt-modal-close" onClick={closeModal} aria-label="Close">
          <X size={18} strokeWidth={1.8} />
        </button>

        <span className="btt-modal-eyebrow">Pre-Launch · EOI Open</span>

        <LeadForm
          theme="dark"
          title={title}
          subtitle="Leave your details — we'll share pricing & availability."
          onSubmit={() => setTimeout(closeModal, 2600)}
        />

        <a href={lpConfig.phoneHref} className="btt-modal-call">
          <Phone size={13} strokeWidth={1.8} /> Or call {lpConfig.phone}
        </a>
      </div>
    </div>
  );
}

const STYLES = `
  @keyframes bttFade { from { opacity: 0 } to { opacity: 1 } }
  @keyframes bttPop  { from { opacity: 0; transform: translateY(18px) scale(.97) }
                       to   { opacity: 1; transform: translateY(0) scale(1) } }

  .btt-modal-overlay {
    position: fixed; inset: 0; z-index: 120;
    display: flex; align-items: center; justify-content: center;
    padding: 20px;
    background: rgba(4,12,6,0.78);
    backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
    animation: bttFade .25s ease both;
  }
  .btt-modal {
    position: relative; width: 100%; max-width: 420px;
    background: var(--grad-green, linear-gradient(160deg, #0B412F 0%, #062319 100%));
    border: 1px solid color-mix(in srgb, var(--clr-gold, #D7B975) 22%, transparent);
    border-radius: 20px;
    padding: 40px 32px 28px;
    box-shadow: 0 40px 100px rgba(0,0,0,0.6);
    animation: bttPop .38s cubic-bezier(.22,.61,.36,1) both;
    font-family: var(--font-sans, 'Poppins', sans-serif);
  }
  .btt-modal-close {
    position: absolute; top: 16px; right: 16px;
    width: 34px; height: 34px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    background: color-mix(in srgb, var(--clr-gold, #D7B975) 10%, transparent);
    border: 1px solid color-mix(in srgb, var(--clr-gold, #D7B975) 25%, transparent);
    color: var(--clr-gold, #D7B975); cursor: pointer; transition: background .2s;
  }
  .btt-modal-close:hover { background: color-mix(in srgb, var(--clr-gold, #D7B975) 20%, transparent); }

  .btt-modal-eyebrow {
    display: block; margin-bottom: 12px;
    font-size: 10px; font-weight: 600; letter-spacing: 0.28em;
    text-transform: uppercase; color: var(--clr-gold-bright, #E8BA30);
  }

  .btt-modal-call {
    display: flex; align-items: center; justify-content: center; gap: 7px;
    margin-top: 16px; text-decoration: none;
    font-size: 11px; letter-spacing: 0.06em;
    color: color-mix(in srgb, var(--clr-gold, #D7B975) 70%, transparent);
  }
  .btt-modal-call:hover { color: var(--clr-gold, #D7B975); }

  @media (max-width: 480px) {
    .btt-modal { padding: 36px 22px 24px; border-radius: 16px; }
  }
`;