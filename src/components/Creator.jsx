import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react';

const Creator = () => {
  const { creator } = portfolioData;

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
            <h2 className="text-4xl md:text-5xl font-bold text-white">Creator</h2>
            <motion.div
              className="flex-1 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
              layoutId="underline-creator"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </div>
        </motion.div>

        {/* Creator Intro */}
        <motion.div variants={itemVariants} className="space-y-4">
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
            {creator.intro}
          </p>
        </motion.div>

        {/* Channel Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {creator.channels.map((channel, index) => {
            const Icon = channel.icon;
            const isYoutube = channel.platform === 'YouTube';

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <motion.a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-full p-8 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden flex flex-col"
                >
                  {/* Gradient Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${isYoutube ? 'from-red-500/20 to-orange-500/20' : 'from-pink-500/20 to-purple-500/20'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>

                  {/* Content */}
                  <div className="relative space-y-6 flex-1">
                    {/* Icon and Platform */}
                    <div className="flex items-start justify-between">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className={`p-4 rounded-lg ${isYoutube ? 'bg-red-500/20 border border-red-500/30' : 'bg-pink-500/20 border border-pink-500/30'}`}
                      >
                        <Icon size={32} className={isYoutube ? 'text-red-400' : 'text-pink-400'} />
                      </motion.div>
                      <ExternalLink size={20} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </div>

                    {/* Details */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {channel.name}
                        </h3>
                        <p className="text-sm font-semibold text-cyan-400">
                          {channel.platform}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400">
                            {isYoutube ? 'Subscribers' : 'Followers'}
                          </span>
                          <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            {channel.subscribers || channel.followers}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400">Niche</span>
                          <span className="text-sm font-semibold text-purple-300">
                            {channel.niche}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 pt-6 border-t border-cyan-500/20"
                  >
                    <button className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 text-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 font-semibold text-sm group/btn flex items-center justify-center gap-2">
                      Visit Channel
                      <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                </motion.a>
              </motion.div>
            );
          })}
        </div>

        {/* Strengths Section */}
        <motion.div
          variants={itemVariants}
          className="p-8 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/20 backdrop-blur-xl space-y-6"
        >
          <h3 className="text-2xl font-bold text-white">Creator Strengths</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {creator.strengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-purple-500/5 border border-purple-500/20 hover:border-purple-400/50 transition-colors"
              >
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex-shrink-0"></div>
                <span className="text-gray-200 font-medium">{strength}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Creator;
