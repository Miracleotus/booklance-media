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

export default function RefundPage() {
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
            Refund Policy
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
            <h2 className="font-display text-3xl font-bold mb-4 text-brand-teal">1. Digital Services and Development Work</h2>
            <p className="text-brand-gray leading-relaxed">
              Due to the custom nature of software development, web design, and consulting services, Zenvira Software Solutions generally does not offer refunds for work that has already been completed or hours that have been logged by our team.
            </p>
          </motion.section>

          <motion.section
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl font-bold mb-4 text-brand-teal">2. Productized Services (WooCommerce Purchases)</h2>
            <p className="text-brand-gray leading-relaxed">
              For pre-packaged services purchased directly through our website, you may request a full refund within 48 hours of purchase, provided that no discovery, design, or development work has commenced.
            </p>
          </motion.section>

          <motion.section
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl font-bold mb-4 text-brand-teal">3. Milestone Payments</h2>
            <p className="text-brand-gray leading-relaxed">
              For larger custom projects billed in milestones, milestone deposits are non-refundable once the work for that specific milestone has begun. If a project is cancelled by the client mid-milestone, the client is responsible for paying for the hours worked up to the cancellation date.
            </p>
          </motion.section>
        </div>
      </section>
    </main>
  );
}
}