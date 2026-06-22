import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Clock, Calendar } from "lucide-react";

import Navbar from "./Navbar";
import { blogs, blogCategories } from "../data/blogs";
import Seo from "./Seo";
import Footer from "./Fotter";

export default function BlogsPage() {
  const [active, setActive] = useState("All");
  const navigate = useNavigate();

  const filtered =
    active === "All" ? blogs : blogs.filter((b) => b.category === active);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  const goToBlog = (blog) => {
    navigate(`/blogpage/${blog.id}`);
  };

  return (
    <>
      <Seo
        title="Blog"
        description="Insights on Bengaluru real estate, Sarjapur Road, home buying and investment from the Binary Ventures team — guides to help you buy with confidence."
      />
      <Navbar />
      <div
        className="min-h-screen"
        style={{ background: "var(--clr-green-dark)" }}
      >
        {/* ── Hero banner ── */}
        <div className="relative pt-32 pb-16 px-4 md:px-8 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(var(--clr-gold) 1px, transparent 1px), linear-gradient(90deg, var(--clr-gold) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          <div className="relative mx-auto max-w-[1200px]">
            <p
              className="font-sans text-[10px] tracking-[0.4em] uppercase mb-4"
              style={{ color: "var(--clr-gold)" }}
            >
              Binary Project 4
            </p>
            <h1
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[0.9]"
              style={{ color: "var(--clr-cream-text)" }}
            >
              LIVING,
              <br />
              <span className="italic" style={{ color: "var(--clr-gold)" }}>
                Investing,
              </span>
              <br />
              INSPIRING.
            </h1>
            <div
              className="mt-8 h-px w-16"
              style={{
                background:
                  "color-mix(in srgb, var(--clr-gold) 50%, transparent)",
              }}
            />
          </div>
        </div>

        {/* ── Filter pills ── */}
        <div className="px-4 md:px-8 mb-12">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((cat) => {
                const isActive = active === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActive(cat)}
                    className="px-5 py-2 rounded-full font-sans text-xs tracking-[0.15em] uppercase transition-all duration-300 border"
                    style={
                      isActive
                        ? {
                            background: "var(--clr-gold)",
                            color: "var(--clr-green-dark)",
                            borderColor: "var(--clr-gold)",
                          }
                        : {
                            background: "transparent",
                            color:
                              "color-mix(in srgb, var(--clr-gold) 60%, transparent)",
                            borderColor:
                              "color-mix(in srgb, var(--clr-gold) 20%, transparent)",
                          }
                    }
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="px-4 md:px-8 pb-24">
          <div className="mx-auto max-w-[1200px]">
            {/* ── Featured card (large) ── */}
            {featured && (
              <div
                className="group relative mb-8 rounded-2xl overflow-hidden cursor-pointer border transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--clr-gold) 10%, transparent)",
                }}
                onClick={() => goToBlog(featured)}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${featured.image})` }}
                />
                {/* Overlay for readability */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, color-mix(in srgb, var(--clr-green-dark) 92%, transparent), color-mix(in srgb, var(--clr-green) 70%, transparent))",
                  }}
                />

                <div className="relative p-8 md:p-12 lg:p-16 grid lg:grid-cols-2 gap-8 items-end min-h-[400px]">
                  {/* Left */}
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <span
                        className="inline-block font-sans text-[9px] tracking-[0.3em] uppercase border px-3 py-1 rounded-full mb-6"
                        style={{
                          color: "var(--clr-gold)",
                          borderColor:
                            "color-mix(in srgb, var(--clr-gold) 30%, transparent)",
                        }}
                      >
                        {featured.category}
                      </span>
                      <h2
                        className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal leading-tight"
                        style={{ color: "var(--clr-cream-text)" }}
                      >
                        {featured.title}
                      </h2>
                    </div>
                    <div className="flex items-center gap-4 mt-6">
                      <span
                        className="flex items-center gap-1.5 font-sans text-xs"
                        style={{
                          color:
                            "color-mix(in srgb, var(--clr-cream-text) 40%, transparent)",
                        }}
                      >
                        <Calendar size={11} /> {featured.date}
                      </span>
                      <span
                        className="flex items-center gap-1.5 font-sans text-xs"
                        style={{
                          color:
                            "color-mix(in srgb, var(--clr-cream-text) 40%, transparent)",
                        }}
                      >
                        <Clock size={11} /> {featured.readTime}
                      </span>
                    </div>
                  </div>
                  {/* Right */}
                  <div className="flex flex-col justify-end">
                    <p
                      className="font-sans text-sm md:text-base leading-relaxed mb-8"
                      style={{
                        color:
                          "color-mix(in srgb, var(--clr-cream-text) 60%, transparent)",
                      }}
                    >
                      {featured.excerpt}
                    </p>
                    <div
                      className="flex items-center gap-3 group-hover:gap-5 transition-all duration-300"
                      style={{ color: "var(--clr-gold)" }}
                    >
                      <span className="font-serif text-xs uppercase tracking-[0.2em]">
                        Read Article
                      </span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── Grid of remaining cards ── */}
            {rest.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {rest.map((blog) => (
                  <div
                    key={blog.id}
                    className="group relative rounded-2xl overflow-hidden border transition-all duration-500 cursor-pointer flex flex-col hover:-translate-y-1.5 hover:shadow-2xl"
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--clr-gold) 10%, transparent)",
                    }}
                    onClick={() => goToBlog(blog)}
                  >
                    {/* Image top */}
                    <div className="h-40 relative flex-shrink-0 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${blog.image})` }}
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(180deg, transparent 40%, color-mix(in srgb, var(--clr-green-dark) 70%, transparent))",
                        }}
                      />
                      <span
                        className="absolute top-4 left-4 font-sans text-[8px] tracking-[0.3em] uppercase border px-2.5 py-1 rounded-full"
                        style={{
                          color: "var(--clr-gold)",
                          borderColor:
                            "color-mix(in srgb, var(--clr-gold) 30%, transparent)",
                          background:
                            "color-mix(in srgb, var(--clr-green-dark) 50%, transparent)",
                        }}
                      >
                        {blog.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div
                      className="flex flex-col flex-1 p-6"
                      style={{
                        background:
                          "color-mix(in srgb, var(--clr-green-dark) 95%, var(--clr-gold) 5%)",
                      }}
                    >
                      <h3
                        className="font-serif text-lg leading-snug mb-3 flex-1 text-luxury-gold"
                         
                      >
                        {blog.title}
                      </h3>
                      <p
                        className="font-sans text-xs leading-relaxed mb-5 line-clamp-2 text-white"
                         
                      >
                        {blog.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span
                            className="flex items-center gap-1 font-sans text-[10px] text-white"
                             
                          >
                            <Calendar size={9} /> {blog.date}
                          </span>
                          <span
                            className="flex items-center gap-1 font-sans text-[10px] text-white"
                             
                          >
                            <Clock size={9} /> {blog.readTime}
                          </span>
                        </div>
                        <ArrowRight
                          size={14}
                          className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                          style={{ color: "var(--clr-gold)" }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {filtered.length === 0 && (
              <p
                className="text-center font-sans text-sm py-24"
                style={{
                  color:
                    "color-mix(in srgb, var(--clr-cream-text) 30%, transparent)",
                }}
              >
                No articles in this category yet.
              </p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
