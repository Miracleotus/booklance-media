"use client";

import Link from "next/link";
import { ArrowRight, Book, Zap, Users } from "lucide-react";
import { motion, Variants } from "framer-motion";

const categories = [
  {
    title: "Business & Career",
    desc: "Actionable guides for the modern professional.",
  },
  {
    title: "Technology & Code",
    desc: "Stay ahead of the curve with our tech manuals.",
  },
  {
    title: "Fiction & Literature",
    desc: "Lose yourself in award-winning digital storytelling.",
  },
];

const process = [
  {
    step: "1",
    title: "Browse",
    desc: "Explore our curated collections and read free sample chapters.",
  },
  {
    step: "2",
    title: "Purchase",
    desc: "Enjoy a secure, one-click checkout experience.",
  },
  {
    step: "3",
    title: "Read Instantly",
    desc: "Download your ebook immediately in EPUB or PDF format and start reading on your favorite device.",
  },
];

const testimonial = {
  quote: "Gluetrain has completely transformed my daily commute. The formatting is flawless on my e-reader, and their tech category is unmatched.",
  author: "Sarah J., Software Engineer",
};

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function HomePage() {
  return (
    <main className="bg-brand-dark text-white font-body">

      {/* SECTION 1: HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(ellipse at center, rgba(201, 169, 97, 0.12) 0%, transparent 70%)" }} />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-5xl">
            Your Next Great Read is Just a Click Away.
          </h1>
          <p className="text-brand-gray max-w-3xl text-lg mb-10 leading-relaxed">
            Welcome to Gluetrain, your premium digital library. Explore thousands of expertly curated ebooks across business, technology, fiction, and self-improvement. Instant access on any device.
          </p>
          <Link
            href="/shop"
            className="bg-brand-teal text-brand-dark px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-brand-teal-light transition-all inline-flex items-center gap-2 rounded-full"
          >
            Explore the Library <ArrowRight size={16} />
          </Link>
          
        </motion.div>
      </section>

      {/* SECTION 2: ABOUT GLUETRAIN */}
      <motion.section 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="max-w-4xl mx-auto px-6 py-24 text-center"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Knowledge Without Borders.
        </h2>
        <p className="text-brand-gray text-lg leading-relaxed max-w-3xl mx-auto">
          We believe that transformative ideas and captivating stories should be accessible to everyone, everywhere. Gluetrain partners with independent authors and industry experts to bring you high-quality digital reading experiences that inspire, educate, and entertain.
        </p>
      </motion.section>

      {/* SECTION 3: SERVICES OVERVIEW */}
      <section className="bg-brand-navy/30 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Find Your Niche
            </h2>
            <p className="text-brand-gray text-lg max-w-3xl mx-auto leading-relaxed">
              Whether you are looking to upskill your career or escape into a fantasy realm, we have a shelf for you. Dive into our most popular categories:
            </p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {categories.map((cat, idx) => (
              <motion.div
                variants={staggerItem}
                key={idx}
                className="border border-white/10 p-8 hover:border-brand-teal/50 transition-all group rounded-2xl bg-white/2 hover:bg-white/5"
              >
                <div className="text-brand-teal mb-6 group-hover:scale-110 transition-transform">
                  <Book size={32} />
                </div>
                <h3 className="font-display text-lg font-bold mb-4">{cat.title}</h3>
                <p className="text-brand-gray leading-relaxed text-sm">{cat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE US */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <motion.div 
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            The Gluetrain Advantage
          </h2>
          <p className="text-brand-gray text-lg max-w-3xl mx-auto leading-relaxed">
            We don't just sell files; we deliver an optimized reading experience. All our ebooks are expertly formatted, DRM-free, and compatible with Kindle, Apple Books, Android, and PC. No waiting for shipping—just instant, lifelong access to your digital library.
          </p>
        </motion.div>
      </section>

      {/* SECTION 5: OUR PROCESS */}
      <section className="bg-brand-navy/30 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              From Discovery to Download in 3 Steps
            </h2>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            {process.map((p, idx) => (
              <motion.div variants={staggerItem} key={idx} className="flex gap-8 items-start border-b border-white/10 pb-8 last:border-b-0">
                <span className="font-display text-5xl font-bold text-brand-teal/40 shrink-0 w-16 text-right">
                  {p.step}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold mb-3">{p.title}</h3>
                  <p className="text-brand-gray leading-relaxed text-lg">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
            What Our Readers Say
          </h2>
          <div className="bg-brand-navy/30 border border-white/10 p-12 rounded-2xl">
            <p className="text-2xl font-display mb-8 leading-relaxed">
              "{testimonial.quote}"
            </p>
            <p className="text-brand-teal font-bold">– {testimonial.author}</p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 7: CTA */}
      <section className="bg-brand-navy/30 py-24 px-6">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Reading?
          </h2>
          <p className="text-brand-gray text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of lifelong learners and avid readers who trust Gluetrain for their digital library.
          </p>
          <Link
            href="/shop"
            className="bg-brand-teal text-brand-dark px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-brand-teal-light transition-all inline-flex items-center gap-2 rounded-full"
          >
            Browse Best Sellers <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

    </main>
  );
}