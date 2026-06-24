import { useEffect, useState } from "react";
import { X, Check, Sparkles } from "lucide-react";
import { lpConfig } from "../../data/landingData";

const POPUP_DELAY_MS = 5000; // ← auto-popup appears after 5 seconds

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const t = setTimeout(() => setOpen(true), POPUP_DELAY_MS);
    return () => clearTimeout(t);
  }, [dismissed]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => { setOpen(false); setDismissed(true); };

  const submit = (e) => {
    e.preventDefault();
    // TODO: wire to your CRM / API endpoint here
    setSent(true);
    setTimeout(close, 2800);
  };

  if (!open) return null;

  return (
    <div className="lpop-overlay" role="dialog" aria-modal="true" aria-label="Special pre-launch offer" onClick={close}>
      <style>{STYLES}</style>
      <div className="lpop-card" onClick={(e) => e.stopPropagation()}>
        <button className="lpop-close" onClick={close} aria-label="Close"><X size={18} strokeWidth={1.8} /></button>

        {/* left — offer panel */}
        <div className="lpop-left">
          <span className="lpop-badge"><Sparkles size={13} /> Pre-Launch · EOI Open</span>
          <h3 className="lpop-title">Binary<br />Temple Tree</h3>
          <p className="lpop-codename">Codename {lpConfig.codename} · by {lpConfig.developer}</p>
          <ul className="lpop-list">
            <li><Check size={15} /> 2 &amp; 3 BHK from ₹95 L</li>
            <li><Check size={15} /> EOI rate ₹8,499/sq.ft</li>
            <li><Check size={15} /> 100% refundable deposit</li>
            <li><Check size={15} /> Only 6 homes per floor</li>
          </ul>
        </div>

        {/* right — form */}
        <div className="lpop-right">
          {sent ? (
            <div className="lpop-success">
              <span className="lpop-check"><Check size={28} strokeWidth={2.5} /></span>
              <h4>Thank you!</h4>
              <p>We'll reach out with pricing &amp; availability shortly.</p>
            </div>
          ) : (
            <>
              <h4 className="lpop-form-title">Unlock Pre-Launch Pricing</h4>
              <p className="lpop-form-sub">Enter your details — limited to the first 50 units.</p>
              <form onSubmit={submit} className="lpop-form">
                <input type="text" required placeholder="Full Name" autoComplete="name" />
                <div className="lpop-phone">
                  <span>+91</span>
                  <input
                    type="tel" required placeholder="Phone Number" inputMode="numeric" maxLength={10} autoComplete="tel"
                    onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/\D/g, ""); }}
                  />
                </div>
                <input type="email" placeholder="Email (optional)" autoComplete="email" />
                <button type="submit">Get the Offer →</button>
              </form>
              <a href={lpConfig.phoneHref} className="lpop-call">Or call {lpConfig.phone}</a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const STYLES = `
  @keyframes lpopFade { from { opacity: 0 } to { opacity: 1 } }
  @keyframes lpopPop  { from { opacity: 0; transform: translateY(20px) scale(.97) } to { opacity: 1; transform: none } }

  .lpop-overlay {
    position: fixed; inset: 0; z-index: 130; display: flex; align-items: center; justify-content: center;
    padding: 20px; background: rgba(4,12,6,0.8);
    backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
    animation: lpopFade .28s ease both;
  }
  .lpop-card {
    position: relative; width: 100%; max-width: 720px; display: grid; grid-template-columns: 1fr 1fr;
    border-radius: 22px; overflow: hidden; background: #fff;
    box-shadow: 0 50px 120px rgba(0,0,0,0.55);
    animation: lpopPop .4s cubic-bezier(.22,.61,.36,1) both;
    font-family: var(--font-sans, 'Poppins', sans-serif);
  }
  .lpop-close {
    position: absolute; top: 14px; right: 14px; z-index: 5; width: 34px; height: 34px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); color: #fff; cursor: pointer;
    transition: background .2s;
  }
  .lpop-close:hover { background: rgba(255,255,255,0.3); }

  .lpop-left {
    background: linear-gradient(160deg, #0B412F 0%, #062319 100%); color: #FAF6EB;
    padding: 40px 34px; display: flex; flex-direction: column; justify-content: center;
  }
  .lpop-badge {
    display: inline-flex; align-items: center; gap: 6px; align-self: flex-start;
    padding: 5px 12px; border: 1px solid rgba(215,185,117,0.35); border-radius: 999px;
    font-size: 9px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #E8BA30;
  }
  .lpop-title { font-family: var(--font-serif, 'Playfair Display', serif); font-size: 34px; font-weight: 700; color: #D7B975; margin: 18px 0 6px; line-height: 1.05; }
  .lpop-codename { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(250,246,235,0.55); margin: 0 0 22px; }
  .lpop-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
  .lpop-list li { display: flex; align-items: center; gap: 10px; font-size: 13.5px; color: rgba(250,246,235,0.85); }
  .lpop-list svg { color: #D7B975; flex-shrink: 0; }

  .lpop-right { padding: 40px 34px; display: flex; flex-direction: column; justify-content: center; }
  .lpop-form-title { font-family: var(--font-serif, 'Playfair Display', serif); font-size: 23px; font-weight: 600; color: #082B1F; margin: 0 0 6px; }
  .lpop-form-sub { font-size: 13px; color: #478570; margin: 0 0 20px; line-height: 1.5; }
  .lpop-form { display: flex; flex-direction: column; gap: 11px; }
  .lpop-form input {
    width: 100%; border-radius: 10px; padding: 13px 15px; border: 1px solid rgba(215,185,117,0.35);
    background: #FAF7F0; color: #082B1F; font-size: 14px; font-family: inherit; outline: none; transition: border-color .2s, background .2s;
  }
  .lpop-form input::placeholder { color: rgba(8,43,31,0.4); }
  .lpop-form input:focus { border-color: #D7B975; background: #fff; }
  .lpop-phone { display: flex; gap: 8px; }
  .lpop-phone span { display: flex; align-items: center; padding: 0 13px; border-radius: 10px; background: #FAF7F0; border: 1px solid rgba(215,185,117,0.35); color: #082B1F; font-size: 14px; font-weight: 600; flex-shrink: 0; }
  .lpop-phone input { flex: 1; }
  .lpop-form button {
    margin-top: 4px; border: none; cursor: pointer; padding: 15px; border-radius: 10px;
    background: linear-gradient(135deg, #E8BA30, #D7B975); color: #062319;
    font-size: 12px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; transition: opacity .2s, transform .2s; font-family: inherit;
  }
  .lpop-form button:hover { opacity: .92; transform: translateY(-1px); }
  .lpop-call { display: block; text-align: center; margin-top: 14px; font-size: 11px; color: #478570; text-decoration: none; }
  .lpop-call:hover { color: #D7B975; }

  .lpop-success { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 8px; padding: 16px 4px; }
  .lpop-check { width: 60px; height: 60px; border-radius: 50%; background: #0B412F; color: #D7B975; display: flex; align-items: center; justify-content: center; margin-bottom: 6px; }
  .lpop-success h4 { font-family: var(--font-serif, 'Playfair Display', serif); font-size: 24px; color: #082B1F; margin: 0; }
  .lpop-success p { font-size: 13px; color: #478570; margin: 0; }

  @media (max-width: 640px) {
    .lpop-card { grid-template-columns: 1fr; max-width: 420px; max-height: 92vh; overflow-y: auto; }
    .lpop-left { padding: 32px 26px 26px; }
    .lpop-title { font-size: 28px; }
    .lpop-right { padding: 28px 26px 32px; }
  }
`;
