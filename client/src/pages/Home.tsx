import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import BuildStory from "@/components/BuildStory";
import SocialHighlights from "@/components/SocialHighlights";
import GameSection from "@/components/GameSection";
import Reflection from "@/components/Reflection";
import MediaGallery from "@/components/MediaGallery";
import YouTubeTimeline from "@/components/YouTubeTimeline";
import DonateSection from "@/components/DonateSection";
import AdvertisingSection from "@/components/AdvertisingSection";
import Footer from "@/components/Footer";
import ShareModal from "@/components/ShareModal";
import Lightbox from "@/components/Lightbox";
import { motion, AnimatePresence } from "framer-motion";
import ParallaxBackground from "@/components/ParallaxBackground";

export default function Home() {
  const [showShareModal, setShowShareModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight = document.body.scrollHeight - window.innerHeight;
      const progress = window.scrollY / scrollableHeight;
      setScrollProgress(progress * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleShareModal = () => {
    setShowShareModal(!showShareModal);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Space Background with Parallax Effects */}
      <ParallaxBackground onSatelliteClick={toggleShareModal}>
        <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />
        
        <Navbar 
          showMobileMenu={showMobileMenu} 
          toggleMobileMenu={toggleMobileMenu}
          toggleShareModal={toggleShareModal}
        />
        
        <section data-speed="0.2" className="parallax-layer">
          <Hero toggleShareModal={toggleShareModal} />
        </section>
        
        <section data-speed="0.1" className="parallax-layer">
          <Journey />
        </section>
        
        <section data-speed="0.15" className="parallax-layer">
          <BuildStory />
        </section>
        
        <section data-speed="0.05" className="parallax-layer">
          <SocialHighlights />
        </section>
        
        <section data-speed="0.1" className="parallax-layer">
          <GameSection toggleShareModal={toggleShareModal} />
        </section>
        
        <section data-speed="0.15" className="parallax-layer">
          <Reflection />
        </section>
        
        <section data-speed="0.05" className="parallax-layer">
          <MediaGallery openLightbox={openLightbox} />
        </section>
        
        <section data-speed="0.1" className="parallax-layer">
          <YouTubeTimeline />
        </section>
        
        <section data-speed="0.05" className="parallax-layer">
          <DonateSection />
        </section>
        
        <section data-speed="0.1" className="parallax-layer">
          <AdvertisingSection />
        </section>
        
        <section>
          <Footer toggleShareModal={toggleShareModal} />
        </section>
      </ParallaxBackground>
      
      {/* Modals */}
      <AnimatePresence>
        {showShareModal && (
          <ShareModal isOpen={showShareModal} onClose={() => setShowShareModal(false)} />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {lightboxImage && (
          <Lightbox imageSrc={lightboxImage} onClose={closeLightbox} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
