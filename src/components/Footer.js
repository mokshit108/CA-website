'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
    // Use state to handle animation without framer-motion
    const [isVisible, setIsVisible] = useState(false);
    
    // Set content to visible after component mounts
    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <footer className="bg-gradient-to-b from-sky-950 via-sky-900 to-emerald-700 text-white pt-8 pb-4 sm:pt-10 sm:pb-4 font-['Poppins']">
            <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {/* About Column */}
                    <div 
                        className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-4 text-white">ABOUT</h3>
                        <p className="text-sm md:text-base text-white mb-2 md:mb-4 leading-relaxed">
                            Kenil Shah & Co is a progressive chartered accountancy firm based in Mumbai, delivering comprehensive financial services to businesses and individuals across India.
                        </p>
                    </div>

                    {/* Contact Info Column */}
                    <div 
                        className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{ transitionDelay: '400ms' }}
                    >
                        <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-4 text-white">CONTACT INFO</h3>
                        <p className="text-sm md:text-base text-white mb-3 leading-relaxed">
                            Nandkore Palace<br />
                            Manchhubhai Road,
                            Malad East
                            Mumbai - 400092
                        </p>
                        <p className="text-sm md:text-base text-white mb-1">
                            <span className="inline-block w-5 sm:w-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </span>
                            +91 9167699919
                        </p>
                        <p className="text-sm md:text-base text-white">
                            <span className="inline-block w-5 sm:w-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>
                            kenilshah059@gmail.com
                        </p>
                    </div>

                    {/* Explore and Services in one row on mobile */}
                    <div 
                        className={`col-span-1 md:col-span-2 lg:col-span-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{ transitionDelay: '600ms' }}
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {/* Explore Column */}
                            <div>
                                <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-4 text-white">EXPLORE</h3>
                                <ul className="space-y-1 sm:space-y-2">
                                    {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
                                        <li 
                                            key={index}
                                            className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                                            style={{ transitionDelay: `${700 + (index * 100)}ms` }}
                                        >
                                            <Link 
                                                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                                className="text-sm md:text-base text-white hover:text-blue-200 transition-colors"
                                            >
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Services Column */}
                            <div>
                                <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-4 text-white">SERVICES</h3>
                                <ul className="space-y-1 sm:space-y-2">
                                    {[
                                        { href: "/services/auditing-assurance", text: "Auditing & Assurance" },
                                        { href: "/services/tax-planning-advisory", text: "Tax Planning & Advisory" },
                                        { href: "/services/international-taxation", text: "International Taxation & Transfer Pricing" },
                                        { href: "/services/direct-tax-nri", text: "Direct Tax & NRI Taxation" },
                                        { href: "/services/gst-advisory", text: "GST Advisory" },
                                        { href: "/services/accounting-bookkeeping", text: "Accounting & Bookkeeping" }
                                    ].map((item, index) => (
                                        <li 
                                            key={index}
                                            className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                                            style={{ transitionDelay: `${1100 + (index * 100)}ms` }}
                                        >
                                            <Link href={item.href} className="text-sm md:text-base text-white hover:text-blue-200 transition-colors">
                                                {item.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div 
                    className={`border-t border-blue-500 mt-6 md:mt-10 pt-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transitionDelay: '1700ms' }}
                >
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <p className="text-sm sm:text-base text-white mb-2 sm:mb-0">
                            &copy; 2025 Kenil Shah & Co. All Rights Reserved.
                        </p>
                        <p className="text-sm sm:text-base text-white">
                            Developed by Mokshit Shah
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}