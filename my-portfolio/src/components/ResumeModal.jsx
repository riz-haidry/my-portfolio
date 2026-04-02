import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaCopy, FaExternalLinkAlt, FaCheckCircle, FaGraduationCap, FaCode } from 'react-icons/fa';
import { useState } from 'react';
import myResume from '../assets/RizwanHusainHaidry.pdf';

const ResumeModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("rizwan2husain@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlights = [
    { label: "Expertise", val: "Full Stack Aspirant", icon: <FaCode /> },
    { label: "Education", val: "B.Sc CS (62%)", icon: <FaGraduationCap /> },
    { label: "Location", val: "Nagpur, MH" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-2 md:p-8 bg-black/95 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.9, y: 100 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 100 }}
            className="relative w-full max-w-6xl h-[95vh] md:h-[90vh] bg-[#050505] border border-white/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(0,229,255,0.1)] flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* --- LEFT SIDE (Top on Mobile): QUICK STATS --- */}
            <div className="w-full md:w-80 bg-gradient-to-b from-[#0a0a0a] to-black border-b md:border-b-0 md:border-r border-white/5 p-6 md:p-8 flex flex-col justify-between shrink-0">
              <div className="flex md:block items-start justify-between md:justify-start">
                <div>
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#00E5FF]/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 border border-[#00E5FF]/20">
                    <span className="text-[#00E5FF] text-lg md:text-xl font-black">R</span>
                  </div>
                  <h3 className="text-white font-black text-xl md:text-2xl tracking-tighter mb-1">Rizwan Haidry</h3>
                  <p className="text-gray-500 text-[8px] md:text-[10px] font-mono tracking-[0.2em] uppercase mb-6 md:mb-10">Portfolio Resume</p>
                </div>
                
                {/* Mobile par highlights ko horizontal ya compact dikhane ke liye grid */}
                <div className="grid grid-cols-1 gap-4 md:space-y-6">
                  {highlights.map((item, i) => (
                    <div key={i} className="group hidden md:block"> {/* Desktop only detailed view */}
                      <p className="text-gray-600 text-[9px] font-bold uppercase tracking-widest mb-1 flex items-center gap-2 group-hover:text-[#00E5FF] transition-colors">
                        {item.icon} {item.label}
                      </p>
                      <p className="text-gray-300 font-bold text-sm tracking-tight">{item.val}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Stack - Compact for mobile */}
              <div className="pt-4 md:pt-8 border-t border-white/5">
                 <p className="text-gray-600 text-[9px] font-bold uppercase tracking-widest mb-3 md:mb-4 italic">Core Tech Stack</p>
                 <div className="flex flex-wrap gap-2">
                    {['Java', 'React', 'Spring', 'SQL'].map(s => (
                      <span key={s} className="px-2 md:px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[8px] md:text-[9px] text-gray-400 font-mono">
                        {s}
                      </span>
                    ))}
                 </div>
              </div>
            </div>

            {/* --- RIGHT SIDE: PREVIEW & CONTROLS --- */}
            <div className="flex-1 flex flex-col relative bg-[#111] min-h-0"> {/* min-h-0 is crucial for flex scroll */}
              
              {/* Header Controls  */}
              <div className="h-16 md:h-20 flex justify-between items-center px-4 md:px-10 border-b border-white/5 bg-black/40 backdrop-blur-md z-10 shrink-0">
                <div className="flex items-center gap-2">
                    <button onClick={copyEmail} className="p-2.5 md:p-3 bg-white/5 rounded-xl md:rounded-2xl text-gray-400 hover:text-[#00E5FF] transition-all relative">
                      {copied ? <FaCheckCircle className="text-green-400 animate-bounce text-sm" /> : <FaCopy className="text-sm" />}
                    </button>
                    <a href={myResume} target="_blank" rel="noreferrer" className="p-2.5 md:p-3 bg-white/5 rounded-xl md:rounded-2xl text-gray-400 hover:text-[#00E5FF] transition-all">
                      <FaExternalLinkAlt className="text-sm" />
                    </a>
                </div>
                
                <div className="flex gap-2 md:gap-3 items-center">
                  <a href={myResume} download="Rizwan_Haidry_Resume.pdf" className="bg-[#00E5FF] text-black px-4 md:px-6 py-2 md:py-2.5 rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] tracking-widest uppercase active:scale-95 transition-transform">
                    <FaDownload className="inline mr-1 md:mr-2" /> <span className="hidden sm:inline">Download</span>
                  </a>
                  <button onClick={onClose} className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all text-base md:text-xl">✕</button>
                </div>
              </div>

              {/* PDF Viewer  */}
              <div className="flex-1 w-full bg-[#111] relative">
                <div className="absolute inset-0 flex items-center justify-center -z-10 text-gray-800 font-mono text-[10px] animate-pulse">
                  LOADING PREVIEW...
                </div>
                
                <iframe 
                  src={`${myResume}#view=FitH&toolbar=0`} 
                  className="w-full h-full border-none grayscale-[0.1] opacity-90 shadow-inner" 
                  title="Rizwan Resume"
                />
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;