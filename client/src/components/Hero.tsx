import { motion } from "framer-motion";

interface HeroProps {
  toggleShareModal: () => void;
}

export default function Hero({ toggleShareModal }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0A0E17] opacity-70"></div>
        <img 
          src="https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
          alt="Space background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
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
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 text-glow">
            My First <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E2CF4] to-[#00F0FF]">Vibe Coding</span> Experience
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">Built with AI. Powered by Curiosity.</p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.a 
              href="#game" 
              className="gradient-border bg-[#0A0E17] px-8 py-3 rounded-lg font-bold text-white hover:bg-[#0A0E17]/80 transition-all"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <i className="fas fa-gamepad mr-2"></i> Play My Game
            </motion.a>
            <motion.a 
              href="#social" 
              className="bg-transparent border-2 border-white/20 px-8 py-3 rounded-lg font-bold text-white hover:bg-white/10 transition-all"
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
            <a href="#journey" className="text-white/70 inline-block hover:text-white">
              <span className="block mb-2">Scroll to explore</span>
              <motion.i 
                className="fas fa-chevron-down"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              ></motion.i>
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Follow buttons */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <i className="fab fa-github text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
