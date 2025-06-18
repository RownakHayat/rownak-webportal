'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const WorksPage: React.FC = () => {
  const router = useRouter();

  const items = [
    { title: 'UI/UX', image: '/images/work/1.png' },
    { title: 'Design', image: '/images/work/2.png' },
    { title: 'Branding', image: '/images/work/3.png' },
    { title: 'Graphics', image: '/images/work/4.png' },
    { title: 'Marketing', image: '/images/work/5.png' },
    { title: 'Graphics', image: '/images/work/3.png' }
  ];

  const visibleItems = items.slice(0, 4);

  const handleViewAll = () => {
    router.push('/works/work-details');
  };

  return (
    <div className="work-area" id="work-area">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeInDown " data-wow-delay=".4s">
          <h2 className="font-bold mb-4 text-8xl font-serif text-gray-800">Latest WorksPage</h2>
          <p className="text-lg text-gray-600 mt-4">
            I have gained extensive knowledge in frontend development improving UI/UX experience. Your satisfaction is my goal.
          </p>
        </div>

        <div
          className="text-center mb-8 animate-fadeInUp "
          data-wow-delay=".4s"
        >
          <ul className="flex flex-wrap justify-center gap-3">
            {["Ui/Ux", "Web Design", "Branding", "Graphics"].map((item, index) => (
              <li key={item} className="inline-block">
                <a
                  tabIndex={index + 1}
                  href="/portfolio"
                  className="relative inline-block px-10 py-2 border border-[#2c2c2c] rounded-full text-[16px] bg-[#E9E9E9] overflow-hidden group 
             transition-colors duration-300 
             animate-fadeInDown md:animate-fadeInUp"
                >
                  {/* Overlay simulating :before */}
                  <span className="absolute inset-0 bg-white z-[-1] scale-y-100 group-hover:scale-y-0 origin-center transition-transform duration-300 ease-out" />
                  {item}
                </a>

              </li>
            ))}
          </ul>
        </div>



        {/* Work Cards */}
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fadeInUp" data-wow-delay=".4s">
            {visibleItems.map((item, idx) => (
              <div key={idx} className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform hover:scale-105 ">

                <div className="bg-white rounded-2xl shadow-md overflow-hidden group relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="w-full h-64 relative  object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className=" z-10 absolute transition-transform duration-300 opacity-100 text-2xl font-semibold text-white pt-10 group-hover:opacity-100 group-hover:text-black group-hover:translate-y-[-3.55rem] group-hover:rounded-lg group-hover:bg-white w-80 h-12 ml-4 group-hover:pl-3 group-hover:pr-4 group-hover:py-2">
                    <div className="flex justify-between ">
                      <span> {item.title}</span>
                      <span>
                        <svg
                          className="w-8 h-8 text-white  group-hover:text-blue-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 5c0 .742.733 1.85 1.475 2.78.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12c-.956 0-2.145.575-3.124 1.174-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h4 className="text-white text-lg font-semibold">
                                          <Link href="/portfolio-details">{item.title}</Link>
                                        </h4>
                                      </div> */}
                </div>

              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={handleViewAll}
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              View All
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default WorksPage
