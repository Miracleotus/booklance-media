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
    title: "Intellectual Property",
    content: "All ebooks sold on Gluetrain are the intellectual property of their respective authors and publishers. Upon purchase, you are granted a personal, non-exclusive, non-transferable license to read the ebook. You may not copy, distribute, share, or resell the digital files."
  },
  {
    number: "2",
    title: "Account Responsibilities",
    content: "If you create an account on our site, you are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account."
  },
  {
    number: "3",
    title: "Modifications to Service",
    content: "We reserve the right to modify or discontinue any product, service, or pricing on the website without prior notice. Gluetrain shall not be liable to you or any third party for any modification or suspension of the service."
  }
];

export default function TermsPage() {
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
            Terms and Conditions
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
            These Terms and Conditions govern your use of Gluetrain.com and all services provided by Gluetrain. By accessing our Site or engaging our services, you agree to these Terms in full.
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
            <span className="font-semibold text-white">Questions about these terms?</span> Contact us at{" "}
            <a href="mailto:ops@gluetrain.com" className="text-brand-teal hover:text-brand-teal-light transition-colors">
              ops@gluetrain.com
            </a>
          </p>
        </motion.div>
      </section>
    </main>
  );
}