import React from "react";
import e_commerce from "../Assets/e-commerce ss.png";
import crud from "../Assets/crud ss.png";
import auth from "../Assets/Authentication SS.png";

const Work = () => {
  return (
    <div className=" max-w-[1200px] mx-auto p-5" id="work">
      <div>
        <p className="primary-color font-bold mb-3 text-4xl">Work</p>
        <p className="text-gray-400">Check out some of my recent work!</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mt-5">
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative">
          <img src={e_commerce} />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider ">E-commerce Store</span>
            <div className="pt-8 text-center">
              <a href="https://e-commerce-store-44267.web.app">
                <button className="px-4 py-3 rounded-lg text-center m-2 bg-white text-gray-700 font-bold text-lg">
                  Link
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative">
          <img src={auth} />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider ">Authentication</span>
            <div className="pt-8 text-center">
              <a href="https://fir-authentication-e4a7a.web.app">
                <button className="px-4 py-3 rounded-lg text-center m-2 bg-white text-gray-700 font-bold text-lg">
                  Link
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative">
          <img src={crud} />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider ">CRUD Application</span>
            <div className="pt-8 text-center">
              <a href="https://crud-application-e9cb8.web.app">
                <button className="px-4 py-3 rounded-lg text-center m-2 bg-white text-gray-700 font-bold text-lg">
                  Link
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
