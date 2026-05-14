"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-brand-dark text-white font-body py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-brand-gray text-lg max-w-2xl mx-auto leading-relaxed">
            Have a question about an order, need technical support, or want to explore partnership opportunities? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <h2 className="font-display text-3xl font-bold mb-6">Contact Information</h2>
            
            <div className="flex items-start gap-4">
              <div className="text-brand-teal mt-1">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Our Office</h3>
                <p className="text-brand-gray leading-relaxed">
                  Gluetrain Headquarters<br />
                  4 Lisabi Lane (Grammar School Area)<br />
                  Ayomikun Idi-Aba<br />
                  Abeokuta, Ogun State
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-brand-teal mt-1">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Call Us</h3>
                <p className="text-brand-gray leading-relaxed">
                  <a href="tel:08065352832" className="text-brand-teal hover:text-brand-teal-light transition-colors">
                    08065352832
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-brand-teal mt-1">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Email Us</h3>
                <p className="text-brand-gray leading-relaxed">
                  For general inquiries and support:<br />
                  <a href="mailto:ops@gluetrain.com" className="text-brand-teal hover:text-brand-teal-light transition-colors">
                    ops@gluetrain.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl"
          >
            <h2 className="font-display text-2xl font-bold mb-6">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-brand-gray">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-teal transition-colors"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-brand-gray">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-teal transition-colors"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-brand-gray">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-teal transition-colors"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-teal text-brand-dark font-bold tracking-widest uppercase text-sm py-4 rounded-lg hover:bg-brand-teal-light transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
