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
      
      <div className="container mx-auto px-4 py-12 font-['Poppins']">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl text-center md:text-4xl font-bold text-blue mb-6 uppercase">About</h1>
          
          <div className="flex flex-col md:flex-row gap-8 mb-12">

            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">Our Firm</h2>
              <p className="text-gray-600 mb-4">
                Kenil Shah & Co is a progressive chartered accountancy firm based in Mumbai, delivering comprehensive financial services to businesses and individuals across India. Our expertise spans multiple domains including Auditing & Assurance, Tax Planning & Advisory, International Taxation & Transfer Pricing, Direct Tax & NRI Taxation, GST Advisory, and Accounting & Bookkeeping.
              </p>
              <p className="text-gray-600">
                Founded by CA Kenil Shah, we pride ourselves on providing tailored solutions for complex financial matters. From statutory audits to international tax planning, GST compliance to transfer pricing, we offer specialized services designed to optimize your financial position while ensuring full regulatory compliance.
              </p>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-primary mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              Our mission is to provide high-quality financial services that empower our clients to make informed decisions and achieve their financial goals. We believe in building long-term relationships based on trust, transparency, and mutual success.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">Meet Our Founder</h2>
            <div className="flex flex-col items-center mb-6">
              <Image
                src="/images/about-image.png"
                alt="CA Kenil Shah"
                width={450}
                height={450}
                className="rounded-full shadow-md mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-800">CA Kenil Shah</h3>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <p className="text-gray-600 mb-4">
                CA Kenil Shah is a qualified Chartered Accountant who passed in 2023 and has over two years of post-qualification experience in taxation and financial advisory. He is the Proprietor of Kenil Shah & Co, specializing in Direct, Indirect, and International Taxation, offering tailored solutions to corporate and individual clients. Prior to establishing his own practice, he gained valuable experience as a Tax Consultant at Devesh K. Shah & Associates LLP, where he worked extensively on complex tax matters and regulatory compliance.
              </p>
              <p className="text-gray-600">
                His professional expertise includes Income Tax and GST compliance, Tax Assessments and Appeals, Tax Audits, Computation of Income, Tax Planning, and Income Tax Certifications. He has also handled Statutory and Internal Audits, GST Audits, and the preparation and finalization of accounts. With a strong technical foundation and a client-centric approach, he is committed to delivering effective tax strategies and ensuring seamless financial compliance.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Specialized Expertise</h3>
                <p className="text-gray-600">
                  We offer deep domain knowledge across multiple taxation areas, including international taxation, transfer pricing, and GST advisory.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Comprehensive Solutions</h3>
                <p className="text-gray-600">
                  From audit and compliance to strategic tax planning and complex advisory, we provide end-to-end financial services under one roof.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Client-Centric Approach</h3>
                <p className="text-gray-600">
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