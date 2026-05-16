"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { useCurrency } from "@/context/CurrencyContext";
import Link from "next/link";
import { Trash2, ShoppingBag, Plus, Minus } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, addToCart } = useCart();
  const { currency } = useCurrency();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const displayTotal = currency === "NGN" ? total * 1600 : total;

  if (cart.length === 0) {
    return (
      <main className="bg-brand-dark text-white min-h-screen flex items-center justify-center px-6">
        <div className="max-w-2xl w-full text-center">
          <div className="w-24 h-24 bg-brand-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={40} className="text-brand-teal" />
          </div>
          <h1 className="font-display text-4xl font-bold mb-4">Your Cart</h1>
          <p className="text-brand-gray text-lg mb-10">
            You haven&apos;t added any books yet. Browse our library to get started.
          </p>
          <Link
            href="/shop"
            className="bg-brand-teal text-brand-dark font-bold px-8 py-4 rounded-full hover:bg-brand-teal-light transition uppercase tracking-widest"
          >
            Browse the Library
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-brand-dark text-white min-h-screen py-32 font-body">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-display text-5xl font-bold mb-12">Your Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cart.map((item) => {
                const itemDisplay = currency === "NGN"
                  ? item.price * item.quantity * 1600
                  : item.price * item.quantity;

                return (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between border border-white/10 rounded-2xl p-6 bg-white/2 hover:bg-white/5 transition"
                  >
                    <div className="flex-1 mb-4 sm:mb-0">
                      <span className="text-xs text-brand-teal uppercase tracking-widest font-semibold block mb-1">
                        {item.category}
                      </span>
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <p className="text-white/50 text-sm mt-1">SKU: {item.sku}</p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                      {/* Quantity controls */}
                      <div className="flex items-center gap-2 bg-brand-navy/60 border border-white/10 rounded-full px-2 py-1">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 text-white/60 hover:text-red-400 transition"
                          aria-label="Decrease quantity"
                        >
                          {item.quantity === 1 ? <Trash2 size={14} /> : <Minus size={14} />}
                        </button>
                        <span className="w-6 text-center font-bold text-sm">{item.quantity}</span>
                        <button
                          onClick={() => addToCart(item)}
                          className="p-1 text-white/60 hover:text-brand-teal transition"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <div className="text-right min-w-[90px]">
                        <p className="text-xl font-bold text-brand-teal">
                          {formatPrice(itemDisplay, currency)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-brand-navy/50 border border-white/10 rounded-2xl p-8 h-fit sticky top-24">
            <h2 className="font-display text-2xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm text-white/60">
                  <span className="truncate pr-2">{item.name} ×{item.quantity}</span>
                  <span className="shrink-0">
                    {formatPrice(
                      currency === "NGN" ? item.price * item.quantity * 1600 : item.price * item.quantity,
                      currency
                    )}
                  </span>
                </div>
              ))}
              <div className="border-t border-white/10 pt-4 flex items-center justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-brand-teal text-2xl">{formatPrice(displayTotal, currency)}</span>
              </div>
            </div>

            <div className="space-y-3">
              <Link
                href="/checkout"
                className="w-full bg-brand-teal text-brand-dark font-bold py-3 rounded-full hover:bg-brand-teal-light transition uppercase tracking-widest text-center block"
              >
                Proceed to Checkout
              </Link>
              <Link
                href="/shop"
                className="w-full border border-brand-teal text-brand-teal font-bold py-3 rounded-full hover:bg-brand-teal/10 transition uppercase tracking-widest text-center block"
              >
                Continue Shopping
              </Link>
            </div>

            <button
              onClick={clearCart}
              className="w-full text-white/60 hover:text-red-400 text-sm py-3 mt-4 transition"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
