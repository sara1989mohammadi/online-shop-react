import React from "react";
import ProductsItem from "./ProductsItem";

const ProductsList = (props) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {props.products.map((product, index) => (
        <ProductsItem product={product} key={index} />
      ))}
    </div>
  );
};

export default ProductsList;
