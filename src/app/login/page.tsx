'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'true');
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-bg-main flex items-center justify-center py-10 px-4">
      <div className="bg-white rounded-[2.5rem] shadow-xl shadow-primary/5 border border-border-color/30 w-full max-w-5xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Image Side */}
        <div className="md:w-1/2 bg-primary p-12 text-white flex flex-col justify-center relative overflow-hidden hidden md:flex">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Welcome Back to MedBook</h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Your health journey continues here. Login to manage your appointments, view test results, and connect with your healthcare providers.
            </p>
          </div>
        </div>

        {/* Form Side */}
        <div className="md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <div className="mb-10 text-center md:text-left">
            <Link href="/" className="inline-block mb-8">
              <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.png`} alt="MedBook" width={160} height={40} className="h-8 w-auto" />
            </Link>
            <h1 className="text-3xl font-bold text-text-main mb-2">Sign In</h1>
            <p className="text-text-muted">Please enter your details to access your account.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSignIn}>
            <div>
              <label className="block text-sm font-medium text-text-main mb-2">Email Address</label>
              <div className="relative text-text-muted focus-within:text-primary">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5" />
                </div>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full pl-11 pr-4 py-4 bg-bg-main rounded-2xl border border-border-color/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-main"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-main mb-2">Password</label>
              <div className="relative text-text-muted focus-within:text-primary">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5" />
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full pl-11 pr-4 py-4 bg-bg-main rounded-2xl border border-border-color/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-main"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-border-color/40 accent-primary" />
                <span className="text-text-muted font-medium">Remember me</span>
              </label>
              <Link href="/login/forgot-password" className="text-primary font-medium hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button 
              type="submit"
              className="flex items-center justify-center w-full bg-primary hover:bg-[#007A83] text-white py-4 rounded-2xl font-semibold transition-all shadow-md shadow-primary/20 mt-4"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-text-muted mt-8 font-medium">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-primary hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
