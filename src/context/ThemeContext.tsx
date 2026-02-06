import React, { createContext, useContext, useEffect, useState, useMemo, useCallback } from 'react';

type Theme = 'dark' | 'light' | 'rave' | 'neon' | 'hacker' | 'toxic' | 'candy';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  intensity: number;
  setIntensity: (intensity: number) => void;
  motionLevel: number;
  setMotionLevel: (level: number) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ALL_THEME_CLASSES = ['theme-dark', 'theme-light', 'theme-rave', 'theme-neon', 'theme-hacker', 'theme-toxic', 'theme-candy'];

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [intensity, setIntensityState] = useState<number>(50);
  const [motionLevel, setMotionLevelState] = useState<number>(75);

  const setTheme = useCallback((t: Theme) => setThemeState(t), []);
  const setIntensity = useCallback((v: number) => setIntensityState(v), []);
  const setMotionLevel = useCallback((v: number) => setMotionLevelState(v), []);

  useEffect(() => {
    document.documentElement.classList.remove(...ALL_THEME_CLASSES);
    document.documentElement.classList.add(`theme-${theme}`);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Check prefers-reduced-motion on mount
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setMotionLevelState(0);
      setIntensityState(0);
    }
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme, intensity, setIntensity, motionLevel, setMotionLevel }),
    [theme, setTheme, intensity, setIntensity, motionLevel, setMotionLevel]
  );

  return (
    <ThemeContext.Provider value={value}>
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
