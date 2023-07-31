import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="container flex items-center">
          {/* <!-- all categories --> */}
          <div className="flex items-center space-x-3 text-white py-5 px-10 bg-primary-color relative group">
            <i className="fa-solid fa-bars text-base"></i>
            <span className="text-[17px] font-normal capitalize">
              All categories
            </span>
            <div className="absolute -left-3 w-full top-full bg-white shadow-md rounded-bl-md rounded-br-md py-4 divide-y-[1px] divide-dashed divide-gray-300 opacity-0 group-hover:opacity-100 transition ease-linear duration-500 invisible group-hover:visible">
              <a
                href="#"
                className="flex items-center space-x-8 px-5 py-3 hover:bg-gray-200">
                <i className="fa-solid fa-couch text-pink-400 text-lg w-6"></i>
                <span className=" text-gray-600 text-[15px]">Sofa</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-8 px-5 py-3 hover:bg-gray-200">
                <i className="fa-solid fa-shoe-prints text-pink-400 text-xl w-6 transform -rotate-90"></i>
                <span className=" text-gray-600 text-[15px]">Shoes</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-8 px-5 py-3 hover:bg-gray-200">
                <i className="fa-solid fa-person text-pink-400 text-2xl w-6"></i>
                <span className=" text-gray-600 text-[15px]">Men</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-8 px-5 py-3 hover:bg-gray-200">
                <i className="fa-solid fa-person-dress text-pink-400 text-2xl w-6"></i>
                <span className=" text-gray-600 text-[15px]">Women</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-8 px-5 py-3 hover:bg-gray-200">
                <i className="fa-regular fa-lightbulb text-pink-400 text-xl w-6"></i>
                <span className=" text-gray-600 text-[15px]">Electronic</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-8 px-5 py-3 hover:bg-gray-200">
                <i className="fa-solid fa-headphones text-pink-400 text-xl w-6"></i>
                <span className=" text-gray-600 text-[15px]">Headphones</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-8 px-5 py-3 hover:bg-gray-200">
                <i className="fa-solid fa-tv text-pink-400 text-xl w-6"></i>
                <span className=" text-gray-600 text-[15px]">TV</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-8 px-5 py-3 hover:bg-gray-200">
                <i className="fa-solid fa-computer text-pink-400 text-2xl w-6"></i>
                <span className=" text-gray-600 text-[15px]">Computer</span>
              </a>
            </div>
          </div>
          {/* <!-- nav link --> */}
          <div className="flex items-center justify-between flex-grow pl-12">
            <div className="flex items-center space-x-7 capitalize text-[17px] font-normal">
              <a
                href="index.html"
                className="text-gray-300 hover:underline hover:underline-offset-4 hover:text-white">
                Home
              </a>
              <a
                href="shop.html"
                className="text-gray-300 hover:underline hover:underline-offset-4 hover:text-white">
                Shop
              </a>
              <a
                href="#"
                className="text-gray-300 hover:underline hover:underline-offset-4 hover:text-white">
                Page
              </a>
              <a
                href="#"
                className="text-gray-300 hover:underline hover:underline-offset-4 hover:text-white">
                Contact us
              </a>
            </div>
          </div>
          {/* <!-- login / register --> */}
          <div className="flex items-center space-x-1.5 text-[17px] font-normal text-gray-200">
            <a href="login.html" className="hover:text-primary-color">
              Login
            </a>
            <span>/</span>
            <a href="register.html" className="hover:text-primary-color">
              Register
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
