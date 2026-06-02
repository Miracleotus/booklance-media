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
    title: "Information We Collect",
    content: `When you browse, register, or make a purchase on Gluetrain, we collect certain personal information to process your order and deliver your purchased ebooks. This includes your full name, email address, billing address, and payment details. We also collect non-personal information such as your browser type, device type, operating system, referring URLs, and pages visited on our site. This technical data is gathered automatically through standard web technologies such as cookies and server logs.

If you choose to subscribe to our newsletter or promotional emails, we store your email address and communication preferences. You may unsubscribe at any time using the link included in every email we send.`,
  },
  {
    number: "2",
    title: "How We Use Your Data",
    content: `We use your personal information solely to operate and improve our services. Specifically, your data is used to: process and fulfill your digital ebook orders; send order confirmation and delivery emails; provide customer support and respond to enquiries; and, where you have opted in, send you updates about new titles, offers, and promotions.

We analyze aggregated, anonymized usage data to understand how visitors interact with our site, identify popular content, and optimize the shopping experience. This analysis never identifies individual users. We do not sell, rent, trade, or otherwise transfer your personally identifiable information to third parties without your consent, except as required by law or to deliver the services you requested (for example, passing your email to our email delivery provider).`,
  },
  {
    number: "3",
    title: "Cookies and Tracking",
    content: `Gluetrain uses cookies — small text files stored on your device — to maintain your session, remember your cart contents, and store your currency preference between visits. We also use analytics cookies to understand site traffic patterns.

You may configure your browser to refuse all cookies or to alert you when a cookie is being sent. Please note that some features of our site, such as the shopping cart, may not function properly if cookies are disabled. We do not use third-party advertising cookies, and we do not participate in cross-site behavioral tracking networks.`,
  },
  {
    number: "4",
    title: "Data Security",
    content: `We take the protection of your personal information seriously. All data transmitted between your browser and our servers is encrypted using SSL (Secure Sockets Layer) technology. Payment information entered at checkout is handled securely and is not stored on our servers in plain form.

We restrict access to your personal data to employees and contractors who need it to operate our services, and we require all such parties to respect the confidentiality of your information. Although no method of transmission over the internet is 100% secure, we employ commercially reasonable measures to protect your data from unauthorized access, disclosure, alteration, or destruction.`,
  },
  {
    number: "5",
    title: "Your Rights",
    content: `You have the right to access the personal data we hold about you, request corrections to inaccurate information, ask us to delete your data (subject to any legal obligations), and withdraw consent for marketing communications at any time. To exercise any of these rights, please contact us at ops@gluetrain.com. We will respond to all legitimate requests within 30 days. If you are located in the European Economic Area, you may also have additional rights under the GDPR, including the right to lodge a complaint with your local data protection authority.`,
  },
  {
    number: "6",
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we do, we will revise the "Last Updated" date at the top of this page. We encourage you to review this policy periodically. Continued use of Gluetrain after any changes constitutes your acceptance of the updated policy. If the changes are material, we will notify registered users by email.`,
  },
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
            This Privacy Policy describes how Gluetrain ("we", "us", "our") collects, uses, stores, and protects
            personal information gathered through Gluetrain.com and through the delivery of our digital library
            services. By using our site or making a purchase, you agree to the practices described in this policy.
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
            <span className="font-semibold text-white">Questions about this policy?</span> Contact us at{" "}
            <a href="mailto:ops@gluetrain.com" className="text-brand-teal hover:text-brand-teal-light transition-colors">
              ops@gluetrain.com
            </a>
          </p>
        </motion.div>
      </section>
    </main>
  );
}
