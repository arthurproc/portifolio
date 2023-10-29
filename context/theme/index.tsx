import { SupportedThemes } from '@portifolio/types';
import React, { useEffect, useState, createContext } from 'react';

type ThemeContextType = {
  theme: string;
  changeTheme: (newTheme: SupportedThemes | 'system') => void;
  isUsingSystemTheme: boolean;
};

export const ThemeContext = createContext<ThemeContextType>(
  { theme: 'light', changeTheme: () => {}, isUsingSystemTheme: true }
);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<SupportedThemes>('dark');
  const [isUsingSystemTheme, setIsUsingSystemTheme] = useState<boolean>(false);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');

    if (!localTheme || localTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(systemTheme);
      setIsUsingSystemTheme(true);
      return;
    }
    
    setIsUsingSystemTheme(false);
    setTheme(localTheme as SupportedThemes);
    return;
  }, []);

  const changeTheme = (newTheme: SupportedThemes | 'system') => {
    window.localStorage.setItem('theme', newTheme);

    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(systemTheme);
      setIsUsingSystemTheme(true);
      return;
    }

    setTheme(newTheme);
    setIsUsingSystemTheme(false);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, isUsingSystemTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
