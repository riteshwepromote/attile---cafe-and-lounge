import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const categories = [
  "All",
  "Indoor Seating",
  "Luxury Lounge",
  "Dining Area",
  "Coffee Corner",
  "Private Events",
  "Evening Ambience"
];

const galleryItems = [
  {
    id: 1,
    category: "Indoor Seating",
    title: "Indoor Dining",
    desc: "Elegant seating designed for memorable gatherings.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    offset: -30, // Pixel offset for premium depth positioning
    className: "md:col-span-6 lg:col-span-4 h-[400px] md:h-[460px]"
  },
  {
    id: 2,
    category: "Luxury Lounge",
    title: "The Velvet Lounge",
    desc: "Plush, intimate spaces tailored for late-night conversations.",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=800",
    offset: 40,
    className: "md:col-span-6 lg:col-span-4 h-[450px] md:h-[540px] md:mt-12 lg:mt-0"
  },
  {
    id: 3,
    category: "Coffee Corner",
    title: "The Espresso Bar",
    desc: "A fragrant sanctuary built for quiet focus or casual mornings.",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=800",
    offset: -10,
    className: "md:col-span-6 lg:col-span-4 h-[400px] md:h-[480px]"
  },
  {
    id: 4,
    category: "Dining Area",
    title: "Grand Dining Hall",
    desc: "Impeccable table setups matching culinary precision.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    offset: 25,
    className: "md:col-span-6 lg:col-span-6 h-[400px] md:h-[500px]"
  },
  {
    id: 5,
    category: "Evening Ambience",
    title: "Twilight Luminescence",
    desc: "Golden-hour lighting transformations that set a mystical mood.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
    offset: -20,
    className: "md:col-span-6 lg:col-span-6 h-[400px] md:h-[500px]"
  }
];

