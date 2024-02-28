import React from "react";
import javascript_icon from "../Assets/javascript.png";
import html_icon from "../Assets/html.png";
import css_icon from "../Assets/CSS.png";
import tailwind_icon from "../Assets/tailwind.jpg";
import react_icon from "../Assets/react.png";
import firebase_icon from "../Assets/Firebase 2.png";
import github_icon from "../Assets/github logo.png";

const Skills = () => {
  return (
    <div className="bg-black text-gray-400 md:h-[150px] mx-auto max-w-[1200px] flex flex-col md:ali border border-gray-500 md:border-none">
      <h2 className="text-gray-700 text-2xl md:text-4xl m-4 font-bold mx-auto my-5">
        My Tech Stack
      </h2>
      <div className="grid md:grid-cols-7 grid-cols-3 gap-5 ml-10">
        <div className="flex flex-col items-center w-[80px] md:w-[100px]">
          <img src={html_icon} alt="Html" className="rounded-full"/>
          <p>Html</p>
        </div>
        <div className="flex flex-col items-center w-[80px] md:w-[100px]">
          <img src={css_icon} alt="css" className="rounded-full" />
          <p>CSS</p>
        </div>
        <div className="flex flex-col items-center w-[80px] md:w-[100px]">
          <img src={javascript_icon} alt="javascript" className="rounded-full" />
          <p>Javascript</p>
        </div>
        <div className="flex flex-col items-center w-[80px] md:w-[100px]">
          <img src={react_icon} alt="react"  className="rounded-full"/>
          <p>React</p>
        </div>
        <div className="flex flex-col items-center w-[80px] md:w-[100px]">
          <img src={tailwind_icon} alt="tailwind" className="rounded-full"/>
          <p>Tailwind </p>
        </div>
        <div className="flex flex-col items-center w-[80px] md:w-[100px]">
          <img src={firebase_icon} alt="firebase" className="rounded-full"/>
          <p>Firebase</p>
        </div>
        <div className="flex flex-col items-center w-[80px] md:w-[100px] ">
          <img src={github_icon} alt="github" className="rounded-full"/>
          <p>Git & Github</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
