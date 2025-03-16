'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const HomeHero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Taxation", "Audit", "Compliance"];
  const displayTime = 2000; // 3 seconds per word
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, displayTime);
    
    return () => clearTimeout(timer);
  }, [currentWordIndex, words]);

  return (
    <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden font-['Roboto']">
      {/* Background Image with Opacity */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2 }}
      >
        <Image 
          width={100}
          height={100}
          src="/images/bg-home.jpg"
          alt="CA Firm Background"
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <motion.div 
          className="w-3/4 md:w-1/2 lg:w-2/5 md:ml-[10px] text-white mt-0 md:-mt-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div 
            className="bg-gradient-to-r from-sky-800 via-emerald-600 to-transparent p-5 md:p-7 rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              <motion.span 
                className="text-white drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Manage Your
              </motion.span>
              <br></br>
              <div className="text-green-300 inline-block min-h-[1.2em] sm:min-h-[1.5em] min-w-[2em] font-bold drop-shadow-md h-8 sm:h-10 relative">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="absolute"
                  >
                    {words[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <br/>
            </h1>
            <motion.p 
              className="text-sm sm:text-base md:text-lg font-medium mt-2 sm:mt-3 mb-4 sm:mb-5 md:mb-6 max-w-sm drop-shadow-lg text-blue-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Empowering Excellence, Every Step of the Way
            </motion.p>
            <motion.div 
              className="mt-4 sm:mt-5 md:mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link href="/contact" className="inline-block">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-700/60 to- rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition duration-300 group-hover:duration-200"></div>
                  <button className="relative bg-white text-gray-900 font-bold text-xs sm:text-sm md:text-base py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center group overflow-hidden group-hover:green-700">
                    <span className="relative z-10">Let’s Talk</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5 ml-1 sm:ml-1.5 md:ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <span className="absolute top-0 left-0 w-full h-full bg-[#63ac4c]/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0"></span>
                  </button>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeHero;