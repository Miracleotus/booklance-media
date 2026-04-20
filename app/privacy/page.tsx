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
    title: "Information We Collect",
    content: "At Booklance Media, we collect personal information you provide when you purchase an ebook, create an account, or subscribe to our newsletter. This includes your name, email address, and payment information. We also collect non-identifying data such as browser type and IP address to improve our website's functionality."
  },
  {
    number: "2",
    title: "How We Use Your Data",
    content: "We use your information strictly to process your digital orders, deliver your ebook files, provide customer support, and, if you have opted in, send you updates on new book releases. We do not sell your personal data to third parties."
  },
  {
    number: "3",
    title: "Data Security",
    content: "We implement industry-standard security measures, including SSL encryption, to protect your personal and payment information during transactions."
  }
];

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <div className="space-y-4 text-brand-gray text-lg">
            <p>
              <span className="font-semibold">Effective Date:</span> April 18, 2026
            </p>
            <p>
              <span className="font-semibold">Last Updated:</span> April 18, 2026
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
            This Privacy Policy describes how Booklance Media ("we", "us", "our") collects, uses, stores, and protects personal information gathered through BooklanceMedia.com and through the delivery of our digital library services. By using our Site or engaging our services, you agree to the practices described in this policy.
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