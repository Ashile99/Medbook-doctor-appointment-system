'use client';

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TestimonialsPage() {
  const reviews = [
    { text: "MedBook completely changed how I manage my health. Booking a specialist used to take weeks, now it takes minutes.", author: "Emily R.", role: "Patient" },
    { text: "As a clinic owner, the pre-booking fee feature reduced our no-show rate by 80%. It's an indispensable tool for us.", author: "Dr. Marcus T.", role: "Orthopedic Surgeon" },
    { text: "The interface is beautiful and so easy to use. Having all my medical history in one secure place gives me peace of mind.", author: "Sarah L.", role: "Patient" },
    { text: "I found the best pediatrician for my newborn through MedBook. The verified reviews really helped me make a confident choice.", author: "Jessica W.", role: "Patient" },
    { text: "Telehealth integration is seamless. I can do follow-ups without my patients having to travel across the city.", author: "Dr. Amanda C.", role: "General Physician" },
    { text: "Transparent pricing and easy to read doctor profiles. I finally feel in control of my healthcare decisions.", author: "Michael B.", role: "Patient" }
  ];

  return (
    <div className="min-h-[100dvh] bg-transparent pt-24 pb-24 font-sans overflow-hidden relative">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#F8FAFC]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#007A83]/15 via-white/40 to-[#102A43]/10 backdrop-blur-[3px]" />
      </div>

      <main className="px-6 relative z-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#102A43] leading-tight mb-6">
            Patient & Doctor <span className="text-primary">Stories</span>
          </h1>
          <p className="text-[#627D98] text-[15px] md:text-xl max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the thousands of people who use MedBook every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((test, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 shadow-sm border border-white/60 relative hover:shadow-md transition-all"
            >
              <Star className="w-8 h-8 text-primary/10 absolute top-6 right-6" />
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-[#102A43] font-medium leading-relaxed mb-8 italic text-lg">"{test.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                  {test.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#102A43] text-sm md:text-base">{test.author}</h4>
                  <p className="text-xs md:text-sm text-[#627D98]">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
