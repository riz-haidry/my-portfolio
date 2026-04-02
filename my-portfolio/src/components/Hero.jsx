import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden pt-24 md:pt-20">
      
      {/* Dynamic Background Glows - Responsive sizes */}
      <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-[#00E5FF]/20 blur-[80px] md:blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-600/10 blur-[100px] md:blur-[150px] rounded-full" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        
        {/* Badge - Adjusted for small screens */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 inline-block px-4 py-1.5 rounded-full border border-[#00E5FF]/20 bg-[#00E5FF]/5 text-[#00E5FF] text-[8px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase"
        >
          Specializing in MERN Stack & UI/UX
        </motion.div>

        {/* Heading  */}
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-9xl font-black text-white leading-[1.1] md:leading-[0.8] tracking-tighter mb-8"
        >
          Full-Stack <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-blue-400 to-indigo-600">
            DEVELOPER.
          </span>
        </motion.h1>

        {/* Paragraph  */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-xl mx-auto text-gray-400 text-base md:text-xl font-light mb-10 md:mb-12 leading-relaxed"
        >
          I am <span className="text-white font-bold">Rizwan</span>. 
          Expert in building scalable <span className="text-[#00E5FF]">Frontend</span> architectures and 
          robust <span className="text-[#00E5FF]">Full-Stack</span> solutions. 
          Based in Nagpur, available worldwide.
        </motion.p>

        {/* Buttons & Links  */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-6 justify-center"
        >
          <motion.a 
            href="#projects" 
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "#00E5FF",
              color: "#000",
              boxShadow: "0 0 30px rgba(0, 229, 255, 0.6), 0 0 60px rgba(0, 229, 255, 0.2)" 
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 10,
              boxShadow: { duration: 0.4, ease: "easeOut" } // Smooth glow transition
            }}
            className="w-full md:w-auto px-10 py-4 bg-white text-black font-black rounded-2xl transition-all text-center tracking-widest text-[11px]"
          >
            MY PROJECTS
          </motion.a>
          
          <div className="flex gap-6 items-center text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-gray-500 mt-2 md:mt-0">
             <a href="https://github.com/rizwan-haidry" className="hover:text-white transition-colors">GITHUB</a>
             <span className="w-1.5 h-1.5 bg-white/10 rounded-full"></span>
             <a href="https://linkedin.com/in/rizwan-haidry-113637213" className="hover:text-white transition-colors">LINKEDIN</a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;