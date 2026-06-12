import React from 'react';
import { motion } from 'framer-motion';

const exploreLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Events", href: "#events" },
  { name: "Contact", href: "#contact" }
];

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com", icon: "📸" },
  { name: "Facebook", href: "https://facebook.com", icon: "🌐" },
  { name: "WhatsApp", href: "https://whatsapp.com", icon: "💬" },
  { name: "Google Reviews", href: "https://google.com", icon: "⭐" }
];

const instaStrip = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=300",
  "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=300",
  "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=300",
  "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=300",
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=300",
  "https://plus.unsplash.com/premium_photo-1661964122969-b97103e89b54?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhZmUlMjBsb3VuZ2V8ZW58MHx8MHx8fDA%3D"
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#1E1E1E] text-[#F7F3EA] overflow-hidden pt-24 pb-8 flex flex-col z-20">
      
      {/* 1. PRE-FOOTER EXPERIENCE / TOP CTA AREA */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center gap-6 pb-20 border-b border-white/[0.04] z-10">
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-['Inter'] font-bold uppercase tracking-[0.4em] text-[#C8A04F]"
        >
          Experience ATTILA
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-['Cormorant_Garamond'] text-4xl md:text-6xl font-light tracking-tight leading-tight max-w-3xl"
        >
          Ready For Your Next <br />
          <span className="italic text-[#C8A04F]">Memorable Experience?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-['Inter'] text-xs md:text-sm text-white/50 font-light tracking-wider"
        >
          Crafted Flavours. Warm Hospitality. Unforgettable Moments.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mt-4"
        >
          <button className="bg-[#70763D] hover:bg-[#5B6132] border border-[#70763D] text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all hover:-translate-y-1 shadow-lg">
            Reserve A Table
          </button>
          <button className="border border-white/20 hover:bg-white/5 text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all hover:-translate-y-1 backdrop-blur-sm">
            Get Directions
          </button>
        </motion.div>
      </div>

      {/* 2. MAIN 4-COLUMN FOOTER GRID */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start text-left z-10">
        
        {/* Brand Column */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold tracking-[0.15em] text-white">
            ATTILA <span className="text-xs block font-['Inter'] font-light tracking-[0.3em] text-[#C8A04F] mt-1">CAFÉ & LOUNGE</span>
          </h3>
          <p className="font-['Inter'] text-xs text-white/50 font-light leading-relaxed max-w-xs mt-2">
            Where great food, exceptionally warm hospitality, and beautiful memorable moments come together flawlessly within an upscale architectural space.
          </p>
        </div>

        {/* Explore Links Column */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <h4 className="text-[10px] font-['Inter'] uppercase tracking-[0.2em] text-[#C8A04F] font-bold">Explore</h4>
          <ul className="flex flex-col gap-2.5 text-xs font-light text-white/60 font-['Inter']">
            {exploreLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-white transition-colors duration-300 flex items-center gap-1 group">
                  <span className="opacity-0 -ml-2 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 text-[#C8A04F] text-[10px]">✦</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Infrastructure Column */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <h4 className="text-[10px] font-['Inter'] uppercase tracking-[0.2em] text-[#C8A04F] font-bold">Contact</h4>
          <div className="flex flex-col gap-3 text-xs font-light text-white/60 font-['Inter'] leading-relaxed">
            <p className="font-['Cormorant_Garamond'] text-base font-medium text-white/80 leading-snug">
              Building No. 512, Model Town <br /> Yamuna Nagar, Haryana 135001
            </p>
            <p className="tracking-wider mt-1">
              <span className="text-white/40 block text-[9px] uppercase font-bold tracking-widest mb-0.5">Phone Node</span>
              +91 XXXXX XXXXX
            </p>
            <p>
              <span className="text-white/40 block text-[9px] uppercase font-bold tracking-widest mb-0.5">Electronic Desk</span>
              <a href="mailto:hello@attila.in" className="underline hover:text-white transition-colors">hello@attila.in</a>
            </p>
          </div>
        </div>

        {/* Follow Us Column */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <h4 className="text-[10px] font-['Inter'] uppercase tracking-[0.2em] text-[#C8A04F] font-bold">Follow Us</h4>
          <div className="grid grid-cols-2 gap-3">
            {socialLinks.map((soc) => (
              <a 
                key={soc.name} 
                href={soc.href} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 text-xs font-light text-white/70 transition-all duration-300 group"
              >
                <span className="text-sm transition-transform duration-300 group-hover:scale-115 group-hover:rotate-6">
                  {soc.icon}
                </span>
                <span className="font-['Inter'] text-[11px] tracking-wide group-hover:text-white transition-colors">{soc.name}</span>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* 3. CENTER FLOATING SERIF QUOTE */}
      <div className="w-full text-center py-8 z-10 px-6">
        <p className="font-['Cormorant_Garamond'] text-xl md:text-2xl italic text-[#C8A04F]/80 font-medium tracking-wide">
          "Every Meal Is A Memory Waiting To Be Made."
        </p>
      </div>

      {/* 4. INSTAGRAM STREAM STRIP */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-10 z-10">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {instaStrip.map((img, idx) => (
            <div key={idx} className="relative rounded-xl overflow-hidden aspect-square group border border-white/[0.05] shadow-inner bg-neutral-900">
              <img src={img} alt="Attila Lifestyle Sync" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                <span className="text-[9px] font-['Inter'] font-semibold uppercase tracking-widest text-white border border-white/20 px-3 py-1.5 rounded-full bg-white/5">
                  View Post →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. METICULOUS LUXURY DIVIDER LINE */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 my-6 z-10">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C8A04F]/40 to-transparent" />
      </div>

      {/* 6. BOTTOM LEGAL COMPLIANCE BAR */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-center text-[11px] font-light text-white/30 font-['Inter'] tracking-wide z-10">
        <div>
          © 2026 <span className="text-white/50 font-normal">ATTILA Café & Lounge</span>. All rights reserved.
        </div>
        <div className="italic text-[#C8A04F]/50 font-['Cormorant_Garamond'] text-sm">
          Designed For Memorable Experiences
        </div>
        <div className="flex gap-4">
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="text-white/10">|</span>
          <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </div>

      {/* 7. GIANT BACKDROP WATERMARK TEXT WITH SLOW FLOATING ANIMATION */}
      <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 select-none pointer-events-none w-full text-center overflow-hidden h-[260px] flex items-end justify-center">
        <span 
          className="font-['Inter'] text-[14rem] md:text-[22rem] lg:text-[26rem] font-black text-white/[0.015] tracking-[0.1em] leading-none block uppercase"
          style={{
            animation: 'footerFloat 14s infinite ease-in-out'
          }}
        >
          Attila
        </span>
      </div>

      {/* INLINE CSS KEYFRAME ATJECT INJECTION FOR STABLE FLOATING SYSTEM */}
      <style>{`
        @keyframes footerFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-12px) scale(1.02); }
        }
      `}</style>

    </footer>
  );
}