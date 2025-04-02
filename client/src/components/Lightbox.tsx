import { motion } from "framer-motion";
import { LucideX, LucideDownload, LucideZoomIn, LucideZoomOut } from "lucide-react";
import { useState } from "react";

interface LightboxProps {
  imageSrc: string;
  onClose: () => void;
}

export default function Lightbox({ imageSrc, onClose }: LightboxProps) {
  const [scale, setScale] = useState(1);
  
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const zoomIn = () => {
    setScale(prev => Math.min(prev + 0.25, 3));
  };

  const zoomOut = () => {
    setScale(prev => Math.max(prev - 0.25, 0.5));
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = `vibejam-journey-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div 
      id="lightbox"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={handleBackdropClick}
    >
      <div className="absolute top-4 right-4 flex space-x-3">
        <motion.button 
          onClick={zoomIn}
          className="p-2 bg-[rgba(10,14,23,0.7)] rounded-full text-white hover:bg-[rgba(30,40,70,0.7)] transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Zoom in"
        >
          <LucideZoomIn className="w-5 h-5" />
        </motion.button>
        
        <motion.button 
          onClick={zoomOut}
          className="p-2 bg-[rgba(10,14,23,0.7)] rounded-full text-white hover:bg-[rgba(30,40,70,0.7)] transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Zoom out"
        >
          <LucideZoomOut className="w-5 h-5" />
        </motion.button>
        
        <motion.button 
          onClick={downloadImage}
          className="p-2 bg-[rgba(10,14,23,0.7)] rounded-full text-white hover:bg-[rgba(30,40,70,0.7)] transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Download image"
        >
          <LucideDownload className="w-5 h-5" />
        </motion.button>
        
        <motion.button 
          onClick={onClose}
          className="p-2 bg-[rgba(138,43,226,0.7)] rounded-full text-white hover:bg-[rgba(138,43,226,0.9)] transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Close lightbox"
        >
          <LucideX className="w-5 h-5" />
        </motion.button>
      </div>
      
      <motion.div 
        className="flex items-center justify-center h-full w-full p-4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="relative max-w-[90%] max-h-[90%] overflow-hidden rounded-lg gradient-border-animated"
          animate={{ scale }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <img 
            src={imageSrc} 
            alt="Enlarged screenshot from VibeJam journey" 
            className="max-w-full max-h-full object-contain bg-[rgba(10,14,23,0.3)]"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent py-3 px-4">
            <p className="text-sm text-gray-200 font-medium">
              VibeJam Journey Documentation
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
