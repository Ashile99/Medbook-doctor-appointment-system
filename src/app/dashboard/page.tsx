'use client';

import Link from 'next/link';
import { Calendar as CalendarIcon, Clock, Activity, User, FileText, Settings, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PatientDashboard() {
  return (
    <main className="flex-1 p-6 sm:p-10">
      <h1 className="text-2xl font-bold text-text-main mb-8">Welcome back, John!</h1>
      
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-border-color/40 flex items-center gap-4">
          <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
            <CalendarIcon className="w-7 h-7 text-primary" />
          </div>
          <div>
            <p className="text-text-muted text-sm font-medium mb-1">Upcoming</p>
            <p className="text-2xl font-bold text-text-main">2</p>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-border-color/40 flex items-center gap-4">
          <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
            <Activity className="w-7 h-7 text-blue-500" />
          </div>
          <div>
            <p className="text-text-muted text-sm font-medium mb-1">Completed</p>
            <p className="text-2xl font-bold text-text-main">14</p>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-border-color/40 flex items-center gap-4">
          <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center shrink-0">
            <FileText className="w-7 h-7 text-orange-500" />
          </div>
          <div>
            <p className="text-text-muted text-sm font-medium mb-1">Reports</p>
            <p className="text-2xl font-bold text-text-main">5</p>
          </div>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-border-color/40">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-text-main">Upcoming Appointments</h2>
          <Link href="/doctors" className="text-primary font-medium text-sm hover:underline">
            Book New
          </Link>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 rounded-2xl border border-border-color/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" alt="Doctor" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-semibold text-text-main">Dr. Sarah Jenkins</h3>
                <p className="text-sm text-text-muted">Cardiologist</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="flex items-center gap-1.5 text-text-main font-medium">
                  <CalendarIcon className="w-4 h-4 text-primary" />
                  Oct 15, 2026
                </div>
                <div className="flex items-center gap-1.5 text-text-muted text-sm mt-1 justify-end">
                  <Clock className="w-4 h-4" />
                  10:00 AM
                </div>
              </div>
              <button className="px-4 py-2 bg-primary/10 text-primary rounded-xl text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                Reschedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
