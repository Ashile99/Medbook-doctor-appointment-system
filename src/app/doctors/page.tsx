'use client';

import { Search, MapPin, Filter, Star, ChevronDown, Check } from 'lucide-react';
import DoctorCard from '@/components/shared/DoctorCard';
import { useState } from 'react';

export default function DoctorListing() {
  const [activeFilter, setActiveFilter] = useState('All');

  const doctors = [
    {
      id: "1",
      name: "Dr. Sarah Jenkins",
      specialty: "Cardiologist",
      experience: "15+ Years",
      location: "New York Medical Center",
      rating: 4.9,
      reviewsCount: 124,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "2",
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      experience: "10+ Years",
      location: "Westside Health Clinic",
      rating: 4.8,
      reviewsCount: 98,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "3",
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      experience: "8+ Years",
      location: "Children's Hospital",
      rating: 5.0,
      reviewsCount: 215,
      image: "https://images.unsplash.com/photo-1594824436998-d50d6e6ab9ce?q=80&w=1929&auto=format&fit=crop"
    },
    {
      id: "4",
      name: "Dr. James Wilson",
      specialty: "Orthopedic Surgeon",
      experience: "20+ Years",
      location: "Downtown Clinic",
      rating: 4.7,
      reviewsCount: 184,
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "5",
      name: "Dr. Anita Patel",
      specialty: "Dermatologist",
      experience: "12+ Years",
      location: "Skin Care Institute",
      rating: 4.9,
      reviewsCount: 342,
      image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=1976&auto=format&fit=crop"
    },
    {
      id: "6",
      name: "Dr. Robert Taylor",
      specialty: "Ophthalmologist",
      experience: "18+ Years",
      location: "Vision Center",
      rating: 4.6,
      reviewsCount: 89,
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-[100dvh] bg-transparent pt-10 pb-24 font-sans overflow-hidden relative">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#F8FAFC]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#007A83]/10 via-white/50 to-[#102A43]/5 backdrop-blur-[3px]" />
      </div>

      <main className="container mx-auto px-4 relative z-10 max-w-7xl">
        
        {/* Search Header */}
        <div className="bg-white/50 backdrop-blur-2xl rounded-[2rem] p-6 shadow-sm border border-white/60 mb-10">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex items-center gap-3 px-5 py-4 bg-white/60 backdrop-blur-md rounded-2xl border border-white/50 shadow-inner focus-within:ring-1 focus-within:ring-primary/50 transition-all">
              <Search className="w-5 h-5 text-primary" />
              <input 
                type="text" 
                placeholder="Doctor name, condition, or specialty" 
                className="w-full bg-transparent border-none focus:outline-none text-[#102A43] placeholder:text-[#9CB3C9] font-medium"
              />
            </div>
            <div className="flex-1 flex items-center gap-3 px-5 py-4 bg-white/60 backdrop-blur-md rounded-2xl border border-white/50 shadow-inner focus-within:ring-1 focus-within:ring-primary/50 transition-all">
              <MapPin className="w-5 h-5 text-primary" />
              <input 
                type="text" 
                placeholder="City, neighborhood, or zip" 
                className="w-full bg-transparent border-none focus:outline-none text-[#102A43] placeholder:text-[#9CB3C9] font-medium"
              />
            </div>
            <button className="bg-primary hover:bg-[#007A83] text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              Find Now
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-72 shrink-0 space-y-6">
            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-6 shadow-sm border border-white/50">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/40">
                <h3 className="font-bold text-[#102A43] flex items-center gap-2">
                  <Filter className="w-4 h-4" /> Filters
                </h3>
                <button className="text-xs font-bold text-primary hover:underline">Reset</button>
              </div>

              {/* Specialty Filter */}
              <div className="mb-8">
                <h4 className="font-bold text-[#102A43] text-sm mb-4">Specialty</h4>
                <div className="space-y-3">
                  {['All Specialties', 'Cardiology', 'Dermatology', 'Neurology', 'Pediatrics', 'Orthopedics'].map((spec) => (
                    <label key={spec} className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${activeFilter === spec ? 'bg-primary border-primary' : 'bg-white/50 border-white/60 group-hover:border-primary/50'}`}>
                        {activeFilter === spec && <Check className="w-3.5 h-3.5 text-white" />}
                      </div>
                      <span className={`text-sm font-medium ${activeFilter === spec ? 'text-[#102A43]' : 'text-[#627D98] group-hover:text-[#102A43]'}`}>{spec}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-8">
                <h4 className="font-bold text-[#102A43] text-sm mb-4">Minimum Rating</h4>
                <div className="space-y-3">
                  {[4.5, 4.0, 3.5].map((rate) => (
                    <label key={rate} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-5 h-5 rounded-md border bg-white/50 border-white/60 group-hover:border-primary/50 transition-all"></div>
                      <div className="flex items-center gap-1 text-sm font-medium text-[#627D98]">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{rate} & Up</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Experience Filter */}
              <div>
                <h4 className="font-bold text-[#102A43] text-sm mb-4">Experience</h4>
                <div className="space-y-3">
                  {['Any Experience', '5+ Years', '10+ Years', '15+ Years'].map((exp, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-5 h-5 rounded-md border bg-white/50 border-white/60 group-hover:border-primary/50 transition-all"></div>
                      <span className="text-sm font-medium text-[#627D98] group-hover:text-[#102A43]">{exp}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-[#102A43] mb-2">Available Doctors</h1>
                <p className="text-[#627D98] font-medium">Showing {doctors.length} top-rated specialists</p>
              </div>
              <div className="hidden md:flex items-center gap-2 bg-white/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/50 shadow-sm cursor-pointer">
                <span className="text-sm font-bold text-[#102A43]">Sort by: Recommended</span>
                <ChevronDown className="w-4 h-4 text-[#627D98]" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {doctors.map(doctor => (
                <DoctorCard key={doctor.id} {...doctor} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button className="bg-white/50 backdrop-blur-md border border-white/60 text-[#102A43] hover:text-primary hover:bg-white/80 font-bold px-8 py-3 rounded-xl transition-all shadow-sm">
                Load More Doctors
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
