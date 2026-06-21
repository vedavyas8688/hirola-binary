 import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt, FaDownload } from "react-icons/fa";
import { siteConfig, navLinks } from "../data/siteData";
import logoLeft from "../assets/images/logo-right.png";
import logoRight from "../assets/images/logo-left.svg";
import EnquireModal from "./EnquireModal";
import DownloadModal from "./DownloadModal";

function LeftLogo() {
  return (
    <Link to="/" className="cursor-pointer flex-shrink-0">
      <img
        src={logoLeft}
        alt={siteConfig.projectName || "Project logo"}
        className="h-8 sm:h-10 lg:h-12 xl:h-14 2xl:h-16 w-auto hover:opacity-80 transition-opacity"
      />
    </Link>
  );
}

function RightLogo({ className = "h-10 lg:h-11 xl:h-12 2xl:h-14 w-auto" }) {
  return (
    <img
      src={logoRight}
      alt="Binary Ventures"
      className={className}
    />
  );
}

export default function Navbar() {
  const [open, setOpen]               = useState(false);
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);

  const phone = "+91 96112 11255";

  return (
    <>
      {/* ── Main Header ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 w-full overflow-hidden"
        style={{
          backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGUlEQVR4nGPkMVRlIAUwkaR6VMOohiGlAQBfYgCCrIcb8AAAAABJRU5ErkJggg==")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        {/* Green overlay */}
        <div className="absolute inset-0 bg-luxury-green/40 backdrop-blur-sm" />

        <div className="container mx-auto px-2 sm:px-4 lg:px-6 xl:px-12 2xl:px-20 max-w-full relative z-10">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20 xl:h-22 w-full">

            <LeftLogo />

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-sans text-xs lg:text-sm xl:text-base 2xl:text-lg text-luxury-gold hover:text-luxury-gold/80 transition-colors tracking-wide whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right cluster: phone + divider + logo */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 2xl:gap-4 flex-shrink-0">
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-1.5 xl:gap-2 text-luxury-gold hover:text-luxury-gold/80 transition-colors"
              >
                <div className="w-6 h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 rounded-full border-2 border-luxury-gold flex items-center justify-center">
                  <FaPhoneAlt className="w-3 h-3 xl:w-3.5 xl:h-3.5 2xl:w-4 2xl:h-4" />
                </div>
                <span className="font-sans text-xs lg:text-sm xl:text-base 2xl:text-lg font-semibold whitespace-nowrap">
                  {phone}
                </span>
              </a>
              <div className="w-px h-8 xl:h-10 bg-luxury-gold/30" />
              <RightLogo />
            </div>

            {/* Mobile: Binary logo + hamburger */}
            <div className="lg:hidden flex items-center gap-2 sm:gap-3">
              <RightLogo className="h-9 sm:h-10 w-auto" />
              <button
                className="flex flex-col gap-1 sm:gap-1.5 p-1.5 sm:p-2 hover:opacity-80 transition-opacity text-luxury-gold"
                aria-label="Open menu"
                onClick={() => setOpen(true)}
              >
                <FaBars className="text-2xl" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ── Mobile bottom bar ── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
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

      {/* ── Mobile drawer ── */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] z-[70] transform transition-transform duration-300 ease-in-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGUlEQVR4nGPkMVRlIAUwkaR6VMOohiGlAQBfYgCCrIcb8AAAAABJRU5ErkJggg==")`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-luxury-green-dark/30 backdrop-blur-sm" />
        <div className="relative z-10 h-full flex flex-col">

          {/* Drawer header */}
          <div className="flex items-center justify-between p-6 border-b border-luxury-gold/20">
            <Link to="/" className="cursor-pointer">
              <img
                src={logoLeft}
                alt="Project logo"
                className="h-12 w-auto hover:opacity-80 transition-opacity"
              />
            </Link>
            <button
              className="text-luxury-gold hover:text-luxury-gold/80 transition-colors"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <FaTimes className="w-6 h-6 text-xl" />
            </button>
          </div>

          {/* Drawer nav links */}
          <nav className="flex flex-col py-6 px-6 space-y-0 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className="font-sans text-lg text-luxury-gold hover:bg-luxury-gold/10 py-4 px-4 rounded-sm transition-colors border-b border-luxury-gold/10"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Binary logo at bottom of drawer */}
          <div className="pb-4 pt-0 flex justify-center">
            <RightLogo className="h-20 w-auto opacity-80" />
          </div>

        </div>
      </div>

      {/* ── Enquire Now — vertical tab (desktop) ── */}
      <button
        onClick={() => setEnquireOpen(true)}
        aria-label="Enquire Now"
        type="button"
        className="hidden lg:block fixed right-0 top-[40%] -translate-y-1/2 z-[60] px-2.5 py-2 bg-luxury-green-dark text-luxury-gold text-xs border-l border-luxury-gold/60 rounded-l-md shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:bg-luxury-green transition-colors tracking-wide cursor-pointer"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        ENQUIRE NOW
      </button>

      {/* ── Download Brochure button (mobile) ── */}
      <button
        onClick={() => setDownloadOpen(true)}
        aria-label="Download Brochure"
        type="button"
        className="lg:hidden fixed right-4 bottom-24 z-50 w-12 h-12 bg-luxury-green-dark text-luxury-gold rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:bg-luxury-green transition-colors flex items-center justify-center border-2 border-luxury-gold/60"
      >
        <FaDownload className="w-5 h-5" />
      </button>

      {/* ── Download Brochure button (desktop) ── */}
      <button
        onClick={() => setDownloadOpen(true)}
        aria-label="Download Brochure"
        type="button"
        className="hidden lg:flex fixed right-6 bottom-24 z-50 w-14 h-14 bg-luxury-green-dark text-luxury-gold rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:bg-luxury-green hover:scale-110 transition-all duration-300 items-center justify-center border-2 border-luxury-gold/60"
      >
        <FaDownload className="w-6 h-6" />
      </button>

      {/* ── Modals ── */}
      <EnquireModal
        isOpen={enquireOpen}
        onClose={() => setEnquireOpen(false)}
      />
      <DownloadModal
        isOpen={downloadOpen}
        onClose={() => setDownloadOpen(false)}
      />
    </>
  );
}