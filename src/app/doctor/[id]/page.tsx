'use client';

import Link from 'next/link';
import { Share2, Heart, ShieldCheck, Lock, Award } from 'lucide-react';
import { useState, use } from 'react';

export default function DoctorProfile({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [selectedDate, setSelectedDate] = useState('23');
  const [selectedTime, setSelectedTime] = useState('10:30 AM');

  return (
    <div className="min-h-[100dvh] bg-transparent font-sans pb-24 relative overflow-hidden">
      {/* Global Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#F8FAFC]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#007A83]/15 via-white/40 to-[#102A43]/10 backdrop-blur-[3px]" />
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-primary/20 blur-[80px] md:blur-[120px] rounded-full mix-blend-multiply" />
      </div>

      {/* Top Bar (Mobile Only) */}
      <header className="md:hidden flex justify-between items-center p-6 bg-transparent absolute top-0 left-0 right-0 z-10">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src="/logo.png" alt="MedBook Logo" className="h-6 md:h-8 object-contain drop-shadow-md" />
          <span className="text-xl font-bold text-white drop-shadow-md">MedBook</span>
        </Link>
        <div className="flex gap-4 text-white">
          <button className="hover:text-white/80"><Share2 className="w-5 h-5" /></button>
          <button className="hover:text-white/80"><Heart className="w-5 h-5" /></button>
        </div>
      </header>

      {/* Main Image & Stats */}
      <div className="relative h-[400px] w-full rounded-b-[3rem] overflow-hidden mb-8 md:mb-12 shadow-md">
        <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/80 via-transparent to-black/30 z-[1]" />
        <img 
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" 
          alt="Dr. Sarah Chen" 
          className="w-full h-full object-cover"
        />
        
        {/* Stats Glass Pill */}
        <div className="absolute bottom-6 left-6 right-6 md:left-1/2 md:-translate-x-1/2 md:max-w-3xl z-[2]">
          <div className="bg-white/20 backdrop-blur-xl rounded-[2rem] p-5 flex justify-between items-center text-white border border-white/40 shadow-lg">
            <div className="text-center flex-1">
              <p className="text-[10px] md:text-xs font-bold tracking-wider text-white/80 mb-1">YEARS EXP.</p>
              <p className="font-bold text-xl md:text-2xl leading-none">12+</p>
            </div>
            <div className="w-[1px] h-10 bg-white/30"></div>
            <div className="text-center flex-1">
              <p className="text-[10px] md:text-xs font-bold tracking-wider text-[#A1EFFF] mb-1">PATIENTS</p>
              <p className="font-bold text-xl md:text-2xl leading-none">2.4k</p>
            </div>
            <div className="w-[1px] h-10 bg-white/30"></div>
            <div className="text-center flex-1">
              <p className="text-[10px] md:text-xs font-bold tracking-wider text-white/80 mb-1">RATING</p>
              <p className="font-bold text-xl md:text-2xl leading-none">4.9</p>
            </div>
          </div>
        </div>
      </div>

      <main className="px-6 space-y-8 md:flex md:gap-12 md:space-y-0 md:max-w-6xl md:mx-auto relative z-10">
        <div className="md:w-2/3 space-y-8 pb-10">
          {/* Title & Trust Badges */}
          <div>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="inline-block bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-bold tracking-wider px-3 py-1.5 rounded-full">
                SENIOR CARDIOLOGIST
              </span>
              <span className="inline-flex items-center gap-1 bg-green-500/10 border border-green-500/20 text-green-700 text-[10px] md:text-xs font-bold tracking-wider px-3 py-1.5 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" /> VERIFIED
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#102A43] mb-3">Dr. Sarah Chen, MD</h1>
            <p className="text-[#627D98] text-[15px] md:text-lg leading-relaxed max-w-2xl">
              Specializing in Advanced Cardiovascular Interventions and Preventive Heart Health with a focus on holistic recovery.
            </p>
          </div>

          {/* About Specialist */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#102A43] mb-5">About Specialist</h2>
            <div className="bg-white/50 backdrop-blur-xl rounded-[2rem] p-6 md:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/60">
              <p className="text-[#627D98] text-[14px] md:text-base leading-relaxed mb-6">
                Dr. Sarah Chen is a board-certified cardiologist with over 12 years of experience in managing complex heart conditions. She graduated from Johns Hopkins University and completed her fellowship at the Mayo Clinic. Her patient-centric approach combines cutting-edge technology with empathetic care.
              </p>
              <h3 className="font-bold text-[#102A43] mb-3 text-sm">Specializations & Tags</h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {['Echocardiography', 'Angioplasty', 'Heart Failure', 'Preventive Care'].map(tag => (
                  <span key={tag} className="bg-white/60 backdrop-blur-md border border-white/50 text-[#102A43] font-medium px-4 py-2 rounded-xl text-sm shadow-sm hover:shadow-md transition-all cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Elements */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl p-4 flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#102A43]">HIPAA Compliant</p>
                <p className="text-[10px] text-[#627D98]">100% Secure Data</p>
              </div>
            </div>
            <div className="bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl p-4 flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#102A43]">Top Rated Doctor</p>
                <p className="text-[10px] text-[#627D98]">Awarded in 2023</p>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-[#102A43]">Verified Reviews</h2>
              <div className="flex items-center gap-1.5 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
                <span className="text-yellow-600 text-sm">★</span>
                <span className="text-yellow-700 text-sm font-bold">4.9 (142 Reviews)</span>
              </div>
            </div>
            
            <div className="space-y-4 md:grid md:grid-cols-2 md:space-y-0 md:gap-6">
              {[
                { name: "Marcus Thorne", time: "2 weeks ago", text: "Dr. Chen's expertise and calm demeanor made me feel incredibly at ease. The treatment plan she designed has significantly improved my heart health." },
                { name: "Elena Rodriguez", time: "1 month ago", text: "Highly professional. The clinic is peaceful and modern. Dr. Chen takes the time to explain everything clearly." }
              ].map((rev, i) => (
                <div key={i} className="bg-white/50 backdrop-blur-xl rounded-3xl p-6 shadow-sm border border-white/60">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shadow-inner">
                         <span className="text-primary font-bold">{rev.name[0]}</span>
                      </div>
                      <div>
                        <p className="font-bold text-[#102A43] text-sm">{rev.name}</p>
                        <p className="text-[#627D98] text-[11px]">{rev.time}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 text-yellow-400">
                      {[...Array(5)].map((_, j) => <span key={j} className="text-xs">★</span>)}
                    </div>
                  </div>
                  <p className="text-[#627D98] text-[13px] leading-relaxed italic">"{rev.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Booking Widget (Sticky on Desktop) */}
        <div className="md:w-1/3 md:sticky md:top-28 md:self-start mb-10 md:mb-0">
          <div className="bg-white/60 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/60 rounded-[2.5rem] p-6 pb-24 md:pb-8">
            <div className="flex justify-between items-center mb-6 border-b border-white/40 pb-4">
              <div>
                <h2 className="text-xl font-bold text-[#102A43]">Book Visit</h2>
                <p className="text-[#627D98] text-xs font-medium mt-1">October 2023</p>
              </div>
              <button className="bg-white/60 backdrop-blur-sm border border-white/50 text-primary text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm hover:shadow-md transition-all">
                Calendar
              </button>
            </div>
            
            {/* Dates */}
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 mb-6">
              {[
                { day: 'MON', date: '23' },
                { day: 'TUE', date: '24' },
                { day: 'WED', date: '25' },
                { day: 'THU', date: '26' },
                { day: 'FRI', date: '27' },
              ].map(d => (
                <button 
                  key={d.date}
                  onClick={() => setSelectedDate(d.date)}
                  className={`flex flex-col items-center justify-center min-w-[65px] py-3 rounded-2xl transition-all ${
                    selectedDate === d.date ? 'bg-primary text-white shadow-md border-primary' : 'bg-white/50 border border-white/60 text-[#627D98] hover:bg-white/80'
                  }`}
                >
                  <span className="text-[10px] font-bold mb-1 tracking-wider">{d.day}</span>
                  <span className={`text-xl font-bold ${selectedDate === d.date ? 'text-white' : 'text-[#102A43]'}`}>{d.date}</span>
                </button>
              ))}
            </div>

            {/* Times */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {['09:00 AM', '10:30 AM', '11:15 AM', '01:00 PM', '02:30 PM', '04:00 PM'].map(time => (
                <button 
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`py-3 rounded-xl text-xs font-bold transition-all border ${
                    selectedTime === time ? 'bg-primary border-primary text-white shadow-md' : 'bg-white/40 border-white/50 text-[#102A43] hover:bg-white/60'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
            
            {/* Desktop Action Area */}
            <div className="hidden md:block border-t border-white/40 pt-6">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <p className="text-[#627D98] text-[11px] font-bold tracking-wider mb-1">PRE-BOOKING FEE</p>
                  <div className="flex items-center gap-2">
                    <p className="font-extrabold text-[#102A43] text-3xl">$30.00</p>
                    <span className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded-md font-bold">Total: $120</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50/50 backdrop-blur-sm border border-blue-100 p-3 rounded-xl mb-6 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-[10px] leading-relaxed text-blue-800">
                  You are paying a small pre-booking fee to secure your appointment and prevent no-shows. The remainder is paid at the clinic.
                </p>
              </div>

              <Link 
                href={`/doctor/${resolvedParams.id}/book/payment`}
                className="block w-full bg-primary hover:bg-[#007A83] text-white font-bold py-4 rounded-2xl text-center transition-all shadow-lg shadow-primary/30"
              >
                PROCEED TO PAYMENT
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Fixed Action Bar (Mobile Only) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-white/50 px-6 py-5 shadow-[0_-10px_40px_rgb(0,0,0,0.06)] z-50">
        <div className="flex justify-between items-center max-w-md mx-auto gap-4">
          <div>
            <p className="text-[#627D98] text-[10px] font-bold tracking-wider mb-0.5">PRE-BOOKING FEE</p>
            <p className="font-extrabold text-[#102A43] text-2xl">$30.00</p>
          </div>
          <Link 
            href={`/doctor/${resolvedParams.id}/book/payment`}
            className="flex-1 bg-primary hover:bg-[#007A83] text-white font-bold py-3.5 px-4 rounded-xl text-center text-sm transition-all shadow-lg shadow-primary/30"
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </div>
  );
}
