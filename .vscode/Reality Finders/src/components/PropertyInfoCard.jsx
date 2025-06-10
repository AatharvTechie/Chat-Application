import React from "react";

const PropertyInfoCard = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-white gap-10">
      {/* LEFT: Text Section */}
      <div className="md:w-1/2 space-y-6 px-4">
        <h2 className="text-red-600 text-5xl font-semibold">
          Unlocking Your Dream Home
        </h2>
        <h1 className="text-3xl font-extrabold text-blue-900">
          THE ROLE OF REALTY FINDERS
        </h1>
        <p className="text-gray-500 leading-relaxed font-medium text-2xl text-justify">
          <strong className="text-red-600">Realty Finder</strong> In the
          labyrinth of real estate, finding the perfect property can feel like
          searching for a needle in a haystack. This is where realty finders
          step in as your trusted navigators through the complex landscape of
          buying or renting property. Whether you're a seasoned investor or a
          first-time buyer, enlisting the expertise of a realty finder can make
          all the difference in securing your ideal real estate deal.
        </p>
        <p className="text-gray-700 text leading-relaxed font-medium text-2xl">
          Realty finders, also known as real estate agents or property brokers,
          are professionals who specialize in assisting individuals and
          businesses in buying, selling, or renting properties.
        </p>
      </div>

      {/* RIGHT: Image Section */}
      <div className="md:w-[45%] shadow-lg rounded-xl overflow-hidden mx-auto md:mx-0">
        <img
          src="/propertyInfoImage.jpg"
          alt="property"
          className="w-3xl h-auto object-cover rounded-lg filter brightness-90 "
        />
      </div>
    </section>
  );
};

export default PropertyInfoCard;
