import React from "react";
import bannerImage from "../assets/am1.jpeg";
import aboutImage from "../assets/am1.jpeg";    

const AboutPage = () => {
  return (
    <div>
    
      <div>
        <img
          src={bannerImage}
          alt="About Banner"
          className="w-full h-[400px] object-cover"
        />
      </div>

    
      <section className="bg-gradient-to-r from-blue-50 to-purple-100 py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
          <div className="w-full md:w-1/2">
            <img
              src={aboutImage}
              alt="About us"
              className="w-full h-[500px] rounded-xl shadow-lg object-cover transform hover:scale-105 transition-all duration-500"
            />
          </div>

        
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-red-600 mb-5 tracking-wide">
              About Us
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              We are a non-profit trust organisation registered under the Trust Act, with a vision of{" "}
              <strong>Service, Support and Protection</strong>. Human service, spiritual awakening, and protection of the illiterate are the pillars of{" "}
              <strong>ASHIRWAD SEWA SAMITI TRUST FOUNDATION</strong>.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              ASHIRWAD SEWA SAMITI TRUST was formed after the guidance of{" "}
              <strong>Acharya Sudhanshu ji Maharaj</strong>, a renowned preacher and founder of{" "}
              <strong>Vishwa Jagriti Mission (VJM)</strong>. He has over 10 million devotees worldwide and more than 2.5 million disciples. He is respected for his simple, universal teachings inspired by religions across the globe.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our foundation directly benefits the illiterate and poor through welfare projects in{" "}
              education, healthcare, livelihood, and women empowerment, reaching hundreds of remote villages and slums across India. Our continuous work has earned recognition and praise from many political and social figures for our dedication to mankind.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
