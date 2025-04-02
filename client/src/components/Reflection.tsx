import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Reflection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="reflection" className="py-20 bg-gradient-to-b from-[#080B13] to-[#0A0E17] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 rounded-full bg-[#6E2CF4] blur-[100px] -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 rounded-full bg-[#00F0FF] blur-[100px] -bottom-20 -right-20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6E2CF4] to-[#00F0FF]">
            Reflections
          </h2>
          
          <div className="p-8 bg-[#1E1E2A] rounded-xl shadow-xl border border-gray-800">
            <p className="text-lg leading-relaxed mb-6">
              Looking back on this journey, I'm amazed at how much I've grown as a developer. Starting with basic knowledge and leveraging AI assistance, I was able to create something that once seemed far beyond my capabilities.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The most valuable lesson was understanding the collaborative nature of modern development. AI tools like ChatGPT served as both teacher and pair programmer, explaining concepts and suggesting solutions while I maintained creative control and made key design decisions.
            </p>
            <p className="text-lg leading-relaxed">
              This project has sparked a passion for game development that I plan to continue exploring. The supportive feedback from the #VibeJam community has been incredibly motivating, and I'm excited to tackle more ambitious projects in the future.
            </p>
            <div className="mt-6 text-right">
              <span className="text-[#00F0FF] font-heading">— Jalil Irfan</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
