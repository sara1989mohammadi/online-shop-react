import React from "react";

const ProductSorting = () => {
  return (
    <select
      name="sorting"
      id="sorting"
      className="w-60 px-5 py-3 appearance-none border border-gray-300 text-sm text-gray-600 shadow-md rounded-md focus:ring-1 focus:ring-primary-color  focus:outline-none focus:border-primary-color">
      <option value="default-sorting" className="block px-3 py-3">
        Default sorting
      </option>
      <option value="price-low-high">Price low-high</option>
      <option value="price-high-low">Price high-low</option>
      <option value="latest-products">Latest products</option>
    </select>
  );
};

export default ProductSorting;
