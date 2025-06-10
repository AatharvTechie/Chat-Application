import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="h-auto bg-black text-white py-10 px-6 ">
      <div className="max-w-6xl mx-auto text-center mt-5 ">
        {/* Logo and Tagline */}
        <h1 className="text-4xl font-bold text-red-600">
          realty <span className="text-white">finders</span>
        </h1>
        <p className="text-lg mt-5 text-gray-300 transition duration-300 hover:text-white">
          In the labyrinth of real estate, finding the perfect property can feel
          like searching for a needle in a haystack.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 my-10 text-3xl">
          <FaFacebookF className="hover:text-red-500 transition duration-300 cursor-pointer" />
          <FaInstagram className="hover:text-red-500 transition duration-300 cursor-pointer" />
          <FaYoutube className="hover:text-red-500 transition duration-300 cursor-pointer" />
          <FaPinterest className="hover:text-red-500 transition duration-300 cursor-pointer" />
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-4 text-lg text-shadow-violet-100">
          <div className="flex justify-center items-center gap-2">
            <FaPhoneAlt className="text-red-500 text-lg" />
            <span>+91 87009-87005</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <FaEnvelope className="text-red-500 text-lg" />
            <span>realtyfinders.india@gmail.com</span>
          </div>
          <div className="flex justify-center items-center gap-2 text-center">
            <FaMapMarkerAlt className="text-red-500 text-3xl" />
            <span>
              Sco-11, First Floor, Business Central VIP Road, Behind Social
              Squar, Main Patiala Road, Zirakpur-140603
            </span>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-gray-400 text-xs">
          © 2024. All rights reserved. Designed by{" "}
          <span className="text-red-500 hover:underline cursor-pointer">
            Pacewalk
          </span>
          .
        </div>
      </div>
    </footer>
  );
};

export default Footer;
