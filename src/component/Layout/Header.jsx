import React from "react";

const Header = () => {
  return (
    <header className="py-5 bg-white shadow-md">
      <div className="container flex items-center justify-between">
        {/* <!-- logo --> */}
        <a href="#">
          <img
            src="./public/images/logo.svg"
            alt="Logo Website"
            className="w-32 object-cover"
          />
        </a>
        {/* <!-- search bar --> */}
        <div className="flex items-center w-full max-w-2xl">
          <div className="whitespace-nowrap cursor-pointer border-2 border-primary-color border-r-0 rounded-l-md py-3 px-5 flex items-center space-x-3">
            <span className="font-normal italic">All Category</span>
            <i className="fa-solid fa-chevron-down text-sm mt-1 text-gray-500"></i>
          </div>
          <div className="relative w-full flex">
            <span className="absolute left-4 top-3 text-lg text-gray-500">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              type="text"
              className="w-full focus:border-gray-500 border-2 border-primary-color border-r-0 pl-12 py-3 pr-3 font-medium italic focus:outline-none placeholder-gray-500"
              placeholder="Search here ..."
            />
            <button className=" bg-primary-color rounded-r-md text-white px-8 hover:bg-transparent hover:text-primary-color">
              Search
            </button>
          </div>
        </div>

        {/* <!-- icons --> */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-center relative hover:text-primary-color">
            <i className="fa-regular fa-heart text-[26px]"></i>
            <div className="text-[14px] font-semibold font-roboto-mono leading-6">
              Whist list
            </div>
            <span className="absolute -top-2 right-4 w-5 h-5 rounded-full text-[13px] flex items-center justify-center bg-primary-color text-white">
              6
            </span>
          </a>
          <a href="#" className="text-center relative hover:text-primary-color">
            <i className="fa-solid fa-basket-shopping text-[26px]"></i>
            <div className="text-[14px] font-semibold font-roboto-mono leading-6">
              Cart
            </div>
            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-[13px] flex items-center justify-center bg-primary-color text-white">
              4
            </span>
          </a>
          <a href="#" className="text-center relative hover:text-primary-color">
            <i className="fa-regular fa-user text-[26px]"></i>
            <div className="text-[14px] font-semibold font-roboto-mono leading-6">
              Account
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
