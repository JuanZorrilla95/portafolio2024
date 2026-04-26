import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiMonitor, FiServer, FiTool, FiMessageCircle } from 'react-icons/fi';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const SkillCategories = memo(({ t }) => (
  <>
    {/* Frontend */}
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="glass-card p-4 md:p-6 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
        <div className="p-2 rounded-xl bg-blue-500/10 dark:bg-blue-500/20">
          <FiMonitor className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
        </div>
        <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white">
          {t('skills.categories.Frontend')}
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-1.5 md:gap-2">
        {['HTML5', 'CSS3', 'JavaScript', 'React', 'Angular'].map((name) => (
          <div key={name} className="flex items-center gap-1.5 md:gap-2 p-1.5 md:p-2 rounded-lg bg-gray-50/50 dark:bg-gray-700/30">
            <img src={`/${name.toLowerCase()}.png`} alt={name} className="w-3.5 h-3.5 md:w-4 md:h-4 object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
            <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300 truncate">{name}</span>
          </div>
        ))}
      </div>
    </motion.div>

    {/* Backend */}
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="glass-card p-4 md:p-6 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
        <div className="p-2 rounded-xl bg-green-500/10 dark:bg-green-500/20">
          <FiServer className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
        </div>
        <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white">
          {t('skills.categories.Backend')}
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-1.5 md:gap-2">
        {['MySQL', 'PHP', 'PostgreSQL', 'Node.js', 'API', 'Postman'].map((name) => (
          <div key={name} className="flex items-center gap-1.5 md:gap-2 p-1.5 md:p-2 rounded-lg bg-gray-50/50 dark:bg-gray-700/30">
            <img src={`/${name.toLowerCase().replace(/[^a-z]/g, '')}.png`} alt={name} className="w-3.5 h-3.5 md:w-4 md:h-4 object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
            <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300 truncate">{name}</span>
          </div>
        ))}
        <div className="flex items-center gap-1.5 md:gap-2 p-1.5 md:p-2 rounded-lg bg-gray-50/50 dark:bg-gray-700/30">
          <img src="/python.png" alt="Python" className="w-3.5 h-3.5 md:w-4 md:h-4 object-contain" />
          <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300 truncate">Python</span>
        </div>
      </div>
    </motion.div>

    {/* Tools */}
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="glass-card p-4 md:p-6 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
        <div className="p-2 rounded-xl bg-orange-500/10 dark:bg-orange-500/20">
          <FiTool className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
        </div>
        <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white">
          {t('skills.categories.Tools')}
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-1.5 md:gap-2">
        {['Git', 'GitHub', 'Laravel', 'Symfony', 'Docker', 'Apache', 'Laragon', 'GitLab', 'Redmine'].map((name) => (
          <div key={name} className="flex items-center gap-1.5 md:gap-2 p-1.5 md:p-2 rounded-lg bg-gray-50/50 dark:bg-gray-700/30">
            <img src={`/${name.toLowerCase().replace(/[^a-z]/g, '')}.png`} alt={name} className="w-3.5 h-3.5 md:w-4 h-4 object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
            <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300 truncate">{name}</span>
          </div>
        ))}
      </div>
    </motion.div>

    {/* English */}
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="glass-card p-4 md:p-6 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
        <div className="p-2 rounded-xl bg-purple-500/10 dark:bg-purple-500/20">
          <FiMessageCircle className="w-4 h-4 md:w-5 md:h-5 text-purple-500" />
        </div>
        <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white">
          {t('skills.categories.English')}
        </h3>
      </div>
      <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 dark:from-primary-500/20 dark:to-accent-500/20 border border-primary-200/50 dark:border-primary-700/30 mb-3">
        <span className="text-xs md:text-sm font-semibold text-primary-700 dark:text-primary-300">
          {t('skills.english.level')}
        </span>
      </div>
      <div className="space-y-2">
        <a href="https://imgur.com/5U3XP8M" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
          {t('skills.english.academy')}
        </a>
        <div className="flex items-start gap-1.5 md:gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-400">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0 mt-1.5" />
          <span>{t('skills.english.efset')} <a href="https://www.efset.org/cert/EUPSMW" target="_blank" rel="noopener noreferrer" className="text-primary-500 dark:text-primary-400 hover:underline">efset.org/cert/EUPSMW</a></span>
        </div>
      </div>
    </motion.div>
  </>
));

function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="section-container">
        <motion.div variants={itemVariants} className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            {t('skills.title')}
          </h2>
          <div className="w-16 h-0.5 md:w-20 md:h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 max-w-6xl mx-auto"
        >
          <SkillCategories t={t} />
        </motion.div>
      </div>
    </section>
  );
}

export default memo(Skills);

