import React from "react";
import Card, { CardArray} from "./AboutUsCard"; // Import the CardArray component

export const AboutUs = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center  w-[100%]  mt-6 md:mt-16 h-auto">
        <div className="font-Lato md:text-[16px] text-[12px] text-custom-blue leading-none">
          Testimonials
        </div>
        <div className="font-Poppins md:text-[28px] text-[18px] font-bold leading-10 text-custom-purple md:mt-3 mt-1  ">
          WHAT THEY SAY ABOUT US
        </div>
        <div className="font-Rubik text-4xl leading-none md:mt-3 mt-1">
          <div className="flex items-center">
            <div class="h-0.5 bg-custom-purple md:w-24 w-16"></div>
            <div class="w-2 h-2 bg-gradient-to-tl from-custom-blue to-custom-purple rounded-full"></div>
            <div class="h-0.5 bg-custom-purple md:w-24 w-16"></div>
          </div>
        </div>
      </div>
      <div className="pl-16 pr-16 pt-16  ">
        <Card />
        <div className="flex md:justify-end justify-center md:mt-0 mt-2 ">
        <button
          type="button"
          onClick=""
          className="text-custom-purple just border-[0.5px] hover:bg-custom-purple hover:text-offwhite px-5 py-2.5 w-[182px] h-[54px] mt-3 bg-custom-lightBlue rounded-full font-Lato font-medium"
        >
          View All
        </button>
      </div>
      </div>
      
    </div>
  );
};
