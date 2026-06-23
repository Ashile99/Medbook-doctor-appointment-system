'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';

export default function ForgotPassword() {
  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Password reset link has been sent to your email.');
  };

  return (
    <div className="min-h-[100dvh] bg-bg-main flex items-center justify-center py-10 px-4">
      <div className="bg-white rounded-[2.5rem] shadow-xl shadow-primary/5 border border-border-color/30 w-full max-w-lg overflow-hidden p-8 sm:p-12 flex flex-col justify-center">
        <div className="mb-10 text-center">
          <Link href="/" className="inline-block mb-8">
            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.png`} alt="MedBook" width={160} height={40} className="h-8 w-auto mx-auto" />
          </Link>
          <h1 className="text-3xl font-bold text-text-main mb-2">Reset Password</h1>
          <p className="text-text-muted">Enter your email address and we&apos;ll send you a link to reset your password.</p>
        </div>

        <form className="space-y-6" onSubmit={handleReset}>
          <div>
            <label className="block text-sm font-medium text-text-main mb-2">Email Address</label>
            <div className="relative text-text-muted focus-within:text-primary">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="w-5 h-5" />
              </div>
              <input 
                type="email" 
                placeholder="john@example.com" 
                required
                className="w-full pl-11 pr-4 py-4 bg-bg-main rounded-2xl border border-border-color/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-main"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="flex items-center justify-center w-full bg-primary hover:bg-[#007A83] text-white py-4 rounded-2xl font-semibold transition-all shadow-md shadow-primary/20 mt-4"
          >
            Send Reset Link
          </button>
        </form>

        <p className="text-center text-text-muted mt-8 font-medium">
          Remembered your password?{' '}
          <Link href="/login" className="text-primary hover:underline">
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
}
