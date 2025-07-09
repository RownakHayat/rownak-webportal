'use client';

import { House } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const WorksPageDetails = () => {
  const items = [
    {
      id: '1',
      label: 'All',
      filtersAll: [
        {
          id: '1',
          title: 'MIAPSS',
          images: ['/images/work/MIAPSS.png'],
          link: 'http://103.84.36.246:5886/login',
          filters: ['filter-miapss'],
        },
        {
          id: '2',
          title: 'SMEF Foundetion ',
          image: '/images/work/SMEF.png',
          link: 'https://services.smef.gov.bd/',
          filters: ['filter-smef'],
        },
        {
          id: '3',
          title: 'HRM-SIMEC Help Desk',
          image: '/images/work/SIMEC-HELP-Desk.png',
          link: 'https://hrm-simec-help-desk.netlify.app/',
          filters: ['filter-hrm'],
        },
        {
          id: '4',
          title: 'e-buisness',
          image: '/images/work/e-buisness.png',
          link: 'https://e-buisness.netlify.app/',
          filters: ['filter-eBuisness'],
        },
      ],
    },
     {
      id: '2',
      label: 'MIAPSS',
      filtersAll: [
        {
          id: '1',
          title: 'Management Information And Planning Support System',
          image: '/images/work/MIAPSS.png',
          link: 'http://103.84.36.246:5886/login',
          filters: ['filter-miapss']
        }
      ],
    },
    {
      id: '3',
      label: 'SMEF Foundetion ',
      filtersAll: [
        {
          id: '1',
          title: 'All',
          images: ['/images/work/SMEF.png'],
          link: 'https://services.smef.gov.bd/',
          filters: ['filter-smef'],
        },
      ],
    },
    {
      id: '4',
      label: 'HRM ',
      filtersAll: [
        {
          id: '1',
          title: 'HRM-SIMEC Help Desk',
          image: '/images/work/SIMEC-HELP-Desk.png',
          link: 'https://hrm-simec-help-desk.netlify.app/',
          filters: ['filter-hrm'],
        },
      ],
    },
    {
      id: '5',
      label: 'e-Buisness ',
      filtersAll: [
        {
          id: '1',
          title: 'e-buisness',
          image: '/images/work/e-buisness.png',
          link: 'https://e-buisness.netlify.app/',
          filters: ['filter-eBuisness'],
        },
      ],
    },
    
   
   
  ];

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="px-8 md:px-16 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
      <div className="py-10 bg-gray-100 animate-fadeInDown" data-wow-delay=".4s">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-serif font-bold text-gray-400">Rownak Hayat</h2>
          <Link href="/" className="flex justify-center items-center gap-2 mt-4 text-sm text-black hover:underline">
            <House className="w-5 h-5" />
             Home
          </Link>
        </div>
      </div>

      {/* Work Grid */}
      <div className="py-16 container mx-auto animate-fadeInUp" data-wow-delay=".4s">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="grid grid-cols-12 gap-5">
          <div className="col-span-2">
            <TabList className=" space-y-2 mb-8">
              {items.map((cat) => (
                <Tab
                  key={cat.label}
                  className="px-4 py-2 rounded-md cursor-pointer text-sm font-semibold hover:bg-black hover:text-white transition"
                  selectedClassName="bg-black text-white"
                >
                  {cat.label}
                </Tab>
              ))}
            </TabList>
          </div>

          <div className="col-span-10">
            {items.map((itemGroup) => (
              <TabPanel key={itemGroup.id}>
                <div className="grid grid-cols-12 gap-8">
                  {itemGroup.filtersAll.map((item) => {
                    const images = item.images || (item.image ? [item.image] : []);

                    return images.map((img, i) => (
                      <div key={`${item.id}-${i}`} className="portfolio-item col-span-4">
                        <div className="bg-white rounded-2xl shadow-md overflow-hidden group relative">
                          <Image
                            src={img}
                            alt={item.title}
                            width={500}
                            height={300}
                            className="w-full h-64 relative  object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className=" absolute transition-transform duration-300 opacity-100 text-2xl font-semibold text-white pt-10 group-hover:opacity-100 group-hover:text-black group-hover:translate-y-[-3.55rem] group-hover:rounded-lg group-hover:bg-white w-96 h-12 ml-3 group-hover:pl-3 group-hover:pr-4 group-hover:py-2">
                            <div className="flex justify-between ">
                             <span>
                              <a href={item.link} target="_blank" rel="noopener noreferrer">
                                {item.title}
                              </a>
                            </span>
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
                    ));
                  })}
                </div>
              </TabPanel>
            ))}
          </div>
        </Tabs>
      </div>

      </div>



      


    </div>
  );
};

export default WorksPageDetails;