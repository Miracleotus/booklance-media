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
    <nav className="fixed top-0 w-full z-50 bg-brand-dark/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center">
            <Image 
              src="/logo-gt.png"
              alt="Gluetrain Logo"
              width={180} 
              height={60}
              priority
              unoptimized
              className="group-hover:opacity-80 transition-opacity"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-brand-gray hover:text-brand-teal transition-colors font-body text-sm tracking-widest uppercase"
            >
              {l.label}
            </Link>
          ))}

          <Link
            href="/cart"
            className="relative text-brand-gray hover:text-brand-teal transition-colors flex items-center gap-2 font-body text-sm tracking-widest uppercase"
          >
            <ShoppingCart size={18} />
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-brand-teal text-brand-dark text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </Link>

          {/* Currency switcher */}
          <div className="flex items-center gap-1 bg-brand-navy/60 border border-white/10 rounded-full px-1 py-1">
            {(["USD", "NGN"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-3 py-1 rounded-full text-xs font-bold tracking-widest transition-all ${
                  currency === c
                    ? "bg-brand-teal text-brand-dark"
                    : "text-brand-gray hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <Link
            href="/contact"
            className="bg-brand-teal text-brand-dark px-6 py-2.5 text-sm font-bold tracking-widest uppercase hover:bg-brand-teal-light transition-colors rounded-full"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-6">
          <Link
            href="/cart"
            className="relative text-brand-gray hover:text-brand-teal transition-colors"
            aria-label="Cart"
          >
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-brand-teal text-brand-dark text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="text-brand-gray"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-brand-dark border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-brand-gray hover:text-brand-teal transition-colors uppercase tracking-widest text-sm"
                >
                  {l.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                <span className="text-brand-gray text-xs uppercase tracking-widest">Currency:</span>
                {(["USD", "NGN"] as const).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={`px-3 py-1 rounded-full text-xs font-bold tracking-widest transition-all ${
                      currency === c
                        ? "bg-brand-teal text-brand-dark"
                        : "text-brand-gray hover:text-white"
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