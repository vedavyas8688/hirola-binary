import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Height of the fixed navbar (LandingNavbar / Navbar), so anchored sections
// don't end up hidden underneath it. Adjust if your header height changes.
const HEADER_OFFSET = 90;

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // No hash → normal route change, scroll to top as before.
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    // Has a hash (e.g. "#advantage", "#heritage") → scroll to that section.
    // We retry for a short window because on a fresh/pasted URL load the
    // target section may not be mounted into the DOM yet.
    const id = hash.replace("#", "");
    let attempts = 0;
    const maxAttempts = 30; // ~1.5s total at 50ms intervals

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        window.scrollTo({ top, behavior: "smooth" });
        return;
      }
      attempts += 1;
      if (attempts < maxAttempts) {
        setTimeout(tryScroll, 50);
      }
    };

    tryScroll();
  }, [pathname, hash]);

  return null;
}