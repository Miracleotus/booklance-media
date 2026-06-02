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
    title: "Digital Delivery — No Physical Shipping",
    content: `Gluetrain is a 100% digital platform. Every product in our library is an ebook delivered electronically. We do not stock, package, or physically ship any items. This means there are no shipping fees, no customs delays, and no waiting for a parcel — your purchase is available almost instantly, regardless of where you are in the world.

Whether you are ordering from Lagos, London, New York, or anywhere else, the delivery experience is identical: fast, seamless, and available 24 hours a day, 7 days a week, including public holidays.`,
  },
  {
    number: "2",
    title: "How Delivery Works",
    content: `Once your payment is confirmed, you will receive an automated order confirmation email at the address you provided at checkout. This email contains your secure, personalized download link for each ebook you purchased.

Click the link in your email to access your files. Depending on the title, your ebook will be available in EPUB format, PDF format, or both. EPUB is ideal for most ebook readers and mobile apps, while PDF is best for reading on a computer or printing. If you are unsure which format is right for your device, check our FAQ or email us at ops@gluetrain.com and we will guide you.`,
  },
  {
    number: "3",
    title: "Delivery Timeframe",
    content: `In the vast majority of cases, your order confirmation and download link will arrive in your inbox within a few minutes of completing checkout. Occasionally, email delivery may be slightly delayed due to high traffic, spam filter settings, or issues with your email provider.

If you have not received your confirmation email within 30 minutes of purchase, please first check your spam or junk mail folder. If it is not there, contact us at ops@gluetrain.com with your name and the email address used at checkout, and we will resend your download link promptly. We aim to resolve all delivery issues within 1–2 business hours.`,
  },
  {
    number: "4",
    title: "Download Limits and Link Expiry",
    content: `To protect our authors' intellectual property and prevent unauthorized distribution, download links may be subject to usage limits. Each link is valid for a set number of download attempts and will expire 30 days after the purchase date. We strongly recommend downloading and saving your ebook files to your personal device or cloud storage immediately after receiving your confirmation email.

If your download link expires or reaches its usage limit before you have had a chance to save your file, please contact us at ops@gluetrain.com and we will issue a fresh link free of charge, provided you can verify your purchase.`,
  },
  {
    number: "5",
    title: "Compatible Devices and Applications",
    content: `Our ebooks are formatted to work across a wide range of devices and platforms. EPUB files are compatible with Apple Books (iPhone, iPad, Mac), Google Play Books (Android and web), Kobo e-readers, and desktop apps such as Adobe Digital Editions and Calibre. PDF files can be opened with any PDF viewer, including Adobe Acrobat Reader, Preview on macOS, and Google Chrome.

Kindle users can read EPUB files by converting them using the free Calibre app or by sending files to their Kindle via the official Amazon Send to Kindle service. If you encounter any compatibility issues, our support team is happy to assist.`,
  },
  {
    number: "6",
    title: "International Customers",
    content: `Because Gluetrain delivers entirely digitally, there are no import duties, customs inspections, or international shipping restrictions that apply to your order. Our library is accessible to customers worldwide.

Prices are listed in USD by default, with an NGN equivalent available via the currency switcher on our site. Payments are processed in the currency you select at checkout. If you have any questions specific to purchasing from your country, please do not hesitate to reach out to us at ops@gluetrain.com.`,
  },
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
            Shipping &amp; Delivery Policy
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
            This Delivery Policy explains how Gluetrain fulfills your digital ebook orders. Because all of our
            products are delivered electronically, there is no physical shipping involved. This page explains
            exactly what to expect after you complete your purchase.
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
            <span className="font-semibold text-white">Questions about delivery?</span> Contact us at{" "}
            <a href="mailto:ops@gluetrain.com" className="text-brand-teal hover:text-brand-teal-light transition-colors">
              ops@gluetrain.com
            </a>
          </p>
        </motion.div>
      </section>
    </main>
  );
}
