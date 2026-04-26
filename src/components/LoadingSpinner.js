import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary-200 dark:border-primary-800 border-t-primary-500 rounded-full animate-spin" />
        <p className="text-gray-500 dark:text-gray-400 font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
