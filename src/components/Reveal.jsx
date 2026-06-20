
import { useEffect, useRef, useState } from "react";

/**
 * Scroll-triggered reveal wrapper.
 * Adds a subtle fade + slide when the element scrolls into view.
 *
 * Props:
 *  - variant: "up" | "left" | "right" | "fade" | "zoom"  (default "up")
 *  - delay:   ms before the transition starts once visible (for light stagger)
 *  - once:    animate only the first time it enters (default true)
 *  - as:      element/tag to render (default "div")
 *  - className, style, ...rest are forwarded
 */
export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  once = true,
  as: Tag = "div",
  className = "",
  style = {},
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) io.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${visible ? "is-visible" : ""} ${className}`}
      style={{ ...style, transitionDelay: visible ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </Tag>
  );
}