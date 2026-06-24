'use client';

import Link from 'next/link';
import { ArrowLeft, Bell, Lock } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function PaymentPage({ params }: { params: { id: string } }) {
  const [method, setMethod] = useState('card');

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pb-6">
      {/* Top Bar (Mobile Only) */}
      <header className="md:hidden flex justify-between items-center p-6 bg-transparent">
        <div className="flex items-center gap-3">
          <Link href={`/doctor/${params.id}`} className="text-[#102A43] hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="MedBook Logo" width={120} height={32} className="h-6 md:h-8 object-contain" />
            <span className="text-lg font-bold text-[#102A43]">MedBook</span>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-[#627D98] hover:text-primary transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-[#E2E8F0]">
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      <main className="px-6 space-y-8 md:flex md:flex-row-reverse md:gap-12 md:space-y-0 md:max-w-6xl md:mx-auto md:pt-8">
        
        {/* Right Column / Top on Mobile - Summary & Progress */}
        <div className="md:w-[40%] space-y-8">
          {/* Progress Bar */}
          <div>
            <div className="flex justify-between items-end mb-2">
              <span className="text-primary text-[10px] md:text-xs font-bold tracking-widest">STEP 2 OF 3</span>
              <span className="text-[#627D98] text-[11px] md:text-xs font-bold">Payment & Confirmation</span>
            </div>
            <div className="h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden">
              <div className="w-2/3 h-full bg-primary rounded-full"></div>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="bg-white rounded-[2rem] p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-[#F1F5F9] relative overflow-hidden md:sticky md:top-24">
            <div className="absolute -top-4 -right-4 opacity-5 pointer-events-none">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9h-2V9H8v3H6v2h2v3h2v-3h2v-2z"/></svg>
            </div>
            <h2 className="text-lg font-bold text-[#102A43] mb-5">Booking Summary</h2>
            <div className="flex gap-4 items-center mb-6 relative z-10">
              <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0">
                 <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" alt="Dr" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold text-[#102A43] text-[15px]">Dr. Sarah Mitchell</p>
                <p className="text-[#627D98] text-[11px] leading-snug">Senior Cardiologist • St. Mary&apos;s<br/>Hospital</p>
              </div>
            </div>
            
            <div className="flex gap-4 mb-6">
              <div className="flex-1 bg-[#F1F5F9] rounded-2xl p-3">
                 <div className="flex items-center gap-1.5 mb-1">
                   <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                   <span className="text-primary text-[9px] font-bold tracking-wider">DATE</span>
                 </div>
                 <p className="font-bold text-[#102A43] text-[13px]">Oct 24, 2023</p>
              </div>
              <div className="flex-1 bg-[#F1F5F9] rounded-2xl p-3">
                 <div className="flex items-center gap-1.5 mb-1">
                   <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   <span className="text-primary text-[9px] font-bold tracking-wider">TIME</span>
                 </div>
                 <p className="font-bold text-[#102A43] text-[13px]">10:30 AM</p>
              </div>
            </div>

            {/* Desktop Action Button moved into sticky summary */}
            <div className="hidden md:block border-t border-[#F1F5F9] pt-6">
              <div className="flex items-center justify-center gap-2 mb-4 text-[#627D98]">
                <Lock className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold tracking-widest">SECURE SSL ENCRYPTED</span>
              </div>
              <Link 
                href={`/doctor/${params.id}/book/success`}
                className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-[#007A83] text-white font-bold py-4 rounded-2xl transition-colors text-[15px]"
              >
                Pay & Confirm
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Left Column / Bottom on Mobile - Payment Methods */}
        <div className="md:w-[60%] space-y-8">
          {/* Payment Details */}
          <div className="md:bg-white md:p-8 md:rounded-[2rem] md:shadow-[0_4px_20px_rgb(0,0,0,0.03)] md:border md:border-[#F1F5F9]">
            <h2 className="text-lg md:text-xl font-bold text-[#102A43] mb-4 md:mb-6">Payment Details</h2>
            <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
              <div className="flex justify-between">
                <span className="text-[#627D98] text-[13px] md:text-base font-medium">Consultation Fee</span>
                <span className="text-[#102A43] text-[13px] md:text-base font-bold">$120.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#627D98] text-[13px] md:text-base font-medium">Service Tax (5%)</span>
                <span className="text-[#102A43] text-[13px] md:text-base font-bold">$6.00</span>
              </div>
            </div>
            <div className="border-t border-[#E2E8F0] pt-4 md:pt-6 flex justify-between items-center">
              <span className="text-[#102A43] font-bold text-[15px] md:text-xl">Total Amount</span>
              <span className="text-primary font-bold text-xl md:text-3xl">$126.00</span>
            </div>
          </div>

          {/* Select Payment Method */}
          <div className="md:bg-white md:p-8 md:rounded-[2rem] md:shadow-[0_4px_20px_rgb(0,0,0,0.03)] md:border md:border-[#F1F5F9]">
            <h2 className="text-[15px] md:text-xl font-bold text-[#102A43] mb-4 md:mb-6">Select Payment Method</h2>
            <div className="space-y-3 md:space-y-4">
              
              <label className={`flex items-center justify-between p-4 md:p-5 rounded-2xl border-2 cursor-pointer transition-all ${method === 'card' ? 'border-primary bg-white shadow-md' : 'border-[#F1F5F9] bg-white hover:bg-gray-50'}`}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#E0F2F1] rounded-xl flex items-center justify-center text-primary">
                     <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#102A43] text-[13px] md:text-base">Credit / Debit Card</p>
                    <p className="text-[#627D98] text-[10px] md:text-xs">Visa, Mastercard, Amex</p>
                  </div>
                </div>
                <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center ${method === 'card' ? 'border-primary' : 'border-[#CBD5E1]'}`}>
                  {method === 'card' && <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-primary rounded-full" />}
                </div>
                <input type="radio" name="payment" className="hidden" checked={method === 'card'} onChange={() => setMethod('card')} />
              </label>

              <label className={`flex items-center justify-between p-4 md:p-5 rounded-2xl border-2 cursor-pointer transition-all ${method === 'upi' ? 'border-primary bg-white shadow-md' : 'border-[#F1F5F9] bg-white hover:bg-gray-50'}`}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F1F5F9] rounded-xl flex items-center justify-center text-[#627D98]">
                     <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#102A43] text-[13px] md:text-base">UPI / GPay / PhonePe</p>
                    <p className="text-[#627D98] text-[10px] md:text-xs">Instant secure mobile payment</p>
                  </div>
                </div>
                <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center ${method === 'upi' ? 'border-primary' : 'border-[#CBD5E1]'}`}>
                  {method === 'upi' && <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-primary rounded-full" />}
                </div>
                <input type="radio" name="payment" className="hidden" checked={method === 'upi'} onChange={() => setMethod('upi')} />
              </label>

              <label className={`flex items-center justify-between p-4 md:p-5 rounded-2xl border-2 cursor-pointer transition-all ${method === 'wallet' ? 'border-primary bg-white shadow-md' : 'border-[#F1F5F9] bg-white hover:bg-gray-50'}`}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F1F5F9] rounded-xl flex items-center justify-center text-[#627D98]">
                     <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#102A43] text-[13px] md:text-base">MedBook Wallet</p>
                    <p className="text-[#627D98] text-[10px] md:text-xs">Balance: $245.00</p>
                  </div>
                </div>
                <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center ${method === 'wallet' ? 'border-primary' : 'border-[#CBD5E1]'}`}>
                  {method === 'wallet' && <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-primary rounded-full" />}
                </div>
                <input type="radio" name="payment" className="hidden" checked={method === 'wallet'} onChange={() => setMethod('wallet')} />
              </label>

            </div>
          </div>
        </div>

        {/* Mobile Footer actions */}
        <div className="pt-4 pb-2 md:hidden">
          <div className="flex items-center justify-center gap-2 mb-4 text-[#627D98]">
            <Lock className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold tracking-widest">SECURE SSL ENCRYPTED PAYMENT</span>
          </div>
          <Link 
            href={`/doctor/${params.id}/book/success`}
            className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-[#007A83] text-white font-bold py-4 rounded-2xl transition-colors text-[15px]"
          >
            Pay & Confirm
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </div>

      </main>
    </div>
  );
}
