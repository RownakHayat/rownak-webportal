'use client'

import React from 'react'

const Review = () => {
  return (
    <div className="bg-white py-16" id="client-review">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Client Review</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            I have gained extensive knowledge in frontend development improving UI/UX experience. Your satisfaction is my goal.
          </p>
        </div>

        <div className="space-y-10">
          {/* Review Item */}
          {[{
            img: '/images/client/1.png',
            name: 'Jon Snow',
            designation: 'Head of Marketing',
            company: 'Google LLC. | Ex.Meta'
          }, {
            img: '/images/client/2.png',
            name: 'Shin Xan',
            designation: 'Head of Product VP',
            company: 'Figma | Ex.Adobe'
          }].map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center gap-6"
            >
              <img
                className="w-24 h-24 rounded-full object-cover"
                src={client.img}
                alt={`${client.name} review`}
              />
              <div className="flex-1 text-left">
                <div className="flex gap-1 mb-3">
                  {Array(5).fill(0).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="m234.5 114.38l-45.1 39.36l13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31l-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54l-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <div>
                  <h3 className="font-semibold text-lg">{client.name}</h3>
                  <p className="text-sm text-gray-500">{client.designation}</p>
                  <p className="text-sm text-gray-400">{client.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-gray-200" />
      </div>
    </div>
  )
}

export default Review
