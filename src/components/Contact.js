import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import { FiSend, FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function Contact() {
  const { t } = useTranslation();
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    if (isSubmitted) return;
    setIsSending(true);
    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      toast.success(t('contact.successToast'), {
        position: 'bottom-right',
        autoClose: 4000,
      });
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error(t('contact.errorToast'), {
        position: 'bottom-right',
        autoClose: 4000,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white dark:bg-gray-900 transition-colors duration-300">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="section-container"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={itemVariants} className="max-w-xl mx-auto">
          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="glass-card p-8 space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('contact.name')}
              </label>
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  {...register('name', { required: t('contact.nameRequired') })}
                  disabled={isSubmitted}
                  placeholder={t('contact.name')}
                  className={`w-full pl-12 pr-4 py-3.5 rounded-xl border bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                    errors.name
                      ? 'border-red-400 focus:ring-red-400/50'
                      : 'border-gray-200 dark:border-gray-700 focus:ring-primary-500/50 focus:border-primary-500'
                  } disabled:opacity-60 disabled:cursor-not-allowed`}
                />
              </div>
              {errors.name && (
                <p className="mt-1.5 text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('contact.email')}
              </label>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  {...register('email', {
                    required: t('contact.emailRequired'),
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: t('contact.emailInvalid'),
                    },
                  })}
                  disabled={isSubmitted}
                  placeholder={t('contact.email')}
                  className={`w-full pl-12 pr-4 py-3.5 rounded-xl border bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                    errors.email
                      ? 'border-red-400 focus:ring-red-400/50'
                      : 'border-gray-200 dark:border-gray-700 focus:ring-primary-500/50 focus:border-primary-500'
                  } disabled:opacity-60 disabled:cursor-not-allowed`}
                />
              </div>
              {errors.email && (
                <p className="mt-1.5 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('contact.message')}
              </label>
              <div className="relative">
                <FiMessageSquare className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                <textarea
                  {...register('message', { required: t('contact.messageRequired') })}
                  disabled={isSubmitted}
                  placeholder={t('contact.message')}
                  rows={5}
                  className={`w-full pl-12 pr-4 py-3.5 rounded-xl border bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message
                      ? 'border-red-400 focus:ring-red-400/50'
                      : 'border-gray-200 dark:border-gray-700 focus:ring-primary-500/50 focus:border-primary-500'
                  } disabled:opacity-60 disabled:cursor-not-allowed`}
                />
              </div>
              {errors.message && (
                <p className="mt-1.5 text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={!isSubmitted && !isSending ? { scale: 1.02 } : {}}
              whileTap={!isSubmitted && !isSending ? { scale: 0.98 } : {}}
              type="submit"
              disabled={isSubmitted || isSending}
              className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                isSubmitted
                  ? 'bg-green-500 cursor-default'
                  : isSending
                  ? 'bg-primary-400 cursor-wait'
                  : 'bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 hover:shadow-lg hover:shadow-primary-500/25'
              } disabled:opacity-80`}
            >
              {isSubmitted ? (
                <>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('contact.sent')}
                </>
              ) : isSending ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {t('contact.sending')}
                </>
              ) : (
                <>
                  <FiSend className="w-5 h-5" />
                  {t('contact.send')}
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;
