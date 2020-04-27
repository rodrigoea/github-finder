import React from "react";

const Spinner = ({ size = "medium" }) => {
  const sizeClasses = {
    small: "border-2 border-t-2 h-4 w-4",
    medium: "border-4 border-t-4 h-16 w-16",
    large: "border-6 border-t-6 h-24 w-24",
  };

  return (
    <div
      className={`loader ease-linear rounded-full ${sizeClasses[size]}`}
    ></div>
  );
};

export default Spinner;
