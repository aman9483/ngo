import React from "react";

const LeadershipPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-screen-xl mx-auto py-16 px-6">
       
        <h1 className="text-4xl font-semibold text-gray-800 text-center mb-12">
          Leadership Team / नेतृत्व टीम
        </h1>

      
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Mentor (Inspiration) / मुख्य संरक्षक
          </h2>
          <div className="flex justify-center mb-4 space-x-6">
           
            <img
              src="https://ashirwadsewa.org/wp-content/uploads/2021/05/IMG-20210521-WA0052-removebg-preview.png" 
              alt="Param Pujya Sri Shudhanshu Ji Maharaj"
              className="w-32 h-32 rounded-full border-4 border-indigo-600 shadow-lg object-cover"
            />
            <img
              src="https://ashirwadsewa.org/wp-content/uploads/2021/05/baba.jpg" 
              alt="Param Pujya Sri Shudhanshu Ji Maharaj"
              className="w-32 h-32 rounded-full border-4 border-indigo-600 shadow-lg object-cover"
            />
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <p className="text-lg font-medium text-gray-800">Sri Prince Kumar, Raju</p>
            <p className="text-gray-600">President / अध्यक्ष</p>
          </div>

         
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <p className="text-lg font-medium text-gray-800">Sri Deepak Kumar</p>
            <p className="text-gray-600">Secretary / सचिव</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <p className="text-lg font-medium text-gray-800">Sri Mahesh Prasad Gupta</p>
            <p className="text-gray-600">Treasurer / कोषाध्यक्ष</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <p className="text-lg font-medium text-gray-800">Sri Kamal Nopani</p>
            <p className="text-gray-600">Mentor / सलाहकार</p>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <p className="text-lg font-medium text-gray-800">Sri Mukesh Nandan</p>
            <p className="text-gray-600">Senior Vice President / वरिष्ठ उपाध्यक्ष</p>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <p className="text-lg font-medium text-gray-800">Vice Presidents</p>
            <p className="text-gray-600">Vice Presidents / उपाध्यक्ष</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <p className="text-lg font-medium text-gray-800">Sri Vinod Kumar</p>
            <p className="text-gray-600">Member / सदस्य</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <p className="text-lg font-medium text-gray-800">Sri Manoj Kumar</p>
            <p className="text-gray-600">Member / सदस्य</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <p className="text-lg font-medium text-gray-800">Sri Shyam Sundar</p>
            <p className="text-gray-600">Member / सदस्य</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <p className="text-lg font-medium text-gray-800">Sri Harish Kumar</p>
            <p className="text-gray-600">Member / सदस्य</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <p className="text-lg font-medium text-gray-800">Sri Arvind Kumar</p>
            <p className="text-gray-600">Member / सदस्य</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <p className="text-lg font-medium text-gray-800">Sri Rajeev Ranjan</p>
            <p className="text-gray-600">Member / सदस्य</p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default LeadershipPage;
