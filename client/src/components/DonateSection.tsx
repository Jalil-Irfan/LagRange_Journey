import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function DonateSection() {
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
    <section id="donate" className="py-20 bg-[#0A0E17] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 rounded-full bg-[#6E2CF4] blur-[100px] -top-20 -right-20"></div>
        <div className="absolute w-96 h-96 rounded-full bg-[#00F0FF] blur-[100px] -bottom-20 -left-20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6E2CF4] to-[#00F0FF]">
            Support My Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* UPI Payment */}
            <div className="bg-[#1E1E2A] p-6 rounded-xl shadow-xl border border-gray-800 flex flex-col items-center">
              <h3 className="text-xl font-bold mb-4 text-white">Donate via Google Pay</h3>
              <div className="mb-4 bg-white p-4 rounded-lg">
                <div className="w-48 h-48 mx-auto mb-2">
                  {/* SVG QR code for Google Pay */}
                  <img 
                    src="/gpay-qr.svg" 
                    alt="Google Pay QR Code" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-300 mb-4 text-center">Scan the QR code or use my UPI ID</p>
              <div className="bg-[#10131E] px-5 py-3 rounded-lg mb-4 font-mono text-[#00F0FF]">
                jalilirfan@okicici
              </div>
              <p className="text-sm text-gray-400 text-center">Your support helps me create more games and content!</p>
            </div>

            {/* Ko-fi and Advertising */}
            <div className="bg-[#1E1E2A] p-6 rounded-xl shadow-xl border border-gray-800 flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-white text-center">More Ways to Support</h3>
              
              {/* Ko-fi Button */}
              <a 
                href="https://ko-fi.com/jalilirfan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#FF5E5B] hover:bg-[#FF5E5B]/90 text-white px-6 py-4 rounded-lg font-bold flex items-center justify-center mb-6 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mr-2">
                  <path fill="currentColor" d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734c4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09c-.443-.441-3.368-3.049-4.034-3.954c-.709-.965-1.041-2.7-.091-3.71c.951-1.01 3.005-1.086 4.363.407c0 0 1.565-1.782 3.468-.963c1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"/>
                </svg>
                Buy me a coffee on Ko-fi
              </a>
              
              {/* Advertising Section */}
              <div className="bg-[#10131E] p-4 rounded-lg mb-4">
                <h4 className="font-bold text-lg mb-2 text-white">Advertising Opportunities</h4>
                <p className="text-gray-300 mb-3">
                  Interested in advertising on my games or this website? I offer various options to showcase your brand in a creative space environment.
                </p>
                <p className="text-gray-300">
                  Contact me through my social media channels for collaboration and advertising inquiries.
                </p>
              </div>
              
              <div className="mt-auto">
                <p className="text-sm text-gray-400 text-center italic">
                  All donations directly support the development of more free games and creative projects.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}