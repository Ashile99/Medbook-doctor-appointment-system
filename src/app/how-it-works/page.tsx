'use client';

import { motion } from "framer-motion";
import { Search, UserCheck, CalendarCheck, Video, CreditCard, Star, Activity, Stethoscope } from "lucide-react";

export default function HowItWorksPage() {
  const steps = [
    { title: "Search & Filter", desc: "Find specialists near you based on symptoms, availability, or ratings.", icon: Search },
    { title: "Review Profiles", desc: "Check doctor credentials, experience, and verified patient reviews.", icon: UserCheck },
    { title: "Select Time", desc: "Pick an available time slot that fits your schedule perfectly.", icon: CalendarCheck },
    { title: "Pre-Booking Fee", desc: "Secure your appointment with a small fee to guarantee your spot.", icon: CreditCard },
    { title: "Consultation", desc: "Visit the clinic or join a secure telehealth video call.", icon: Video },
    { title: "Prescription", desc: "Receive digital prescriptions directly in your patient dashboard.", icon: Stethoscope },
    { title: "Follow-up", desc: "Track your health progress and schedule follow-ups easily.", icon: Activity },
    { title: "Leave a Review", desc: "Share your experience to help other patients make informed decisions.", icon: Star }
  ];

  return (
    <div className="min-h-[100dvh] bg-transparent pt-24 pb-24 font-sans overflow-hidden relative">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#F8FAFC]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#007A83]/15 via-white/40 to-[#102A43]/10 backdrop-blur-[3px]" />
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-primary/20 blur-[80px] md:blur-[120px] rounded-full mix-blend-multiply" />
      </div>

      <main className="px-6 relative z-10 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="text-primary font-bold tracking-wider text-sm mb-4 block uppercase">The Process</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#102A43] leading-tight mb-6">
            How MedBook Works
          </h1>
          <p className="text-[#627D98] text-[15px] md:text-xl max-w-2xl mx-auto">
            From feeling unwell to getting the right treatment, we've streamlined every step of your healthcare journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white/40 backdrop-blur-xl rounded-[2rem] p-8 shadow-sm border border-white/50 hover:bg-white/60 hover:-translate-y-2 transition-all relative group"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-white shadow-md rounded-2xl flex items-center justify-center font-black text-xl text-[#102A43] border border-white/80 z-20">
                {i + 1}
              </div>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-[#102A43] mb-3">{step.title}</h3>
              <p className="text-[#627D98] text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
