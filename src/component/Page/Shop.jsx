import React, { useState } from "react";
import ProductsList from "../Product/ProductsList";
import ProductCategory from "../Product/ProductCategory";
import ProductBrands from "../Product/ProductBrands";
import ProductPrice from "../Product/ProductPrice";
import ProductSizes from "../Product/ProductSizes";
import ProductColor from "../Product/ProductColor";
import ProductSorting from "../Product/ProductSorting";

const INIT_PRODUCTS = [
  {
    id: 1,
    name: "PELAGIA Lounge",
    desc: "Outdoor Modular Lounge",
    price: 499.0,
    img: "./images/products/product1.jpg",
    rating: 150,
    category: "Men",
    brand: "Adidas",
    size: "S",
  },
  {
    id: 2,
    name: "AVERY BED",
    desc: "Queen Bed",
    price: 549.0,
    img: "./images/products/product2.jpg",
    rating: 150,
    category: "Women",
    brand: "Nike",
    size: "M",
  },
  {
    id: 3,
    name: "WHITE BED",
    desc: "King Bed",
    price: 699.0,
    img: "./images/products/product3.jpg",
    rating: 150,
    category: "Bedroom",
    brand: "MLB",
    size: "M",
  },
  {
    id: 4,
    name: "GUYER CHAIR",
    desc: "Queen Headboard",
    price: 45.0,
    img: "./images/products/product4.jpg",
    rating: 150,
    category: "Sofa",
    brand: "MLB",
    size: "M",
  },
  {
    id: 5,
    name: "MADELINE SOFA",
    desc: "Fabric Sofa Bed",
    price: 45.0,
    img: "./images/products/product10.jpg",
    rating: 150,
    category: "Sofa",
    brand: "MLB",
    size: "L",
  },
  {
    id: 6,
    name: "BIANCO CHAIR",
    desc: "Fabric Accent Chair",
    price: 59.0,
    img: "./images/products/product6.jpg",
    rating: 150,
    category: "Sofa",
    brand: "MLB",
    size: "M",
  },
  {
    id: 7,
    name: "PELAGIA LOUNGE",
    desc: "Outdoor Modular Lounge",
    price: 499.0,
    img: "./images/products/product12.jpg",
    rating: 150,
    category: "Sofa",
    brand: "Nike",
    size: "S",
  },
  {
    id: 8,
    name: "BLACK ARCHIE",
    desc: "Black Bedside",
    price: 159.0,
    img: "./images/products/product8.jpg",
    rating: 176,
    category: "Sofa",
    brand: "Nike",
    size: "S",
  },
  {
    id: 9,
    name: "BLACK ARCHIE",
    desc: "Black Bedside",
    price: 159.0,
    img: "../.././images/products/product9.jpg",
    rating: 150,
    category: "Chair",
    brand: "Nike",
    size: "S",
  },
];

const Shop = () => {
  const [products, setProducts] = useState(INIT_PRODUCTS);
  const [selectedCategories, setSelectedCategories] = useState([]);
  let allCategories = products.map((product) => product.category);
  const categories = [
    "All",
    ...allCategories.filter((item, i) => {
      return allCategories.indexOf(item) === i;
    }),
  ];

  const filterProductHandler = (e, category) => {
    let temp = selectedCategories;
    if (e.target.checked) {
      temp.push(category);
      setSelectedCategories(temp);
    } else {
      const index = temp.indexOf((item) => item === category);
      temp.splice(index, 1);
      setSelectedCategories(temp);
    }
    if (category === "All" || selectedCategories.length === 0) {
      setProducts([...INIT_PRODUCTS]);
    } else {
      const result = INIT_PRODUCTS.filter((product) => {
        if (selectedCategories.includes(product.category)) {
          return true;
        } else {
          return false;
        }
      });
      setProducts(result);
    }
  };
  const productCategory = React.useMemo(
    () => (
      <ProductCategory
        categories={categories}
        onFilterProduct={filterProductHandler}
      />
    ),
    []
  );
  const productBrands = React.useMemo(() => <ProductBrands />, []);
  const productPrice = React.useMemo(() => <ProductPrice />, []);
  const productSize = React.useMemo(() => <ProductSizes />, []);
  const productColor = React.useMemo(() => <ProductColor />, []);
  return (
    <main className="pb-14">
      <div className="container grid grid-cols-4 gap-x-5 items-start pt-5">
        {/* <!-- sidebar --> */}
        <div className="col-span-1 bg-white px-4 pt-1 pb-5 shadow-lg rounded overflow-hidden">
          <div className="divide-y-2 divide-gray-300 space-y-5">
            {productCategory}
            {productBrands}
            {productPrice}
            {productSize}
            {productColor}
          </div>
        </div>
        <div className="col-span-3">
          {/* <!-- sorting --> */}
          <div className="flex items-center justify-between mb-5">
            {/* <!-- sorting product --> */}
            <ProductSorting />
            {/* <!-- sorting column --> */}
            <div className="flex items-center gap-2">
              <div className="border border-primary-color w-10 h-9 rounded flex items-center justify-center bg-primary-color text-white cursor-pointer">
                <i className="fas fa-th text-lg"></i>
              </div>
              <div className="border-[1.5px] border-gray-400 w-10 h-9 rounded flex items-center justify-center bg-transparent text-gray-800 cursor-pointer">
                <i className="fa-solid fa-list-ul text-lg"></i>
              </div>
            </div>
          </div>
          {/* <!-- products list --> */}
          <ProductsList products={products} />
          {/* <!-- Pagination --> */}
          <ul className="flex items-center justify-center gap-x-3 mt-7">
            <li>
              <a
                href="#"
                className="pagination__link bg-primary-color text-white">
                1
              </a>
            </li>
            <li>
              <a href="#" className="pagination__link border-gray-300">
                2
              </a>
            </li>
            <li>
              <a href="#" className="pagination__link border-gray-300">
                3
              </a>
            </li>
            <li>
              <a href="#" className="pagination__link border-gray-300">
                4
              </a>
            </li>
            <li>
              <a href="#" className="pagination__link border-gray-300">
                5
              </a>
            </li>
            <li>
              <a href="#" className="pagination__link border-gray-300 group">
                <i className="fa-solid fa-arrow-right-long text-[13px] group-hover:text-white"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Shop;
