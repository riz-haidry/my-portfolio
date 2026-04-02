import { motion } from 'framer-motion';
import { FaJava, FaReact, FaDatabase, FaJs } from 'react-icons/fa';
import { SiSpringboot, SiPostgresql, SiTailwindcss, SiMongodb, SiBootstrap, SiHibernate } from 'react-icons/si';

const Skills = () => {
  const skillList = [
    { name: 'Core Java', icon: <FaJava />, color: 'group-hover:text-orange-500', mobileColor: 'text-orange-500', glow: 'group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]', shadow: '0 0 20px rgba(249,115,22,0.2)' },
    { name: 'Spring Boot', icon: <SiSpringboot />, color: 'group-hover:text-green-600', mobileColor: 'text-green-600', glow: 'group-hover:shadow-[0_0_20px_rgba(22,163,74,0.3)]', shadow: '0 0 20px rgba(22,163,74,0.2)' },
    { name: 'Hibernate', icon: <SiHibernate />, color: 'group-hover:text-red-400', mobileColor: 'text-red-400', glow: 'group-hover:shadow-[0_0_20px_rgba(248,113,113,0.3)]', shadow: '0 0 20px rgba(248,113,113,0.2)' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'group-hover:text-blue-300', mobileColor: 'text-blue-300', glow: 'group-hover:shadow-[0_0_20px_rgba(147,197,253,0.3)]', shadow: '0 0 20px rgba(147,197,253,0.2)' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'group-hover:text-green-400', mobileColor: 'text-green-400', glow: 'group-hover:shadow-[0_0_20px_rgba(74,222,128,0.3)]', shadow: '0 0 20px rgba(74,222,128,0.2)' },
    { name: 'Oracle SQL', icon: <FaDatabase />, color: 'group-hover:text-red-600', mobileColor: 'text-red-600', glow: 'group-hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]', shadow: '0 0 20px rgba(220,38,38,0.2)' },
    { name: 'React.js', icon: <FaReact />, color: 'group-hover:text-blue-400', mobileColor: 'text-blue-400', glow: 'group-hover:shadow-[0_0_20px_rgba(96,165,250,0.3)]', shadow: '0 0 20px rgba(96,165,250,0.2)' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'group-hover:text-cyan-400', mobileColor: 'text-cyan-400', glow: 'group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]', shadow: '0 0 20px rgba(34,211,238,0.2)' },
    { name: 'JavaScript', icon: <FaJs />, color: 'group-hover:text-yellow-400', mobileColor: 'text-yellow-400', glow: 'group-hover:shadow-[0_0_20px_rgba(250,204,21,0.3)]', shadow: '0 0 20px rgba(250,204,21,0.2)' },
    { name: 'Bootstrap', icon: <SiBootstrap />, color: 'group-hover:text-purple-500', mobileColor: 'text-purple-500', glow: 'group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]', shadow: '0 0 20px rgba(168,85,247,0.2)' }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-12 md:mb-16 text-center md:text-left">
        <h2 className="text-[#00E5FF] font-mono text-[10px] md:text-xs mb-3 tracking-[0.4em] uppercase drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]">
          Technical Arsenal
        </h2>
        <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
          Expertise <span className="text-gray-600">&</span> Tools<span className="text-[#00E5FF]">.</span>
        </h3>
      </div>
      
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-5">
        {skillList.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              borderColor: "rgba(0, 229, 255, 0.2)",
              transition: { delay: index * 0.05 }
            }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -8 }}
            
            whileTap={{ scale: 0.95 }}
            className={`group relative flex flex-col items-center p-6 md:p-8 bg-[#080808] border border-white/5 rounded-3xl transition-all duration-500 hover:border-[#00E5FF]/30 ${skill.glow}`}
          >
           
            <div className="absolute inset-0 rounded-3xl bg-[#00E5FF]/0 group-hover:bg-[#00E5FF]/5 transition-colors duration-500" />
            
            {/* Icon  */}
            <motion.div 
              whileInView={{ color: "inherit" }}
              className={`relative z-10 text-4xl md:text-5xl text-gray-600 ${skill.color} mb-4 md:mb-5 transition-all duration-500 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]`}
            >
              {skill.icon}
            </motion.div>
            
            <span className="relative z-10 text-gray-500 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-white transition-colors duration-500 text-center">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;