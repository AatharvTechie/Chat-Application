import React from "react";
import { FaTools } from "react-icons/fa";

const features = [
  {
    title: "Fully Furnished",
    description:
      "Discover fully furnished properties for ultimate convenience and comfort.",
  },
  {
    title: "Royal Touch Paint",
    description: `"Royal Touch Paints: Elevating Homes with Timeless Elegance and Superior Quality."`,
  },
  {
    title: "Latest Interior Design",
    description:
      "Stay ahead of the curve with our latest interior design curated to elevate your space with style.",
  },
  {
    title: "Non Stop Security",
    description:
      "Your unwavering shield in an ever-evolving landscape, ensuring continuous protection.",
  },
  {
    title: "Living Inside a Nature",
    description:
      "Experience the serenity of living inside nature's embrace, where tranquility and harmony abound.",
  },
  {
    title: "Luxurious Fittings",
    description:
      "Experience opulence and sophistication with our selection of luxurious fittings.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-[#f7f7f7] py-16 px-4 md:px-16 flex flex-col lg:flex-row items-center">
      {/* Left Image */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <img
          src="/propertyInfoImage.jpg"
          alt="Building"
          className="w-3xl rounded-2xl ml-10 drop-shadow-gray-400 shadow-xl/40 "
        />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 text-left">
        <h2 className="text-red-600 text-3xl mb-1">HERE IS</h2>
        <h1 className="text-4xl  font-extrabold text-blue-950 mb-6 mt-5 ">
          AWESOME FEATURES
        </h1>
        <p className="text-gray-700 mb-10 text-2xl leading-relaxed">
          <span className="font-semibold text-red-600">Realty Finder</span> your
          premier destination for discovering and exploring a wide range of
          properties. Our website is equipped with a host of powerful features
          designed to streamline your property search, whether you're buying,
          selling, or renting. Here are some of the key features that make your
          go-to resource for finding your dream property:
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <FaTools className="text-orange-700 mt-1 text-3xl" />
              <div>
                <h3 className="font-semibold text-red-600 text-2xl">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
