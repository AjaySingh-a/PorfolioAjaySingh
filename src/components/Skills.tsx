import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, School } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        'React.js / Vue.js',
        'TypeScript',
        'CSS/SCSS/Tailwind',
        'Redux/Context API',
        'React Native',
      ],
    },
    {
      title: 'Backend',
      color: 'from-green-500 to-emerald-500',
      skills: [
        'JAVA/Spring Boot',
        'GraphQL/REST APIs',
        'MongoDB/PostgreSQL',
        'Python/Django',
        'AWS/GCP',
      ],
    },
    {
      title: 'Tools & Methods',
      color: 'from-purple-500 to-pink-500',
      skills: [
        'Git/GitHub/GitLab',
        'CI/CD Pipelines',
        'VS Code/IntelliJ',
        'Android Studio',
        'Figma/Adobe XD',
      ],
    },
  ];

  return (
    <div className="min-h-screen px-6 pt-24 pb-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Technical Skills</h1>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to build exceptional digital experiences.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6`}>
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              
              <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
              
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + skillIndex * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          
          <div className="space-y-8">
            {/* College Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Computer Science</h3>
                      <p className="text-red-500 font-semibold text-lg">Noida Institute of Engineering & Technology,Greater Noida</p>
                    </div>
                    <span className="text-gray-400 font-medium mt-2 lg:mt-0">2021 - 2025</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Comprehensive study in computer science fundamentals including algorithms, data structures, 
                    software engineering, Artificial Intelligence and database systems. Specialized in web development and user interface design.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700">
                      Data Structures
                    </span>
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700">
                      Algorithms
                    </span>
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700">
                      Software Engineering
                    </span>
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700">
                      Artificial Intelligence
                    </span>
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700">
                      Database Systems
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* High School Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <School size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">High School Diploma</h3>
                      <p className="text-red-500 font-semibold text-lg">Kendriya Vidyalaya INA Colony</p>
                    </div>
                    <span className="text-gray-400 font-medium mt-2 lg:mt-0">2019 - 2021</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Strong foundation in mathematics, science, and technology. Participated in computer science 
                    club and Math's Regional Competition. Graduated as valedictorian with a focus on STEM subjects that 
                    prepared me for advanced computer science studies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700">
                      Mathematics
                    </span>
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700">
                      Physics
                    </span>
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700">
                      Computer Science
                    </span>
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700">
                      Chemistry
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6">Certifications</h3>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <h4 className="text-lg font-semibold text-red-500 mb-1">Python for Data Science, AI & Development</h4>
                <p className="text-gray-400 mb-1">IBM</p>
                <p className="text-gray-500 text-sm">2023</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <h4 className="text-lg font-semibold text-red-500 mb-1">Python Basics</h4>
                <p className="text-gray-400 mb-1">University of Michigan</p>
                <p className="text-gray-500 text-sm">2022</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <h4 className="text-lg font-semibold text-red-500 mb-1">Introduction to Artificial Intelligence</h4>
                <p className="text-gray-400 mb-1">IBM</p>
                <p className="text-gray-500 text-sm">2022</p>
              </motion.div>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6">Achievements</h3>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <h4 className="text-lg font-semibold text-red-500 mb-1">Software Engineering Job Simulation</h4>
                <p className="text-gray-400 mb-1">JPMorgan Chase & Co</p>
                <p className="text-gray-500 text-sm">2025</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <h4 className="text-lg font-semibold text-red-500 mb-1">Advanced Software Engineering Job Simulation</h4>
                <p className="text-gray-400 mb-1">Walmart USA</p>
                <p className="text-gray-500 text-sm">2025</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <h4 className="text-lg font-semibold text-red-500 mb-1">Data Visualisation: Empowering Business with Effective Insights Job Simulation</h4>
                <p className="text-gray-400 mb-1">Tata Group</p>
                <p className="text-gray-500 text-sm">2025</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;