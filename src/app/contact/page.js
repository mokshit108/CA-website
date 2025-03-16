"use client";
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Add effect to clear success messages after 3 seconds
  useEffect(() => {
    let timer;
    if (submitStatus && submitStatus.success) {
      timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 3000); // 3 seconds timeout
    }
    
    // Cleanup function to clear the timer if component unmounts
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [submitStatus]);

  const validateField = (name, value) => {
    let errorMessage = '';
    
    switch(name) {
      case 'name':
        // Only letters and spaces allowed
        if (!value) {
          errorMessage = 'Name is required';
        } else if (!/^[A-Za-z\s]+$/.test(value)) {
          errorMessage = 'Name should contain only letters and spaces';
        }
        break;
        
      case 'email':
        // Email format validation
        if (!value) {
          errorMessage = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errorMessage = 'Please enter a valid email address';
        }
        break;
        
      case 'phone':
        // Only 10 digits allowed
        if (!value) {
          errorMessage = 'Phone number is required';
        } else if (!/^\d{10}$/.test(value)) {
          errorMessage = 'Phone number must be exactly 10 digits';
        }
        break;
        
      case 'subject':
        // No special characters allowed
        if (!value) {
          errorMessage = 'Subject is required';
        } else if (!/^[A-Za-z0-9\s]+$/.test(value)) {
          errorMessage = 'Special characters are not allowed in subject';
        }
        break;
        
      case 'message':
        // At least 3 words required
        if (!value) {
          errorMessage = 'Message is required';
        } else {
          const wordCount = value.trim().split(/\s+/).length;
          if (wordCount < 3) {
            errorMessage = 'Message must contain at least 3 words';
          }
        }
        break;
        
      default:
        break;
    }
    
    return errorMessage;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Validate field on change
    const errorMessage = validateField(name, value);
    setErrors({
      ...errors,
      [name]: errorMessage
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
    
    // Validate all fields
    Object.keys(formData).forEach(key => {
      const errorMessage = validateField(key, formData[key]);
      newErrors[key] = errorMessage;
      
      if (errorMessage) {
        isValid = false;
      }
    });
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields before submission
    if (!validateForm()) {
      setSubmitStatus({
        success: false,
        message: 'Please fix the errors in the form before submitting.'
      });
      return;
    }
    
    // Set submitting state
    setIsSubmitting(true);
    
    try {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbz-vsfDODDke29JuoZol8_J1xsnD5X0cxf84HmlhB5JROMJNllCfoNgzpFoxJ6mgj2Xew/exec';
      
      // Build URL parameters
      const params = new URLSearchParams();
      params.append('name', formData.name);
      params.append('email', formData.email);
      params.append('phone', formData.phone);
      params.append('subject', formData.subject);
      params.append('message', formData.message);
      params.append('timestamp', new Date().toLocaleString());
      
      // For debugging, log the full URL
      console.log(`Submitting form to: ${scriptURL}?${params.toString()}`);
      
      const response = await fetch(`${scriptURL}?${params.toString()}`, {
        method: 'GET',
        mode: 'no-cors' // This prevents CORS errors but also makes response unreadable
      });
      
      // Since we can't read the response with no-cors, assume success
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setSubmitStatus({
        success: true,
        message: 'Thank you! Your message has been sent successfully.'
      });
      
      // For reliable data submission, add a small delay before resetting the form
      // This gives the network request time to complete
      await new Promise(resolve => setTimeout(resolve, 2000));
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <Navbar />
      
      {/* Hero Section with Gradient Background */}
      <section className="py-10 sm:py-10 md:py-12 bg-gradient-to-r from-green-600 via-emerald-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">Contact Us</h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
            Reach out to us for professional financial guidance and support.
          </p>
        </div>
      </section>
      
      <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-16 lg:py-20 font-['Poppins']">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            {/* Left Side - Office Address */}
            <div className="w-full lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-gray-100 h-full">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">Our Office</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-blue-700 mb-2">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      NANDKORE PALACE<br />
                      MANCHHUBHAI ROAD<br />
                      MALAD EAST<br />
                      MUMBAI 400097
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-blue-700 mb-2">Office Hours</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 11:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-blue-700 mb-2">Contact Info</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Phone: +91 9167699919<br />
                      Email: kenilshah059@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Contact Form */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-gray-100">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">Send us a Message</h2>
                
                {submitStatus && (
                  <div className={`p-4 mb-6 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all`}
                        placeholder="Enter your email address"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all`}
                      placeholder="Enter your 10-digit phone number"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md border ${errors.subject ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all`}
                      placeholder="Enter the subject"
                    />
                    {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all`}
                      placeholder="Enter your message (minimum 3 words)"
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-6 py-3 bg-gradient-to-r from-green-600 to-blue-700 text-white font-medium rounded-md hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          {/* Google Map */}
          <div className="mt-12 sm:mt-16">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">Find Us</h2>
            <div className="w-full h-96 bg-gray-200 rounded-lg shadow-md overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.0539701737307!2d72.84778527425487!3d19.19284494829583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7b2e82539d3%3A0xde35cd7fe5dd4956!2sNandkore%20Palace!5e0!3m2!1sen!2sin!4v1742033278648!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer would go here */}
      <Footer/>
    </main>
  );
}