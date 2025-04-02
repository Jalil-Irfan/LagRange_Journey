import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  showMobileMenu: boolean;
  toggleMobileMenu: () => void;
  toggleShareModal: () => void;
}

export default function Navbar({ showMobileMenu, toggleMobileMenu, toggleShareModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    if (showMobileMenu) toggleMobileMenu();
  };
  
  // Enhanced smooth scrolling function for anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    closeMenu();
    
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Mobile Navigation Toggle */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button 
          onClick={toggleMobileMenu}
          className="text-white p-2 rounded-md bg-[#1E1E2A]"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
      
      {/* Navigation */}
      <motion.nav 
        id="navbar" 
        className={`fixed top-0 w-full bg-[#0A0E17]/80 backdrop-blur-md z-40 transition-all duration-300 ${
          scrolled ? "py-2 shadow-lg" : "py-3"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-lg font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6E2CF4] to-[#00F0FF]">
                VibeJam
              </span>
              <div className="ml-2 px-2 py-1 text-xs rounded-full bg-[#6E2CF4]/20 text-[#6E2CF4] border border-[#6E2CF4]/30">
                #VibeJam
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-5 font-medium">
              <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-[#00F0FF] transition-colors">Home</a>
              <a href="#journey" onClick={(e) => handleNavClick(e, 'journey')} className="hover:text-[#00F0FF] transition-colors">Journey</a>
              <a href="#build" onClick={(e) => handleNavClick(e, 'build')} className="hover:text-[#00F0FF] transition-colors">Build Story</a>
              <a href="#social" onClick={(e) => handleNavClick(e, 'social')} className="hover:text-[#00F0FF] transition-colors">Social</a>
              <a href="#game" onClick={(e) => handleNavClick(e, 'game')} className="hover:text-[#00F0FF] transition-colors">Game</a>
              <a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')} className="hover:text-[#00F0FF] transition-colors">Gallery</a>
              <a href="#youtube" onClick={(e) => handleNavClick(e, 'youtube')} className="hover:text-[#00F0FF] transition-colors">YouTube</a>
              <a href="#donate" onClick={(e) => handleNavClick(e, 'donate')} className="hover:text-[#00F0FF] transition-colors">Donate</a>
              <a href="#advertise" onClick={(e) => handleNavClick(e, 'advertise')} className="hover:text-[#00F0FF] transition-colors">Advertise</a>
            </div>
            
            <div className="hidden md:block">
              <button 
                onClick={toggleShareModal}
                className="bg-gradient-to-r from-[#6E2CF4] to-[#00F0FF] text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                <i className="fas fa-share-alt mr-2"></i> Share
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      
      {/* Mobile Navigation Menu */}
      <motion.div 
        id="mobileMenu" 
        className="fixed inset-0 bg-[#0A0E17]/95 z-40 md:hidden"
        initial={{ x: "-100%" }}
        animate={{ x: showMobileMenu ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
      >
        <div className="h-full flex flex-col items-center justify-center space-y-6 text-xl font-medium">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-[#00F0FF] transition-colors">Home</a>
          <a href="#journey" onClick={(e) => handleNavClick(e, 'journey')} className="hover:text-[#00F0FF] transition-colors">Journey</a>
          <a href="#build" onClick={(e) => handleNavClick(e, 'build')} className="hover:text-[#00F0FF] transition-colors">Build Story</a>
          <a href="#social" onClick={(e) => handleNavClick(e, 'social')} className="hover:text-[#00F0FF] transition-colors">Social</a>
          <a href="#game" onClick={(e) => handleNavClick(e, 'game')} className="hover:text-[#00F0FF] transition-colors">Game</a>
          <a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')} className="hover:text-[#00F0FF] transition-colors">Gallery</a>
          <a href="#youtube" onClick={(e) => handleNavClick(e, 'youtube')} className="hover:text-[#00F0FF] transition-colors">YouTube</a>
          <a href="#donate" onClick={(e) => handleNavClick(e, 'donate')} className="hover:text-[#00F0FF] transition-colors">Donate</a>
          <a href="#advertise" onClick={(e) => handleNavClick(e, 'advertise')} className="hover:text-[#00F0FF] transition-colors">Advertise</a>
          <button onClick={closeMenu} className="absolute top-4 right-4 text-white p-2">
            <i className="fas fa-times"></i>
          </button>
        </div>
      </motion.div>
    </>
  );
}
