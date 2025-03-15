// components/CoreValuesSection.jsx
'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHandshake, 
  faBalanceScale, 
  faClipboardCheck, 
  faAward, 
  faUsers, 
  faClock
} from '@fortawesome/free-solid-svg-icons';

const CoreValuesSection = () => {
  const values = [
    {
      title: "Commitment",
      icon: faHandshake
    },
    {
      title: "Integrity",
      icon: faBalanceScale
    },
    {
      title: "Accountability",
      icon: faClipboardCheck
    },
    {
      title: "Quality",
      icon: faAward
    },
    {
      title: "Respect",
      icon: faUsers
    },
    {
      title: "Time Value",
      icon: faClock
    }
  ];

  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-gray-100 px-4 sm:px-6 md:px-10 lg:px-20 font-['Poppins']">
      <div className="container mx-auto">
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <p className="text-xs sm:text-sm md:text-base text-center font-semibold tracking-wider text-primary-green uppercase">
            Beliefs that Shape Our Culture
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold text-blue mb-2 sm:mb-3 md:mb-4">
            Our Core Values
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-center text-gray-600 mx-1 sm:mx-2 md:mx-6 lg:mx-10 leading-relaxed">
            Our firm believe and follow the culture to maintain faith, integrity and ethics in all levels during deliver services to every client. Our profession is our faith and our people always pursue this journey.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center mb-3 sm:mb-4 md:mb-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-green-600 shadow-md flex items-center justify-center mb-2 sm:mb-3 md:mb-4 hover:bg-green-700 transition-colors duration-300">
                <FontAwesomeIcon 
                  icon={value.icon} 
                   className="w-8 h-8 md:w-12 md:h-12 text-xl md:text-3xl text-white"
                />
              </div>
              <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-gray-900 text-center hover:text-green-700 transition-colors duration-300">{value.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;