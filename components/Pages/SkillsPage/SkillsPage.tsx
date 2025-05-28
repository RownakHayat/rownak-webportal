'use client'

import Image from 'next/image'
import React from 'react'

const skillItems = [
  { label: 'Illustrator', img: '/images/skill/1.png' },
  { label: 'Premiere Pro', img: '/images/skill/2.png' },
  { label: 'Photoshop', img: '/images/skill/3.png' },
  { label: 'Adobe XD', img: '/images/skill/4.png' },
  { label: 'Figma', img: '/images/skill/5.png' },
  { label: 'Miro', img: '/images/skill/6.png' },
  { label: 'Webflow', img: '/images/skill/7.png' },
  { label: 'Filmora', img: '/images/skill/8.png' },
  { label: 'After Effect', img: '/images/skill/9.png' },
  { label: 'Sketch', img: '/images/skill/10.png' },
]

const SkillsPage: React.FC = () => {
  return (
    <div className="py-16 bg-white" id="skills-area">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fadeInDown " data-wow-delay=".4s">
          <h2 className="font-bold mb-4 text-4xl sm:text-6xl md:text-8xl font-serif text-gray-800">
            What I Do
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            I have gained extensive knowledge in frontend development improving UI/UX experience. Your satisfaction is my goal.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-6">
          {skillItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative  text-center bg-white rounded-[24px] px-6 pt-4 mb-2 transition-all duration-500 hover:shadow-[10px_10px_15px_rgba(0,0,0,0.15)] animate-fadeInUp" data-wow-delay=".4s"
            >
              <Image
                src={item.img}
                alt={`Skills ${item.label}`}
                width={120}
                height={120}
                className="mx-auto pb-12 object-contain rounded-[24px] transition-all duration-300 group-hover:-mt-5"
              />
              {/* skill-content with fade-up effect */}
              <div className="transition-all duration-800 opacity-100 text-2xl font-semibold text-white pt-10 group-hover:opacity-100 group-hover:text-black group-hover:translate-y-[-3.25rem]">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-6">
          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Hire me
          </a>
        </div>

        <div className="mt-10 border-t border-gray-200"></div>
      </div>


    </div>
  )
}

export default SkillsPage
