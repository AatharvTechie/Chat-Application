import React from "react";
import "../App.css";

const FeaturedProperty = () => {
  const companies = [
    "/Nova.png",
    "/Colphis.png",
    "/Nexa.png",
    "/StarSolution.png",
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-5xl font-bold text-red-600">FEATURED PROPERTY</h2>
      <p className="text-gray-600 text-xl mt-6 max-w-2xl mx-auto">
        You're searching for your dream home, investment opportunities, or
        commercial spaces...
      </p>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mt-12">
        {["Commercial", "Residential", "Plotting"].map((type, index) => (
          <button
            key={index}
            className="border-2 border-orange-500 px-6 py-2 text-orange-500 rounded-full font-medium transition-all duration-300 hover:bg-orange-500 hover:text-white hover:px-8"
          >
            {type}
          </button>
        ))}
      </div>

      {/* Logo Slider */}
      <div className="overflow-hidden mt-20 relative">
        <div className="flex gap-12 animate-scrollRightToLeft justify-center animate-pulse">
          {companies.concat(companies).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Company Logo"
              className="h-30 w-auto object-cover border-gray-400"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperty;
