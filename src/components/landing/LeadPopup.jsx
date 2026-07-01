import { useEffect, useState } from "react";
import { X, Check, Sparkles } from "lucide-react";
import { lpConfig } from "../../data/landingData";

const POPUP_DELAY_MS = 2000;

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
          <h3 className="lpop-title">Project 4</h3>
          <p className="lpop-codename">· by  binaryventures</p>
          <span className="lpop-rule" />
          <ul className="lpop-list">
            <li><span className="lpop-tick"><Check size={13} strokeWidth={3} /></span> Premium Corner Homes</li>
            <li><span className="lpop-tick"><Check size={13} strokeWidth={3} /></span> 180° Ventilation</li>
            <li><span className="lpop-tick"><Check size={13} strokeWidth={3} /></span> 80%+ Open Space</li>
            <li><span className="lpop-tick"><Check size={13} strokeWidth={3} /></span>  Private Garden Homes</li>
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
    border: 1px solid rgba(215,185,117,0.28);
    box-shadow: 0 50px 120px rgba(0,0,0,0.55);
    animation: lpopPop .4s cubic-bezier(.22,.61,.36,1) both;
    font-family: var(--font-sans, 'Inter', sans-serif);
  }
  /* premium gold accent across the very top of the card */
  .lpop-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; z-index: 6;
    background: linear-gradient(90deg, #E8BA30, #D7B975 50%, #E8BA30);
  }

  /* ── Close button fix ───────────────────────────────────────────────
     On desktop the button sits over the white right panel, so we use
     dark colors. On mobile the card stacks to single-column and the
     button floats over the dark left panel, so we switch back to white.
  ─────────────────────────────────────────────────────────────────── */
  .lpop-close {
    position: absolute; top: 14px; right: 14px; z-index: 5; width: 34px; height: 34px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    background: rgba(8,43,31,0.08); border: 1px solid rgba(8,43,31,0.18);
    color: #082B1F; cursor: pointer; transition: background .2s, color .2s;
  }
  .lpop-close:hover { background: rgba(8,43,31,0.15); }

  .lpop-left {
    position: relative; overflow: hidden;
    background: linear-gradient(160deg, #0B412F 0%, #062319 100%); color: #FAF6EB;
    padding: 40px 34px; display: flex; flex-direction: column; justify-content: center;
  }
  /* faint gold ring + corner ornament for a richer panel */
  .lpop-left::before {
    content: ''; position: absolute; top: -70px; right: -70px; width: 200px; height: 200px;
    border-radius: 50%; border: 1px solid rgba(215,185,117,0.12); pointer-events: none;
  }
  .lpop-left::after {
    content: ''; position: absolute; top: 22px; left: 22px; width: 26px; height: 26px;
    border-top: 1px solid rgba(215,185,117,0.4); border-left: 1px solid rgba(215,185,117,0.4);
    pointer-events: none;
  }
  .lpop-left > * { position: relative; z-index: 1; }

  .lpop-badge {
    display: inline-flex; align-items: center; gap: 6px; align-self: flex-start;
    padding: 5px 12px; border: 1px solid rgba(215,185,117,0.35); border-radius: 999px;
    font-size: 9px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #E8BA30;
  }
  .lpop-title {
    font-family: var(--font-serif, 'Inter', sans-serif); font-size: 34px; font-weight: 700;
    margin: 18px 0 6px; line-height: 1.05; letter-spacing: 0.01em;
    background: linear-gradient(120deg, #D7B975, #F0DDAE 55%, #E8BA30);
    -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: #D7B975;
  }
  .lpop-codename { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(250,246,235,0.55); margin: 0 0 16px; }
  .lpop-rule { display: block; width: 46px; height: 2px; margin: 0 0 20px; border-radius: 2px;
    background: linear-gradient(90deg, #E8BA30, rgba(215,185,117,0)); }
  .lpop-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 13px; }
  .lpop-list li { display: flex; align-items: center; gap: 11px; font-size: 13.5px; color: rgba(250,246,235,0.9); }
  .lpop-tick {
    width: 22px; height: 22px; flex-shrink: 0; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    background: rgba(215,185,117,0.14); border: 1px solid rgba(215,185,117,0.3); color: #E8BA30;
  }

  .lpop-right { padding: 40px 34px; display: flex; flex-direction: column; justify-content: center; background: linear-gradient(180deg, #ffffff, #FAF7F0); }
  .lpop-form-title { font-family: var(--font-serif, 'Inter', sans-serif); font-size: 23px; font-weight: 600; color: #082B1F; margin: 0 0 6px; }
  .lpop-form-sub { font-size: 13px; color: #478570; margin: 0 0 20px; line-height: 1.5; }
  .lpop-form { display: flex; flex-direction: column; gap: 11px; }
  .lpop-form input {
    width: 100%; border-radius: 10px; padding: 13px 15px; border: 1px solid rgba(215,185,117,0.35);
    background: #FAF7F0; color: #082B1F; font-size: 14px; font-family: inherit; outline: none; transition: border-color .2s, background .2s, box-shadow .2s;
  }
  .lpop-form input::placeholder { color: rgba(8,43,31,0.4); }
  .lpop-form input:focus { border-color: #D7B975; background: #fff; box-shadow: 0 0 0 3px rgba(215,185,117,0.18); }
  .lpop-phone { display: flex; gap: 8px; }
  .lpop-phone span { display: flex; align-items: center; padding: 0 13px; border-radius: 10px; background: #FAF7F0; border: 1px solid rgba(215,185,117,0.35); color: #082B1F; font-size: 14px; font-weight: 600; flex-shrink: 0; }
  .lpop-phone input { flex: 1; }
  .lpop-form button {
    margin-top: 4px; border: none; cursor: pointer; padding: 15px; border-radius: 10px;
    background: linear-gradient(135deg, #E8BA30, #D7B975); color: #062319;
    font-size: 12px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
    transition: opacity .2s, transform .2s, box-shadow .2s; font-family: inherit;
    box-shadow: 0 10px 26px rgba(215,185,117,0.32);
  }
  .lpop-form button:hover { opacity: .96; transform: translateY(-1px); box-shadow: 0 14px 32px rgba(215,185,117,0.42); }
  .lpop-call { display: block; text-align: center; margin-top: 14px; font-size: 11px; color: #478570; text-decoration: none; }
  .lpop-call:hover { color: #D7B975; }

  .lpop-success { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 8px; padding: 16px 4px; }
  .lpop-check { width: 60px; height: 60px; border-radius: 50%; background: #0B412F; color: #D7B975; display: flex; align-items: center; justify-content: center; margin-bottom: 6px; }
  .lpop-success h4 { font-family: var(--font-serif, 'Inter', sans-serif); font-size: 24px; color: #082B1F; margin: 0; }
  .lpop-success p { font-size: 13px; color: #478570; margin: 0; }

  @media (max-width: 640px) {
    .lpop-card { grid-template-columns: 1fr; max-width: 420px; max-height: 92vh; overflow-y: auto; }
    .lpop-left { padding: 32px 26px 26px; }
    .lpop-title { font-size: 28px; }
    .lpop-right { padding: 28px 26px 32px; }
    .lpop-list { display: grid; grid-template-columns: 1fr 1fr; gap: 10px 8px; }
    .lpop-list li { font-size: 12px; }

    /* On mobile the button floats over the dark left panel — switch back to white */
    .lpop-close {
      background: rgba(255,255,255,0.15);
      border-color: rgba(255,255,255,0.3);
      color: #fff;
    }
    .lpop-close:hover { background: rgba(255,255,255,0.3); }
  }
`;