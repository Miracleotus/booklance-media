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
    title: "Digital Products Nature",
    content: "Due to the instant, downloadable nature of our products, all sales of digital ebooks at Booklance Media are generally considered final. Once a file has been downloaded, it cannot be \"returned\" in the traditional sense."
  },
  {
    number: "2",
    title: "Refund Eligibility",
    content: "We will gladly issue a full refund within 14 days of purchase under the following circumstances: the ebook file is corrupted or unreadable, you accidentally purchased the same ebook twice, or the file was never downloaded from our servers."
  },
  {
    number: "3",
    title: "Requesting a Refund",
    content: "To request a refund, please contact support@booklancemedia.com with your order number and the reason for the request. Approved refunds will be credited back to your original payment method within 5-7 business days."
  }
];

export default function RefundPage() {
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
            Refund Policy
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
            This Refund Policy governs all payments made to Booklance Media. Please review carefully before making any purchase.
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