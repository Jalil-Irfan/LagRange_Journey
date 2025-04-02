import { motion } from "framer-motion";
import { LucideX, LucideTwitter, LucideFacebook, LucideLinkedin, LucideMail, LucideLink, LucideClipboard, LucideMessageSquare } from "lucide-react";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const shareMessage = "Follow my VibeJam journey: 16 days of creating AI-generated browser games for @levelsio's competition! #VibeJam #GameDev";
  
  const handleShare = (platform: string) => {
    let shareUrl = "";
    const currentUrl = window.location.href;
    
    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}&url=${encodeURIComponent(currentUrl)}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&quote=${encodeURIComponent(shareMessage)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent("VibeJam Challenge Journey")}&summary=${encodeURIComponent(shareMessage)}`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(shareMessage + " " + currentUrl)}`;
        break;
      case "email":
        shareUrl = `mailto:?subject=${encodeURIComponent("VibeJam Challenge Journey")}&body=${encodeURIComponent(shareMessage + "\n\n" + currentUrl)}`;
        break;
      case "copy":
        navigator.clipboard.writeText(currentUrl)
          .then(() => {
            const toast = document.createElement('div');
            toast.className = 'fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50';
            toast.textContent = 'Link copied to clipboard!';
            document.body.appendChild(toast);
            setTimeout(() => {
              toast.remove();
            }, 3000);
          })
          .catch((err) => console.error("Could not copy text: ", err));
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }
  };

  const copyMessage = () => {
    navigator.clipboard.writeText(shareMessage)
      .then(() => {
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50';
        toast.textContent = 'Message copied to clipboard!';
        document.body.appendChild(toast);
        setTimeout(() => {
          toast.remove();
        }, 3000);
      })
      .catch((err) => console.error("Could not copy text: ", err));
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const socialPlatforms = [
    { id: "twitter", name: "Twitter", icon: <LucideTwitter className="w-5 h-5 md:w-6 md:h-6" />, color: "text-blue-400" },
    { id: "facebook", name: "Facebook", icon: <LucideFacebook className="w-5 h-5 md:w-6 md:h-6" />, color: "text-blue-600" },
    { id: "linkedin", name: "LinkedIn", icon: <LucideLinkedin className="w-5 h-5 md:w-6 md:h-6" />, color: "text-blue-700" },
    { id: "whatsapp", name: "WhatsApp", icon: <LucideMessageSquare className="w-5 h-5 md:w-6 md:h-6" />, color: "text-green-500" },
    { id: "email", name: "Email", icon: <LucideMail className="w-5 h-5 md:w-6 md:h-6" />, color: "text-red-400" },
    { id: "copy", name: "Copy Link", icon: <LucideLink className="w-5 h-5 md:w-6 md:h-6" />, color: "text-purple-400" },
  ];

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.3 }}
      onClick={handleBackdropClick}
    >
      <motion.div 
        className="card-glassmorphism w-full max-w-md m-4 p-6 rounded-2xl gradient-border-animated"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-heading font-bold text-gradient">Share My Journey</h3>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-800/50 transition-colors"
            aria-label="Close"
          >
            <LucideX className="w-5 h-5" />
          </button>
        </div>
        
        <p className="text-gray-300 mb-8">Share my VibeJam coding odyssey with your friends and network!</p>
        
        <div className="grid grid-cols-3 gap-4 mb-8">
          {socialPlatforms.map((platform) => (
            <motion.button 
              key={platform.id}
              className="social-share-btn flex flex-col items-center justify-center p-4 bg-[rgba(10,14,23,0.5)] rounded-xl hover:bg-[rgba(20,30,50,0.5)] transition-all space-y-2"
              whileHover={{ y: -3, backgroundColor: "rgba(30,40,70,0.5)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={() => handleShare(platform.id)}
            >
              <div className={`${platform.color}`}>
                {platform.icon}
              </div>
              <span className="text-xs md:text-sm">{platform.name}</span>
            </motion.button>
          ))}
        </div>
        
        <div className="relative">
          <div className="p-3 bg-[rgba(10,14,23,0.5)] border border-[rgba(138,43,226,0.3)] rounded-xl text-gray-200 text-sm">
            {shareMessage}
          </div>
          <button 
            onClick={copyMessage}
            className="absolute right-3 bottom-3 text-sm text-[#40E0D0] hover:text-[#8A2BE2] transition-colors flex items-center space-x-1"
          >
            <LucideClipboard className="w-4 h-4" />
            <span>Copy</span>
          </button>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">Thanks for helping spread the word about my VibeJam journey!</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
