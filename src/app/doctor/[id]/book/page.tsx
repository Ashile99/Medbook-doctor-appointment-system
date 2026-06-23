'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

export default function SelectDateTime({ params }: { params: { id: string } }) {
  const [selectedDate, setSelectedDate] = useState<number>(15);
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');

  const dates = [
    { day: 'Mon', date: 14 },
    { day: 'Tue', date: 15 },
    { day: 'Wed', date: 16 },
    { day: 'Thu', date: 17 },
    { day: 'Fri', date: 18 },
    { day: 'Sat', date: 19 },
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', 
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  return (
    <div className="min-h-screen bg-bg-main py-10">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-8">
          <Link href={`/doctor/${params.id}`} className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Profile</span>
          </Link>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-border-color/40">
          <h1 className="text-2xl font-bold text-text-main mb-8">Select Date & Time</h1>
          
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-text-main flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-primary" />
              October 2026
            </h2>
            <div className="flex gap-2">
              <button className="p-2 border border-border-color/40 rounded-xl hover:bg-bg-main transition-colors text-text-main">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-2 border border-border-color/40 rounded-xl hover:bg-bg-main transition-colors text-text-main">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Date Selection */}
          <div className="flex justify-between gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {dates.map((d) => (
              <button 
                key={d.date}
                onClick={() => setSelectedDate(d.date)}
                className={`flex flex-col items-center justify-center min-w-[70px] py-4 rounded-2xl border transition-all ${
                  selectedDate === d.date 
                    ? 'bg-primary border-primary text-white shadow-md shadow-primary/20' 
                    : 'bg-white border-border-color/40 text-text-main hover:border-primary/50'
                }`}
              >
                <span className={`text-sm mb-1 ${selectedDate === d.date ? 'text-white/80' : 'text-text-muted'}`}>{d.day}</span>
                <span className="text-xl font-bold">{d.date}</span>
              </button>
            ))}
          </div>

          {/* Time Selection */}
          <h2 className="text-lg font-semibold text-text-main flex items-center gap-2 mb-6">
            <Clock className="w-5 h-5 text-primary" />
            Available Time
          </h2>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mb-10">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-3 rounded-xl border text-sm font-medium transition-all ${
                  selectedTime === time
                    ? 'bg-primary border-primary text-white shadow-md shadow-primary/20'
                    : 'bg-white border-border-color/40 text-text-main hover:border-primary/50'
                }`}
              >
                {time}
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-border-color/30 flex justify-end">
             <Link 
                href={`/doctor/${params.id}/book/payment`}
                className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-2xl font-semibold transition-all shadow-md shadow-primary/20 w-full sm:w-auto text-center"
              >
                Continue to Payment
             </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
