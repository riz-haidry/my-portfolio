import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
    >
      <div className="relative">
        {/* Outer Glowing Ring */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 border-2 border-[#00E5FF]/20 border-t-[#00E5FF] rounded-full shadow-[0_0_20px_#00E5FF]"
        />
        {/* Inner Logo Letter */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[#00E5FF] text-3xl font-black drop-shadow-[0_0_10px_#00E5FF]">R</span>
        </div>
      </div>
      <motion.p 
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="mt-8 text-[#00E5FF] font-mono text-[10px] tracking-[0.5em] uppercase"
      >
        Initializing Systems...
      </motion.p>
    </motion.div>
  );
};

export default Loader;