"use client";

import { ThemeContext } from "@portifolio/context/theme";
import Link from "next/link";
import { forwardRef, useContext } from "react";
import { BiSun } from "react-icons/bi";
import { BsMoonStars } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";

type NavMenuProps = {
  toggleMenu: () => void;
};

const NavMenu = forwardRef(
  function NavMenu ({toggleMenu}: NavMenuProps, ref: React.Ref<HTMLDivElement>) {
    const { theme, changeTheme, isUsingSystemTheme } = useContext(ThemeContext);

    return (
      <div
        className="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5"
        ref={ref}
      >
        <button
          type="button"
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
          onClick={toggleMenu}
        >
          <span className="sr-only">Fechar navegação</span>
          <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 overflow-visible" aria-hidden="true"><path d="M0 0L10 10M10 0L0 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>
        </button>
        <ul className="space-y-6">
          <li>
            <Link href="#about">
              Docs
            </Link>
          </li>
          <li>
            <Link href="#">
              Components
            </Link>
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
    );
  }
);

export default NavMenu;