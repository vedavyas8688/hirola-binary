import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { lpNav, lpConfig } from "../../data/landingData";
import logo1 from "../../assets/images/logo-right.png";
import logo2 from "../../assets/images/logo-left3.png";

export default function LandingNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-luxury-green-dark">
        {/* ── Main bar ── */}
        <div className="flex items-center px-6 md:px-10 h-[80px]">
          {/* Logo left */}
          <div className="flex-shrink-0 mr-12 md:mr-14">
            <img
              src={logo1}
              alt={lpConfig.brandTitle}
              className="h-12 md:h-[52px] w-auto"
            />
          </div>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-9 flex-1">
            {lpNav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-cream-text/70 hover:text-luxury-gold text-[15px] font-sans font-normal uppercase tracking-[0.2em] no-underline transition-colors duration-250
                  after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-luxury-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Enquire Now button */}
          <a
            href="#enquire"
            className="hidden md:flex items-center px-6 h-[38px] bg-luxury-gold text-luxury-green-dark text-[10px] font-sans font-medium uppercase tracking-[0.2em] no-underline flex-shrink-0 mr-6 hover:bg-bright-gold transition-colors duration-200"
          >
            Enquire Now
          </a>

          {/* Codename badge — logo2 */}
          <div className="hidden md:flex flex-col items-center justify-center h-[68px] px-5 relative flex-shrink-0">
            <span className="absolute left-0 top-3 bottom-3 w-px bg-luxury-gold/30" />
            <img src={logo2} alt="Codename" className="h-20 w-auto" />
          </div>

          {/* Mobile right */}
          <div className="ml-auto md:hidden flex items-center gap-3">
            <a
              href="#enquire"
              className="text-luxury-green-dark bg-luxury-gold text-[9px] font-sans font-medium uppercase tracking-[0.15em] px-4 py-2 no-underline"
            >
              Enquire
            </a>
            <button
              onClick={() => setOpen(true)}
              className="text-luxury-gold"
              style={{ background: "none", border: "none", cursor: "pointer" }}
              aria-label="Open menu"
            >
              <Menu size={21} strokeWidth={1.4} />
            </button>
          </div>
        </div>

        {/* ── Gold rule ── */}
        <div
          className="h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(215,185,117,0.5) 20%, rgba(215,185,117,0.85) 50%, rgba(215,185,117,0.5) 80%, transparent 100%)",
          }}
        />
      </header>

      {/* ── Mobile Drawer ── */}
      <div
        className={`fixed inset-0 z-[70] md:hidden flex flex-col transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ background: "var(--clr-green-dark)" }}
      >
        <div className="flex items-center justify-between px-5 h-[64px] border-b border-luxury-gold/15">
          <img src={logo2} alt="Codename" className="h-9 w-auto" />
          <button
            onClick={() => setOpen(false)}
            className="text-luxury-gold"
            style={{ background: "none", border: "none", cursor: "pointer" }}
            aria-label="Close"
          >
            <X size={21} strokeWidth={1.4} />
          </button>
        </div>

        <div className="flex flex-col px-5 pt-3 pb-8">
          {lpNav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-cream-text/75 text-[10px] uppercase tracking-[0.2em] font-sans font-light py-4 border-b border-luxury-gold/10 no-underline hover:text-luxury-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#enquire"
            onClick={() => setOpen(false)}
            className="mt-5 flex items-center justify-center bg-luxury-gold text-luxury-green-dark py-3.5 text-[10px] font-sans font-medium uppercase tracking-[0.2em] no-underline"
          >
            Enquire Now
          </a>
          <a
            href={lpConfig.phoneHref}
            className="mt-3 flex items-center justify-center gap-2.5 border border-luxury-gold/35 py-3.5 text-luxury-gold text-[10px] font-sans uppercase tracking-[0.18em] no-underline"
          >
            <Phone size={13} strokeWidth={1.6} />
            {lpConfig.phone}
          </a>
        </div>
      </div>
    </>
  );
}
