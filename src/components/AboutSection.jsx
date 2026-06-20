import { aboutImages, aboutContent } from "../data/siteData";

export default function AboutSection() {
  return (
    <section
      className="py-16 px-4 md:px-6 lg:px-8 overflow-hidden bg-bg-cream"
      style={{
        backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGUlEQVR4nGPkMVRlIAUwkaR6VMOohiGlAQBfYgCCrIcb8AAAAABJRU5ErkJggg==")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="grid gap-8 xl:gap-16 lg:grid-cols-2 items-center">

          {/* ── Left: Three staggered image panels ── */}
          <div className="relative order-2 lg:order-1">
            <div className="flex gap-4 md:gap-6 justify-center items-end">

              {/* Panel 1 — left */}
              <div
                className="w-1/3 h-[180px] md:h-[400px] rounded-md overflow-hidden shadow-[0_14px_28px_rgba(0,0,0,0.16),0_10px_10px_rgba(0,0,0,0.12)]"
                style={{
                  backgroundImage: `url(${aboutImages[0]})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "300%",
                  backgroundPosition: "0% 55%",
                }}
              />

              {/* Panel 2 — center (raised) */}
              <div
                className="w-1/3 h-[200px] -translate-y-4 md:h-[420px] md:-translate-y-12 rounded-md overflow-hidden shadow-[0_16px_30px_rgba(0,0,0,0.18),0_16px_16px_rgba(0,0,0,0.14)]"
                style={{
                  backgroundImage: `url(${aboutImages[1]})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "300%",
                  backgroundPosition: "50% 35%",
                }}
              />

              {/* Panel 3 — right */}
              <div
                className="w-1/3 h-[180px] md:h-[400px] rounded-md overflow-hidden shadow-[0_14px_28px_rgba(0,0,0,0.16),0_10px_10px_rgba(0,0,0,0.12)]"
                style={{
                  backgroundImage: `url(${aboutImages[2]})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "300%",
                  backgroundPosition: "100% 55%",
                }}
              />

            </div>
          </div>

          {/* ── Right: Text content ── */}
          <div className="space-y-5 animate-fade-in order-1 lg:order-2 lg:pl-0">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-relaxed">
              <span className="text-luxury-gold">{aboutContent.titleGold}</span>
              <br />
              <span className="text-white">{aboutContent.titleGreen}</span>
            </h2>

            <div className="h-1 w-16 bg-luxury-gold" />

            <p className="font-sans text-base md:text-lg text-muted-sage leading-relaxed">
              {aboutContent.description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}