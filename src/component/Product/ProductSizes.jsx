import React from "react";

const ProductSizes = () => {
  return (
    <div>
      <h3 className="heading__3">Size</h3>
      <div className="flex items-center gap-2.5">
        <div className="size-selector">
          <input type="radio" name="size" id="size-s" className="hidden" />
          <label
            htmlFor="size-s"
            className="w-6 h-6 rounded-sm border border-gray-300 cursor-pointer flex items-center justify-center text-[13px] text-gray-600 font-medium uppercase">
            S
          </label>
        </div>
        <div className="size-selector">
          <input type="radio" name="size" id="size-m" className="hidden" />
          <label
            htmlFor="size-m"
            className="w-6 h-6 rounded-sm border border-gray-300 cursor-pointer flex items-center justify-center text-[13px] text-gray-600 font-medium uppercase">
            M
          </label>
        </div>
        <div className="size-selector">
          <input type="radio" name="size" id="size-l" className="hidden" />
          <label
            htmlFor="size-l"
            className="w-6 h-6 rounded-sm border border-gray-300 cursor-pointer flex items-center justify-center text-[13px] text-gray-600 font-medium uppercase">
            L
          </label>
        </div>
        <div className="size-selector">
          <input type="radio" name="size" id="size-xl" className="hidden" />
          <label
            htmlFor="size-xl"
            className="w-6 h-6 rounded-sm border border-gray-300 cursor-pointer flex items-center justify-center text-[13px] text-gray-600 font-medium uppercase">
            XL
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductSizes;
