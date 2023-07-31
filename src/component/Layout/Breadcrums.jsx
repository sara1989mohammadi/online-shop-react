import React from "react";

const Breadcrums = () => {
  return (
    <div className="container py-6 flex items-end justify-start gap-x-3">
      <a href="index.html">
        <i className="fa-solid fa-house text-primary-color text-base mb-0.5"></i>
      </a>
      <span>
        <i className="fa-solid fa-angle-right text-[13px] text-gray-500"></i>
      </span>
      <p className="text-gray-600 font-medium">Shop</p>
    </div>
  );
};

export default Breadcrums;
