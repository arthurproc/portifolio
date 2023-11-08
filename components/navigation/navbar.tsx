"use client";

import { useCallback, useContext, useRef, useState } from 'react';
import useOnOutsideClick from '@portifolio/hooks/use-on-outside-click';
import useOnScroll from '@portifolio/hooks/use-on-scroll';
import Link from '@portifolio/components/navigation/link';
import NavMenu from './nav-menu';
import { BiSun } from 'react-icons/bi';
import { BsMoonStars } from 'react-icons/bs';
import { ThemeContext } from '@portifolio/context/theme';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { changeTheme, isUsingSystemTheme, theme } = useContext(ThemeContext);
  const navbarWrapper = useRef<HTMLDivElement>(null);
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
    if (navbarWrapper.current === null) return;
    const isHidden = navbarWrapper.current.classList.contains('-translate-y-full');
    const currentScrollTop = document.documentElement.scrollTop;

    if (!isHidden && !isOpen && currentScrollTop > lastScrollTop.current) {
      navbarWrapper.current.classList.add('-translate-y-full');
    } else if (isHidden && currentScrollTop < lastScrollTop.current) {
      navbarWrapper.current.classList.remove('-translate-y-full');
    }
    lastScrollTop.current = currentScrollTop;
  }, [isOpen]);

  useOnScroll(handleScroll);

  return (
    <div
      className="sticky top-0 z-40 w-full backdrop-blur flex-none transition duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent"
      ref={navbarWrapper}
    >
      <div className="max-w-8xl mx-auto">
        <div className="py-4 border-b border-slate-900/10 lg:px-8 dark:border-slate-300/10 mx-4 lg:mx-0">
          <div className="relative flex items-center">
            <Link
              href="/"
              size="small"
            >
              <span className="text-xl font-bold">
                Procorp.dev
              </span>
            </Link>
            <div className="relative hidden md:flex items-center gap-3 ml-auto">
              <div
                className="ring-1 ring-slate-900/10 rounded-lg shadow-sm p-2 text-slate-700 font-semibold dark:bg-slate-600 dark:ring-0 dark:highlight-white/5 dark:text-slate-200"
              >
                {
                  theme === 'light' ? <BiSun /> : <BsMoonStars />
                }
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
              <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                <ul className="flex space-x-3">
                  <li>
                    <Link href="#" size="xsmall">Link 1</Link>
                  </li>
                  <li>
                    <Link href="#" size="xsmall">Link 2</Link>
                  </li>
                  <li>
                    <Link href="#" size="xsmall">Link 3</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="md:hidden ml-auto">
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
            {isOpen && <NavMenu toggleMenu={toggleMenu} ref={navMenu} />}
          </div>
        </div>
      </div>
    </div> 
  );
};

export default Navbar;
