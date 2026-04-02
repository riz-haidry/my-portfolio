import { useState, useEffect } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion'; 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectGrid from './components/ProjectGrid';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import ResumeModal from './components/ResumeModal';
import ContactForm from './components/ContactForm';
import Loader from './components/Loader'; 

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Loader control logic
  useEffect(() => {
    // 2.5 seconds ka wait taaki assets load ho jayein
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        /* 1. Page Loader Section */
        <Loader key="loader" />
      ) : (
        /* 2. Main Content Section */
        <motion.div 
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-black selection:bg-[#00E5FF] selection:text-black min-h-screen font-sans overflow-x-hidden" // overflow-x-hidden for mobile
        >
          
          {/* Custom Cursor - Hidden on mobile via its own CSS or inside component */}
          <CustomCursor />

          {/* Resume Modal */}
          <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
          
          {/* Navigation Bar */}
          <Navbar onResumeClick={() => setIsResumeOpen(true)} />
          
          <main className="relative z-10">
            
            <Hero />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }} // Mobile par jaldi trigger hoga
              transition={{ duration: 0.8 }}
            >
              <About />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <Skills />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
            >
              <ProjectGrid />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <ContactForm />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <Contact />
            </motion.div>
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;