import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SocialCardProps {
  type: "instagram" | "youtube" | "linkedin";
  imageSrc: string;
  title: string;
  content: string;
  date: string;
}

function SocialCard({ type, imageSrc, title, content, date }: SocialCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div 
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-[#1E1E2A] rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-2"
    >
      {type === "instagram" && (
        <>
          <div className="h-[450px] bg-gray-800 relative">
            <iframe
              src="https://www.instagram.com/p/DHabA3gx9aO/embed"
              className="w-full h-full"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-4">
            <div className="flex justify-between mb-4">
              <span className="font-medium">@jalil.irfan</span>
              <span className="text-gray-500 text-sm">{date}</span>
            </div>
            <a 
              href="https://www.instagram.com/p/DHabA3gx9aO/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <i className="fab fa-instagram mr-2"></i> View on Instagram
            </a>
          </div>
        </>
      )}
      
      {type === "youtube" && (
        <>
          <div className="h-64 bg-gray-800 relative">
            <iframe 
              src="https://www.youtube.com/embed/sB_M3uI_HP0" 
              title="Desktop demo recording of the Lagrange game"
              className="w-full h-full" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-4">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Jalil Irfan</span>
              <span className="text-gray-500 text-sm">{date}</span>
            </div>
            <a 
              href="https://youtu.be/sB_M3uI_HP0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center justify-center hover:bg-red-700 transition-colors"
            >
              <i className="fab fa-youtube mr-2"></i> Watch on YouTube
            </a>
          </div>
        </>
      )}
      
      {type === "linkedin" && (
        <div>
          <div className="h-[450px] bg-gray-800 relative">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7310201134873223168"
              height="450"
              width="100%"
              frameBorder="0"
              allowFullScreen
              title="Embedded LinkedIn Post"
            ></iframe>
          </div>
          <div className="p-4">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Jalil Irfan</span>
              <span className="text-gray-500 text-sm">{date}</span>
            </div>
            <a 
              href="https://www.linkedin.com/posts/jalil-irfan_vibecoding-vibejam-uyar-activity-7310201134873223168-NKK1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <i className="fab fa-linkedin mr-2"></i> View on LinkedIn
            </a>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function SocialHighlights() {
  const socialData = [
    {
      type: "instagram" as const,
      imageSrc: "https://imgs.search.brave.com/AjKJu7iQjbZVk7C1sNTJ_FTqLXrR1MuCYU94wGzHw_s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MzE3NDYxMzM0ODkt/MzVjZWU5MWRhNTQ0/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4TVRk/OGZITndZV05sZEh4/bGJud3dmSHd3Zkh4/OE1BPT0mdz0xMDAw/JnE9ODA",
      title: "",
      content: "#vibegame #vibecoding @levelsio @mrdoob Day 1 getting prompt from chatgpt, installing cursor, setting up! 🚀 #VibeCoding #VibeCodingChallenge",
      date: "March 20, 2025"
    },
    {
      type: "youtube" as const,
      imageSrc: "https://imgs.search.brave.com/2fMhDLsZ_ZK36uo42MM7L1E6gL98hJKRKkbvbcIXf-A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9s/YWdyYW5nZS1wb2lu/dC1vcmJpdF8xMDcx/LTEzNDcuanBnP3Np/emU9NjI2JmV4dD1q/cGc",
      title: "Desktop demo recording of the Lagrange game",
      content: "",
      date: "April 2, 2025"
    },
    {
      type: "linkedin" as const,
      imageSrc: "https://imgs.search.brave.com/QYF-PJUu2Xh_Hs5JbNghYGZbTYWGzJ9PUGeJHK4XGKM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MjE5NzYxMzY5MzEt/YmQzMzY4ODdkMTdh/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4TW54/OGZHUmxjM0JoWTJs/OGZERjhmSHd3Zkh4/OE1BPT0mdz0xMDAw/JnE9ODA",
      title: "",
      content: "Down to the last 4 hours! The struggle is real champs. Looking forward to sharing my #vibejam space physics game 'Lagrange' created with Cursor and Replit. Physics-based gameplay with actual orbital mechanics! #VibeCoding #uyar #cursor #replit #GameDev #AIInGaming",
      date: "April 2, 2025"
    }
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  
  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.3 }
    }
  };

  return (
    <section id="social" className="py-20 bg-[#080B13]">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6E2CF4] to-[#00F0FF]">
          Social Highlights
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-gray-300">
          Follow my journey across social platforms where I share updates, behind-the-scenes content, and interact with the community.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {socialData.map((item, index) => (
            <SocialCard 
              key={index}
              type={item.type}
              imageSrc={item.imageSrc}
              title={item.title}
              content={item.content}
              date={item.date}
            />
          ))}
        </div>
        
        <div ref={containerRef} className="mt-12 text-center">
          <motion.div 
            className="inline-flex flex-wrap justify-center gap-4"
            variants={buttonVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <a 
              href="https://instagram.com/jalil.irfan" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 px-6 py-3 bg-[#1E1E2A] rounded-full hover:bg-[#1E1E2A]/70 transition-colors"
            >
              <i className="fab fa-instagram text-xl text-pink-500"></i>
              <span>Follow on Instagram</span>
            </a>
            <a 
              href="https://youtube.com/@jalil-irfan" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 px-6 py-3 bg-[#1E1E2A] rounded-full hover:bg-[#1E1E2A]/70 transition-colors"
            >
              <i className="fab fa-youtube text-xl text-red-600"></i>
              <span>Subscribe on YouTube</span>
            </a>
            <a 
              href="https://linkedin.com/in/jalil-irfan" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 px-6 py-3 bg-[#1E1E2A] rounded-full hover:bg-[#1E1E2A]/70 transition-colors"
            >
              <i className="fab fa-linkedin text-xl text-blue-600"></i>
              <span>Connect on LinkedIn</span>
            </a>
            <a 
              href="https://x.com/Jalil_Irfan" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 px-6 py-3 bg-[#1E1E2A] rounded-full hover:bg-[#1E1E2A]/70 transition-colors"
            >
              <i className="fab fa-twitter text-xl text-blue-400"></i>
              <span>Follow on X (Twitter)</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
