import { motion } from "framer-motion";

interface LightboxProps {
  imageSrc: string;
  onClose: () => void;
}

export default function Lightbox({ imageSrc, onClose }: LightboxProps) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div 
      id="lightbox"
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={handleBackdropClick}
    >
      <span 
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-4xl cursor-pointer z-10"
      >
        &times;
      </span>
      <motion.div 
        className="flex items-center justify-center h-full w-full p-4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src={imageSrc} 
          alt="Enlarged Image" 
          className="max-w-[90%] max-h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  );
}
