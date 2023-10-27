"use client";

import { ThemeProvider, ThemeContext } from '@portifolio/context/theme';
import React from 'react';
import Navbar from '../components/navigation/navbar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export function App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {
          ({theme}) => (
            <html lang="en" className={`[--scroll-mt:9.875rem] lg:[--scroll-mt:6.3125rem] js-focus-visible ${theme === 'dark' ? 'dark' : ''}`}>
              <body className={`${inter.className} antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900`}>
                <Navbar />
                {children}
              </body>
            </html>
          )
        }
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}
