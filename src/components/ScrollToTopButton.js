import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-4 z-50 flex flex-col gap-3 items-center sm:right-8"
    style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>

      {/* WhatsApp — siempre visible */}
      <m.a
        href="https://wa.me/+5493404518680"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-3.5 sm:p-3 rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 transition-shadow"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp className="w-5 h-5" />
      </m.a>
    <AnimatePresence>
        {isVisible && (
          <m.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-3.5 sm:p-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-200/10 transition-shadow"
            aria-label="Scroll to top"
          >
            <FiArrowUp className="w-5 h-5" />
          </m.button>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ScrollToTopButton;
