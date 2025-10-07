import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const categories = ['all', 'react', 'React Native', 'Java','Python', 'Fullstack'];

  const projects = [
    {
      id: 1,
      title: 'Capsool',
      description: 'Capsool is an on-demand medicine delivery platform that connects customers with nearby pharmacies through a real-time bidding system. Customers place orders, and multiple pharmacies compete by bidding to offer the best price and fastest delivery. The app ensures affordable pricing, real-time updates, and seamless order tracking, making medicine procurement faster, transparent, and more competitive.',
      longDescription: 'Capsool is an on-demand medicine delivery platform that connects customers with nearby pharmacies through a real-time bidding system. Customers place orders, and multiple pharmacies compete by bidding to offer the best price and fastest delivery. The app ensures affordable pricing, real-time updates, and seamless order tracking, making medicine procurement faster, transparent, and more competitive.Built using React Native Frontend and Java Spring Boot Backend.',
      image: '/capsool.png',
      category: ['Fullstack','Java','React Native'],
      tags: ['React Native', 'Spring Boot', 'Typescript','Java','Fullstack'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AjaySingh-a/Capsool-PharmacyApp.git',
    },
    {
      id: 2,
      title: 'CryptoForge',
      description: 'CryptoForge is an app that offers a wealth of information on every cryptocurrency currently available. It allowes users to make informed decisions about their investments',
      longDescription: 'CryptoForge is an app that offers a wealth of information on every cryptocurrency currently available. It allowes users to make informed decisions about their investments.Built using React and TailwindCSS, with interactive charts and real-time data updates.',
      image: '/cryptoforge.png',
      category: ['react'],
      tags: ['React', 'TailwindCSS'],
      liveUrl: 'https://crypto-forge-umber.vercel.app/',
      githubUrl: 'https://github.com/AjaySingh-a/CryptoForge.git',
    },
    {
      id: 3,
      title: 'Sachify-Fake news detector',
      description: '**Sachify** is a full-stack fake news detection web application that uses Machine Learning (Python) for classification and a modern React-based frontend for user interaction. It helps users verify whether a news article is **Real** or **Fake** using Natural Language Processing (NLP) techniques.',
      longDescription: '**Sachify** is a full-stack fake news detection web application that uses Machine Learning (Python) for classification and a modern React-based frontend for user interaction. It helps users verify whether a news article is **Real** or **Fake** using Natural Language Processing (NLP) techniques. Built using Python Django Backend and React Frontend.',
      image: '/live news.png',
      category: ['fullstack', 'react','Python'],
      tags: ['React', 'Python', 'Django'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AjaySingh-a/Fake-news-detector.git',
    },
    {
      id: 4,
      title: 'Personal Finance Management System',
      description: 'An app made using react and OpenWeatherMap which on searching displays the current weather of that particular place.',
      longDescription: 'An app made using react and OpenWeatherMap which on searching displays the current weather of that particular place.I used React for the frontend and Java for the backend.',
      image: '/expenses.png',
      category: ['Java', 'react'],
      tags: ['React', 'Java', 'Spring Boot'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AjaySingh-a/-Personal-Finance-Management-System.git',
    },
    {
      id: 5,
      title: 'OOTER(This is a work in progress)',
      description: 'OOTER is a cross-platform mobile app that connects advertisers with hoarding vendors, making outdoor ad booking seamless and efficient. It features real-time availability, role-based access, secure payments, and a user-friendly interface built with React Native and Spring Boot.',
      longDescription: 'OOTER is a cross-platform mobile app that connects advertisers with hoarding vendors, making outdoor ad booking seamless and efficient. It features real-time availability, role-based access, secure payments, and a user-friendly interface built with React Native and Spring Boot.',
      image: '/1.png',
      category: ['React Native', 'Java', 'Fullstack'],
      tags: ['React Native', 'Java', 'Springboot', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AjaySingh-a/ooter-backend.git',
    },

  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(selectedCategory));

  return (
    <div className="min-h-screen px-6 pt-24 pb-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Featured Projects</h1>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work spanning web applications, mobile solutions, and full-stack platforms.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Filter size={16} />
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.liveUrl}
                        className="p-3 bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.githubUrl}
                        className="p-3 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={20} />
                      </motion.a>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category.map(
                        cat => cat.charAt(0).toUpperCase() + cat.slice(1)
                      ).join(', ')}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-red-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;
                  
                  return (
                    <>
                      <div className="relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover rounded-t-2xl"
                        />
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                        >
                          ×
                        </button>
                      </div>
                      
                      <div className="p-8">
                        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {project.longDescription}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex gap-4">
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.liveUrl}
                            className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors"
                          >
                            <ExternalLink size={20} />
                            Live Demo
                          </motion.a>
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.githubUrl}
                            className="border border-gray-600 hover:border-gray-400 px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors"
                          >
                            <Github size={20} />
                            Github
                          </motion.a>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
