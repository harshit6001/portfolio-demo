import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { personal } = portfolioData;

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
            <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
            <motion.div
              className="flex-1 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
              layoutId="underline"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Main Text */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              {personal.about}
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex gap-4">
                <div className="w-1 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"></div>
                <div>
                  <h3 className="text-cyan-300 font-semibold mb-2">What I Do</h3>
                  <p className="text-gray-400">
                    Build full-stack web applications and IoT systems that are intuitive, secure, and solve real problems.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
                <div>
                  <h3 className="text-blue-300 font-semibold mb-2">My Focus</h3>
                  <p className="text-gray-400">
                    Clean code, user-centric design, security-first architecture, and projects that scale.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
                <div>
                  <h3 className="text-purple-300 font-semibold mb-2">Beyond Code</h3>
                  <p className="text-gray-400">
                    Active content creator with a growing audience in gaming and fitness communities.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Glassmorphic Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="sticky top-32"
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300 shadow-2xl"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-blue-500/0 p-[1px] pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50"></div>
              </div>

              <div className="relative space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">Quick Facts</h3>
                  <p className="text-sm text-gray-400">A snapshot of my expertise</p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
                    <p className="text-sm text-gray-400 mb-1">Primary Focus</p>
                    <p className="text-cyan-300 font-semibold">Full-Stack Web Development</p>
                  </div>

                  <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                    <p className="text-sm text-gray-400 mb-1">Specialization</p>
                    <p className="text-blue-300 font-semibold">IoT Systems & Security</p>
                  </div>

                  <div className="p-4 rounded-lg bg-purple-500/5 border border-purple-500/20">
                    <p className="text-sm text-gray-400 mb-1">Passion Project</p>
                    <p className="text-purple-300 font-semibold">Content Creation</p>
                  </div>

                  <div className="p-4 rounded-lg bg-pink-500/5 border border-pink-500/20">
                    <p className="text-sm text-gray-400 mb-1">Based In</p>
                    <p className="text-pink-300 font-semibold">Jaipur, India</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
