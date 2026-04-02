import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import TechArchitecture from './TechArchitecture';

const ProjectGrid = () => {
  return (
    <section id="projects" className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="mb-12 md:mb-20 text-center md:text-left">
        <h2 className="text-[#00E5FF] font-mono text-[10px] md:text-xs mb-3 tracking-[0.4em] uppercase drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]">
          Selected Works
        </h2>
        <h3 className="text-3xl md:text-6xl font-black text-white tracking-tighter leading-tight">
          Case <span className="text-gray-700">Studies</span><span className="text-[#00E5FF]">.</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className={`
              ${project.featured ? 'md:col-span-2' : ''} 
              group relative bg-[#080808] border border-white/5 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] 
              transition-all duration-500 hover:border-[#00E5FF]/30 
              hover:shadow-[0_20px_50px_-20px_rgba(0,229,255,0.2)]
              flex flex-col
            `}
          >
            {/* Featured Glow Background */}
            {project.featured && (
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#00E5FF]/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            )}

            {/* Badges position  */}
            <div className="absolute top-4 right-4 md:top-8 md:right-10 flex flex-wrap justify-end gap-2 z-20">
              {project.isLive && (
                <span className="flex items-center gap-1.5 text-[8px] md:text-[9px] font-black bg-green-500/20 text-green-400 px-3 py-1 rounded-full border border-green-500/30">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  LIVE
                </span>
              )}
              {project.featured && (
                <span className="text-[8px] md:text-[9px] font-black bg-[#00E5FF] text-black px-3 md:px-4 py-1 md:py-1.5 rounded-full shadow-[0_0_15px_rgba(0,229,255,0.5)] tracking-widest uppercase">
                  Featured
                </span>
              )}
            </div>
            
            <h4 className={`font-black text-white mb-4 md:mb-6 tracking-tighter group-hover:text-[#00E5FF] transition-colors duration-300 pt-10 md:pt-4 ${project.featured ? 'text-3xl md:text-5xl lg:text-6xl' : 'text-xl md:text-2xl'}`}>
              {project.title}
            </h4>
            
            <p className="text-gray-500 text-xs md:text-base leading-relaxed mb-8 md:mb-10 max-w-xl group-hover:text-gray-300 transition-colors">
              {project.desc}
            </p>

            {/* Tech Stack Tags  */}
            <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10">
              {project.tech.split(',').map((t, i) => (
                <span key={i} className="text-[9px] md:text-[10px] font-bold font-mono text-gray-400 border border-white/5 px-3 md:px-4 py-1 md:py-1.5 rounded-lg md:rounded-xl group-hover:border-[#00E5FF]/20 group-hover:text-[#00E5FF] transition-all">
                  {t.trim()}
                </span>
              ))}
            </div>

            {/* --- SYSTEM ARCHITECTURE --- */}
            {project.featured && project.title.toLowerCase().includes("searchkaro") && (
              <div className="mb-10 opacity-90 group-hover:opacity-100 transition-opacity scale-[0.85] sm:scale-100 origin-left overflow-x-auto hide-scrollbar">
                <div className="min-w-[300px]"> 
                   <TechArchitecture />
                </div>
              </div>
            )}

            {/* Action Buttons  */}
            <div className="flex flex-row flex-wrap gap-6 md:gap-8 mt-auto">
              {project.isLive && (
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 md:gap-3 text-white font-black text-[10px] md:text-[11px] tracking-[0.2em] group-hover:gap-4 transition-all"
                >
                  LIVE PREVIEW 
                  <span className="text-[#00E5FF] text-lg md:text-xl transition-transform group-hover:scale-125">→</span>
                </a>
              )}
              
              {project.github && project.github !== "" && (
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-white text-[10px] md:text-[11px] font-bold tracking-[0.2em] self-center transition-colors"
                >
                  SOURCE CODE
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;