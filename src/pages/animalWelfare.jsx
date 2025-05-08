import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Qr from "../assets/qr.jpeg";
import Bar from "../assets/bar3.jpg";
import Line from "../assets/line3.jpg";
import Ed1 from "../assets/Animal-1.jpg";
import Ed2 from "../assets/Animal-2.jpg";
import Ed3 from "../assets/Animal-3.jpg";
import Ed4 from "../assets/Animal-4.jpg";


const AnimalWeldfare = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (direction === "left") {
      container.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      container.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-12">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-red-700 mb-12">
      Animal Welfare
      </h1>

      {/* Account Details & QR Code */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div className="bg-white shadow-xl rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Account Details</h2>
          <ul className="text-gray-700 leading-relaxed space-y-2">
            <li><strong>Account Name:</strong> ASHIRWAD SEWA SAMITI TRUST</li>
            <li><strong>Account Number:</strong> 5466201000242</li>
            <li><strong>IFSC Code:</strong> CNRB0005466</li>
          </ul>
        </div>
        <div className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Scan to Donate</h2>
          <img
            src={Qr}
            alt="QR Code"
            className="w-64 h-64 object-contain border p-2 rounded-lg"
          />
        </div>
      </div>

      {/* Graphs */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div className="bg-white shadow-xl rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Bar Graph</h2>
          <img
            src={Bar}
            alt="Bar Graph"
            className="w-full h-64 object-contain rounded"
          />
        </div>
        <div className="bg-white shadow-xl rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Line Graph</h2>
          <img
            src={Line}
            alt="Line Graph"
            className="w-full h-64 object-contain rounded"
          />
        </div>
      </div>

      {/* Glimpse of Activities */}
      <div className="mb-12 relative">
        <h2 className="text-3xl font-bold text-red-700 text-center mb-6">
          A Glimpse of Our Activities
        </h2>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10 hover:bg-red-100"
        >
          <FaChevronLeft className="text-red-700 text-xl" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10 hover:bg-red-100"
        >
          <FaChevronRight className="text-red-700 text-xl" />
        </button>

        {/* Image Container */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide px-2 scroll-smooth"
        >
          {[Ed1, Ed2, Ed3, Ed4].map((img, index) => (
            <div key={index} className="min-w-[300px] flex-shrink-0">
              <img
                src={img}
                alt={`Activity ${index + 1}`}
                className="h-52 w-full object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimalWeldfare;
