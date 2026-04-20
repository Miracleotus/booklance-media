"use client";

import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const sections = [
  {
    number: "1",
    title: "Instant Digital Delivery",
    content: "Booklance Media is a 100% digital platform. We do not sell physical books, and therefore, no physical shipping is required."
  },
  {
    number: "2",
    title: "How to Access Your Purchase",
    content: "Immediately upon completing your secure checkout, you will be redirected to a download page where you can access your ebook files (typically in EPUB or PDF format). You will also receive an automated email containing a secure download link for your records."
  },
  {
    number: "3",
    title: "Download Limits",
    content: "To protect our authors' intellectual property, download links may be limited to a specific number of attempts or expire after a certain period (e.g., 30 days). We highly recommend saving the downloaded file securely to your personal device or e-reader immediately after purchase."
  }
];

export default function ShippingPage() {
  return (
    <main className="bg-brand-dark text-white font-body">
      <section className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-8">
            Shipping & Delivery Policy
          </h1>
          <div className="space-y-4 text-brand-gray text-lg">
            <p>
              <span className="font-semibold">Effective Date:</span> April 18, 2026
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="prose prose-invert max-w-none mb-16"
        >
          <p className="text-brand-gray text-lg leading-relaxed mb-12">
            This Delivery Policy explains how Booklance Media provides instant access to your purchased digital ebooks.
          </p>
        </motion.div>

        <div className="space-y-16">
          {sections.map((section, idx) => (
            <motion.section
              key={idx}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
            >
              <div className="flex gap-6 items-start">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-brand-teal/20 rounded-lg flex items-center justify-center">
                    <span className="font-display text-xl font-bold text-brand-teal">{section.number}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-2xl font-bold mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-brand-gray text-lg leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="mt-24 p-8 border border-white/10 rounded-2xl bg-white/2"
        >
          <p className="text-brand-gray text-sm">
            <span className="font-semibold text-white">Questions about this policy?</span> Contact us at{" "}
            <a href="mailto:support@booklancemedia.com" className="text-brand-teal hover:text-brand-teal-light transition-colors">
              support@booklancemedia.com
            </a>
          </p>
        </motion.div>
      </section>
    </main>
  );
}