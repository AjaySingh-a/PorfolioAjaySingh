'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Award, Users } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      id: 1,
      title: 'Software Developer',
      company: 'Adbook Communication Pvt Ltd',
      period: 'May 2025 - Present',
      location: 'Delhi, India',
      type: 'Full-time',
      description: 'Architecting OOTER from scratch — a scalable platform for outdoor advertising, with AdBook as its mobile app for hoarding rentals, vendor onboarding, and real-time bookings.',
      achievements: [
        'Contributing to the MVP build of OOTER using Java Spring Boot and PostgreSQL for backend development.',
        'Assisting in React Native-based frontend integration to support mobile-first user interactions.',
        'Supporting API design, role-based authentication, and early-stage feature workflows.',
        'Involved in product planning, tech discussions, and roadmap alignment tied to equity milestones',
      ],
      technologies: ['React Native', 'TypeScript', 'Java', 'Postgresql'],
    },
    {
      id: 2,
      title: 'Web Tech Intern',
      company: 'Vardhman Auto Industries',
      period: 'Feb 2025 - May 2025',
      location: 'Delhi, India',
      type: 'Internship',
      description: 'Developed and maintained web applications for the company, Worked closely with the founding members and learned about project management, agile methodologies.',
      achievements: [
        'Developed and managed a car accessories website using React.js, Node.js, and REST APIs, boosting user engagement by 30%.',
        'Managed regular updates and product listings, leading to 20% faster customer query resolution.',
        'Led cross-functional collaboration and handled technical responsibilities in a dynamic startup environment.',
        'Supported the on-time execution of new projects by streamlining incoming requests and task prioritization.',
      ],
      technologies: ['React', 'Node.js', 'MySQl'],
    },
    {
      id: 3,
      title: 'AI Intern',
      company: 'SKOLAR',
      period: 'Aug 2023 - Oct 2023',
      location: 'Delhi, India',
      type: 'Internship',
      description: 'Learned about AI and ML algorithms, worked on projects involving data analysis and model training, and contributed to the development of AI-driven features.',
      achievements: [
        'Conducted advanced data preprocessing, feature engineering, and model optimization techniques to enhance model performance.',
        'Built scalable machine learning models using Python, implementing algorithms such as Decision Trees, Random Forests, and Neural Networks to solve real-world problems.',
        'Developed and deployed a recommendation system using collaborative filtering techniques, improving user engagement by 25%.',
        'Collaborated with a team to solve real-world problems, ensuring timely delivery of projects with high-quality outputs.',
      ],
      technologies: ['Python', 'CSS', 'JavaScript', 'ML', 'AI'],
    },
  ];

  const stats = [
  { label: 'Programming experience', value: '5+', icon: Calendar },
  { label: 'Projects Completed', value: '10+', icon: Award },
  { label: 'Companies Worked', value: '3', icon: Users },
  { label: 'Tools & Platforms Used', value: '15+', icon: MapPin },
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Work Experience</h1>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My professional journey through various roles and the impact I've made in each position.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 rounded-xl p-6 text-center border border-gray-800 hover:border-gray-600 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon size={24} className="text-red-500" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-red-500 rounded-full border-4 border-black"></div>

                <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400">
                        <span className="text-red-500 font-semibold">{exp.company}</span>
                        <span className="hidden sm:block">•</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={16} />
                          {exp.location}
                        </span>
                        <span className="hidden sm:block">•</span>
                        <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">{exp.type}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 mt-2 lg:mt-0">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.2 + achIndex * 0.1 }}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-2xl p-12 border border-gray-800">
            <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can create something amazing together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;