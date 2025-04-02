import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useIsMobile } from "../hooks/use-mobile";

export default function YouTubeTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const isMobile = useIsMobile();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
  
  // YouTube videos data for the timeline
  const youtubeVideos = [
    {
      id: "1",
      date: "March 20, 2025",
      title: "Starting the #VibeJam Challenge",
      description: "My first video discussing the challenge and initial ideas for the game.",
      link: "https://youtube.com/watch?v=dQw4w9WgXcQ" // Placeholder link - replace with actual video link
    },
    {
      id: "2", 
      date: "March 23, 2025",
      title: "Physics Engine Implementation",
      description: "Implementing the core physics engine for the LagRange game.",
      link: "https://youtube.com/watch?v=dQw4w9WgXcQ" // Placeholder link - replace with actual video link
    },
    {
      id: "3",
      date: "March 25, 2025",
      title: "Creating Space Assets and UI",
      description: "Designing the space-themed assets and user interface for the game.",
      link: "https://youtube.com/watch?v=dQw4w9WgXcQ" // Placeholder link - replace with actual video link
    },
    {
      id: "4",
      date: "March 28, 2025",
      title: "Implementing Game Mechanics",
      description: "Adding core gameplay features including Lagrange point navigation.",
      link: "https://youtube.com/watch?v=dQw4w9WgXcQ" // Placeholder link - replace with actual video link
    },
    {
      id: "5",
      date: "March 30, 2025",
      title: "Testing and Debugging",
      description: "Fixing bugs and optimizing the game mechanics.",
      link: "https://youtube.com/watch?v=dQw4w9WgXcQ" // Placeholder link - replace with actual video link
    },
    {
      id: "6",
      date: "April 2, 2025",
      title: "Launch Day! #VibeJam Submission",
      description: "Submitting my game to the #VibeJam challenge and reflecting on the process.",
      link: "https://youtube.com/watch?v=dQw4w9WgXcQ" // Placeholder link - replace with actual video link
    }
  ];

  return (
    <section id="youtube" className="py-20 bg-[#0A0E17] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 rounded-full bg-[#6E2CF4] blur-[100px] -top-20 -right-20"></div>
        <div className="absolute w-96 h-96 rounded-full bg-[#00F0FF] blur-[100px] -bottom-20 -left-20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6E2CF4] to-[#00F0FF]">
          Development Journey on YouTube
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-gray-300">
          Follow my progress as I built the LagRange game for the #VibeJam challenge. These videos document each step of the development process.
        </p>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#6E2CF4] to-[#00F0FF]" 
               style={{ display: isMobile ? 'none' : 'block' }}></div>
          
          {/* Timeline items */}
          <div className="space-y-16 relative">
            {youtubeVideos.map((video, index) => (
              <motion.div
                key={video.id}
                variants={itemVariants}
                className={`flex ${isMobile ? 'flex-col' : (index % 2 === 0 ? 'flex-row' : 'flex-row-reverse')} items-center`}
              >
                {/* Content */}
                <div className={`z-10 ${isMobile ? 'w-full' : 'w-5/12'}`}>
                  <div className="bg-[#1E1E2A] p-6 rounded-xl shadow-lg border border-gray-800">
                    <p className="text-[#00F0FF] text-sm font-mono mb-2">{video.date}</p>
                    <h3 className="text-white text-xl font-bold mb-3">{video.title}</h3>
                    <p className="text-gray-300 mb-4">{video.description}</p>
                    <a 
                      href={video.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-[#FF0000] text-white rounded-lg hover:bg-[#FF0000]/90 transition-colors"
                    >
                      <i className="fab fa-youtube mr-2"></i> Watch Video
                    </a>
                  </div>
                </div>
                
                {/* Timeline connector */}
                {!isMobile && (
                  <div className="z-20 w-2/12 flex justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#6E2CF4] border-4 border-[#0A0E17] flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#00F0FF] rounded-full"></div>
                    </div>
                  </div>
                )}
                
                {/* Empty space for the opposite side */}
                {!isMobile && <div className="w-5/12"></div>}
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://www.youtube.com/@JalilIrfan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-[#6E2CF4]/40 text-white rounded-lg hover:border-[#6E2CF4] transition-all"
          >
            <i className="fab fa-youtube mr-2"></i> View All Videos
          </a>
        </div>
      </div>
    </section>
  );
}