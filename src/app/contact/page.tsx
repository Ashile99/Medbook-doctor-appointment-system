'use client';

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-[100dvh] bg-transparent pt-24 pb-24 font-sans overflow-hidden relative">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#F8FAFC]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#007A83]/15 via-white/40 to-[#102A43]/10 backdrop-blur-[3px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-primary/20 blur-[80px] md:blur-[120px] rounded-full mix-blend-multiply" />
      </div>

      <main className="px-6 relative z-10 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#102A43] leading-tight mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-[#627D98] text-[15px] md:text-xl max-w-2xl mx-auto">
            Have questions about MedBook? Our team is here to help you navigate your healthcare journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-sm border border-white/50 flex items-start gap-4 hover:bg-white/60 transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-[#102A43] text-lg mb-1">Email Us</h3>
                <p className="text-[#627D98] text-sm mb-2">Our friendly team is here to help.</p>
                <a href="mailto:support@medbook.com" className="text-primary font-medium hover:underline">support@medbook.com</a>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-sm border border-white/50 flex items-start gap-4 hover:bg-white/60 transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-[#102A43] text-lg mb-1">Visit Us</h3>
                <p className="text-[#627D98] text-sm mb-2">Come say hello at our office HQ.</p>
                <p className="text-[#102A43] font-medium">123 Health Ave, Medical District<br/>New York, NY 10001</p>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-sm border border-white/50 flex items-start gap-4 hover:bg-white/60 transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-[#102A43] text-lg mb-1">Call Us</h3>
                <p className="text-[#627D98] text-sm mb-2">Mon-Fri from 8am to 5pm.</p>
                <a href="tel:+15551234567" className="text-primary font-medium hover:underline">+1 (555) 123-4567</a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3 bg-white/60 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/60"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#102A43] mb-8">Send us a message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#102A43] mb-2">First Name</label>
                  <input type="text" className="w-full px-5 py-3.5 bg-white/50 backdrop-blur-sm rounded-xl border border-border-color/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-[#102A43]" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#102A43] mb-2">Last Name</label>
                  <input type="text" className="w-full px-5 py-3.5 bg-white/50 backdrop-blur-sm rounded-xl border border-border-color/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-[#102A43]" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#102A43] mb-2">Email</label>
                <input type="email" className="w-full px-5 py-3.5 bg-white/50 backdrop-blur-sm rounded-xl border border-border-color/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-[#102A43]" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#102A43] mb-2">Message</label>
                <textarea rows={4} className="w-full px-5 py-3.5 bg-white/50 backdrop-blur-sm rounded-xl border border-border-color/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-[#102A43]" placeholder="How can we help?"></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-[#007A83] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 transition-all mt-4">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
