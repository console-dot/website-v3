import React from "react";
import { CiSearch } from "react-icons/ci";

export const SearchInput = () => {
  return (
    <div className="w-full p-3 shadow-sm">
      <div className="relative">
        <div className="absolute top-4 left-4">
          <CiSearch className="text-2xl" />
        </div>
        <input
          type="text"
          className="bg-white h-14 w-full px-12 pr-0 rounded-lg focus:outline-none pl-12"
          name=""
        />
        <span className="absolute top-1/2 transform -translate-y-1/2 right-4">
          <button
            type="button"
            className="text-white px-5 py-2.5 w-[172px] h-[50px] bg-custom-purple rounded-full"
          >
            <p className="font-Lato text-base font-medium leading-[28px] tracking-normal text-center">
              Search
            </p>
          </button>
        </span>
      </div>
      
    </div>
  );
};
