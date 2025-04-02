import { motion } from "framer-motion";

interface FooterProps {
  toggleShareModal: () => void;
}

export default function Footer({ toggleShareModal }: FooterProps) {
  return (
    <footer className="bg-[#080B13] py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6E2CF4] to-[#00F0FF]">
                VibeJam
              </span>
              <p className="text-gray-400 mt-2">My First Vibe Coding Experience</p>
            </div>
            
            <div>
              <motion.button 
                onClick={toggleShareModal}
                className="px-6 py-3 bg-[#1E1E2A] rounded-full font-medium hover:bg-[#1E1E2A]/70 transition-colors flex items-center"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <i className="fas fa-share-alt mr-2 text-[#00F0FF]"></i> Share This Page
              </motion.button>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-8">
            <a href="#home" className="text-gray-400 hover:text-[#00F0FF] transition-colors">Home</a>
            <a href="#journey" className="text-gray-400 hover:text-[#00F0FF] transition-colors">Journey</a>
            <a href="#build" className="text-gray-400 hover:text-[#00F0FF] transition-colors">Build Story</a>
            <a href="#social" className="text-gray-400 hover:text-[#00F0FF] transition-colors">Social</a>
            <a href="#game" className="text-gray-400 hover:text-[#00F0FF] transition-colors">Play Game</a>
            <a href="#gallery" className="text-gray-400 hover:text-[#00F0FF] transition-colors">Gallery</a>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
            
            <div className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Your Name. Made for <span className="text-[#00F0FF]">#VibeJam</span>
            </div>
            <div className="mt-2 text-gray-600 text-xs">
              Built with AI. Powered by Curiosity.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
