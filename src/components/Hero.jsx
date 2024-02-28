import React from "react";
import hero_image from "../Assets/Hero image.png";
import {TypeAnimation} from 'react-type-animation'

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto bg-black py-8 md:h-[70vh]">

      <div className="col-span-1 mx-auto my-auto w-[200px] lg:w-[250px]">
        <img className="rounded-full h-auto " src={hero_image} alt="hero image" />
      </div>

      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-6xl ">
            <span className="primary-color">
                I'm a
            </span> <br />
            <TypeAnimation
            sequence={[
                'Frontend Dev',
                1000,
                'React Developer',
                1000,
                'Web Developer',
                1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}

            />


        </h1>
        <p className="text-white sm:text-lg lg:text-xl my-6">
            My name is Bilal, i have 2+ years of web development expereince.
        </p>
        <div >
            <a className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white" href="/">
                Download cv
            </a>
            <a className="px-6 py-3 w-full rounded-xl mr-4 border border-gray-500 hover:bg-gradient-to-br from-orange-500 to-pink-500 hover:border-none text-white" href="#contact">
                Contact
            </a>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
