"use client";

import React from 'react';
import { Inter } from 'next/font/google';
import Navbar from '../components/navigation/navbar';
import { ThemeProvider, ThemeContext } from '@portifolio/context/theme';

const inter = Inter({ subsets: ['latin'] });

export function App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {
          ({theme}) => (
            <html
              className={`[--scroll-mt:9.875rem] lg:[--scroll-mt:6.3125rem] js-focus-visible ${theme === 'dark' ? 'dark' : ''}`}
              lang="en"
            >
              <body className={`${inter.className} antialiased text-slate-400 dark:text-slate-200 bg-white dark:bg-slate-900`}>
                <div className="relative overflow-hidden">
                  <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
                  </div>
                  <Navbar />
                  <div className=" h-screen overflow-y-scroll">
                    {children}
                  </div>
                  <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                    <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{  clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
                  </div>
                </div>
              </body>
            </html>
          )
        }
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}
