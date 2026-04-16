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

export default function PrivacyPage() {
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
            Privacy Policy
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
            <h2 className="font-display text-3xl font-bold mb-4 text-brand-teal">1. Introduction</h2>
            <p className="text-brand-gray leading-relaxed">
              Zenvira Software Solutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our software development services.
            </p>
          </motion.section>

          <motion.section
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl font-bold mb-4 text-brand-teal">2. Information We Collect</h2>
            <p className="text-brand-gray leading-relaxed mb-4">
              We may collect personal identification information (Name, Email Address, Phone Number, Company Details) when you fill out contact forms, request a quote, or purchase our services. We also collect non-identifiable data such as browser types and IP addresses for website analytics.
            </p>
          </motion.section>

          <motion.section
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl font-bold mb-4 text-brand-teal">3. How We Use Your Information</h2>
            <p className="text-brand-gray leading-relaxed">
              The data we collect is used strictly to provide and improve our services, process transactions, manage client communications, and send periodic technical updates or invoices. We do not sell or rent your personal information to third parties.
            </p>
          </motion.section>

          <motion.section
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl font-bold mb-4 text-brand-teal">4. Data Security</h2>
            <p className="text-brand-gray leading-relaxed">
              We implement industry-standard security measures, including SSL encryption and secure server hosting, to maintain the safety of your personal information. However, no data transmission over the internet can be guaranteed as 100% secure.
            </p>
          </motion.section>
        </div>
      </section>
    </main>
  );
}