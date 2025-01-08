import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="w-full h-screen bg-[#0a0a0a] flex flex-col items-center justify-center py-12 px-6">
      {/* Contact Form */}
      <div className="w-full max-w-lg p-8 bg-black shadow-xl rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#333]">
          Get in Touch
        </h2>

        {/* Form */}
        <form action="#" method="POST" className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg text-[#333] mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              className="p-3 border-2 border-[#ddd] rounded-md focus:outline-none focus:border-[#5D97C9]"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg text-[#333] mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              className="p-3 border-2 border-[#ddd] rounded-md focus:outline-none focus:border-[#5D97C9]"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="subject" className="text-lg text-[#333] mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              className="p-3 border-2 border-[#ddd] rounded-md focus:outline-none focus:border-[#5D97C9]"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg text-[#333] mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              rows={4}
              className="p-3 border-2 border-[#ddd] rounded-md focus:outline-none focus:border-[#5D97C9]"
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-[#5D97C9] text-white rounded-full text-lg hover:bg-[#4a7bbf] transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Social Links */}
      <div className="mt-8 flex justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/gael-garcia"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-[#0077b5] text-white rounded-full hover:bg-[#005a88] transition duration-300"
        >
          <FaLinkedin size={30} />
        </a>

        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-[#333] text-white rounded-full hover:bg-[#555] transition duration-300"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </div>
  );
};
