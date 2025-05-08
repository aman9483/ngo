import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white pt-10 pb-6">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h4 className="text-xl font-semibold mb-4">About Us</h4>
          <p className="text-sm text-gray-300">
            We are a non-profit organization dedicated to making a positive impact in the lives of underprivileged communities through education, health, and empowerment initiatives.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/leadership" className="hover:underline">Leadership</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/vission" className="hover:underline">Vission & Vission</a></li>
            <li><a href="#" className="hover:underline">News & Events</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <p className="text-sm text-gray-300">
            Address:<br />
            आर्शीवाद एवेन्यू, यूरो किड स्कूल के निकट, जकरियापुर मेन रोड, पटना-30 Patna, India 800030 Bihar<br />
            Phone: +077810 12334<br />
            Email: ashirwaadtrust4@gmail.com
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.facebook.com/AshirwadSewa.org/" className="bg-white text-red-900 p-2 rounded-full hover:bg-gray-200 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-white text-red-900 p-2 rounded-full hover:bg-gray-200 transition">
              <FaTwitter />
            </a>
            <a href="#" className="bg-white text-red-900 p-2 rounded-full hover:bg-gray-200 transition">
              <FaInstagram />
            </a>
            <a href="#" className="bg-white text-red-900 p-2 rounded-full hover:bg-gray-200 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-300 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} NGO Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
