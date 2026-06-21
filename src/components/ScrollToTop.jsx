import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets the window scroll position to the top whenever the route
 * (pathname) changes — so opening any page from the navbar, footer,
 * or any link always starts at the top instead of keeping the
 * previous page's scroll position.
 *
 * In-page anchor links (e.g. #masterplan, #contact) are left alone so
 * the browser can still jump to the target section.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return; // let the browser handle #section anchors
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}
