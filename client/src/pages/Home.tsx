import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ShareModal from "@/components/ShareModal";
import Lightbox from "@/components/Lightbox";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import Footer from "@/components/Footer";

export default function Home() {
  const [showShareModal, setShowShareModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight = document.body.scrollHeight - window.innerHeight;
      const progress = window.scrollY / scrollableHeight;
      setScrollProgress(progress * 100);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "intro";
      
      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop - 100;
        const sectionHeight = sectionElement.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleShareModal = () => {
    setShowShareModal(!showShareModal);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  // Timeline events data for the VibeJam journey
  const timelineEvents = [
    {
      date: "March 17, 2025",
      title: "Discovering VibeJam",
      description: "Found @levelsio's VibeJam challenge on Twitter, a competition to create browser games using AI. Excited to join despite having zero game development experience!",
      imageSrc: "/timeline-discovery.svg",
      tools: "Initial research & planning"
    },
    {
      date: "March 20, 2025",
      title: "Paper Plane Game",
      description: "First one-day attempt with Cursor AI assistance. Created a simple paper plane flying game with basic physics and wind mechanics. Learning the basics of game development while struggling with collision detection.",
      imageSrc: "/timeline-paperplane.svg",
      tools: "Built with Cursor AI"
    },
    {
      date: "March 25, 2025",
      title: "Fractal Drop Game",
      description: "Second one-day attempt using ChatGPT for code generation. Developed a more visually interesting concept where players navigate through procedurally generated fractal patterns with increasing difficulty.",
      imageSrc: "/timeline-fractal.svg",
      tools: "Powered by ChatGPT"
    },
    {
      date: "March 31, 2025",
      title: "Physics Puzzle Game",
      description: "Third one-day attempt using Replit AI. Created a physics-based puzzle game with object manipulation mechanics, pulleys, and levers. Getting closer to something playable!",
      imageSrc: "/timeline-physics.svg",
      tools: "Created with Replit AI"
    },
    {
      date: "April 2, 2025",
      title: "LagRange in Space",
      description: "Final successful submission! A cosmic adventure game set in Lagrangian points with unique zero-gravity mechanics, puzzle-solving, and an engaging storyline about space exploration. Using all three AI tools together made this possible!",
      imageSrc: "/timeline-lagrange.svg",
      tools: "Cursor AI + Replit AI + ChatGPT"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen"
    >
      {/* 3D Stars Background */}
      <div className="fixed inset-0 z-[-1]">
        <Canvas>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>
      
      {/* Progress Bar */}
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />
      
      {/* Navigation */}
      <Navbar 
        showMobileMenu={showMobileMenu} 
        toggleMobileMenu={toggleMobileMenu}
        toggleShareModal={toggleShareModal}
      />
      
      {/* Hero Section */}
      <section id="intro" className="min-h-screen flex items-center justify-center py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient mb-6">
              VibeJam Challenge Journey
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              My odyssey creating AI-generated browser games for <a href="https://twitter.com/levelsio" target="_blank" rel="noopener noreferrer" className="text-gradient font-medium hover:underline">Pieter Levels'</a> VibeJam competition
            </p>
            <motion.div 
              className="flex flex-col md:flex-row gap-4 justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a 
                href="#timeline" 
                className="space-button px-8 py-3 rounded-lg text-white font-medium hover:text-white"
              >
                View Journey
              </a>
              <button 
                onClick={toggleShareModal}
                className="space-button px-8 py-3 rounded-lg text-white font-medium hover:text-white"
              >
                Share My Story
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section id="timeline" className="py-20 px-4 md:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient">
            The VibeJam Timeline
          </h2>
          
          <div className="relative timeline-container">
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`timeline-item card-glassmorphism ${
                  index % 2 === 0 ? "timeline-item-right ml-auto md:ml-[50%] md:pr-12" : "timeline-item-left mr-auto md:mr-[50%] md:pl-12"
                } max-w-full md:max-w-[48%] card-hover gradient-border-animated`}
              >
                <div className="space-y-4">
                  <span className="text-mono text-sm tracking-wider text-purple-300">{event.date}</span>
                  <h3 className="text-2xl font-bold text-gradient">{event.title}</h3>
                  <p className="text-gray-300">{event.description}</p>
                  {/* Timeline image */}
                  <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden mt-4">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${event.imageSrc})` }}
                      onClick={() => openLightbox(event.imageSrc)}
                    ></div>
                  </div>
                  {/* Tool attribution */}
                  {event.tools && (
                    <div className="flex items-center space-x-2 mt-2">
                      <div className="h-1 w-1 rounded-full bg-purple-400"></div>
                      <span className="text-sm text-cyan-300 font-medium">{event.tools}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Game Showcase Section */}
      <section id="showcase" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient">
            Game Showcase: LagRange in Space
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gradient">The Final Submission</h3>
              <p className="text-gray-300">
                After multiple attempts and learning from each failure, I finally created LagRange in Space - 
                a browser game that combines exploration, puzzle solving, and narrative elements in a cosmic setting.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Three-dimensional space navigation with intuitive controls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Atmospheric sound design and visual effects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Progressive difficulty with engaging puzzles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Built entirely with AI assistance and browser technologies</span>
                </li>
              </ul>
              <div className="pt-4">
                <a 
                  href="https://lagrange-in-space.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="space-button px-6 py-2 rounded-lg text-white font-medium hover:text-white inline-flex items-center"
                >
                  Play the Game
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="card-glassmorphism p-1 rounded-lg gradient-border-animated"
            >
              <div className="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/placeholder" 
                  title="LagRange in Space Gameplay"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Development Process Section */}
      <section id="process" className="py-20 px-4 md:px-8 bg-[rgba(14,20,33,0.3)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient">
            The Development Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Process Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card-glassmorphism p-6 rounded-lg card-hover"
            >
              <div className="mb-4 text-purple-400 text-4xl">01</div>
              <h3 className="text-xl font-bold mb-3">Ideation & Design</h3>
              <p className="text-gray-300">
                Each game started with brainstorming sessions using AI tools to generate concepts.
                I focused on creating games that would be visually appealing and fun to play while
                being technically feasible in a browser environment.
              </p>
            </motion.div>
            
            {/* Process Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card-glassmorphism p-6 rounded-lg card-hover"
            >
              <div className="mb-4 text-purple-400 text-4xl">02</div>
              <h3 className="text-xl font-bold mb-3">Prototyping</h3>
              <p className="text-gray-300">
                Rapid prototyping allowed me to test core mechanics quickly.
                I built minimal viable versions of each game to validate the concept
                before committing to full development, saving valuable time.
              </p>
            </motion.div>
            
            {/* Process Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="card-glassmorphism p-6 rounded-lg card-hover"
            >
              <div className="mb-4 text-purple-400 text-4xl">03</div>
              <h3 className="text-xl font-bold mb-3">Implementation</h3>
              <p className="text-gray-300">
                Using modern web technologies and AI assistance, I implemented
                each game with a focus on performance and user experience.
                Iterative testing helped refine controls and gameplay elements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Documentation Section */}
      <section id="docs" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient">
            Documenting the Journey
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-glassmorphism p-6 rounded-lg gradient-border-animated"
            >
              <h3 className="text-xl font-bold mb-4">Social Media Updates</h3>
              <div className="space-y-4">
                <div className="p-4 bg-[rgba(20,30,50,0.4)] rounded-lg">
                  <div className="flex items-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                    <span className="font-medium">Twitter Update - Day 5</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    "Day 5 of #VibeJam: Paper Plane game controls are finally working! 
                    Still struggling with collision detection but making progress. 
                    The journey continues! @levelsio"
                  </p>
                </div>
                
                <div className="p-4 bg-[rgba(20,30,50,0.4)] rounded-lg">
                  <div className="flex items-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Instagram - Day 10</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    "Fractal Drop game has beautiful visuals now! Spent the whole day tweaking
                    the rendering pipeline. Worth it for these hypnotic patterns! #VibeJam #GameDev"
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold mb-4">Video Documentation</h3>
              <div className="card-glassmorphism rounded-lg overflow-hidden gradient-border-animated">
                <div className="video-container">
                  <iframe 
                    src="https://www.youtube.com/embed/placeholder2" 
                    title="VibeJam Development Log"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <p className="text-gray-300">
                I recorded my progress throughout the challenge, sharing both successes and setbacks.
                These development logs became an unexpected source of community support and feedback.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Lessons Learned Section */}
      <section id="lessons" className="py-20 px-4 md:px-8 bg-[rgba(14,20,33,0.3)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient">
            Lessons Learned
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-glassmorphism p-8 rounded-lg gradient-border-animated relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-400"></div>
              <h3 className="text-2xl font-bold mb-6 text-gradient">Key Takeaways</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-purple-400 text-xl mr-3">1.</span>
                  <div>
                    <h4 className="font-bold text-white">Fail Fast, Learn Faster</h4>
                    <p className="text-gray-300 mt-1">
                      Each failed game taught me valuable lessons that contributed to the final success.
                      Embracing failure as part of the creative process was essential.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 text-xl mr-3">2.</span>
                  <div>
                    <h4 className="font-bold text-white">Start Simple, Then Expand</h4>
                    <p className="text-gray-300 mt-1">
                      Beginning with core mechanics and expanding once they worked well
                      proved more effective than trying to build complex systems all at once.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 text-xl mr-3">3.</span>
                  <div>
                    <h4 className="font-bold text-white">Community Feedback is Invaluable</h4>
                    <p className="text-gray-300 mt-1">
                      Sharing progress publicly brought unexpected support and critical feedback
                      that helped shape the final game in ways I couldn't have achieved alone.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <blockquote className="card-glassmorphism p-6 rounded-lg italic text-xl text-gray-300 relative">
                <svg className="absolute top-4 left-4 h-10 w-10 text-purple-500/20" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative z-10 pl-12">
                  The most important lesson was that persistence through multiple failures
                  is what ultimately leads to success. Each game attempt brought me closer
                  to creating something I could be proud of.
                </p>
              </blockquote>
              
              <div className="p-6 card-glassmorphism rounded-lg">
                <h4 className="font-bold text-xl mb-3">Skills Developed</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-purple-500 mr-2"></div>
                    <span>Game Design</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                    <span>JavaScript/Canvas</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-cyan-500 mr-2"></div>
                    <span>Three.js</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-pink-500 mr-2"></div>
                    <span>Creative Problem Solving</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                    <span>AI Collaboration</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                    <span>User Experience Design</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Connect Section */}
      <section id="connect" className="py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">
              Continue the Conversation
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I'd love to hear about your experiences with game development or AI-assisted creation.
              Let's connect and share our stories!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a href="https://twitter.com/Jalil" target="_blank" rel="noopener noreferrer" className="space-button px-6 py-3 rounded-lg text-white flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                Twitter
              </a>
              
              <a href="https://linkedin.com/in/jalil-irfan" target="_blank" rel="noopener noreferrer" className="space-button px-6 py-3 rounded-lg text-white flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              
              <button onClick={toggleShareModal} className="space-button px-6 py-3 rounded-lg text-white flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
                Share Story
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Tools Section */}
      <section id="tools" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient">
            Tools Behind the Journey
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pieter Levels Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card-glassmorphism p-6 rounded-lg card-hover gradient-border-animated"
            >
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Pieter Levels</h3>
                <p className="text-purple-300 text-sm mt-1">Creator of VibeJam Challenge</p>
              </div>
              <p className="text-gray-300 text-sm text-center">
                Indie maker and founder of Nomad List, Remote OK, and many other successful projects. 
                His VibeJam challenge inspired developers worldwide to create AI-powered browser games.
              </p>
              <div className="mt-4 text-center">
                <a 
                  href="https://twitter.com/levelsio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-300 hover:text-cyan-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  @levelsio
                </a>
              </div>
            </motion.div>
            
            {/* Cursor AI Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card-glassmorphism p-6 rounded-lg card-hover gradient-border-animated"
            >
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Cursor AI</h3>
                <p className="text-purple-300 text-sm mt-1">AI-powered code editor</p>
              </div>
              <p className="text-gray-300 text-sm text-center">
                An advanced code editor with AI capabilities that helped me rapidly develop game mechanics
                and solve complex programming challenges throughout the journey.
              </p>
              <div className="mt-4 text-center">
                <a 
                  href="https://cursor.sh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-300 hover:text-cyan-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                  </svg>
                  cursor.sh
                </a>
              </div>
            </motion.div>
            
            {/* Replit AI Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card-glassmorphism p-6 rounded-lg card-hover gradient-border-animated"
            >
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Replit AI</h3>
                <p className="text-purple-300 text-sm mt-1">Online IDE and coding platform</p>
              </div>
              <p className="text-gray-300 text-sm text-center">
                A powerful online development environment that enabled rapid prototyping 
                and deployment of my browser games, complete with integrated AI assistance.
              </p>
              <div className="mt-4 text-center">
                <a 
                  href="https://replit.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-300 hover:text-cyan-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                  </svg>
                  replit.com
                </a>
              </div>
            </motion.div>
            
            {/* ChatGPT Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card-glassmorphism p-6 rounded-lg card-hover gradient-border-animated"
            >
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">ChatGPT</h3>
                <p className="text-purple-300 text-sm mt-1">AI language model by OpenAI</p>
              </div>
              <p className="text-gray-300 text-sm text-center">
                A versatile AI assistant that provided game design ideas, helped debug code,
                and offered solutions to game development challenges throughout the process.
              </p>
              <div className="mt-4 text-center">
                <a 
                  href="https://chat.openai.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-300 hover:text-cyan-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                  </svg>
                  chat.openai.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer toggleShareModal={toggleShareModal} />
      
      {/* Modals */}
      <AnimatePresence>
        {showShareModal && (
          <ShareModal isOpen={showShareModal} onClose={() => setShowShareModal(false)} />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {lightboxImage && (
          <Lightbox imageSrc={lightboxImage} onClose={closeLightbox} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
