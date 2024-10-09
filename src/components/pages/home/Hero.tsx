import React from "react";
import heroImage from "@assets/home-hero.png";

import Button from "@components/ui/button";
import { partners } from "@utils/index";

const Hero: React.FC = () => {
  return (
    <section className="px-4 md:px-8 lg:px-20 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 w-full md:grid md:grid-cols-2 items-center justify-between pt-24 md:pt-32">
        <div className=" mb-6 lg:mb-0 w-full">
          <div
            id="badge"
            className="inline-flex items-center rounded-lg border-2 max-w-full md:w-fit border-gray-400/40 px-2 py-1 mb-4 "
          >
            <div className="flex items-center border-2 border-gray-400/40 px-2 py-1 rounded-md">
              <span className="relative inline-flex items-center justify-center w-3 h-3">
                <span className="absolute w-full h-full bg-pink-300 animate-ping rounded-full opacity-75"></span>
                <span className="relative w-2 h-2 bg-red-500 rounded-full"></span>
              </span>
              <div className="text-xs font-medium text-nowrap ml-3">
                <p>What's new?</p>
              </div>
            </div>
            <a href="#" className="text-xs text-gray-600 ml-2 truncate">
              Lorem ipsum dolor sit amet
            </a>
            <svg
              className="w-4 h-4 ml-1"
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
          <h1 className="text-5xl md:text-4xl lg:text-6xl font-bold mb-6 py-2 leading-tight bg-gradient-to-r from-accent-dark-ui to-accent-ui bg-clip-text text-transparent">
            Shield Your Business from Cyber Threats
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Comprehensive Data Protection and Cybersecurity Solutions
          </p>
          <Button
            as="link"
            to="/contact"
            className="bg-amber-400 text-amber-900 font-semibold py-4 px-8 rounded-lg hover:bg-amber-500 transition duration-300 text-lg"
          >
            Book a Free Consultation
          </Button>
          <div className="mt-16">
            <p className="text-sm text-gray-600 mb-4">
              <span className="font-bold text-gray-950">
                Trusted Partners :
              </span>{" "}
              We collaborate with industry-leading partner
            </p>
            <div className="flex items-center gap-6 overflow-auto">
              {partners.map((partner) => (
                <img
                  draggable="false"
                  src={partner.image}
                  alt={partner.name}
                  className="h-8 aspect-video object-contain"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-auto h-full md:pr-16 mt-8 lg:mt-0">
          <img
            src={heroImage}
            draggable="false"
            alt="Cybersecurity Illustration"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
