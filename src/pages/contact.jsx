import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
    
    console.log("Contact form submitted:", formData);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-16 px-6">
      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Contact Us / हमसे संपर्क करें
        </h1>

        <form onSubmit={handleSubmit}>
         
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
            />
          </div>

       
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
            />
          </div>

         
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
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

export default ContactPage;
