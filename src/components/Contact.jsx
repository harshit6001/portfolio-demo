import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Mail, Linkedin, Instagram, Send } from 'lucide-react';

const Contact = () => {
  const { personal, social } = portfolioData;

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

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: social.find((s) => s.name === 'LinkedIn')?.url,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@_.harshit_agarwal',
      href: social.find((s) => s.name === 'Instagram')?.url,
      color: 'from-pink-500 to-purple-500',
    },
  ];

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
            <h2 className="text-4xl md:text-5xl font-bold text-white">Get In Touch</h2>
            <motion.div
              className="flex-1 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
              layoutId="underline-contact"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </div>
          <p className="text-gray-400 max-w-2xl">
            I'm always open to new opportunities, collaborations, and interesting conversations. Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={index}
                href={method.href}
                target={method.label !== 'Email' ? '_blank' : undefined}
                rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative h-full p-8 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden flex flex-col items-center justify-center text-center"
                >
                  {/* Gradient Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>

                  {/* Content */}
                  <div className="relative space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-4 rounded-lg bg-gradient-to-br ${method.color} w-fit mx-auto shadow-lg`}
                    >
                      <Icon size={28} className="text-white" />
                    </motion.div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {method.label}
                      </h3>
                      <p className="text-sm text-gray-300 break-all">
                        {method.value}
                      </p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 px-4 py-2 rounded-lg bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/30 transition-all duration-300 font-semibold text-sm flex items-center justify-center gap-2 mx-auto group/btn"
                    >
                      {method.label === 'Email' ? 'Send Email' : 'Visit'}
                      <Send size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="p-8 rounded-xl bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-blue-500/10 border-2 border-cyan-500/30 backdrop-blur-xl space-y-6 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Let's collaborate and build something amazing together
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Whether you have a project idea, want to discuss technology, or explore content collaboration opportunities, I'd love to hear from you.
          </p>
          
          <motion.a
            href={`mailto:${personal.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Start a Conversation
          </motion.a>
        </motion.div>

        {/* Response Time */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3 text-gray-400"
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>I typically respond within 24 hours</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
