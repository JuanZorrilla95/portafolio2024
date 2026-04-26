import React from 'react';
import { useTranslation } from 'react-i18next';

const ErrorBoundaryFallback = ({ error, resetErrorBoundary }) => {
  const { i18n } = useTranslation();
  const isEs = i18n.language === 'es';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">!</div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          {isEs ? 'Algo sali\u00f3 mal' : 'Something went wrong'}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {error?.message || (isEs ? 'Ha ocurrido un error inesperado' : 'An unexpected error occurred')}
        </p>
        <button
          onClick={resetErrorBoundary}
          className="btn-primary"
        >
          {isEs ? 'Intentar de nuevo' : 'Try again'}
        </button>
      </div>
    </div>
  );
};

export default ErrorBoundaryFallback;
