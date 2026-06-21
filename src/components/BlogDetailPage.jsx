import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Share2, BookOpen } from "lucide-react";

import banner9 from "../assets/images/banner9.jpg";
import banner10 from "../assets/images/banner10.jpg";
import banner11 from "../assets/images/banner11.jpg";
import banner12 from "../assets/images/banner12.jpg";

// Shared blog list (keep in sync with BlogsPage, or move to a shared data file)
const BLOGS = [
  {
    id: 1,
    category: "Market Insights",
    title: "Why Sarjapur Road Is Bengaluru's Most Sought-After Address in 2026",
    excerpt:
      "From seamless connectivity to booming social infrastructure, Sarjapur Road has emerged as the city's most strategic residential corridor. Here's what's driving the demand.",
    date: "18 Jun 2026",
    readTime: "9 min read",
    image: banner9,
  },
  {
    id: 2,
    category: "Living Well",
    title: "The Art of Designing a Home That Grows With Your Family",
    excerpt:
      "A well-planned 3 BHK isn't just square footage — it's a canvas for life. We explore how thoughtful design anticipates the way families actually live.",
    date: "05 Jun 2026",
    readTime: "7 min read",
    image: banner10,
  },
  {
    id: 3,
    category: "Investment",
    title: "Pre-Launch vs Ready-to-Move: What Every Smart Buyer Should Know",
    excerpt:
      "Timing your property purchase can mean the difference between a great deal and a great home. We break down the pros, cons, and sweet spots.",
    date: "22 May 2026",
    readTime: "10 min read",
    image: banner11,
  },
  {
    id: 4,
    category: "Lifestyle",
    title: "Green Living: How Modern Residences Are Redefining Sustainability",
    excerpt:
      "Rainwater harvesting, solar rooftops, and native landscaping — the new generation of premium homes is built with the planet in mind.",
    date: "11 May 2026",
    readTime: "6 min read",
    image: banner12,
  },
  {
    id: 5,
    category: "Market Insights",
    title: "Understanding RERA: A Homebuyer's Complete Protection Guide",
    excerpt:
      "RERA transformed Indian real estate. Here's everything you need to know about your rights, builder obligations, and how to verify a project.",
    date: "27 Apr 2026",
    readTime: "11 min read",
    image: banner9,
  },
  {
    id: 6,
    category: "Investment",
    title: "NRI Home Buying in India: A Step-by-Step Guide for 2026",
    excerpt:
      "From FEMA regulations to repatriation rules, we simplify the entire process for Non-Resident Indians looking to invest back home.",
    date: "09 Apr 2026",
    readTime: "12 min read",
    image: banner10,
  },
];

// Full article content keyed by blog id
const ARTICLE_CONTENT = {
  1: {
    pullQuote: "Sarjapur Road isn't just a location — it is an address that compounds in value with every passing quarter.",
    sections: [
      {
        heading: "A Corridor Built for the Future",
        body: `Sarjapur Road has quietly transformed from a peripheral stretch into Bengaluru's most strategically positioned residential corridor. The road's unique placement — equidistant between Whitefield, Electronic City, and the Central Business District — makes it the rare address that genuinely works for every kind of professional life.\n\nOver the last decade, the macro infrastructure investment has been extraordinary. The Outer Ring Road junction, the upcoming Namma Metro Phase 2 extension, and the widening of Sarjapur Road itself have collectively compressed commute times while dramatically expanding the social catchment.`,
      },
      {
        heading: "Social Infrastructure That Speaks for Itself",
        body: `The data tells a compelling story. Within a five-kilometre radius of Sarjapur Road's prime stretch, residents have access to over forty international schools, twelve multi-speciality hospitals, three major retail malls, and the densest concentration of tech campuses in the city — including campuses for Wipro, Infosys, and a cluster of high-growth startups.\n\nThis means the lifestyle calculus here is fundamentally different. Families aren't compromising on education to get proximity to work. They're getting both, and at price points that still represent significant value relative to comparable micro-markets in other Indian metros.`,
      },
      {
        heading: "The Investment Thesis",
        body: `Rental yields on Sarjapur Road currently track between 3.8% and 4.6% annually, among the strongest in the Bengaluru market. Capital appreciation over the last five years has averaged 9.2% year-on-year for well-located projects — a number that significantly outpaces fixed-income alternatives after accounting for tax treatment.\n\nFor the buyer who intends to occupy rather than invest, the calculus is even more direct: you are purchasing into an area whose fundamentals — employment density, connectivity, and social infrastructure — are still improving. The upside, in other words, has not fully priced in.`,
      },
      {
        heading: "What to Look for When Buying Here",
        body: `Not all of Sarjapur Road is equal. The premium between a well-connected plot near the ORR junction and one further south can be as high as 20%. Buyers should prioritise RERA-registered projects, scrutinise possession timelines carefully, and look for developers with a demonstrable track record in the micro-market.\n\nThe right apartment on Sarjapur Road isn't just a home. It's a position in one of India's most enduring urban growth stories.`,
      },
    ],
  },
  2: {
    pullQuote: "The best homes aren't designed for the family you are today — they're designed for the family you're becoming.",
    sections: [
      {
        heading: "Space as a Living Thing",
        body: `A home designed for how a family actually lives looks different from one designed for how a family is supposed to live. The difference shows up in details: a study nook that doubles as a video call station, a utility balcony large enough to function as a potting shed, a master bedroom with a separate dressing area that won't cause morning gridlock.\n\nThese aren't luxuries. They are the difference between a home that works and one that merely houses.`,
      },
      {
        heading: "The 3 BHK Advantage",
        body: `The 3 BHK layout has emerged as the definitive format for growing families, and the reason is simple: it provides one room to grow into. The third bedroom begins life as a nursery, becomes a child's room, and eventually transforms into a study, a guest suite, or a home gym — depending entirely on the family's needs at that moment.\n\nDesigners who understand this build flexibility into the third bedroom's orientation and dimensions from the start. Wide door openings, adequate natural light, and proximity to a full bathroom make the difference between a room that adapts and one that constrains.`,
      },
      {
        heading: "The Invisible Design Decisions",
        body: `The best residential designers spend as much time on what you don't see as what you do. Load-bearing wall placement determines whether you can ever open up the kitchen. Electrical point placement determines whether your living room ever feels uncluttered. Storage volume per square foot determines whether the home feels calm or chaotic five years in.\n\nWhen evaluating a floor plan, look at where the storage is, not just how much of it there is. A home with ample storage distributed intelligently throughout the plan — rather than concentrated in one overworked utility room — ages far better.`,
      },
    ],
  },
};

