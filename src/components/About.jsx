import React from "react";
import about_pic from "../Assets/aboutpic.png";

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-6" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16 ">
        <div className="grid-cols-2 p-5">
          <h1 className="primary-color text-4xl font-bold mb-4">About Me</h1>
          <p className="text-base md:text-xl ">
            My name is Bilal Majeed.I have done Bachelor's in Software
            Engineering.I am frontend developer with good knowledge of frontend
            technologies including Html,CSS,Javascript,React Js and Tailwind
            CSS. I have worked on some web applcations including E-commerce
            Store.I am a Teacher and Trainer as well, teaching students Computer
            Scinces and related subjects.{" "}
          </p>
        </div>
        <div className=" h-auto rounded-2xl grid-cols-1">
          <img src={about_pic} className=" w-[200px] md:w-[300px] h-auto rounded-3xl mx-auto mt-6 md:py-0" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
