"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { CheckCircle, ShoppingBag, Lock, CreditCard } from "lucide-react";

type Field = "name" | "email" | "phone" | "address" | "cardName" | "cardNumber" | "expiry" | "cvv";

function formatCardNumber(value: string) {
  return value.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
}

function formatExpiry(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length >= 3) return digits.slice(0, 2) + "/" + digits.slice(2);
  return digits;
}

export default function CheckoutPage() {
  const { cart, clearCart, totalPrice } = useCart();
  const { currency } = useCurrency();
  const [form, setForm] = useState({
    name: "", email: "", phone: "", address: "",
    cardName: "", cardNumber: "", expiry: "", cvv: "",
  });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [placed, setPlaced] = useState(false);
  const [loading, setLoading] = useState(false);

  const displayTotal = currency === "NGN" ? totalPrice * 1600 : totalPrice;

  if (cart.length === 0 && !placed) {
    return (
      <main className="bg-brand-dark text-white min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <ShoppingBag size={48} className="text-brand-teal mx-auto mb-4" />
          <h1 className="font-display text-3xl font-bold mb-4">Your cart is empty</h1>
          <Link
            href="/shop"
            className="bg-brand-teal text-brand-dark font-bold px-8 py-3 rounded-full hover:bg-brand-teal-light transition uppercase tracking-widest inline-block mt-2"
          >
            Browse the Library
          </Link>
        </div>
      </main>
    );
  }

  if (placed) {
    return (
      <main className="bg-brand-dark text-white min-h-screen flex items-center justify-center px-6">
        <div className="max-w-lg w-full text-center">
          <div className="w-24 h-24 bg-brand-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={48} className="text-brand-teal" />
          </div>
          <h1 className="font-display text-4xl font-bold mb-4">Order Confirmed!</h1>
          <p className="text-brand-gray text-lg mb-3">
            Thank you, <span className="text-white font-semibold">{form.name}</span>. Your order has been received.
          </p>
          <p className="text-brand-gray mb-8">
            A confirmation will be sent to <span className="text-white">{form.email}</span>. Your digital books will be delivered within 24 hours.
          </p>
          <Link
            href="/shop"
            className="bg-brand-teal text-brand-dark font-bold px-8 py-4 rounded-full hover:bg-brand-teal-light transition uppercase tracking-widest inline-block"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  const validate = () => {
    const e: Partial<Record<Field, string>> = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim()) e.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.address.trim()) e.address = "Billing address is required.";
    if (!form.cardName.trim()) e.cardName = "Cardholder name is required.";
    const rawCard = form.cardNumber.replace(/\s/g, "");
    if (!rawCard) e.cardNumber = "Card number is required.";
    else if (rawCard.length < 16) e.cardNumber = "Enter a valid 16-digit card number.";
    if (!form.expiry) e.expiry = "Expiry date is required.";
    else if (!/^\d{2}\/\d{2}$/.test(form.expiry)) e.expiry = "Enter expiry as MM/YY.";
    if (!form.cvv) e.cvv = "CVV is required.";
    else if (!/^\d{3,4}$/.test(form.cvv)) e.cvv = "Enter a valid 3–4 digit CVV.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => {
      clearCart();
      setPlaced(true);
      setLoading(false);
    }, 1400);
  };

  const handleChange = (field: Field, value: string) => {
    let formatted = value;
    if (field === "cardNumber") formatted = formatCardNumber(value);
    if (field === "expiry") formatted = formatExpiry(value);
    if (field === "cvv") formatted = value.replace(/\D/g, "").slice(0, 4);
    setForm((f) => ({ ...f, [field]: formatted }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const inputClass = (field: Field) =>
    `w-full bg-brand-dark border rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-brand-teal transition ${errors[field] ? "border-red-400" : "border-white/10"}`;

  return (
    <main className="bg-brand-dark text-white min-h-screen py-32 font-body">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="font-display text-5xl font-bold mb-2">Checkout</h1>
        <p className="text-brand-gray mb-12">Complete your order below.</p>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-5 gap-10">
          {/* Left — Customer & Payment Details */}
          <div className="lg:col-span-3 space-y-6">

            {/* Customer Details */}
            <div className="bg-brand-navy/40 border border-white/10 rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold mb-6">Your Details</h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm text-white/70 mb-1.5 uppercase tracking-widest">Full Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Jane Doe"
                    className={inputClass("name")}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm text-white/70 mb-1.5 uppercase tracking-widest">Email Address *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="jane@example.com"
                    className={inputClass("email")}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm text-white/70 mb-1.5 uppercase tracking-widest">Phone (optional)</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+1 555 000 0000"
                    className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-brand-teal transition"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/70 mb-1.5 uppercase tracking-widest">Billing Address *</label>
                  <textarea
                    value={form.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    placeholder="123 Main Street, City, Country"
                    rows={3}
                    className={`${inputClass("address")} resize-none`}
                  />
                  {errors.address && <p className="text-red-400 text-xs mt-1">{errors.address}</p>}
                </div>
              </div>
            </div>

            {/* Payment / Card Details */}
            <div className="bg-brand-navy/40 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-2xl font-bold">Payment</h2>
                <div className="flex items-center gap-1.5 text-xs text-white/40">
                  <Lock size={12} />
                  <span>SSL Secured</span>
                </div>
              </div>

              <div className="space-y-5">
                {/* Cardholder Name */}
                <div>
                  <label className="block text-sm text-white/70 mb-1.5 uppercase tracking-widest">Cardholder Name *</label>
                  <input
                    type="text"
                    value={form.cardName}
                    onChange={(e) => handleChange("cardName", e.target.value)}
                    placeholder="Jane Doe"
                    className={inputClass("cardName")}
                    autoComplete="cc-name"
                  />
                  {errors.cardName && <p className="text-red-400 text-xs mt-1">{errors.cardName}</p>}
                </div>

                {/* Card Number */}
                <div>
                  <label className="block text-sm text-white/70 mb-1.5 uppercase tracking-widest">Card Number *</label>
                  <div className="relative">
                    <input
                      type="text"
                      inputMode="numeric"
                      value={form.cardNumber}
                      onChange={(e) => handleChange("cardNumber", e.target.value)}
                      placeholder="1234 5678 9012 3456"
                      className={`${inputClass("cardNumber")} pr-12`}
                      autoComplete="cc-number"
                    />
                    <CreditCard size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" />
                  </div>
                  {errors.cardNumber && <p className="text-red-400 text-xs mt-1">{errors.cardNumber}</p>}
                </div>

                {/* Expiry & CVV */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/70 mb-1.5 uppercase tracking-widest">Expiry *</label>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={form.expiry}
                      onChange={(e) => handleChange("expiry", e.target.value)}
                      placeholder="MM/YY"
                      className={inputClass("expiry")}
                      autoComplete="cc-exp"
                    />
                    {errors.expiry && <p className="text-red-400 text-xs mt-1">{errors.expiry}</p>}
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-1.5 uppercase tracking-widest">CVV *</label>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={form.cvv}
                      onChange={(e) => handleChange("cvv", e.target.value)}
                      placeholder="123"
                      className={inputClass("cvv")}
                      autoComplete="cc-csc"
                    />
                    {errors.cvv && <p className="text-red-400 text-xs mt-1">{errors.cvv}</p>}
                  </div>
                </div>
              </div>

              {/* Accepted cards */}
              <div className="mt-6 flex items-center gap-2">
                {["VISA", "MC", "AMEX"].map((c) => (
                  <span key={c} className="text-[10px] font-bold border border-white/15 rounded px-2 py-0.5 text-white/40 tracking-widest">
                    {c}
                  </span>
                ))}
                <span className="text-xs text-white/30 ml-1">accepted</span>
              </div>
            </div>
          </div>

          {/* Right — Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-brand-navy/50 border border-white/10 rounded-2xl p-8 sticky top-24">
              <h2 className="font-display text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-white/70 truncate pr-3">
                      {item.name}
                      <span className="text-white/40 ml-1">×{item.quantity}</span>
                    </span>
                    <span className="shrink-0 font-semibold">
                      {formatPrice(
                        currency === "NGN" ? item.price * item.quantity * 1600 : item.price * item.quantity,
                        currency
                      )}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-4 mb-8">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-brand-teal text-2xl">{formatPrice(displayTotal, currency)}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-teal text-brand-dark font-bold py-4 rounded-full hover:bg-brand-teal-light transition uppercase tracking-widest disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-brand-dark/30 border-t-brand-dark rounded-full animate-spin" />
                    Processing…
                  </>
                ) : (
                  <>
                    <Lock size={14} />
                    Pay {formatPrice(displayTotal, currency)}
                  </>
                )}
              </button>

              <Link
                href="/cart"
                className="block text-center text-sm text-white/50 hover:text-white mt-4 transition"
              >
                ← Back to Cart
              </Link>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
