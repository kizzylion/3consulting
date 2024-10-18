import React from "react";
import heroImage from "@assets/solutions-data-protection.png";
import map from "@assets/Map.png";

import Button from "@components/ui/button";

const Hero: React.FC = () => {
  return (
    <section
      id="data-protection-hero"
      className={`relative bg-gray-700 isolate   mx-auto bg-cover bg-center  md:py-16 lg:py-24`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 z-20  justify-between items-center pt-24 w-full px-4 py-12 md:px-8 md:grid md:grid-cols-2 md:pt-16">
        <div className="mb-6 lg:mb-0">
          <div
            id="badge"
            className="inline-flex items-center px-2 py-1 mb-4 max-w-full text-gray-300 rounded-lg border-2 md:w-fit border-gray-400/40"
          >
            <div className="flex items-center px-2 py-1 rounded-md border-2 border-gray-400/40">
              <span className="inline-flex relative justify-center items-center w-3 h-3">
                <span className="absolute w-full h-full bg-pink-300 rounded-full opacity-75 animate-ping"></span>
                <span className="relative w-2 h-2 bg-red-500 rounded-full"></span>
              </span>
              <div className="ml-3 text-xs font-medium text-nowrap">
                <p>What's new?</p>
              </div>
            </div>
            <a href="#" className="ml-2 text-xs truncate">
              Data protection
            </a>
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
          <h1 className="py-2 mb-6 text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200 md:text-4xl lg:text-6xl">
            Data Protection Services
          </h1>
          <p className="mb-12 text-2xl font-semibold text-orange-200 md:text-4xl">
            Protect Your Data, Anywhere in the World
          </p>
          <Button
            as="link"
            to="/contact"
            className="px-8 py-4 text-lg font-semibold text-amber-900 bg-amber-400 rounded-lg transition duration-300"
          >
            Book a Free Consultation
          </Button>
        </div>
        <div className="flex justify-center items-center mt-8 h-full lg:mt-0 ">
          <img
            src={heroImage}
            draggable="false"
            alt="Cybersecurity Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
      <div
        id="Background"
        className="absolute -z-10 inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${map})` }}
      ></div>
    </section>
  );
};

export default Hero;
