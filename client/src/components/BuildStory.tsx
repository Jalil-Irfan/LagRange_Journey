import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TimelineItemProps {
  day: string;
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  imageSrc: string;
  imageAlt: string;
  isRight?: boolean;
}

function TimelineItem({ 
  day, 
  title, 
  description, 
  icon, 
  iconColor, 
  imageSrc, 
  imageAlt, 
  isRight = false 
}: TimelineItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7 }
    }
  };

  return (
    <motion.div 
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="mb-24 flex flex-col md:flex-row items-center"
    >
      <div className={`md:w-1/2 p-4 order-2 ${isRight ? 'md:order-3' : 'md:order-1'}`}>
        <div className="bg-[#1E1E2A] p-6 rounded-xl shadow-lg">
          <span className="inline-block px-3 py-1 text-xs rounded-full bg-[#6E2CF4]/20 text-[#6E2CF4] border border-[#6E2CF4]/30 mb-3">
            {day}
          </span>
          <h3 className="font-heading text-xl font-bold mb-3">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
      <div className={`w-12 h-12 bg-[#1E1E2A] rounded-full flex items-center justify-center z-10 mx-auto my-6 md:my-0 order-1 md:order-2 ${
        iconColor === 'purple' ? 'purple-glow' : 'cyan-glow'
      }`}>
        <i className={`${icon} text-${iconColor === 'purple' ? '[#6E2CF4]' : '[#00F0FF]'}`}></i>
      </div>
      <div className={`md:w-1/2 p-4 order-3 ${isRight ? 'md:order-1' : 'md:order-3'}`}>
        <img src={imageSrc} alt={imageAlt} className="rounded-lg shadow-lg w-full h-48 object-cover" />
      </div>
    </motion.div>
  );
}

export default function BuildStory() {
  const timelineData = [
    {
      day: "Day 1",
      title: "Paper Plane Game",
      description: "Started the VibeJam challenge by creating a simple 2D paper plane game where players guide a plane through obstacles. Used Cursor AI to help write the basic physics for the plane movement.",
      icon: "fas fa-paper-plane",
      iconColor: "cyan",
      imageSrc: "https://imgs.search.brave.com/yWQBcuRf9NtuvGbQBeiRFGMc5gAJ0wm8DdxKh_zTu6c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MzI2MTYzMjI0MDIt/OWE2MWVhNTI3NWVm/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TW53/eE1qQTNmREI4TUh4/elpXRnlZMmg4T1h4/OGNHRndaWEpmY0d4/aGJtVjhmR1Z1Zkh3/d2ZId3dmSHd3Jnc9/MTAwMCZxPTgw",
      imageAlt: "Paper Plane Game"
    },
    {
      day: "Day 2",
      title: "Fractal Drop",
      description: "Built Fractal Drop, a hypnotic endless runner where players navigate through procedurally generated fractal patterns. ChatGPT and Cursor helped with the fractal generation algorithms.",
      icon: "fas fa-square-root-alt",
      iconColor: "purple",
      imageSrc: "https://imgs.search.brave.com/QYF-PJUu2Xh_Hs5JbNghYGZbTYWGzJ9PUGeJHK4XGKM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MjE5NzYxMzY5MzEt/YmQzMzY4ODdkMTdh/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4TW54/OGZHUmxjM0JoWTJs/OGZERjhmSHd3Zkh4/OE1BPT0mdz0xMDAw/JnE9ODA",
      imageAlt: "Fractal Drop Game",
      isRight: true
    },
    {
      day: "Day 3",
      title: "Physics Game Experiments",
      description: "Experimented with a physics-based game that became the foundation for LagRange. Explored Three.js and gravity simulations with help from Replit's collaborative features.",
      icon: "fas fa-atom",
      iconColor: "cyan",
      imageSrc: "https://imgs.search.brave.com/8qIGUTxXlJKZN57vM0zqj1NrKNAYVXdkl-cYrZt-MQo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/NDY3NzY3MDk5ODQt/MWI3M2Y2NjRjYzVk/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TW53/eE1qQTNmREI4TUh4/elpXRnlZMmg4TW54/OGMyTnBaVzVqWlh4/bGJud3dmSHd3Zkh3/OCZ3PTEwMDAmcT04/MA",
      imageAlt: "Physics Game Experiments"
    },
    {
      day: "April 1 - Day 5",
      title: "LagRange - The Final Game",
      description: "Started and completed LagRange in a single day! A space physics game with actual orbital mechanics where players navigate satellites through orbital challenges. Built with Cursor and Replit's powerful tools.",
      icon: "fas fa-satellite",
      iconColor: "purple",
      imageSrc: "https://imgs.search.brave.com/2fMhDLsZ_ZK36uo42MM7L1E6gL98hJKRKkbvbcIXf-A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9s/YWdyYW5nZS1wb2lu/dC1vcmJpdF8xMDcx/LTEzNDcuanBnP3Np/emU9NjI2JmV4dD1q/cGc",
      imageAlt: "LagRange Game",
      isRight: true
    }
  ];

  return (
    <section id="build" className="py-20 bg-gradient-to-b from-[#0A0E17] to-[#080B13]">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6E2CF4] to-[#00F0FF]">
          Build Story
        </h2>
        
        <div className="relative timeline-container max-w-4xl mx-auto">
          {timelineData.map((item, index) => (
            <TimelineItem 
              key={index}
              day={item.day}
              title={item.title}
              description={item.description}
              icon={item.icon}
              iconColor={item.iconColor}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              isRight={item.isRight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
