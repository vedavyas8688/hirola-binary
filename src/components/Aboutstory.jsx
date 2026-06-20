export default function AboutStory() {
  const stats = [
    { value: "3.5 Acres", label: "Land Area" },
    { value: "234", label: "Signature Residences" },
    { value: "80%", label: "Open Space" },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-luxury-green-dark">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
          {/* ── Left: Image ── */}
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1800&q=80"
              alt="Project 4 facade"
              className="w-full aspect-[4/3] object-cover rounded-xl border-2 border-luxury-gold/60"
            />
          </div>

          {/* ── Right: Text ── */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            {/* Heading */}
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight text-luxury-gold">
              A TAPESTRY OF TIMELESS
              <br />
              <span className="text-cream-text">
                ARCHITECTURE &amp; BELONGING
              </span>
            </h2>

            {/* Body */}
            <div className="space-y-5">
              <p className="font-sans text-base md:text-lg text-cream-text/80 leading-relaxed">
                Beyond its skyline, Project 4 reflects something rarer — the
                calm of low-density living, with only 6 apartments per floor, no
                common walls and homes that open to light, air and 80% open
                space.
              </p>
              <p className="font-sans text-base md:text-lg text-cream-text/80 leading-relaxed">
                Its ultra-luxury 2 &amp; 3 BHK residences blend contemporary
                elegance with the privacy of low-density living, creating a
                seamless harmony between luxury and everyday life.
              </p>
              <p className="font-sans text-base md:text-lg text-cream-text font-medium leading-relaxed">
                Here, privacy, space and luxury become a way of life — not just
                an address.
              </p>
            </div>

            {/* Stats card */}
            <div className="rounded-2xl p-8 md:p-10 bg-primary-green mt-4">
              <div className="grid grid-cols-3 divide-x divide-luxury-gold/30">
                {stats.map(({ value, label }) => (
                  <div key={label} className="text-center px-4 md:px-6">
                    <div className="font-serif text-xl sm:text-2xl md:text-3xl font-normal text-luxury-gold mb-2 whitespace-nowrap">
                      {value}
                    </div>
                    <div className="font-sans text-xs md:text-sm text-cream-text/70 uppercase tracking-widest font-semibold leading-snug">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
