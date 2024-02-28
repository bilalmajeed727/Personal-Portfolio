import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="max-w-[1200px] mx-auto bg-black sm:py-20 py-5" id="contact">
      <div className="text-center">
        <h1 className="text-4xl font-bold leading-tight primary-color">
          Contact Me
        </h1>
      </div>
      <div className="max-w-[800px] mx-auto ">
        <div className="bg-[#161616] rounded-xl mt-6">
          <div className="p-10">
            <form action="https://getform.io/f/penBZPe7" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="email"
                      placeholder="Your Email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="mt-2.5">
                    <textarea
                      type="text"
                      name="message"
                      placeholder="Your Message"
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="mt-2.5">
                    <button
                      type="submit"
                      className="text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md"
                      onClick={(e) => {
                        if (!email) {
                          e.preventDefault();
                        } else if(!name) {
                            e.preventDefault();
                        } else if(!message){
                            e.preventDefault();
                        } else return null;
                      }}
                    >
                      {" "}
                      Send{" "}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
