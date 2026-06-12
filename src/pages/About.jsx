import React from 'react';
import { motion } from 'framer-motion';

// Replace these placeholders with your actual asset paths later
const images = {
  ambience: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600",
  food: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600",
  mocktail: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=500"
};

const marqueeItems = [
  "Premium Dining", "Crafted Mocktails", "Warm Hospitality", 
  "Premium Dining", "Crafted Mocktails", "Warm Hospitality"
];

// Variants for coordinated stagger effects
const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function About() {
  return (
    <div className="relative w-full min-h-screen bg-[#F7F3EA] overflow-hidden flex flex-col justify-between pt-20 md:pt-32">
      
      {/* Editorial Noise/Paper Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />

      {/* Massive Luxury Background Watermark */}
      <div className="absolute top-1/4 right-[-5%] font-['Cormorant_Garamond'] text-[140px] md:text-[200px] font-bold text-[#4D342C] opacity-[0.02] select-none pointer-events-none tracking-widest uppercase">
        Attila
      </div>

      {/* Core Responsive Workspace Container */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center z-10 my-auto">
        
        {/* Left Column: Overlapping Magazine-Style Image Array (Order altered on mobile) */}
        <div className="order-2 lg:order-1 lg:col-span-6 relative w-full h-[500px] md:h-[650px] flex items-center justify-center mt-12 lg:mt-0">
          
          {/* 1. Main Ambience Frame (Top Right Anchor) */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 right-4 w-[60%] h-[55%] rounded-2xl overflow-hidden shadow-xl border border-white/20"
          >
            <img src={images.ambience} alt="Attila Ambience" className="w-full h-full object-cover" />
          </motion.div>

          {/* 2. Signature Food Composition (Center Left Anchor) */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-16 left-0 w-[55%] h-[50%] rounded-2xl overflow-hidden shadow-2xl border border-white/30 z-10"
          >
            <img src={images.food} alt="Artisanal Dish" className="w-full h-full object-cover" />
          </motion.div>

          {/* 3. Handcrafted Cocktail Accent (Bottom Right Floating Anchor) */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-0 right-12 w-[35%] h-[35%] rounded-2xl overflow-hidden shadow-lg border border-white/20 z-10"
          >
            <img src={images.mocktail} alt="Crafted Mocktail" className="w-full h-full object-cover" />
          </motion.div>

          {/* Luxury Floating Glassmorphism Achievement Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute top-1/3 left-6 z-20 bg-white/20 backdrop-blur-xl border border-white/40 p-6 rounded-2xl shadow-xl max-w-[200px] flex flex-col gap-1.5"
          >
            <span className="text-[#C8A04F] text-xs tracking-widest">★★★★★</span>
            <h4 className="font-['Cormorant_Garamond'] text-lg font-bold text-[#1A1A1A]">Loved By Guests</h4>
            <p className="font-['Inter'] text-[10px] uppercase tracking-wider text-[#4D342C]/80 leading-relaxed">
              Premium Dining Since Day One
            </p>
          </motion.div>
        </div>

        {/* Right Column: Editorial Copy and Brand Narrative */}
        <motion.div 
          variants={textContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="order-1 lg:order-2 lg:col-span-6 flex flex-col items-start text-left gap-6"
        >
          {/* Identity Label */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="font-['Inter'] text-xs font-bold uppercase tracking-[0.25em] text-[#70763D]">
              About Attila
            </span>
            <span className="text-[#C8A04F] text-sm">✦</span>
          </motion.div>

          {/* Big Magazine-Style Header */}
          <motion.h2 
            variants={itemVariants}
            className="font-['Cormorant_Garamond'] text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1A1A1A] leading-[1.1] tracking-tight"
          >
            Crafting Memorable Dining Experiences In The Heart Of Yamunanagar.
          </motion.h2>

          {/* Narrative Body Copy */}
          <motion.div 
            variants={itemVariants}
            className="font-['Inter'] text-sm md:text-base text-[#4D342C]/90 leading-relaxed flex flex-col gap-5 max-w-xl font-light"
          >
            <p>
              Located in Model Town, Yamunanagar, <strong className="font-medium text-[#1A1A1A]">ATTILA Café & Lounge</strong> is designed to be more than just a place to dine. It is a refined destination where great culinary artistry, meaningful conversations, and a mesmerizing space come together seamlessly.
            </p>
            <p>
              From custom handcrafted beverages and flavor-packed signature dishes to thoughtfully curated interiors and warm hospitality, every micro-detail is forged to deliver an experience worth remembering.
            </p>
            <p>
              Whether you are gathering with close friends, celebrating life's milestones, or simply finding escape over a quiet espresso, ATTILA provides the ultimate ambient luxury tailored for every occasion.
            </p>
          </motion.div>

          {/* Refined Modular Stats Block */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-[#4D342C]/10 w-full mt-4"
          >
            {[
              { num: "5000+", txt: "Happy Guests" },
              { num: "75+", txt: "Signature Dishes" },
              { num: "4.8★", txt: "Average Rating" },
              { num: "Premium", txt: "Dining Space" }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="font-['Cormorant_Garamond'] text-2xl lg:text-3xl font-bold text-[#70763D]">
                  {stat.num}
                </span>
                <span className="font-['Inter'] text-[10px] uppercase tracking-wider text-[#4D342C]/70 font-medium">
                  {stat.txt}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Infinite Auto-Scrolling Luxury Marquee Divider */}
      <div className="w-full bg-[#70763D] py-5 mt-16 md:mt-24 overflow-hidden border-t border-b border-white/10 flex whitespace-nowrap select-none pointer-events-none">
        <motion.div 
          animate={{ x: [0, "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex gap-16 text-white font-['Inter'] text-xs uppercase tracking-[0.4em] font-medium px-4"
        >
          {marqueeItems.concat(marqueeItems).map((text, index) => (
            <div key={index} className="flex items-center gap-16">
              <span>{text}</span>
              <span className="text-[#C8A04F]/60 text-sm">✦</span>
            </div>
          ))}
        </motion.div>
      </div>

    </div>
  );
}