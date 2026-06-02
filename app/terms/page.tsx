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
    title: "Acceptance of Terms",
    content: `By accessing or using Gluetrain.com, placing an order, or downloading any digital content from our platform, you confirm that you are at least 18 years of age (or the age of majority in your jurisdiction) and that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our site or services.

We reserve the right to update these Terms at any time. Changes will take effect immediately upon being posted to this page. Your continued use of the site after any modification constitutes your acceptance of the revised Terms.`,
  },
  {
    number: "2",
    title: "Intellectual Property",
    content: `All ebooks sold on Gluetrain are the intellectual property of their respective authors and publishers. Upon completing a purchase, you are granted a personal, non-exclusive, non-transferable license to read and use the digital file for your own private, non-commercial purposes only.

You may not copy, reproduce, distribute, publicly perform, publicly display, modify, create derivative works from, sublicense, sell, resell, transfer, or otherwise exploit any purchased content in any way. You may not share your download links or login credentials with any third party. Any violation of these intellectual property rights may result in the suspension of your account and legal action under applicable copyright law.`,
  },
  {
    number: "3",
    title: "Account Responsibilities",
    content: `If you create an account on Gluetrain, you are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You agree to notify us immediately at ops@gluetrain.com if you suspect any unauthorized use of your account.

You agree to provide accurate, current, and complete information when registering and to keep this information up to date. Gluetrain reserves the right to terminate accounts that contain false or misleading information, that have been inactive for an extended period, or that have been involved in any violation of these Terms.`,
  },
  {
    number: "4",
    title: "Purchases and Payment",
    content: `All prices displayed on Gluetrain are inclusive of applicable taxes unless otherwise stated. We accept major credit and debit cards. By submitting your payment information, you represent and warrant that you are authorized to use the payment method provided.

Once an order is placed and payment is confirmed, you will receive an email confirmation with your order details and download access. In the event of a pricing error on our site, we reserve the right to cancel the order and issue a full refund. We are not liable for any delays or failures in delivery caused by circumstances beyond our reasonable control.`,
  },
  {
    number: "5",
    title: "Prohibited Conduct",
    content: `You agree not to use Gluetrain for any unlawful purpose or in any way that could harm, disable, or impair the site or interfere with other users. Prohibited activities include: attempting to gain unauthorized access to any part of our systems; uploading or transmitting viruses or malicious code; scraping or harvesting data from the site without our written consent; and impersonating any person or entity.

We reserve the right to investigate and take appropriate legal action against anyone who, in our sole discretion, violates these prohibitions, including removing the offending user from our platform and reporting such violations to law enforcement.`,
  },
  {
    number: "6",
    title: "Modifications to Service and Limitation of Liability",
    content: `We reserve the right to modify, suspend, or discontinue any product, service, or feature on the website at any time without prior notice. Gluetrain shall not be liable to you or any third party for any modification, suspension, or discontinuation of service.

To the fullest extent permitted by applicable law, Gluetrain's total liability to you for any claims arising out of your use of the site or our products shall not exceed the amount you paid for the specific product giving rise to the claim. We are not liable for any indirect, incidental, special, or consequential damages, even if advised of the possibility of such damages.`,
  },
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
            These Terms and Conditions govern your use of Gluetrain.com and all services provided by Gluetrain.
            By accessing our site, creating an account, or purchasing any digital product, you agree to these
            Terms in full. Please read them carefully before proceeding.
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
