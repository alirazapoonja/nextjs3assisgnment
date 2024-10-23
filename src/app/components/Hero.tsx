import React from "react";


const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-indigo-600 py-16 flex justify-center items-center">
      <div className="bg-indigo-300 rounded-lg shadow-lg p-8 max-w-2xl text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-gray-900 animate-fadeIn">
          Welcome to My Hero Page
        </h2>
        
        <p className="mt-4 text-gray-900 animate-fadeIn delay-500">
          Hi, I&#39;m Ali Raza, Student of Governor House GIAIC.
        </p>
      </div>
    </section>
  );
};

export default Hero;
