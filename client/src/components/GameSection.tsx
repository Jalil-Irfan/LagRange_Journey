import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface GameSectionProps {
  toggleShareModal: () => void;
}

export default function GameSection({ toggleShareModal }: GameSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="game" className="py-20 bg-[#0A0E17]">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6E2CF4] to-[#00F0FF]">
          Play My Game
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-gray-300">
          Jump into a cosmic adventure! Navigate your spaceship through asteroid fields and defeat alien enemies in this AI-assisted space shooter.
        </p>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto bg-[#1E1E2A] p-3 rounded-xl shadow-lg"
        >
          <motion.div 
            variants={itemVariants}
            className="relative w-full"
            style={{ paddingBottom: "56.25%" }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-lg">
              <div className="text-center">
                <i className="fas fa-gamepad text-6xl text-[#00F0FF] mb-4"></i>
                <p className="text-xl font-medium">Game Loading...</p>
                <p className="text-sm text-gray-400 mt-2">Your space adventure awaits!</p>
              </div>
              {/* Actual iframe would go here */}
              {/* <iframe src="YOUR_GAME_URL" className="absolute inset-0 w-full h-full border-0 rounded-lg" allowFullScreen></iframe> */}
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-4 flex justify-between items-center"
          >
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-[#080B13] rounded-lg hover:bg-[#080B13]/70 transition-colors">
                <i className="fas fa-volume-up mr-1"></i> Sound
              </button>
              <button className="px-4 py-2 bg-[#080B13] rounded-lg hover:bg-[#080B13]/70 transition-colors">
                <i className="fas fa-info-circle mr-1"></i> How to Play
              </button>
            </div>
            <button className="px-4 py-2 bg-[#6E2CF4] text-white rounded-lg hover:bg-[#6E2CF4]/80 transition-colors">
              <i className="fas fa-expand mr-1"></i> Fullscreen
            </button>
          </motion.div>
        </motion.div>
        
        <div className="mt-12 flex justify-center">
          <motion.button 
            onClick={toggleShareModal}
            className="gradient-border bg-[#0A0E17] px-8 py-3 rounded-lg font-bold text-white hover:bg-[#0A0E17]/80 transition-all flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <i className="fas fa-share-alt mr-2"></i> Share This Game
          </motion.button>
        </div>
      </div>
    </section>
  );
}
