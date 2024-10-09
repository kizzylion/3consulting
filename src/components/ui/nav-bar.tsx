import { Link } from "@tanstack/react-router";
import Logo from "@assets/Logo.png";
import { useState } from "react";
import Button from "./button";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      id="Nav-section"
      className="max-w-7xl mx-auto w-full px-5 md:px-8 h-fit sticky top-0 z-50"
    >
      <nav className="py-4 w-full  bg-white ">
        <section className=" flex justify-between items-center mx-auto">
          <div className="flex items-center gap-x-4 ">
            <img src={Logo} alt="logo" />
            <ul className="hidden md:flex space-x-4 ml-20">
              <li>
                <Button to="/" as="link">
                  Home
                </Button>
              </li>
              <li>
                <Button to="/about-us" as="link">
                  About Us
                </Button>
              </li>
              <li>
                <Button to="/solutions" as="link">
                  Solutions
                </Button>
              </li>
              <li>
                <Button to="/resources" as="link">
                  Resources
                </Button>
              </li>
            </ul>
          </div>
          <div className="hidden md:block  bg-accent-ui px-8 py-2 rounded-lg font-semibold">
            <Link to="/contact" className="text-accent-dark-ui text-sm">
              Contact Us
            </Link>
          </div>
          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
        </section>
      </nav>
      <SmallNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

const SmallNav = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex flex-col  justify-start">
      <button
        className="absolute top-4 right-4 bg-white/80 backdrop-blur-3xl shadow-md p-2 rounded-full"
        onClick={onClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
      <ul className="flex flex-col items-center space-y-4 text-left pt-6 bg-white w-3/4 p-4 rounded-se-lg  h-full">
        <li className=" w-full">
          <img src={Logo} alt="logo" />
        </li>
        <li className=" w-full">
          <Button
            as="link"
            to="/"
            activeOptions={{ exact: true }}
            onClick={onClose}
          >
            Home
          </Button>
        </li>
        <li className=" w-full">
          <Button as="link" to="/about-us" onClick={onClose}>
            About Us
          </Button>
        </li>
        <li className=" w-full">
          <Button as="link" to="/solutions" onClick={onClose}>
            Solutions
          </Button>
        </li>
        <li className=" w-full">
          <Button as="link" to="/resources" onClick={onClose}>
            Resources
          </Button>
        </li>
      </ul>
    </div>
  );
};
