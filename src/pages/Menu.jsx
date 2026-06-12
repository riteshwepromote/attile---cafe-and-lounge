import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuCategories = [
  "Signature Dishes",
  "Mocktails",
  "Coffee",
  "Desserts"
];

const menuData = {
  "Signature Dishes": {
    featuredImg: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "Chef's Special Pasta", desc: "Artisanal penne tossed in an authentic slow-simmered rich truffle cream matrix.", price: "₹389", tag: "Chef's Pick" },
      { name: "Loaded Nachos", desc: "Crisp stone-ground corn tortillas smothered in premium melted cheeses and fresh pit salsa.", price: "₹299" },
      { name: "Artisanal Sizzlers", desc: "Sizzling hot platter featuring grilled garden greens, herbed rice, and custom choice glaze.", price: "₹449" },
      { name: "Signature Ultimate Burger", desc: "Flame-grilled house patty stacked with sharp cheddar, crisp heirloom greens, and secret sauce.", price: "₹349" }
    ]
  },
  "Mocktails": {
    featuredImg: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "Blue Lagoon", desc: "A vibrant blend of blue curaçao, fresh squeezed key lime, and premium sparkling tonic water.", price: "₹189" },
      { name: "Classic Virgin Mojito", desc: "Crushed field mint leaves and fresh lime wedges muddled raw with pure cane sugar and club soda.", price: "₹179" },
      { name: "Wild Berry Blast", desc: "An architectural infusion of wild strawberries, sweet raspberries, and deep blackberries.", price: "₹219", tag: "Must Try" },
      { name: "Tropical Fusion", desc: "Exotic layers of cold-pressed mango, clean passionfruit, and fresh pineapple juice splash.", price: "₹199" }
    ]
  },
  "Coffee": {
    featuredImg: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "Signature Espresso", desc: "Rich and complex double shot pulled meticulously from premium single-origin Arabica beans.", price: "₹129" },
      { name: "Classic Cappuccino", desc: "Perfect equilibrium of dense espresso, steamed whole milk, and a deep layer of velvety micro-foam.", price: "₹169" },
      { name: "Café Latte", desc: "Delicate espresso floating underneath a smooth silk layer of continuous lightly steamed milk.", price: "₹189" },
      { name: "Attila Gold Cold Coffee", desc: "Double-brewed espresso blended cold with premium dynamic cream and raw Madagascar vanilla pod.", price: "₹229", tag: "Popular" }
    ]
  },
  "Desserts": {
    featuredImg: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "Sizzling Walnut Brownie", desc: "Fudgy dark chocolate walnut brownie served screaming hot on iron with pure vanilla bean gelato.", price: "₹249" },
      { name: "New York Cheesecake", desc: "Classic dense, buttery graham cracker crust profile topped with a signature tart wild berry compote.", price: "₹289", tag: "Premium" },
      { name: "Artisanal Ice Cream", desc: "House-churned rotational dynamic batch selections utilizing purely natural local ingredients.", price: "₹149" },
      { name: "Chocolate Lava Cake", desc: "Decadent single-origin dark chocolate cake featuring a rich, molten liquid gold core.", price: "₹219" }
    ]
  }
};

