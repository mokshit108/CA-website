// src/app/about/page.js
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'About Us | Kenil Shah & Co',
  description: 'Learn about Kenil Shah & Co Chartered Accountants and our services',
};

export default function About() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section with Gradient Background */}
      <section className="py-10 sm:py-10 md:py-12 bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">About Us</h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
            Learn about our journey, our mission, and why we're the trusted financial partner for businesses across India.
          </p>
        </div>
      </section>
      
      <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 lg:py-12 font-['Poppins'] flex justify-center">
        <div className="w-full max-w-4xl">
          
          <div className="flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-8 mb-8 sm:mb-10 md:mb-12">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3 md:mb-4">Our Firm</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-3 leading-relaxed">
                Kenil Shah & Co is a progressive chartered accountancy firm based in Mumbai, delivering comprehensive financial services to businesses and individuals across India. Our expertise spans multiple domains including Auditing & Assurance, Tax Planning & Advisory, International Taxation & Transfer Pricing, Direct Tax & NRI Taxation, GST Advisory, and Accounting & Bookkeeping.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Founded by CA Kenil Shah, we pride ourselves on providing tailored solutions for complex financial matters. From statutory audits to international tax planning, GST compliance to transfer pricing, we offer specialized services designed to optimize your financial position while ensuring full regulatory compliance.
              </p>
            </div>
          </div>
          
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3 md:mb-4">Our Mission</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Our mission is to provide high-quality financial services that empower our clients to make informed decisions and achieve their financial goals. We believe in building long-term relationships based on trust, transparency, and mutual success.
            </p>
          </div>
          
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3 md:mb-4 text-center">Meet Our Founder</h2>
            <div className="flex flex-col items-center mb-4 sm:mb-5 md:mb-6">
              <Image
                src="/images/about-image.png"
                alt="CA Kenil Shah"
                width={300}
                height={300}
                className="rounded-full shadow-md mb-3 sm:mb-4 md:mb-6 w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover"
              />
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-primary">CA Kenil Shah</h3>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 border border-gray-100">
              <p className="text-sm sm:text-base text-gray-600 mb-3 leading-relaxed">
                CA Kenil Shah is a qualified Chartered Accountant who passed in 2023 and has over two years of post-qualification experience in taxation and financial advisory. He is the Proprietor of Kenil Shah & Co, specializing in Direct, Indirect, and International Taxation, offering tailored solutions to corporate and individual clients. Prior to establishing his own practice, he gained valuable experience as a Tax Consultant at Devesh K. Shah & Associates LLP, where he worked extensively on complex tax matters and regulatory compliance.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                His professional expertise includes Income Tax and GST compliance, Tax Assessments and Appeals, Tax Audits, Computation of Income, Tax Planning, and Income Tax Certifications. He has also handled Statutory and Internal Audits, GST Audits, and the preparation and finalization of accounts. With a strong technical foundation and a client-centric approach, he is committed to delivering effective tax strategies and ensuring seamless financial compliance.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 md:mb-5">Why Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 md:p-6 border border-gray-100 hover:border-green-500 transition-all">
                <h3 className="text-base sm:text-lg font-semibold text-blue-700 mb-2 sm:mb-3 md:mb-4">Specialized Expertise</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  We offer deep domain knowledge across multiple taxation areas, including international taxation, transfer pricing, and GST advisory.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 md:p-6 border border-gray-100 hover:border-green-500 transition-all">
                <h3 className="text-base sm:text-lg font-semibold text-blue-700 mb-2 sm:mb-3 md:mb-4">Comprehensive Solutions</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  From audit and compliance to strategic tax planning and complex advisory, we provide end-to-end financial services under one roof.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 md:p-6 border border-gray-100 hover:border-green-500 transition-all">
                <h3 className="text-base sm:text-lg font-semibold text-blue-700 mb-2 sm:mb-3 md:mb-4">Client-Centric Approach</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  We understand that each client has unique needs and challenges, which is why we develop customized solutions rather than generic advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer would go here */}
    </main>
  );
}