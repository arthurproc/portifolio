"use client";

import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { BsMoonStars } from 'react-icons/bs';
import { BiSun } from 'react-icons/bi';
import { ThemeContext } from '@portifolio/context/theme';
import useOnOutsideClick from '@portifolio/hooks/use-on-outside-click';
import useOnScroll from '@portifolio/hooks/use-on-scroll';

const Navbar = () => {
  const { theme, changeTheme, isUsingSystemTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const nav = useRef<HTMLElement>(null);
  const navMenu = useRef<HTMLDivElement>(null);
  useOnOutsideClick(
    navMenu,
    () => setIsOpen(false)
  );
  const lastScrollTop = useRef(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = useCallback(() => {
    if (nav.current === null) return;
    const isHidden = nav.current.classList.contains('-translate-y-full');
    const currentScrollTop = document.documentElement.scrollTop;

    if (!isHidden && currentScrollTop > lastScrollTop.current) {
      nav.current.classList.add('-translate-y-full');
    } else if (isHidden && currentScrollTop < lastScrollTop.current) {
      nav.current.classList.remove('-translate-y-full');
    }
    lastScrollTop.current = currentScrollTop;
  }, []);

  useOnScroll(handleScroll);

  return (
    <nav className="bg-white backdrop-blur supports-backdrop-blur:bg-white/95 dark:bg-gray-900/75 p-4 fixed top-0 z-10 transition-transform ease-in-out duration-300 w-full" ref={nav}>
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">Procorp.dev</div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none hover:text-blue-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <a href="#" className="hover:text-blue-400">Link 1</a>
          <a href="#" className="hover:text-blue-400">Link 2</a>
          <a href="#" className="hover:text-blue-400">Link 3</a>
        </div>
        {isOpen && (
          <div
            className="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5"
            ref={navMenu}
          >
            <button type="button" className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" onClick={toggleMenu}>
              <span className="sr-only">Close navigation</span>
              <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 overflow-visible" aria-hidden="true"><path d="M0 0L10 10M10 0L0 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>
            </button>
            <ul className="space-y-6">
              <li>
                <a className="hover:text-sky-500 dark:hover:text-sky-400" href="/docs/installation">
                  Docs
                </a>
              </li>
              <li>
                <a href="https://tailwindui.com/?ref=top" className="hover:text-sky-500 dark:hover:text-sky-400">
                  Components
                </a>
              </li>
              <li>
                <a className="hover:text-sky-500 dark:hover:text-sky-400" href="/blog">
                  Blog
                </a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-200/10">
              <div className="flex items-center justify-between">
                <label htmlFor="theme" className="text-slate-700 font-normal dark:text-slate-400">
                  Switch theme
                </label>
                <div className="relative gap-3 flex items-center ring-1 ring-slate-900/10 rounded-lg shadow-sm p-2 text-slate-700 font-semibold dark:bg-slate-600 dark:ring-0 dark:highlight-white/5 dark:text-slate-200">
                  {
                    theme === 'light' ? <BiSun /> : <BsMoonStars />
                  }
                  {
                    isUsingSystemTheme
                      ? 'System' 
                      : theme === 'light' ? 'Light' : 'Dark'
                  }
                  <MdArrowDropDown />
                  <select
                    id="theme"
                    className="absolute appearance-none inset-0 w-full h-full opacity-0"
                    value={
                      isUsingSystemTheme
                        ? 'system' 
                        : theme
                    }
                    onChange={(e) => changeTheme(e.target.value as any)}
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="system">System</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
