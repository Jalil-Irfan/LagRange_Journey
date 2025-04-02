import { motion } from "framer-motion";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const shareMessage = "Check out this cool AI-built space game! #VibeJam @levelsio";
  
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
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent("My First Vibe Coding Experience")}&summary=${encodeURIComponent(shareMessage)}`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(shareMessage + " " + currentUrl)}`;
        break;
      case "email":
        shareUrl = `mailto:?subject=${encodeURIComponent("My First Vibe Coding Experience")}&body=${encodeURIComponent(shareMessage + "\n\n" + currentUrl)}`;
        break;
      case "copy":
        navigator.clipboard.writeText(shareMessage + " " + currentUrl)
          .then(() => alert("Link copied to clipboard!"))
          .catch((err) => console.error("Could not copy text: ", err));
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }
  };

  const copyMessage = () => {
    navigator.clipboard.writeText(shareMessage)
      .then(() => alert("Message copied to clipboard!"))
      .catch((err) => console.error("Could not copy text: ", err));
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.3 }}
      onClick={handleBackdropClick}
    >
      <motion.div 
        className="bg-[#1E1E2A] w-full max-w-md m-4 p-6 rounded-xl"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-heading font-bold">Share This Page</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <p className="text-gray-300 mb-6">Share my VibeJam coding journey with your friends and network!</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
          <motion.a 
            className="social-share-btn flex flex-col items-center justify-center p-4 bg-[#0A0E17] rounded-lg hover:bg-[#080B13] transition-all"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => handleShare("twitter")}
          >
            <i className="fab fa-twitter text-2xl text-blue-400 mb-2"></i>
            <span className="text-sm">Twitter</span>
          </motion.a>
          <motion.a 
            className="social-share-btn flex flex-col items-center justify-center p-4 bg-[#0A0E17] rounded-lg hover:bg-[#080B13] transition-all"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => handleShare("facebook")}
          >
            <i className="fab fa-facebook text-2xl text-blue-600 mb-2"></i>
            <span className="text-sm">Facebook</span>
          </motion.a>
          <motion.a 
            className="social-share-btn flex flex-col items-center justify-center p-4 bg-[#0A0E17] rounded-lg hover:bg-[#080B13] transition-all"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => handleShare("linkedin")}
          >
            <i className="fab fa-linkedin text-2xl text-blue-700 mb-2"></i>
            <span className="text-sm">LinkedIn</span>
          </motion.a>
          <motion.a 
            className="social-share-btn flex flex-col items-center justify-center p-4 bg-[#0A0E17] rounded-lg hover:bg-[#080B13] transition-all"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => handleShare("whatsapp")}
          >
            <i className="fab fa-whatsapp text-2xl text-green-500 mb-2"></i>
            <span className="text-sm">WhatsApp</span>
          </motion.a>
          <motion.a 
            className="social-share-btn flex flex-col items-center justify-center p-4 bg-[#0A0E17] rounded-lg hover:bg-[#080B13] transition-all"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => handleShare("email")}
          >
            <i className="fas fa-envelope text-2xl text-red-500 mb-2"></i>
            <span className="text-sm">Email</span>
          </motion.a>
          <motion.a 
            className="social-share-btn flex flex-col items-center justify-center p-4 bg-[#0A0E17] rounded-lg hover:bg-[#080B13] transition-all"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => handleShare("copy")}
          >
            <i className="fas fa-link text-2xl text-purple-500 mb-2"></i>
            <span className="text-sm">Copy Link</span>
          </motion.a>
        </div>
        
        <div className="relative">
          <input 
            type="text" 
            value={shareMessage} 
            className="w-full bg-[#0A0E17] border border-gray-700 rounded-lg px-4 py-2 text-gray-300" 
            readOnly
          />
          <button 
            onClick={copyMessage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-[#00F0FF] hover:text-[#6E2CF4] transition-colors"
          >
            Copy
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
