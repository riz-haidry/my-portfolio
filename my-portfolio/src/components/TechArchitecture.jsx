import { motion } from 'framer-motion';

const TechArchitecture = () => {
  return (
    <div className="mt-6 md:mt-10 p-6 md:p-8 bg-[#050505] border border-white/5 rounded-3xl relative overflow-hidden">
      <h4 className="text-[9px] md:text-[10px] font-black text-gray-500 tracking-[0.3em] uppercase mb-8 md:mb-10 text-center italic">
        System Architecture
      </h4>
      
      {/* Container: Column on mobile, Row on desktop */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 relative">
        
        {/* Frontend - Vercel */}
        <div className="flex flex-col items-center z-10">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-2 group hover:border-[#00E5FF]/50 transition-all">
             <span className="text-white font-bold text-xs md:text-sm">Vercel</span>
          </div>
          <span className="text-[8px] md:text-[10px] text-gray-500 font-mono">Frontend</span>
        </div>

        {/* Pulse Line 1 - Vertical on mobile, Horizontal on desktop */}
        <div className="w-[1px] h-10 md:w-full md:h-[1px] bg-white/5 relative">
          <motion.div 
            animate={window.innerWidth < 768 
              ? { y: ['0%', '100%'], opacity: [0, 1, 0] } 
              : { x: ['0%', '100%'], opacity: [0, 1, 0] }
            }
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-[2px] h-6 md:w-10 md:h-[2px] bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]" 
          />
        </div>

        {/* Backend - Render */}
        <div className="flex flex-col items-center z-10">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-[#00E5FF]/5 border border-[#00E5FF]/20 rounded-full flex items-center justify-center mb-2 shadow-[0_0_20px_rgba(0,229,255,0.1)]">
             <span className="text-[#00E5FF] font-black text-[10px] md:text-xs">RENDER API</span>
          </div>
          <span className="text-[8px] md:text-[10px] text-gray-500 font-mono">Backend</span>
        </div>

        {/* Pulse Line 2 - Vertical on mobile, Horizontal on desktop */}
        <div className="w-[1px] h-10 md:w-full md:h-[1px] bg-white/5 relative">
          <motion.div 
            animate={window.innerWidth < 768 
              ? { y: ['0%', '100%'], opacity: [0, 1, 0] } 
              : { x: ['0%', '100%'], opacity: [0, 1, 0] }
            }
            transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-[2px] h-6 md:w-10 md:h-[2px] bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]" 
          />
        </div>

        {/* Database - MongoDB */}
        <div className="flex flex-col items-center z-10">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-2 hover:border-green-500/50 transition-all">
             <span className="text-green-500 font-bold text-xs md:text-sm">Atlas</span>
          </div>
          <span className="text-[8px] md:text-[10px] text-gray-500 font-mono">Database</span>
        </div>

      </div>
    </div>
  );
};

export default TechArchitecture;