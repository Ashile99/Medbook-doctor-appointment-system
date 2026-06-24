'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Calendar as CalendarIcon, Clock, Activity, User, FileText, Settings, LogOut } from 'lucide-react';
import Image from 'next/image';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/');
  };

  const navItems = [
    { name: 'Overview', href: '/dashboard', icon: Activity },
    { name: 'Appointments', href: '/dashboard/appointments', icon: CalendarIcon },
    { name: 'Medical Records', href: '/dashboard/medical-records', icon: FileText },
    { name: 'Profile', href: '/dashboard/profile', icon: User },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col md:flex-row relative z-10">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white/60 backdrop-blur-2xl border-r border-white/40 shadow-[4px_0_24px_-8px_rgba(0,0,0,0.05)] flex flex-col hidden md:flex shrink-0">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2 mb-10">
            <Image src="/logo.png" alt="MedBook Logo" width={120} height={32} className="h-6 w-auto object-contain" />
            <span className="text-xl font-bold text-[#102A43]">MedBook</span>
          </Link>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
              JD
            </div>
            <div>
              <p className="font-semibold text-[#102A43]">John Doe</p>
              <p className="text-xs text-[#627D98]">Patient</p>
            </div>
          </div>
          
          <nav className="space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                    isActive 
                      ? 'bg-white/80 shadow-sm border border-white/50 text-primary'
                      : 'text-[#627D98] hover:bg-white/40 hover:backdrop-blur-sm'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        
        <div className="mt-auto p-6 border-t border-white/40">
          <button 
            onClick={handleLogout} 
            className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl font-medium transition-colors w-full"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-y-auto overflow-x-hidden">
        {/* Mobile Header (Visible only on small screens inside dashboard) */}
        <header className="md:hidden flex justify-between items-center p-4 bg-white/60 backdrop-blur-xl border-b border-white/40 sticky top-0 z-50">
           <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xs">
              JD
            </div>
            <span className="font-bold text-[#102A43]">Dashboard</span>
          </div>
          <button onClick={handleLogout} className="p-2 text-red-500 bg-red-50 rounded-lg">
            <LogOut className="w-4 h-4" />
          </button>
        </header>

        {children}
      </div>
    </div>
  );
}
