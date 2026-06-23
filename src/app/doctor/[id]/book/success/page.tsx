import Link from 'next/link';
import { Check, Calendar, Video, Info, ArrowRight, Home } from 'lucide-react';

export default function BookingSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E0F2F1]/50 to-[#F8FAFC] font-sans pb-10 flex flex-col items-center">
      
      {/* Top Section - Success Icon */}
      <div className="pt-24 pb-8 flex flex-col items-center px-6 text-center w-full">
        <div className="w-24 h-24 bg-[#E0F2F1] rounded-full flex items-center justify-center mb-6 relative">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
            <Check className="w-8 h-8 text-white stroke-[3]" />
          </div>
          <div className="absolute inset-0 bg-primary/5 rounded-full scale-150 -z-10" />
        </div>
        
        <h1 className="text-3xl font-extrabold text-[#102A43] mb-4 leading-tight">Appointment<br/>Confirmed!</h1>
        <p className="text-[#627D98] text-[15px] leading-relaxed max-w-[280px]">
          Your session with Dr. Sarah Jenkins has been successfully scheduled.
        </p>
      </div>

      <main className="px-6 w-full max-w-md md:max-w-2xl space-y-6 md:space-y-8">
        
        {/* Summary Details */}
        <div>
          <h2 className="text-[11px] md:text-xs font-bold text-[#627D98] tracking-widest mb-4 md:mb-6 text-center md:text-left">SUMMARY DETAILS</h2>
          
          <div className="space-y-4 md:space-y-6">
            {/* Date Card */}
            <div className="bg-white rounded-3xl p-5 md:p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex gap-4 md:gap-6 items-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F1F5F9] rounded-2xl md:rounded-3xl flex items-center justify-center shrink-0">
                 <Calendar className="w-5 h-5 md:w-7 md:h-7 text-primary" />
              </div>
              <div>
                <span className="inline-block bg-[#E0F2F1] text-primary text-[9px] md:text-[11px] font-bold tracking-wider px-2 py-0.5 md:px-3 md:py-1 rounded-full mb-1.5 md:mb-2">Upcoming</span>
                <p className="font-bold text-[#102A43] text-[15px] md:text-lg mb-0.5 md:mb-1">Monday, Oct 24</p>
                <p className="text-[#627D98] text-[12px] md:text-sm">09:30 AM — 10:15 AM</p>
              </div>
            </div>

            {/* Doctor & Type Row */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <div className="flex-1 bg-white rounded-3xl p-5 md:p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden mb-3 md:mb-4 border-2 border-white shadow-sm">
                  <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" alt="Dr" className="w-full h-full object-cover" />
                </div>
                <p className="font-bold text-[#102A43] text-[13px] md:text-base mb-0.5">Dr. Sarah Jenkins</p>
                <p className="text-[#627D98] text-[10px] md:text-xs font-medium">Cardiologist</p>
              </div>
              
              <div className="flex-1 bg-white rounded-3xl p-5 md:p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col justify-center items-center text-center sm:items-start sm:text-left">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-50 text-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4">
                  <Video className="w-4 h-4 md:w-6 md:h-6 fill-current" />
                </div>
                <p className="font-bold text-[#102A43] text-[13px] md:text-base leading-tight mb-1">Virtual<br className="sm:hidden" /> Consultation</p>
                <p className="text-[#627D98] text-[10px] md:text-xs">Via MedBook Video</p>
              </div>
            </div>

            {/* Info Notice */}
            <div className="bg-[#E0F2F1]/50 rounded-2xl md:rounded-3xl p-4 md:p-5 flex gap-3 md:gap-4 items-center">
              <Info className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
              <p className="text-[#102A43] text-[11px] md:text-sm leading-relaxed font-medium">
                A confirmation email with the meeting link has been sent to your registered address.
              </p>
            </div>

          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 md:pt-6 space-y-3 md:space-y-0 md:flex md:gap-4">
          <Link 
            href="/appointments"
            className="flex-1 flex items-center justify-center gap-2 w-full bg-primary hover:bg-[#007A83] text-white font-bold py-4 rounded-2xl transition-colors text-[15px] md:text-base"
          >
            View My Appointments
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
          <Link 
            href="/"
            className="flex-1 flex items-center justify-center gap-2 w-full bg-[#E2E8F0]/70 hover:bg-[#E2E8F0] text-[#102A43] font-bold py-4 rounded-2xl transition-colors text-[15px] md:text-base"
          >
            <Home className="w-4 h-4 md:w-5 md:h-5" />
            Back to Home
          </Link>
        </div>

        <div className="flex justify-center gap-1.5 pt-4">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#CBD5E1] rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#CBD5E1] rounded-full" />
        </div>
        <p className="text-center text-[#9CB3C9] text-[9px] font-bold tracking-widest uppercase pb-6">
          REF: MB-99281-XC
        </p>

        <p className="text-center text-[#627D98] text-[12px]">
          Need to make changes? <Link href="mailto:support@medbook.com" className="text-primary font-medium hover:underline">Contact Support</Link>
        </p>

      </main>
    </div>
  );
}
