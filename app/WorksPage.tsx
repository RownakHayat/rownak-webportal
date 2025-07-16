'use client'

import Image from 'next/image'
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import React from 'react'

const WorksPage: React.FC = () => {
  // const router = useRouter();

  const items = [
    {
      title: 'MIAPSS', image: '/images/work/MIAPSS.png',
      link: 'http://103.84.36.246:5886/login',
      label:'Management Information And Planing Support System.',
    },
    {
      title: 'SMEF', image: '/images/work/SMEF.png',
      link: 'https://services.smef.gov.bd/',
      label:'Small & Medium Enterprise Foundation.'
    },
    {
      title: 'MOL Library', image: '/images/work/MOL-Library.png',
      link: 'http://103.84.36.246:8880/mol-library/public/',
      label: 'Ministry Of Law Library.',
    },
    {
      title: 'DPS.MoCAT', image: '/images/work/DPS.MoCAT.png',
      link: 'http://103.84.36.246:6002/',
      label: 'Development Partners, Ministry of Civil Aviation And Tourism.'
    },
    {
      title: 'HRM', image: '/images/work/SIMEC-HELP-Desk.png',
      link: 'https://hrm-simec-help-desk.netlify.app/',
      label: 'Human Rescue Management(SIMEC Help Desk).'
    },
    {
      title: 'e-Buisness', image: '/images/work/e-buisness.png',
      link: 'https://e-buisness.netlify.app/',
      label: 'Grocery shop.'
    },

  ];

  // const visibleItems = items.slice(0, 20);
  // const handleViewAll = () => {
  //   router.push('/works');
  // };

  return (
    <section id='works' className='px-8 md:px-16 py-28'>
      <div className="">
        <div className="max-w-6xl container mx-auto ">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="text-center mb-12 animate-fadeInDown " data-wow-delay=".4s">
                <h2 className="font-bold mb-4 text-3xl lg:text-5xl font-serif text-gray-800 text-nowrap">Latest Works</h2>
                <p className="text-lg text-gray-600 mt-4 text-justify">
                  I have gained extensive experience as a frontend developer, focusing on creating responsive, user-friendly interfaces using modern technologies. The projects showcased below highlight some of my most recent works, where I applied tools like React.js., Next.js. and Tailwind CSS to deliver seamless UI/UX solutions tailored to user needs.
                </p>
              </div>
              {/* <div
              className="text-center mb-8 animate-fadeInUp "
              data-wow-delay=".4s"
            >
              <div className="flex flex-wrap justify-center gap-3">
                {["Management System", "Service Protal", "HRM", "E-Buisness"].map((item,) => (
                  <div key={item} className="inline-block">
                    <div
                      className="relative inline-block px-10 py-2 border border-[#2c2c2c] rounded-full text-[16px] bg-[#E9E9E9] overflow-hidden group 
                    transition-colors duration-300 
                    animate-fadeInDown md:animate-fadeInUp"
                    >
                      <span className="absolute inset-0 bg-white z-[-1] scale-y-100 group-hover:scale-y-0 origin-center transition-transform duration-300 ease-out" />
                      {item}
                    </div>

                  </div>
                ))}
              </div>
            </div> */}
            </div>

            {/* Work Cards */}
            {/* Work Cards */}
            <div className="col-span-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-full h-auto bg-white shadow-md rounded-2xl overflow-hidden transition-transform hover:scale-105"
                  >
                    <Link href={item.link} target="_blank" rel="noopener noreferrer">
                      <div className="relative group">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={500}
                          height={300}
                          className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                          <h4 className="text-white text-center text-wrap text-lg font-semibold">{item.title}</h4>
                        </div>
                      </div>
                      <div className="px-2">
                        <p>{item.label}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>


              {/* <div className="text-center mt-12">
    <button
      onClick={handleViewAll}
      className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
    >
      View All
    </button>
  </div> */}
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default WorksPage
