import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const policyLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/refund", label: "Refund Policy" },
  { href: "/shipping", label: "Shipping & Delivery" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy border-t-2 border-brand-teal/25">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14">

          {/* Brand column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-[3px] h-7 bg-brand-teal rounded-full" />
              <span className="font-display text-2xl font-bold text-white tracking-tight">Gluetrain</span>
            </div>
            <p className="text-brand-gray text-sm leading-relaxed max-w-xs font-body">
              Your premium digital library. Expertly curated ebooks across business, technology, fiction, and self-improvement. DRM-free. Instant access.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-teal" />
              <span className="text-brand-gray text-xs uppercase tracking-widest font-body">ops@gluetrain.com</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-white text-[11px] font-bold uppercase tracking-widest mb-5 font-body border-b border-white/10 pb-3">
              Navigate
            </h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-brand-gray hover:text-brand-teal transition-colors text-sm font-body"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Policies */}
          <div className="md:col-span-4">
            <h4 className="text-white text-[11px] font-bold uppercase tracking-widest mb-5 font-body border-b border-white/10 pb-3">
              Legal
            </h4>
            <div className="flex flex-col gap-3">
              {policyLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-brand-gray hover:text-brand-teal transition-colors text-sm font-body"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-brand-gray/70 text-xs font-body">
            &copy; {new Date().getFullYear()} Gluetrain. All rights reserved.
          </p>
          <p className="text-brand-gray/40 text-xs font-body uppercase tracking-widest">
            Premium Digital Library · DRM-Free Ebooks
          </p>
        </div>
      </div>
    </footer>
  );
}
