"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function ShippingPage() {
  return (
    <main className="bg-brand-dark text-white font-body">
      <section className="pt-40 pb-24 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
            Shipping Policy
          </h1>
          <p className="text-brand-gray text-lg">Last updated: April 16, 2026</p>
        </motion.div>

        <div className="space-y-12">
          <motion.section
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl font-bold mb-4 text-brand-teal">1. Digital Delivery</h2>
            <p className="text-brand-gray leading-relaxed">
              Zenvira Software Solutions provides digital products and services. Therefore, no physical shipping of goods is required.
            </p>
          </motion.section>

          <motion.section
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl font-bold mb-4 text-brand-teal">2. Delivery of Code and Digital Assets</h2>
            <p className="text-brand-gray leading-relaxed">
              Completed projects, source code, and design files will be delivered electronically via secure file transfer, GitHub/GitLab repositories, or deployed directly to your designated web server or cloud hosting environment (e.g., AWS, DigitalOcean).
            </p>
          </motion.section>

          <motion.section
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl font-bold mb-4 text-brand-teal">3. Delivery Timelines</h2>
            <p className="text-brand-gray leading-relaxed">
              Delivery timelines for custom software and web development are determined on a project-by-project basis and will be clearly outlined in your individual project proposal or Statement of Work (SOW). Delivery of productized services purchased via our store will commence within the timeframe specified in the product description.
            </p>
          </motion.section>
        </div>
      </section>
    </main>
  );
}