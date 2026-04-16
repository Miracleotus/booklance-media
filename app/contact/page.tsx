"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    projectType: "web-development",
    budget: "10k-25k",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        company: "",
        email: "",
        projectType: "web-development",
        budget: "10k-25k",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main className="bg-brand-dark text-white font-body">
      
      {/* HERO */}
      <section className="pt-40 pb-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
            Let's Talk About Your Next Project
          </h1>
          <p className="text-brand-gray text-lg leading-relaxed">
            Whether you have a fully drafted technical specification or just a rough idea on a napkin, the team at Zenvira is ready to help you take the next step. Reach out to us to schedule a discovery call, request a quote, or simply ask a technical question.
          </p>
        </motion.div>
      </section>

      {/* CONTACT INFO */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-8 mb-24">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 bg-brand-teal/20 rounded-lg flex items-center justify-center mb-4">
            <Mail className="text-brand-teal" size={32} />
          </div>
          <h3 className="font-display text-xl font-bold mb-2">Email</h3>
          <a href="mailto:hello@zenvira.com" className="text-brand-gray hover:text-brand-teal transition-colors">
            hello@zenvira.com
          </a>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 bg-brand-teal/20 rounded-lg flex items-center justify-center mb-4">
            <Phone className="text-brand-teal" size={32} />
          </div>
          <h3 className="font-display text-xl font-bold mb-2">Phone</h3>
          <a href="tel:1-800-9368472" className="text-brand-gray hover:text-brand-teal transition-colors">
            1-800-ZENVIRA
          </a>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 bg-brand-teal/20 rounded-lg flex items-center justify-center mb-4">
            <MapPin className="text-brand-teal" size={32} />
          </div>
          <h3 className="font-display text-xl font-bold mb-2">Location</h3>
          <p className="text-brand-gray">
            Global Remote Team<br />
            <span className="text-sm">(Available EST business hours)</span>
          </p>
        </motion.div>
      </section>

      {/* CONTACT FORM */}
      <section className="max-w-3xl mx-auto px-6 pb-32">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-display text-4xl font-bold text-center mb-12">Send Us a Message</h2>
          
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-brand-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-brand-teal">✓</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-brand-gray">We'll get back to you within 24 business hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-brand-navy/30 border border-white/10 p-8 rounded-2xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest mb-3">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-brand-gray/50 focus:outline-none focus:border-brand-teal focus:bg-white/10 transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest mb-3">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-brand-gray/50 focus:outline-none focus:border-brand-teal focus:bg-white/10 transition-all"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold uppercase tracking-widest mb-3">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-brand-gray/50 focus:outline-none focus:border-brand-teal focus:bg-white/10 transition-all"
                  placeholder="your.email@company.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest mb-3">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-teal focus:bg-white/10 transition-all"
                  >
                    <option value="web-development">Web Development</option>
                    <option value="software-engineering">Software Engineering</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="maintenance">Maintenance & Support</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest mb-3">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-teal focus:bg-white/10 transition-all"
                  >
                    <option value="5k-10k">$5k - $10k</option>
                    <option value="10k-25k">$10k - $25k</option>
                    <option value="25k-50k">$25k - $50k</option>
                    <option value="50k-100k">$50k - $100k</option>
                    <option value="100k+">$100k+</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-bold uppercase tracking-widest mb-3">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-brand-gray/50 focus:outline-none focus:border-brand-teal focus:bg-white/10 transition-all resize-none"
                  placeholder="Tell us about your project, goals, and timeline..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-teal text-brand-dark px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-brand-teal-light transition-all rounded-full"
              >
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </section>

    </main>
  );
}