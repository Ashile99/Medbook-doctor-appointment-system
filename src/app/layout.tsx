import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";
import CursorGradient from "@/components/shared/CursorGradient";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MedBook | Doctor Appointment & Rating System",
  description: "Book appointments with top doctors, read reviews, and manage your health seamlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full bg-transparent text-[#102A43] relative z-0 flex flex-col">
        <CursorGradient />
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="w-full bg-transparent min-h-screen relative overflow-x-hidden md:pb-8 flex-grow">
          {children}
        </div>
        <div className="md:hidden">
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
