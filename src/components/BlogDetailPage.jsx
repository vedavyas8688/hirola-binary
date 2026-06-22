import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Share2, BookOpen } from "lucide-react";

import { getBlogById, getBlogContent, getRelatedBlogs } from "../data/blogs";
import Seo from "./Seo";
import Navbar from "./Navbar";
import Footer from "./Fotter";

export default function BlogDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = getBlogById(id);

  if (!blog) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center px-4"
        style={{ background: "var(--clr-green-dark)" }}
      >
        <p
          className="font-serif text-2xl mb-6"
          style={{ color: "var(--clr-cream-text)" }}
        >
          Article not found
        </p>
        <button
          type="button"
          onClick={() => navigate("/blogpage")}
          className="flex items-center gap-2 transition-colors"
          style={{ color: "var(--clr-gold)" }}
        >
          <ArrowLeft size={15} />
          <span className="font-sans text-xs tracking-[0.2em] uppercase">
            Back to All Articles
          </span>
        </button>
      </div>
    );
  }

  const content = getBlogContent(blog);
  const related = getRelatedBlogs(blog.id, 2);

  return (
    <>
      <Seo />
      <Navbar />
      <div
        className="min-h-screen"
        style={{ background: "var(--clr-green-dark)" }}
      >
        <Seo title={blog.title} description={blog.excerpt} />

        {/* ── Top nav bar ── */}
        <div
          className="fixed top-0 left-0 right-0 z-40 border-b"
          style={{
            background:
              "color-mix(in srgb, var(--clr-green-dark) 92%, transparent)",
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
              <ArrowLeft
                size={15}
                className="group-hover:-translate-x-1 transition-transform duration-200"
              />
              <span className="font-sans text-xs tracking-[0.2em] uppercase">
                All Articles
              </span>
            </button>
            <p className="font-serif text-[10px] tracking-[0.3em] uppercase hidden sm:block text-white">
              Binary Project4
            </p>
            <button
              type="button"
              className="flex items-center gap-2 transition-colors text-white"
              onClick={() =>
                navigator.clipboard?.writeText(window.location.href)
              }
            >
              <Share2 size={14} />
              <span className="font-sans text-xs tracking-[0.1em] uppercase hidden sm:block">
                Share
              </span>
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
                style={{
                  color: "var(--clr-gold)",
                  borderColor:
                    "color-mix(in srgb, var(--clr-gold) 30%, transparent)",
                }}
              >
                {blog.category}
              </span>
              <h1
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight max-w-4xl mb-8"
                style={{ color: "var(--clr-cream-text)" }}
              >
                {blog.title}
              </h1>
              <div className="flex items-center gap-6">
                <span
                  className="flex items-center gap-2 font-sans text-xs"
                  style={{
                    color:
                      "color-mix(in srgb, var(--clr-cream-text) 40%, transparent)",
                  }}
                >
                  <Calendar size={11} /> {blog.date}
                </span>
                <span
                  className="flex items-center gap-2 font-sans text-xs"
                  style={{
                    color:
                      "color-mix(in srgb, var(--clr-cream-text) 40%, transparent)",
                  }}
                >
                  <Clock size={11} /> {blog.readTime}
                </span>
                <span
                  className="flex items-center gap-2 font-sans text-xs"
                  style={{
                    color:
                      "color-mix(in srgb, var(--clr-cream-text) 40%, transparent)",
                  }}
                >
                  <BookOpen size={11} /> {blog.author || "Binary Ventures Team"}
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
                color:
                  "color-mix(in srgb, var(--clr-cream-text) 70%, transparent)",
                borderColor:
                  "color-mix(in srgb, var(--clr-gold) 40%, transparent)",
              }}
            >
              {blog.excerpt}
            </p>

            {content.sections.map((section, i) => (
              <div key={i} className="mb-12">
                <h2
                  className="font-serif text-xl md:text-2xl font-normal mb-4"
                  style={{ color: "var(--clr-gold)" }}
                >
                  {section.heading}
                </h2>
                {section.body.split("\n\n").map((para, j) => (
                  <p
                    key={j}
                    className="font-sans text-sm md:text-base leading-relaxed mb-4"
                    style={{
                      color:
                        "color-mix(in srgb, var(--clr-cream-text) 60%, transparent)",
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            ))}

            {/* Pull quote */}
            <div
              className="my-14 py-10 px-8 md:px-12 rounded-2xl border relative overflow-hidden"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--clr-gold) 20%, transparent)",
                background:
                  "color-mix(in srgb, var(--clr-gold) 6%, var(--clr-green-dark))",
              }}
            >
              <div
                className="absolute top-4 left-6 font-serif text-7xl leading-none select-none"
                style={{
                  color: "color-mix(in srgb, var(--clr-gold) 10%, transparent)",
                }}
              >
                "
              </div>
              <p
                className="font-serif text-xl md:text-2xl leading-relaxed relative z-10"
                style={{ color: "var(--clr-gold)" }}
              >
                {content.pullQuote}
              </p>
              <p
                className="font-sans text-xs mt-4 tracking-[0.2em] uppercase"
                style={{
                  color: "color-mix(in srgb, var(--clr-gold) 40%, transparent)",
                }}
              >
                Binary Ventures
              </p>
            </div>

            {/* CTA */}
            <div
              className="mt-16 p-8 md:p-10 rounded-2xl border"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--clr-gold) 20%, transparent)",
                background:
                  "linear-gradient(135deg, var(--clr-green-dark), var(--clr-green))",
              }}
            >
              <p
                className="font-sans text-[10px] tracking-[0.3em] uppercase mb-3"
                style={{ color: "var(--clr-gold)" }}
              >
                Ready to take the next step?
              </p>
              <h3
                className="font-serif text-2xl md:text-3xl mb-4"
                style={{ color: "var(--clr-cream-text)" }}
              >
                Explore Premium Homes on Sarjapur Road
              </h3>
              <p
                className="font-sans text-sm mb-6 leading-relaxed"
                style={{
                  color:
                    "color-mix(in srgb, var(--clr-cream-text) 50%, transparent)",
                }}
              >
                Our team is available to walk you through available units,
                pricing, and everything you need to make a confident decision.
              </p>
              <button
                type="button"
                className="inline-flex items-center gap-3 font-sans font-semibold text-xs tracking-[0.2em] uppercase px-8 py-3.5 rounded-full hover:scale-105 transition-transform duration-300"
                style={{
                  background: "var(--clr-gold)",
                  color: "var(--clr-green-dark)",
                }}
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
                <p
                  className="font-sans text-[9px] tracking-[0.3em] uppercase mb-4"
                  style={{
                    color:
                      "color-mix(in srgb, var(--clr-gold) 50%, transparent)",
                  }}
                >
                  Share
                </p>
                <div className="flex gap-2">
                  {["Twitter", "LinkedIn", "WhatsApp"].map((s) => (
                    <button
                      key={s}
                      type="button"
                      className="font-sans text-[9px] tracking-[0.1em] uppercase border px-3 py-1.5 rounded-full transition-all duration-200"
                      style={{
                        color:
                          "color-mix(in srgb, var(--clr-gold) 60%, transparent)",
                        borderColor:
                          "color-mix(in srgb, var(--clr-gold) 20%, transparent)",
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div
                className="h-px"
                style={{
                  background:
                    "color-mix(in srgb, var(--clr-gold) 10%, transparent)",
                }}
              />

              {/* Related articles */}
              <div>
                <p
                  className="font-sans text-[9px] tracking-[0.3em] uppercase mb-5"
                  style={{
                    color:
                      "color-mix(in srgb, var(--clr-gold) 50%, transparent)",
                  }}
                >
                  Related Articles
                </p>
                <div className="flex flex-col gap-5">
                  {related.map((r) => (
                    <div
                      key={r.id}
                      className="group cursor-pointer"
                      onClick={() => navigate(`/blogpage/${r.id}`)}
                    >
                      <span
                        className="font-sans text-[8px] tracking-[0.25em] uppercase block mb-1"
                        style={{
                          color:
                            "color-mix(in srgb, var(--clr-gold) 50%, transparent)",
                        }}
                      >
                        {r.category}
                      </span>
                      <p
                        className="font-serif text-sm leading-snug transition-colors duration-200"
                        style={{
                          color:
                            "color-mix(in srgb, var(--clr-cream-text) 70%, transparent)",
                        }}
                      >
                        {r.title}
                      </p>
                      <span
                        className="font-sans text-[9px] mt-1 block"
                        style={{
                          color:
                            "color-mix(in srgb, var(--clr-cream-text) 30%, transparent)",
                        }}
                      >
                        {r.readTime}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="h-px"
                style={{
                  background:
                    "color-mix(in srgb, var(--clr-gold) 10%, transparent)",
                }}
              />

              {/* Project card */}
              <div
                className="rounded-xl border p-5"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--clr-gold) 20%, transparent)",
                  background:
                    "color-mix(in srgb, var(--clr-gold) 5%, var(--clr-green-dark))",
                }}
              >
                <p
                  className="font-sans text-[8px] tracking-[0.3em] uppercase mb-2"
                  style={{ color: "var(--clr-gold)" }}
                >
                  Featured Project
                </p>
                <p
                  className="font-serif text-base leading-tight mb-3"
                  style={{ color: "var(--clr-cream-text)" }}
                >
                  2 & 3 BHK Residences
                  <br />
                  <span style={{ color: "var(--clr-gold)" }}>
                    Sarjapur Road
                  </span>
                </p>
                <p
                  className="font-sans text-[10px] leading-relaxed mb-4"
                  style={{
                    color:
                      "color-mix(in srgb, var(--clr-cream-text) 40%, transparent)",
                  }}
                >
                  Starting ₹75 Lakhs · Q4 Possession · RERA Registered
                </p>
                <button
                  type="button"
                  className="w-full font-sans text-[9px] tracking-[0.2em] uppercase rounded-full py-2.5 hover:opacity-90 transition-opacity"
                  style={{
                    background: "var(--clr-gold)",
                    color: "var(--clr-green-dark)",
                  }}
                >
                  View Project
                </button>
              </div>
            </div>
          </aside>
        </div>

        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, color-mix(in srgb, var(--clr-gold) 30%, transparent), transparent)",
          }}
        />
       </div>

      <Footer />
    </>
  );
}
