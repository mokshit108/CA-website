// app/services/[slug]/page.jsx
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { servicesData } from '@/app/data/services';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/components/Navbar';

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
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
          <Link href="/services" className="flex items-center gap-2">
            <FontAwesomeIcon icon={faArrowLeft} className='w-12 h-12' /> Back to All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="font-['Poppins']">
      <Navbar/>
      {/* Hero Section */}
      <section className="py-16 md:py-8 bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="px-6 md:px-20">
        <Link href="/services" className="inline-flex items-center mb-16 text-white text-xl hover:underline">
    <FontAwesomeIcon icon={faArrowLeft} className="mr-4 h-12" />
    Back to All Services
  </Link>
          
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center text-green-600 mr-4">
              <FontAwesomeIcon icon={service.icon} className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold">{service.title}</h1>
          </div>
          
          <p className="text-lg md:text-xl max-w-2xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-20">
          <div className="bg-gray-50 rounded-lg p-8 shadow-md border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Our Offerings</h2>
            
            <div className="space-y-6">
              {service.offerings.map((offering, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white mr-3">
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    {offering}
                  </h3>
                  <p className="text-gray-600 pl-11">
                    We provide comprehensive {offering.toLowerCase()} services tailored to meet your specific business requirements.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}