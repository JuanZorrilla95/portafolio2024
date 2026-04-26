import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const projectsData = [
  {
    image: 'https://github.com/JuanZorrilla95/ChocolateShop/blob/ChocolateShopMain/public/chocolate.png?raw=true',
    link: 'https://github.com/JuanZorrilla95/chocolateshop',
    isGithub: true,
    tags: ['Laravel 11', 'PHP', 'MySQL'],
  },
  {
    image: 'https://raw.githubusercontent.com/JuanZorrilla95/espacioM/main/images/yoga.ico',
    link: 'https://juanzorrilla95.github.io/espacioM/',
    isGithub: false,
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    image: './logogym.png',
    link: 'https://github.com/JuanZorrilla95/GYM-KumbiaPHP',
    isGithub: true,
    tags: ['KumbiaPHP', 'MVC', 'MySQL'],
  },
];

const ProjectCard = memo(({ project, translated, viewMoreLabel }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ y: -8 }}
    className="group glass-card overflow-hidden hover:shadow-2xl transition-all duration-500"
  >
    <div className="relative h-40 md:h-52 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 overflow-hidden flex items-center justify-center">
      <img
        src={project.image}
        alt={translated.title}
        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        loading="lazy"
        onError={(e) => {
          const img = e.target;
          if (!img.dataset.retried) {
            img.dataset.retried = '1';
            img.src = './logogym.png';
          }
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-sm font-medium text-gray-900 dark:text-white backdrop-blur-sm"
        >
          {project.isGithub ? (
            <><FiGithub className="w-4 h-4" />GitHub</>
          ) : (
            <><FiExternalLink className="w-4 h-4" />{viewMoreLabel}</>
          )}
        </motion.a>
      </div>
    </div>

    <div className="p-4 md:p-6">
      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
        {translated.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 leading-relaxed">
        {translated.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-2 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
      >
        {viewMoreLabel}
        <FiExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  </motion.div>
));

function Projects() {
  const { t } = useTranslation();
  const translatedItems = t('projects.items', { returnObjects: true });
  const viewMoreLabel = t('projects.viewMore');

  return (
    <section id="projects" className="py-20 md:py-28 bg-white dark:bg-gray-900 transition-colors duration-300">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="section-container"
      >
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('projects.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              translated={translatedItems[index] || {}}
              viewMoreLabel={viewMoreLabel}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default memo(Projects);

