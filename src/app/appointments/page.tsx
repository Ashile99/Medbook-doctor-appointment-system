import Link from 'next/link';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function Appointments() {
  const appointments = [
    {
      id: "1",
      doctor: "Dr. Sarah Jenkins",
      specialty: "Cardiologist",
      date: "Oct 23, 2026",
      time: "10:30 AM",
      location: "New York Medical Center",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "2",
      doctor: "Dr. Michael Chen",
      specialty: "Neurologist",
      date: "Oct 15, 2026",
      time: "02:15 PM",
      location: "Westside Health Clinic",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
    },
    {
      id: "3",
      doctor: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      date: "Oct 02, 2026",
      time: "09:00 AM",
      location: "Children's Hospital",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1594824436998-d50d6e6ab9ce?q=80&w=1929&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-transparent py-10 relative z-10">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-text-main mb-2">My Appointments</h1>
            <p className="text-text-muted">Manage your upcoming and past medical appointments</p>
          </div>
          <Link href="/doctors" className="hidden md:flex bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl font-medium transition-all shadow-md shadow-primary/20">
            Book New Appointment
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border-color/30 pb-2">
          <button className="text-primary font-bold border-b-2 border-primary pb-2 px-2">Upcoming (1)</button>
          <button className="text-text-muted font-medium hover:text-text-main transition-colors pb-2 px-2">Past (2)</button>
          <button className="text-text-muted font-medium hover:text-text-main transition-colors pb-2 px-2">Canceled (0)</button>
        </div>

        {/* Appointment List */}
        <div className="space-y-6">
          {appointments.map((apt) => (
            <div key={apt.id} className="bg-white/60 backdrop-blur-md rounded-3xl p-6 shadow-sm border border-white/50 flex flex-col md:flex-row gap-6 items-start md:items-center transition-all hover:bg-white/80">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shrink-0">
                <img src={apt.image} alt={apt.doctor} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-text-main">{apt.doctor}</h3>
                    <p className="text-text-muted font-medium">{apt.specialty}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${apt.status === 'Upcoming' ? 'bg-[#E0F2F1] text-primary' : 'bg-gray-100 text-gray-500'}`}>
                    {apt.status}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  <div className="flex items-center gap-2 text-text-main text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="font-medium">{apt.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-text-main text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="font-medium">{apt.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-text-main text-sm md:col-span-2">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <span className="font-medium truncate">{apt.location}</span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-auto flex flex-col gap-3 shrink-0 mt-4 md:mt-0">
                {apt.status === 'Upcoming' ? (
                  <>
                    <button className="w-full md:w-40 bg-primary/10 hover:bg-primary/20 text-primary font-bold py-2.5 rounded-xl transition-colors">
                      Reschedule
                    </button>
                    <button className="w-full md:w-40 bg-red-50 hover:bg-red-100 text-red-500 font-bold py-2.5 rounded-xl transition-colors">
                      Cancel
                    </button>
                  </>
                ) : (
                  <button className="w-full md:w-40 bg-primary hover:bg-primary-hover text-white font-bold py-2.5 rounded-xl transition-colors shadow-md shadow-primary/20">
                    Book Again
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
