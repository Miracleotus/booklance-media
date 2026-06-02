"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const categories = [
  { title: "Business & Career", desc: "Actionable guides for the modern professional." },
  { title: "Technology & Code", desc: "Stay ahead of the curve with our tech manuals." },
  { title: "Fiction & Literature", desc: "Lose yourself in award-winning digital storytelling." },
];

const process = [
  { step: "01", title: "Browse", desc: "Explore our curated collections and read free sample chapters." },
  { step: "02", title: "Purchase", desc: "Enjoy a secure, one-click checkout experience." },
  { step: "03", title: "Read Instantly", desc: "Download your ebook immediately in EPUB or PDF and start reading on any device." },
];

const testimonial = {
  quote: "Gluetrain has completely transformed my daily commute. The formatting is flawless on my e-reader, and their tech category is unmatched.",
  author: "Sarah J., Software Engineer",
};

const fadeIn: Variants = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger: Variants = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.14 } },
};

// Abstract book-spine shapes for the hero
const spines = [
  { h: 176, w: 32, color: "#D94F2B" },
  { h: 240, w: 40, color: "#1B3A6B" },
  { h: 148, w: 26, color: "#2A5F3A" },
  { h: 208, w: 36, color: "#5A3A7A" },
  { h: 272, w: 30, color: "#D94F2B", opacity: 0.6 },
  { h: 160, w: 44, color: "#2E3D6A" },
  { h: 224, w: 28, color: "#7A2A2A" },
  { h: 136, w: 32, color: "#2A6A4A" },
  { h: 196, w: 38, color: "#6A4A1A" },
];

