import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);


  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <div className="bg-black h-[100px] border border-gray-600 text-gray-400 max-w-[1200px] mx-auto flex justify-between items-center ">

      <h1 className="primary-color text-3xl font-bold ml-4">BILAL .</h1>
      <ul className="hidden md:flex">
        <a href="#about">
          <li className="p-5">
            About
          </li>
        </a>
        <a href="#work">
          <li className="p-5">
            Work
          </li>
        </a>
        <a href="#contact">


          <li className="p-5">
            Contact
          </li>
        </a>
      </ul>


      <div className="block md:hidden text-white mr-6" onClick={handleNav}>
        {nav ? (
          <AiOutlineClose size={20} />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>

      <div className={nav ? 'z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500 py-5' : 'fixed left-[-100%]'}>
        <h1 className="primary-color text-3xl font-bold m-4">BILAL .</h1>
        <ul className="block" onClick={() => {
          setNav(false)
        }}>
          <a href="#about">
            <li className="p-5">
              About
            </li>
          </a>
          <a href="#work">
            <li className="p-5">
              Work
            </li>
          </a>
          <a href="#contact">
            <li className="p-5">
              Contact
            </li>
          </a>
        </ul>
      </div>


    </div>
  );
};

export default Navbar;
