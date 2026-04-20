"use client";

import { motion, Variants } from "framer-motion";
import { products } from "@/lib/products";
import { ShoppingCart, BookOpen } from "lucide-react";

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
    transition: { staggerChildren: 0.1 }
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

export default function ShopPage() {
  return (
    <main className="bg-brand-dark text-white font-body pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="initial"
          animate="whileInView"
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Our Library</h1>
          <p className="text-brand-gray text-lg max-w-2xl mx-auto">
            Explore our premium collection of digital books. Instant access on any device.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="whileInView"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div 
              key={product.id} 
              variants={staggerItem}
              className="bg-brand-navy/30 border border-white/10 rounded-2xl p-6 flex flex-col hover:border-brand-teal/50 transition-colors group"
            >
              <div className="bg-brand-dark/50 rounded-xl aspect-[3/4] mb-6 flex items-center justify-center border border-white/5 group-hover:bg-brand-dark/80 transition-colors">
                <BookOpen size={48} className="text-brand-teal/50 group-hover:text-brand-teal transition-colors" />
              </div>
              <div className="flex justify-between items-start mb-4 gap-4">
                <div>
                  <span className="text-brand-teal text-xs font-bold uppercase tracking-wider mb-2 block">{product.category}</span>
                  <h2 className="font-display text-xl font-bold leading-tight">{product.name}</h2>
                </div>
                <span className="font-display text-lg font-bold">${product.price.toFixed(2)}</span>
              </div>
              <p className="text-brand-gray text-sm mb-8 flex-grow">{product.shortDesc}</p>
              <button className="w-full bg-brand-teal/10 hover:bg-brand-teal text-brand-teal hover:text-brand-dark font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                <ShoppingCart size={18} /> Add to Cart
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}