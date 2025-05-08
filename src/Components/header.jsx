import React, { useState } from "react";
import Logo from "../assets/LOGO.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <nav className="bg-white border-gray-200 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 w-full">
        <a href="/" className="flex items-center space-x-3">
          <img src={Logo} className="h-20" alt="Logo" />
        </a>

        <div className="flex items-center md:order-2 space-x-3">
          <button className="text-red-600 border border-red-600 hover:bg-red-600 hover:text-white font-medium rounded-lg text-sm px-4 py-2">
            Login
          </button>
          <button className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-4 py-2">
            Sign Up
          </button>
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-cta"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <a
                href="/"
                className="block py-2 px-3 md:p-0 text-red-600 bg-blue-700 rounded md:bg-transparent md:text-red-600"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/leadership"
                className="block py-2 px-3 md:p-0 text-red-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-600"
              >
                Leadership
              </a>
            </li>

            {/* Who We Are */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("who")}
                className="flex items-center justify-between w-full py-2 px-3 md:p-0 text-red-600 hover:text-red-700"
              >
                Who We Are
                <svg
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 011.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {activeDropdown === "who" && (
  <ul className="absolute z-10 bg-white border mt-2 w-48 rounded shadow-lg">
    <li className="px-4 py-2 text-red-600 hover:bg-black hover:text-white cursor-pointer">
    <a
                href="/about"
                className="block py-2 px-3 md:p-0 text-red-600 bg-blue-700 rounded md:bg-transparent md:text-red-600"
              >
                About
              </a>
    </li>
    <li className="px-4 py-2 text-red-600 hover:bg-black hover:text-white cursor-pointer">
    <a
                href="/vission"
                className="block py-2 px-3 md:p-0 text-red-600 bg-blue-700 rounded md:bg-transparent md:text-red-600"
              >
                Vission & Mission
              </a>
    </li>
  </ul>
)}
            </li>

            {/* Our Initiatives */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("initiatives")}
                className="flex items-center justify-between w-full py-2 px-3 md:p-0 text-red-600 hover:text-red-700"
              >
                Our Initiatives
                <svg
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 011.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {activeDropdown === "initiatives" && (
                <ul className="absolute z-10 bg-white border mt-2 w-48 rounded shadow-lg">
                  <li className="px-4 py-2 text-red-600 hover:bg-black hover:text-white cursor-pointer">
                  <a
                href="/Education"
                className="block py-2 px-3 md:p-0 text-red-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-600"
              >
                Education
              </a>
                  </li>
                  <li className="px-4 py-2 text-red-600 hover:bg-black hover:text-white cursor-pointer">
                  <a
                href="/Animal"
                className="block py-2 px-3 md:p-0 text-red-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-600"
              >
                Leadership
              </a>
                  </li>
                  <li className="px-4 py-2 text-red-600 hover:bg-black hover:text-white cursor-pointer">
                  <a
                href="/Health"
                className="block py-2 px-3 md:p-0 text-red-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-600"
              >
                Health
              </a>
                  </li>
                  <li className="px-4 py-2 text-red-600 hover:bg-black hover:text-white cursor-pointer">
                  <a
                href="/Public"
                className="block py-2 px-3 md:p-0 text-red-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-600"
              >
                Public
              </a>
                  </li>
                </ul>
              )}
            </li>

            {/* News & Events */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("news")}
                className="flex items-center justify-between w-full py-2 px-3 md:p-0 text-red-600 hover:text-red-700"
              >
                News & Events
                <svg
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 011.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {activeDropdown === "news" && (
                <ul className="absolute z-10 bg-white border mt-2 w-48 rounded shadow-lg">
                  <li className="px-4 py-2 text-red-600 hover:bg-black hover:text-white cursor-pointer">
                    Media & Press
                  </li>
                </ul>
              )}
            </li>

            {/* Connect with Us */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("connect")}
                className="flex items-center justify-between w-full py-2 px-3 md:p-0 text-red-600 hover:text-red-700"
              >
                Connect with Us
                <svg
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 011.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {activeDropdown === "connect" && (
                <ul className="absolute z-10 bg-white border mt-2 w-48 rounded shadow-lg">
                  <li className="px-4 py-2 text-red-600 hover:bg-black hover:text-white cursor-pointer">
                  <a
                href="/contact"
                className="block py-2 px-3 md:p-0 text-red-600 bg-blue-700 rounded md:bg-transparent md:text-red-600"
              >
                 Become a Member
              </a>
                  </li>
                  <li className="px-4 py-2 text-red-600 hover:bg-black hover:text-white cursor-pointer">
                  <a
                href="/contactPage"
                className="block py-2 px-3 md:p-0 text-red-600 bg-blue-700 rounded md:bg-transparent md:text-red-600"
              >
                  Contact With Us
              </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
