'use client'

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

const Skills: React.FC = () => {
  return (
    <div className="py-16 bg-white" id="skills-area">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bold mb-4 text-8xl font-serif text-gray-800">What I Do</h2>
          <p className="text-lg text-gray-600 mt-4">
            I have gained extensive knowledge in frontend development improving UI/UX experience. Your satisfaction is my goal.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
          {skillItems.map((item, idx) => (
            <div key={idx} className="text-center transition-transform hover:scale-105">
              <img
                src={item.img}
                alt={`Skills ${item.label}`}
                className="mx-auto mb-2 w-20 h-20 object-contain"
              />
              <div className="text-blue-600 font-medium">{item.label}</div>
            </div>
          ))}
        </div>

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

export default Skills
