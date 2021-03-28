import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="sticky z-50 top-0 border-t-8 border-yellow-400">
      <a href="#content" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <nav
        className="bg-yellow-50 bg-opacity-90 dark:bg-opacity-80 dark:bg-gray-900 max-w-prose mx-auto py-5 md:py-8 flex justify-between items-center px-5"
        style={{ opacity: 5, backdropFilter: "blur(3px)" }}
      >
        <div className="hidden sm:block">
          <Link href="/">
            <a className="font-bold text-2xl">
              <span className="bg-gradient-to-b from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                Coderin
              </span>
              black
            </a>
          </Link>
        </div>
        <ul className="flex items-center text-sm sm:text-base space-x-6 sm:space-x-8 text-gray-700 dark:text-gray-200">
          <li>
            <a href="https://github.com/coderinblack08">GitHub</a>
          </li>
          <li>
            <a href="https://twitter.com/coderinblack">Twitter</a>
          </li>
          <li>
            <button
              className="transition flex items-center focus:outline-none focus:ring focus:ring-yellow-400 focus:bg-yellow-100 dark:focus:bg-gray-800 rounded-full p-2"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "light" ? (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
