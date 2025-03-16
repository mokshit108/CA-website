'use client';

import React from 'react';
import { motion } from 'framer-motion';
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

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const valueItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const iconHoverVariants = {
    hover: { 
      scale: 1.1,
      backgroundColor: "#059669", // darker green on hover
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  return (
    <motion.section 
      className="py-6 sm:py-8 md:py-10 lg:py-12 bg-gray-100 px-4 sm:px-6 md:px-10 lg:px-20 font-['Poppins']"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto">
        <motion.div 
          className="mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          variants={titleVariants}
        >
          <motion.p 
            className="text-xs sm:text-sm md:text-base text-center font-semibold tracking-wider text-primary-green uppercase"
            variants={titleVariants}
          >
            Beliefs that Shape Our Culture
          </motion.p>
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold text-blue mb-2 sm:mb-3 md:mb-4"
            variants={titleVariants}
          >
            Our Core Values
          </motion.h2>
          <motion.p 
            className="text-xs sm:text-sm md:text-base lg:text-lg text-center text-gray-600 mx-1 sm:mx-2 md:mx-6 lg:mx-10 leading-relaxed"
            variants={titleVariants}
          >
            Our firm believe and follow the culture to maintain faith, integrity and ethics in all levels during deliver services to every client. Our profession is our faith and our people always pursue this journey.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {values.map((value, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center mb-3 sm:mb-4 md:mb-0"
              variants={valueItemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-green-600 shadow-md flex items-center justify-center mb-2 sm:mb-3 md:mb-4 transition-colors duration-300"
                variants={iconHoverVariants}
                whileHover="hover"
              >
                <FontAwesomeIcon 
                  icon={value.icon} 
                  className="w-8 h-8 md:w-12 md:h-12 text-xl md:text-3xl text-white"
                />
              </motion.div>
              <motion.h3 
                className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-gray-900 text-center transition-colors duration-300"
                whileHover={{ color: "#059669" }}
              >
                {value.title}
              </motion.h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CoreValuesSection;