import React from "react";
import img1 from "../assets/ngo/img1.jpg";
import img2 from "../assets/ngo/img2.jpg";
import img3 from "../assets/ngo/img3.jpg";
import img4 from "../assets/ngo/img4.jpg";
import img5 from "../assets/ngo/img5.jpg";
import img6 from "../assets/ngo/img6.jpg";
import img7 from "../assets/ngo/img7.jpg";
import img8 from "../assets/ngo/img8.jpg";
import img9 from "../assets/ngo/img9.jpg";
import img10 from "../assets/ngo/img10.jpg";
import img11 from "../assets/ngo/img11.jpg";
import img12 from "../assets/ngo/img12.jpg";
import img13 from "../assets/ngo/img13.jpg";
import img14 from "../assets/ngo/img14.jpg";
import img15 from "../assets/ngo/img15.jpg";
import img16 from "../assets/ngo/img16.jpeg";
import img17 from "../assets/ngo/img17.jpg";
import img18 from "../assets/ngo/img18.jpeg";
import img19 from "../assets/ngo/img19.jpg";
import img20 from "../assets/ngo/img20.jpg";
import img21 from "../assets/ngo/img21.jpg";
import img22 from "../assets/ngo/img22.jpg";
import img23 from "../assets/ngo/img23.jpg";
import img24 from "../assets/ngo/img24.jpeg";
import img25 from "../assets/ngo/img25.jpeg";
import img26 from "../assets/ngo/img26.jpeg";
import img27 from "../assets/ngo/img27.jpg";
import img28 from "../assets/ngo/img28.jpg";

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28
];

const GallerySection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-5xl font-extrabold text-red-600 mb-5">Our Gallery</h2>
        <p className="text-gray-600 text-lg font-medium">
          Glimpses of our initiatives across communities, captured with love and care.
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Scrollable Container */}
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth px-4 py-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="min-w-[280px] md:min-w-[350px] h-80 bg-white rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover rounded-t-lg"
              />
              <div className="bg-red-600 p-4 text-center text-white rounded-b-lg">
                <span className="font-semibold text-lg">Image {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
