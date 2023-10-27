"use client";

import { ThemeProvider, ThemeContext } from '@portifolio/context/theme';
import React from 'react';
import Navbar from '../components/navbar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export function App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {
          ({theme}) => (
            <html lang="en" className={`${theme === 'dark' ? 'dark' : ''}`}>
              <body className={`${inter.className} bg-white dark:bg-gray-900 dark:text-white text-black`}>
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
