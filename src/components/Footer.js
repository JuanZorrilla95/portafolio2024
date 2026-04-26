import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi';

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">
              Juan<span className="gradient-text">Zdev</span>
            </h3>
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} JuanZdev. {t('footer.rights')}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/juanzorrilla95"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-gray-800 dark:bg-gray-800 hover:bg-gray-700 dark:hover:bg-gray-700 text-gray-400 hover:text-white transition-all"
            >
              <FiGithub className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/juanzorrilla95"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-gray-800 dark:bg-gray-800 hover:bg-gray-700 dark:hover:bg-gray-700 text-gray-400 hover:text-white transition-all"
            >
              <FiLinkedin className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <p className="text-center text-gray-500 text-xs flex items-center justify-center gap-1">
            Made with <FiHeart className="w-3 h-3 text-red-500" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
