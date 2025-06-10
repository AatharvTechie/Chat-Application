import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const feedbacks = [
  {
    name: "Anjali Sharma",
    comment:
      "Realty Finders helped me find my dream home with ease. Highly professional and responsive!",
    location: "Delhi, India",
  },
  {
    name: "Ravi Kumar",
    comment:
      "Very helpful service. Got my commercial space in just a few days. Thank you Realty Finders!",
    location: "Noida, India",
  },
  {
    name: "Priya Verma",
    comment:
      "The team was supportive throughout the process. Smooth and stress-free experience!",
    location: "Gurgaon, India",
  },
];

const FeedbackSection = () => {
  const [index, setIndex] = useState(0);
  const total = feedbacks.length;

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 px-4 bg-black text-center relative">
      <h2 className="text-4xl font-bold text-red-600 mb-12">
        What Our Clients Say
      </h2>

      <div className="w-5xl relative bg-white shadow-lg rounded-xl p-8 mx-auto flex flex-col items-center space-y-6">
        {/* Placeholder Profile Image */}
        <div className="w-24 h-24 rounded-full bg-gray-300 mb-2"></div>

        {/* Feedback Message */}
        <p className="text-lg md:text-xl text-gray-700 italic">
          "{feedbacks[index].comment}"
        </p>

        {/* Name and Location */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            {feedbacks[index].name}
          </h3>
          <p className="text-sm text-gray-500">{feedbacks[index].location}</p>
        </div>

        {/* Arrows Navigation */}
        <div className="absolute top-1/2 left-0 right-0 px-6 flex justify-between items-center -translate-y-1/2">
          <button
            onClick={handlePrev}
            className="bg-white p-3 rounded-full shadow-md hover:bg-red-100 text-red-500 
            duration-500"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="bg-white p-3 rounded-full shadow-md hover:bg-red-100 text-red-500 duration-500"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
