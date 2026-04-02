import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ onResumeClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }, 
  ];

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenu(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      scrolled ? 'py-3 md:py-4' : 'py-6 md:py-8'
    }`}>
      {/* Container  */}
      <div className={`max-w-5xl mx-auto px-5 py-3 rounded-full transition-all duration-500 flex justify-between items-center relative mx-4 md:mx-auto ${
        scrolled 
        ? 'bg-black/60 backdrop-blur-2xl border border-[#00E5FF]/30 shadow-[0_0_25px_rgba(0,229,255,0.2)]' 
        : 'bg-transparent border border-transparent'
      }`}>
        
        {scrolled && (
          <div className="absolute inset-0 rounded-full bg-[#00E5FF]/5 animate-pulse -z-10" />
        )}

        <motion.a 
          href="#home" 
          onClick={(e) => handleScrollTo(e, '#home')}
          whileHover={{ scale: 1.05 }}
          className="text-lg md:text-xl font-black text-white tracking-tighter flex items-center group"
        >
          RIZWAN
          <span className="text-[#00E5FF] ml-0.5 drop-shadow-[0_0_12px_#00E5FF] group-hover:animate-bounce">.</span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 hover:text-[#00E5FF] transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#00E5FF] rounded-full opacity-0 group-hover:opacity-100 shadow-[0_0_8px_#00E5FF] transition-all"></span>
              </a>
            ))}
            
            <button 
              onClick={onResumeClick}
              className="text-[10px] font-black uppercase tracking-[0.25em] text-[#00E5FF] hover:drop-shadow-[0_0_10px_#00E5FF] transition-all duration-300 relative group"
            >
              Resume
            </button>
          </div>
          
          <motion.a 
            href="https://wa.me/919325281316"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 229, 255, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="text-[10px] font-black uppercase tracking-[0.2em] px-8 py-3 bg-[#00E5FF] text-black rounded-full cursor-pointer"
          >
            Hire Me
          </motion.a>
        </div>
        
        {/* Mobile Toggle  */}
        <button 
          onClick={() => setMobileMenu(!mobileMenu)} 
          className="md:hidden p-2 text-[#00E5FF] text-2xl z-[101]"
        >
          {mobileMenu ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu  */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ y: "100%", opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            exit={{ y: "100%", opacity: 0 }} 
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-6 z-[90] md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a 
                key={link.name} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                href={link.href} 
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-4xl font-black text-gray-500 active:text-[#00E5FF] transition-all uppercase tracking-tighter"
              >
                {link.name}
              </motion.a>
            ))}

            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={() => { onResumeClick(); setMobileMenu(false); }}
              className="text-4xl font-black text-[#00E5FF] uppercase tracking-tighter"
            >
              Resume
            </motion.button>
            
            <motion.a 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              href="https://wa.me/919325281316"
              className="text-xl font-black text-black bg-[#00E5FF] px-12 py-4 rounded-full mt-6 shadow-[0_10px_30px_rgba(0,229,255,0.3)]"
            >
              HIRE ME
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;