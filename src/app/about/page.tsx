'use client';

import { motion } from "framer-motion";
import { HeartPulse, Target, Shield, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-[100dvh] bg-transparent pt-24 pb-24 font-sans overflow-hidden relative">
      {/* Background Overlays */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#F8FAFC]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#007A83]/15 via-white/40 to-[#102A43]/10 backdrop-blur-[3px]" />
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-primary/20 blur-[80px] md:blur-[120px] rounded-full mix-blend-multiply" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-[#102A43]/15 blur-[80px] md:blur-[120px] rounded-full mix-blend-multiply" />
      </div>

      <main className="px-6 relative z-10 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-wider text-sm mb-4 block uppercase">About MedBook</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#102A43] leading-tight mb-6">
            Healthcare built around <span className="text-primary">you.</span>
          </h1>
          <p className="text-[#627D98] text-[15px] md:text-xl max-w-3xl mx-auto">
            We started with a simple belief: finding a great doctor and booking an appointment shouldn't be the hardest part of getting healthy.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-white/40 backdrop-blur-2xl rounded-[3rem] p-8 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-[#102A43] mb-6">Our Story</h2>
              <div className="space-y-4 text-[#627D98] leading-relaxed">
                <p>
                  MedBook was founded in 2023 by a group of healthcare professionals and technologists who were frustrated with the status quo. Patients were waiting weeks to see specialists, while clinics struggled with no-shows and inefficient scheduling.
                </p>
                <p>
                  We built MedBook to bridge this gap. By introducing a transparent platform with verified reviews, real-time scheduling, and a pre-booking fee model that respects doctors' time, we've created an ecosystem where everyone wins.
                </p>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-auto md:h-full min-h-[300px] rounded-3xl overflow-hidden shadow-xl border border-white/40">
              <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" alt="Medical team" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Target, title: "Our Mission", desc: "To make quality healthcare accessible, transparent, and seamless for patients everywhere." },
            { icon: Shield, title: "Our Promise", desc: "We prioritize your privacy and data security above all else, maintaining strict HIPAA compliance." },
            { icon: Users, title: "Our Community", desc: "A growing network of thousands of trusted professionals dedicated to your well-being." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-sm border border-white/50 hover:bg-white/60 transition-all text-center"
            >
              <div className="w-16 h-16 bg-white shadow-md border border-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-[#102A43] mb-3">{item.title}</h3>
              <p className="text-[#627D98] leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
