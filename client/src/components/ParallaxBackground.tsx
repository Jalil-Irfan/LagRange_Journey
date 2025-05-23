import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useIsMobile } from '../hooks/use-mobile';

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
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Add stars to the background
    if (starsRef.current) {
      const starsContainer = starsRef.current;
      
      // Clear any existing stars
      starsContainer.innerHTML = '';
      
      // Create random stars with three different sizes
      // Reduce number of stars on mobile for performance
      const starCount = isMobile ? 150 : 350;
      for (let i = 0; i < starCount; i++) {
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
      // Reduce number of nebulas on mobile
      const nebulaCount = isMobile ? 2 : 4;
      for (let i = 0; i < nebulaCount; i++) {
        const nebula = document.createElement('div');
        nebula.classList.add('nebula');
        
        // Size and position - smaller on mobile
        const size = isMobile ? (20 + Math.random() * 30) : (30 + Math.random() * 50);
        nebula.style.width = `${size}vw`;
        nebula.style.height = `${size}vw`;
        nebula.style.top = `${Math.random() * 100}%`;
        nebula.style.left = `${Math.random() * 100}%`;
        
        // Colors - less intense on mobile
        const opacity = isMobile ? (0.03 + Math.random() * 0.1) : (0.05 + Math.random() * 0.15);
        nebula.style.backgroundColor = `rgba(110, 44, 244, ${opacity})`;
        nebula.style.filter = `blur(${isMobile ? (5 + Math.random() * 30) : (10 + Math.random() * 50)}px)`;
        nebula.style.borderRadius = '50%';
        
        // Add to the container
        nebulaContainer.appendChild(nebula);
      }
    }
    
    // Satellite animation - enhanced for better performance and smoother motion
    if (satelliteRef.current) {
      // Base rotation animation
      gsap.to(satelliteRef.current, {
        rotation: 360,
        duration: 240, // Slower rotation for more elegance
        repeat: -1,
        ease: "linear" // Ensures perfectly smooth rotation
      });
      
      // Make the satellite movement smoother with improved easing and timing
      if (isMobile) {
        // Mobile optimized movement
        gsap.to(satelliteRef.current, {
          y: window.innerHeight * 0.15, // Less vertical travel on mobile
          x: window.innerWidth * 0.08,
          scale: 0.65,
          ease: "power1.inOut", // Smoother acceleration and deceleration
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 2 // Smoother, more delayed scrubbing
          }
        });
      } else {
        // Enhanced desktop behavior
        gsap.to(satelliteRef.current, {
          y: window.innerHeight * 0.6, // Less extreme vertical travel
          x: window.innerWidth * 0.25,
          scale: 0.8,
          ease: "power1.inOut", // Smoother acceleration and deceleration
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8 // Better response time
          }
        });
        
        // Add a subtle floating animation for more liveliness
        gsap.to(satelliteRef.current, {
          y: "+=15", // Small oscillation
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
    }
    
    if (containerRef.current) {
      // Create parallax effect for elements with data-speed attribute
      // Make parallax less intense on mobile
      const elements = containerRef.current.querySelectorAll<HTMLElement>('[data-speed]');
      
      elements.forEach((element) => {
        const speed = element.getAttribute('data-speed');
        
        if (speed) {
          const effectSpeed = isMobile ? parseFloat(speed) * 0.4 : parseFloat(speed);
          
          gsap.to(element, {
            y: (i, el) => -effectSpeed * (ScrollTrigger.maxScroll(window) - el.offsetTop),
            ease: 'power1.out', // Better easing for smoother motion
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: isMobile ? 2 : 0.5, // More granular control for smoother effects
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
  }, [isMobile]);
  
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
      
      {/* CSS-based satellite - adjusted for better mobile positioning */}
      <div 
        ref={satelliteRef} 
        className="fixed z-10 satellite-container cursor-pointer hover:satellite-shadow"
        style={{ 
          top: isMobile ? '10%' : '15%', 
          right: isMobile ? '5%' : '10%'
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