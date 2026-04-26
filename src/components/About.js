import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiCode, FiCoffee, FiZap } from 'react-icons/fi';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const highlightsEs = [
  { icon: FiCode, title: '3.5+ a\u00f1os', description: 'de experiencia en desarrollo Full-Stack' },
  { icon: FiZap, title: 'Aprendizaje continuo', description: 'Siempre explorando nuevas tecnolog\u00edas' },
  { icon: FiCoffee, title: 'Automatizo', description: 'procesos digitales de empresas con empresas B2B' },
];

const highlightsEn = [
  { icon: FiCode, title: '3.5+ years', description: 'of Full-Stack development experience' },
  { icon: FiZap, title: 'Continuous learner', description: 'Always exploring new technologies' },
  { icon: FiCoffee, title: 'I automate', description: 'digital processes for businesses. Help companies digitize their operations.' },
];

const HighlightItem = memo(({ item }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    className="glass-card p-6 text-center group hover:shadow-xl transition-all duration-300"
  >
    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 dark:from-primary-500/20 dark:to-accent-500/20 mb-4 group-hover:scale-110 transition-transform">
      <item.icon className="w-7 h-7 text-primary-500 dark:text-primary-400" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
      {item.title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm">
      {item.description}
    </p>
  </motion.div>
));

function About() {
  const { t, i18n } = useTranslation();

  const highlights = i18n.language === 'es' ? highlightsEs : highlightsEn;

  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-gray-900 transition-colors duration-300">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="section-container"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('about.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div variants={itemVariants} className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-center">
            {t('about.description')}
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {highlights.map((item, index) => (
            <HighlightItem key={index} item={item} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default memo(About);
