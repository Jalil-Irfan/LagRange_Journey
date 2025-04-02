import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SocialCardProps {
  type: "instagram" | "youtube" | "linkedin";
  imageSrc: string;
  title: string;
  content: string;
  stats: {
    likes?: number;
    comments?: number;
    views?: number;
    date: string;
  };
}

function SocialCard({ type, imageSrc, title, content, stats }: SocialCardProps) {
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
          <div className="h-64 bg-gray-800 relative">
            <img src={imageSrc} alt="Instagram content" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <img src="https://imgs.search.brave.com/xoJlXN3BoMufCgFbjC2-7P2FYMUMvllzbdHMm6L2TIM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy81/ODQ1ZTM1OGNlZjEw/MTRjMGI1ZTM4NjUu/cG5n" alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                  <span className="font-medium">jalil.irfan</span>
                </div>
                <p className="text-sm">{content}</p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between mb-4">
              <div className="flex space-x-3">
                <button className="text-gray-400 hover:text-[#FF2D92] transition-colors">
                  <i className="far fa-heart"></i> {stats.likes}
                </button>
                <button className="text-gray-400 hover:text-gray-300 transition-colors">
                  <i className="far fa-comment"></i> {stats.comments}
                </button>
              </div>
              <span className="text-gray-500 text-sm">{stats.date}</span>
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
            <img src={imageSrc} alt="YouTube thumbnail" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-red-600/80 flex items-center justify-center cursor-pointer">
                <i className="fas fa-play text-white text-xl"></i>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <div>
                <h3 className="font-medium">{title}</h3>
                <p className="text-sm text-gray-400">Jalil Irfan</p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between mb-4">
              <div className="flex space-x-3">
                <div className="text-gray-400">
                  <i className="far fa-eye"></i> {stats.views} views
                </div>
                <div className="text-gray-400">
                  <i className="far fa-thumbs-up"></i> {stats.likes}
                </div>
              </div>
              <span className="text-gray-500 text-sm">{stats.date}</span>
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
        <div className="p-6">
          <div className="flex items-center mb-4">
            <img src="https://imgs.search.brave.com/xoJlXN3BoMufCgFbjC2-7P2FYMUMvllzbdHMm6L2TIM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy81/ODQ1ZTM1OGNlZjEw/MTRjMGI1ZTM4NjUu/cG5n" alt="Profile" className="w-12 h-12 rounded-full mr-3" />
            <div>
              <h3 className="font-medium">Jalil Irfan</h3>
              <p className="text-sm text-gray-400">Software Developer | Game Designer | AI Enthusiast</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-gray-300">{content}</p>
            <div className="mt-3">
              <span className="text-sm text-[#00F0FF]">#GameDevelopment #AI #VibeJam #Coding</span>
            </div>
          </div>
          <img src={imageSrc} alt="LinkedIn post image" className="w-full h-48 object-cover rounded-lg mb-4" />
          <div className="flex justify-between mb-4">
            <div className="flex space-x-1 items-center text-sm">
              <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                <i className="fas fa-thumbs-up"></i>
              </span>
              <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                <i className="fas fa-heart"></i>
              </span>
              <span className="text-gray-400">{stats.likes}</span>
            </div>
            <div className="text-gray-400 text-sm">
              <span>{stats.comments} comments</span>
            </div>
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
      stats: {
        likes: 124,
        comments: 18,
        date: "March 20, 2025"
      }
    },
    {
      type: "youtube" as const,
      imageSrc: "https://imgs.search.brave.com/2fMhDLsZ_ZK36uo42MM7L1E6gL98hJKRKkbvbcIXf-A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9s/YWdyYW5nZS1wb2lu/dC1vcmJpdF8xMDcx/LTEzNDcuanBnP3Np/emU9NjI2JmV4dD1q/cGc",
      title: "Desktop demo recording of the Lagrange game",
      content: "",
      stats: {
        views: 342,
        likes: 56,
        date: "April 2, 2025"
      }
    },
    {
      type: "linkedin" as const,
      imageSrc: "https://imgs.search.brave.com/QYF-PJUu2Xh_Hs5JbNghYGZbTYWGzJ9PUGeJHK4XGKM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MjE5NzYxMzY5MzEt/YmQzMzY4ODdkMTdh/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4TW54/OGZHUmxjM0JoWTJs/OGZERjhmSHd3Zkh4/OE1BPT0mdz0xMDAw/JnE9ODA",
      title: "",
      content: "Down to the last 4 hours! The struggle is real champs. Looking forward to sharing my #vibejam space physics game 'Lagrange' created with Cursor and Replit. Physics-based gameplay with actual orbital mechanics! #VibeCoding #uyar #cursor #replit #GameDev #AIInGaming",
      stats: {
        likes: 86,
        comments: 23,
        date: "April 2, 2025"
      }
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
              stats={item.stats}
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
