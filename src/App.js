import React, { lazy, Suspense, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { LazyMotion, domAnimation } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundaryFallback from './components/ErrorBoundaryFallback';
import ScrollToTopButton from './components/ScrollToTopButton';
import './i18n';

// Lazy components — cada uno genera su propio chunk
const Hero       = lazy(() => import(/* webpackChunkName: "hero" */       './components/Hero'));
const About      = lazy(() => import(/* webpackChunkName: "about" */      './components/About'));
const Experience = lazy(() => import(/* webpackChunkName: "experience" */ './components/Experience'));
const Projects   = lazy(() => import(/* webpackChunkName: "projects" */   './components/Projects'));
const Skills     = lazy(() => import(/* webpackChunkName: "skills" */     './components/Skills'));
const Contact    = lazy(() => import(/* webpackChunkName: "contact" */    './components/Contact'));
const Footer     = lazy(() => import(/* webpackChunkName: "footer" */     './components/Footer'));

// Fuera del componente — se define una sola vez, no en cada render
const ToastContainerLazy = lazy(() =>
  import('react-toastify').then(m => ({ default: m.ToastContainer }))
);

const SectionSkeleton = () => (
  <div className="w-full h-64 animate-pulse bg-gray-100 dark:bg-gray-800 rounded-lg my-4" />
);

function AppContent() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = 'JuanZdev - Software Developer Portfolio';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t('hero.subtitle'));
  }, [t]);

  return (
    <LazyMotion features={domAnimation} strict>
      <>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Header />
          <main>
            <Suspense fallback={<LoadingSpinner />}>
              <Hero />
            </Suspense>

            <Suspense fallback={<SectionSkeleton />}>
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Contact />
            </Suspense>
          </main>

          <Suspense fallback={null}>
            <Footer />
          </Suspense>
          <ScrollToTopButton />
        </div>

        <Suspense fallback={null}>
          <ToastContainerLazy
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </Suspense>
      </>
    </LazyMotion>
  );
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;