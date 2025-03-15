// components/DashboardServicesSection.jsx
'use client';

import React from 'react';
import Link from 'next/link';
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

  return (
    <section className="py-8 px-8 md:py-12 bg-white md:px-20 font-['Poppins']">
      <div className="container mx-auto">
        <div className="mb-8 md:mb-12">
          <p className="text-[12px] md:text-[16px] text-center font-semibold tracking-wider text-primary-green uppercase">
            Our Expertise
          </p>
          <h2 className="text-[32px] md:text-[38px] lg:text-[43px] text-center font-bold text-blue mb-2 md:mb-4">
            Our Services
          </h2>
          <p className="text-sm md:text-lg text-center text-gray-600 mx-2 md:mx-10">
            We offer comprehensive financial solutions tailored to meet your unique business needs with expertise and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:bg-green-50 border border-gray-200 group flex flex-col"
            >
              <div className="flex justify-center mb-3 md:mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-600 flex items-center justify-center shadow-md group-hover:bg-green-700 transition-colors duration-300">
                  <FontAwesomeIcon 
                    icon={service.icon} 
                    className="w-8 h-8 md:w-12 md:h-12 text-xl md:text-3xl text-white"
                    
                  />
                </div>
              </div>
              <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-2 md:mb-3 group-hover:text-green-700 transition-colors duration-300 text-start">
                {service.title}
              </h3>
              <div className="mt-auto pt-2 border-t border-gray-200 w-full">
                <Link 
                  href={`/services/${service.slug}`} 
                  className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-green-600 text-white font-medium rounded-md border border-green-600 hover:bg-green-800 hover:border-green-800 transition-all duration-300 shadow-sm hover:shadow-md text-xs md:text-sm mt-2 w-full md:w-auto justify-center md:justify-start"
                >
                  <span className="flex items-center">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 ml-1 md:ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;