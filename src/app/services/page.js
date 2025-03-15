// app/services/page.jsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '@/components/Navbar';
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
      icon: <FontAwesomeIcon icon={faFileInvoice} className="w-6 h-6 md:w-8 md:h-8" />,
      slug: "auditing-assurance",
      description: "Comprehensive auditing services to ensure financial compliance and accuracy.",
      offerings: [
        "Statutory Audit",
        "Internal Audit"
      ]
    },
    {
      title: "Tax Planning & Advisory",
      icon: <FontAwesomeIcon icon={faCalculator} className="w-6 h-6 md:w-8 md:h-8" />,
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
      icon: <FontAwesomeIcon icon={faGlobe} className="w-6 h-6 md:w-8 md:h-8" />,
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
      icon: <FontAwesomeIcon icon={faFileInvoiceDollar} className="w-6 h-6 md:w-8 md:h-8" />,
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
      icon: <FontAwesomeIcon icon={faFileContract} className="w-6 h-6 md:w-8 md:h-8" />,
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
      icon: <FontAwesomeIcon icon={faBook} className="w-6 h-6 md:w-8 md:h-8" />,
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

  return (
    <main>
      <Navbar />
    <div className="font-['Poppins']">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 md:px-20">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Our Services</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            We offer comprehensive financial solutions tailored to meet your unique business needs with expertise and precision.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-20">
          <div className="mb-12 text-center">
            <p className="text-sm md:text-base font-semibold tracking-wider text-green-600 uppercase mb-2">
              What We Offer
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
              Comprehensive Financial Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our team of experienced professionals is dedicated to providing high-quality services 
              that help you achieve your financial goals and navigate complex regulatory requirements.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div 
                  className={`flex items-center justify-between p-6 cursor-pointer transition-colors duration-300 ${activeService === index ? 'bg-green-50' : 'hover:bg-green-50'}`}
                  onClick={() => toggleService(index)}
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-600 shadow-md flex items-center justify-center text-white mr-4 md:mr-6">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-semibold text-gray-800">{service.title}</h3>
                      <p className="text-sm md:text-base text-gray-600 mt-1 hidden md:block">{service.description}</p>
                    </div>
                  </div>
                  <FontAwesomeIcon 
                    icon={faChevronDown} 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${activeService === index ? 'transform rotate-180' : ''}`} 
                  />
                </div>
                
                {activeService === index && (
                  <div className="bg-white p-6 border-t border-gray-200 animate-fadeIn">
                    <p className="text-gray-600 mb-4 md:hidden">{service.description}</p>
                    <h4 className="text-lg font-medium text-gray-800 mb-3">Our Offerings:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.offerings.map((offering, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{offering}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Link href={`/contact`} className="inline-flex items-center px-4 py-2 bg-green-600 rounded-md text-white hover:bg-green-700 transition-colors">
                        Inquire about this service
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-6 md:px-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Need Tailored Financial Solutions?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our team of experts is ready to understand your specific requirements and provide customized services to help you achieve your financial goals.
          </p>
          <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-green-600 rounded-md text-white font-medium hover:bg-green-700 transition-colors">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
    </main>
  );
};

export default ServicesPage;