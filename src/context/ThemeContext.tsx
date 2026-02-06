import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'rave' | 'neon' | 'hacker';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  intensity: number;
  setIntensity: (intensity: number) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [intensity, setIntensity] = useState<number>(50);

  useEffect(() => {
    document.documentElement.classList.remove('theme-dark', 'theme-light', 'theme-rave', 'theme-neon', 'theme-hacker');
    document.documentElement.classList.add(`theme-${theme}`);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, intensity, setIntensity }}>
      <div className={`theme-${theme} min-h-screen transition-colors duration-300`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
