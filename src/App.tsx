import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import FloatingElements from './components/FloatingElements';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Hero onNavigate={setCurrentSection} />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onNavigate={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <FloatingElements />
            <Navigation 
              currentSection={currentSection} 
              onNavigate={setCurrentSection} 
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {renderSection()}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;