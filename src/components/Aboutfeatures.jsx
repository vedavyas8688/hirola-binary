import { MapPin, Ruler, Trees, Building2 } from "lucide-react";
import { aboutFeatures } from "../data/siteData";
import Reveal from "./Reveal";

const iconMap = { MapPin, Ruler, Trees, Building2 };

export default function AboutFeatures() {
  const { eyebrow, title1, title2, items } = aboutFeatures;

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-bg-cream">
      <div className="mx-auto w-full max-w-[1400px]">

        {/* ── Heading ── */}
        <Reveal className="mb-10 md:mb-14">
          <div className="mb-3 flex items-center gap-3">
            <span className="block h-px w-8 bg-luxury-gold" />
            <span className="font-serif text-[11px] font-semibold uppercase tracking-[0.28em] text-luxury-gold">
              {eyebrow}
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight text-foreground-green">
            {title1} <span className="text-luxury-gold">{title2}</span>
          </h2>
        </Reveal>

        {/* ── Cards grid ── */}
        <Reveal delay={100} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map(({ title, icon, description }) => {
            const Icon = iconMap[icon];
            return (
              <div
                key={title}
                className="group h-full flex flex-col rounded-2xl bg-card-white border border-border p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-luxury-gold/40"
              >
                {/* Icon badge */}
                <div className="w-12 h-12 md:w-13 md:h-13 rounded-full bg-luxury-cream flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-luxury-gold/20">
                  {Icon && (
                    <Icon className="w-6 h-6 text-luxury-gold" strokeWidth={1.5} />
                  )}
                </div>

                {/* Title + accent */}
                <h3 className="font-serif text-lg md:text-xl font-normal text-foreground-green mb-2">
                  {title}
                </h3>
                <div className="h-0.5 w-8 bg-luxury-gold/70 mb-4" />

                {/* Description */}
                <p className="font-sans text-sm text-muted-sage leading-relaxed">
                  {description}
                </p>
              </div>
            );
          })}
        </Reveal>

      </div>
    </section>
  );
}