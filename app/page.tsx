"use client";

import Link from "next/link";
import { ArrowRight, Code, Zap, Shield } from "lucide-react";
import { motion, Variants } from "framer-motion";

const coreServices = [
  {
    icon: <Code size={28} />,
    title: "Custom Web Development",
    desc: "Fast, responsive, and SEO-optimized websites built to convert.",
  },
  {
    icon: <Zap size={28} />,
    title: "Software Engineering",
    desc: "Bespoke web applications and SaaS platforms tailored to your workflows.",
  },
  {
    icon: <Shield size={28} />,
    title: "UI/UX Design",
    desc: "User-centric interfaces that are as beautiful as they are functional.",
  },
];

const whyChooseUs = [
  { title: "Future-Proof Tech", desc: "We use the latest frameworks and industry best practices to ensure your software won't be obsolete tomorrow." },
  { title: "Transparent Communication", desc: "No confusing jargon. We keep you in the loop with clear, regular updates." },
  { title: "Security First", desc: "From data encryption to secure deployment, we build digital fortresses to protect your business." },
];

const process = [
  { step: "1", title: "Discovery", desc: "We dive deep into your business requirements and target audience." },
  { step: "2", title: "Design & Architecture", desc: "We create wireframes and map out the software ecosystem." },
  { step: "3", title: "Development", desc: "Our engineers write clean, scalable code to bring the design to life." },
  { step: "4", title: "Testing & Launch", desc: "Rigorous QA testing ensures a bug-free, seamless deployment." },
];

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

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(ellipse at center, rgba(201, 169, 97, 0.12) 0%, transparent 70%)" }} />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl">
            Code That Drives Your Business Forward.
          </h1>
          <p className="text-brand-gray max-w-2xl text-lg mb-10 leading-relaxed">
            Zenvira Software Solutions builds scalable, secure, and high-performance websites and applications tailored to your unique business goals.
          </p>
          <div className="flex gap-6 flex-wrap justify-center">
            <Link
              href="/contact"
              className="bg-brand-teal text-brand-dark px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-brand-teal-light transition-all inline-flex items-center gap-2 rounded-full"
            >
              Start Your Project <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="border border-brand-teal text-brand-teal px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-brand-teal/10 transition-all inline-flex items-center gap-2 rounded-full"
            >
              View Our Services
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SNIPPET */}
      <motion.section 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="max-w-4xl mx-auto px-6 py-24 text-center"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Your Digital Growth Partners
        </h2>
        <p className="text-brand-gray text-lg leading-relaxed">
          We are more than just coders; we are problem solvers. At Zenvira, we bridge the gap between complex technology and intuitive user experiences. Our team of experienced developers, designers, and strategists work collaboratively to transform your ideas into robust digital realities that scale as your business grows.
        </p>
      </motion.section>

      {/* SERVICES */}
      <section className="bg-brand-navy/30 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-6">
              Solutions Engineered for Success
            </h2>
            <p className="text-brand-gray text-center mb-16 text-lg">
              Discover our suite of digital engineering services.
            </p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {coreServices.map((c) => (
              <motion.div
                variants={staggerItem}
                key={c.title}
                className="border border-white/10 p-6 hover:border-brand-teal/50 transition-all group rounded-2xl bg-white/2 hover:bg-white/5"
              >
                <div className="text-brand-teal mb-4 group-hover:scale-110 transition-transform">
                  {c.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{c.title}</h3>
                <p className="text-brand-gray leading-relaxed text-sm">{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2 
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="font-display text-4xl font-bold text-center mb-16"
        >
          The <span className="text-brand-teal">Zenvira Advantage</span>
        </motion.h2>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 text-center"
        >
          {whyChooseUs.map((item) => (
            <motion.div variants={staggerItem} key={item.title} className="flex flex-col items-center gap-4">
              <h3 className="font-display text-xl font-bold">{item.title}</h3>
              <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PROCESS */}
      <section className="bg-brand-navy/30 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="font-display text-4xl font-bold text-center mb-16"
          >
            From Concept to Deployment
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            {process.map((p) => (
              <motion.div variants={staggerItem} key={p.step} className="flex gap-8 items-start border-b border-white/10 pb-8">
                <span className="font-display text-5xl font-bold text-brand-teal/40 shrink-0">
                  {p.step}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-2">{p.title}</h3>
                  <p className="text-brand-gray leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <motion.section 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="py-32 px-6 text-center"
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-brand-gray max-w-xl mx-auto mb-10 text-lg">
          Let's turn your vision into a powerful digital product. Contact our team today for a free project estimate.
        </p>
        <Link
          href="/contact"
          className="bg-brand-teal text-brand-dark px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-brand-teal-light transition-all inline-block rounded-full"
        >
          Schedule a Consultation
        </Link>
      </motion.section>

    </main>
  );
}