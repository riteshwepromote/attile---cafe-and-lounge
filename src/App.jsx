import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="scroll-smooth bg-[#F7F3EA] min-h-screen text-[#1A1A1A] antialiased">
      <Navbar />

      <main>
        {/* No padding here. "relative w-full min-h-screen" allows your 
          hero images or background videos to go full screen behind the transparent navbar.
        */}
        <section id="home" className="relative w-full min-h-screen declaration-block">
          <Home />
        </section>

        {/* Subsequent sections handle their own top/bottom padding */}
        <section id="about" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <About />
        </section>

        <section id="experience" className="py-20 md:py-32 bg-white/40 backdrop-blur-[2px]">
          <Experience />
        </section>

        <section id="menu" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <Menu />
        </section>

        <section id="gallery" className="py-20 md:py-32 bg-white/40 backdrop-blur-[2px]">
          <Gallery />
        </section>

        <section id="events" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <Events />
        </section>

        <section id="contact" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;