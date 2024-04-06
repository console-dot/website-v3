import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

export const ContactForm = () => {
    const [optionsOpen, setOptionsOpen] = useState(false);

  const handleInputFocus = () => {
    setOptionsOpen(true);
  };

  const handleInputBlur = () => {
    setOptionsOpen(false);
  };
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8">
        <input
          type="text"
          id="first_name"
          className="bg-white shadow-lg text-webDescrip px-8 text-[16px] border focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Name"
          required
        />
        <input
          type="text"
          id="first_name"
          className="bg-white shadow-lg text-webDescrip px-8 text-[16px] border focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Email Address"
          required
        />
      </div>
      <div>
        <input
          type="text"
          id="first_name"
          className="bg-white shadow-lg text-webDescrip px-8 text-[16px] border focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Subject"
          required
        />
      </div>
      <div className="flex gap-8 justify-center items-center">
      <div className="relative w-full">
          <input
            type="text"
            id="input-group-1"
            className="bg-white shadow-lg  text-webDescrip px-8 text-[16px] border focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select model to inquire"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <div className="absolute inset-y-0 end-0 flex items-center pr-3.5 pointer-events-none">
            <FaAngleDown
              className={`text-webDescrip cursor-pointer transform transition-transform ${
                optionsOpen ? "rotate-180" : ""
              }`}
              onClick={() => setOptionsOpen(!optionsOpen)}
            />
          </div>
        </div>

        <input
          type="text"
          id="first_name"
          className="bg-white shadow-lg text-webDescrip px-8 text-[16px] border focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Phone Number (optional)"
          required
        />
      </div>
      <div className="flex gap-8">
        <input
          type="text"
          id="first_name"
          className="bg-white shadow-lg text-webDescrip px-8 text-[16px] border focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Company Name (if applicable)"
          required
        />
        <input
          type="text"
          id="first_name"
          className="bg-white shadow-lg text-webDescrip px-8 text-[16px] border focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Preferred Contact Method"
          required
        />
      </div>
      <div className="w-full flex justify-center items-center mt-4">
        <button className="text-white text-[16px] w-[300px] px-5 py-2.5 bg-gradient-to-r from-custom-blue to-custom-purple hover:to-custom-purple-hover hover:from-custom-blue-hover rounded-full focus:outline-none active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue">
          <p className="font-Lato text-base font-medium leading-[28px] tracking-normal">
            Submit
          </p>
        </button>
      </div>
    </div>
  );
};