const FALLBACK_CONTENT = {
  pullQuote: "The most important decision in real estate isn't what you buy — it's understanding exactly why you're buying it.",
  sections: [
    {
      heading: "The Context",
      body: `Every real estate decision sits inside a larger context: the city's growth trajectory, the micro-market's supply-demand dynamics, and the individual buyer's timeline and financial posture. Getting the decision right means understanding all three simultaneously.\n\nMost buyers focus on the property itself — the floor plan, the finishes, the view from the balcony. These matter. But they matter less than the fundamentals of location, developer credibility, and timing.`,
    },
    {
      heading: "What the Data Shows",
      body: `Bengaluru's residential market has demonstrated remarkable resilience through multiple economic cycles. Premium projects in well-connected micro-markets have consistently outperformed the broader index, with capital appreciation averaging 8–10% annually over the last decade.\n\nThe pattern holds across asset classes: buyers who enter well-located, RERA-compliant projects during pre-launch phases tend to see the strongest returns, both in terms of capital appreciation and rental yield.`,
    },
    {
      heading: "Making the Right Move",
      body: `The most common mistake first-time buyers make is optimising for the wrong variable. They negotiate hard on price while ignoring possession risk. They prioritise square footage over layout quality. They choose a project based on amenities rather than the developer's delivery track record.\n\nA home is the largest financial decision most families make. It deserves the same rigour you would bring to any significant investment — research, patience, and a clear-eyed assessment of what you're actually buying.`,
    },
  ],
};

const RELATED = [
  { id: 2, category: "Living Well", title: "The Art of Designing a Home That Grows With Your Family", readTime: "7 min read" },
  { id: 3, category: "Investment", title: "Pre-Launch vs Ready-to-Move: What Every Smart Buyer Should Know", readTime: "10 min read" },
  { id: 6, category: "Investment", title: "NRI Home Buying in India: A Step-by-Step Guide for 2026", readTime: "12 min read" },
];

