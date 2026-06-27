import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Download, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  const { personal, social } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full space-y-8"
      >
        {/* Main Content */}
        <div className="space-y-6">
          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight"
          >
            {personal.name}
          </motion.h1>

          {/* Title */}
          <motion.div variants={itemVariants} className="space-y-2">
            <p className="text-xl md:text-2xl font-semibold text-cyan-300">
              {personal.title}
            </p>
            <p className="text-lg text-gray-400">{personal.location}</p>
          </motion.div>

          {/* Intro Text */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 leading-relaxed max-w-2xl"
          >
            {personal.intro}
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 pt-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-lg font-semibold text-cyan-300 border-2 border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Contact Me
            <Mail size={18} />
          </motion.a>

          <motion.a
            href={personal.resume}
            download
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-lg font-semibold text-purple-300 border-2 border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Resume
            <Download size={18} />
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 pt-8"
        >
          {social.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg bg-slate-800/50 border border-cyan-500/20 hover:border-cyan-400 hover:bg-cyan-500/10 text-gray-300 hover:text-cyan-400 transition-all duration-300 group"
                aria-label={link.label}
              >
                <Icon size={24} className="group-hover:drop-shadow-lg group-hover:drop-shadow-cyan-500/50" />
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex items-center justify-center">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-cyan-500 rounded-full"
          ></motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
