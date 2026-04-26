import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiBriefcase, FiExternalLink } from 'react-icons/fi';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const ExperienceItemContent = memo(({ exp }) => (
  <motion.div
    whileHover={{ y: -3 }}
    className="glass-card p-4 md:p-6 hover:shadow-xl transition-all duration-300"
  >
    <div className="flex items-start gap-2 md:gap-3 mb-3 md:mb-4">
      <div className="p-1.5 md:p-2 rounded-lg bg-primary-500/10 dark:bg-primary-500/20 mt-0.5 flex-shrink-0">
        <FiBriefcase className="w-4 h-4 md:w-5 md:h-5 text-primary-500 dark:text-primary-400" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-base md:text-xl font-bold text-gray-900 dark:text-white">
          {exp.role}
        </h3>
        <p className="text-primary-600 dark:text-primary-400 font-medium text-sm md:text-base truncate">
          {exp.company}
          {exp.link && (
            <a
              href={exp.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 ml-2 text-accent-500 hover:text-accent-600 transition-colors whitespace-nowrap"
            >
              {exp.link.text}
              <FiExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5" />
            </a>
          )}
        </p>
      </div>
    </div>

    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
      {exp.description}
    </p>

    <div className="flex flex-wrap gap-1.5">
      {exp.skills.map((skill, skillIndex) => (
        <span
          key={skillIndex}
          className="px-2 py-1 text-xs md:text-sm font-medium rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-200/50 dark:border-primary-700/30 whitespace-nowrap"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
));

function Experience() {
  const { t } = useTranslation();
  const experiences = t('experience.experiences', { returnObjects: true });

  return (
    <section id="experience" className="py-20 md:py-28 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="section-container"
      >
        <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('experience.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-2 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 opacity-30 hidden sm:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-4 sm:pl-12 md:pl-20 pb-8 last:pb-0"
            >
              <div className="absolute left-0 sm:left-6 top-1 w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 border-2 sm:border-4 border-gray-50 dark:border-gray-800 z-10" />
              <ExperienceItemContent exp={exp} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default memo(Experience);
