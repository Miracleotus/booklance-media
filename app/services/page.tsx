"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Globe, Smartphone, Wrench, Lock, Palette } from "lucide-react";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const services = [
  {
    icon: <Code size={32} />,
    title: "Custom Web Application Development",
    tagline: "Your Business Logic, Engineered Precisely. Your Architecture, Built to Last.",
    description: "Off-the-shelf software is built for a generalised version of your use case. Your business is specific, your workflows are particular, and the system that serves them should be too. Custom web application development is how you build the platform that fits your operation without compromise — and Codevera Labs is how you build it to a standard that holds.\n\nWe develop web applications across the full stack using a modern, production-proven technology set: React and Next.js for frontend, Node.js and Python for backend, PostgreSQL and MongoDB for data, and AWS, Azure, or GCP for infrastructure. Every application ships with automated test coverage across critical user flows, API documentation, deployment runbooks, and architecture documentation that gives any future engineer the context they need to work in the codebase from day one.",
    useCases: [
      "SaaS product development from validated concept through scaled platform",
      "Customer-facing portals, dashboards, and self-service platforms",
      "Internal operations and workflow management applications",
      "Marketplace and multi-tenant platform architectures",
      "Legacy application replacement and full-stack modernisation"
    ],
    benefits: [
      "Built precisely to your business logic — no workarounds, no off-the-shelf compromise",
      "Scalable architecture designed for growth, not just the initial release",
      "Clean, tested, documented codebase your team can maintain and extend confidently",
      "Full IP transfer on receipt of final payment"
    ],
    cta: "Discuss Your Web Application →"
  },
  {
    icon: <Globe size={32} />,
    title: "Website Design & Development",
    tagline: "Your Digital Front Door, Built to Make the Right First Impression — Every Time.",
    description: "Your website works for your business every hour of every day — and it either communicates your credibility, guides visitors toward meaningful action, and performs under real-world traffic conditions, or it does not. There is no neutral outcome. Codevera Labs builds websites that do the first three things reliably, measurably, and for the long term.\n\nWe approach every website project with a dual focus on strategic design and engineering quality. User journey mapping before wireframing. Performance engineering baked into the build from the start. Core Web Vitals as a design constraint, not a post-launch metric. CMS integrations delivered with the editorial controls that let your team manage content without requiring developer support for every change. Every website we build is a business asset, not just a digital presence.",
    useCases: [
      "Business, corporate, and professional services websites",
      "E-commerce and headless commerce builds",
      "Marketing websites, landing pages, and campaign microsites",
      "Portfolio and brand showcase sites",
      "Website redesigns and Core Web Vitals performance remediation"
    ],
    benefits: [
      "Conversion-optimised design grounded in user journey research",
      "Core Web Vitals and technical SEO engineered in from the ground up",
      "Mobile-first, fully responsive across all viewports and devices",
      "CMS integration for independent content management by non-technical teams"
    ],
    cta: "Start Your Website Project →"
  },
  {
    icon: <Smartphone size={32} />,
    title: "Mobile App Development",
    tagline: "Mobile Applications Built for the Standard Users Now Expect.",
    description: "The bar for mobile application quality has never been higher. Users have daily experience of the best mobile products in the world and their tolerance for the rest has never been lower. Codevera Labs builds mobile applications that meet the standard — fast, intuitive, platform-appropriate in their UX, and engineered to perform consistently across the device and operating system diversity of a real-world user base.\n\nWe build native iOS and Android applications where platform-specific performance and design conventions are paramount, and cross-platform applications using React Native where a single, maintainable codebase serves the project and the client better. Both approaches are executed to production standard — comprehensively tested, submitted through App Store and Google Play, and supported through post-launch evolution as platforms and user needs develop.",
    useCases: [
      "Consumer-facing iOS and Android product applications",
      "Internal operational tools for field, remote, and frontline teams",
      "Mobile companions and extensions to existing web applications",
      "E-commerce, retail, and loyalty mobile experiences",
      "Health, logistics, and field operations mobile platforms"
    ],
    benefits: [
      "Platform-appropriate UX and native performance throughout",
      "Comprehensive testing across device types and OS versions before release",
      "Seamless integration with existing API and backend infrastructure",
      "App Store and Google Play submission support included as standard"
    ],
    cta: "Explore Mobile Development →"
  },
  {
    icon: <Wrench size={32} />,
    title: "Custom Software & Automation",
    tagline: "Replace the Patchwork. Build the System That Actually Fits.",
    description: "Most businesses reach a point where the combination of spreadsheets, off-the-shelf tools, and manual processes that served their early stage actively limits where they can go next. The workflow that requires three people to execute manually could run in minutes. The data spread across four separate platforms could power real-time executive visibility. The client process that takes five email exchanges could complete in a single interaction.\n\nCodevera Labs builds the custom software that closes that gap. We analyse your existing processes thoroughly before recommending a single technical approach — because the most expensive software is software that solves the wrong problem precisely. From that analysis, we design and build systems that fit your workflows exactly, integrate with your existing tools cleanly, and give your team back the time they should never have been spending in the first place.",
    useCases: [
      "Custom CRM and client relationship management systems",
      "Inventory, supply chain, and logistics management tools",
      "Business process automation and workflow management platforms",
      "Custom financial management, billing, and reporting software",
      "Business intelligence dashboards and data aggregation platforms"
    ],
    benefits: [
      "Eliminates manual work, reduces human error, and frees your team at scale",
      "Built around your specific processes — not a template stretched to fit",
      "Integrates cleanly with your existing tools and data sources",
      "Reduces long-term dependence on expensive off-the-shelf licence fees"
    ],
    cta: "Talk to Us About Custom Software →"
  },
  {
    icon: <Lock size={32} />,
    title: "API Development & Integration",
    tagline: "Connect Your Stack. Automate Your Flows. Own Your Data.",
    description: "The quality of a modern business's technology infrastructure is determined as much by the connections between its systems as by the systems themselves. A CRM that does not communicate with the billing platform. A mobile app making redundant API calls because the data layer was never properly designed. An e-commerce operation where inventory data lives in a different system from the one processing orders. These are not inconveniences — they are compounding operational costs that grow with every new user and every new transaction.\n\nCodevera Labs designs and builds API infrastructure that makes your systems communicate reliably, securely, and at the load your business actually generates. Custom RESTful and GraphQL APIs, integration middleware, event-driven architectures, and third-party integrations — all built to high availability standards, fully documented with OpenAPI specifications, and tested comprehensively across every endpoint before they go near production.",
    useCases: [
      "Custom REST and GraphQL API development for frontend or mobile consumption",
      "Third-party platform integrations — CRM, ERP, payments, logistics, and marketing",
      "Webhook and event-driven architecture design and implementation",
      "API security hardening, rate limiting, and authentication layer development",
      "Microservices architecture design and monolith decomposition"
    ],
    benefits: [
      "Fully documented APIs with OpenAPI / Swagger specification as a deliverable",
      "OAuth2 and JWT authentication — secure by design, not by afterthought",
      "Versioned and backward-compatible API design that evolves without breaking consumers",
      "Comprehensive automated testing across all endpoints and integration scenarios"
    ],
    cta: "Discuss Your API Requirements →"
  },
  {
    icon: <Palette size={32} />,
    title: "UI/UX Design",
    tagline: "Design That Serves the User. Outcomes That Serve the Business.",
    description: "Design that looks beautiful but confuses users is not good design. Design that converts but feels cheap undermines the brand it is supposed to build. The standard at Codevera Labs is both — interfaces that are visually excellent and functionally intuitive, designed through a process grounded in how real users actually think and behave, and delivered in a form that production engineers can build from with precision.\n\nWe approach every design engagement as a research problem first and a creative problem second. User journeys are mapped before wireframes are drawn. Assumptions are tested before high-fidelity mockups are committed to. Design systems are built for consistency and maintainability, not just the first release. And every Figma file we hand over to a development team is annotated, component-structured, and accompanied by the documentation that turns a design vision into a buildable reality.",
    useCases: [
      "End-to-end UX and UI design for new web or mobile digital products",
      "UX audit, redesign, and conversion optimisation of existing digital interfaces",
      "Design system development for consistent product-scale user experiences",
      "Prototype and concept design for stakeholder alignment and user testing",
      "WCAG 2.1 accessibility audit and design remediation"
    ],
    benefits: [
      "Research-grounded design — evidence-based decisions throughout the process",
      "Complete design system with components, tokens, and usage guidelines",
      "Developer-ready Figma handover with full annotation and specification",
      "Measurably improved conversion rate, task completion, and user satisfaction metrics"
    ],
    cta: "Start With a Design Discovery →"
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-brand-dark text-white font-body">
      
      {/* PAGE INTRO */}
      <section className="min-h-[50vh] flex flex-col justify-center items-center text-center px-6 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(ellipse at center, rgba(201, 169, 97, 0.12) 0%, transparent 70%)" }} />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center max-w-4xl"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
            Software and Web Development Services Built to the Standard Your Product Deserves.
          </h1>
          <p className="text-brand-gray text-lg md:text-xl leading-relaxed">
            Every Codevera Labs service is delivered to the same engineering standard — production-quality code, rigorous testing, clear documentation, and the commercial thinking that turns a technical deliverable into a business asset.
          </p>
        </motion.div>
      </section>

      {/* SERVICES DETAIL */}
      <section className="px-6 py-24">
        <div className="space-y-32">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className={`max-w-5xl mx-auto ${idx % 2 === 0 ? '' : 'lg:flex lg:flex-row-reverse lg:gap-16'}`}
            >
              <div className="flex-1">
                <div className="text-brand-teal mb-4">
                  {service.icon}
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                  {service.title}
                </h2>
                <p className="text-brand-teal text-lg font-semibold mb-6 italic">
                  {service.tagline}
                </p>
                
                {service.description.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-brand-gray text-lg leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}

                <div className="mt-12 space-y-8">
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-4">Use Cases</h3>
                    <ul className="space-y-3">
                      {service.useCases.map((useCase, i) => (
                        <li key={i} className="text-brand-gray flex gap-3">
                          <span className="text-brand-teal font-bold shrink-0">•</span>
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold mb-4">Key Benefits</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="text-brand-gray flex gap-3">
                          <span className="text-brand-teal font-bold shrink-0">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-brand-teal font-bold hover:text-brand-teal-light transition-colors mt-8 text-lg"
                >
                  {service.cta} <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <motion.section 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="max-w-4xl mx-auto px-6 py-32 text-center"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
          Ready to Start Your Project?
        </h2>
        <p className="text-brand-gray text-lg mb-12 leading-relaxed">
          Let's discuss which services are the right fit for your digital product and your timeline.
        </p>
        <Link
          href="/contact"
          className="bg-brand-teal text-brand-dark px-10 py-4 font-bold tracking-widest uppercase text-sm hover:bg-brand-teal-light transition-all inline-flex items-center gap-2 rounded-full"
        >
          Book a Consultation <ArrowRight size={16} />
        </Link>
      </motion.section>

    </main>
  );
}
