'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <section className="py-12 bg-gray-50">
        <div className="grid grid-cols-2 container mx-auto px-4">
            <div className="col-span-1">
                <div className="items-center">
                <h1 className="text-2xl md:text-4xl font-semibold mb-6">
                    <span className="block text-gray-600 mb-2">Hey, This is</span>
                    <strong className="text-black">Rownak Hayat</strong>
                </h1>
            </div>
            </div>
            <div className="col-span-1">
            <div className="relative inline-block">
            {/* Hero Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/hero.png"
                alt="Resume image"
                width={400}
                height={400}
                className="object-cover"
                priority
              />
            </div>

            {/* Curved Circle & Download */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex flex-col items-center">
              <Image
                src="/images/curved.png"
                alt="Curved img"
                width={150}
                height={150}
                className="mb-4"
              />
              <svg
                className="w-6 h-6 text-blue-600 mb-2 animate-bounce"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M5 16c.742 0 1.85.733 2.78 1.475 1.2.954 2.247 2.094 3.046 3.401C11.425 21.856 12 23.044 12 24m0 0c0-.956.575-2.145 1.174-3.124.8-1.307 1.847-2.447 3.045-3.401C17.15 16.733 18.26 16 19 16m-7 8V0" />
              </svg>

              <Link
                href="/pdf/resume.pdf"
                download
                target="_blank"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-full transition"
              >
                Download CV
              </Link>
            </div>
          </div>
            </div>
        </div>
      <div className="">
        <div className="text-center">
          

          
        </div>
      </div>
    </section>
  );
};

export default HomePage;
