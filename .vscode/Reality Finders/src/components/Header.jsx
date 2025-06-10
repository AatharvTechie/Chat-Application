import React from "react";

const Header = () => {
  return (
    <header className="w-full h-auto fixed top-0 left-0 z-50 m-0">
      {/* Top Contact Bar */}
      <div className="bg-white p-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src="#" alt="Logo" className="h-10" />
          <span className="text-6xl font-bold text-gray-800 mb-3.5">
            realty <span className="text-red-600">finders</span>
          </span>
        </div>
        <div className="flex gap-6 text-2xl text-gray-700">
          <div className="flex items-center gap-2">
            <span>📞</span>
            <span className="hover:text-red-400 transition-colors duration-300 cursor-pointer">
              +91 87009-87005
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span>✉️</span>
            <span className="hover:text-red-400 transition-colors duration-300 cursor-pointer">
              realtyfinders.india@gmail.com
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#1e2345] py-4">
        <ul className="flex justify-center gap-10 text-white font-semibold text-lg">
          <li>
            <a
              href="#"
              className="hover:text-orange-500 transition-colors duration-300 text-2xl"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-orange-500 transition-colors duration-300 text-2xl"
            >
              ABOUT US
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-orange-500 transition-colors duration-300 text-2xl"
            >
              SERVICES
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-orange-500 transition-colors duration-300 text-2xl"
            >
              CONTACT US
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
