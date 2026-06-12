import React from 'react';
import { motion } from 'framer-motion';

// Replace these placeholders with your actual asset paths later
const cardData = [
  {
    id: 1,
    title: "Premium Dining",
    desc: "Carefully crafted dishes prepared with quality ingredients and attention to every detail.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-2 lg:col-span-7 h-[380px] md:h-[450px]"
  },
  {
    id: 2,
    title: "Crafted Mocktails",
    desc: "Refreshing creations designed to elevate every meal and celebration.",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-1 lg:col-span-5 h-[380px] md:h-[450px]"
  },
  {
    id: 3,
    title: "Live Events",
    desc: "Birthdays, anniversaries, corporate gatherings, and special occasions.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-1 lg:col-span-4 h-[350px] md:h-[400px]"
  },
  {
    id: 4,
    title: "Cozy Ambience",
    desc: "Warm interiors and comfortable seating that invite you to stay a little longer.",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-2 lg:col-span-8 h-[350px] md:h-[400px]"
  },
  {
    id: 5,
    title: "Family Gatherings",
    desc: "A warm, welcoming layout structured perfect for creating memories with loved ones.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-2 lg:col-span-8 h-[350px] md:h-[400px]"
  },
  {
    id: 6,
    title: "Coffee Moments",
    desc: "Perfectly brewed coffee for conversations, work, or quiet moments alone.",
    image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-1 lg:col-span-4 h-[350px] md:h-[400px]"
  }
];

const marqueeWords = ["Dining", "Conversations", "Celebrations", "Coffee", "Community"];

// Stagger parent variant for bento grid container
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function Experience() {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden pt-20 md:pt-32 flex flex-col justify-between">
      
      {/* High-End Soft Olive Radial Gradient Aura */}
      <div 
        className="absolute inset-0 pointer-events-none select-none" 
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(112, 118, 61, 0.06), transparent 65%)'
        }}
      />

      {/* Header Narrative Architecture */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center gap-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <span className="font-['Inter'] text-xs font-bold uppercase tracking-[0.3em] text-[#70763D]">
            The Attila Experience
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-['Cormorant_Garamond'] text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1A1A] leading-tight max-w-3xl"
        >
          Every Visit Feels Different. <br />
          <span className="italic text-[#70763D]">Every Moment Feels Special.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-['Inter'] text-sm md:text-base text-[#4D342C]/70 max-w-xl font-light leading-relaxed mt-2"
        >
          From morning coffee meetings and family dinners to milestones with close friends, ATTILA offers an upscale atmosphere meticulously master-crafted for every narrative.
        </motion.p>
      </div>

      {/* Luxury Asymmetric Bento Grid Block */}
      <motion.div 
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6 mt-16 md:mt-24 z-10"
      >
        {cardData.map((card) => (
          <motion.div
            key={card.id}
            variants={cardVariants}
            className={`relative rounded-3xl overflow-hidden group cursor-pointer shadow-sm ${card.className}`}
          >
            {/* Background Image Layer handles slow-motion scale transition */}
            <motion.img 
              src={card.image} 
              alt={card.title}
              className="w-full h-full object-cover select-none transform transition-transform duration-[1.2s] ease-[0.16, 1, 0.3, 1] group-hover:scale-105"
            />

            {/* Variable Ambient Backdrop Shadows */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

            {/* Content Context Array Layer */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-left items-start gap-2">
              
              {/* Heading Label with Interactive inline flex arrow layout */}
              <div className="flex items-center gap-3 w-full justify-between">
                <h3 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-medium tracking-wide text-white">
                  {card.title}
                </h3>
                
                {/* Minimal Elegant Micro-Interaction Arrow Vector */}
                <span className="transform translate-x-[-8px] opacity-0 transition-all duration-500 ease-[0.16, 1, 0.3, 1] group-hover:translate-x-0 group-hover:opacity-100 text-[#C8A04F] text-xl">
                  →
                </span>
              </div>

              {/* Collapsible/Slide-Up Description Architecture */}
              <p className="font-['Inter'] text-xs md:text-sm font-light text-white/80 leading-relaxed max-w-md transform translate-y-2 opacity-0 transition-all duration-500 delay-[0.05s] ease-[0.16, 1, 0.3, 1] group-hover:translate-y-0 group-hover:opacity-100">
                {card.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Infinite Horizontal Loop Typographic Marquee Banner */}
      <div className="w-full bg-[#F7F3EA] py-7 mt-20 md:mt-32 overflow-hidden border-t border-b border-[#4D342C]/5 flex whitespace-nowrap select-none pointer-events-none">
        <motion.div 
          animate={{ x: [0, "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex gap-12 text-[#70763D] font-['Cormorant_Garamond'] text-lg md:text-xl font-semibold tracking-[0.25em] uppercase px-4"
        >
          {/* Constructing quadruple loops to bypass view gaps during linear translation */}
          {[...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, index) => (
            <div key={index} className="flex items-center gap-12">
              <span>{word}</span>
              <span className="text-[#C8A04F]/40 text-xs">✦</span>
            </div>
          ))}
        </motion.div>
      </div>

    </div>
  );
}