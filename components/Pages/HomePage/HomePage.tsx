'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import ExperiencesPage from '@/app/experience/page';
import ExperiencePage from './ExperiencePage';

const HomePage = () => {
  return (
   <>
    <section className="pt-20 bg-[#e6f3fc] bg-gradient-to-tr from-blue-100 to-white">
      <div className="grid grid-cols-12 container mx-auto px-4">
        <div className="col-span-6">
          <div className="items-center">
            <h1 className="text-2xl md:text-4xl font-semibold mb-6">
              <span className="block text-gray-600 mb-2">Hey, I'm</span>
              <strong className="font-bold mb-4 text-8xl font-serif text-gray-800">Rownak Hayat</strong>
            </h1>
          </div>
          <div className="">
            <h4 className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, velit quis. Harum libero nam odio blanditiis cumque, nulla fugit. Consectetur, sint rem voluptas quia quae sit adipisci quod et distinctio.</h4>
          </div>
        </div>

        <div className="col-span-6">
         <div className="flex justify-end">
         <div className=" relative">
              <Image
                src={"/images/blog/bannerImage.jpg"}
                alt="Resume image"
                width={600}
                height={600}
                className="img-fluid relative radius-24 rounded-3xl shadow-xl shadow-slate-400ring-4 ring-white ring-opacity-10"
                priority
              />
            <div className=" "> 
              <div className="absolute top-1/3 left-[-16%]">
                <Image
                  src="/images/curved.png"
                  alt="Curved img"
                  width={150}
                  height={150}
                  className=" "
                />
                <div className="absolute top-1/3 left-[35%]">
                <svg
                  className="w-12 h-12 text-gray-800 font-thin animate-spin ease-in duration-[20s] infinite"
                  style={{ animation: 'spin 8s linear infinite' }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 16c.742 0 1.85.733 2.78 1.475 1.2.954 2.247 2.094 3.046 3.401C11.425 21.856 12 23.044 12 24m0 0c0-.956.575-2.145 1.174-3.124.8-1.307 1.847-2.447 3.045-3.401C17.15 16.733 18.26 16 19 16m-7 8V0" />
                </svg>

                </div>
              </div>
              {/* <div className="cv-content"> */}
              <div className="absolute left-[-6rem] top-3/4 transform -translate-y-1/2">
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
        </div>
      </div>
    </section>
     <ExperiencePage />
   </>
  );
};

export default HomePage;
