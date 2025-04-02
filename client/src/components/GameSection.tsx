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
          #VibeJam Games
        </h2>
        
        <p className="text-center text-lg mb-8 max-w-2xl mx-auto text-gray-300">
          Check out the games I built during the #VibeJam coding challenge! From space exploration to physics puzzles, these games showcase my skills in game development and AI collaboration.
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
            className="relative w-full rounded-lg overflow-hidden"
            style={{ paddingBottom: "56.25%" }}
          >
            <div className="absolute inset-0 bg-black rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/lagrange-game.svg" 
                  alt="LagRange Game"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                  <h3 className="text-white text-2xl font-bold mb-4">LagRange: Space Navigation</h3>
                  <a 
                    href="https://jalil-irfan.github.io/cursor-physicsgame/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#6E2CF4] text-white px-6 py-3 rounded-lg hover:bg-[#6E2CF4]/80 transition-colors"
                  >
                    Play Game
                  </a>
                  <p className="text-gray-300 mt-4 max-w-md text-center">
                    Navigate space efficiently. Find optimal paths between Lagrange points and minimize travel distance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-4 flex justify-between items-center"
          >
            <div className="flex-1">
              {/* Empty div to maintain layout with flex-1 */}
            </div>
            <a 
              href="https://github.com/Jalil-Irfan/cursor-physicsgame" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#6E2CF4] text-white rounded-lg hover:bg-[#6E2CF4]/80 transition-colors"
            >
              <i className="fab fa-github mr-1"></i> View Code
            </a>
          </motion.div>
        </motion.div>
        
        <div className="mt-8">
          <p className="text-center text-base text-gray-400 mb-4">
            <i className="fas fa-info-circle mr-1"></i> Created during #VibeJam Challenge (March-April 2025)
          </p>
          <div className="flex justify-center">
            <motion.button 
              onClick={toggleShareModal}
              className="gradient-border bg-[#0A0E17] px-8 py-3 rounded-lg font-bold text-white hover:bg-[#0A0E17]/80 transition-all flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <i className="fas fa-share-alt mr-2"></i> Share My Games
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
