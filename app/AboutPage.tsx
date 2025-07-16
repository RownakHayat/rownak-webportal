// AboutMe.tsx
// import { Github, LinkedinIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const skills = [
  { name: 'JavaScript', level: 95 },
  { name: 'React.js', level: 90 },
  { name: 'Next.js', level: 85 },
  // { name: 'NestJS', level: 80 },
  // { name: 'Laravel', level: 80 },
  { name: 'Version Control (Git)', level: 95 },
];

const profileDetails = [
  { label: 'Profile', value: 'Software Development' },
  { label: 'Technologies', value: 'React.js, Next.js ' },
  { label: 'Experience', value: 'Over 2 Years 7 Months in the Tech Industry' },
  { label: 'Other Skills', value: 'Version Control' },
  { label: 'Interests', value: 'Open Source, Software Innovation, Mentorship' },
];

const AboutMe = () => {
  return (
    <section id='about' className="px-8 md:px-16 py-28">
      <div >
        <div className="max-w-6xl container mx-auto ">

          <h2 className="font-bold mb-8 text-3xl lg:text-5xl font-serif text-gray-800 text-center text-nowrap">About Me</h2>
          <div className="mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left Column */}
            <div>
              <div className="lg:flex gap-6 items-center mb-8">
                <Image
                  src="/about.jpeg" // Update to your actual image path
                  alt="Profile"
                  width={350}
                  height={350}
                  className="rounded-md mb-4"
                />
                <div className="">
                  <p><strong>Name:</strong> Rownak Hayat</p>
                  <p><strong>Job Role:</strong> Junior Software Developer</p>
                  <p><strong>Experience:</strong> 2 Years 7 Months</p>
                  <p><strong>Address:</strong> Dhaka, Bangladesh</p>
                </div>
              </div>

              {/* Skills Section */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Skills</h4>
                <div className="space-y-5">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1 text-sm text-blue-500">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full">
                        <div
                          className="h-2 bg-yellow-400 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>

              <p className="text-black mb-6 leading-relaxed text-justify">
                With over 2 years of hands-on experience in software engineering, I specialize in building modern, responsive and high-performance frontend applications. My expertise lies in React.js and Next.js, where I focus on creating intuitive user interfaces and seamless user experiences. I’m also proficient in integrating RESTful and GraphQL APIs, ensuring smooth data flow and dynamic functionality across applications. I’m passionate about turning complex requirements into clean, scalable code and thrive on delivering impactful, user-centric solutions.
              </p>

              <div className="space-y-4 text-sm">
                {profileDetails.map((item, index) => (
                  <div key={index} className="grid grid-cols-12">
                    <div className="col-span-6 font-semibold text-gray-400">{item.label}:</div>
                    <div className="col-span-6 text-black">{item.value}</div>
                  </div>
                ))}
              </div>

              {/* <div className="mt-8 flex items-center space-x-4">
            <span className="text-blue-500 font-bold text-2xl">30+</span>
            <span className="text-white text-lg">Projects completed</span>
          </div> */}
            </div>
          </div>
          <div className="mt-20 flex justify-center items-center gap-6 text-center">
            <a
              href="https://www.linkedin.com/in/rownakhayat/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              LINKEDIN
              {/* <span><LinkedinIcon /></span> */}
            </a>

            <a
              href="https://github.com/RownakHayat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
            >
              GitHub
              {/* <Github /> */}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
