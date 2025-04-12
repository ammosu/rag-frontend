import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'system',
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark' || saved === 'system') return saved;
    return 'system';
  });

  useEffect(() => {
    const root = document.documentElement;
    const applyTheme = (t: Theme) => {
      if (t === 'system') {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        root.classList.toggle('dark', isDark);
        root.setAttribute('data-theme', isDark ? 'dark' : 'light');
      } else {
        root.classList.toggle('dark', t === 'dark');
        root.setAttribute('data-theme', t);
      }
    };
    applyTheme(theme);

    if (theme === 'system') {
      const handler = (e: MediaQueryListEvent) => {
        if (theme === 'system') {
          document.documentElement.classList.toggle('dark', e.matches);
          document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
      };
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handler);
      return () => {
        window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handler);
      };
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);