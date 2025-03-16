// src/app/about/page.js
'use client'; // Required for Framer Motion to work in Next.js
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

// Note: With 'use client', metadata needs to be handled differently in Next.js App Router
// You can create a separate layout.js file for metadata or use a metadata object export

export default function About() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const cardHover = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.03,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      borderColor: "#10B981",
      transition: { duration: 0.3 }
    }
  };

  return (
    <main>
      <Navbar />
      
      {/* Hero Section with Gradient Background */}
      <motion.section 
        className="py-10 sm:py-10 md:py-12 bg-gradient-to-r from-green-600 via-emerald-600 to-blue-700 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            About Us
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Learn about our journey, our mission, and why we’re the trusted financial partner for businesses across India.
          </motion.p>
        </div>
      </motion.section>
      
      <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 lg:py-12 font-['Poppins'] flex justify-center">
        <motion.div 
          className="w-full max-w-4xl"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          <motion.div 
            className="flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-8 mb-8 sm:mb-10 md:mb-12"
            variants={fadeIn}
          >
            <div>
              <motion.h2 
                className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3 md:mb-4"
                variants={fadeIn}
              >
                Our Firm
              </motion.h2>
              <motion.p 
                className="text-sm sm:text-base text-gray-600 mb-3 leading-relaxed"
                variants={fadeIn}
              >
                Kenil Shah & Co is a progressive chartered accountancy firm based in Mumbai, delivering comprehensive financial services to businesses and individuals across India. Our expertise spans multiple domains including Auditing & Assurance, Tax Planning & Advisory, International Taxation & Transfer Pricing, Direct Tax & NRI Taxation, GST Advisory, and Accounting & Bookkeeping.
              </motion.p>
              <motion.p 
                className="text-sm sm:text-base text-gray-600 leading-relaxed"
                variants={fadeIn}
              >
                Founded by CA Kenil Shah, we pride ourselves on providing tailored solutions for complex financial matters. From statutory audits to international tax planning, GST compliance to transfer pricing, we offer specialized services designed to optimize your financial position while ensuring full regulatory compliance.
              </motion.p>
            </div>
          </motion.div>
          
          <motion.div 
            className="mb-8 sm:mb-10 md:mb-12"
            variants={fadeIn}
          >
            <motion.h2 
              className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3 md:mb-4"
              variants={fadeIn}
            >
              Our Mission
            </motion.h2>
            <motion.p 
              className="text-sm sm:text-base text-gray-600 leading-relaxed"
              variants={fadeIn}
            >
              Our mission is to provide high-quality financial services that empower our clients to make informed decisions and achieve their financial goals. We believe in building long-term relationships based on trust, transparency, and mutual success.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="mb-8 sm:mb-10 md:mb-12"
            variants={fadeIn}
          >
            <motion.h2 
              className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3 md:mb-4 text-center"
              variants={fadeIn}
            >
              Meet Our Founder
            </motion.h2>
            <motion.div 
              className="flex flex-col items-center mb-4 sm:mb-5 md:mb-6"
              variants={fadeIn}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/images/about-image.png"
                  alt="CA Kenil Shah"
                  width={300}
                  height={300}
                  className="rounded-full shadow-md mb-3 sm:mb-4 md:mb-6 w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover"
                />
              </motion.div>
              <motion.h3 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-primary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                CA Kenil Shah
              </motion.h3>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 border border-gray-100"
              variants={fadeIn}
            >
              <motion.p 
                className="text-sm sm:text-base text-gray-600 mb-3 leading-relaxed"
                variants={fadeIn}
              >
                CA Kenil Shah is a qualified Chartered Accountant who passed in 2023 and has over two years of post-qualification experience in taxation and financial advisory. He is the Proprietor of Kenil Shah & Co, specializing in Direct, Indirect, and International Taxation, offering tailored solutions to corporate and individual clients. Prior to establishing his own practice, he gained valuable experience as a Tax Consultant at Devesh K. Shah & Associates LLP, where he worked extensively on complex tax matters and regulatory compliance.
              </motion.p>
              <motion.p 
                className="text-sm sm:text-base text-gray-600 leading-relaxed"
                variants={fadeIn}
              >
                His professional expertise includes Income Tax and GST compliance, Tax Assessments and Appeals, Tax Audits, Computation of Income, Tax Planning, and Income Tax Certifications. He has also handled Statutory and Internal Audits, GST Audits, and the preparation and finalization of accounts. With a strong technical foundation and a client-centric approach, he is committed to delivering effective tax strategies and ensuring seamless financial compliance.
              </motion.p>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={fadeIn}
          >
            <motion.h2 
              className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 md:mb-5"
              variants={fadeIn}
            >
              Why Choose Us
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
              variants={staggerChildren}
            >
              <motion.div 
                className="bg-white rounded-lg shadow-sm p-4 sm:p-5 md:p-6 border border-gray-100"
                variants={fadeIn}
                whileHover="hover"
                initial="rest"
                animate="rest"
                whileTap={{ scale: 0.98 }}
              >
                <motion.h3 
                  className="text-base sm:text-lg font-semibold text-blue-700 mb-2 sm:mb-3 md:mb-4"
                  variants={fadeIn}
                >
                  Specialized Expertise
                </motion.h3>
                <motion.p 
                  className="text-sm sm:text-base text-gray-600 leading-relaxed"
                  variants={fadeIn}
                >
                  We offer deep domain knowledge across multiple taxation areas, including international taxation, transfer pricing, and GST advisory.
                </motion.p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-sm p-4 sm:p-5 md:p-6 border border-gray-100"
                variants={fadeIn}
                whileHover="hover"
                initial="rest"
                animate="rest"
                whileTap={{ scale: 0.98 }}
              >
                <motion.h3 
                  className="text-base sm:text-lg font-semibold text-blue-700 mb-2 sm:mb-3 md:mb-4"
                  variants={fadeIn}
                >
                  Comprehensive Solutions
                </motion.h3>
                <motion.p 
                  className="text-sm sm:text-base text-gray-600 leading-relaxed"
                  variants={fadeIn}
                >
                  From audit and compliance to strategic tax planning and complex advisory, we provide end-to-end financial services under one roof.
                </motion.p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-sm p-4 sm:p-5 md:p-6 border border-gray-100"
                variants={fadeIn}
                whileHover="hover"
                initial="rest"
                animate="rest"
                whileTap={{ scale: 0.98 }}
              >
                <motion.h3 
                  className="text-base sm:text-lg font-semibold text-blue-700 mb-2 sm:mb-3 md:mb-4"
                  variants={fadeIn}
                >
                  Client-Centric Approach
                </motion.h3>
                <motion.p 
                  className="text-sm sm:text-base text-gray-600 leading-relaxed"
                  variants={fadeIn}
                >
                  We understand that each client has unique needs and challenges, which is why we develop customized solutions rather than generic advice.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Footer would go here */}
      <Footer/>
    </main>
  );
}