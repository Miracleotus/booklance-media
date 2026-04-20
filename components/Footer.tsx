import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 px-8 border-t border-white/10 mt-12 bg-brand-navy/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm text-brand-gray">
          &copy; {new Date().getFullYear()} Booklance Media
        </div>
        <div className="space-x-6 mt-4 md:mt-0 flex items-center">
          <Link href="/privacy-policy" className="text-sm text-brand-gray hover:text-brand-teal transition-colors">Privacy</Link>
          <Link href="/terms-and-conditions" className="text-sm text-brand-gray hover:text-brand-teal transition-colors">Terms</Link>
          <Link href="/refund-policy" className="text-sm text-brand-gray hover:text-brand-teal transition-colors">Refund Policy</Link>
          <Link href="/shipping-delivery" className="text-sm text-brand-gray hover:text-brand-teal transition-colors">Shipping</Link>
          <Link href="/contact" className="text-sm text-brand-gray hover:text-brand-teal transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}