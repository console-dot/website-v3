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
      <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row xs:flex-col xxs:flex-col gap-8">
        <input
          type="text"
          id="first_name"
          className="bg-white shadow-lg text-webDescrip px-8 text-[16px] border focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Name"
          required
        />
        <input
          type="text"
          id="email"
          className="bg-white shadow-lg text-webDescrip px-8 text-[16px] border focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Email Address"
          required
        />
      </div>
      <div>
        <input
          type="text"
          id="subject"
          className="bg-white shadow-lg text-webDescrip px-8 text-[16px] border focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Subject"
          required
        />
      </div>
      <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row xs:flex-col xxs:flex-col gap-8">
        <select
          id="model"
          className="bg-white shadow-lg text-webDescrip px-8 text-[16px] border focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        >
          <option value="" disabled selected hidden>
            Select model to inquire
          </option>
          <option value="M1">M1</option>
          <option value="M2">M2</option>
          <option value="M3">M3</option>
          <option value="M4">M4</option>
        </select>
        <input
          type="text"
          id="phone"
          className="bg-white shadow-lg text-webDescrip px-8 text-[16px] border focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Phone Number (optional)"
          required
        />
      </div>
      <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row xs:flex-col xxs:flex-col gap-8">
        <input
          type="text"
          id="companyName"
          className="bg-white shadow-lg text-webDescrip px-8 text-[16px] border focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Company Name (if applicable)"
          required
        />
        <input
          type="text"
          id="contact"
          className="bg-white shadow-lg text-webDescrip px-8 text-[16px] border focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Preferred Contact Method"
          required
        />
      </div>
      <div className="w-full flex justify-center items-center">
        <button className="text-white text-[16px] w-[300px] px-5 py-2.5 bg-gradient-to-r from-fromclr to-toclr hover:bg-gradient-to-r hover:from-toclr hover:to-fromclr rounded-full focus:outline-none active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue">
          <p className="font-Lato text-base font-medium leading-[28px] tracking-normal">
            Submit
          </p>
        </button>
      </div>
    </div>
  );
};
