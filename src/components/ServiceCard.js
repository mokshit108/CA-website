// components/DashboardServicesSection.jsx
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFileInvoice, 
  faCalculator, 
  faGlobe, 
  faFileInvoiceDollar, 
  faFileContract, 
  faBook
} from '@fortawesome/free-solid-svg-icons';

const ServicesSection = () => {
  const services = [
    {
      title: "Auditing & Assurance",
      icon: faFileInvoice,
      slug: "auditing-assurance"
    },
    {
      title: "Tax Planning & Advisory",
      icon: faCalculator,
      slug: "tax-planning-advisory"
    },
    {
      title: "International Taxation & Transfer Pricing",
      icon: faGlobe,
      slug: "international-taxation"
    },
    {
      title: "Direct Tax & NRI Taxation",
      icon: faFileInvoiceDollar,
      slug: "direct-tax-nri"
    },
    {
      title: "GST Advisory",
      icon: faFileContract,
      slug: "gst-advisory"
    },
    {
      title: "Accounting & Bookkeeping",
      icon: faBook,
      slug: "accounting-bookkeeping"
    }
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4 }
    },
    hover: {
      scale: 1.15,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  return (
    <motion.section 
      className="py-6 px-4 md:py-12 bg-white md:px-20 font-['Poppins']"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto">
        <motion.div 
          className="mb-6 md:mb-12"
          variants={headerVariants}
        >
          <motion.p 
            className="text-xs md:text-sm lg:text-base text-center font-semibold tracking-wider text-primary-green uppercase"
            variants={headerVariants}
          >
            Our Expertise
          </motion.p>
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl text-center font-bold text-blue mb-2 md:mb-4"
            variants={headerVariants}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-sm md:text-base lg:text-lg text-center text-gray-600 mx-2 md:mx-10"
            variants={headerVariants}
          >
            We offer comprehensive financial solutions tailored to meet your unique business needs with expertise and precision.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:bg-green-50 border border-gray-200 group flex flex-col"
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                transition: { type: "spring", stiffness: 300, damping: 15 } 
              }}
            >
              <div className="flex justify-center mb-3 md:mb-4">
                <motion.div 
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-600 flex items-center justify-center shadow-md group-hover:bg-green-700 transition-colors duration-300"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <FontAwesomeIcon 
                    icon={service.icon} 
                    className="w-8 h-8 md:w-12 md:h-12 text-xl md:text-3xl text-white"
                  />
                </motion.div>
              </div>
              <motion.h3 
                className="text-sm md:text-base lg:text-lg font-semibold text-gray-900 mb-2 md:mb-3 group-hover:text-green-700 transition-colors duration-300 text-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {service.title}
              </motion.h3>
              <div className="mt-auto pt-2 border-t border-gray-200 w-full">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    href={`/services/${service.slug}`} 
                    className="inline-flex items-center px-2 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 bg-green-600 text-white font-medium rounded-md border border-green-600 hover:bg-green-800 hover:border-green-800 transition-all duration-300 shadow-sm hover:shadow-md text-xs md:text-sm mt-2 w-full justify-center"
                  >
                    <motion.span 
                      className="flex items-center"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      Learn more
                      <motion.svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-3 w-3 md:h-3.5 md:w-3.5 lg:h-4 lg:w-4 ml-1 md:ml-1.5 lg:ml-2" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </motion.span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;