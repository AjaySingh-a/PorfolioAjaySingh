import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const categories = [
    {
      icon: Code,
      title: 'Development',
      description: 'Full-stack applications with modern technologies',
      color: 'from-blue-500 to-cyan-500',
      action: () => onNavigate('projects'),
    },
    {
      icon: Palette,
      title: 'About Me',
      description: 'Technical expertise and personal journey',
      color: 'from-purple-500 to-pink-500',
      action: () => onNavigate('about'),
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimized solutions for scalable systems',
      color: 'from-yellow-500 to-orange-500',
      action: () => onNavigate('skills'),
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-red-500 text-sm font-medium tracking-wider uppercase mb-4"
          >
            HELLO, I'M
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            Ajay Singh
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-2xl md:text-3xl text-gray-300 mb-8"
          >
            Full Stack Developer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-12"
          >
            I design and build high-performance web & mobile applications with pixel-perfect interfaces
            and scalable architectures.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('contact')}
              className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
            >
              Hire Me
              <ArrowRight size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('projects')}
              className="border border-gray-600 hover:border-gray-400 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View Work
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Category Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 + index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={category.action}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 cursor-pointer group hover:border-gray-600 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon size={24} className="text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                {category.title}
              </h3>
              
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {category.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;