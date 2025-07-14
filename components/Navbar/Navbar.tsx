'use client';

import { AlignJustify, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const navigation = [
  { href: '#home', label: 'Home' },
  // { href: '/services', label: 'Services' },
  { href: '#works', label: 'Works' },
  { href: '#about', label: 'About' },
  // { href: '/review', label: 'Review' },
  // { href: '/blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow fixed w-full z-[999]">

      <div className="max-w-6xl mx-auto">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" scroll={false}>
            <Image
              src="/images/Frame 11.png"
              alt="Logo"
              width={166}
              height={60}
              priority
              className="h-auto w-auto"
            />
          </Link>

          {/* Toggle Button for Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <AlignJustify className="w-6 h-6" />}
          </button>

          {/* Navigation Links */}
          <nav
            className={`${menuOpen ? 'block' : 'hidden'
              } absolute lg:static top-[10%] left-0 w-full lg:w-auto bg-white lg:bg-transparent z-50 lg:flex items-center space-y-4 lg:space-y-0 lg:space-x-6 px-4 lg:px-0 mt-4 lg:mt-0 shadow-lg lg:shadow-none`}
          >
            <ul className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
              {navigation.map(({ href, label }) => (
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
              {/* CTA Button */}
              {/* <li className="mt-2 lg:mt-0">
                <Link
                  href="#contact-section"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-full transition"
                >
                  Hire me
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>

    </header>
  );
};

export default Navbar;
