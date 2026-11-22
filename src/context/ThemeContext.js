import { createContext, useContext, useEffect, useMemo } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Tema fijo en claro. Se mantiene la misma API (isDark, toggleTheme) para que
// cualquier componente que todavía use useTheme() siga funcionando.
export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    // Limpia lo que quedó guardado de cuando existía el toggle
    localStorage.removeItem('theme');
  }, []);

  const value = useMemo(() => ({ isDark: false, toggleTheme: () => {} }), []);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
