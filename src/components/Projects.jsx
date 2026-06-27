import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Full-Stack Web Platform', 'IoT Security Prototype', 'IoT Security System', 'Web Application'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 },
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
            <h2 className="text-4xl md:text-5xl font-bold text-white">Projects</h2>
            <motion.div
              className="flex-1 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
              layoutId="underline-projects"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </div>
          <p className="text-gray-400">Featured work and recent projects</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-slate-800/50 text-gray-300 border border-cyan-500/20 hover:border-cyan-400/50 hover:text-cyan-300'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative h-full p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden"
                >
                  {/* Animated Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>

                  {/* Content */}
                  <div className="relative space-y-4">
                    {/* Icon and Title */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-3 flex-1">
                        <div className="text-3xl">{project.icon}</div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-cyan-400 font-semibold">{project.category}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="space-y-2 pt-2">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:border-cyan-400/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 pt-2">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Key Features
                      </p>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></span>
                            {feature}
                          </li>
                        ))}
                        {project.features.length > 3 && (
                          <li className="text-cyan-400 text-xs font-semibold">
                            +{project.features.length - 3} more
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-6">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-700/50 border border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 text-sm font-semibold group/btn"
                      >
                        <Github size={16} />
                        GitHub
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 text-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 text-sm font-semibold group/btn"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <p className="text-gray-400">No projects in this category yet.</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Projects;
