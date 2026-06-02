"use client";

import { motion, Variants } from "framer-motion";
import { products } from "@/lib/products";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { useCurrency } from "@/context/CurrencyContext";
import { useCart } from "@/context/CartContext";
import BookCover from "@/components/BookCover";

const stagger: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.07 } },
};

const item: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ShopPage() {
  const { currency, setCurrency, convert, symbol } = useCurrency();
  const { addToCart } = useCart();

  return (
    <main className="bg-brand-dark text-white font-body min-h-screen pt-16">

      {/* Page header */}
      <div className="bg-brand-navy/60 border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-brand-teal" />
              <span className="text-brand-teal text-[11px] font-bold uppercase tracking-[0.18em] font-body">
                Browse the Collection
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h1 className="font-display font-bold leading-tight"
                style={{ fontSize: "clamp(40px, 6vw, 72px)" }}>
                Our Library
              </h1>
              <div className="flex flex-col items-start md:items-end gap-2">
                <span className="text-brand-gray text-xs uppercase tracking-widest font-body">
                  Display currency
                </span>
                <div className="flex border border-white/12 overflow-hidden">
                  {(["USD", "NGN"] as const).map((c) => (
                    <button
                      key={c}
                      onClick={() => setCurrency(c)}
                      className={`px-5 py-2 text-xs font-bold tracking-widest transition-all font-body ${
                        currency === c
                          ? "bg-brand-teal text-white"
                          : "text-brand-gray hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Product grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              className="group flex flex-col bg-brand-navy/40 border border-white/8 hover:border-brand-teal/40 transition-all duration-300"
            >
              {/* Cover */}
              <div className="aspect-[3/4] overflow-hidden relative">
                <div className="w-full h-full group-hover:scale-[1.03] transition-transform duration-500">
                  <BookCover product={product} />
                </div>
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-brand-dark/80 backdrop-blur-sm text-brand-teal text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 font-body border border-brand-teal/30">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h2 className="font-display text-xl font-bold leading-tight flex-1">
                    {product.name}
                  </h2>
                  <span className="font-display text-lg font-bold text-brand-teal shrink-0 whitespace-nowrap">
                    {symbol}{convert(product.price)}
                  </span>
                </div>

                <p className="text-brand-gray text-xs leading-relaxed mb-5 flex-1 font-body">
                  {product.shortDesc}
                </p>

                <button
                  onClick={() => addToCart(product)}
                  className="w-full flex items-center justify-between px-4 py-3 border border-brand-teal/30 text-brand-teal hover:bg-brand-teal hover:text-white hover:border-brand-teal transition-all duration-200 font-body text-xs font-bold uppercase tracking-widest group/btn"
                >
                  <span className="flex items-center gap-2">
                    <ShoppingCart size={14} />
                    Add to Cart
                  </span>
                  <ArrowRight size={14} className="-translate-x-1 group-hover/btn:translate-x-0 opacity-0 group-hover/btn:opacity-100 transition-all" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
