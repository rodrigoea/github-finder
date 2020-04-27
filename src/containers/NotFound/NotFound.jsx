import React from "react";
import { FaGithubSquare, FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div className="py-10 flex justify-center items-center">
        <FaGithubSquare size="100" />
        <h1 className="text-center font-thin text-5xl ml-2">404 Not found!</h1>
      </div>
      <div className="flex justify-center items-center mt-6">
        <h2 className="font-thin text-2xl px-8 py-1 rounded-full bg-red-600 text-white">
          This is not the page you are looking for!
        </h2>
      </div>
      <div className="flex justify-center mt-12">
        <Link
          to="/"
          className="inline-flex justify-center items-center transition duration-300 focus:outline-none shadow-md hover:shadow-lg bg-gray-700 text-white font-bold py-2 px-6 rounded"
        >
          <FaArrowCircleLeft className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
