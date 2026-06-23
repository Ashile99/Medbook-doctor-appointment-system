import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-color/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.png`} alt="MedBook Logo" width={180} height={40} className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-text-muted mb-6">
              Book appointments with top doctors, read reviews, and manage your health seamlessly with MedBook.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-text-main mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-text-muted hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/doctors" className="text-text-muted hover:text-primary transition-colors">Find Doctors</Link></li>
              <li><Link href="/how-it-works" className="text-text-muted hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link href="/about" className="text-text-muted hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-text-muted hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-text-main mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/legal/terms" className="text-text-muted hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/legal/privacy" className="text-text-muted hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/legal/cookies" className="text-text-muted hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-text-main mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="text-text-muted">support@medbook.com</li>
              <li className="text-text-muted">+1 (555) 123-4567</li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-text-main mb-6">Newsletter</h3>
            <p className="text-text-muted text-sm mb-4">Subscribe to get health tips and updates.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2.5 bg-bg-main rounded-xl border border-border-color/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
              />
              <button 
                type="button" 
                className="w-full bg-primary hover:bg-[#007A83] text-white py-2.5 rounded-xl font-medium transition-all text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border-color/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} MedBook. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="w-8 h-8 rounded-full bg-bg-main flex items-center justify-center text-text-muted hover:text-primary hover:bg-primary/10 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </Link>
            <Link href="#" className="w-8 h-8 rounded-full bg-bg-main flex items-center justify-center text-text-muted hover:text-primary hover:bg-primary/10 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
