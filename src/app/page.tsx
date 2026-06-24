'use client';

import Link from "next/link";
import { Bell, Search, MapPin, HeartPulse, Stethoscope, Brain, Pill as Tooth, Clock, ShieldCheck, CalendarCheck, Users, User, Star, ArrowRight, Video, FileText, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax effects for various sections
  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0px", "100px"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  
  const problemY = useTransform(scrollYProgress, [0.1, 0.3], ["40px", "0px"]);
  const solutionY = useTransform(scrollYProgress, [0.2, 0.4], ["40px", "0px"]);
  const featureY = useTransform(scrollYProgress, [0.3, 0.5], ["40px", "0px"]);
  const worksY = useTransform(scrollYProgress, [0.4, 0.6], ["40px", "0px"]);
  const elementsY = useTransform(scrollYProgress, [0, 1], ["0px", "-100px"]);

  // Stagger animation for categories and grids
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div ref={containerRef} className="min-h-[100dvh] bg-transparent pb-24 font-sans overflow-hidden relative">
      {/* Background Overlays */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#F8FAFC]">
        {/* Elegant Color Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#007A83]/15 via-white/40 to-[#102A43]/10 backdrop-blur-[3px]" />
        
        {/* Dynamic Light Spots */}
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-primary/20 blur-[80px] md:blur-[120px] rounded-full mix-blend-multiply" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-[#102A43]/15 blur-[80px] md:blur-[120px] rounded-full mix-blend-multiply" />
      </div>

      {/* Top Bar (Mobile Only) */}
      <header className="md:hidden flex justify-between items-center p-6 bg-white/40 backdrop-blur-xl border-b border-white/30 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2">
          <Image src={`${(process.env.NEXT_PUBLIC_BASE_PATH && process.env.NEXT_PUBLIC_BASE_PATH != "undefined") ? process.env.NEXT_PUBLIC_BASE_PATH : ""}/logo.png`} alt="MedBook Logo" width={120} height={32} className="h-6 md:h-8 object-contain" />
          <span className="text-xl font-bold text-[#102A43]">MedBook</span>
        </Link>
        <Link href="/dashboard" className="text-[#627D98] hover:text-primary transition-colors block">
          <Bell className="w-6 h-6" />
        </Link>
      </header>

      <main className="px-6 relative z-10 max-w-7xl mx-auto">
        {/* Hero Title with Parallax */}
        <motion.div 
          className="mb-10 mt-6 md:mt-16 md:text-center"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-5 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 text-[#627D98] text-xs md:text-sm font-medium tracking-wider mb-6 shadow-sm"
          >
            Connecting Patients with the Right Doctors – Anytime, Anywhere.
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#102A43] leading-tight mb-4 md:mb-6"
          >
            Book <span className="text-primary">Trusted</span> Doctors<br className="hidden md:block" /> Instantly.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-[#627D98] text-[15px] md:text-lg max-w-2xl mx-auto mb-8 md:mb-10"
          >
            Healthcare simplified, personalized for you. Access thousands of top-rated doctors, book appointments instantly, and manage your medical history securely.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/doctors" className="w-full sm:w-auto bg-primary hover:bg-[#007A83] text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-lg shadow-primary/20 text-[15px] md:text-base flex items-center justify-center gap-2">
              Find a Doctor
              <Search className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Search Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="bg-white/40 backdrop-blur-2xl rounded-3xl p-4 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-20 md:mb-28 border border-white/50 max-w-4xl mx-auto"
        >
          <div className="space-y-3 md:space-y-0 md:flex md:gap-4 mb-4 md:mb-6">
            <div className="flex-1 flex items-center gap-3 bg-white/50 backdrop-blur-md border border-white/40 p-3.5 md:p-4 rounded-2xl shadow-inner focus-within:ring-1 focus-within:ring-primary/50 transition-all">
              <Search className="w-5 h-5 text-[#9CB3C9]" />
              <input 
                type="text" 
                placeholder="Specialization, doctor name..." 
                className="bg-transparent border-none w-full text-[15px] md:text-base focus:outline-none text-[#102A43] placeholder:text-[#9CB3C9]"
              />
            </div>
            <div className="flex-1 flex items-center gap-3 bg-white/50 backdrop-blur-md border border-white/40 p-3.5 md:p-4 rounded-2xl shadow-inner focus-within:ring-1 focus-within:ring-primary/50 transition-all">
              <MapPin className="w-5 h-5 text-[#9CB3C9]" />
              <input 
                type="text" 
                placeholder="Location (City or Area)" 
                className="bg-transparent border-none w-full text-[15px] md:text-base focus:outline-none text-[#102A43] placeholder:text-[#9CB3C9]"
              />
            </div>
          </div>
          <Link href="/doctors" className="flex items-center justify-center w-full bg-primary hover:bg-[#007A83] text-white font-semibold py-4 md:py-3.5 rounded-2xl transition-all shadow-md shadow-primary/20 text-[15px] md:text-base text-center">
            Search Available Doctors
          </Link>
        </motion.div>

        {/* The Problem Section */}
        <motion.div style={{ y: problemY }} className="mb-20 md:mb-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#102A43] mb-4">Why the Current System is Broken</h2>
            <p className="text-[#627D98] md:text-lg">Patients and doctors face significant friction in healthcare today. We are here to fix it.</p>
          </div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Clock, title: "Long Wait Times", desc: "Hours wasted in clinic waiting rooms due to poor scheduling." },
              { icon: ShieldCheck, title: "Lack of Transparency", desc: "No clear visibility into doctor ratings, fees, or availability." },
              { icon: Users, title: "Doctor Visibility", desc: "Great doctors struggle to reach new patients outside their immediate network." },
              { icon: CalendarCheck, title: "No-Show Rates", desc: "High cancellation rates severely impact clinic revenue and efficiency." }
            ].map((prob, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-white/40 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 hover:bg-white/60 transition-all group">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <prob.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#102A43] mb-2">{prob.title}</h3>
                <p className="text-[#627D98] text-sm leading-relaxed">{prob.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Our Solution Section */}
        <motion.div style={{ y: solutionY }} className="mb-20 md:mb-32 relative">
          <div className="absolute inset-0 bg-primary/5 rounded-[3rem] -z-10 blur-xl" />
          <div className="bg-white/50 backdrop-blur-2xl rounded-[3rem] p-8 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/60 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1">
              <span className="text-primary font-bold tracking-wider text-sm mb-2 block uppercase">Our Solution</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#102A43] mb-6 leading-tight">Bridging the Gap in Healthcare</h2>
              <p className="text-[#627D98] md:text-lg mb-8 leading-relaxed">
                MedBook provides a unified platform where patients can effortlessly find and book the right specialists, while doctors gain powerful tools to manage their practice, reduce no-shows, and grow their reputation.
              </p>
              <ul className="space-y-4">
                {["Instant verified bookings", "Transparent patient reviews", "Secure medical records access"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#102A43] font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="inline-flex items-center gap-2 mt-10 text-primary font-bold hover:gap-3 transition-all">
                Learn more about our mission <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex-1 w-full relative">
              <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                <img src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop" alt="Modern clinic consultation" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0">
                    <HeartPulse className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">10,000+</p>
                    <p className="text-white/80 text-sm">Appointments Booked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Features Section */}
        <motion.div style={{ y: featureY }} className="mb-20 md:mb-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#102A43] mb-4">Powerful Features</h2>
            <p className="text-[#627D98] md:text-lg">Everything you need to manage healthcare, whether you're seeking care or providing it.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Patient Module", icon: User, desc: "Easy search, booking, record management, and secure online payments." },
              { title: "Telemedicine", icon: Video, desc: "Consult with top doctors virtually from the comfort of your own home." },
              { title: "Smart Scheduling", icon: CalendarCheck, desc: "Real-time availability syncing preventing double bookings and reducing wait times." },
              { title: "Verified Reviews", icon: Star, desc: "Authentic feedback system ensuring quality and building trust in the community." },
              { title: "Secure Records", icon: FileText, desc: "HIPAA-compliant encrypted storage for all your vital medical history and prescriptions." },
              { title: "Telehealth Ready", icon: Video, desc: "Integrated secure video consultations for remote care and follow-ups." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white/40 backdrop-blur-xl rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 flex flex-col gap-4"
              >
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-border-color/30 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-[#102A43]">{feature.title}</h3>
                <p className="text-[#627D98] text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How It Works Section */}
        <motion.div style={{ y: worksY }} className="mb-20 md:mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#102A43] mb-4">How It Works</h2>
            <p className="text-[#627D98] md:text-lg">A simple, transparent process from search to successful consultation.</p>
          </div>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-10" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {[
                { step: "01", title: "Search", desc: "Find doctors by specialty, location, or availability." },
                { step: "02", title: "Review", desc: "Check verified patient feedback and doctor credentials." },
                { step: "03", title: "Book", desc: "Select a time slot and pay a small pre-booking fee." },
                { step: "04", title: "Consult", desc: "Visit the clinic or join via video without the long wait." }
              ].map((step, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  key={i} 
                  className="flex flex-col items-center text-center relative"
                >
                  <div className="w-16 h-16 bg-white shadow-lg border border-primary/10 rounded-2xl flex items-center justify-center mb-6 relative group">
                    <span className="text-2xl font-extrabold text-primary">{step.step}</span>
                    <div className="absolute inset-0 bg-primary/5 rounded-2xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-xl font-bold text-[#102A43] mb-3">{step.title}</h3>
                  <p className="text-[#627D98] text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/how-it-works" className="inline-block px-6 py-3 bg-white/50 backdrop-blur-md border border-primary/20 text-primary font-semibold rounded-xl hover:bg-white/80 transition-all">
                See Detailed Workflow
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Categories Section (Existing) */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mb-20 md:mb-28 relative z-10"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#102A43]">Popular Categories</h2>
            <Link href="/doctors" className="text-primary text-xs md:text-sm font-bold tracking-wide hover:underline">
              SEE ALL
            </Link>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6 justify-between items-center">
            {[
              { name: "CARDIOLOGY", icon: HeartPulse },
              { name: "DERMATOLOGY", icon: Stethoscope },
              { name: "NEUROLOGY", icon: Brain },
              { name: "DENTAL", icon: Tooth },
              { name: "PEDIATRICS", icon: HeartPulse },
              { name: "ORTHOPEDIC", icon: Stethoscope },
            ].map((cat, idx) => (
              <motion.div key={cat.name} variants={itemVariants} className={`flex flex-col items-center gap-3 ${idx > 3 ? 'hidden md:flex' : ''}`}>
                <Link href={`/doctors?specialty=${cat.name.toLowerCase()}`} className="w-[72px] h-[72px] md:w-24 md:h-24 bg-white/60 backdrop-blur-md border border-white/40 shadow-sm hover:shadow-md hover:border-primary/30 transition-all cursor-pointer rounded-[2rem] flex items-center justify-center group">
                  <cat.icon className={`w-7 h-7 md:w-9 md:h-9 text-[#102A43] group-hover:text-primary group-hover:scale-110 transition-all duration-300`} />
                </Link>
                <span className="text-[10px] md:text-xs font-bold text-[#627D98] tracking-wider text-center">{cat.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Top Rated Doctors (Existing enhanced) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 md:mb-28 relative z-10"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#102A43]">Top Rated Doctors</h2>
            <Link href="/doctors" className="text-primary text-xs md:text-sm font-bold tracking-wide hover:underline">
              FILTERS
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: '1', name: "Dr. James Wilson", spec: "Cardiologist", loc: "City Hospital", exp: "12 yrs exp.", rate: "$100/hr", rating: "4.9", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop" },
              { id: '2', name: "Dr. Sarah Chen", spec: "Dermatologist", loc: "Skin Center", exp: "8 yrs exp.", rate: "$120/hr", rating: "4.8", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" },
              { id: '3', name: "Dr. Michael Aris", spec: "Neurologist", loc: "NeuroCare", exp: "10yrs exp.", rate: "$140/hr", rating: "4.0", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop" },
            ].map((doc, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Link href={`/doctor/${doc.id}`} className="bg-white/40 backdrop-blur-2xl rounded-3xl p-5 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-white/50 flex gap-5 items-center relative hover:shadow-lg hover:bg-white/60 transition-all block h-full">
                  <div className="absolute top-5 right-5 bg-white/80 backdrop-blur-md border border-white/40 text-primary px-2.5 py-1 rounded-xl flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="text-[11px] md:text-xs font-bold">{doc.rating}</span>
                  </div>
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shrink-0 shadow-inner">
                    <img src={doc.img} alt={doc.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#102A43] text-base md:text-lg mb-1">{doc.name}</h3>
                    <p className="text-[#627D98] text-xs md:text-sm mb-3 font-medium">{doc.spec} • {doc.loc}</p>
                    <div className="flex gap-2">
                      <span className="bg-white/50 backdrop-blur-sm border border-white/30 text-[#627D98] text-[10px] md:text-xs px-2.5 py-1 rounded-lg font-bold">{doc.exp}</span>
                      <span className="bg-white/50 backdrop-blur-sm border border-white/30 text-[#E65100] text-[10px] md:text-xs px-2.5 py-1 rounded-lg font-bold">{doc.rate}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div className="mb-20 md:mb-32">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#102A43] mb-4">What Our Users Say</h2>
            <p className="text-[#627D98] md:text-lg">Real stories from patients and doctors who use MedBook.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { text: "MedBook completely changed how I manage my health. Booking a specialist used to take weeks, now it takes minutes.", author: "Emily R.", role: "Patient" },
              { text: "As a clinic owner, the pre-booking fee feature reduced our no-show rate by 80%. It's an indispensable tool for us.", author: "Dr. Marcus T.", role: "Orthopedic Surgeon" },
              { text: "The interface is beautiful and so easy to use. Having all my medical history in one secure place gives me peace of mind.", author: "Sarah L.", role: "Patient" }
            ].map((test, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 relative"
              >
                <Star className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-[#102A43] font-medium leading-relaxed mb-8 italic">"{test.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    {test.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#102A43] text-sm">{test.author}</h4>
                    <p className="text-xs text-[#627D98]">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Promo Banner with Parallax Background */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#004D40] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden text-white shadow-2xl flex flex-col md:flex-row md:justify-between md:items-center z-10"
        >
          {/* Parallax elements inside banner for depth */}
          <motion.div style={{ y: elementsY }} className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <motion.div style={{ y: elementsY }} className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#80CBC4]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 md:w-2/3">
            <h3 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">Ready to prioritize your health?</h3>
            <p className="text-[#80CBC4] text-sm md:text-lg mb-8 md:mb-0">Join thousands of users today. Use code <span className="font-bold text-[#102A43] bg-white px-2 py-0.5 rounded-md mx-1 shadow-sm">MEDNEW</span> for 20% off your first consultation.</p>
          </div>
          <div className="relative z-10 md:w-1/3 flex md:justify-end">
            <Link href="/register" className="inline-block bg-white hover:bg-gray-50 text-[#004D40] text-sm md:text-base font-bold py-4 px-8 rounded-2xl transition-all shadow-xl shadow-black/10 text-center w-full md:w-auto">
              Get Started Now
            </Link>
          </div>
        </motion.div>

      </main>
    </div>
  );
}
