import { aboutCompany } from "../data/siteData";

export default function AboutContent() {
  const { brand, tagline, paragraphs, image } = aboutCompany;

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-bg-cream">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-center">
          {/* ── Left: Text ── */}
          <div className="space-y-6 text-center lg:text-left">
            <div>
              <span className="block font-serif text-base sm:text-lg md:text-xl font-normal tracking-wide leading-tight text-luxury-gold">
                {brand}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal leading-tight text-luxury-gold mt-2">
                {tagline.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </div>

            <div className="h-1 w-24 bg-luxury-gold mx-auto lg:mx-0" />

            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="font-sans text-sm sm:text-base md:text-lg text-muted-sage leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>

          {/* ── Right: Image ── */}
          <div className="relative">
            <img
              src={image}
              alt="Project 4 residences"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-md shadow-xl border-4 border-luxury-gold"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
