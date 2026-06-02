"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCurrency } from "@/context/CurrencyContext";
import { useCart } from "@/context/CartContext";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();
  const { totalItems } = useCart();

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-dark/98 backdrop-blur-sm border-b border-white/8">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-[3px] h-7 bg-brand-teal group-hover:h-9 transition-all duration-300 rounded-full" />
          <Image
            src="/logo-gt.png"
            alt="Gluetrain"
            width={148}
            height={48}
            priority
            unoptimized
            className="group-hover:opacity-70 transition-opacity"
          />
        </Link>

        {/* Desktop: center nav */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-sm text-brand-gray hover:text-white transition-colors relative group py-1"
            >
              {l.label}
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-brand-teal group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Desktop: right actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Currency toggle */}
          <div className="flex border border-white/12 overflow-hidden">
            {(["USD", "NGN"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-3 py-1.5 text-[11px] font-bold tracking-widest transition-all font-body ${
                  currency === c
                    ? "bg-brand-teal text-white"
                    : "text-brand-gray hover:text-white hover:bg-white/5"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative flex items-center gap-1.5 text-brand-gray hover:text-white transition-colors px-2 py-1.5 text-sm font-body"
          >
            <ShoppingCart size={17} />
            <span>Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-1 left-5 bg-brand-teal text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </Link>

          {/* CTA */}
          <Link
            href="/contact"
            className="border border-brand-teal text-brand-teal px-4 py-2 text-[11px] font-bold tracking-widest uppercase hover:bg-brand-teal hover:text-white transition-all font-body"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile icons */}
        <div className="md:hidden flex items-center gap-4">
          <Link href="/cart" className="relative text-brand-gray hover:text-white transition-colors">
            <ShoppingCart size={21} />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-brand-teal text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="text-brand-gray hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="md:hidden border-t border-white/8 overflow-hidden bg-brand-navy"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-brand-gray hover:text-white transition-colors font-body text-sm"
                >
                  {l.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                <span className="text-brand-gray text-xs uppercase tracking-widest mr-1 font-body">Currency</span>
                {(["USD", "NGN"] as const).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={`px-3 py-1 text-[11px] font-bold tracking-widest transition-all border font-body ${
                      currency === c
                        ? "bg-brand-teal border-brand-teal text-white"
                        : "border-white/20 text-brand-gray hover:text-white"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
