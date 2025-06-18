'use client';

import Image from 'next/image';
import React from 'react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'UI/UX Design',
      img: '/images/services/1.png',
    },
    {
      title: 'Web Design',
      img: '/images/services/2.png',
    },
    {
      title: 'Branding Design',
      img: '/images/services/3.png',
    },
    {
      title: 'Graphics Design',
      img: '/images/services/4.png',
    },
  ];

  return (
    <div id="services-area" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-8xl font-serif text-gray-800">Exclusive Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            I have gained extensive knowledge in frontend development experience. Your satisfaction is my goal.
          </p>
        </div>

        <div className="space-y-6">
          {services.map((service, index) => (
            <a
              href="/services-details"
              key={index}
              className="group flex items-center border-b border-[#2c2c2c] bg-gray-50 pl-4 pr-[250px] pt-[30px] pb-[30px] rounded-lg shadow-sm transition-all duration-300 hover:pr-[50px]"
            >
              {/* className="group flex items-center border-b border-[#2c2c2c] pl-4 pr-[220px] pt-[30px] pb-[30px] transition-all duration-500 hover:pr-[50px]"
            > */}
              <div className="transition-all duration-300 group-hover:pl-[40px]">
                <Image
                  src={service.img}
                  alt="Services img"
                  width={180}
                  height={180}
                  className="rounded-xl mr-4 transform -rotate-[15deg] transition duration-300"
                />
              </div>
              <h3 className="text-5xl font-semibold text-gray-800 flex-1 transform transition-all duration-300 group-hover:translate-x-[100px]">
                {service.title}
              </h3>
              <svg
                className="w-12 h-12 text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 5c0 .742.733 1.85 1.475 2.78.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12c-.956 0-2.145.575-3.124 1.174-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0" />
              </svg>
            </a>
          ))}
        </div>


        <div className="text-center mt-10">
          <a
            href="/services-details"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-gray-800 transition"
          >
            View All
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;