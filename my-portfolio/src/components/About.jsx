import { motion } from 'framer-motion';
import rizwanImg from '../assets/RizwanHaidry.png'; 

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Subtle Text */}
      <div className="absolute top-10 right-10 opacity-[0.02] text-9xl font-black select-none pointer-events-none hidden lg:block">
        ABOUT
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        
        {/* Left Side: Image with Animated Border */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative flex justify-center group"
        >
          {/* 1. Outer Animated Neon Frame */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#00E5FF]/20 via-blue-500/10 to-transparent rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

          {/* 2. Main Image Container */}
          <motion.div 
            className="relative z-20 w-full max-w-[320px] md:max-w-[420px] aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            {/* 3. Image with Zoom on Hover */}
            <motion.img 
              src={rizwanImg} 
              alt="Rizwan Husain Haidry" 
              whileHover={{ scale: 1.15 }} // Yahan se zoom level control hoga
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              onError={(e) => { e.target.src = "https://via.placeholder.com/450x560?text=Image+Not+Found"; }} 
            />
            
            {/* Subtle Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            
            {/* 4. Glowing Border Overlay (Andar ki side ka glow) */}
            <div className="absolute inset-0 border-[1px] border-white/5 rounded-[2rem] group-hover:border-[#00E5FF]/30 transition-colors duration-700" />
          </motion.div>

          {/* --- SMOKE/GLOW EFFECTS --- */}
          <motion.div 
            animate={{ x: [-10, 10, -10], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -bottom-10 -left-10 -right-10 h-32 bg-[#00E5FF]/10 blur-[80px] rounded-full z-10 pointer-events-none"
          />
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-[#00E5FF] font-mono text-[10px] mb-3 tracking-[0.4em] uppercase drop-shadow-[0_0_8px_#00E5FF]">Discovery</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight">
              A Detail-Oriented <br /> 
              <span className="text-gray-600">Full-Stack Explorer.</span>
            </h3>
          </div>

          <div className="space-y-4 text-gray-400 leading-relaxed text-base md:text-lg font-light">
            <p>
              I am a <span className="text-white font-medium italic">B.Sc Computer Science</span> graduate from <span className="text-white">SK Porwal College</span>. My journey is fueled by a deep passion for building high-performance web applications, evolving from <span className="text-white font-medium">Core Java</span> to a dedicated <span className="text-[#00E5FF] font-black italic underline decoration-1 underline-offset-4">MERN Stack</span> enthusiast.
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/5">
            <div>
              <p className="text-[#00E5FF] font-bold text-[9px] tracking-widest uppercase mb-2">Academic</p>
              <p className="text-gray-200 text-sm font-bold tracking-tight">B.Sc Computer Science (2024)</p>
              <p className="text-gray-500 text-[10px] mt-1 uppercase tracking-wider font-mono">S.K. Porwal College, Nagpur</p>
            </div>
            <div>
              <p className="text-[#00E5FF] font-bold text-[9px] tracking-widest uppercase mb-2">Current Location</p>
              <p className="text-gray-200 text-sm font-bold tracking-tight">Nagpur, Maharashtra</p>
              <p className="text-gray-500 text-[10px] mt-1 uppercase tracking-wider font-mono">Available for Remote / Relocation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;