import { videoSection } from "../data/siteData";
import Reveal from "./Reveal";

export default function VideoSection() {
  return (
    <section className="bg-bg-cream py-16 md:py-20 px-4">
      <div className="mx-auto w-full max-w-[1600px] flex flex-col items-center gap-6 text-center">
        {/* Heading */}
        <Reveal className="flex flex-col items-center gap-6">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-widest text-luxury-gold">
            {videoSection.title}
          </h2>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-foreground-green max-w-2xl leading-relaxed">
            {videoSection.subtitle}
          </p>
        </Reveal>

        {/* YouTube Video */}
        <Reveal delay={120} className="w-full max-w-6xl overflow-hidden rounded-2xl shadow-2xl aspect-video">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoSection.youtubeId}?rel=0&modestbranding=1`}
            title={videoSection.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </Reveal>
      </div>
    </section>
  );
}