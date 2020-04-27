import React from "react";
import { FaGithub, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex shadow-lg bg-blue-500 p-4">
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-center justify-center transition duration-300 w-10 h-10 rounded-full bg-transparent  hover:bg-white text-white hover:text-blue-500"
            title="Home"
          >
            <FaHome size="24" />
          </Link>
        </div>
        <div className="flex flex-grow justify-center items-center">
          <Link
            to="/"
            className="flex items-center text-white"
            title="GitHub Finder"
          >
            <FaGithub size="32" />
            <h1 className="font-thin text-3xl tracking-tight ml-2">
              GitHub Finder
            </h1>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
