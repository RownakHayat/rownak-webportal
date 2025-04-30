'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const backnavigation = [
  { href: '/home', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/works', label: 'Works' },
  { href: '/skills', label: 'Skills' },
  { href: '/review', label: 'Review' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]; 

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
          {backnavigation.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>
                  <span className="relative group">
                    <span className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-current after:transition-all group-hover:after:w-full text-xl font-medium text-slate-700">
                      {label}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
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
