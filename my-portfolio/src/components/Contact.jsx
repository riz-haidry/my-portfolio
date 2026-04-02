import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-6 bg-[#030303] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-[#00E5FF]/10 blur-[100px] md:blur-[150px] -z-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10"> 
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#00E5FF] font-mono text-[10px] md:text-xs tracking-[0.4em] md:tracking-[0.5em] uppercase mb-4"
        >
          Wanna start a project?
        </motion.h2>
        
        <motion.h3 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter mb-10 md:mb-12 leading-tight"
        >
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">Touch.</span>
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-16 md:mb-20">
          
          {/* Email Card  */}
          <motion.a 
            href="mailto:rizwan2husain@gmail.com"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            style={{ display: 'flex' }} 
            className="p-6 md:p-8 bg-[#080808] border border-white/5 rounded-3xl flex-col items-center group hover:border-[#00E5FF]/30 transition-all cursor-pointer relative z-20"
          >
            <FaEnvelope className="text-2xl md:text-3xl text-gray-600 group-hover:text-[#00E5FF] mb-4 transition-colors" />
            <span className="text-white font-bold tracking-wider text-sm md:text-base">Email Me</span>
            <p className="text-gray-500 text-[11px] md:text-sm mt-2 font-mono break-all px-2 lowercase tracking-normal">
              rizwan2husain@gmail.com
            </p>
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a 
            href="https://www.linkedin.com/in/rizwan-haidry-113637213"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            style={{ display: 'flex' }}
            className="p-6 md:p-8 bg-[#080808] border border-white/5 rounded-3xl flex-col items-center group hover:border-[#00E5FF]/30 transition-all cursor-pointer relative z-20"
          >
            <FaLinkedin className="text-2xl md:text-3xl text-gray-600 group-hover:text-[#00E5FF] mb-4 transition-colors" />
            <span className="text-white font-bold tracking-wider text-sm md:text-base">LinkedIn</span>
            <p className="text-gray-500 text-[11px] md:text-sm mt-2 font-mono lowercase tracking-widest">
              rizwan-haidry
            </p>
          </motion.a>
        </div>

        {/*  Icons  */}
        <div className="flex justify-center gap-8 md:gap-10 border-t border-white/5 pt-10 md:pt-12">
          <a href="https://github.com/rizwan-haidry" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#00E5FF] transition-all text-xl md:text-2xl"><FaGithub /></a>
          <a href="https://wa.me/919325281316" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-500 transition-all text-xl md:text-2xl"><FaWhatsapp /></a>
        </div>

        <p className="mt-16 md:mt-20 text-gray-700 text-[8px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase leading-relaxed">
          © 2026 Rizwan Husain Haidry <br className="md:hidden" /> • Nagpur, IN
        </p>
      </div>
    </section>
  );
};

export default Contact;