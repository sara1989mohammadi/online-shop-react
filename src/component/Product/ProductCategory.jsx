import React from "react";

const ProductCategory = ({ categories, onFilterProduct }) => {
  return (
    <div>
      <h3 className="heading__3">CATEGORIES</h3>
      <div className="space-y-2.5">
        {categories.map((category, index) => (
          <div className="flex items-center" key={index}>
            <input
              type="checkbox"
              name=""
              id="category-1"
              className="text-primary-color focus:ring-0 rounded-sm cursor-pointer"
              onChange={(e) => onFilterProduct(e, category)}
            />
            <label
              htmlFor="category-1"
              className="ml-2 cursor-pointer text-gray-600">
              {category}
            </label>
            <p className="ml-auto">(16)</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
