"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-10 leading-tight">
          Innovating the Digital Landscape
        </h1>
        <p className="text-brand-gray text-lg leading-relaxed mb-8">
          Welcome to Zenvira Software Solutions. Founded on the principle that technology should empower rather than complicate, we are a dedicated team of software engineers, creative designers, and digital strategists. We specialize in crafting bespoke web and software solutions that help businesses thrive in an increasingly digital world.
        </p>
        
        <h2 className="font-display text-3xl font-bold mt-12 mb-6 text-brand-teal">Our Mission</h2>
        <p className="text-brand-gray text-lg leading-relaxed mb-12">
          To deliver exceptional, scalable, and secure software solutions that solve real-world business challenges, streamline operations, and drive measurable growth for our clients.
        </p>
        
        <h2 className="font-display text-3xl font-bold mb-6 text-brand-teal">Our Approach</h2>
        <p className="text-brand-gray text-lg leading-relaxed mb-12">
          We believe that the best software is built on a foundation of collaboration. We don't just take a brief and disappear for months. We partner with you, integrating your industry expertise with our technical prowess. We practice agile development, meaning we adapt to your needs, test frequently, and ensure the final product exceeds your expectations.
        </p>
        
        <h2 className="font-display text-3xl font-bold mb-6 text-brand-teal">The Team</h2>
        <p className="text-brand-gray text-lg leading-relaxed">
          Based remotely but connected globally, the Zenvira team brings together top-tier talent from across the tech industry. When you work with us, you are getting dedicated professionals who treat your project as their own.
        </p>
      </motion.div>
    </main>
  );
}