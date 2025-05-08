import React from "react";
import VisionImage1 from "../assets/am1.jpeg";
import VisionImage2 from "../assets/am2.jpeg";
import MissionImage1 from "../assets/am3.jpg";
import MissionImage2 from "../assets/am3.jpg";

const VisionMissionPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-screen-xl mx-auto py-16 px-6">
       
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-16">
          Our Vision
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
         
          <div className="space-y-6 flex flex-col justify-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Work as a catalyst in bringing sustainable change in the lives of underprivileged families.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Adopt the highest standards of governance to emerge as a leading knowledge and technology-driven, innovative, and scalable international development organization.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Providing an environment to the most vulnerable sections of society by uplifting them economically, socially, mentally, emotionally, and leading them towards rewarding lives.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              To implement sustainable programmes through which every child attains the right to survival, education, participation, and development.
            </p>
          </div>

        
          <div className="flex justify-center items-center">
            <img
              src={VisionImage1}
              alt="Vision"
              className="w-full md:w-4/5 lg:w-2/3 rounded-3xl shadow-xl transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
        
          <div className="flex justify-center items-center">
            <img
              src={VisionImage2}
              alt="Vision"
              className="w-full md:w-4/5 lg:w-2/3 rounded-3xl shadow-xl transform transition duration-500 hover:scale-105"
            />
          </div>

         
          <div className="space-y-6 flex flex-col justify-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              To prepare every eligible youth of India in the remotest of areas with a platform to learn and grow.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              To work with communities to end poverty, unemployment, and illiteracy.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We envision a world of dignity and respect for women and the girl child by imparting skills and providing employment opportunities.
            </p>
          </div>
        </div>

       
        <h1 className="text-4xl font-bold text-gray-900 text-center mt-24 mb-16">
          Our Mission
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
          <div className="space-y-6 flex flex-col justify-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Rehabilitating and providing education, shelter, and food to economically backward, child labourers, disabled, orphans, and semi-orphans.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Sensitizing destitute women and adolescent girls for their rights & entitlements. Ladies Empowerment and promoting SHGs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Sponsoring midday meals and groceries for old age groups, to enable them to get timely food.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Providing relief and rehabilitation to the victims of Natural Calamities like floods and droughts.
            </p>
          </div>

         
          <div className="flex justify-center items-center">
            <img
              src={MissionImage1}
              alt="Mission"
              className="w-full md:w-4/5 lg:w-2/3 rounded-3xl shadow-xl transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
       
          <div className="flex justify-center items-center">
            <img
              src={MissionImage2}
              alt="Mission"
              className="w-full md:w-4/5 lg:w-2/3 rounded-3xl shadow-xl transform transition duration-500 hover:scale-105"
            />
          </div>

         
          <div className="space-y-6 flex flex-col justify-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Enlightening and educating the indigenous people and remote rural masses.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Spreading awareness among the public on health & sanitation, education, environment, consumer rights, road safety, and other socio-economic rights, particularly Human rights. Promoting scientific temper and establishing IT in grassroots.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Spreading awareness about HIV/ AIDS, TB, Malaria, and conducting medical health camps for the remote rural tribes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Encouraging sustainable agricultural development and organic farming. Establishing unity, integrity, and communal harmony.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionPage;
