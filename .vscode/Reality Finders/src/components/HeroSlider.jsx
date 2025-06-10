import { useState } from "react";

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(() => current - 1);
  };

  const nextSlide = () => {
    setCurrent(() => current + 1);
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <div className="w-full h-full bg-center bg-cover transition-all duration-700 ease-in-out"></div>

      {/* Arrows */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-60 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-60 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        ❯
      </button>

      {/* Text on top */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          FIND YOUR DREAM HOUSE WITH US
        </h1>
        <p className="text-lg max-w-2xl">
          Explore beautiful homes and apartments with comfort and luxury.
        </p>
      </div>
    </div>
  );
};

export default HeroSlider;
