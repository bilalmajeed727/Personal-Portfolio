import React from "react";
import github_icon from "../Assets/github logo.png";
import linkdin from "../Assets/linkdin logo.png";

const Footer = () => {
  return (
    <div className=" max-w-[1200px] mx-auto my-10 flex flex-col items-center gap-5">
      <span className="text-4xl font-semibold primary-color text-center grid-cols-1">Bilal .</span>
      <div className="flex gap-5 ">
        <a href="https://github.com/bilalmajeed727">
          <img src={github_icon} alt="" className="rounded-full size-[50px] md:size-[80px] hover:scale-110  duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/bilal-majeed-215534228/">
          <img src={linkdin} alt="" className="rounded-full size-[50px] md:size-[80px] hover:scale-110  duration-300" />
        </a>
      </div>
      <div className="flex flex-col items-center">
        <p className="primary-color text-xl">bilalmajeed8719@gmail.com</p>
        <p className="primary-color  text-xl">+923369826719</p>
      </div>
    </div>
  );
};

export default Footer;
