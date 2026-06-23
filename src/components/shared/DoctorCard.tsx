import Link from 'next/link';
import { Star, MapPin, Stethoscope } from 'lucide-react';

interface DoctorCardProps {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  reviewsCount: number;
  location: string;
  experience: string;
  image: string;
}

export default function DoctorCard({
  id,
  name,
  specialty,
  rating,
  reviewsCount,
  location,
  experience,
  image
}: DoctorCardProps) {
  return (
    <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-5 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-white/50 hover:shadow-lg hover:bg-white/60 transition-all group flex flex-col h-full relative">
      <div className="absolute top-5 right-5 bg-white/80 backdrop-blur-md border border-white/40 text-primary px-2.5 py-1 rounded-xl flex items-center gap-1 shadow-sm z-10">
        <Star className="w-3.5 h-3.5 fill-current" />
        <span className="text-[11px] md:text-xs font-bold">{rating}</span>
      </div>
      
      <div className="flex gap-4">
        <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-inner">
          <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="flex-1 mt-1">
          <h3 className="font-bold text-lg text-[#102A43] group-hover:text-primary transition-colors pr-12 line-clamp-1">{name}</h3>
          <p className="text-primary font-medium text-sm mb-3">{specialty}</p>
          <div className="flex items-center gap-2 text-[#627D98] text-xs mb-1.5 font-medium">
            <Stethoscope className="w-3.5 h-3.5 opacity-70" />
            <span>{experience}</span>
          </div>
          <div className="flex items-center gap-2 text-[#627D98] text-xs font-medium line-clamp-1">
            <MapPin className="w-3.5 h-3.5 opacity-70 shrink-0" />
            <span className="truncate">{location}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-5 pt-5 border-t border-white/30 flex items-center justify-between mt-auto">
        <p className="text-xs font-bold text-[#627D98]">{reviewsCount} Verified Reviews</p>
        <Link 
          href={`/doctor/${id}`}
          className="bg-white/60 hover:bg-primary text-[#102A43] hover:text-white border border-white/50 shadow-sm hover:shadow-md px-5 py-2.5 rounded-xl text-sm font-bold transition-all"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
