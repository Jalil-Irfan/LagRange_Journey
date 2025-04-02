import { motion } from "framer-motion";

interface HeroProps {
  toggleShareModal: () => void;
}

export default function Hero({ toggleShareModal }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* We remove the background image since we now have the 3D space background */}
      
      {/* Social Share (Mobile) */}
      <div className="absolute top-24 right-4 flex flex-col space-y-3 z-10 md:hidden">
        <button 
          onClick={toggleShareModal}
          className="rounded-full w-12 h-12 flex items-center justify-center bg-[#0A0E17]/80 border border-[#00F0FF]/30 cyan-glow"
        >
          <i className="fas fa-share-alt text-[#00F0FF]"></i>
        </button>
      </div>
      
      <div className="container mx-auto px-6 z-10 py-20">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Floating satellite icon */}
          <motion.div
            className="mb-8 satellite-shadow"
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="80" height="80" viewBox="0 0 80 80" className="mx-auto">
              <g fill="none" stroke="#6E2CF4" strokeWidth="2">
                {/* Satellite body */}
                <rect x="25" y="30" width="30" height="20" rx="2" strokeWidth="2" fill="#0A0E17" />
                
                {/* Antenna */}
                <line x1="40" y1="20" x2="40" y2="30" strokeWidth="2" />
                <circle cx="40" cy="17" r="3" fill="#FFFFFF" />
                
                {/* Solar panels */}
                <rect x="10" y="35" width="15" height="10" rx="1" strokeWidth="2" fill="#00F0FF" fillOpacity="0.3" />
                <rect x="55" y="35" width="15" height="10" rx="1" strokeWidth="2" fill="#00F0FF" fillOpacity="0.3" />
                <line x1="25" y1="40" x2="10" y2="40" strokeWidth="2" />
                <line x1="55" y1="40" x2="70" y2="40" strokeWidth="2" />
              </g>
            </svg>
          </motion.div>
          
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 text-glow space-glow">
            My First <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E2CF4] to-[#00F0FF]">Vibe Coding</span> Experience
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">Built with AI. Exploring the Digital Cosmos.</p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.a 
              href="#game" 
              className="gradient-border bg-[#0A0E17]/70 px-8 py-3 rounded-lg font-bold text-white hover:bg-[#0A0E17] transition-all space-glow"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <i className="fas fa-gamepad mr-2"></i> Play My Game
            </motion.a>
            <motion.a 
              href="#social" 
              className="bg-transparent border-2 border-[#6E2CF4]/40 px-8 py-3 rounded-lg font-bold text-white hover:border-[#6E2CF4] transition-all"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <i className="fas fa-users mr-2"></i> Social Updates
            </motion.a>
          </div>
          
          <motion.div 
            className="mt-12"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <a href="#journey" className="text-white/70 inline-block hover:text-white group">
              <span className="block mb-2">Scroll to explore the cosmos</span>
              <motion.div
                className="inline-block bg-gradient-to-r from-[#6E2CF4] to-[#00F0FF] p-3 rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <i className="fas fa-chevron-down text-white"></i>
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Follow buttons */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white/80 hover:text-white transition-colors hover:text-[#00F0FF] group">
              <div className="relative">
                <i className="fab fa-twitter text-2xl"></i>
                <motion.div 
                  className="absolute -inset-2 rounded-full bg-[#6E2CF4]/0 group-hover:bg-[#6E2CF4]/20 transition-all duration-300"
                  whileHover={{ scale: 1.2 }}
                ></motion.div>
              </div>
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors hover:text-[#00F0FF] group">
              <div className="relative">
                <i className="fab fa-instagram text-2xl"></i>
                <motion.div 
                  className="absolute -inset-2 rounded-full bg-[#6E2CF4]/0 group-hover:bg-[#6E2CF4]/20 transition-all duration-300"
                  whileHover={{ scale: 1.2 }}
                ></motion.div>
              </div>
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors hover:text-[#00F0FF] group">
              <div className="relative">
                <i className="fab fa-linkedin text-2xl"></i>
                <motion.div 
                  className="absolute -inset-2 rounded-full bg-[#6E2CF4]/0 group-hover:bg-[#6E2CF4]/20 transition-all duration-300"
                  whileHover={{ scale: 1.2 }}
                ></motion.div>
              </div>
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors hover:text-[#00F0FF] group">
              <div className="relative">
                <i className="fab fa-github text-2xl"></i>
                <motion.div 
                  className="absolute -inset-2 rounded-full bg-[#6E2CF4]/0 group-hover:bg-[#6E2CF4]/20 transition-all duration-300"
                  whileHover={{ scale: 1.2 }}
                ></motion.div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
