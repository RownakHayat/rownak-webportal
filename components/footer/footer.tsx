'use client';

import Link from 'next/link';
import React from 'react';

const backnavigation = [
  { href: '/home', label: 'Home' },
  // { href: '/services', label: 'Services' },
  { href: '/works', label: 'Works' },
  { href: '/about', label: 'About' },
  // { href: '/review', label: 'Review' },
  // { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]; 

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-b border-gray-500">
      <div className="px-8 md:px-16 py-6">
      <div className="max-w-6xl container mx-auto px-4">
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
        <div className="flex justify-center items-center ">
          <h1 className="opacity-15 sm:text-[90px] lg:text-[100px] font-serif leading-tight text-nowrap">
            ROWNAK HAYAT
          </h1>
        </div>
           {/* Footer Navigation Menu */}
      <div className=" text-center py-3 px-4">
        <div className="flex justify-center items-center text-center space-y-6">
          {/* Menu Links */}
          <ul className="flex space-x-6 text-gray-600 sm:text-[10px] lg:text-sm font-medium">
          {backnavigation.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>
                  <span className="relative group">
                    <span className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-current after:transition-all group-hover:after:w-full sm:text-sm lg:text-xl font-medium text-slate-700">
                      {label}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
         {/* Back to Top */}
          <div className="pt-4">
            <a href="#" className="text-blue-600 hover:underline text-sm">
              Back to Top
            </a>
          </div>
      </div>

      {/* Bottom Divider */}
      </div>
      </div>
      
    </footer>
  );
};

export default Footer;
