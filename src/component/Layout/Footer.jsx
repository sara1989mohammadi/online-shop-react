import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-50">
        <div className="container py-16">
          <div className="flex gap-x-10 w-full">
            <div className="flex-1 w-[33%] text-[#2B2D42]">
              <img src="./public/images/logo.svg" alt="Logo Website" />
              <p className="text-[15px] leading-6 my-4 font-roboto">
                Lorem ipsum, or lipsum as it is sometimes kno wn, is dummy text
                used in laying out print, gra phic or web designs the passage.
              </p>
              <h5 className="uppercase text-lg font-roboto font-semibold">
                Newsletter
              </h5>
              <form method="post" className="flex items-center w-full mt-4">
                <input
                  type="email"
                  className="w-3/4 text-[13px] font-medium bg-transparent focus:outline-none focus:ring-1 focus:ring-primary-color px-4 py-2.5 border border-gray-400 border-r-0 rounded-tl rounded-bl"
                  name=""
                  id=""
                  placeholder="Your email address"
                />
                <button className="btn--subscribe">Subscribe</button>
              </form>
            </div>
            <div className="flex-none w-[17%] ">
              <h6 className="heading__6">My Account</h6>
              <ul className="mt-4 text-[#2B2D42] text-[15px]">
                <li className="mb-2.5">
                  <a
                    href="#"
                    className=" hover:text-primary-color hover:underline hover:underline-offset-[3px]">
                    Orders
                  </a>
                </li>
                <li className="mb-2.5">
                  <a
                    href="#"
                    className=" hover:text-primary-color hover:underline hover:underline-offset-[3px]">
                    Wishlist
                  </a>
                </li>
                <li className="mb-2.5">
                  <a
                    href="#"
                    className=" hover:text-primary-color hover:underline hover:underline-offset-[3px]">
                    Track Order
                  </a>
                </li>
                <li className="mb-2.5">
                  <a
                    href="#"
                    className=" hover:text-primary-color hover:underline hover:underline-offset-[3px]">
                    Manager Account
                  </a>
                </li>
                <li className="mb-2.5">
                  <a
                    href="#"
                    className=" hover:text-primary-color hover:underline hover:underline-offset-[3px]">
                    Return Order
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-none w-[17%] ">
              <h6 className="heading__6">INFORMATION</h6>
              <ul className="mt-4 text-[#2B2D42] text-[15px]">
                <li className="mb-2.5">
                  <a
                    href="#"
                    className=" hover:text-primary-color hover:underline hover:underline-offset-[3px]">
                    About Us
                  </a>
                </li>
                <li className="mb-2.5">
                  <a
                    href="#"
                    className=" hover:text-primary-color hover:underline hover:underline-offset-[3px]">
                    Return Policy
                  </a>
                </li>
                <li className="mb-2.5">
                  <a
                    href="#"
                    className=" hover:text-primary-color hover:underline hover:underline-offset-[3px]">
                    Terms & condition
                  </a>
                </li>
                <li className="mb-2.5">
                  <a
                    href="#"
                    className=" hover:text-primary-color hover:underline hover:underline-offset-[3px]">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2.5">
                  <a
                    href="#"
                    className=" hover:text-primary-color hover:underline hover:underline-offset-[3px]">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1 w-[33%]">
              <h6 className="heading__6 mb-3">Contact</h6>
              <div className="address flex items-start gap-x-4 text-[#2B2D42] mb-2.5">
                <i className="fa-solid fa-location-dot text-[15px] mt-1.5"></i>
                <p className="text-[15px] font-roboto-mono italic">
                  7895 Dr New Albuquerue, NM 19800,United States Of America
                </p>
              </div>
              <div className="phone flex items-start gap-x-4 text-[#2B2D42] mb-2.5">
                <i className="fa-solid fa-phone text-[15px] mt-1.5"></i>
                <a
                  href="tel:+0942898298"
                  className="text-[15px] font-roboto-mono italic hover:text-primary-color hover:underline hover:underline-offset-4">
                  + 094.2898.298
                </a>
                ,
                <a
                  href="tel:+0942898298"
                  className="text-[15px] font-roboto-mono italic hover:text-primary-color hover:underline hover:underline-offset-4">
                  +566 254 575
                </a>
              </div>
              <div className="mail flex items-start gap-x-4 text-[#2B2D42] mb-2.5">
                <i className="fa-solid fa-envelope text-[15px] mt-1.5"></i>
                <a
                  href="mailto:thanhnam290596@gmail.com"
                  className="text-[15px] font-roboto-mono italic hover:text-primary-color hover:underline hover:underline-offset-4">
                  thanhnam290596@gmail.com
                </a>
              </div>
              <div className="socials-link flex space-x-3 mt-6">
                <a href="#" title="Facebook">
                  <i className="fa-brands fa-facebook-f flex items-center justify-center w-9 h-9 rounded-full bg-[#3B5998] text-white text-base"></i>
                </a>
                <a href="#" title="Twitter">
                  <i className="fa-brands fa-twitter flex items-center justify-center w-9 h-9 rounded-full bg-[#00ACEE] text-white text-base"></i>
                </a>
                <a href="#" title="Instagram">
                  <i className="fa-brands fa-instagram flex items-center justify-center w-9 h-9 rounded-full bg-[#D53982] text-white text-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-800">
        <div className="container py-4">
          <div className="grid grid-cols-2">
            <div className="flex items-center">
              <p className="text-[16px] text-white">
                © RAFCART - All Rights Reserved
              </p>
            </div>
            <div>
              <img
                src="./public/images/products/payment-method.png"
                className="w-[333px] float-right h-7 object-contain"
                alt="Image payment-method"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
