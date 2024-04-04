import React from "react";
import { CardArray} from "./AboutUsCard"; // Import the CardArray component

export const AboutUs = () => {
  return (
    <div className="w-[95% ]">
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
      <div className="mt-6">
        <CardArray />
      </div>
    </div>
  );
};
