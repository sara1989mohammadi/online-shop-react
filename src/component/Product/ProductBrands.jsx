import React from "react";

const ProductBrands = () => {
  return (
    <div>
      <h3 className="heading__3">brands</h3>
      <div className="space-y-2.5">
        <div className="flex items-center">
          <input
            type="checkbox"
            name=""
            id="category-5"
            className="text-primary-color focus:ring-0 rounded-sm cursor-pointer"
          />
          <label
            htmlFor="category-5"
            className="ml-2 cursor-pointer text-gray-600">
            Adidas
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name=""
            id="category-6"
            className="text-primary-color focus:ring-0 rounded-sm cursor-pointer"
          />
          <label
            htmlFor="category-6"
            className="ml-2 cursor-pointer text-gray-600">
            Nike
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name=""
            id="category-7"
            className="text-primary-color focus:ring-0 rounded-sm cursor-pointer"
          />
          <label
            htmlFor="category-7"
            className="ml-2 cursor-pointer text-gray-600">
            Puma
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name=""
            id="category-8"
            className="text-primary-color focus:ring-0 rounded-sm cursor-pointer"
          />
          <label
            htmlFor="category-8"
            className="ml-2 cursor-pointer text-gray-600">
            MLB
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductBrands;
