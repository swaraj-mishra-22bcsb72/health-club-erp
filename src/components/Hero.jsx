import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const handleLoginRedirect = () => {
    window.location.href = "/login";
  };

  return (
    <section className="hero bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="title mb-8"></div>
        <h1 className="text-5xl font-extrabold uppercase leading-tight">
          LET'S
        </h1>
        <h1 className="text-5xl font-extrabold uppercase leading-tight">GET</h1>
        <h1 className="text-5xl font-extrabold uppercase leading-tight">
          MOVING
        </h1>
      </div>
      <div className="sub-title mb-8">
        <p className="text-lg font-medium">
          Your Journey to Fitness Starts Here
        </p>
        <p className="text-lg font-medium">Unleash Your Potential</p>
      </div>
      <div className="buttons flex justify-center gap-4">
        <button
          onClick={handleLoginRedirect}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
        >
          Start Your Journey
        </button>

        <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300">
          Discover Your Plan
        </button>
      </div>
    </section>
  );
};

export default Hero;
