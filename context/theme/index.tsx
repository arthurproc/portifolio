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

    if (localTheme) {
      if (localTheme === 'system') {
        setIsUsingSystemTheme(true);
        return;
      }

      setIsUsingSystemTheme(false);
      setTheme(localTheme as SupportedThemes);
      return;
    }

    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(systemTheme);
    setIsUsingSystemTheme(true);
  }, []);

  useEffect(() => {
    console.log('effect: is using system theme', isUsingSystemTheme);
    const themeChangeListerner = (event: any) => {
      const newColorScheme = event.matches ? "dark" : "light";
      console.log('theme changed to', newColorScheme);
      if (isUsingSystemTheme) {
        console.log('is using system theme', isUsingSystemTheme);
        setTheme(newColorScheme);
      }
    };

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', themeChangeListerner);
    
    if (!isUsingSystemTheme) return;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(systemTheme);
    
    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', themeChangeListerner);
    };
  }, [isUsingSystemTheme]);


  const changeTheme = (newTheme: SupportedThemes | 'system') => {
    console.log('changing theme to', newTheme);
    if (newTheme === 'system') {
      console.log('set to system');
      setIsUsingSystemTheme(true);
      window.localStorage.setItem('theme', 'system');
      return;
    }
    
    console.log('set to', newTheme);
    window.localStorage.setItem('theme', newTheme);
    setIsUsingSystemTheme(false);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, isUsingSystemTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
