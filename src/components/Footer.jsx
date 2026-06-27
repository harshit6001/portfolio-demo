import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-cyan-500/10 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 pb-8 border-b border-cyan-500/10">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Harshit Agarwal
              </h3>
              <p className="text-sm text-gray-400">
                Building web experiences and IoT solutions with a creative touch.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#projects"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#creator"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Creator
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Built With</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Vite', 'Tailwind', 'Framer Motion'].map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 rounded-full text-xs bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <span>© {currentYear} Harshit Agarwal.</span>
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={16} className="text-pink-400" fill="currentColor" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center md:text-right"
            >
              <p>
                Built with React, Vite, Tailwind CSS, and{' '}
                <span className="text-cyan-400">Framer Motion</span>
              </p>
            </motion.div>
          </div>

          {/* Scroll to Top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 z-40"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
