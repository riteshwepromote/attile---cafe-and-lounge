import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqItems = [
  { q: "Do I need a reservation?", a: "While we always welcome walk-in guests, we highly recommend securing a formal table reservation ahead of time—especially during weekends and evening prime hours—to guarantee an optimal structural dining placement." },
  { q: "Can I host private events?", a: "Absolutely. ATTILA features customizable modular structural layouts designed explicitly for private milestones, intimate celebrations, birthdays, and silver jubilees paired with custom catering frameworks." },
  { q: "Do you offer corporate bookings?", a: "Yes, we offer premium multi-tier corporate dining arrays, networking lunch matrices, and full-venue structural buyouts configured with tailored acoustic environments." },
  { q: "What are your operating hours?", a: "We are open gracefully every single day from Monday through Sunday, beginning from 11:00 AM until 11:00 PM." }
];

const quickActions = [
  { title: "Reserve A Table", desc: "Secure your high-end dining slot instantly.", action: "Book Table" },
  { title: "Host An Event", desc: "Design a private custom luxury milestone.", action: "Plan Event" },
  { title: "Call Us Now", desc: "Connect directly with our corporate desk.", action: "+91 XXXXX XXXXX" }
];

const mockInstaPosts = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=400"
];

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', subject: 'General Inquiry', date: '', guests: '', message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hospitality Lead Captured:", formData);
    alert("Thank you. Your premium inquiry dataset has been indexed safely. Our guest relations host will reach out to you shortly.");
  };

  return (
    <div className="w-full bg-[#F7F3EA] text-[#1A1A1A] font-['Inter'] relative overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center text-center px-6 bg-[#4D342C]">
        <div className="absolute inset-0 w-full h-full opacity-40 select-none pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1600" 
            alt="Attila Luxury Environment" 
            className="w-full h-full object-cover transform scale-102" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#F7F3EA]" />

        <div className="relative z-10 max-w-3xl flex flex-col items-center gap-6 text-[#F7F3EA]">
          <motion.span 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-[0.4em] text-[#C8A04F]"
          >
            Contact Attila
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-light tracking-tight text-white"
          >
            Let's Connect
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xs md:text-sm text-[#F7F3EA]/90 font-light max-w-md tracking-wide leading-relaxed"
          >
            Whether you are coordinating an exquisite weekend evening visit, reserving an elite table, or engineering a custom private event setup, we are ready to welcome you.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-2"
          >
            <a href="tel:+91XXXXXXXXXX" className="bg-[#70763D] hover:bg-[#5B6132] text-white px-8 py-3.5 rounded-full text-xs font-medium uppercase tracking-widest transition-all shadow-lg">
              Call Now
            </a>
            <button onClick={() => document.getElementById('map-viewport').scrollIntoView({ behavior: 'smooth' })} className="border border-white/30 hover:bg-white/10 backdrop-blur-md text-white px-8 py-3.5 rounded-full text-xs font-medium uppercase tracking-widest transition-all shadow-lg">
              Get Directions
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTACT INFORMATION PLATFORM */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Card: Structural Address Metrics */}
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -30 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="bg-white p-8 md:p-12 rounded-[32px] border border-black/[0.03] shadow-sm text-left flex flex-col gap-8 justify-between"
        >
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#70763D]">Destination Metrics</span>
            <h3 className="font-['Cormorant_Garamond'] text-3xl font-bold text-[#1A1A1A]">Contact Details</h3>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <span className="text-xl">📍</span>
              <div>
                <h4 className="text-xs font-bold uppercase text-[#4D342C]/50 tracking-wider mb-1">Our Location</h4>
                <p className="font-['Cormorant_Garamond'] text-lg text-[#1A1A1A] font-medium leading-snug">
                  Building No. 512, Model Town <br /> Yamunanagar, Haryana 135001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-xl">📞</span>
              <div>
                <h4 className="text-xs font-bold uppercase text-[#4D342C]/50 tracking-wider mb-1">Direct Desk Connection</h4>
                <p className="text-sm font-semibold text-[#1A1A1A] tracking-wider">+91 XXXXX XXXXX</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-xl">✉️</span>
              <div>
                <h4 className="text-xs font-bold uppercase text-[#4D342C]/50 tracking-wider mb-1">Electronic Mail Node</h4>
                <p className="text-sm text-[#70763D] font-medium underline">hello@attila.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Card: Opening Timeline Matrix */}
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 30 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="bg-white p-8 md:p-12 rounded-[32px] border border-black/[0.03] shadow-sm text-left flex flex-col gap-8 justify-between"
        >
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#70763D]">Availability Space</span>
            <h3 className="font-['Cormorant_Garamond'] text-3xl font-bold text-[#1A1A1A]">Opening Hours</h3>
          </div>

          <div className="bg-[#F7F3EA]/50 rounded-2xl p-6 border border-black/[0.02] flex flex-col gap-4">
            <div className="flex justify-between items-center pb-3 border-b border-black/[0.05]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#4D342C]">Monday - Sunday</span>
              <span className="text-xs font-bold text-[#70763D]">11:00 AM – 11:00 PM</span>
            </div>
            <div className="flex justify-between items-center text-[#70763D]">
              <span className="text-[10px] font-bold uppercase tracking-widest">Status Matrix</span>
              <span className="text-xs italic font-medium">Open Gracefully Every Single Day</span>
            </div>
          </div>

          <p className="text-xs font-light text-[#4D342C]/60 leading-relaxed">
            Our structural kitchen operations cease processing dynamic culinary order configurations precisely 30 minutes before official closing parameters.
          </p>
        </motion.div>
      </section>

      {/* 3. INTERACTIVE LOCATION VIEWPORT */}
      <section id="map-viewport" className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-24 text-center">
        <div className="flex flex-col items-center gap-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#70763D]">Geographic Anchor</span>
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-5xl font-medium text-[#1A1A1A]">Find Us In The City</h2>
          <div className="w-12 h-[1px] bg-[#C8A04F] mt-2" />
        </div>

        {/* Stable High-End Embedded Map Track Container */}
        <div className="w-full h-[350px] md:h-[480px] rounded-[32px] overflow-hidden border border-black/[0.05] shadow-md relative bg-white">
          <iframe 
            title="Attila Yamunanagar Location Blueprint"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.446522513473!2d77.2800366!3d30.138722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ef9923831872f%3A0x6eefcfd799df4d2d!2sModel%20Town%2C%20Yamuna%20Nagar%2C%20Haryana%20135001!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
            className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
            allowFullScreen="" 
            loading="lazy" 
          />
        </div>
        
        <div className="max-w-2xl mx-auto mt-8 flex flex-col items-center gap-4">
          <p className="text-xs md:text-sm text-[#4D342C]/80 font-light leading-relaxed">
            Nestled directly within the absolute epicenter of **Model Town**, ATTILA functions as a high-end dynamic gastronomy landmark inside one of Yamunanagar's most vibrant structural zones.
          </p>
          <a 
            href="https://maps.google.com" target="_blank" rel="noreferrer"
            className="text-xs font-bold text-[#70763D] uppercase tracking-widest border-b border-[#70763D] pb-1 hover:text-[#5B6132] transition-colors"
          >
            Get Directions →
          </a>
        </div>
      </section>

      {/* 4. RESERVATION & INQUIRY SECURE FORM */}
      <section className="w-full bg-white py-24 border-t border-b border-black/[0.02]">
        <div className="w-full max-w-3xl mx-auto px-6">
          <div className="bg-[#F7F3EA]/40 rounded-[32px] border border-black/[0.03] p-8 md:p-12 shadow-xl flex flex-col gap-8 text-left">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#70763D]">Communications Portal</span>
              <h2 className="font-['Cormorant_Garamond'] text-3xl font-bold text-[#1A1A1A]">Send Us A Message</h2>
              <p className="text-xs text-[#4D342C]/60 font-light">Initialize a high-priority connection sequence parameter channel down below.</p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold tracking-wider text-[#4D342C]/70">Full Name</label>
                <input type="text" required placeholder="John Doe" value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})} className="w-full border border-black/10 rounded-xl px-4 py-3.5 text-xs bg-white focus:outline-none focus:border-[#70763D]" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold tracking-wider text-[#4D342C]/70">Phone Number</label>
                <input type="tel" required placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={(e)=>setFormData({...formData, phone: e.target.value})} className="w-full border border-black/10 rounded-xl px-4 py-3.5 text-xs bg-white focus:outline-none focus:border-[#70763D]" />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[10px] uppercase font-bold tracking-wider text-[#4D342C]/70">Email Address</label>
                <input type="email" required placeholder="john@example.com" value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})} className="w-full border border-black/10 rounded-xl px-4 py-3.5 text-xs bg-white focus:outline-none focus:border-[#70763D]" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold tracking-wider text-[#4D342C]/70">Inquiry Context Subject</label>
                <select value={formData.subject} onChange={(e)=>setFormData({...formData, subject: e.target.value})} className="w-full border border-black/10 rounded-xl px-4 py-3.5 text-xs bg-white focus:outline-none focus:border-[#70763D]">
                  <option value="General Inquiry">General Hospitality Inquiry</option>
                  <option value="Table Reservation">Table Slot Allocation</option>
                  <option value="Private Booking">Private Event Master Formulation</option>
                  <option value="Corporate Event">Corporate Buying Framework</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold tracking-wider text-[#4D342C]/70">Number of Guests (Optional)</label>
                <input type="number" placeholder="e.g. 4" value={formData.guests} onChange={(e)=>setFormData({...formData, guests: e.target.value})} className="w-full border border-black/10 rounded-xl px-4 py-3.5 text-xs bg-white focus:outline-none focus:border-[#70763D]" />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[10px] uppercase font-bold tracking-wider text-[#4D342C]/70">Preferred Timing Target (Optional)</label>
                <input type="date" value={formData.date} onChange={(e)=>setFormData({...formData, date: e.target.value})} className="w-full border border-black/10 rounded-xl px-4 py-3.5 text-xs bg-white focus:outline-none focus:border-[#70763D]" />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[10px] uppercase font-bold tracking-wider text-[#4D342C]/70">Message Vector Narrative</label>
                <textarea rows="4" placeholder="Detail your exact dimensional requests safely here..." value={formData.message} onChange={(e)=>setFormData({...formData, message: e.target.value})} className="w-full border border-black/10 rounded-xl px-4 py-3.5 text-xs bg-white focus:outline-none focus:border-[#70763D] resize-none" />
              </div>

              <button type="submit" className="md:col-span-2 w-full bg-[#70763D] hover:bg-[#5B6132] text-white text-xs font-semibold uppercase tracking-widest py-4 rounded-xl shadow-md transition-colors mt-2">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 5. QUICK ACTION CARDS */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickActions.map((act, idx) => (
            <motion.div 
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(112,118,61,0.15)" }}
              key={idx}
              className="p-8 rounded-2xl bg-white border border-black/[0.03] shadow-sm text-left flex flex-col justify-between items-start h-[200px] group cursor-pointer transition-all duration-300"
            >
              <div className="flex flex-col gap-2">
                <h4 className="font-['Cormorant_Garamond'] text-2xl font-bold text-[#1A1A1A] tracking-wide">{act.title}</h4>
                <p className="text-xs text-[#4D342C]/60 font-light">{act.desc}</p>
              </div>
              <span className="text-xs font-bold text-[#70763D] uppercase tracking-wider group-hover:underline">
                {act.action} →
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. SOCIAL MEDIA SYNC ARCHIVE */}
      <section className="w-full bg-white py-24 border-t border-b border-black/[0.02]">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="flex flex-col items-center gap-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#70763D]">Digital Sync</span>
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-5xl font-medium text-[#1A1A1A]">Stay Connected</h2>
            <div className="w-12 h-[1px] bg-[#C8A04F] mt-2" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mockInstaPosts.map((src, index) => (
              <div key={index} className="rounded-2xl overflow-hidden aspect-square relative group cursor-pointer border border-black/5 shadow-sm">
                <img src={src} alt="Attila Social Stream" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest border border-white/30 px-4 py-2 rounded-full bg-white/10">
                    View Post →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ ACCORDION FRAMEWORK */}
      <section className="w-full max-w-4xl mx-auto px-6 py-24">
        <div className="flex flex-col items-center gap-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#70763D]">Inquiry Resolution</span>
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-5xl font-medium text-[#1A1A1A]">Frequently Asked Questions</h2>
          <div className="w-12 h-[1px] bg-[#C8A04F] mt-2" />
        </div>

        <div className="flex flex-col gap-4 text-left">
          {faqItems.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              className="bg-white rounded-2xl border border-black/[0.03] shadow-sm p-6 cursor-pointer group transition-all"
            >
              <div className="w-full flex items-center justify-between">
                <h3 className="font-['Cormorant_Garamond'] text-lg md:text-xl font-bold text-[#1A1A1A] group-hover:text-[#70763D] transition-colors">
                  {item.q}
                </h3>
                <span className="text-xl font-light text-[#70763D]">
                  {activeFaq === idx ? "−" : "+"}
                </span>
              </div>
              <AnimatePresence>
                {activeFaq === idx && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                    className="text-xs text-[#4D342C]/70 font-light leading-relaxed mt-4 pt-4 border-t border-black/[0.03]"
                  >
                    {item.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FINAL CINEMATIC CALL TO ACTION */}
      <section className="relative py-32 px-6 text-center bg-[#4D342C] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25 pointer-events-none select-none">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200" alt="Warm Hospitality Ambience" className="w-full h-full object-cover blur-[1px]" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C8A04F]">Exquisite Encounters</span>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-medium tracking-wide">Ready To Experience ATTILA?</h2>
          <p className="text-xs text-white/80 font-light max-w-md leading-relaxed">
            Secure your table reservation today and allow our culinary operations team to map out customized premium memories tailored exclusively around your group.
          </p>
          <button className="mt-2 bg-[#C8A04F] hover:bg-[#b08b40] text-white px-10 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors shadow-xl">
            Reserve Now
          </button>
        </div>
      </section>

      {/* 9. GLOBAL SYSTEM FOOTER */}
      

    </div>
  );
}