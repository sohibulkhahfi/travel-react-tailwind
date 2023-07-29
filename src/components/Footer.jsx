import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center">
          <h1 className="cursor-pointer">TRAVELS.</h1>
          <div className="flex justify-between my-4 w-full sm:max-w-[280px]">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="lg:flex">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Partnership</li>
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">Newsroom</li>
            <li className="cursor-pointer">Advertising</li>
          </ul>
          <ul className="text-right lg:flex">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Destinations</li>
            <li className="cursor-pointer">Travel</li>
            <li className="cursor-pointer">View</li>
            <li className="cursor-pointer">Book</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
