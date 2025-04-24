'use client';

import { useState, FormEvent } from 'react';

const ContactSection = () => {
  const [response, setResponse] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponse('Message sent successfully!');
  };

  return (
    <div className="px-16 py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-300">
            I have gained extensive knowledge in frontend development improving UI/UX experience. Your satisfaction is my goal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left - Contact Info */}
          <div className="bg-gray-800 p-8 rounded-lg">
            <h4 className="text-2xl font-semibold mb-4">Let's Connect</h4>
            <p className="mb-6 text-gray-300">
              Let's connect on social media. If you'd like to just connect and find me, social media is a great way.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6z" clipRule="evenodd" /></svg>
              </a>
              {/* Add other social icons here */}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="contact"
                placeholder="Contact"
                required
                className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="query"
                placeholder="Query"
                required
                className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {response && <div className="text-green-400">{response}</div>}

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition duration-200"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
