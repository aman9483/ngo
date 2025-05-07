import React from "react";
import am1 from "../assets/am1.jpeg";
import am2 from "../assets/am2.jpeg";
import am3 from "../assets/am3.jpg";

const RecentProjects = () => {
  const projects = [
    { id: 1, image: am1 },
    { id: 2, image: am2 },
    { id: 3, image: am3 },
    { id: 4, image: am1 },
    { id: 5, image: am2 },
    { id: 6, image: am3 },
  ];

  const scrollContainerRef = React.useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-gray-100 w-full">
      <div className="max-w-screen-xl mx-auto text-center mb-8 px-4">
        <h2 className="text-3xl font-semibold text-gray-900">
          Recent <span className="text-red-500">Projects</span>
        </h2>
      </div>

      <div className="relative w-full px-4">
        {/* Scrollable container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-4 py-4 scroll-smooth scrollbar-hide"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-[300px] md:min-w-[33%] h-64 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 overflow-hidden"
            >
              <img
                src={project.image}
                alt={`Project ${project.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-2 z-10">
          <button
            onClick={scrollLeft}
            className="p-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600"
          >
            &lt;
          </button>
        </div>
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-2 z-10">
          <button
            onClick={scrollRight}
            className="p-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
