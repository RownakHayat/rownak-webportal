'use client';

import Image from 'next/image';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white  text-white py-10">
      <div className="border-t border-gray-700 mb-6"></div>

      <div className="flex justify-center mb-6">
        <Image
          src="/Untit2.png"
          alt="Name img"
          width={500}
          height={50}
          className="object-contain opacity-35"
        />
      </div>

      <div className="border-t border-gray-700 mb-6"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <ul className="flex justify-center space-x-6 mb-4">
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Review
              </a>
            </li>
          </ul>
          <div>
            <a href="#" className="text-sm underline hover:text-blue-400 transition">
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
