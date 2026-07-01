import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { lpNav, lpConfig } from "../../data/landingData";
import { useModal } from "./Modalcontext";
import logo1 from "../../assets/images/logo-right.png";
import logo2 from "../../assets/images/logo-left3.png";

export default function LandingNavbar() {
  const [open, setOpen] = useState(false);
  const { openModal } = useModal();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className="fixed top-0 w-full z-50 overflow-hidden"
        style={{
          backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGUlEQVR4nGPkMVRlIAUwkaR6VMOohiGlAQBfYgCCrIcb8AAAAABJRU5ErkJggg==")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        {/* Green overlay — matches main website navbar */}
        <div className="absolute inset-0 bg-luxury-green/40 backdrop-blur-sm" />

        {/* Main bar */}
        <div className="relative z-10 flex items-center px-6 md:px-10 h-[80px]">

          {/* Logo left */}
          <Link to="/" onClick={scrollToTop} className="flex-shrink-0 mr-10 md:mr-12" aria-label="Go to landing page">
            <img src={logo1} alt="Binary Ventures" className="h-10 md:h-[52px] w-auto" />
          </Link>

          {/* Nav links — desktop only */}
          <nav className="hidden md:flex items-center gap-8 flex-1">
            {lpNav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-cream-text/70 hover:text-luxury-gold text-[13px] font-sans font-normal uppercase tracking-[0.2em] no-underline transition-colors duration-250
                  after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-luxury-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Pre-Launch badge — desktop */}
          <div className="hidden md:flex items-center gap-2 mx-6 px-4 py-1 border border-luxury-gold/30 flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
            <span className="text-luxury-gold text-[9px] font-sans font-semibold uppercase tracking-[0.22em]">
              Pre-Launch · EOI Open
            </span>
          </div>

          {/* Enquire Now — desktop (opens modal) */}
          <button
            onClick={() => openModal("Enquire Now")}
            className="hidden md:flex items-center px-6 h-[38px] bg-luxury-gold text-luxury-green-dark text-[10px] font-sans font-semibold uppercase tracking-[0.2em] no-underline flex-shrink-0 mr-6 hover:bg-bright-gold transition-colors duration-200 border-0 cursor-pointer"
          >
            Enquire Now
          </button>

          {/* Codename badge right — desktop */}
          <Link
            to="/"
            onClick={scrollToTop}
            className="hidden md:flex flex-col items-center justify-center h-[68px] px-5 relative flex-shrink-0"
            aria-label="Go to landing page"
          >
            <span className="absolute left-0 top-3 bottom-3 w-px bg-luxury-gold/30" />
            <img src={logo2} alt="Codename Project 4" className="h-20 w-auto" />
          </Link>

          {/* ── Mobile right ── */}
          <div className="ml-auto md:hidden flex items-center gap-3">
            <div className="flex items-center gap-1.5 mr-1">
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse flex-shrink-0" />
              <span className="text-luxury-gold text-[8px] font-sans font-semibold uppercase tracking-[0.18em] leading-none">
                Pre-Launch
              </span>
            </div>

            <Link to="/" onClick={scrollToTop} className="relative flex items-center pl-3" aria-label="Go to landing page">
              <span className="absolute left-0 top-1 bottom-1 w-px bg-luxury-gold/30" />
              <img src={logo2} alt="Codename Project 4" className="h-9 w-auto" />
            </Link>

            <button
              onClick={() => setOpen(true)}
              className="text-luxury-gold ml-1"
              style={{ background: "none", border: "none", cursor: "pointer" }}
              aria-label="Open menu"
            >
              <Menu size={21} strokeWidth={1.4} />
            </button>
          </div>
        </div>

        {/* Gold rule */}
        <div
          className="relative z-10 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(215,185,117,0.5) 20%, rgba(215,185,117,0.85) 50%, rgba(215,185,117,0.5) 80%, transparent 100%)",
          }}
        />
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[70] md:hidden flex flex-col transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ background: "var(--clr-green-dark)" }}
      >
        <div className="flex items-center justify-between px-5 h-[64px] border-b border-luxury-gold/15">
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => { setOpen(false); scrollToTop(); }}
            aria-label="Go to landing page"
          >
            <img src={logo1} alt="Binary Ventures" className="h-8 w-auto" />
            <span className="w-px h-6 bg-luxury-gold/25" />
            <img src={logo2} alt="Codename Project 4" className="h-9 w-auto" />
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="text-luxury-gold"
            style={{ background: "none", border: "none", cursor: "pointer" }}
            aria-label="Close"
          >
            <X size={21} strokeWidth={1.4} />
          </button>
        </div>

        <div className="flex items-center gap-2 px-5 py-3 border-b border-luxury-gold/10">
          <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
          <span className="text-luxury-gold text-[9px] font-sans font-semibold uppercase tracking-[0.22em]">
            Pre-Launch · EOI Open
          </span>
        </div>

        <div className="flex flex-col px-5 pt-2 pb-8">
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
          <button
            onClick={() => { setOpen(false); openModal("Enquire Now"); }}
            className="mt-5 flex items-center justify-center bg-luxury-gold text-luxury-green-dark py-3.5 text-[10px] font-sans font-semibold uppercase tracking-[0.2em] no-underline border-0 cursor-pointer"
          >
            Enquire Now
          </button>
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