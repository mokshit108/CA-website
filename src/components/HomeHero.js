'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HomeHero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ["Taxation", "Audit", "Compliance"];
  // Slowed down typing speed
  const typingSpeed = 200;
  const deletingSpeed = 150;
  const pauseTime = 1800;

  useEffect(() => {
    const word = words[currentWordIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(word.substring(0, displayText.length + 1));
        
        if (displayText.length === word.length) {
          setIsDeleting(true);
          clearTimeout(timer);
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      } else {
        setDisplayText(word.substring(0, displayText.length - 1));
        
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    
    return () => clearTimeout(timer);
  }, [displayText, currentWordIndex, isDeleting, words]);

  return (
    <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden font-['Roboto']">
      {/* Background Image with Opacity */}
      <div className="absolute inset-0">
        <Image 
          width={100}
          height={100}
          src="/images/bg-home.jpg"
          alt="CA Firm Background"
          className="w-full h-full object-cover opacity-70"
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="w-full md:w-1/2 lg:w-2/5 md:ml-[10px] text-white mt-0 md:-mt-12">
          <div className="bg-gradient-to-r from-green-500/20 to-transparent p-4 md:p-6 rounded-lg">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
              <span className="text-white drop-shadow-md">Manage Your</span>{' '}
              <span className="text-blue inline-block min-h-[1.2em] sm:min-h-[1.5em] min-w-[2em] font-bold drop-shadow-md">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
              <br/>
              <span className="relative inline-block">
                <span className="text-white drop-shadow-md">The Right Way</span>
              </span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium mt-2 sm:mt-3 md:mt-5 mb-3 sm:mb-4 md:mb-6 max-w-sm drop-shadow-lg">
              Empowering Excellence Every Step of the Way
            </p>
            <div className="mt-3 sm:mt-4 md:mt-6">
              {/* <button className="relative overflow-hidden bg-green-100 hover:bg-green-600 text-gray-900 font-bold text-xs sm:text-sm md:text-base py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center group shadow-lg">
                <span className="relative z-10">Let's Talk</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5 ml-1 sm:ml-1.5 md:ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <span className="absolute top-0 left-0 w-full h-full bg-green-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0"></span>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;