import { FaPlay } from "react-icons/fa";

export default function VideoSection() {
  return (
    <section className="bg-bg-cream py-20 px-4">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-widest text-foreground-green">
          A JOURNEY THROUGH YOUR FUTURE HOME
        </h2>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-foreground-green/60 max-w-xl leading-relaxed text-center">
          Take a cinematic walk through Project 4 — the grand arrival, the open
          spaces, and the life that waits within.
        </p>

        {/* Video frame — dark green with radial glow */}
        <div
          className="w-full max-w-3xl aspect-video rounded-xl flex items-center justify-center cursor-pointer group transition-all duration-300 relative overflow-hidden"
          style={{ background: "var(--grad-green)" }}
        >
          {/* Gold filled play button */}
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-luxury-gold flex items-center justify-center text-luxury-green-dark text-xl md:text-2xl pl-1 transition-all duration-300 group-hover:scale-110 group-hover:bg-bright-gold z-10 shadow-lg">
            <FaPlay />
          </div>
        </div>

        {/* Coming soon note */}
        <p className="text-[0.65rem] text-foreground-green/40 tracking-[0.3em] uppercase">
          Walkthrough film coming soon
        </p>

      </div>
    </section>
  );
}