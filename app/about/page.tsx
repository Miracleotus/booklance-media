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



export default function AboutPage() {
  return (
    <main className="bg-brand-dark text-white font-body">
      
      {/* PAGE HERO */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(ellipse at center, rgba(201, 169, 97, 0.12) 0%, transparent 70%)" }} />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center max-w-4xl"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
            The Story Behind Booklance Media
          </h1>
          <p className="text-brand-gray text-lg md:text-xl leading-relaxed max-w-3xl">
            Booklance Media was born from a simple frustration: finding high-quality, well-formatted ebooks from independent creators was too difficult. We set out to build a platform that champions both the reader and the author—a streamlined digital bookstore focused entirely on the modern reading experience.
          </p>
        </motion.div>
      </section>

      {/* OUR MISSION */}
      <motion.section 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="bg-brand-navy/30 px-6 py-24 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
            Our Mission
          </h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Our mission is to democratize knowledge and storytelling by providing instant, affordable access to premium digital books. We are dedicated to curating a catalog that helps you learn new skills, grow your business, and escape into incredible new worlds.
          </p>
        </div>
      </motion.section>

      {/* SUPPORTING CREATORS */}
      <motion.section 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="max-w-4xl mx-auto px-6 py-24 text-center"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
          Supporting Creators
        </h2>
        <div className="text-brand-gray text-lg leading-relaxed">
          <p>
            We are more than just a retailer; we are a launchpad. Booklance Media works closely with independent authors, freelance writers, and industry experts, ensuring they receive fair compensation for their work while connecting them directly with a global audience of eager readers.
          </p>
        </div>
      </motion.section>

    </main>
  );
}