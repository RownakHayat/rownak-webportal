'use client';

import React from 'react';
import Image from 'next/image';

const BlogPage: React.FC = () => {
  return (
    <section id="blog-section" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Stories & Interviews</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I have gained extensive knowledge in frontend development improving UI/UX experience. Your satisfaction is my goal.
          </p>
        </div>

        {/* Main Blog Post */}
        <div className="flex flex-wrap mb-12">
          <div className="w-full md:w-2/3 p-2">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/blog/1.png"
                alt="Blog Main"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 p-2 flex items-end">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Creativity<br />by God</h3>
              <p className="text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
              </p>
              <a href="#" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition">
                Read more
              </a>
            </div>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="flex flex-wrap gap-6">
          {/* Card 1 */}
          <div className="w-full md:w-1/3">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div className="relative">
                <a href="#">
                  <Image
                    src="/images/blog/2.png"
                    alt="Blog Image 2"
                    width={400}
                    height={250}
                    className="w-full h-auto object-cover"
                  />
                </a>
                <div className="absolute top-2 right-2 bg-white text-gray-800 text-xs px-2 py-1 rounded">
                  03 Jan, 2024
                </div>
              </div>
              <div className="p-4">
                <span className="inline-block bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded mb-2">Technology</span>
                <h4 className="text-lg font-semibold">
                  <a href="#">Is AI better than Human? Or is this just a thought?</a>
                </h4>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-1/3">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div className="relative">
                <a href="#">
                  <Image
                    src="/images/blog/3.png"
                    alt="Blog Image 3"
                    width={400}
                    height={250}
                    className="w-full h-auto object-cover"
                  />
                </a>
                <div className="absolute top-2 right-2 bg-white text-gray-800 text-xs px-2 py-1 rounded">
                  19 Feb, 2024
                </div>
              </div>
              <div className="p-4">
                <span className="inline-block bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded mb-2">Music</span>
                <h4 className="text-lg font-semibold">
                  <a href="#">Musical production is getting higher</a>
                </h4>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full md:w-1/3">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div className="relative">
                <a href="#">
                  <Image
                    src="/images/blog/4.png"
                    alt="Blog Image 4"
                    width={400}
                    height={250}
                    className="w-full h-auto object-cover"
                  />
                </a>
                <div className="absolute top-2 right-2 bg-white text-gray-800 text-xs px-2 py-1 rounded">
                  14 Mar, 2024
                </div>
              </div>
              <div className="p-4">
                <span className="inline-block bg-green-100 text-green-600 text-xs px-2 py-1 rounded mb-2">Photography</span>
                <h4 className="text-lg font-semibold">
                  <a href="#">Exposure over contrast?</a>
                </h4>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default BlogPage;
