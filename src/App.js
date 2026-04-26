import React, { lazy, Suspense, useMemo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundaryFallback from './components/ErrorBoundaryFallback';
import ScrollToTopButton from './components/ScrollToTopButton';

import 'react-toastify/dist/ReactToastify.css';
import './i18n';

// React Query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// renderizado de los componentes principales con React.lazy para optimizar la carga inicial
const Hero = lazy(() => import(/*  */ './components/Hero'));
const About = lazy(() => import(/*  "about" */ './components/About'));
const Experience = lazy(() => import(/*  "experience" */ './components/Experience'));
const Projects = lazy(() => import(/*  "projects" */ './components/Projects'));
const Skills = lazy(() => import(/*  "skills" */ './components/Skills'));
const Contact = lazy(() => import(/*  "contact" */ './components/Contact'));
const Footer = lazy(() => import(/*  "footer" */ './components/Footer'));

function AppContent() {
  const { t } = useTranslation();

  const helmetContent = useMemo(() => ({
    title: 'JuanZdev - Full-Stack Developer Portfolio',
    description: t('hero.subtitle'),
    keywords: 'Full-Stack Developer, React, Laravel, PHP, JavaScript, Portfolio, JuanZdev',
    ogTitle: 'JuanZdev - Full-Stack Developer Portfolio',
    ogDescription: t('hero.subtitle'),
    twitterTitle: 'JuanZdev - Full-Stack Developer Portfolio',
    twitterDescription: t('hero.subtitle'),
  }), [t]);

  return (
    <>
      <Helmet>
        <title>{helmetContent.title}</title>
        <meta name="description" content={helmetContent.description} />
        <meta name="keywords" content={helmetContent.keywords} />
        <meta property="og:title" content={helmetContent.ogTitle} />
        <meta property="og:description" content={helmetContent.ogDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={helmetContent.twitterTitle} />
        <meta name="twitter:description" content={helmetContent.twitterDescription} />
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </Suspense>
        <ScrollToTopButton />
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <AppContent />
          </ThemeProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;

