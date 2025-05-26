'use client';

import { FacebookIcon, GitBranch, LinkedinIcon } from 'lucide-react';
import { useState, FormEvent } from 'react';

const ContactPage: React.FC = () => {
  const [response, setResponse] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponse('Message sent successfully!');
  };

  return (
    <div className="px-8 md:px-16 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-bold mb-4 text-8xl font-serif text-gray-800">Get in Touch</h2>
          <p className="text-gray-600">
            I have gained extensive knowledge in frontend development improving UI/UX experience. Your satisfaction is my goal.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="sm:col-span-12 lg:col-span-6 ">
            {/* Left - Contact Info */}
          <div
            className="p-8 rounded-lg bg-cover bg-center"
            style={{ backgroundImage: `url('/images/contact.png')`, width:"100%", height: "100%" }}
          >
            <h4 className="text-2xl font-semibold mb-4 text-white">Let's Connect</h4>
            <p className="mb-6 text-gray-300">
              Let's connect on social media. If you'd like to just connect and find me, social media is a great way.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-400" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" className="text-white hover:text-blue-400" aria-label="Facebook">
                <GitBranch />
              </a>
              <a href="#" className="text-white hover:text-blue-400" aria-label="Facebook">
                <LinkedinIcon/>
              </a>
              {/* You can add more social icons here */}
            </div>
          </div>

          </div>
          <div className="sm:col-span-12 lg:col-span-6">
            {/* Right - Contact Form */}
          <div className="">
            <form onSubmit={handleSubmit} className="grid grid-cols-12 space-y-8">

              <div className="col-span-12">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full h-20 py-1 px-4 rounded-xl ring-slate-700 font-serif text-black text-2xl placeholder-gray-900 ring-1 focus:outline-none"
                />
                </div>
              
              <div className="col-span-12">
              <input
                type="text"
                name="contact"
                placeholder="Contact"
                required
                className="w-full h-20 py-1 px-4 rounded-xl ring-slate-700 font-serif text-black text-2xl placeholder-gray-900 ring-1 focus:outline-none"
                />
              </div>
              <div className="col-span-12">
              <input
                type="text"
                name="query"
                placeholder="Query"
                required
                className="w-full h-20 py-1 px-4 rounded-xl ring-slate-700 font-serif text-black text-2xl placeholder-gray-900 ring-1 focus:outline-none"
                />
              </div>
              {response && <div className="text-green-500">{response}</div>}
              <div className="col-span-12 pt-4">
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-700 rounded-3xl text-white font-medium px-12 py-3 transition duration-200 flex items-center"
              >
                <div className='w-10 border-b-2'></div>
                Send
              </button>
              </div>
              
            </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
