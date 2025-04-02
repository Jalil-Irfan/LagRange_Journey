import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  onSatelliteClick?: () => void;
}

export default function ParallaxBackground({ children, onSatelliteClick }: ParallaxBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const satelliteRef = useRef<HTMLDivElement>(null);
  const nebulaRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    // Add stars to the background
    if (starsRef.current) {
      const starsContainer = starsRef.current;
      
      // Clear any existing stars
      starsContainer.innerHTML = '';
      
      // Create random stars with three different sizes
      for (let i = 0; i < 350; i++) {
        const star = document.createElement('div');
        const starSize = Math.random();
        
        // Classify stars into small, medium, and large
        if (starSize < 0.6) {
          star.classList.add('star', 'star-small');
        } else if (starSize < 0.9) {
          star.classList.add('star', 'star-medium');
        } else {
          star.classList.add('star', 'star-large');
        }
        
        // Random position
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        
        // Random opacity
        star.style.opacity = `${0.2 + Math.random() * 0.8}`;
        
        // Random animation delay for twinkling
        star.style.animationDelay = `${Math.random() * 10}s`;
        
        starsContainer.appendChild(star);
      }
    }
    
    // Create nebula-like elements
    if (nebulaRef.current) {
      const nebulaContainer = nebulaRef.current;
      nebulaContainer.innerHTML = '';
      
      // Add purple nebulas/clouds
      for (let i = 0; i < 4; i++) {
        const nebula = document.createElement('div');
        nebula.classList.add('nebula');
        
        // Size and position
        const size = 30 + Math.random() * 50;
        nebula.style.width = `${size}vw`;
        nebula.style.height = `${size}vw`;
        nebula.style.top = `${Math.random() * 100}%`;
        nebula.style.left = `${Math.random() * 100}%`;
        
        // Colors
        const opacity = 0.05 + Math.random() * 0.15;
        nebula.style.backgroundColor = `rgba(110, 44, 244, ${opacity})`;
        nebula.style.filter = `blur(${10 + Math.random() * 50}px)`;
        nebula.style.borderRadius = '50%';
        
        // Add to the container
        nebulaContainer.appendChild(nebula);
      }
    }
    
    // Satellite animation
    if (satelliteRef.current) {
      gsap.to(satelliteRef.current, {
        rotation: 360,
        duration: 180,
        repeat: -1,
        ease: "none"
      });
      
      // Make the satellite move on scroll
      gsap.to(satelliteRef.current, {
        y: window.innerHeight * 0.8,
        x: window.innerWidth * 0.3,
        scale: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true
        }
      });
    }
    
    if (containerRef.current) {
      // Create parallax effect for elements with data-speed attribute
      const elements = containerRef.current.querySelectorAll<HTMLElement>('[data-speed]');
      
      elements.forEach((element) => {
        const speed = element.getAttribute('data-speed');
        
        if (speed) {
          gsap.to(element, {
            y: (i, el) => -parseFloat(speed) * (ScrollTrigger.maxScroll(window) - el.offsetTop),
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
              invalidateOnRefresh: true
            }
          });
        }
      });
    }
    
    // Track scroll position for additional effects
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollY / documentHeight;
      setScrollPosition(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="relative w-full h-full overflow-hidden bg-black" ref={containerRef}>
      {/* Stars background */}
      <div 
        ref={starsRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />
      
      {/* Nebula elements */}
      <div
        ref={nebulaRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />
      
      {/* CSS-based satellite */}
      <div 
        ref={satelliteRef} 
        className="fixed z-10 satellite-container cursor-pointer hover:satellite-shadow"
        style={{ 
          top: '15%', 
          right: '10%',
          transform: `rotate(${scrollPosition * 360}deg)`
        }}
        onClick={onSatelliteClick}
        title="Click me to share!"
      >
        <div className="satellite">
          <div className="satellite-body"></div>
          <div className="satellite-panel left"></div>
          <div className="satellite-panel right"></div>
          <div className="satellite-dish"></div>
        </div>
      </div>
      
      {/* Gradient overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black via-purple-950/20 to-purple-900/30 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}