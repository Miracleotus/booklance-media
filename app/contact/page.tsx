export default function ShippingDeliveryPage() {
  return (
    <main className="bg-brand-dark text-white font-body py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">Shipping / Delivery Policy</h1>
        <div className="space-y-12 text-brand-gray text-lg leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-bold text-white mb-4">1. Instant Digital Delivery</h2>
            <p>Booklance Media is a 100% digital platform. We do not sell physical books, and therefore, no physical shipping is required.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-white mb-4">2. How to Access Your Purchase</h2>
            <p>Immediately upon completing your secure checkout, you will be redirected to a download page where you can access your ebook files (typically in EPUB or PDF format). You will also receive an automated email containing a secure download link for your records.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-white mb-4">3. Download Limits</h2>
            <p>To protect our authors' intellectual property, download links may be limited to a specific number of attempts or expire after a certain period (e.g., 30 days). We highly recommend saving the downloaded file securely to your personal device or e-reader immediately after purchase.</p>
          </section>
        </div>
      </div>
    </main>
  );
}