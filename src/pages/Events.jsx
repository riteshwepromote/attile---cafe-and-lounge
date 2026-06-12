import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- STUB DATA FOR PREMIUM CONTENT ---
const upcomingEvents = [
  { id: 1, title: "Artisanal Mango Festival", date: "25 June 2026", time: "06:00 PM onwards", desc: "A seasonal celebration featuring handcrafted mango-infused culinary masterpieces and specialized mocktails.", img: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=600" },
  { id: 2, title: "Acoustic Twilight Session", date: "02 July 2026", time: "07:30 PM onwards", desc: "Unwind with live, premium soulful acoustic performances by raw independent local artists.", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=600" },
  { id: 3, title: "Exotic Mixology Workshop", date: "12 July 2026", time: "04:00 PM onwards", desc: "An exclusive, intimate masterclass led by signature mixologists on structural beverage pairing physics.", img: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=600" }
];

const categories = [
  { id: "cat1", title: "Intimate Birthdays", size: "md:col-span-6 h-[300px]", img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=600" },
  { id: "cat2", title: "Elite Anniversaries", size: "md:col-span-6 h-[300px]", img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600" },
  { id: "cat3", title: "Bespoke Corporate Gatherings", size: "md:col-span-4 h-[350px]", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600" },
  { id: "cat4", title: "Live Music Nights", size: "md:col-span-8 h-[350px]", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800" },
  { id: "cat5", title: "Exclusive Private Parties", size: "md:col-span-12 h-[380px]", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200" }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1505232458627-a727263d7194?auto=format&fit=crop&q=80&w=600"
];

const pastHighlights = [
  { year: "2026", event: "Sufi & Ghazal Soiree", detail: "An elegant evening featuring dynamic authentic candlelit performances paired with traditional artisan tasting menus." },
  { year: "2025", event: "Grand New Year Gala", detail: "A premium black-tie structural countdown experience mapping luxury cocktails and fine dining gastronomy fields." },
  { year: "2025", event: "Curated Valentine's Week", detail: "Intimate, high-end private cabana dining arrangements coupled with customized hyper-personalized gifts." },
  { year: "2024", event: "The Coffee Pour Championships", detail: "A high-stakes regional gathering bringing together specialized baristas demonstrating complex microfoam pouring art structures." }
];

const valueProps = [
  { title: "Premium Ambience", desc: "Architecturally layered lighting systems configured perfectly alongside tailored luxury acoustics." },
  { title: "Custom Menu Arrays", desc: "Bespoke fine dining food formulations matching any structural dietary profile seamlessly." },
  { title: "Dedicated Venue Spaces", desc: "Versatile modular configurations prioritizing high privacy optimization controls." },
  { title: "Professional Service", desc: "Highly trained corporate waitstaff execution tracking rigorous operational hospitality frameworks." },
  { title: "Prime Location", desc: "Nestled beautifully within the elite, high-accessibility domain of Model Town, Yamunanagar." },
  { title: "Memorable Experiences", desc: "An upscale atmospheric matrix designed to convert milestones directly into permanent dynamic legacies." }
];

export default function Events() {
  const [lightboxImg, setLightboxImg] = useState(null);
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', eventType: 'Birthday', guests: '', date: '', message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Premium Lead Captured Successfully:", formData);
    alert("Your luxury event inquiry has been captured. Our dedicated experiential coordinator will connect shortly.");
  };

  return (
    <div className="w-full bg-[#F7F3EA] text-[#1A1A1A] font-['Inter'] relative overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-black">
        {/* Abstract Cinematic Backdrop Layer (Uses static premium media asset safely) */}
        <div className="absolute inset-0 w-full h-full opacity-60 select-none pointer-events-none mix-blend-lighten">
          <img 
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1600" 
            alt="Attila Event Energy" 
            className="w-full h-full object-cover scale-105 animate-pulse" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#F7F3EA]" />
        
        <div className="relative z-10 max-w-4xl flex flex-col items-center gap-6 text-[#F7F3EA]">
          <motion.span 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-[0.4em] text-[#C8A04F]"
          >
            Attila Events
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Cormorant_Garamond'] text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1]"
          >
            Host Extraordinary Events <br />
            <span className="italic font-normal text-[#C8A04F]">Let's Make It Unforgettable.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-base text-[#F7F3EA]/80 font-light max-w-xl tracking-wide leading-relaxed"
          >
            From intimate birthday celebrations to corporate milestones and grand cocktail galas, we curate high-end atmospheric spaces that turn every event into an absolute masterpiece.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <button 
              onClick={() => document.getElementById('inquiry-form').scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#70763D] hover:bg-[#5B6132] border border-[#70763D] text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors shadow-lg"
            >
              Plan Your Event
            </button>
            <button 
              onClick={() => document.getElementById('inquiry-form').scrollIntoView({ behavior: 'smooth' })}
              className="border border-[#F7F3EA]/30 hover:bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors shadow-lg"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. UPCOMING EVENTS */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 text-center">
        <div className="flex flex-col items-center gap-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#70763D]">Calendar Matrix</span>
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-5xl font-medium text-[#1A1A1A]">Upcoming Experiences</h2>
          <div className="w-12 h-[1px] bg-[#C8A04F] mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map((evt) => (
            <motion.div 
              whileHover={{ y: -6 }} key={evt.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-black/[0.04] p-4 flex flex-col justify-between text-left transition-all duration-300 hover:shadow-md"
            >
              <div className="rounded-2xl overflow-hidden h-[240px] relative group">
                <img src={evt.img} alt={evt.title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-[#70763D] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full shadow-md">
                  {evt.date}
                </div>
              </div>
              <div className="pt-6 px-2 flex flex-col gap-2">
                <span className="text-[10px] font-semibold text-[#C8A04F] uppercase tracking-wider">{evt.time}</span>
                <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold text-[#1A1A1A] leading-tight">{evt.title}</h3>
                <p className="text-xs text-[#4D342C]/70 font-light leading-relaxed mt-1">{evt.desc}</p>
              </div>
              <div className="pt-6 px-2 pb-2">
                <button 
                  onClick={() => document.getElementById('inquiry-form').scrollIntoView({ behavior: 'smooth' })}
                  className="text-xs font-bold text-[#70763D] uppercase tracking-widest flex items-center gap-2 group"
                >
                  <span>Request Invites</span>
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. CELEBRATE AT ATTILA */}
      <section className="w-full bg-white py-24 overflow-hidden border-t border-b border-black/[0.02]">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col items-start gap-6 text-left">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#70763D]">Curated Venues</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl lg:text-6xl font-medium text-[#1A1A1A] leading-tight">
              Every Celebration Deserves The Perfect Setting.
            </h2>
            <p className="text-sm md:text-base text-[#4D342C]/80 font-light leading-relaxed max-w-xl">
              Whether you are organizing an intimate silver jubilee anniversary, a dynamic corporate networking seminar, or a milestone birthday party, ATTILA delivers unparalleled structural execution. We harmonize spatial planning, custom gourmet menu creation, and specialized signature service under one single production framework.
            </p>
            <div className="flex items-center gap-6 mt-4 border-t border-black/[0.05] pt-6 w-full">
              <div>
                <h4 className="font-['Cormorant_Garamond'] text-2xl font-bold text-[#70763D]">150+</h4>
                <p className="text-[10px] font-medium uppercase tracking-wider text-[#4D342C]/60">Successful Events</p>
              </div>
              <div className="w-[1px] h-8 bg-black/10" />
              <div>
                <h4 className="font-['Cormorant_Garamond'] text-2xl font-bold text-[#70763D]">100%</h4>
                <p className="text-[10px] font-medium uppercase tracking-wider text-[#4D342C]/60">Bespoke Tailoring</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 relative h-[450px] md:h-[550px] w-full flex items-center justify-center">
            <div className="absolute top-0 right-0 w-[65%] h-[60%] rounded-3xl overflow-hidden shadow-lg border border-black/5">
              <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600" alt="Platter Presentation" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 w-[60%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border border-white/80 z-10">
              <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600" alt="Luxury Gathering" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. EVENT CATEGORIES (BENTO GRID) */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 text-center">
        <div className="flex flex-col items-center gap-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#70763D]">Spatial Versatility</span>
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-5xl font-medium text-[#1A1A1A]">Our Event Ecosystem</h2>
          <div className="w-12 h-[1px] bg-[#C8A04F] mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className={`relative rounded-3xl overflow-hidden group border border-black/5 shadow-sm cursor-pointer ${cat.size}`}
            >
              <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transform transition-transform duration-[1.4s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:via-black/40" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-left items-start gap-1">
                <h3 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-medium text-white tracking-wide">{cat.title}</h3>
                <p className="text-xs text-white/70 font-light max-w-xs transform translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  Click to explore custom layouts and configuration files for this setting.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. EVENT GALLERY (MASONRY) */}
      <section className="w-full bg-white py-24 border-t border-b border-black/[0.02]">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="flex flex-col items-center gap-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#70763D]">Visual Archive</span>
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-5xl font-medium text-[#1A1A1A]">Moments We Remember</h2>
            <div className="w-12 h-[1px] bg-[#C8A04F] mt-2" />
          </div>

          <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
            {galleryImages.map((src, idx) => (
              <div 
                key={idx} 
                onClick={() => setLightboxImg(src)}
                className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm border border-black/5 cursor-pointer group relative"
              >
                <img src={src} alt="Past Attila Milestone" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-103" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                  <span className="bg-white/90 text-xs font-semibold uppercase tracking-widest text-[#1A1A1A] px-4 py-2 rounded-full shadow-lg">
                    Expand Image
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PAST EVENTS HIGHLIGHTS (TIMELINE) */}
      <section className="w-full max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="flex flex-col items-center gap-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#70763D]">Legacy Timeline</span>
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-5xl font-medium text-[#1A1A1A]">Historical Benchmarks</h2>
          <div className="w-12 h-[1px] bg-[#C8A04F] mt-2" />
        </div>

        <div className="relative border-l border-[#C8A04F]/40 ml-4 md:ml-32 text-left space-y-12">
          {pastHighlights.map((hl, index) => (
            <div key={index} className="relative pl-8 group cursor-pointer" onClick={() => setActiveTimeline(index === activeTimeline ? null : index)}>
              <div className="absolute left-[-6px] top-1.5 w-3 h-3 rounded-full bg-[#70763D] border-2 border-[#F7F3EA] transition-transform duration-300 group-hover:scale-125" />
              
              <div className="absolute left-[-110px] top-0 hidden md:block text-right w-20 font-['Cormorant_Garamond'] text-xl font-bold text-[#70763D]">
                {hl.year}
              </div>
              
              <div className="bg-white p-6 rounded-2xl border border-black/[0.04] shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="w-full flex items-center justify-between">
                  <h3 className="font-['Cormorant_Garamond'] text-xl font-bold text-[#1A1A1A] tracking-wide">{hl.event}</h3>
                  <span className="text-[#C8A04F] text-xs font-semibold uppercase tracking-widest">
                    {activeTimeline === index ? "[ Close ]" : "[ Expand ]"}
                  </span>
                </div>
                
                <AnimatePresence>
                  {activeTimeline === index && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                      className="text-xs text-[#4D342C]/70 font-light leading-relaxed mt-4 pt-4 border-t border-black/[0.03]"
                    >
                      {hl.detail}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. WHY HOST AT ATTILA */}
      <section className="w-full bg-white py-24 border-t border-b border-black/[0.02]">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="flex flex-col items-center gap-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#70763D]">Gold Standards</span>
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-5xl font-medium text-[#1A1A1A]">Why Select Our Spaces?</h2>
            <div className="w-12 h-[1px] bg-[#C8A04F] mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueProps.map((prop, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-[#F7F3EA]/40 border border-black/[0.03] text-left flex flex-col gap-3 group hover:bg-[#70763D] transition-all duration-500">
                <span className="font-['Cormorant_Garamond'] text-xl font-bold text-[#C8A04F] group-hover:text-[#F7F3EA] transition-colors">0{idx + 1} //</span>
                <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold text-[#1A1A1A] group-hover:text-white transition-colors tracking-wide">{prop.title}</h3>
                <p className="text-xs text-[#4D342C]/70 group-hover:text-white/80 transition-colors font-light leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PRIVATE EVENT BOOKING CTA */}
      <section className="relative py-32 px-6 text-center bg-[#4D342C] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none select-none">
          <img src="https://images.unsplash.com/photo-1505232458627-a727263d7194?auto=format&fit=crop&q=80&w=1200" alt="Celebration Overlay" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C8A04F]">Exclusive Reservations</span>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-medium tracking-wide">Planning A Special Gathering?</h2>
          <p className="text-xs md:text-sm text-white/80 font-light leading-relaxed max-w-md">
            Our specialized coordinators coordinate with architectural design frameworks to engineer pristine realities matching your conceptual visions.
          </p>
          <button 
            onClick={() => document.getElementById('inquiry-form').scrollIntoView({ behavior: 'smooth' })}
            className="mt-2 bg-[#C8A04F] hover:bg-[#b08b40] text-white px-10 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors shadow-xl"
          >
            Book Your Event
          </button>
        </div>
      </section>

      {/* 9. EVENT INQUIRY FORM */}
      <section id="inquiry-form" className="w-full max-w-3xl mx-auto px-6 py-24">
        <div className="bg-white rounded-[32px] border border-black/[0.04] p-8 md:p-12 shadow-xl flex flex-col gap-8 text-left">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#70763D]">Inquiry Portal</span>
            <h2 className="font-['Cormorant_Garamond'] text-3xl font-bold text-[#1A1A1A] tracking-wide">Request Event Customization</h2>
            <p className="text-xs text-[#4D342C]/60 font-light">Complete the structural dataset schema below to initialize a formal quote validation process loop.</p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold tracking-wider text-[#4D342C]/70">Full Name</label>
              <input type="text" required placeholder="John Doe" value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})} className="w-full border border-black/10 rounded-xl px-4 py-3.5 text-xs bg-[#F7F3EA]/30 focus:outline-none focus:border-[#70763D]" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold tracking-wider text-[#4D342C]/70">Phone Number</label>
              <input type="tel" required placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={(e)=>setFormData({...formData, phone: e.target.value})} className="w-full border border-black/10 rounded-xl px-4 py-3.5 text-xs bg-[#F7F3EA]/30 focus:outline-none focus:border-[#70763D]" />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-[10px] uppercase font-bold tracking-wider text-[#4D342C]/70">Email Address</label>
              <input type="email" required placeholder="john@example.com" value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})} className="w-full border border-black/10 rounded-xl px-4 py-3.5 text-xs bg-[#F7F3EA]/30 focus:outline-none focus:border-[#70763D]" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold tracking-wider text-[#4D342C]/70">Event Designation</label>
              <select value={formData.eventType} onChange={(e)=>setFormData({...formData, eventType: e.target.value})} className="w-full border border-black/10 rounded-xl px-4 py-3.5 text-xs bg-[#F7F3EA]/30 focus:outline-none focus:border-[#70763D]">
                <option value="Birthday">Intimate Birthday</option>
                <option value="Anniversary">Elite Anniversary</option>
                <option value="Corporate">Corporate Gathering</option>
                <option value="Private">Private Party / Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold tracking-wider text-[#4D342C]/70">Expected Guest Count</label>
              <input type="number" required placeholder="e.g. 50" value={formData.guests} onChange={(e)=>setFormData({...formData, guests: e.target.value})} className="w-full border border-black/10 rounded-xl px-4 py-3.5 text-xs bg-[#F7F3EA]/30 focus:outline-none focus:border-[#70763D]" />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-[10px] uppercase font-bold tracking-wider text-[#4D342C]/70">Preferred Event Date</label>
              <input type="date" required value={formData.date} onChange={(e)=>setFormData({...formData, date: e.target.value})} className="w-full border border-black/10 rounded-xl px-4 py-3.5 text-xs bg-[#F7F3EA]/30 focus:outline-none focus:border-[#70763D]" />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-[10px] uppercase font-bold tracking-wider text-[#4D342C]/70">Special Accommodations / Narrative Intent</label>
              <textarea rows="4" placeholder="Detail any specialized menu variations, dynamic decor settings or acoustic properties required..." value={formData.message} onChange={(e)=>setFormData({...formData, message: e.target.value})} className="w-full border border-black/10 rounded-xl px-4 py-3.5 text-xs bg-[#F7F3EA]/30 focus:outline-none focus:border-[#70763D] resize-none" />
            </div>

            <button type="submit" className="md:col-span-2 w-full bg-[#70763D] hover:bg-[#5B6132] text-white text-xs font-semibold uppercase tracking-widest py-4 rounded-xl shadow-md transition-colors mt-2">
              Request Event Details
            </button>
          </form>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.img 
              initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
              src={lightboxImg} alt="Expanded Vision" className="max-w-full max-h-[85vh] rounded-xl object-contain shadow-2xl" 
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}