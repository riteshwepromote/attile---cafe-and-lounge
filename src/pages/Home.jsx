import React from 'react';
import { motion } from 'framer-motion';
import heroVideo from "../assets/heorVideo.mp4";

const stats = [
  { value: "5000+", label: "Happy Guests" },
  { value: "75+", label: "Signature Dishes" },
  { value: "4.8★", label: "Google Rating" },
  { value: "Premium", label: "Dining Experience" }
];

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#1A1A1A]">
      {/* Background Video Component */}
      <motion.div 
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
      >
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Cinematic Backdrop Overlay */}
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px]" />
      </motion.div>

      {/* Main Container Layer */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between pt-32 pb-8 px-6 md:px-16 max-w-[1600px] mx-auto text-[#F7F3EA]">
        
        {/* Balanced Grid Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto w-full">
          
          {/* Left Column: Premium Commercial Typography */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            
            {/* Top Badge Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F7F3EA]/20 bg-black/20 backdrop-blur-md"
            >
              <span className="text-[#C8A04F] text-xs tracking-wider">★★★★★</span>
              <span className="font-['Inter'] text-[11px] font-medium uppercase tracking-[0.15em] text-[#F7F3EA]/90">
                Yamunanagar's Premium Café Experience
              </span>
            </motion.div>

            {/* Main Luxury Headings & Narrative */}
            <div className="flex flex-col gap-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontSize: "clamp(3.5rem, 7.5vw, 7.5rem)" }}
                className="font-['Cormorant_Garamond'] font-bold leading-[0.95] tracking-tight uppercase"
              >
                Attila <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7F3EA] via-[#F7F3EA] to-[#C8A04F]/60">
                  Café & Lounge
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-['Cormorant_Garamond'] text-xl md:text-2xl lg:text-3xl font-light italic text-[#F7F3EA]/90 max-w-xl"
              >
                Where Every Meal Becomes A Story. Crafted Flavours. Beautiful Spaces. Unforgettable Moments.
              </motion.p>
            </div>

            {/* Dual High-End Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4 mt-4 w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ y: -3, backgroundColor: "#5B6132" }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="font-['Inter'] text-sm font-medium tracking-wider uppercase bg-[#70763D] text-white px-8 py-4 rounded-full shadow-lg border border-[#70763D]"
              >
                Reserve A Table
              </motion.button>
              
              <motion.button
                whileHover={{ y: -3, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="font-['Inter'] text-sm font-medium tracking-wider uppercase border border-[#F7F3EA]/30 backdrop-blur-md text-[#F7F3EA] px-8 py-4 rounded-full shadow-lg"
              >
                Explore Menu
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column: Premium Floating Review Matrix (Parallax-Ready) */}
          <div className="lg:col-span-5 hidden lg:flex justify-end relative h-[450px] w-full group">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="absolute top-1/4 right-0 max-w-sm w-full border border-white/10 backdrop-blur-xl bg-black/20 p-8 rounded-2xl shadow-2xl flex flex-col gap-3 transition-shadow duration-500 hover:shadow-black/40"
            >
              <div className="text-[#C8A04F] text-lg tracking-widest">⭐⭐⭐⭐★</div>
              <div className="font-['Cormorant_Garamond'] text-3xl font-medium tracking-wide">
                4.8 Rating
              </div>
              <p className="font-['Inter'] text-xs uppercase tracking-widest text-[#F7F3EA]/70 leading-relaxed">
                Loved by thousands of fine dining enthusiasts and guests alike.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Horizontal Layout: Brand Stats & Scroll Anchor */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 pt-6 border-t border-[#F7F3EA]/10">
          
          {/* Dynamic Data Array Block */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 w-full md:w-auto"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="font-['Cormorant_Garamond'] text-2xl lg:text-3xl font-bold tracking-wide text-[#C8A04F]">
                  {stat.value}
                </span>
                <span className="font-['Inter'] text-[10px] uppercase tracking-widest text-[#F7F3EA]/60">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Luxury Floating Animated Scroll Anchor */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: [0, 6, 0] }}
            transition={{ 
              opacity: { delay: 1.5, duration: 0.8 },
              y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
            }}
            className="flex flex-col items-center gap-2 cursor-pointer shrink-0 select-none"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="font-['Inter'] text-[9px] uppercase tracking-[0.3em] text-[#F7F3EA]/50">
              Discover Attila
            </span>
            <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-[#C8A04F] stroke-1.5">
              <path d="M6 1V17M6 17L1 12M6 17L11 12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>

      </div>
    </div>
  );
}