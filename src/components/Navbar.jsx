import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt, FaDownload } from "react-icons/fa";
import { navLinks } from "../data/siteData";
import EnquireModal from "./EnquireModal";
import DownloadModal from "./DownloadModal";
import logo1 from "../assets/images/logo-right.png";
import logo2 from "../assets/images/logo-left3.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);

  const phone = "+91 96112 11255";

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
        {/* Green overlay */}
        <div className="absolute inset-0 bg-luxury-green/40 backdrop-blur-sm" />

        {/* Main bar */}
        <div className="relative z-10 flex items-center px-6 md:px-10 h-[80px]">

          {/* Logo left */}
          <Link to="/" className="flex-shrink-0 mr-10 md:mr-12" aria-label="Go to home">
            <img src={logo1} alt="Binary Ventures" className="h-10 md:h-[52px] w-auto" />
          </Link>

          {/* Nav links — desktop only */}
          <nav className="hidden md:flex items-center gap-8 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="relative text-cream-text/70 hover:text-luxury-gold text-[13px] font-sans font-normal uppercase tracking-[0.2em] no-underline transition-colors duration-250
                  after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-luxury-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Enquire Now — desktop (opens modal) */}
          <button
            onClick={() => setEnquireOpen(true)}
            className="hidden md:flex items-center px-6 h-[38px] bg-luxury-gold text-luxury-green-dark text-[10px] font-sans font-semibold uppercase tracking-[0.2em] no-underline flex-shrink-0 mr-6 hover:bg-bright-gold transition-colors duration-200 border-0 cursor-pointer"
          >
            Enquire Now
          </button>

          {/* Codename badge right — desktop */}
          <Link
            to="/"
            className="hidden md:flex flex-col items-center justify-center h-[68px] px-5 relative flex-shrink-0"
            aria-label="Go to home"
          >
            <span className="absolute left-0 top-3 bottom-3 w-px bg-luxury-gold/30" />
            <img src={logo2} alt="Codename Project 4" className="h-20 w-auto" />
          </Link>

          {/* ── Mobile right ── */}
          <div className="ml-auto md:hidden flex items-center gap-3">
            <Link to="/" className="relative flex items-center pl-3" aria-label="Go to home">
              <span className="absolute left-0 top-1 bottom-1 w-px bg-luxury-gold/30" />
              <img src={logo2} alt="Codename Project 4" className="h-9 w-auto" />
            </Link>

            <button
              onClick={() => setOpen(true)}
              className="text-luxury-gold ml-1"
              style={{ background: "none", border: "none", cursor: "pointer" }}
              aria-label="Open menu"
            >
              <FaBars className="text-xl" />
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
            onClick={() => setOpen(false)}
            aria-label="Go to home"
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
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col px-5 pt-2 pb-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className="text-cream-text/75 text-[10px] uppercase tracking-[0.2em] font-sans font-light py-4 border-b border-luxury-gold/10 no-underline hover:text-luxury-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => { setOpen(false); setEnquireOpen(true); }}
            className="mt-5 flex items-center justify-center bg-luxury-gold text-luxury-green-dark py-3.5 text-[10px] font-sans font-semibold uppercase tracking-[0.2em] no-underline border-0 cursor-pointer"
          >
            Enquire Now
          </button>
          <a
            href={`tel:${phone}`}
            className="mt-3 flex items-center justify-center gap-2.5 border border-luxury-gold/35 py-3.5 text-luxury-gold text-[10px] font-sans uppercase tracking-[0.18em] no-underline"
          >
            <FaPhoneAlt size={13} />
            {phone}
          </a>
        </div>
      </div>

      {/* ── Mobile bottom bar ── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        style={{
          backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGUlEQVR4nGPkMVRlIAUwkaR6VMOohiGlAQBfYgCCrIcb8AAAAABJRU5ErkJggg==")`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-luxury-green/60 backdrop-blur-sm" />
        <div className="relative z-10 flex">
          <a
            href={`tel:${phone}`}
            className="flex-1 flex items-center justify-center gap-2 py-4 text-luxury-gold font-sans font-semibold text-sm uppercase tracking-wider border-r border-luxury-gold/30 hover:bg-luxury-gold/10 transition-colors"
          >
            <FaPhoneAlt className="w-4 h-4" />
            Call Now
          </a>
          <button
            onClick={() => setEnquireOpen(true)}
            className="flex-1 flex items-center justify-center gap-2 py-4 text-luxury-gold font-sans font-semibold text-sm uppercase tracking-wider hover:bg-luxury-gold/10 transition-colors"
          >
            Get Details
          </button>
        </div>
      </div>

      {/* ── Enquire Now — vertical tab (desktop) ── */}
      <button
        onClick={() => setEnquireOpen(true)}
        aria-label="Enquire Now"
        type="button"
        className="hidden md:block fixed right-0 top-[40%] -translate-y-1/2 z-[60] px-2.5 py-2 bg-luxury-green-dark text-luxury-gold text-xs border-l border-luxury-gold/60 rounded-l-md shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:bg-luxury-green transition-colors tracking-wide cursor-pointer"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        ENQUIRE NOW
      </button>

      {/* ── Download Brochure button (mobile) ── */}
      <button
        onClick={() => setDownloadOpen(true)}
        aria-label="Download Brochure"
        type="button"
        className="md:hidden fixed right-4 bottom-24 z-50 w-12 h-12 bg-luxury-green-dark text-luxury-gold rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:bg-luxury-green transition-colors flex items-center justify-center border-2 border-luxury-gold/60"
      >
        <FaDownload className="w-5 h-5" />
      </button>

      {/* ── Download Brochure button (desktop) ── */}
      <button
        onClick={() => setDownloadOpen(true)}
        aria-label="Download Brochure"
        type="button"
        className="hidden md:flex fixed right-6 bottom-24 z-50 w-14 h-14 bg-luxury-green-dark text-luxury-gold rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:bg-luxury-green hover:scale-110 transition-all duration-300 items-center justify-center border-2 border-luxury-gold/60"
      >
        <FaDownload className="w-6 h-6" />
      </button>

      {/* ── Modals ── */}
      <EnquireModal isOpen={enquireOpen} onClose={() => setEnquireOpen(false)} />
      <DownloadModal isOpen={downloadOpen} onClose={() => setDownloadOpen(false)} />
    </>
  );
}