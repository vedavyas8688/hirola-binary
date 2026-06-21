// src/data/blogs.js
// ============================================================
// BLOGS — Single source of truth for the blog section.
// Both BlogsPage (listing) and BlogDetailPage (article) read
// from here, so list metadata and article content never drift
// out of sync. To add a post: append an object to `blogs`.
// ============================================================

import banner9 from "../assets/images/banner9.jpg";
import banner10 from "../assets/images/banner10.jpg";
import banner11 from "../assets/images/banner11.jpg";
import banner12 from "../assets/images/banner12.jpg";

// Categories used by the filter pills on the listing page.
export const blogCategories = [
  "All",
  "Market Insights",
  "Investment",
  "Lifestyle",
  "Living Well",
];

// Each blog carries its listing metadata and (optionally) its full
// `content`. Posts without `content` fall back to `fallbackContent`.
export const blogs = [
  {
    id: 1,
    category: "Market Insights",
    title: "Why Sarjapur Road Is Bengaluru's Most Sought-After Address in 2026",
    excerpt:
      "From seamless connectivity to booming social infrastructure, Sarjapur Road has emerged as the city's most strategic residential corridor. Here's what's driving the demand.",
    date: "18 Jun 2026",
    readTime: "9 min read",
    featured: true,
    image: banner9,
    author: "Binary Ventures Team",
    content: {
      pullQuote:
        "Sarjapur Road isn't just a location — it is an address that compounds in value with every passing quarter.",
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
  },
  {
    id: 2,
    category: "Living Well",
    title: "The Art of Designing a Home That Grows With Your Family",
    excerpt:
      "A well-planned 3 BHK isn't just square footage — it's a canvas for life. We explore how thoughtful design anticipates the way families actually live.",
    date: "05 Jun 2026",
    readTime: "7 min read",
    featured: false,
    image: banner10,
    author: "Binary Ventures Team",
    content: {
      pullQuote:
        "The best homes aren't designed for the family you are today — they're designed for the family you're becoming.",
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
  },
  {
    id: 3,
    category: "Investment",
    title: "Pre-Launch vs Ready-to-Move: What Every Smart Buyer Should Know",
    excerpt:
      "Timing your property purchase can mean the difference between a great deal and a great home. We break down the pros, cons, and sweet spots.",
    date: "22 May 2026",
    readTime: "10 min read",
    featured: false,
    image: banner11,
    author: "Binary Ventures Team",
  },
  {
    id: 4,
    category: "Lifestyle",
    title: "Green Living: How Modern Residences Are Redefining Sustainability",
    excerpt:
      "Rainwater harvesting, solar rooftops, and native landscaping — the new generation of premium homes is built with the planet in mind.",
    date: "11 May 2026",
    readTime: "6 min read",
    featured: false,
    image: banner12,
    author: "Binary Ventures Team",
  },
  {
    id: 5,
    category: "Market Insights",
    title: "Understanding RERA: A Homebuyer's Complete Protection Guide",
    excerpt:
      "RERA transformed Indian real estate. Here's everything you need to know about your rights, builder obligations, and how to verify a project.",
    date: "27 Apr 2026",
    readTime: "11 min read",
    featured: false,
    image: banner9,
    author: "Binary Ventures Team",
  },
  {
    id: 6,
    category: "Investment",
    title: "NRI Home Buying in India: A Step-by-Step Guide for 2026",
    excerpt:
      "From FEMA regulations to repatriation rules, we simplify the entire process for Non-Resident Indians looking to invest back home.",
    date: "09 Apr 2026",
    readTime: "12 min read",
    featured: false,
    image: banner10,
    author: "Binary Ventures Team",
  },
];

// Used when a blog has no bespoke `content` block of its own.
export const fallbackContent = {
  pullQuote:
    "The most important decision in real estate isn't what you buy — it's understanding exactly why you're buying it.",
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

// ── Helpers ────────────────────────────────────────────────
export const getBlogById = (id) =>
  blogs.find((b) => String(b.id) === String(id));

export const getBlogContent = (blog) =>
  (blog && blog.content) || fallbackContent;

export const getRelatedBlogs = (currentId, count = 2) =>
  blogs.filter((b) => String(b.id) !== String(currentId)).slice(0, count);
