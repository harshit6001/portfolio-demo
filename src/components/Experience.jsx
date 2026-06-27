import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

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
            <h2 className="text-4xl md:text-5xl font-bold text-white">Experience</h2>
            <motion.div
              className="flex-1 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
              layoutId="underline-experience"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </div>
          <p className="text-gray-400">Achievements, internships, and certifications</p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-6">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="relative"
            >
              {/* Connector Line */}
              {index !== experience.length - 1 && (
                <div className="absolute left-8 top-24 h-12 w-0.5 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
              )}

              {/* Experience Card */}
              <div className="flex gap-6">
                {/* Timeline Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0 relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-2xl shadow-lg shadow-cyan-500/50"
                >
                  {item.icon}
                </motion.div>

                {/* Content */}
                <div className="flex-1 pt-2 pb-8">
                  <div className="p-6 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-xl hover:shadow-lg hover:shadow-cyan-500/20"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm font-semibold text-cyan-400">
                          {item.duration}
                        </p>
                      </div>
                      <motion.span
                        className="px-4 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-semibold whitespace-nowrap"
                      >
                        {item.year}
                      </motion.span>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
        >
          {[
            { label: 'Internship Duration', value: '45 Days' },
            { label: 'Certifications', value: '2+' },
            { label: 'Active Projects', value: '4+' },
            { label: 'Community Work', value: 'Ongoing' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-6 rounded-lg bg-slate-800/50 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 text-center backdrop-blur-sm"
            >
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-gray-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Experience;
