import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface GalleryItemProps {
  imageSrc: string;
  title: string;
  openLightbox: (src: string) => void;
  index: number;
}

function GalleryItem({ imageSrc, title, openLightbox, index }: GalleryItemProps) {
  return (
    <motion.div 
      className="gallery-item rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
      onClick={() => openLightbox(imageSrc)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-2 bg-[#1E1E2A]">
        <p className="text-sm font-medium">{title}</p>
      </div>
    </motion.div>
  );
}

interface MediaGalleryProps {
  openLightbox: (src: string) => void;
}

export default function MediaGallery({ openLightbox }: MediaGalleryProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  
  // Using only user-provided images as requested
  const galleryItems = [
    {
      imageSrc: "/images/Screenshot 2025-04-01 at 2.36.17 PM.png",
      title: "LagRange Game Development"
    },
    {
      imageSrc: "/images/Screenshot 2025-04-01 at 3.49.21 PM.png",
      title: "Physics Game Testing"
    },
    {
      imageSrc: "/images/Screenshot 2025-03-25 at 1.30.15 PM.png",
      title: "Development Environment"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-[#0A0E17]">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6E2CF4] to-[#00F0FF]">
          Media Gallery
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-gray-300">
          Explore screenshots, concept art, and development progress from my VibeJam journey.
        </p>
        
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {isInView && galleryItems.map((item, index) => (
            <GalleryItem 
              key={index}
              index={index}
              imageSrc={item.imageSrc}
              title={item.title}
              openLightbox={openLightbox}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