const marqueeItems = [
  { text: "Wood Fired Pizza", icon: "🍕" },
  { text: "Truffle Pasta", icon: "🍝" },
  { text: "Artisanal Coffee", icon: "☕" },
  { text: "Crafted Mocktails", icon: "🍹" },
  { text: "Gourmet Desserts", icon: "🍰" }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Signature Dishes");

  return (
    <div id="menu" className="relative w-full min-h-screen bg-[#F7F3EA] overflow-hidden pt-20 md:pt-32 pb-16 flex flex-col justify-between">
      
      {/* Editorial Luxury Paper Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />

      {/* Header Architecture */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center gap-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2"
        >
          <span className="font-['Inter'] text-xs font-bold uppercase tracking-[0.3em] text-[#70763D]">
            Signature Menu
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-['Cormorant_Garamond'] text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1A1A]"
        >
          Crafted With Passion. <br />
          <span className="italic text-[#70763D]">Served With Excellence.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-['Inter'] text-sm md:text-base text-[#4D342C]/70 max-w-xl font-light leading-relaxed mt-1"
        >
          Discover a carefully curated selection of signature dishes, beverages, and desserts meticulously designed to delight every individual palate.
        </motion.p>
      </div>

      {/* Main Split Interface Area */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start z-10">
        
        {/* Left Side: Dramatic Media Viewport Block */}
        <div className="lg:col-span-5 w-full relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-[350px] md:h-[550px] rounded-[32px] overflow-hidden shadow-2xl border border-white/40"
            >
              <motion.img 
                src={menuData[activeCategory].featuredImg} 
                alt={activeCategory} 
                className="w-full h-full object-cover transform transition-transform duration-[2s] ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-8 left-8 text-left z-10">
                <span className="font-['Inter'] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C8A04F] bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  Featured Category
                </span>
                <h3 className="font-['Cormorant_Garamond'] text-3xl font-bold text-white tracking-wide mt-3">{activeCategory}</h3>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Interactive Navigation Tabs + Dynamic Premium Cards Grid */}
        <div className="lg:col-span-7 w-full flex flex-col gap-8">
          
          {/* Categories Tab Selector */}
          <div className="w-full flex flex-wrap gap-2 md:gap-3 border-b border-[#4D342C]/10 pb-4">
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-['Inter'] uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#70763D] text-white shadow-md'
                    : 'bg-white/50 hover:bg-white text-[#1A1A1A] border border-black/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Dynamic Menu Items Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[400px]">
            <AnimatePresence mode="popLayout">
              {menuData[activeCategory].items.map((dish, index) => {
                const isFeatured = dish.tag === "Chef's Pick";
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ delay: index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    key={dish.name}
                    className={`relative p-6 rounded-2xl bg-white shadow-sm flex flex-col justify-between items-start text-left border transition-all duration-400 group hover:-translate-y-1 hover:shadow-md ${
                      isFeatured ? 'border-[#C8A04F] ring-1 ring-[#C8A04F]/30' : 'border-black/5'
                    }`}
                  >
                    <div className="w-full flex flex-col gap-2">
                      <div className="w-full flex items-start justify-between gap-4">
                        <h4 className="font-['Cormorant_Garamond'] text-xl font-bold text-[#1A1A1A] tracking-wide group-hover:text-[#70763D] transition-colors">
                          {dish.name}
                        </h4>
                        
                        {dish.tag && (
                          <span className={`text-[9px] font-['Inter'] uppercase tracking-widest px-2.5 py-1 rounded-full border shrink-0 ${
                            isFeatured ? 'bg-[#C8A04F]/10 text-[#C8A04F] border-[#C8A04F]/20' : 'bg-[#70763D]/10 text-[#70763D] border-[#70763D]/20'
                          }`}>
                            {dish.tag}
                          </span>
                        )}
                      </div>
                      
                      <p className="font-['Inter'] text-xs text-[#4D342C]/70 font-light leading-relaxed pr-2">
                        {dish.desc}
                      </p>
                    </div>

                    <div className="w-full flex items-center justify-between mt-6 pt-4 border-t border-black/[0.03]">
                      <span className="font-['Inter'] text-sm font-semibold text-[#1A1A1A]">
                        {dish.price} <span className="text-[10px] font-normal text-[#4D342C]/50">onwards</span>
                      </span>
                      {/* <span className="text-xs font-['Inter'] uppercase tracking-widest text-[#70763D] font-semibold opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        Order →
                      </span> */}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* Continuous Continuous Infinite Horizontal Showcase */}
      <div className="w-full bg-white py-6 mt-20 md:mt-28 overflow-hidden border-t border-b border-black/[0.03] flex whitespace-nowrap select-none pointer-events-none">
        <motion.div 
          animate={{ x: [0, "-50%"] }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          className="flex gap-16 text-[#1A1A1A] font-['Inter'] text-xs uppercase tracking-[0.3em] font-medium px-4"
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={index} className="flex items-center gap-4 shrink-0">
              <span>{item.icon}</span>
              <span>{item.text}</span>
              <span className="text-[#C8A04F]/40 text-xs ml-12">✦</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Premium Infinite Scroll Transition Banner */}
      <div className="w-full text-center mt-20 md:mt-24 px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <h4 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl italic text-[#1A1A1A] font-medium tracking-wide">
            Loved By Thousands Of Elegance-Seeking Guests
          </h4>
          <span className="font-['Inter'] text-[9px] uppercase tracking-[0.3em] text-[#70763D] font-bold mt-1 animate-pulse">
            See Upcoming Events ↓
          </span>
        </motion.div>
      </div>

    </div>
  );
}