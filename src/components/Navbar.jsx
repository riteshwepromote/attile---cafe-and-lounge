import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/bglogo.jpg";

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Events', href: '#events' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Monitor scroll position to trigger glassmorphism and logo shrink
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isScrolled ? 20 : 15, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.7)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          border: isScrolled ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid transparent',
        }}
        className={`fixed left-0 right-0 z-50 flex items-center justify-between transition-all duration-500 ${
          isScrolled 
            ? '-top-9 mx-auto max-w-7xl px-8 py-3 rounded-full shadow-lg mt-5' 
            : 'top-0 w-full px-12 py-4'
        }`}
      >
        {/* Left: Logo Section */}
        <a href="#home" className="flex flex-col items-start justify-center no-underline group">
          <div className={`transition-all duration-500 ${isScrolled ? 'h-9 md:h-10' : 'h-12 md:h-14'} aspect-square flex items-center overflow-hidden rounded-full`}>
            <img 
              src={logo} 
              alt="ATTILA Logo" 
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" 
            />
          </div>
          {/* Shrinking tagline based on scroll */}
          <AnimatePresence>
            {!isScrolled && (
              <motion.span
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 4 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.3 }}
                className="font-['Inter'] text-[9px] font-semibold tracking-[0.25em] uppercase text-[#4D342C]/80 overflow-hidden hidden sm:block"
              >
                Café & Lounge
              </motion.span>
            )}
          </AnimatePresence>
        </a>

        {/* Center: Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="relative font-['Inter'] text-sm tracking-wide text-[#1A1A1A] no-underline transition-colors duration-300 hover:text-[#70763D]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {link.name}
              {/* Premium Animated Underline Indicator */}
              {hoveredIndex === index && (
                <motion.div
                  layoutId="navUnderline"
                  className="absolute bottom-[-6px] left-0 h-[1.5px] w-full bg-[#70763D]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Right: CTA Button (Hidden on Mobile) */}
        <div className="hidden md:block">
          <motion.button
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="font-['Inter'] text-sm font-medium tracking-wide text-white bg-[#70763D] px-7 py-3 rounded-[999px] shadow-sm transition-shadow hover:shadow-md"
          >
            Reserve Table
          </motion.button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="flex md:hidden text-[#1A1A1A] focus:outline-none p-2"
          aria-label="Open Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-[#F7F3EA] p-8 md:hidden"
          >
            {/* Top Bar inside Open Menu */}
            <div className="flex items-center justify-between">
              <div className="h-12 w-12 rounded-full overflow-hidden">
                <img src={logo} alt="ATTILA Logo" className="w-full h-full object-cover" />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#1A1A1A] focus:outline-none p-2"
                aria-label="Close Menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Center Links (Staggered Animation) */}
            <nav className="flex flex-col items-center gap-6 my-auto">
              {navLinks.map((link, index) => (
                <motion.a
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.2, duration: 0.4 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-['Cormorant_Garamond'] text-3xl font-medium text-[#1A1A1A] tracking-wide hover:text-[#70763D] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}

              {/* Mobile CTA */}
              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.2, duration: 0.4 }}
                className="mt-4 w-full max-w-xs font-['Inter'] text-sm font-medium tracking-wide text-white bg-[#70763D] px-7 py-4 rounded-[999px] text-center shadow-md"
              >
                Reserve Table
              </motion.button>
            </nav>

            {/* Bottom Footer Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center gap-8 font-['Inter'] text-xs uppercase tracking-widest text-[#4D342C]/70"
            >
              <a href="#instagram" className="hover:text-[#70763D]">Instagram</a>
              <a href="#call" className="hover:text-[#70763D]">Call Us</a>
              <a href="#whatsapp" className="hover:text-[#70763D]">WhatsApp</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}