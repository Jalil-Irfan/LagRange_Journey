import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LucideMenu, LucideX, LucideShare2 } from "lucide-react";

interface NavbarProps {
  showMobileMenu: boolean;
  toggleMobileMenu: () => void;
  toggleShareModal: () => void;
}

export default function Navbar({ showMobileMenu, toggleMobileMenu, toggleShareModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      let current = "intro";
      
      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop - 100;
        const sectionHeight = sectionElement.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.id;
        }
      });
      
      setActiveSection(current);
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

  const navItems = [
    { id: "intro", label: "Intro" },
    { id: "timeline", label: "Timeline" },
    { id: "showcase", label: "Showcase" },
    { id: "process", label: "Process" },
    { id: "docs", label: "Documentation" },
    { id: "lessons", label: "Lessons" },
    { id: "connect", label: "Connect" }
  ];

  return (
    <>
      {/* Mobile Navigation Toggle */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button 
          onClick={toggleMobileMenu}
          className="text-white p-2 rounded-md bg-[rgba(14,20,33,0.7)] backdrop-blur-md"
          aria-label="Toggle menu"
        >
          <LucideMenu className="w-6 h-6" />
        </button>
      </div>
      
      {/* Navigation */}
      <motion.nav 
        id="navbar" 
        className={`fixed top-0 w-full bg-[rgba(10,14,23,0.8)] backdrop-blur-md z-40 transition-all duration-300 ${
          scrolled ? "py-2 shadow-lg" : "py-3"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-lg font-heading font-bold text-gradient">
                VibeJam Journey
              </span>
              <div className="ml-2 px-2 py-0.5 text-xs rounded-full bg-[rgba(138,43,226,0.2)] text-purple-300 border border-[rgba(138,43,226,0.3)]">
                #VibeJam
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 font-medium">
              {navItems.map((item) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`} 
                  onClick={(e) => handleNavClick(e, item.id)} 
                  className={`hover:text-[#40E0D0] transition-colors relative ${
                    activeSection === item.id ? "text-[#8A2BE2]" : ""
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#8A2BE2] to-[#40E0D0]"
                      layoutId="activeNavIndicator"
                    />
                  )}
                </a>
              ))}
            </div>
            
            <div className="hidden md:block">
              <button 
                onClick={toggleShareModal}
                className="space-button px-4 py-1.5 rounded-full font-medium flex items-center"
                aria-label="Share"
              >
                <LucideShare2 className="w-4 h-4 mr-2" /> Share
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      
      {/* Mobile Navigation Menu */}
      <motion.div 
        id="mobileMenu" 
        className="fixed inset-0 bg-[rgba(10,14,23,0.95)] backdrop-blur-md z-40 md:hidden"
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ 
          opacity: showMobileMenu ? 1 : 0,
          y: showMobileMenu ? 0 : "-100%" 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="h-full flex flex-col items-center justify-center space-y-6 text-xl font-medium">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              onClick={(e) => handleNavClick(e, item.id)} 
              className={`hover:text-[#40E0D0] transition-colors ${
                activeSection === item.id ? "text-gradient font-bold" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
          
          <button 
            onClick={toggleShareModal}
            className="mt-8 space-button px-6 py-2 rounded-lg text-white font-medium hover:text-white flex items-center"
          >
            <LucideShare2 className="w-5 h-5 mr-2" /> Share Story
          </button>
          
          <button 
            onClick={closeMenu} 
            className="absolute top-4 right-4 text-white p-2 rounded-md bg-[rgba(14,20,33,0.7)]"
            aria-label="Close menu"
          >
            <LucideX className="w-6 h-6" />
          </button>
        </div>
      </motion.div>
    </>
  );
}
