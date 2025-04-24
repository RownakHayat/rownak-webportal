'use client'

import React from 'react'

const Works: React.FC = () => {
  return (
    <div className="work-area" id="work-area">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600">Latest Works</h2>
          <p className="text-lg text-gray-600 mt-4">
            I have gained extensive knowledge in frontend development improving UI/UX experience. Your satisfaction is my goal.
          </p>
        </div>

        <div className="text-center mb-8">
          <ul className="flex flex-wrap justify-center gap-4 text-blue-600 font-medium">
            <li><a tabIndex={1} href="/portfolio" className="hover:underline">Ui/Ux</a></li>
            <li><a tabIndex={2} href="/portfolio" className="hover:underline">Web Design</a></li>
            <li><a tabIndex={3} href="/portfolio" className="hover:underline">Branding</a></li>
            <li><a tabIndex={4} href="/portfolio" className="hover:underline">Graphics</a></li>
          </ul>
        </div>

        {/* Work Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'UI/UX', image: '/images/work/1.png' },
            { title: 'Design', image: '/images/work/2.png' },
            { title: 'Branding', image: '/images/work/3.png' },
            { title: 'Graphics', image: '/images/work/4.png' },
            { title: 'Marketing', image: '/images/work/5.png' },
            { title: 'Graphics', image: '/images/work/3.png' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform hover:scale-105">
              <div className="relative">
                <img src={item.image} alt={item.title} className="w-full h-60 object-cover" />
                <div className="absolute bottom-0 left-0 bg-white/80 w-full p-4">
                  <h4 className="text-xl font-semibold text-blue-600 flex items-center justify-between">
                    <a href="/portfolio">{item.title}</a>
                    <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24">
                      <path fill="none" stroke="currentColor" d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0" />
                    </svg>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/portfolio" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            View All
          </a>
        </div>
      </div>
    </div>
  )
}

export default Works
