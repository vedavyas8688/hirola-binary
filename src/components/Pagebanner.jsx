

export default function PageBanner({ eyebrow, titleLine1, titleLine2, image, alt }) {
  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">

      {/* ── Background image ── */}
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* ── Dark overlay ── */}
      <div className="absolute inset-0 bg-black/50" />

      {/* ── Green gradient fade from bottom ── */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/3"
        style={{
          background:
            "linear-gradient(to top, rgba(6,35,25,0.95) 0%, rgba(6,35,25,0.4) 60%, transparent 100%)",
        }}
      />

      {/* ── Bottom-left text ── */}
      <div className="absolute bottom-0 left-0 w-full max-w-[1400px] mx-auto px-4 md:px-8 pb-10 md:pb-16">
        <div className="max-w-xl">

          {/* Eyebrow */}
          {eyebrow && (
            <span className="font-sans text-xs md:text-sm uppercase tracking-[0.25em] text-luxury-gold mb-3 block">
              {eyebrow}
            </span>
          )}

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight text-cream-text mb-4">
            {titleLine1 && <>{titleLine1}<br /></>}
            {titleLine2 && (
              <span className="text-luxury-gold">{titleLine2}</span>
            )}
          </h1>

          {/* Gold rule */}
          {/* <div className="h-[2px] w-16 bg-luxury-gold" /> */}

        </div>
      </div>

    </section>
  );
}