// Reusable Parallax Card to completely prevent component overlapping layout loops
function GalleryCard({ item, globalScrollY }) {
  // Translate the global container scroll percentage values directly to elegant pixel translations
  const yParallax = useTransform(globalScrollY, [0, 1], [0, item.offset]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ y: yParallax }}
      className={`relative rounded-3xl overflow-hidden shadow-md group cursor-pointer border border-black/5 ${item.className}`}
    >
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-full object-cover transform transition-transform duration-[1.4s] ease-[0.16,1,0.3,1] group-hover:scale-105" 
      />
      
      {/* Interactive Overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-[2px] flex flex-col justify-end p-8 text-left items-start gap-2 z-10">
        <span className="font-['Inter'] text-[10px] uppercase tracking-[0.2em] text-[#C8A04F]">{item.category}</span>
        <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold text-white tracking-wide">{item.title}</h3>
        <p className="font-['Inter'] text-xs text-white/80 max-w-xs font-light leading-relaxed">{item.desc}</p>
        <button className="mt-2 font-['Inter'] text-[10px] uppercase tracking-[0.15em] border border-white/30 px-4 py-2 rounded-full text-white bg-white/10 hover:bg-white/20 transition-colors">
          View Full Image
        </button>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const containerRef = useRef(null);

  // Hook into target native scroll mapping safely across any viewport state environment
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div 
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#F7F3EA] overflow-hidden pt-20 md:pt-32 pb-16 flex flex-col justify-between"
    >
      {/* Header Narrative Architecture */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center gap-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2"
        >
          <span className="font-['Inter'] text-xs font-bold uppercase tracking-[0.3em] text-[#70763D]">
            Our Ambience
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-['Cormorant_Garamond'] text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1A1A] leading-tight"
        >
          Designed For Moments <br />
          <span className="italic text-[#70763D]">Worth Remembering</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-['Inter'] text-sm md:text-base text-[#4D342C]/70 max-w-xl font-light leading-relaxed mt-1"
        >
          Every corner of ATTILA is thoughtfully curated to craft an architectural atmosphere that feels welcoming, elegant, and timeless.
        </motion.p>

        {/* Premium Scroll Filter Interface */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full flex items-center justify-start md:justify-center gap-2 md:gap-4 overflow-x-auto pb-4 mt-8 no-scrollbar scroll-smooth"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-['Inter'] uppercase tracking-widest whitespace-nowrap transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-[#70763D] border-[#70763D] text-white'
                  : 'bg-white/40 border-black/5 text-[#1A1A1A] hover:bg-white/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Gallery Layout Workspace */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mt-16 lg:mt-24 z-10 relative">
        
        {/* Floating Luxury Glass Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="absolute top-[-60px] right-12 z-20 hidden lg:flex items-center gap-6 border border-white/40 bg-white/20 backdrop-blur-xl p-5 rounded-2xl shadow-xl max-w-sm"
        >
          <div className="text-left">
            <div className="text-[#C8A04F] text-xs tracking-widest mb-0.5">★★★★★</div>
            <div className="font-['Cormorant_Garamond'] text-xl font-bold text-[#1A1A1A]">4.8 Guest Rating</div>
            <p className="font-['Inter'] text-[10px] text-[#4D342C]/70 uppercase tracking-wide">5000+ Premium Experiences</p>
          </div>
        </motion.div>

        {/* Desktop Presentation: Balanced, Stable Grid Track Layer */}
        <motion.div 
          layout
          className="hidden md:grid grid-cols-12 gap-8 items-start min-h-[600px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <GalleryCard 
                key={item.id} 
                item={item} 
                globalScrollY={scrollYProgress} 
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mobile Presentation: Clean Horizontal Swipe Carousel Container */}
        <div className="flex md:hidden gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory no-scrollbar">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="w-[85vw] shrink-0 snap-center rounded-3xl overflow-hidden relative h-[420px] shadow-lg border border-black/5"
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 flex flex-col justify-end text-left items-start gap-1">
                <span className="font-['Inter'] text-[9px] uppercase tracking-widest text-[#C8A04F]">{item.category}</span>
                <h3 className="font-['Cormorant_Garamond'] text-xl font-bold text-white">{item.title}</h3>
                <p className="font-['Inter'] text-xs text-white/70 font-light leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Central Wide Editorial Masterpiece Showcase Banner */}
      {activeCategory === "All" && (
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mt-24 md:mt-32 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[320px] md:h-[450px] rounded-[32px] overflow-hidden group shadow-xl border border-black/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=1200" 
              alt="Experience Attila" 
              className="w-full h-full object-cover transform transition-transform duration-[1.6s] ease-[0.16, 1, 0.3, 1] group-hover:scale-102"
            />
            <div className="absolute inset-0 bg-black/45 z-0" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 gap-3 z-10 text-white">
              <h3 className="font-['Cormorant_Garamond'] text-3xl md:text-5xl tracking-wide font-medium">Experience ATTILA</h3>
              <p className="font-['Inter'] text-xs md:text-sm font-light tracking-wide text-white/80 max-w-md">
                Where dynamic premium dining ecosystems integrate harmoniously alongside mesmerizing high-end modern design elements.
              </p>
              <motion.button 
                whileHover={{ y: -2 }}
                className="mt-4 font-['Inter'] text-xs font-medium tracking-widest uppercase bg-[#70763D] hover:bg-[#5B6132] px-8 py-3.5 rounded-full shadow-lg transition-colors border border-[#70763D]"
              >
                Explore More
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Section Transition Anchor Platform */}
      <div className="w-full text-center mt-24 md:mt-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-3 cursor-pointer"
          onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <h4 className="font-['Cormorant_Garamond'] text-2xl md:text-4xl italic text-[#1A1A1A] font-medium tracking-wide">
            "Great Ambience Deserves Great Food"
          </h4>
          <div className="flex items-center gap-2 text-[#70763D] font-['Inter'] text-[10px] uppercase tracking-[0.25em] font-bold mt-1">
            <span>Discover Signature Menu</span>
            <span className="animate-bounce">↓</span>
          </div>
        </motion.div>
      </div>

    </div>
  );
}