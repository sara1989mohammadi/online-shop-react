import React from "react";

const ProductColor = () => {
  return (
    <div>
      <h3 className="heading__3">Color</h3>
      <div className="flex items-center gap-2.5">
        <div className="color-selector">
          <input type="radio" name="color" id="color-red" className="hidden" />
          <label
            htmlFor="color-red"
            className="block w-6 h-6 rounded-sm cursor-pointer border border-primary-color bg-primary-color"></label>
        </div>
        <div className="color-selector">
          <input
            type="radio"
            name="color"
            id="color-white"
            className="hidden"
          />
          <label
            htmlFor="color-white"
            className="block w-6 h-6 rounded-sm cursor-pointer border border-gray-300 bg-white"></label>
        </div>
        <div className="color-selector">
          <input
            type="radio"
            name="color"
            id="color-black"
            className="hidden"
          />
          <label
            htmlFor="color-black"
            className="block w-6 h-6 rounded-sm cursor-pointer border border-black bg-black"></label>
        </div>
        <div className="color-selector">
          <input type="radio" name="color" id="color-blue" className="hidden" />
          <label
            htmlFor="color-blue"
            className="block w-6 h-6 rounded-sm cursor-pointer border border-blue-700 bg-blue-700"></label>
        </div>
        <div className="color-selector">
          <input
            type="radio"
            name="color"
            id="color-yellow"
            className="hidden"
          />
          <label
            htmlFor="color-yellow"
            className="block w-6 h-6 rounded-sm cursor-pointer border border-yellow-400 bg-yellow-400"></label>
        </div>
      </div>
    </div>
  );
};

export default ProductColor;
