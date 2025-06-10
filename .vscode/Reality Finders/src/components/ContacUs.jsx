import React from "react";
import { FaHandshake } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="h-auto flex flex-col items-center justify-center mb-20 my-10">
      {/* Page Heading */}
      <h2 className="text-5xl font-bold text-red-600  mt-5 mb-12 text-center">
        Contact Us
      </h2>

      {/* Content Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center">
        {/* Left Interactive Section */}
        <div className="md:w-1/2 flex flex-col items-center text-center mb-10 md:mb-0 md:mr-10 transition-all duration-500">
          <FaHandshake className="text-9xl text-red-600 mb-4 animate-bounce" />
          <h1 className="text-4xl font-bold text-gray-800">Let’s Connect</h1>
          <p className="text-gray-800 mt-4 max-w-md text-2xl">
            Whether you have a question or just want to say hi, our team is here
            to help. Fill out the form and we’ll get back to you soon.
          </p>
        </div>

        {/* Right Form Section */}
        <form className="w-auto h-auto bg-opacity-80 rounded-lg border-none p-6 space-y-4 transition-all duration-300 mr-0 md:mr-20 shadow-gray-300 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">
            Send a Message
          </h2>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-10 py-3 border mb-5 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition mt-4"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-10 py-3 border mb-5 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          ></textarea>

          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 mt-2 rounded-md hover:bg-red-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
