'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Calendar, User } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'HOME', icon: Home, path: '/' },
    { name: 'SEARCH', icon: Search, path: '/search' },
    { name: 'APPOINTMENTS', icon: Calendar, path: '/appointments' },
    { name: 'PROFILE', icon: User, path: '/profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#F1F5F9] px-6 py-4 rounded-t-3xl shadow-[0_-10px_40px_rgb(0,0,0,0.04)] z-50">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link 
              key={item.name} 
              href={item.path}
              className="flex flex-col items-center gap-1.5 min-w-[64px]"
            >
              <div className={`p-2 rounded-2xl transition-all ${isActive ? 'bg-[#E0F2F1]' : 'bg-transparent'}`}>
                <item.icon className={`w-6 h-6 ${isActive ? 'text-primary' : 'text-[#9CB3C9]'}`} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={`text-[10px] font-bold tracking-wide ${isActive ? 'text-primary' : 'text-[#9CB3C9]'}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
