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
  
  const galleryItems = [
    {
      imageSrc: "https://images.unsplash.com/photo-1518365050014-70fe7232897f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Early concept art"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1601944179066-29b8f7e29c3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Spaceship modeling"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Level design"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Gameplay testing"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Debugging session"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1518136247453-74e7b5265980?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Final gameplay"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Code review"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Community feedback"
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
        
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
