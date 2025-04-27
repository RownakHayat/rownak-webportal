'use client';

import Image from 'next/image';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-10">
      {/* Top Border Line */}
      {/* <div className="border-t border-gray-300"></div> */}

      {/* Logo */}
      {/* <div className="flex justify-center mb-6">
        <Image
          src="/Untit2.png"
          alt="Name img"
          width={500}
          height={50}
          className="object-contain opacity-35"
        />
      </div> */}
        <div className="flex justify-center items-center border-t border-b border-gray-500">
          <h1 className="opacity-15 text-[220px] font-serif leading-tight">
            ROWNAK HAYAT
          </h1>
        </div>
           {/* Footer Navigation Menu */}
      <div className="container mx-auto py-3 px-4">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Menu Links */}
          <ul className="flex space-x-6 text-gray-600 text-sm font-medium">
            <li>
              <a href="/home" className="hover:text-blue-500 transition">Home</a>
            </li>
            <li>
              <a href="/services" className="hover:text-blue-500 transition">Services</a>
            </li>
            <li>
              <a href="/works" className="hover:text-blue-500 transition">Works</a>
            </li>
            <li>
              <a href="/skills" className="hover:text-blue-500 transition">Skills</a>
            </li>
            <li>
              <a href="/review" className="hover:text-blue-500 transition">Review</a>
            </li>
            <li>
              <a href="/blog" className="hover:text-blue-500 transition">Blog</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-500 transition">Contact</a>
            </li>
          </ul>

          {/* Back to Top */}
          <div className="pt-4">
            <a href="#" className="text-blue-600 hover:underline text-sm">
              Back to Top
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-300 mt-8"></div>
    </footer>
  );
};

export default Footer;
