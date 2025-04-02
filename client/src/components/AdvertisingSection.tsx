import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Mail, CreditCard, TrendingUp, BarChart, Users } from "lucide-react";

export default function AdvertisingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const adCardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="advertise" className="py-20 bg-gradient-to-b from-[#0A0E17] to-[#121825] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-80 h-80 rounded-full bg-purple-600 blur-[120px] -top-20 right-1/4"></div>
        <div className="absolute w-64 h-64 rounded-full bg-blue-500 blur-[100px] bottom-40 -left-20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#6E2CF4] to-[#00F0FF]">
              Advertising Opportunities
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Showcase your brand in a creative, space-themed environment reaching a tech-savvy audience interested in web development, gaming, and innovation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
            {/* Ad Package 1 */}
            <motion.div 
              variants={adCardVariants} 
              className="bg-[#1A1E2A] rounded-xl shadow-2xl border border-gray-800 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[#6E2CF4]/20 to-[#6E2CF4]/10 p-6">
                <h3 className="text-xl font-bold text-white">Game Sponsorship</h3>
                <p className="text-gray-400 mt-1">Featured placement in LagRange game</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <BadgeCheck className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Logo placement in game UI</span>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Branded game elements</span>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Mentioned in social posts</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Button variant="default" className="bg-[#6E2CF4] hover:bg-[#5722C5] w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact for Pricing
                  </Button>
                </div>
              </div>
            </motion.div>
            
            {/* Ad Package 2 */}
            <motion.div 
              variants={adCardVariants}
              className="bg-[#1A1E2A] rounded-xl shadow-2xl border border-gray-800 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[#00F0FF]/20 to-[#00F0FF]/10 p-6">
                <h3 className="text-xl font-bold text-white">Website Feature</h3>
                <p className="text-gray-400 mt-1">Premium space on this showcase</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <BadgeCheck className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Banner placement</span>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Featured in project showcase</span>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Social media cross-promotion</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Button variant="default" className="bg-[#00F0FF] hover:bg-[#00D0DD] text-black w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact for Pricing
                  </Button>
                </div>
              </div>
            </motion.div>
            
            {/* Ad Package 3 */}
            <motion.div 
              variants={adCardVariants}
              className="bg-[#1A1E2A] rounded-xl shadow-2xl border border-gray-800 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[#FF5E5B]/20 to-[#FF5E5B]/10 p-6">
                <h3 className="text-xl font-bold text-white">YouTube & Social</h3>
                <p className="text-gray-400 mt-1">Sponsored video content</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <BadgeCheck className="w-5 h-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Mentioned in YouTube videos</span>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="w-5 h-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Dedicated sponsor segment</span>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="w-5 h-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Product reviews/features</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Button variant="default" className="bg-[#FF5E5B] hover:bg-[#E54542] w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact for Pricing
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Statistics/Benefits Section */}
          <motion.div 
            variants={itemVariants}
            className="bg-[#1E1E2A]/70 backdrop-blur-sm p-8 rounded-xl border border-gray-800 mb-10"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Advertise With Me?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-purple-900/50 rounded-full flex items-center justify-center mb-3">
                  <Users className="w-7 h-7 text-purple-400" />
                </div>
                <h4 className="text-white font-bold text-lg">3000+</h4>
                <p className="text-gray-400 text-center">Monthly Visitors</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-blue-900/50 rounded-full flex items-center justify-center mb-3">
                  <TrendingUp className="w-7 h-7 text-blue-400" />
                </div>
                <h4 className="text-white font-bold text-lg">85%</h4>
                <p className="text-gray-400 text-center">Tech Enthusiasts</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-cyan-900/50 rounded-full flex items-center justify-center mb-3">
                  <BarChart className="w-7 h-7 text-cyan-400" />
                </div>
                <h4 className="text-white font-bold text-lg">12%</h4>
                <p className="text-gray-400 text-center">Conversion Rate</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-orange-900/50 rounded-full flex items-center justify-center mb-3">
                  <CreditCard className="w-7 h-7 text-orange-400" />
                </div>
                <h4 className="text-white font-bold text-lg">Flexible</h4>
                <p className="text-gray-400 text-center">Custom Packages</p>
              </div>
            </div>
          </motion.div>
          
          {/* CTA Button */}
          <motion.div variants={itemVariants} className="text-center">
            <a 
              href="mailto:jalilirfan@gmail.com" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#6E2CF4] to-[#00F0FF] text-white font-bold rounded-full shadow-lg hover:shadow-xl transform transition hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact for Advertising Inquiries
            </a>
            <p className="text-gray-400 mt-4">
              Custom packages available to suit your specific marketing goals and budget
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}