import React from "react";

const ProductPrice = () => {
  return (
    <div>
      <h3 className="heading__3">Price</h3>
      <div className="flex items-center">
        <input
          type="number"
          className="w-full border-2 border-gray-400 rounded shadow-md text-gray-600 text-sm focus:ring-0 focus:border-primary-color"
          placeholder="min"
        />
        <span className="mx-3 text-gray-700">-</span>
        <input
          type="number"
          className="w-full border-2 border-gray-400 rounded shadow-md text-gray-600 text-sm focus:ring-0 focus:border-primary-color"
          placeholder="max"
        />
      </div>
    </div>
  );
};

export default ProductPrice;