export default function BlogDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = BLOGS.find((b) => String(b.id) === String(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4" style={{ background: "var(--clr-green-dark)" }}>
        <p className="font-serif text-2xl mb-6" style={{ color: "var(--clr-cream-text)" }}>Article not found</p>
        <button
          type="button"
          onClick={() => navigate("/blogpage")}
          className="flex items-center gap-2 transition-colors"
          style={{ color: "var(--clr-gold)" }}
        >
          <ArrowLeft size={15} />
          <span className="font-sans text-xs tracking-[0.2em] uppercase">Back to All Articles</span>
        </button>
      </div>
    );
  }

  const content = ARTICLE_CONTENT[blog.id] || FALLBACK_CONTENT;
  const related = RELATED.filter((r) => r.id !== blog.id).slice(0, 2);

  return (
    <div className="min-h-screen" style={{ background: "var(--clr-green-dark)" }}>

      {/* ── Top nav bar ── */}
      <div
        className="fixed top-0 left-0 right-0 z-40 border-b"
        style={{
          background: "color-mix(in srgb, var(--clr-green-dark) 92%, transparent)",
          backdropFilter: "blur(12px)",
          borderColor: "color-mix(in srgb, var(--clr-gold) 10%, transparent)",
        }}
      >
        <div className="mx-auto max-w-[1200px] px-4 md:px-8 h-16 flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate("/blogpage")}
            className="flex items-center gap-2 transition-colors group"
            style={{ color: "var(--clr-gold)" }}
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-sans text-xs tracking-[0.2em] uppercase">All Articles</span>
          </button>
          <p className="font-serif text-[10px] tracking-[0.3em] uppercase hidden sm:block text-white"  >
            Binary Project4
          </p>
          <button
            type="button"
            className="flex items-center gap-2 transition-colors text-white"
             
            onClick={() => navigator.clipboard?.writeText(window.location.href)}
          >
            <Share2 size={14} />
            <span className="font-sans text-xs tracking-[0.1em] uppercase hidden sm:block">Share</span>
          </button>
        </div>
      </div>

      {/* ── Hero ── */}
      <div className="pt-16">
        <div className="relative min-h-[52vh] flex items-end overflow-hidden">
          {/* Banner image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${blog.image})` }}
          />
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--clr-green-dark) 90%, transparent) 0%, color-mix(in srgb, var(--clr-green) 75%, transparent) 50%, color-mix(in srgb, var(--clr-green-dark) 95%, transparent) 100%)",
            }}
          />

          <div className="relative mx-auto max-w-[1200px] px-4 md:px-8 pb-14 pt-20 w-full">
            <span
              className="inline-block font-sans text-[9px] tracking-[0.35em] uppercase border px-3 py-1 rounded-full mb-6"
              style={{ color: "var(--clr-gold)", borderColor: "color-mix(in srgb, var(--clr-gold) 30%, transparent)" }}
            >
              {blog.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight max-w-4xl mb-8" style={{ color: "var(--clr-cream-text)" }}>
              {blog.title}
            </h1>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 font-sans text-xs" style={{ color: "color-mix(in srgb, var(--clr-cream-text) 40%, transparent)" }}>
                <Calendar size={11} /> {blog.date}
              </span>
              <span className="flex items-center gap-2 font-sans text-xs" style={{ color: "color-mix(in srgb, var(--clr-cream-text) 40%, transparent)" }}>
                <Clock size={11} /> {blog.readTime}
              </span>
              <span className="flex items-center gap-2 font-sans text-xs" style={{ color: "color-mix(in srgb, var(--clr-cream-text) 40%, transparent)" }}>
                <BookOpen size={11} /> Binary Ventures Team
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Article body ── */}
      <div className="mx-auto max-w-[1200px] px-4 md:px-8 py-16 grid lg:grid-cols-[1fr_300px] gap-16">

        {/* Main content */}
        <article>
          <p
            className="font-sans text-lg md:text-xl leading-relaxed mb-12 border-l-2 pl-6"
            style={{
              color: "color-mix(in srgb, var(--clr-cream-text) 70%, transparent)",
              borderColor: "color-mix(in srgb, var(--clr-gold) 40%, transparent)",
            }}
          >
            {blog.excerpt}
          </p>

          {content.sections.map((section, i) => (
            <div key={i} className="mb-12">
              <h2 className="font-serif text-xl md:text-2xl font-normal mb-4" style={{ color: "var(--clr-gold)" }}>
                {section.heading}
              </h2>
              {section.body.split("\n\n").map((para, j) => (
                <p key={j} className="font-sans text-sm md:text-base leading-relaxed mb-4" style={{ color: "color-mix(in srgb, var(--clr-cream-text) 60%, transparent)" }}>
                  {para}
                </p>
              ))}
            </div>
          ))}

          {/* Pull quote */}
          <div
            className="my-14 py-10 px-8 md:px-12 rounded-2xl border relative overflow-hidden"
            style={{
              borderColor: "color-mix(in srgb, var(--clr-gold) 20%, transparent)",
              background: "color-mix(in srgb, var(--clr-gold) 6%, var(--clr-green-dark))",
            }}
          >
            <div className="absolute top-4 left-6 font-serif text-7xl leading-none select-none" style={{ color: "color-mix(in srgb, var(--clr-gold) 10%, transparent)" }}>"</div>
            <p className="font-serif text-xl md:text-2xl leading-relaxed relative z-10" style={{ color: "var(--clr-gold)" }}>
              {content.pullQuote}
            </p>
            <p className="font-sans text-xs mt-4 tracking-[0.2em] uppercase" style={{ color: "color-mix(in srgb, var(--clr-gold) 40%, transparent)" }}>Binary Ventures</p>
          </div>

          {/* CTA */}
          <div
            className="mt-16 p-8 md:p-10 rounded-2xl border"
            style={{
              borderColor: "color-mix(in srgb, var(--clr-gold) 20%, transparent)",
              background: "linear-gradient(135deg, var(--clr-green-dark), var(--clr-green))",
            }}
          >
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: "var(--clr-gold)" }}>Ready to take the next step?</p>
            <h3 className="font-serif text-2xl md:text-3xl mb-4" style={{ color: "var(--clr-cream-text)" }}>
              Explore Premium Homes on Sarjapur Road
            </h3>
            <p className="font-sans text-sm mb-6 leading-relaxed" style={{ color: "color-mix(in srgb, var(--clr-cream-text) 50%, transparent)" }}>
              Our team is available to walk you through available units, pricing, and everything you need to make a confident decision.
            </p>
            <button
              type="button"
              className="inline-flex items-center gap-3 font-sans font-semibold text-xs tracking-[0.2em] uppercase px-8 py-3.5 rounded-full hover:scale-105 transition-transform duration-300"
              style={{ background: "var(--clr-gold)", color: "var(--clr-green-dark)" }}
            >
              Request a Callback
            </button>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 flex flex-col gap-8">

            {/* Share */}
            <div>
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase mb-4" style={{ color: "color-mix(in srgb, var(--clr-gold) 50%, transparent)" }}>Share</p>
              <div className="flex gap-2">
                {["Twitter", "LinkedIn", "WhatsApp"].map((s) => (
                  <button
                    key={s}
                    type="button"
                    className="font-sans text-[9px] tracking-[0.1em] uppercase border px-3 py-1.5 rounded-full transition-all duration-200"
                    style={{
                      color: "color-mix(in srgb, var(--clr-gold) 60%, transparent)",
                      borderColor: "color-mix(in srgb, var(--clr-gold) 20%, transparent)",
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-px" style={{ background: "color-mix(in srgb, var(--clr-gold) 10%, transparent)" }} />

            {/* Related articles */}
            <div>
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase mb-5" style={{ color: "color-mix(in srgb, var(--clr-gold) 50%, transparent)" }}>Related Articles</p>
              <div className="flex flex-col gap-5">
                {related.map((r) => (
                  <div
                    key={r.id}
                    className="group cursor-pointer"
                    onClick={() => navigate(`/blogpage/${r.id}`)}
                  >
                    <span className="font-sans text-[8px] tracking-[0.25em] uppercase block mb-1" style={{ color: "color-mix(in srgb, var(--clr-gold) 50%, transparent)" }}>
                      {r.category}
                    </span>
                    <p className="font-serif text-sm leading-snug transition-colors duration-200" style={{ color: "color-mix(in srgb, var(--clr-cream-text) 70%, transparent)" }}>
                      {r.title}
                    </p>
                    <span className="font-sans text-[9px] mt-1 block" style={{ color: "color-mix(in srgb, var(--clr-cream-text) 30%, transparent)" }}>{r.readTime}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-px" style={{ background: "color-mix(in srgb, var(--clr-gold) 10%, transparent)" }} />

            {/* Project card */}
            <div
              className="rounded-xl border p-5"
              style={{
                borderColor: "color-mix(in srgb, var(--clr-gold) 20%, transparent)",
                background: "color-mix(in srgb, var(--clr-gold) 5%, var(--clr-green-dark))",
              }}
            >
              <p className="font-sans text-[8px] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--clr-gold)" }}>Featured Project</p>
              <p className="font-serif text-base leading-tight mb-3" style={{ color: "var(--clr-cream-text)" }}>
                2 & 3 BHK Residences<br />
                <span style={{ color: "var(--clr-gold)" }}>Sarjapur Road</span>
              </p>
              <p className="font-sans text-[10px] leading-relaxed mb-4" style={{ color: "color-mix(in srgb, var(--clr-cream-text) 40%, transparent)" }}>
                Starting ₹75 Lakhs · Q4 Possession · RERA Registered
              </p>
              <button
                type="button"
                className="w-full font-sans text-[9px] tracking-[0.2em] uppercase rounded-full py-2.5 hover:opacity-90 transition-opacity"
                style={{ background: "var(--clr-gold)", color: "var(--clr-green-dark)" }}
              >
                View Project
              </button>
            </div>

          </div>
        </aside>
      </div>

      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, color-mix(in srgb, var(--clr-gold) 30%, transparent), transparent)" }} />
    </div>
  );
}