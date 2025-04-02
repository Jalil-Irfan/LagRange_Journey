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
      title: "Starting with an Idea",
      description: "The journey began with brainstorming and research. I explored different game concepts and decided on a space shooter with a twist.",
      icon: "fas fa-lightbulb",
      iconColor: "purple",
      imageSrc: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Brainstorming session"
    },
    {
      day: "Day 3",
      title: "Learning Three.js Basics",
      description: "Diving into Three.js documentation, I experimented with creating 3D objects and understanding the rendering pipeline.",
      icon: "fas fa-book",
      iconColor: "cyan",
      imageSrc: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Learning code",
      isRight: true
    },
    {
      day: "Day 7",
      title: "First Playable Prototype",
      description: "After a week of coding and testing, I had a basic prototype with ship movement and simple asteroid obstacles.",
      icon: "fas fa-rocket",
      iconColor: "purple",
      imageSrc: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Game prototype"
    },
    {
      day: "Day 14",
      title: "Launch Day",
      description: "The final touches were added - sound effects, score tracking, and difficulty progression. Time to share with the world!",
      icon: "fas fa-flag-checkered",
      iconColor: "cyan",
      imageSrc: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Launch celebration",
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
