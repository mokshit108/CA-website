// components/Navbar.js
'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full font-['Poppins']">
      {/* Top contact bar */}
      <div className="primary-bg text-white py-1 sm:py-2 px-2 sm:px-4">
        <div className="container mx-auto flex justify-end text-xs sm:text-sm">
          <div className="mr-3 sm:mr-6">
            <span className="mr-1 sm:mr-2"></span>
            <span>+91 9167699919</span>
          </div>
          <div>
            <span className="mr-1 sm:mr-2"></span>
            <span>kenilshah059@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Main navbar - Added border-t and white bg */}
      <nav className="bg-white border-t border-gray-200 shadow-sm">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex items-center h-16 sm:h-18 md:h-20">
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
              <div className="flex items-center space-x-4 lg:space-x-10">
                <Link href="/">
                  <span className={`${pathname === '/' ? 'gradient-text border-blue-600' : 'text-gray-700 border-transparent'} hover:text-blue-600 transition duration-200 px-2 lg:px-3 py-2 text-base lg:text-lg font-medium cursor-pointer border-b-2 hover:border-blue-600`}>Home</span>
                </Link>
                <Link href="/about">
                  <span className={`${pathname === '/about' ? 'gradient-text border-blue-600' : 'text-gray-700 border-transparent'} hover:text-blue-600 transition duration-200 px-2 lg:px-3 py-2 text-base lg:text-lg font-medium cursor-pointer border-b-2 hover:border-blue-600`}>About</span>
                </Link>
                <Link href="/services">
                  <span className={`${pathname === '/services' ? 'gradient-text border-blue-600' : 'text-gray-700 border-transparent'} hover:text-blue-600 transition duration-200 px-2 lg:px-3 py-2 text-base lg:text-lg font-medium cursor-pointer border-b-2 hover:border-blue-600`}>Services</span>
                </Link>
                <Link href="/contact">
                  <span className={`${pathname === '/contact' ? 'gradient-text border-blue-600' : 'text-gray-700 border-transparent'} hover:text-blue-600 transition duration-200 px-2 lg:px-3 py-2 text-base lg:text-lg font-medium cursor-pointer border-b-2 hover:border-blue-600`}>Contact</span>
                </Link>
              </div>
            </div>

            {/* Spacer to balance the layout */}
            <div className="hidden md:block flex-shrink-0" style={{ width: '200px' }}></div>

            {/* Mobile menu button - Improved styling */}
            <div className="md:hidden ml-auto">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-1.5 sm:p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6"
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
                <span className={`block ${pathname === '/' ? 'gradient-text' : 'text-gray-700'} hover:text-blue-600 hover:bg-gray-50 px-3 py-2.5 rounded-md text-base font-medium cursor-pointer`}>Home</span>
              </Link>
              <Link href="/about">
                <span className={`block ${pathname === '/about' ? 'gradient-text' : 'text-gray-700'} hover:text-blue-600 hover:bg-gray-50 px-3 py-2.5 rounded-md text-base font-medium cursor-pointer`}>About</span>
              </Link>
              <Link href="/services">
                <span className={`block ${pathname === '/services' ? 'gradient-text' : 'text-gray-700'} hover:text-blue-600 hover:bg-gray-50 px-3 py-2.5 rounded-md text-base font-medium cursor-pointer`}>Services</span>
              </Link>
              <Link href="/contact">
                <span className={`block ${pathname === '/contact' ? 'gradient-text' : 'text-gray-700'} hover:text-blue-600 hover:bg-gray-50 px-3 py-2.5 rounded-md text-base font-medium cursor-pointer`}>Contact</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;