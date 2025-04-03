import { motion } from "framer-motion";
import { LucideShare2, LucideTwitter, LucideInstagram, LucideLinkedin, LucideGithub, LucideArrowUpToLine } from "lucide-react";

interface FooterProps {
  toggleShareModal: () => void;
}

export default function Footer({ toggleShareModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { id: "intro", label: "Intro" },
    { id: "timeline", label: "Timeline" },
    { id: "showcase", label: "Showcase" },
    { id: "process", label: "Process" },
    { id: "docs", label: "Documentation" },
    { id: "lessons", label: "Lessons" },
    { id: "tools", label: "AI Tools" },
    { id: "connect", label: "Connect" }
  ];

  return (
    <footer className="relative bg-[rgba(8,11,19,0.8)] backdrop-blur-md py-12 border-t border-[rgba(138,43,226,0.2)]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <span className="text-2xl font-heading font-bold text-gradient">
                VibeJam Journey
              </span>
              <p className="text-gray-400 mt-2">My game development odyssey</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                onClick={toggleShareModal}
                className="space-button px-6 py-2.5 rounded-lg font-medium flex items-center justify-center"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <LucideShare2 className="w-4 h-4 mr-2" /> Share Journey
              </motion.button>
              
              <motion.button 
                onClick={scrollToTop}
                className="space-button px-6 py-2.5 rounded-lg font-medium flex items-center justify-center"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <LucideArrowUpToLine className="w-4 h-4 mr-2" /> Back to Top
              </motion.button>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className="text-gray-400 hover:text-[#40E0D0] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="card-glassmorphism p-5 rounded-xl">
              <h3 className="text-gradient font-bold text-lg mb-3">About VibeJam</h3>
              <p className="text-gray-300 text-sm">
                VibeJam is a browser game competition created by <a href="https://twitter.com/levelsio" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">Pieter Levels</a> (founder of <a href="https://nomadlist.com" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">Nomad List</a> and <a href="https://remoteok.com" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">Remote OK</a>) where participants create games using AI assistance. 
                The challenge combines creativity, technical problem-solving, and learning through iteration.
              </p>
            </div>
            
            <div className="card-glassmorphism p-5 rounded-xl">
              <h3 className="text-gradient font-bold text-lg mb-3">My Journey Highlights</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Started with no game development experience</li>
                <li>• Created and failed with 3 game concepts before success</li>
                <li>• Used <span className="text-cyan-400">Cursor AI</span>, <span className="text-cyan-400">Replit AI</span>, and <span className="text-cyan-400">ChatGPT</span> to overcome challenges</li>
                <li>• Documented the entire process as a learning resource</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-8">
              <motion.a 
                href="https://twitter.com/Jalil" 
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-[#1DA1F2] transition-colors"
                whileHover={{ y: -3 }}
              >
                <LucideTwitter className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://instagram.com/jalilirfan" 
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-[#E1306C] transition-colors"
                whileHover={{ y: -3 }}
              >
                <LucideInstagram className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/jalil-irfan" 
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-[#0077B5] transition-colors"
                whileHover={{ y: -3 }}
              >
                <LucideLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://github.com/jalilirfan" 
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -3 }}
              >
                <LucideGithub className="w-5 h-5" />
              </motion.a>
            </div>
            
            <div className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Jalil Irfan. Created for <a href="https://twitter.com/levelsio" target="_blank" rel="noreferrer" className="text-[#8A2BE2] hover:underline">#VibeJam</a> by <a href="https://twitter.com/levelsio" target="_blank" rel="noreferrer" className="text-[#8A2BE2] hover:underline">@levelsio</a>
            </div>
            <div className="mt-2 text-gray-600 text-xs">
              Built with <a href="https://cursor.sh" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">Cursor AI</a>, <a href="https://replit.com" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">Replit AI</a>, and <a href="https://chat.openai.com" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">ChatGPT</a>. Powered by perseverance and curiosity.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
