import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaFax,
  FaMapMarkerAlt,
} from "react-icons/fa"; // إضافة الأيقونات اللازمة
import visaLogo from "../images/visa.png"; // Adjust the path according to your project structure
import mastercard from "../images/mastercard.png"; // Adjust the path according to your project structure
import paypal from "../images/paypal.png";
import american from "../images/american-express.png";
import imgFoot from "../images/logofooter.png"; // Adjust the path according to your project structure

const Footer = () => {
  return (
    <footer className="bg-[#f7f7f7] text-white py-2 ">
      <div className="container mx-auto px-4 mt-9">
        <div className="flex justify-between ">
          <div className=" ">
            <h1 className="text-dark text-2xl font-bold">KNOW IT ALL FIRST!</h1>
            <p className="text-[#a7a7a7] font-semibold">
              Never Miss Anything From Multikart By Signing Up To Our
              Newsletter.
            </p>
          </div>

          <div className="hidden md:block w-[2px] h-19 bg-gray-300 mx-4 "></div>

          <div className=" flex ml-12">
            <input
              type="text"
              placeholder="Enter Your Email"
              class="block  p-3 text-lg text-dark border border-blue rounded-lg bg-gray-50 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 "
            />
            <button
              type="button"
              class=" ml-3 bg-slate-600 hover:text-blue-900 border border-blue-700 hover:bg-white font-medium rounded-sm text-sm px-5 py-2.5 text-center me-2 mb-1   dark:hover:text-blue-900 dark:hover:bg-white"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="ml-4 flex justify-center">
          <hr class="border-b border-gray-900 w-[100%] mt-5 mb-5  my-4" />
        </div>
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/4">
            <img src={imgFoot} alt="Visa" className="h-8 mx-2" />
            <p className="mt-4 text-sm text-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Curabitur vel sapien et lacus malesuada aliquam.
            </p>
            <div className="flex py-4 px-12 mr-10 justify-between">
              <a href="#" className="text-[#000000] hover:text-[#38386b]">
                <FaFacebook size={25} />
              </a>
              <a href="#" className="text-[#000000] hover:text-[#38386b]">
                <FaTwitter size={25} />
              </a>
              <a href="#" className="text-[#000000] hover:text-[#38386b]">
                <FaInstagram size={25} />
              </a>
              <a href="#" className="text-[#000000] hover:text-[#38386b]">
                <FaLinkedin size={25} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/5 mt-8 md:mt-0">
            <h2 className="text-2xl text-dark font-bold ">My Account</h2>
            <ul className="mt-4">
              <li className="mb-1">
                <a
                  href="#"
                  className="text-gray-400 font-semibold hover:text-black"
                >
                  Womenes
                </a>
              </li>

              <li className="mb-1">
                <a
                  href="#"
                  className="text-gray-400 font-semibold pt-10 hover:text-black"
                >
                  Clothing
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-gray-400 font-semibold hover:text-black"
                >
                  Accessories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 font-semibold hover:text-black"
                >
                  Featured
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media (ابقاء الجزء القديم كما هو) */}
          <div className="w-full md:w-1/5 mt-8 md:mt-0">
            <h2 className="text-2xl text-dark font-bold ">Why We Choose</h2>
            <ul className="mt-4">
              <li className="mb-1">
                <a
                  href="#"
                  className="text-gray-400 font-semibold hover:text-black"
                >
                  shipping & return
                </a>
              </li>

              <li className="mb-1">
                <a
                  href="#"
                  className="text-gray-400 font-semibold pt-10 hover:text-black"
                >
                  secure shopping
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-gray-400 font-semibold hover:text-black"
                >
                  gallary
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 font-semibold hover:text-black"
                >
                  affiliates
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 font-semibold hover:text-black"
                >
                  contacts
                </a>
              </li>
            </ul>
          </div>

          {/* Store Information */}
          <div className="w-full md:w-1/4 mt-8 md:mt-0">
            <h2 className="text-2xl text-dark font-bold">Store Information</h2>
            <ul className="mt-4">
              <li className="flex items-center mb-2 text-gray-400 font-semibold">
                <FaMapMarkerAlt className="mr-2" /> Multikart Demo Store, Demo
                store India 345-659
              </li>
              <li className="flex items-center mb-2 text-gray-400 font-semibold">
                <FaPhone className="mr-2" /> Call Us: 123-456-7898
              </li>
              <li className="flex items-center mb-2 text-gray-400 font-semibold">
                <FaEnvelope className="mr-2" /> Email Us: Support@Fiot.com
              </li>
              <li className="flex items-center mb-2 text-gray-400 font-semibold">
                <FaFax className="mr-2" /> Fax: 123456
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="flex flex-wrap w-full bg-slate-50 justify-between h-14 mb-[-10px] items-center mt-8">
          {/* Copyright */}
          <div className="text-center w-full md:w-1/2">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()}-2025 themeforest powered by
              pixelstrap
            </p>
          </div>

          {/* Payment Methods */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end ">
            <img src={visaLogo} alt="Visa" className="h-8 mx-2" />
            <img src={mastercard} alt="mastercard" className="h-8 mx-2" />
            <img src={paypal} alt="paypal" className="h-8 mx-2" />
            <img src={american} alt="american-express" className="h-8 mx-2" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
