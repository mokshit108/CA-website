// app/services/page.jsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  faFileInvoice, 
  faCalculator, 
  faGlobe, 
  faFileInvoiceDollar, 
  faFileContract, 
  faBook,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      title: "Auditing & Assurance",
      icon: <FontAwesomeIcon icon={faFileInvoice} className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
      slug: "auditing-assurance",
      description: "Comprehensive auditing services to ensure financial compliance and accuracy.",
      offerings: [
        "Statutory Audit",
        "Internal Audit"
      ]
    },
    {
      title: "Tax Planning & Advisory",
      icon: <FontAwesomeIcon icon={faCalculator} className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
      slug: "tax-planning-advisory",
      description: "Strategic tax planning solutions for optimal financial management.",
      offerings: [
        "Income-Tax Planning for Individuals",
        "Corporate Tax Planning",
        "Tax advisory for complex transactions",
        "Tax consultancy for Mergers and acquisitions"
      ]
    },
    {
      title: "International Taxation & Transfer Pricing",
      icon: <FontAwesomeIcon icon={faGlobe} className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
      slug: "international-taxation",
      description: "Expert guidance on international tax matters and transfer pricing compliance.",
      offerings: [
        "Transfer Pricing Study Report",
        "Transfer Pricing Audit",
        "County by Country Reporting",
        "Analysis of DTAA Treaties",
        "15 CA / CB Certifications"
      ]
    },
    {
      title: "Direct Tax & NRI Taxation",
      icon: <FontAwesomeIcon icon={faFileInvoiceDollar} className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
      slug: "direct-tax-nri",
      description: "Specialized tax services for individuals, businesses, and non-resident Indians.",
      offerings: [
        "Income-Tax Registration",
        "Income-Tax Returns for Individual, Trusts & Companies",
        "Tax Assessments and Appeals",
        "Tax Audit for Companies, Individuals & Charitable Trusts",
        "Income-Tax Certifications",
        "E-TDS Returns"
      ]
    },
    {
      title: "GST Advisory",
      icon: <FontAwesomeIcon icon={faFileContract} className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
      slug: "gst-advisory",
      description: "Complete GST compliance and advisory services for your business needs.",
      offerings: [
        "GST Registration",
        "GST Return Filing",
        "GST Audit",
        "GST Assessment and Appeals",
        "GST Advisory on Complex Transactions",
        "GST Refund Services"
      ]
    },
    {
      title: "Accounting & Bookkeeping",
      icon: <FontAwesomeIcon icon={faBook} className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
      slug: "accounting-bookkeeping",
      description: "Reliable accounting and bookkeeping services to keep your finances in order.",
      offerings: [
        "Preparation of Financial Statements as per Schedule III",
        "Finalization of Accounts",
        "Preparation of MIS",
        "Accounting for Companies & Individuals"
      ]
    }
  ];

  const toggleService = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.1 
      }
    }
  };

  const serviceCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12 
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        duration: 0.3,
        ease: "easeInOut" 
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const offeringVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10 
      }
    }
  };

  return (
    <main>
      <Navbar />
      <div className="font-['Poppins']">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-8 sm:py-8 md:py-12 bg-gradient-to-r from-green-600 via-emerald-600 to-blue-700 text-white"
        >
          <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6"
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed"
            >
              We offer comprehensive financial solutions tailored to meet your unique business needs with expertise and precision.
            </motion.p>
          </div>
        </motion.section>

        {/* Services Overview */}
        <section className="py-8 sm:py-10 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="mb-8 sm:mb-10 md:mb-12 text-center"
            >
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xs sm:text-sm md:text-base font-semibold tracking-wider text-green-600 uppercase mb-1 sm:mb-2"
              >
                What We Offer
              </motion.p>
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4"
              >
                Comprehensive Financial Services
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed"
              >
                Our team of experienced professionals is dedicated to providing high-quality services 
                that help you achieve your financial goals and navigate complex regulatory requirements.
              </motion.p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8"
            >
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  variants={serviceCardVariants}
                  className="bg-gray-50 rounded-lg shadow-md overflow-hidden border border-gray-200"
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className={`flex items-center justify-between p-4 sm:p-5 md:p-6 cursor-pointer transition-colors duration-300 ${activeService === index ? 'bg-green-50' : 'hover:bg-green-50'}`}
                    onClick={() => toggleService(index)}
                  >
                    <div className="flex items-center">
                      <motion.div 
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-green-600 shadow-md flex items-center justify-center text-white mr-3 sm:mr-4 md:mr-6 flex-shrink-0"
                      >
                        {service.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 leading-tight">{service.title}</h3>
                        <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1 hidden sm:block">{service.description}</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: activeService === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FontAwesomeIcon 
                        icon={faChevronDown} 
                        className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 ml-2 flex-shrink-0" 
                      />
                    </motion.div>
                  </motion.div>
                  
                  <AnimatePresence>
                    {activeService === index && (
                      <motion.div 
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="bg-white p-4 sm:p-5 md:p-6 border-t border-gray-200"
                      >
                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 sm:hidden">{service.description}</p>
                        <h4 className="text-base sm:text-lg font-medium text-gray-800 mb-2 sm:mb-3">Our Offerings:</h4>
                        <motion.ul 
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                          className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3"
                        >
                          {service.offerings.map((offering, idx) => (
                            <motion.li 
                              key={idx} 
                              variants={offeringVariants}
                              className="flex items-start"
                            >
                              <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm sm:text-base text-gray-700">{offering}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.3 }}
                          className="mt-4 sm:mt-5 md:mt-6"
                        >
                          <Link href={`/contact`}>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-green-600 rounded-md text-sm sm:text-base text-white hover:bg-green-700 transition-colors"
                            >
                              Inquire about this service
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1.5 sm:ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </motion.div>
                          </Link>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
{/* Call to Action */}
<motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gray-100"
        >
          <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4"
            >
              Need Tailored Financial Solutions?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed"
            >
              Our team of experts is ready to understand your specific requirements and provide customized services to help you achieve your financial goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-green-600 rounded-md text-sm sm:text-base text-white font-medium hover:bg-green-700 transition-colors"
                >
                  Contact Us Today
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
      <Footer/>
    </main>
  );
};

export default ServicesPage;