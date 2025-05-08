import React, { useState } from "react";

const BecomeMemberPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    age: "",
    identity: "",
    experience: "",
    address: "",
    areasOfInterest: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-16 px-6">
      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Become a Member / सदस्य बनें
        </h1>

        <form onSubmit={handleSubmit}>
         
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600" htmlFor="name">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

       
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600" htmlFor="email">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600" htmlFor="phone">
              Phone *
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

      
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600" htmlFor="gender">
              Gender *
            </label>
            <div className="flex space-x-4 mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                  checked={formData.gender === "Male"}
                  className="form-radio"
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                  checked={formData.gender === "Female"}
                  className="form-radio"
                />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>

       
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600" htmlFor="age">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
            />
          </div>


          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600" htmlFor="identity">
              Identity *
            </label>
            <select
              id="identity"
              name="identity"
              value={formData.identity}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
              required
            >
              <option value="STUDENT">STUDENT</option>
            
            </select>
          </div>

      
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600" htmlFor="areasOfInterest">
              Tell us in which areas you are interested in Internship/volunteering:
            </label>
            <input
              type="text"
              id="areasOfInterest"
              name="areasOfInterest"
              value={formData.areasOfInterest}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
            />
          </div>

       
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600" htmlFor="experience">
              Write something about your experience *
            </label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
              required
            ></textarea>
          </div>

         
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600" htmlFor="address">
              Address *
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
              required
            ></textarea>
          </div>

         
          <div className="mb-4 text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white py-3 px-8 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BecomeMemberPage;
