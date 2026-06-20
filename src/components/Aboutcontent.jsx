export default function AboutContent() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-bg-cream">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-center">
          {/* ── Left: Text ── */}
          <div className="space-y-6 text-center lg:text-left">
            <div>
              <span className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-relaxed text-luxury-gold">
                BINARY VENTURES
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-foreground-green mt-2">
                EXCELLENTLY BUILT,
                <br />
                EXCLUSIVELY DELIVERED.
              </h2>
            </div>

            <div className="h-1 w-24 bg-luxury-gold mx-auto lg:mx-0" />

            <p className="font-sans text-sm sm:text-base md:text-lg text-muted-sage leading-relaxed">
              Binary Ventures presents Project 4 — an ultra-luxury, low-density
              community on Sarjapur Road, designed around 80% open space, only 6
              apartments per floor and homes with no common walls.
            </p>

            <p className="font-sans text-sm sm:text-base md:text-lg text-muted-sage leading-relaxed">
              Set across 3.5 acres with 234 residences and a grand 8,000+ sq.ft.
              clubhouse, Project 4 places future-ready homes within 10–15
              minutes of the ORR IT corridor, with upcoming metro connectivity
              and strong appreciation potential.
            </p>
          </div>

          {/* ── Right: Image ── */}
          <div className="relative">
            <img
               src="https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1600&q=80"
              alt="Project 4 residences"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-md shadow-xl border-4 border-luxury-gold"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
