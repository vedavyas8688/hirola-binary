import { useEffect, useState } from "react";
import { X, Check, Phone } from "lucide-react";
import { useModal } from "./Modalcontext";
import { lpConfig } from "../../data/landingData";

/**
 * Quick "Enquire" modal — name + phone only.
 * Opened from any CTA button across the site via useModal().openModal().
 */
export default function EnquiryModal() {
  const { open, closeModal } = useModal();
  const [sent, setSent] = useState(false);

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

  const submit = (e) => {
    e.preventDefault();
    // TODO: wire to your CRM / API endpoint here
    setSent(true);
    setTimeout(() => { setSent(false); closeModal(); }, 2600);
  };

  return (
    <div
      className="btt-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Enquire about Project4"
      onClick={closeModal}
    >
      <style>{STYLES}</style>

      <div className="btt-modal" onClick={(e) => e.stopPropagation()}>
        <button className="btt-modal-close" onClick={closeModal} aria-label="Close">
          <X size={18} strokeWidth={1.8} />
        </button>

        {sent ? (
          <div className="btt-modal-success">
            <span className="btt-modal-check"><Check size={28} strokeWidth={2.5} /></span>
            <h3>Thank you</h3>
            <p>Our team will call you back shortly.</p>
          </div>
        ) : (
          <>
            <span className="btt-modal-eyebrow">Pre-Launch · EOI Open</span>
            <h3 className="btt-modal-title">Enquire Now</h3>
            <p className="btt-modal-sub">
              Leave your name and number — we'll share pricing &amp; availability.
            </p>

            <form className="btt-modal-form" onSubmit={submit}>
              <input type="text" required placeholder="Full Name" autoComplete="name" />
              <div className="btt-modal-phone">
                <span className="btt-modal-cc">+91</span>
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  inputMode="numeric"
                  maxLength={10}
                  autoComplete="tel"
                  onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/\D/g, ""); }}
                />
              </div>
              <button type="submit" className="btt-modal-submit">Submit →</button>
            </form>

            <a href={lpConfig.phoneHref} className="btt-modal-call">
              <Phone size={13} strokeWidth={1.8} /> Or call {lpConfig.phone}
            </a>
          </>
        )}
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
    background: linear-gradient(160deg, #0B412F 0%, #062319 100%);
    border: 1px solid rgba(215,185,117,0.22);
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
    background: rgba(215,185,117,0.1); border: 1px solid rgba(215,185,117,0.25);
    color: var(--clr-gold, #D7B975); cursor: pointer; transition: background .2s;
  }
  .btt-modal-close:hover { background: rgba(215,185,117,0.2); }

  .btt-modal-eyebrow {
    font-size: 10px; font-weight: 600; letter-spacing: 0.28em;
    text-transform: uppercase; color: var(--clr-gold-bright, #E8BA30);
  }
  .btt-modal-title {
    font-family: var(--font-serif, 'Playfair Display', serif);
    font-size: 30px; font-weight: 600; color: var(--clr-gold, #D7B975);
    margin: 10px 0 6px;
  }
  .btt-modal-sub {
    font-size: 13px; line-height: 1.6; color: rgba(250,246,235,0.78); margin: 0 0 22px;
  }

  .btt-modal-form { display: flex; flex-direction: column; gap: 12px; }
  .btt-modal-form input {
    width: 100%; border-radius: 10px; padding: 13px 16px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(215,185,117,0.25);
    color: #FAF6EB; font-size: 14px; font-family: inherit; outline: none;
    transition: border-color .2s, background .2s;
  }
  .btt-modal-form input::placeholder { color: rgba(250,246,235,0.45); }
  .btt-modal-form input:focus {
    border-color: var(--clr-gold, #D7B975); background: rgba(255,255,255,0.1);
  }
  .btt-modal-phone { display: flex; gap: 8px; }
  .btt-modal-cc {
    display: flex; align-items: center; padding: 0 14px;
    border-radius: 10px; background: rgba(255,255,255,0.06);
    border: 1px solid rgba(215,185,117,0.25);
    color: var(--clr-gold, #D7B975); font-size: 14px; font-weight: 500; flex-shrink: 0;
  }
  .btt-modal-phone input { flex: 1; }

  .btt-modal-submit {
    margin-top: 6px; width: 100%; border: none; cursor: pointer;
    padding: 15px; border-radius: 10px;
    background: linear-gradient(135deg, #E8BA30 0%, #D7B975 100%);
    color: #062319; font-size: 12px; font-weight: 700;
    letter-spacing: 0.16em; text-transform: uppercase;
    transition: opacity .2s, transform .2s; font-family: inherit;
  }
  .btt-modal-submit:hover { opacity: .92; transform: translateY(-1px); }

  .btt-modal-call {
    display: flex; align-items: center; justify-content: center; gap: 7px;
    margin-top: 16px; text-decoration: none;
    font-size: 11px; letter-spacing: 0.06em; color: rgba(215,185,117,0.7);
  }
  .btt-modal-call:hover { color: var(--clr-gold, #D7B975); }

  .btt-modal-success {
    display: flex; flex-direction: column; align-items: center; text-align: center;
    gap: 8px; padding: 24px 8px;
  }
  .btt-modal-check {
    width: 64px; height: 64px; border-radius: 50%; margin-bottom: 8px;
    display: flex; align-items: center; justify-content: center;
    background: var(--clr-gold, #D7B975); color: #062319;
  }
  .btt-modal-success h3 {
    font-family: var(--font-serif, 'Playfair Display', serif);
    font-size: 26px; color: var(--clr-gold, #D7B975); margin: 0;
  }
  .btt-modal-success p { font-size: 13px; color: rgba(250,246,235,0.75); margin: 0; }

  @media (max-width: 480px) {
    .btt-modal { padding: 36px 22px 24px; border-radius: 16px; }
    .btt-modal-title { font-size: 26px; }
  }
`;
