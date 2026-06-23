'use client';

import Link from 'next/link';
import { Menu, User, X, ChevronRight } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };
    checkLogin();
    window.addEventListener('storage', checkLogin);
    const interval = setInterval(checkLogin, 500);
    return () => {
      window.removeEventListener('storage', checkLogin);
      clearInterval(interval);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    router.push('/');
  };

  if (pathname?.startsWith('/dashboard')) {
    return null;
  }

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Find Doctors', href: '/doctors' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky mt-8 md:mt-12 top-8 md:top-12 z-50 w-[calc(100%-2rem)] lg:w-max mx-auto bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-full transition-all duration-300">
      <div className="px-4 py-2.5 flex items-center justify-between lg:justify-center gap-4 lg:gap-8">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 pl-2">
          <Image src="/logo.png" alt="MedBook Logo" width={120} height={32} className="h-7 w-auto object-contain" />
          <span className="text-xl font-extrabold text-[#102A43] tracking-tight hidden sm:block">MedBook</span>
        </Link>
        
        {/* Center: Nav Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`px-5 py-2.5 rounded-full font-bold text-[15px] transition-all duration-200 ${
                  isActive 
                    ? 'bg-[#E0F2F1] text-primary' 
                    : 'text-[#102A43] hover:bg-gray-100/80'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <div className="hidden lg:flex items-center gap-2 pr-1">
              <Link href="/dashboard/profile" className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-[15px] bg-primary text-white hover:bg-[#007A83] transition-colors">
                <User className="w-4 h-4" />
                Profile
              </Link>
              <button onClick={handleLogout} className="px-5 py-2.5 rounded-full font-bold text-[15px] text-[#E65100] hover:bg-red-50 transition-colors">
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden lg:flex items-center gap-2 pr-1">
              <Link href="/login" className="px-5 py-2.5 rounded-full font-bold text-[15px] text-[#102A43] hover:bg-gray-100/80 transition-colors">
                Login
              </Link>
              <Link href="/register" className="px-6 py-2.5 rounded-full font-bold text-[15px] bg-primary text-white hover:bg-[#007A83] transition-colors">
                Sign Up
              </Link>
            </div>
          )}
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 text-[#102A43] lg:hidden bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Sheet */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-[#102A43]/20 backdrop-blur-sm z-40 -mt-6 md:-mt-8"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="lg:hidden absolute top-[calc(100%+12px)] left-0 w-full bg-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] p-4 flex flex-col gap-2 z-50 rounded-3xl max-h-[calc(100vh-120px)] overflow-y-auto"
            >
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
                  return (
                    <Link 
                      key={link.name}
                      href={link.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-5 py-4 rounded-2xl font-bold text-[15px] transition-colors ${
                        isActive 
                          ? 'bg-[#E0F2F1] text-[#102A43]' 
                          : 'text-[#102A43] hover:bg-gray-50'
                      }`}
                    >
                      {link.name}
                      <ChevronRight className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-gray-400'}`} />
                    </Link>
                  );
                })}
              </nav>

              <div className="h-px w-full bg-gray-100 my-2" />

              <div className="flex flex-col gap-2">
                {isLoggedIn ? (
                  <>
                    <Link 
                      href="/dashboard/profile" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-center gap-2 w-full px-5 py-4 rounded-2xl font-bold text-[15px] bg-primary text-white"
                    >
                      <User className="w-5 h-5" />
                      Profile
                    </Link>
                    <button 
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }} 
                      className="w-full px-5 py-4 rounded-2xl font-bold text-[15px] text-[#E65100] bg-red-50 hover:bg-red-100"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link 
                      href="/login" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-center w-full px-5 py-4 rounded-2xl font-bold text-[15px] text-[#102A43] bg-gray-50 hover:bg-gray-100"
                    >
                      Login
                    </Link>
                    <Link 
                      href="/register" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-center w-full px-5 py-4 rounded-2xl font-bold text-[15px] bg-[#102A43] text-white hover:bg-black"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
