import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import BuildStory from "@/components/BuildStory";
import SocialHighlights from "@/components/SocialHighlights";
import GameSection from "@/components/GameSection";
import Reflection from "@/components/Reflection";
import MediaGallery from "@/components/MediaGallery";
import Footer from "@/components/Footer";
import ShareModal from "@/components/ShareModal";
import Lightbox from "@/components/Lightbox";
import TestComponent from "@/components/TestComponent";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  // For diagnostic purposes, let's use the test component
  const useTestComponent = true;

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

  if (useTestComponent) {
    return <TestComponent />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />
      
      <Navbar 
        showMobileMenu={showMobileMenu} 
        toggleMobileMenu={toggleMobileMenu}
        toggleShareModal={toggleShareModal}
      />
      
      <Hero toggleShareModal={toggleShareModal} />
      <Journey />
      <BuildStory />
      <SocialHighlights />
      <GameSection toggleShareModal={toggleShareModal} />
      <Reflection />
      <MediaGallery openLightbox={openLightbox} />
      <Footer toggleShareModal={toggleShareModal} />
      
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
