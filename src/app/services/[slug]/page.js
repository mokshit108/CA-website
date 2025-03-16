import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { servicesData } from '@/app/data/services';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// This function is required for static generation of dynamic routes
export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }) {
  const { slug } = params;
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center font-['Poppins']">
        <div className="text-center px-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6">The service you’re looking for doesn’t exist.</p>
          <Link href="/services" className="inline-flex items-center gap-2 text-base sm:text-lg">
            <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4 sm:w-5 sm:h-5" /> 
            Back to All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="font-['Poppins']">
      <Navbar/>
      {/* Hero Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-r from-green-600 via-emerald-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <Link href="/services" className="inline-flex items-center mb-6 sm:mb-10 md:mb-12 text-white text-base sm:text-lg hover:underline">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5" />
            Back to All Services
          </Link>
          
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center text-green-600 mr-3 sm:mr-4">
              <FontAwesomeIcon icon={service.icon} className="w-4 h-4 md:w-8 md:h-8" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{service.title}</h1>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl max-w-2xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-8 sm:py-10 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8 shadow-md border border-gray-200">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 sm:mb-6">Our Offerings</h2>
            
            <div className="space-y-4 sm:space-y-6">
              {service.offerings.map((offering, index) => (
                <div key={index} className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 flex items-center">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-green-600 flex items-center justify-center text-white mr-2 sm:mr-3">
                      <span className="text-xs sm:text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="leading-tight">{offering}</span>
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 pl-8 sm:pl-10 md:pl-11 leading-relaxed">
                    We provide comprehensive {offering.toLowerCase()} services tailored to meet your specific business requirements.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}