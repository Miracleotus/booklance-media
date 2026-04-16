"use client";

import React from "react";
import { products } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Code, Zap, Shield, Wrench, Palette, CheckCircle } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "Web Development": <Code size={20} />,
  "Software Solutions": <Zap size={20} />,
  "Maintenance": <Wrench size={20} />,
  "Consulting": <CheckCircle size={20} />,
  "Design": <Palette size={20} />,
  "Security": <Shield size={20} />,
};

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function ShopPage() {
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, typeof products>);

  return (
    <main className="bg-brand-dark text-white min-h-screen py-12 font-body">
      <section className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Our Services Marketplace
          </h1>
          <p className="text-brand-gray text-lg max-w-2xl mx-auto">
            Choose from our curated selection of web development, software engineering, and digital solutions tailored to your business needs.
          </p>
        </motion.div>

        {Object.entries(groupedProducts).map(([ category, categoryProducts ]) => (
          <motion.section
            key={category}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="text-brand-teal">
                {categoryIcons[category] || <Code size={20} />}
              </div>
              <h2 className="font-display text-3xl font-bold">{category}</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="border border-white/10 rounded-2xl p-6 flex flex-col gap-4 bg-white/2 hover:bg-white/5 transition-all group hover:border-brand-teal/50 hover:shadow-lg hover:shadow-brand-teal/10"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs text-brand-teal uppercase tracking-widest font-semibold">{product.sku}</span>
                      <h3 className="text-lg font-bold mt-2 group-hover:text-brand-teal transition-colors">{product.name}</h3>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm flex-1 line-clamp-2">{product.shortDesc}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                    <span className="text-2xl font-bold text-brand-teal">{formatPrice(product.price)}</span>
                    <Link
                      href={`/shop/${product.id}`}
                      className="bg-brand-teal text-brand-dark text-xs font-semibold px-4 py-2 rounded-full hover:bg-brand-teal-light transition group-hover:shadow-lg group-hover:shadow-brand-teal/30"
                    >
                      View Details
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </section>
    </main>
  );
}