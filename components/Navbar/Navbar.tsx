'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className="">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center relative">
          {/* Logo */}
            <Link href="/" scroll={false}>
              <Image
                src={"/images/Logo1.png"}
                alt="Logo"
                width={166}
                height={60}
                className=""
                priority
              />
            </Link>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="flex flex-wrap justify-center items-center gap-6">
              {[
                { href: '#services-area', label: 'Services' },
                { href: '#work-area', label: 'Works' },
                { href: '#skills-area', label: 'Skills' },
                { href: '#client-review', label: 'Review' },
                { href: '#contact-section', label: 'Contact' },
              ].map(({ href, label }) => (
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
          </nav>

          {/* Button */}
          <div className="mt-4 lg:mt-0 lg:ms-3">
            <Link
              href="#contact-section"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-full transition"
            >
              Hire me
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
