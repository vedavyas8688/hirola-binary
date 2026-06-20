import { unitPlans } from "../data/siteData";

export default function UnitPlansSection() {
  return (
    <section
      className="py-12 md:py-20 overflow-hidden bg-bg-cream"
      style={{
        backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGUlEQVR4nGPkMVRlIAUwkaR6VMOohiGlAQBfYgCCrIcb8AAAAABJRU5ErkJggg==")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">

        {/* Heading */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-relaxed text-white">
            HOMES DESIGNED FOR{" "}
            <span className="text-luxury-gold">ELEVATED LIVING</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-muted-sage max-w-4xl mx-auto mt-3 md:mt-4 px-2">
            Thoughtfully planned layouts that maximize space, light, and functionality
          </p>
        </div>

        {/* Unit plan rows */}
        <div className="space-y-12 md:space-y-20">
          {unitPlans.map((unit, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={unit.type}
                className="relative flex flex-col lg:grid lg:items-center gap-6 md:gap-10 lg:grid-cols-2 lg:gap-12"
              >
                {/* Gold vertical divider — desktop only */}
                <div className="hidden lg:block absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-luxury-gold/40" />

                {/* Text side */}
                <div
                  className={`text-center order-1 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="mx-auto max-w-xl">
                    <img
                      src={unit.logo}
                      alt="Project 4"
                      className="h-10 md:h-12 lg:h-14 mx-auto mb-3 md:mb-4"
                    />
                    <p className="font-sans text-sm md:text-base text-muted-sage mt-1">
                      {unit.type}, {unit.size}
                    </p>
                    <p className="font-sans text-sm md:text-base lg:text-lg text-muted-sage mt-4 md:mt-6 leading-relaxed px-2">
                      {unit.description}
                    </p>
                    <button className="mt-4 md:mt-6 bg-primary-green hover:bg-luxury-green text-cream-text text-sm font-semibold rounded px-6 py-2 transition-colors">
                      Check Prices
                    </button>
                  </div>
                </div>

                {/* Image side */}
                <div
                  className={`order-2 w-full ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="mx-auto w-full max-w-[720px] rounded-md overflow-hidden relative">
                    <img
                      src={unit.floorPlan}
                      alt={`${unit.type} floor plan`}
                      className="w-full h-auto object-contain transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-luxury-cream/40" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}