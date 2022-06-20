import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <Link  className="ml-3 text-xl"
            to={{ pathname: "/", hash: "#about" }}>
            Kamlesh Panwar
            </Link>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link
            to={{ pathname: "/", hash: "#projects" }}
            className="mr-5 hover:text-white  text-white hover:scale-105">
            Past Work
          </Link>
          <Link
            to={{ pathname: "/", hash: "#skills" }}
            className="mr-5 hover:text-white text-white hover:scale-105">
            Skills
          </Link>
          <Link
            to={{ pathname: "/", hash: "#testimonials" }}
            className="mr-5 hover:text-white text-white  hover:scale-105">
            Testimonials
          </Link>
        </nav>
        <a
          href="https://www.upwork.com/freelancers/~01c366439e2c692c0c"
          className="inline-flex items-center text-white bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}