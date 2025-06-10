import React from "react";

const services = [
  {
    title: "Sale Property",
    description:
      "Ready to sell your property with confidence? Trust the expertise and dedication of realty finders. Contact us today to schedule a consultation.",
    image: "/images/for-sale.jpg",
  },
  {
    title: "Buy Property",
    description:
      "Ready to find your dream home? Let us be your trusted partner in the homebuying process. With our personalized service, expert guidance.",
    image: "/images/buy-property.jpg",
  },
  {
    title: "Rent Property",
    description:
      "Ready to find your perfect rental property? Let us be your guide. Explore our website to browse available rental listings, learn more about our services.",
    image: "/images/for-rent.jpg",
  },
  {
    title: "Property Management",
    description:
      "With expert property management services, you can fully realize the potential of your investment and remove the hassles associated with ownership.",
    image: "/images/property-management.jpg",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-red-600">OUR SERVICES</h2>
        <p className="text-gray-700 text-2xl mt-7 max-w-2xl mx-auto font-bold text-wrap">
          Welcome to Realty Finder, your premier destination for all your real
          estate needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 m-2.5 mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col mt-8"
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-md leading-relaxed flex-1">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
