import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaInstagram } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-20 px-4 absolute text-white z-10 w-full">
      <div className={nav ? "z-10 text-black" : ""}>
        <h1 className="cursor-pointer">TRAVELS.</h1>
      </div>
      <ul className="hidden md:flex">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Destinations</li>
        <li className="cursor-pointer">Travel</li>
        <li className="cursor-pointer">View</li>
        <li className="cursor-pointer">Book</li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch size={20} className="mr-2 cursor-pointer" />
        <BsPerson size={20} className="cursor-pointer" />
      </div>

      {/* Hamburger Menu */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? <AiOutlineClose size={20} className="text-black" /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={nav ? "mobile-nav left-0 absolute top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col text-black" : "mobile-nav-out absolute left-[-100%] top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col text-black"}>
        <ul>
          <br />
          <br />
          <li className="border-b">Home</li>
          <li className="border-b">Destinations</li>
          <li className="border-b">Travel</li>
          <li className="border-b">View</li>
          <li className="border-b">Book</li>
          <div className="flex flex-col">
            <button className="my-6">Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-8">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
