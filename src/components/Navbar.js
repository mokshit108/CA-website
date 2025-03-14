// components/Navbar.js
'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full font-['Poppins']">
      {/* Top contact bar */}
      <div className="primary-bg text-white py-2 px-4">
        <div className="container mx-auto flex justify-end text-sm">
          <div className="mr-6">
            <span className="mr-2"></span>
            <span>+91 9167699919</span>
          </div>
          <div>
            <span className="mr-2"></span>
            <span>kenilshah059@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Main navbar - Added border-t and white bg */}
      <nav className="bg-white border-t border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-20">
            {/* Logo with icon - Updated layout */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <div className="flex items-center cursor-pointer">
                  {/* Add company logo/icon - replace with your actual logo path */}
                  <Image
                    src="/images/CA-logo.png"
                    alt="Kenil Shah & Co Logo"
                    width={70}
                    height={70}
                    className="mr-3"
                  />
                  <span className="text-2xl font-bold text-primary-green font-['Poppins']">Kenil Shah <span className="text-sky-900">&</span> Co</span>
                </div>
              </Link>
            </div>

            {/* Desktop menu - Centered with flex-1 and justify-center */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex items-center space-x-10">
                <Link href="/">
                  <span className="text-gray-700 hover:text-blue-600 transition duration-200 px-3 py-2 text-base font-medium cursor-pointer border-b-2 border-transparent hover:border-blue-600">Home</span>
                </Link>
                <Link href="/about">
                  <span className="text-gray-700 hover:text-blue-600 transition duration-200 px-3 py-2 text-base font-medium cursor-pointer border-b-2 border-transparent hover:border-blue-600">About</span>
                </Link>
                <Link href="/services">
                  <span className="text-gray-700 hover:text-blue-600 transition duration-200 px-3 py-2 text-base font-medium cursor-pointer border-b-2 border-transparent hover:border-blue-600">Services</span>
                </Link>
              </div>
            </div>

            {/* Spacer to balance the layout */}
            <div className="hidden md:block flex-shrink-0" style={{ width: '200px' }}></div>

            {/* Mobile menu button - Improved styling */}
            <div className="md:hidden ml-auto">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu - Improved styling */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/">
                <span className="block text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-3 rounded-md text-base font-medium cursor-pointer">Home</span>
              </Link>
              <Link href="/about">
                <span className="block text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-3 rounded-md text-base font-medium cursor-pointer">About</span>
              </Link>
              <Link href="/services">
                <span className="block text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-3 rounded-md text-base font-medium cursor-pointer">Services</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;