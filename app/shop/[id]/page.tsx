"use client";

import { useParams } from "next/navigation";
import { products } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Code, Zap, Shield, Wrench, CheckCircle, Palette, Check } from "lucide-react";
import { useState } from "react";

const categoryIcons: Record<string, React.ReactNode> = {
  "Web Development": <Code size={48} />,
  "Software Solutions": <Zap size={48} />,
  "Maintenance": <Wrench size={48} />,
  "Consulting": <CheckCircle size={48} />,
  "Design": <Palette size={48} />,
  "Security": <Shield size={48} />,
};

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = products.find(p => p.id === productId);
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-white/60 mb-8">The service you're looking for doesn't exist.</p>
          <Link
            href="/shop"
            className="bg-brand-teal text-brand-dark px-6 py-3 font-semibold rounded-full hover:bg-brand-teal-light transition"
          >
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <main className="bg-brand-dark text-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-white/60 hover:text-brand-teal mb-12 transition"
        >
          <ArrowLeft size={16} />
          Back to Services
        </Link>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Service Icon/Visual */}
          <div className="flex items-center justify-center">
            <div className="w-full aspect-square bg-linear-to-br from-brand-teal/20 via-white/5 to-transparent rounded-3xl flex items-center justify-center border border-brand-teal/30">
              <div className="text-brand-teal opacity-80">
                {categoryIcons[product.category] || <Code size={48} />}
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div className="space-y-8">
            <div>
              <span className="text-xs text-brand-teal uppercase tracking-widest font-semibold block mb-2">{product.category}</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">{product.name}</h1>
              <p className="text-brand-gray text-lg">{product.shortDesc}</p>
            </div>

            <div className="bg-brand-navy/50 border border-brand-teal/30 p-6 rounded-2xl">
              <p className="text-white/60 text-sm mb-2">Pricing</p>
              <div className="text-5xl font-bold text-brand-teal">
                {formatPrice(product.price)}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold">What's Included</h2>
              <p className="text-white/80 leading-relaxed text-lg">{product.fullDesc}</p>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-sm text-white/50 mb-4">
                <span className="font-semibold">Service ID:</span> {product.sku}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-4 font-bold rounded-full transition flex items-center justify-center gap-2 tracking-widest uppercase ${
                    addedToCart
                      ? "bg-emerald-500/20 text-emerald-300"
                      : "bg-brand-teal text-brand-dark hover:bg-brand-teal-light"
                  }`}
                >
                  {addedToCart ? (
                    <>
                      <Check size={20} />
                      Added!
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={20} />
                      Add to Cart
                    </>
                  )}
                </button>
                <Link
                  href="/contact"
                  className="flex-1 border border-brand-teal text-brand-teal font-bold py-4 rounded-full hover:bg-brand-teal/10 transition flex items-center justify-center gap-2 tracking-widest uppercase"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}