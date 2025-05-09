import React from "react";

import { Link } from 'react-router-dom';


const HeroSection = () => {
  return (
    <section className="bg-gray-900 py-16 px-6 lg:px-24 text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">

        <div className="flex-1">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Waste Not, Exchange Smart
          </h1>
          <p className="text-lg mb-8">
            Join our sustainable waste exchange platform and turn your waste into a resource. Connect, exchange, and build a greener future today.
          </p>
          <div className="flex gap-4">
            <button className="bg-yellow-700 text-gray-300 px-6 py-3 rounded-xl hover:bg-gray-700 transition">
              Get Started
            </button>
            <Link to="/about">
              <button className="border border-yellow-700 text-gray-400 px-6 py-3 rounded-xl hover:bg-gray-700 transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <img
            src="/images/waste.jpg"
            alt="Waste Exchange Illustration"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
