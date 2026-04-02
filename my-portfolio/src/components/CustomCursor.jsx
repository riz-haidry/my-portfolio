import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Mobile check ke liye

  useEffect(() => {
    // Check agar device is not a touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (!isTouchDevice) {
      setIsVisible(true);
      
      const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
      const handleMouseDown = () => setIsClicked(true);
      const handleMouseUp = () => setIsClicked(false);

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, []);

  // Agar mobile (touch) hai toh kuch bhi render nahi hona
  if (!isVisible) return null;

  return (
    <>
      {/* Main Dot - Hidden on small screens  Tailwind */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#00E5FF] rounded-full z-[999] pointer-events-none shadow-[0_0_10px_#00E5FF] hidden md:block"
        animate={{ 
          x: mousePos.x - 6, 
          y: mousePos.y - 6, 
          scale: isClicked ? 1.5 : 1 
        }}
      />
      {/* Neon Trail - Hidden on small screens */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[#00E5FF]/50 rounded-full z-[998] pointer-events-none shadow-[0_0_15px_rgba(0,229,255,0.3)] hidden md:block"
        animate={{ 
          x: mousePos.x - 16, 
          y: mousePos.y - 16,
          scale: isClicked ? 1.8 : 1.2
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 20 }}
      />
    </>
  );
};

export default CustomCursor;