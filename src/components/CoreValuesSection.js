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
      icon: <FontAwesomeIcon icon={faHandshake} className="w-8 h-8" />
    },
    {
      title: "Integrity",
      icon: <FontAwesomeIcon icon={faBalanceScale} className="w-8 h-8" />
    },
    {
      title: "Accountability",
      icon: <FontAwesomeIcon icon={faClipboardCheck} className="w-8 h-8" />
    },
    {
      title: "Quality",
      icon: <FontAwesomeIcon icon={faAward} className="w-8 h-8" />
    },
    {
      title: "Respect",
      icon: <FontAwesomeIcon icon={faUsers} className="w-8 h-8" />
    },
    {
      title: "Time Value",
      icon: <FontAwesomeIcon icon={faClock} className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-12 bg-gray-100 px-20 font-['Poppins']">
      <div className="container mx-auto px-4">
        <div className="mb-12">
        <p className="text-[16px] text-center font-semibold tracking-wider text-primary-green uppercase">
            Beliefs that Shape Our Culture
          </p>
          <h2 className="text-[43px] text-center font-bold text-primary mb-2">
            Our Core Values
          </h2>
          <p className="text-lg text-center text-gray-600 mx-10">
            Our firm believe and follow the culture to maintain faith, integrity and ethics in all levels during deliver services to every client. Our profession is our faith and our people always pursue this journey.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-green-600 shadow-md flex items-center justify-center mb-4 text-white">
                {value.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900">{value.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;