import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'Frontend Development', level: 95 },
    { name: 'Backend Development', level: 94 },
    { name: 'FullStack Development', level: 92 },
    { name: 'Data Analytics', level: 72 },
    { name: 'Database', level: 84 },
  ];

  const timeline = [
    {
      year: '2023',
      title: 'AI intern',
      description: 'Began my tech journey as an AI intern at SKOLAR.',
    },
    {
      year: '2025',
      title: 'Web tech intern',
      description: 'Joined a startup as Web tech intern and learned project management.',
    },
    {
      year: '2025',
      title: 'Software Developer',
      description: 'Promoted to Software Developer at Adbook Commmunication private limited.',
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Me</h1>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">Who I Am</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I’m a full-stack developer with strong hands-on experience in both backend and frontend development. I work primarily with Java, Spring Boot, React Native, JavaScript, and Python to build clean, scalable, and user-centric applications. I take pride in writing maintainable code, designing intuitive user interfaces, and delivering features that align with real-world product goals. I'm comfortable taking ownership of projects, collaborating across teams, and adapting quickly to new technologies. My focus is always on building high-quality digital solutions that create real value for users and businesses alike.
              </p>
              <p>
                Beyond coding, I contribute to open-source projects, mentor junior
                developers, and stay at the forefront of emerging technologies
                through continuous learning.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-red-500 font-semibold mb-2">Name</h3>
                <p className="text-gray-300">Ajay Singh</p>
              </div>
              <div>
                <h3 className="text-red-500 font-semibold mb-2">Email</h3>
                <p className="text-gray-300">asm16092003@gmail.com</p>
              </div>
              <div>
                <h3 className="text-red-500 font-semibold mb-2">From</h3>
                <p className="text-gray-300">Delhi,India</p>
              </div>
              <div>
                <h3 className="text-red-500 font-semibold mb-2">Availability</h3>
                <p className="text-gray-300">Open to opportunities</p>
              </div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-red-500/20 to-purple-500/20 border-2 border-red-500/30 overflow-hidden">
                <img
                  src="/about.jpg"  // ✅ Correct way to load from public folder
                  alt="Ajay Singh"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
            </div>

          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 rounded-lg p-6"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                  <span className="text-red-500 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    className="bg-gradient-to-r from-red-500 to-purple-500 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Journey Timeline</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 to-purple-500"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                    <div className="text-red-500 font-bold text-lg mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-black"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;