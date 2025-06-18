'use client'

import Image from 'next/image'
import React from 'react'

const ReviewPage = () => {
  return (
    <div className="bg-white py-16" id="client-review">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bold mb-4 text-8xl font-serif text-gray-800">Client Review</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            I have gained extensive knowledge in frontend development improving UI/UX experience. Your satisfaction is my goal.
          </p>
        </div>

        <div className="">
          {/* Review Item */}
          <div className="row">
            <div className="grid grid-cols-12">
              <div className="col-span-12">

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
                    className="client-review-box group rounded-lg shadow-md p-6 flex justify-center items-center text-center gap-6 relative overflow-hidden transition-all duration-500 animate-fadeInUp"
                    data-wow-delay=".5s"
                  >
                    {/* Image Block */}
                    <div className="img-content relative flex justify-center gap-4 group-hover:gap-0 transition-all duration-500">
                      <Image
                        className="rounded-2xl object-cover transform transition-transform duration-500 group-hover:-translate-x-[420px]"
                        src={client.img}
                        alt={`${client.name} review`}
                        width={400}
                        height={160}
                      />

                      {/* Quote Content (Initially Hidden, Shows on Hover) */}
                      <div className="quote-content opacity-0 absolute rounded-r-3xl left-[200px] max-w-[600px] h-full bg-black transition-all duration-500 group-hover:opacity-100 group-hover:right-0 group-hover:left-auto group-hover:max-w-[906px]">
                        <div className="inner-quote absolute top-1/2 -translate-y-1/2 px-8 py-10">
                          <div className="flex justify-center mb-4 gap-1">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-5 h-5 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 256 256"
                              >
                                <path d="m234.5 114.38l-45.1 39.36l13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31l-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54l-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z" />
                              </svg>
                            ))}
                          </div>
                          <p className="text-black mb-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                          </p>
                          <p className="text-white italic">
                            “Great service and excellent quality! Highly recommended.”
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Client Info Block */}
                    <div className="client-content flex flex-col items-center justify-center transition-all duration-500 group-hover:opacity-0 group-hover:-translate-x-[200px]">
                      <h3 className="client-title text-2xl font-semibold">{client.name}</h3>
                      <p className="designation text-lg text-gray-600">{client.designation}</p>
                      <p className="jobtitle text-lg text-gray-500">{client.company}</p>
                    </div>
                  </div>

                ))}
              </div>

            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-gray-200" />
      </div>
    </div>
  )
}

export default ReviewPage
