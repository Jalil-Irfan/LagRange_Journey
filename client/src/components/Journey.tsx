import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Journey() {
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
    <section id="journey" className="py-20 bg-[#0A0E17]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6E2CF4] to-[#00F0FF]">
            My Journey
          </h2>
          
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              variants={itemVariants}
              className="p-6 bg-[#1E1E2A] rounded-xl shadow-xl mb-10"
            >
              <p className="text-lg leading-relaxed mb-6">
                My coding adventure began with a simple curiosity about AI-assisted development. Using ChatGPT as my guide, I dove into the world of Three.js to create an immersive space game. The journey wasn't always smooth—I faced challenges with 3D rendering and game logic—but the Replit environment made iterations quick and collaborative.
              </p>
              <p className="text-lg leading-relaxed">
                What started as an experiment turned into a passionate project that taught me about the intersection of AI assistance and human creativity. I discovered that the right tools can accelerate learning and enable even beginners to build impressive interactive experiences.
              </p>
            </motion.div>
            
            <div className="flex justify-center gap-x-8 gap-y-4 flex-wrap">
              <motion.div 
                variants={itemVariants}
                className="bg-[#1E1E2A] p-4 rounded-lg text-center w-32 h-32 flex flex-col items-center justify-center"
              >
                <i className="fas fa-robot text-3xl text-[#6E2CF4] mb-2"></i>
                <span className="block font-medium">ChatGPT</span>
                <span className="text-sm text-gray-400">AI Assistant</span>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                className="bg-[#1E1E2A] p-4 rounded-lg text-center w-32 h-32 flex flex-col items-center justify-center"
              >
                <i className="fas fa-cubes text-3xl text-[#00F0FF] mb-2"></i>
                <span className="block font-medium">Three.js</span>
                <span className="text-sm text-gray-400">3D Library</span>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                className="bg-[#1E1E2A] p-4 rounded-lg text-center w-32 h-32 flex flex-col items-center justify-center"
              >
                <i className="fas fa-code text-3xl text-[#FF2D92] mb-2"></i>
                <span className="block font-medium">Replit</span>
                <span className="text-sm text-gray-400">Cloud IDE</span>
              </motion.div>
            </div>
          </motion.div>
          
          <div className="mt-12 text-center">
            <a href="#build" className="text-[#00F0FF] hover:underline inline-flex items-center">
              <span>See how I built it</span>
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
