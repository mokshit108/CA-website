import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHandshake, 
  faBalanceScale, 
  faClipboardCheck, 
  faAward, 
  faUsers, 
  faClock
} from '@fortawesome/free-solid-svg-icons';

const CoreValuesSection = () => {
  const values = [
    {
      title: "Commitment",
      icon: <FontAwesomeIcon icon={faHandshake} className="w-6 h-6 md:w-8 md:h-8" />
    },
    {
      title: "Integrity",
      icon: <FontAwesomeIcon icon={faBalanceScale} className="w-6 h-6 md:w-8 md:h-8" />
    },
    {
      title: "Accountability",
      icon: <FontAwesomeIcon icon={faClipboardCheck} className="w-6 h-6 md:w-8 md:h-8" />
    },
    {
      title: "Quality",
      icon: <FontAwesomeIcon icon={faAward} className="w-6 h-6 md:w-8 md:h-8" />
    },
    {
      title: "Respect",
      icon: <FontAwesomeIcon icon={faUsers} className="w-6 h-6 md:w-8 md:h-8" />
    },
    {
      title: "Time Value",
      icon: <FontAwesomeIcon icon={faClock} className="w-6 h-6 md:w-8 md:h-8" />
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-gray-100 px-4 md:px-20 font-['Poppins']">
      <div className="container mx-auto">
        <div className="mb-8 md:mb-12">
          <p className="text-[12px] md:text-[16px] text-center font-semibold tracking-wider text-primary-green uppercase">
            Beliefs that Shape Our Culture
          </p>
          <h2 className="text-[32px] md:text-[38px] lg:text-[43px] text-center font-bold text-primary mb-2  md:mb-4">
            Our Core Values
          </h2>
          <p className="text-sm md:text-lg text-center text-gray-600 mx-2 md:mx-10">
            Our firm believe and follow the culture to maintain faith, integrity and ethics in all levels during deliver services to every client. Our profession is our faith and our people always pursue this journey.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center mb-4 md:mb-0">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-600 shadow-md flex items-center justify-center mb-3 md:mb-4 text-white">
                {value.icon}
              </div>
              <h3 className="text-sm md:text-lg font-medium text-gray-900 text-center">{value.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;