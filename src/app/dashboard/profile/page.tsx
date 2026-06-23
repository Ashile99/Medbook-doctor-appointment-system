'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { User, Mail, Phone, MapPin, Activity, Calendar, Shield, Settings, Edit3 } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function Profile() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Simple auth guard for the profile page
    if (localStorage.getItem('isLoggedIn') !== 'true') {
      router.push('/login');
    }
  }, [router]);

  if (!isMounted) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-[100dvh] bg-bg-main py-10 px-4 md:px-8 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#102A43]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#102A43] mb-2">My Profile</h1>
          <p className="text-text-muted">Manage your personal information and preferences.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: User Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-white/60 backdrop-blur-2xl rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 text-center relative overflow-hidden group">
              <div className="absolute top-4 right-4 cursor-pointer p-2 bg-white/50 hover:bg-white rounded-full transition-all text-text-muted hover:text-primary z-10">
                <Edit3 className="w-5 h-5" />
              </div>
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-[#007A83] rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
                <img 
                  src="https://ui-avatars.com/api/?name=John+Doe&background=E2E8F0&color=102A43&size=256" 
                  alt="Profile" 
                  className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <h2 className="text-2xl font-bold text-[#102A43] mb-1">John Doe</h2>
              <p className="text-primary font-medium mb-6">Premium Member</p>
              
              <div className="space-y-4 text-left border-t border-border-color/30 pt-6">
                <div className="flex items-center gap-3 text-text-muted">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">john.doe@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-text-muted">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-text-muted">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">New York, USA</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Details & Settings */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="lg:col-span-2 space-y-6"
          >
            {/* Health Overview */}
            <motion.div variants={itemVariants} className="bg-white/60 backdrop-blur-2xl rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-[#102A43] flex items-center gap-2">
                  <Activity className="w-6 h-6 text-primary" />
                  Health Overview
                </h3>
                <button className="text-sm text-primary font-bold hover:underline">Update</button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Blood Type", value: "O+" },
                  { label: "Height", value: "180 cm" },
                  { label: "Weight", value: "75 kg" },
                  { label: "Allergies", value: "None" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/50 p-4 rounded-2xl border border-border-color/20 flex flex-col items-center justify-center text-center">
                    <span className="text-xs text-text-muted font-bold uppercase tracking-wider mb-1">{stat.label}</span>
                    <span className="text-lg font-bold text-[#102A43]">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Upcoming Appointments */}
            <motion.div variants={itemVariants} className="bg-white/60 backdrop-blur-2xl rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-[#102A43] flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-primary" />
                  Upcoming Appointments
                </h3>
                <button className="text-sm text-primary font-bold hover:underline">View All</button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/50 rounded-2xl border border-border-color/20 hover:shadow-md transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold">
                      15<br/><span className="text-[10px]">MAY</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#102A43]">Dr. Sarah Chen</h4>
                      <p className="text-xs text-text-muted">Dermatology Consultation • 10:00 AM</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Confirmed</span>
                </div>
              </div>
            </motion.div>

            {/* Account Settings */}
            <motion.div variants={itemVariants} className="bg-white/60 backdrop-blur-2xl rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50">
              <h3 className="text-xl font-bold text-[#102A43] flex items-center gap-2 mb-6">
                <Settings className="w-6 h-6 text-primary" />
                Settings & Preferences
              </h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 bg-white/40 hover:bg-white/60 rounded-2xl border border-border-color/20 transition-all text-left">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-text-muted" />
                    <span className="font-medium text-[#102A43]">Privacy & Security</span>
                  </div>
                  <span className="text-text-muted text-sm">&rarr;</span>
                </button>
                <button className="w-full flex items-center justify-between p-4 bg-white/40 hover:bg-white/60 rounded-2xl border border-border-color/20 transition-all text-left">
                  <div className="flex items-center gap-3">
                    <Settings className="w-5 h-5 text-text-muted" />
                    <span className="font-medium text-[#102A43]">Account Preferences</span>
                  </div>
                  <span className="text-text-muted text-sm">&rarr;</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