function Divider() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="h-px bg-white/8 w-full" />
    </div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-6 h-[2px] bg-brand-teal" />
      <span className="text-brand-teal text-[11px] font-bold uppercase tracking-[0.18em] font-body">
        {children}
      </span>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="bg-brand-dark text-white font-body overflow-x-hidden">

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="min-h-screen flex items-center relative pt-16 pb-16 overflow-hidden">
        {/* giant ghost watermark */}
        <div
          className="absolute right-[-4vw] top-1/2 -translate-y-1/2 select-none pointer-events-none"
          aria-hidden
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontWeight: 700,
            fontSize: "clamp(100px, 18vw, 260px)",
            color: "rgba(217,79,43,0.04)",
            lineHeight: 1,
            whiteSpace: "nowrap",
            letterSpacing: "-0.02em",
          }}
        >
          GLUETRAIN
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-[1fr_auto] gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <SectionLabel>Premium Digital Library</SectionLabel>

            <h1 className="font-display font-bold leading-[1.0] mb-7"
              style={{ fontSize: "clamp(52px, 8vw, 96px)" }}>
              Your Next<br />
              Great Read<br />
              <em className="text-brand-teal not-italic">Starts Here.</em>
            </h1>

            <div className="w-14 h-[2px] bg-brand-teal mb-7" />

            <p className="text-brand-gray text-lg leading-relaxed max-w-xl mb-10 font-body">
              Welcome to Gluetrain, your premium digital library. Explore thousands of expertly
              curated ebooks across business, technology, fiction, and self-improvement. Instant
              access on any device.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="bg-brand-teal text-white px-8 py-3.5 font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 hover:bg-brand-teal-light transition-colors font-body"
              >
                Explore the Library <ArrowRight size={15} />
              </Link>
              <Link
                href="/about"
                className="border border-white/20 text-white/60 px-8 py-3.5 font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 hover:border-white/50 hover:text-white transition-colors font-body"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Right: book spines decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex items-end gap-2.5 self-end pb-0"
            style={{ height: 290 }}
          >
            {spines.map((s, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.55, delay: 0.08 * i + 0.4, ease: "easeOut" }}
                style={{
                  height: s.h,
                  width: s.w,
                  backgroundColor: s.color,
                  opacity: s.opacity ?? 0.75,
                  transformOrigin: "bottom",
                  borderRadius: 2,
                }}
                className="hover:opacity-100 transition-opacity"
              />
            ))}
            {/* gradient fade at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
              style={{ background: "linear-gradient(to top, #07090F, transparent)" }} />
          </motion.div>
        </div>
      </section>

      <Divider />

      {/* ── ABOUT ──────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-[3fr_2fr] gap-20 items-start">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeIn}
        >
          <SectionLabel>About Gluetrain</SectionLabel>
          <h2 className="font-display font-bold leading-tight mb-6"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
            Knowledge Without Borders.
          </h2>
          <p className="text-brand-gray text-lg leading-relaxed font-body">
            We believe that transformative ideas and captivating stories should be accessible to
            everyone, everywhere. Gluetrain partners with independent authors and industry experts
            to bring you high-quality digital reading experiences that inspire, educate, and entertain.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeIn}
          className="flex flex-col gap-8 pt-2"
        >
          {[
            { num: "500+", label: "Curated Titles" },
            { num: "7", label: "Categories" },
            { num: "100%", label: "DRM-Free" },
          ].map((stat) => (
            <div key={stat.label} className="border-l-2 border-brand-teal pl-6">
              <div className="font-display text-5xl font-bold text-white leading-none mb-1">
                {stat.num}
              </div>
              <div className="text-brand-gray text-xs uppercase tracking-widest font-body">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      <Divider />

      {/* ── CATEGORIES ─────────────────────────────────── */}
      <section className="bg-brand-navy/50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeIn}
            className="mb-14"
          >
            <SectionLabel>What We Carry</SectionLabel>
            <h2 className="font-display font-bold" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
              Find Your Niche
            </h2>
            <p className="text-brand-gray text-lg mt-4 max-w-xl font-body">
              Whether you are looking to upskill your career or escape into a fantasy realm, we
              have a shelf for you.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-60px" }}
          >
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="group flex items-center gap-8 border-t border-white/10 py-8 last:border-b cursor-pointer hover:pl-3 transition-all duration-300"
              >
                <span className="font-display text-[56px] font-bold text-brand-teal/20 leading-none shrink-0 w-20 text-right group-hover:text-brand-teal/40 transition-colors">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold mb-1.5 group-hover:text-brand-teal transition-colors"
                    style={{ fontSize: "clamp(22px, 3vw, 36px)" }}>
                    {cat.title}
                  </h3>
                  <p className="text-brand-gray font-body text-sm">{cat.desc}</p>
                </div>
                <ArrowRight
                  size={22}
                  className="text-brand-teal opacity-0 group-hover:opacity-100 transition-all shrink-0 -translate-x-2 group-hover:translate-x-0"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Divider />

      {/* ── ADVANTAGE ──────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeIn}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          <div>
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="font-display font-bold leading-tight"
              style={{ fontSize: "clamp(36px, 5vw, 60px)" }}>
              The Gluetrain Advantage
            </h2>
          </div>
          <p className="text-brand-gray text-lg leading-relaxed font-body self-end">
            We don&apos;t just sell files; we deliver an optimized reading experience. All our ebooks
            are expertly formatted, DRM-free, and compatible with Kindle, Apple Books, Android, and
            PC. No waiting for shipping — just instant, lifelong access to your digital library.
          </p>
        </motion.div>
      </section>

      <Divider />

      {/* ── PROCESS ────────────────────────────────────── */}
      <section className="bg-brand-navy/50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeIn}
            className="mb-16"
          >
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="font-display font-bold" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
              From Discovery to Download<br className="hidden md:block" /> in 3 Steps
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-60px" }}
            className="grid md:grid-cols-3 border border-white/10"
          >
            {process.map((p, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="relative overflow-hidden p-10 md:border-r border-white/10 last:border-r-0 border-b md:border-b-0 group hover:bg-white/[0.02] transition-colors"
              >
                {/* large ghost step number */}
                <div
                  className="absolute -top-2 -right-2 font-display font-bold leading-none select-none pointer-events-none text-white/[0.025] group-hover:text-brand-teal/[0.06] transition-colors"
                  style={{ fontSize: 120 }}
                  aria-hidden
                >
                  {p.step}
                </div>
                <div className="text-brand-teal font-display text-2xl font-bold mb-4">{p.step}</div>
                <h3 className="font-display text-3xl font-bold mb-4">{p.title}</h3>
                <p className="text-brand-gray font-body leading-relaxed text-sm">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Divider />

      {/* ── TESTIMONIAL ────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeIn}
        >
          <SectionLabel>What Our Readers Say</SectionLabel>
          <div className="relative">
            {/* decorative quote mark */}
            <div
              className="absolute -top-6 -left-4 font-display font-bold text-brand-teal/10 leading-none select-none pointer-events-none"
              style={{ fontSize: "clamp(120px, 18vw, 200px)" }}
              aria-hidden
            >
              &ldquo;
            </div>
            <blockquote className="relative z-10 pl-8 md:pl-16">
              <p className="font-display font-bold leading-tight mb-8 max-w-5xl"
                style={{ fontSize: "clamp(24px, 4vw, 48px)" }}>
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-[2px] bg-brand-teal" />
                <cite className="text-brand-teal font-bold not-italic text-xs uppercase tracking-widest font-body">
                  {testimonial.author}
                </cite>
              </div>
            </blockquote>
          </div>
        </motion.div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section className="bg-brand-navy/50 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeIn}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <SectionLabel>Get Started Today</SectionLabel>
              <h2 className="font-display font-bold leading-tight"
                style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
                Ready to Start Reading?
              </h2>
            </div>
            <div>
              <p className="text-brand-gray text-lg mb-10 leading-relaxed font-body">
                Join thousands of lifelong learners and avid readers who trust Gluetrain for their
                digital library.
              </p>
              <Link
                href="/shop"
                className="bg-brand-teal text-white px-8 py-3.5 font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 hover:bg-brand-teal-light transition-colors font-body"
              >
                Browse Best Sellers <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
