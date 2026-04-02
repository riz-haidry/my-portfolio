import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
  const [status, setStatus] = useState('idle'); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(`https://formspree.io/f/mdapdbyj`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.log(error);
      alert("Oops! Kuch gadbad hui. Phir se try karein.");
      setStatus('idle');
    }
  };

  return (
    <section className="py-20 max-w-3xl mx-auto px-6 relative overflow-hidden">
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-[#00E5FF] font-mono text-[10px] md:text-xs mb-3 tracking-[0.4em] uppercase drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]">
          Direct Message
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">
          Let's build <span className="text-gray-700">something</span><span className="text-[#00E5FF]">.</span>
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="YOUR NAME" 
            className="bg-[#080808] border border-white/5 p-4 md:p-5 rounded-2xl text-white font-mono text-sm focus:border-[#00E5FF]/50 outline-none transition-all w-full placeholder:text-gray-700" 
            required 
          />
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="YOUR EMAIL" 
            className="bg-[#080808] border border-white/5 p-4 md:p-5 rounded-2xl text-white font-mono text-sm focus:border-[#00E5FF]/50 outline-none transition-all w-full placeholder:text-gray-700" 
            required 
          />
        </div>
        <textarea 
          rows="5" 
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="TELL ME ABOUT YOUR PROJECT" 
          className="bg-[#080808] border border-white/5 p-4 md:p-5 rounded-2xl text-white font-mono text-sm focus:border-[#00E5FF]/50 outline-none transition-all w-full resize-none placeholder:text-gray-700" 
          required 
        />

        <div className="flex justify-center relative pt-4">
          <AnimatePresence mode="wait">
            {status === 'idle' && (
              <motion.button
                key="btn"
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 229, 255, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto bg-[#00E5FF] text-black font-black uppercase tracking-widest px-12 py-4 rounded-full text-[10px] md:text-[11px] flex items-center justify-center gap-3 transition-shadow"
              >
                Send Message <FaPaperPlane className="text-sm" />
              </motion.button>
            )}

            {status === 'sending' && (
              <motion.div key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-[#00E5FF] font-mono text-[10px] md:text-xs animate-pulse tracking-widest uppercase">
                SENDING DATA...
              </motion.div>
            )}

            {status === 'success' && (
              <motion.div key="success" className="flex flex-col items-center">
                <motion.div
                  initial={{ x: 0, y: 0, opacity: 1 }}
                  animate={{ x: 400, y: -400, opacity: 0 }} // Adjusted distance for mobile
                  transition={{ duration: 1.2, ease: "anticipate" }}
                  className="text-[#00E5FF] text-4xl md:text-5xl"
                >
                  <FaPaperPlane />
                </motion.div>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#00E5FF] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-xs mt-6 drop-shadow-[0_0_15px_#00E5FF] text-center">
                  MESSAGE SENT SUCCESSFULLY!
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;