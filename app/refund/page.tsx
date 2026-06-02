"use client";

import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const sections = [
  {
    number: "1",
    title: "Our Refund Philosophy",
    content: `At Gluetrain, customer satisfaction is our top priority. We understand that purchasing a digital product requires trust, and we stand behind the quality of every ebook in our library. Because our products are delivered instantly as digital files, we have a clear and fair refund policy designed to protect both our customers and our authors.

We handle all refund requests on a case-by-case basis and aim to resolve every request promptly, fairly, and professionally. If you are not satisfied with a purchase for a legitimate reason, please reach out to us and we will do our best to make it right.`,
  },
  {
    number: "2",
    title: "Eligibility for a Refund",
    content: `You may be eligible for a full refund within 7 days of purchase if: the ebook file you received was corrupted, unreadable, or did not open correctly on any standard ebook reader; the content you received was materially different from the description on the product page; or you were charged multiple times for the same order due to a technical error.

Refunds are not available in the following circumstances: you have already downloaded the file and simply changed your mind about the purchase; you found the content available for free elsewhere after buying; you did not read the product description carefully and bought the wrong book; or more than 7 days have elapsed since the date of purchase.`,
  },
  {
    number: "3",
    title: "How to Request a Refund",
    content: `To submit a refund request, email us at ops@gluetrain.com with the subject line "Refund Request – [Your Order Number]". Please include your full name, the email address used at checkout, the title of the ebook in question, and a brief description of the issue you experienced.

We will acknowledge your request within 1–2 business days and aim to resolve it within 5 business days. If your request is approved, the refund will be credited back to your original payment method. Please allow up to 7–10 business days for the refund to appear on your statement, depending on your bank or card provider.`,
  },
  {
    number: "4",
    title: "Technical Issues",
    content: `If you are experiencing difficulty downloading or opening your ebook, we strongly encourage you to contact our support team before requesting a refund. Many delivery or compatibility issues can be resolved quickly with guidance on the correct app or file format for your device.

We support EPUB and PDF formats, which are compatible with all major ebook readers including Kindle (via the send-to-Kindle feature), Apple Books, Google Play Books, Adobe Digital Editions, and Calibre. If you let us know what device or app you are using, we will do our best to provide a format that works for you.`,
  },
  {
    number: "5",
    title: "Fraudulent Claims",
    content: `We take fraudulent refund claims seriously. Any attempt to obtain a refund by providing false information, such as falsely claiming a file was not received or was corrupted when it was in fact successfully downloaded and used, may result in the permanent suspension of your account, the invalidation of all associated download links, and reporting to relevant authorities where applicable.

We reserve the right to deny refund requests that we determine, at our sole discretion, to be fraudulent or made in bad faith. Our goal is to be fair to all genuine customers, and protecting the integrity of this policy is essential to doing so.`,
  },
  {
    number: "6",
    title: "Contact Us",
    content: `If you have any questions about our refund policy, are unsure whether your situation qualifies, or need assistance with a purchase, please do not hesitate to get in touch. Our support team is available Monday through Friday and will respond as quickly as possible.

You can reach us by email at ops@gluetrain.com or through the contact form on our website. We are committed to resolving all genuine concerns and ensuring that every Gluetrain customer has a positive experience from the moment they browse our library to long after their purchase is complete.`,
  },
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
          <div className="space-y-2 text-brand-gray text-lg">
            <p><span className="font-semibold text-white">Effective Date:</span> April 18, 2026</p>
            <p><span className="font-semibold text-white">Last Updated:</span> April 18, 2026</p>
          </div>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="prose prose-invert max-w-none mb-16"
        >
          <p className="text-brand-gray text-lg leading-relaxed">
            This Refund Policy outlines the conditions under which Gluetrain will issue refunds for digital ebook
            purchases. Please read this policy carefully before completing your order. By purchasing from our store,
            you agree to the terms described below.
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
                  <h2 className="font-display text-2xl font-bold mb-4">{section.title}</h2>
                  <div className="space-y-4">
                    {section.content.split("\n\n").map((paragraph, i) => (
                      <p key={i} className="text-brand-gray text-lg leading-relaxed">{paragraph}</p>
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
            <span className="font-semibold text-white">Need to request a refund?</span> Email us at{" "}
            <a href="mailto:ops@gluetrain.com" className="text-brand-teal hover:text-brand-teal-light transition-colors">
              ops@gluetrain.com
            </a>
          </p>
        </motion.div>
      </section>
    </main>
  );
}
