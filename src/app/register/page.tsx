import Link from 'next/link';
import Image from 'next/image';
import { Mail, Lock, User } from 'lucide-react';

export default function Register() {
  return (
    <div className="min-h-screen bg-bg-main flex items-center justify-center py-10 px-4">
      <div className="bg-white rounded-[2.5rem] shadow-xl shadow-primary/5 border border-border-color/30 w-full max-w-5xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Form Side */}
        <div className="md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center order-2 md:order-1">
          <div className="mb-8 text-center md:text-left">
            <Link href="/" className="inline-block mb-8 md:hidden">
              <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.png`} alt="MedBook" width={160} height={40} className="h-8 w-auto" />
            </Link>
            <h1 className="text-3xl font-bold text-text-main mb-2">Create Account</h1>
            <p className="text-text-muted">Join MedBook to manage your health seamlessly.</p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-text-main mb-2">Full Name</label>
              <div className="relative text-text-muted focus-within:text-primary">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="w-5 h-5" />
                </div>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full pl-11 pr-4 py-3.5 bg-bg-main rounded-2xl border border-border-color/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-main"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-main mb-2">Email Address</label>
              <div className="relative text-text-muted focus-within:text-primary">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5" />
                </div>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full pl-11 pr-4 py-3.5 bg-bg-main rounded-2xl border border-border-color/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-main"
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
                  className="w-full pl-11 pr-4 py-3.5 bg-bg-main rounded-2xl border border-border-color/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-main"
                />
              </div>
            </div>
            
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer text-sm">
                <input type="checkbox" className="w-4 h-4 mt-0.5 rounded border-border-color/40 accent-primary" />
                <span className="text-text-muted font-medium">
                  I agree to the <Link href="/legal/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link href="/legal/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                </span>
              </label>
            </div>

            <button 
              type="button"
              className="flex items-center justify-center w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-2xl font-semibold transition-all shadow-md shadow-primary/20 mt-4"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-text-muted mt-8 font-medium">
            Already have an account?{' '}
            <Link href="/login" className="text-primary hover:underline">
              Sign In
            </Link>
          </p>
        </div>

        {/* Image Side */}
        <div className="md:w-1/2 bg-accent p-12 text-white flex flex-col justify-center relative overflow-hidden hidden md:flex order-1 md:order-2">
          <div className="absolute top-8 right-8">
            <Link href="/">
              <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.png`} alt="MedBook" width={160} height={40} className="h-8 w-auto brightness-0 invert" />
            </Link>
          </div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551076805-e18690c5e53b?q=80&w=2083&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Your Health,<br/>Simplified.</h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Create an account to quickly book appointments, access your medical history, and leave reviews for your doctors.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
