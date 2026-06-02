"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { useCurrency } from "@/context/CurrencyContext";
import Link from "next/link";
import { Trash2, ShoppingBag, Plus, Minus, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, addToCart } = useCart();
  const { currency } = useCurrency();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const displayTotal = currency === "NGN" ? total * 1600 : total;

  if (cart.length === 0) {
    return (
      <main className="bg-brand-dark text-white min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="text-center">
          <div className="w-20 h-20 border-2 border-brand-teal/30 flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={32} className="text-brand-teal/60" />
          </div>
          <h1 className="font-display text-4xl font-bold mb-3">Your Cart</h1>
          <p className="text-brand-gray mb-8 font-body">
            You haven&apos;t added any books yet.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-brand-teal text-white px-7 py-3 font-bold text-xs uppercase tracking-widest hover:bg-brand-teal-light transition-colors font-body"
          >
            Browse the Library <ArrowRight size={14} />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-brand-dark text-white min-h-screen font-body pt-16">

      {/* Header */}
      <div className="bg-brand-navy/60 border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[2px] bg-brand-teal" />
            <span className="text-brand-teal text-[11px] font-bold uppercase tracking-[0.18em] font-body">
              Your Selection
            </span>
          </div>
          <h1 className="font-display font-bold" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
            Your Cart
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-[1fr_340px] gap-10 items-start">

          {/* Items */}
          <div>
            <div className="border-t border-white/10">
              {cart.map((item, i) => {
                const itemDisplay = currency === "NGN"
                  ? item.price * item.quantity * 1600
                  : item.price * item.quantity;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-6 py-6 border-b border-white/8 group"
                  >
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] text-brand-teal uppercase tracking-widest font-bold block mb-1 font-body">
                        {item.category}
                      </span>
                      <h3 className="font-display text-xl font-bold leading-snug truncate">
                        {item.name}
                      </h3>
                      <p className="text-white/35 text-xs mt-1 font-body">SKU: {item.sku}</p>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-1 border border-white/12">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-red-400 hover:bg-red-400/10 transition-colors"
                        aria-label="Decrease"
                      >
                        {item.quantity === 1 ? <Trash2 size={13} /> : <Minus size={13} />}
                      </button>
                      <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-brand-teal hover:bg-brand-teal/10 transition-colors"
                        aria-label="Increase"
                      >
                        <Plus size={13} />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right min-w-[88px]">
                      <p className="font-display text-2xl font-bold text-brand-teal">
                        {formatPrice(itemDisplay, currency)}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <button
              onClick={clearCart}
              className="mt-6 text-white/30 hover:text-red-400 text-xs uppercase tracking-widest transition-colors font-body"
            >
              Clear cart
            </button>
          </div>

          {/* Summary */}
          <div className="border border-white/10 bg-brand-navy/50">
            <div className="p-7 border-b border-white/10">
              <h2 className="font-display text-2xl font-bold">Order Summary</h2>
            </div>

            <div className="p-7 space-y-3 border-b border-white/10">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-brand-gray truncate pr-3 font-body">
                    {item.name} <span className="text-white/30">×{item.quantity}</span>
                  </span>
                  <span className="shrink-0 font-semibold font-body">
                    {formatPrice(
                      currency === "NGN" ? item.price * item.quantity * 1600 : item.price * item.quantity,
                      currency
                    )}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-7 border-b border-white/10">
              <div className="flex justify-between items-center">
                <span className="font-body text-sm text-brand-gray uppercase tracking-widest">Total</span>
                <span className="font-display text-3xl font-bold text-brand-teal">
                  {formatPrice(displayTotal, currency)}
                </span>
              </div>
            </div>

            <div className="p-7 flex flex-col gap-3">
              <Link
                href="/checkout"
                className="w-full bg-brand-teal text-white font-bold py-3.5 text-center text-xs uppercase tracking-widest hover:bg-brand-teal-light transition-colors font-body flex items-center justify-center gap-2"
              >
                Proceed to Checkout <ArrowRight size={14} />
              </Link>
              <Link
                href="/shop"
                className="w-full border border-white/15 text-white/60 font-bold py-3.5 text-center text-xs uppercase tracking-widest hover:border-white/30 hover:text-white transition-colors font-body"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
