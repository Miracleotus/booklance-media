"use client";

import { motion, Variants } from "framer-motion";
import { Code, Layers, Lock, Wrench } from "lucide-react";

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

const services = [
  {
    icon: <Code size={32} />,
    title: "Web Development",
    desc: "Your website is your digital storefront. We build lightning-fast, highly secure, and mobile-responsive websites using modern CMS platforms like WordPress and Shopify, or custom frameworks like React and Vue.js."
  },
  {
    icon: <Layers size={32} />,
    title: "Custom Software & Web Apps",
    desc: "Off-the-shelf software rarely fits perfectly. We engineer bespoke web applications, custom CRM systems, and internal portals designed specifically to streamline your unique business processes and scale alongside your user base."
  },
  {
    icon: <Wrench size={32} />,
    title: "UI/UX & Product Design",
    desc: "Great software is intuitive. Our design team focuses on the user journey, creating wireframes, prototypes, and high-fidelity interfaces that look stunning and provide a frictionless user experience."
  },
  {
    icon: <Lock size={32} />,
    title: "Support & Maintenance",
    desc: "Technology requires upkeep. We offer comprehensive maintenance packages, including routine security patching, server monitoring, bug fixing, and continuous feature updates so you can focus on running your business."
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-brand-dark text-white font-body">
      
      {/* HERO */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(ellipse at center, rgba(201, 169, 97, 0.12) 0%, transparent 70%)" }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
            Comprehensive Digital Engineering
          </h1>
          <p className="text-brand-gray text-lg leading-relaxed">
            At Zenvira, we offer end-to-end development services. Whether you are a startup looking for an MVP or an established enterprise needing a complex system overhaul, we have the expertise to deliver.
          </p>
        </motion.div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service) => (
            <motion.div
              variants={staggerItem}
              key={service.title}
              className="border border-white/10 p-8 hover:border-brand-teal/50 transition-all group rounded-2xl bg-white/2 hover:bg-white/5"
            >
              <div className="text-brand-teal mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-brand-gray leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* WHY WE STAND OUT */}
      <section className="bg-brand-navy/30 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="font-display text-4xl font-bold text-center mb-16"
          >
            Why Choose Zenvira?
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <motion.div variants={staggerItem} className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-lg bg-brand-teal/20 flex items-center justify-center shrink-0">
                <span className="font-display text-lg font-bold text-brand-teal">✓</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-2">Future-Proof Tech</h3>
                <p className="text-brand-gray leading-relaxed">We use the latest frameworks and industry best practices to ensure your software won't be obsolete tomorrow.</p>
              </div>
            </motion.div>
            <motion.div variants={staggerItem} className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-lg bg-brand-teal/20 flex items-center justify-center shrink-0">
                <span className="font-display text-lg font-bold text-brand-teal">✓</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-2">Transparent Communication</h3>
                <p className="text-brand-gray leading-relaxed">No confusing jargon. We keep you in the loop with clear, regular updates.</p>
              </div>
            </motion.div>
            <motion.div variants={staggerItem} className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-lg bg-brand-teal/20 flex items-center justify-center shrink-0">
                <span className="font-display text-lg font-bold text-brand-teal">✓</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-2">Security First</h3>
                <p className="text-brand-gray leading-relaxed">From data encryption to secure deployment, we build digital fortresses to protect your business.</p>
              </div>
            </motion.div>
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
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-brand-gray max-w-xl mx-auto mb-10 text-lg">
          Let's discuss which service is the perfect fit for your business goals.
        </p>
        <a
          href="/contact"
          className="bg-brand-teal text-brand-dark px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-brand-teal-light transition-all inline-block rounded-full"
        >
          Contact Us
        </a>
      </motion.section>

    </main>
  );
}
