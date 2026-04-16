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

export default function TermsPage() {
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
            Terms and Conditions
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
            <h2 className="font-display text-3xl font-bold mb-4 text-brand-teal">1. Acceptance of Terms</h2>
            <p className="text-brand-gray leading-relaxed">
              By accessing our website or engaging Zenvira Software Solutions for development services, you agree to be bound by these Terms and Conditions.
            </p>
          </motion.section>

          <motion.section
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl font-bold mb-4 text-brand-teal">2. Intellectual Property</h2>
            <p className="text-brand-gray leading-relaxed">
              Upon receipt of full and final payment, the client retains ownership of the final codebase, website, or digital product created by Zenvira, unless otherwise specified in a separate service level agreement. Zenvira retains the right to display the completed work in our portfolio.
            </p>
          </motion.section>

          <motion.section
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl font-bold mb-4 text-brand-teal">3. Client Responsibilities</h2>
            <p className="text-brand-gray leading-relaxed">
              The client agrees to provide necessary access to hosting environments, domain registrars, and brand assets required to complete the project in a timely manner. Delays in client feedback may result in adjusted project timelines.
            </p>
          </motion.section>

          <motion.section
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl font-bold mb-4 text-brand-teal">4. Limitation of Liability</h2>
            <p className="text-brand-gray leading-relaxed">
              Zenvira Software Solutions shall not be liable for any indirect, incidental, or consequential damages, including loss of profits or data, arising out of the use or inability to use the software or websites we develop, or any third-party plugins/APIs integrated into the final product.
            </p>
          </motion.section>
        </div>
      </section>
    </main>
  );
}