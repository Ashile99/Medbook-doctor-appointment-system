'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, User } from "lucide-react";

export default function BlogPage() {
  const posts = [
    { id: 1, title: "10 Signs You Need to See a Cardiologist", category: "Heart Health", date: "Oct 12, 2023", readTime: "5 min read", img: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2072&auto=format&fit=crop" },
    { id: 2, title: "Understanding Your Skin: Dermatologist Tips", category: "Dermatology", date: "Oct 08, 2023", readTime: "4 min read", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" },
    { id: 3, title: "The Future of Telehealth and Virtual Care", category: "Technology", date: "Oct 01, 2023", readTime: "7 min read", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" },
    { id: 4, title: "Managing Anxiety in a Fast-Paced World", category: "Mental Health", date: "Sep 25, 2023", readTime: "6 min read", img: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop" },
    { id: 5, title: "Nutrition Myths Debunked by Experts", category: "Diet & Nutrition", date: "Sep 18, 2023", readTime: "5 min read", img: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1932&auto=format&fit=crop" },
    { id: 6, title: "Why Regular Pediatric Checkups Matter", category: "Pediatrics", date: "Sep 12, 2023", readTime: "4 min read", img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop" }
  ];

  return (
    <div className="min-h-[100dvh] bg-transparent pt-24 pb-24 font-sans overflow-hidden relative">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#F8FAFC]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#007A83]/15 via-white/40 to-[#102A43]/10 backdrop-blur-[3px]" />
      </div>

      <main className="px-6 relative z-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#102A43] leading-tight mb-6">
            Health & Wellness <span className="text-primary">Blog</span>
          </h1>
          <p className="text-[#627D98] text-[15px] md:text-xl max-w-2xl mx-auto">
            Insights, tips, and the latest news from medical experts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white/50 backdrop-blur-xl rounded-3xl overflow-hidden shadow-sm border border-white/60 hover:shadow-lg transition-all group flex flex-col"
            >
              <div className="h-56 overflow-hidden relative">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-bold text-[#102A43] mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <div className="flex items-center gap-4 text-xs text-[#627D98] mt-auto pt-4 border-t border-border-color/30">
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> MedBook Staff</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </main>
    </div>
  );
}
