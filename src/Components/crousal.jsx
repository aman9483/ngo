import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade"; // Add fade effect CSS
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpeg";
import './crousal.css'

const ImageCarousel = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        effect="fade" // Enable fade effect
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="rounded-lg shadow-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[500px] object-cover object-center rounded-lg" // Ensures full width, height, and focuses on the center of the image
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
