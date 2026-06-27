import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  const categoryColors = {
    Frontend: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30',
    Backend: 'from-blue-500/20 to-purple-500/20 border-blue-500/30',
    'IoT & Hardware': 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
    'Tools & Design': 'from-pink-500/20 to-orange-500/20 border-pink-500/30',
  };

  const categoryAccents = {
    Frontend: 'text-cyan-400',
    Backend: 'text-blue-400',
    'IoT & Hardware': 'text-purple-400',
    'Tools & Design': 'text-pink-400',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-12"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Skills</h2>
            <motion.div
              className="flex-1 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
              layoutId="underline-skills"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </div>
          <p className="text-gray-400">Technologies and tools I work with</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="space-y-6"
            >
              {/* Category Title */}
              <div className="space-y-3">
                <h3 className={`text-2xl font-bold ${categoryAccents[category.category]}`}>
                  {category.category}
                </h3>
                <div className="h-0.5 w-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    variants={skillVariants}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ x: 10 }}
                    className={`p-4 rounded-lg bg-gradient-to-br ${categoryColors[category.category]} border backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-default group`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {skill}
                      </span>
                      <motion.div
                        className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
        >
          {[
            { label: 'Technologies', value: '16+' },
            { label: 'Frameworks', value: '6+' },
            { label: 'IoT Platforms', value: '3+' },
            { label: 'Languages', value: '5+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-6 rounded-lg bg-slate-800/50 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 text-center backdrop-blur-sm"
            >
              <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-sm text-gray-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
