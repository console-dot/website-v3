import React from "react";
import Card, { CardArray} from "./AboutUsCard"; // Import the CardArray component
import { useNavigate } from "react-router-dom";

export const AboutUs = ({ testimonials }) => {
  const navigate = useNavigate();
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
            <div className="h-0.5 bg-custom-purple md:w-24 w-16"></div>
            <div className="w-2 h-2 bg-gradient-to-tl from-custom-blue to-custom-purple rounded-full"></div>
            <div className="h-0.5 bg-custom-purple md:w-24 w-16"></div>
          </div>
        </div>
      </div>
      <div className="xl:pl-16 xl:pr-16 xl:pt-16 lg:pl-16 lg:pr-16 lg:pt-16 md:pl-16 md:pr-16 md:pt-16 pl-5 pr-5 pt-6  ">
        <Card testimonials={testimonials} />
        <div className="flex md:justify-end justify-center md:pt-3 pt-10 ">
        <button
          type="button"
          onClick={() =>navigate("/testimonials")} 
          className="text-custom-purple just border-[0.5px]bg-custom-lightBlue  rounded-full focus:outline-none transition-colors duration-300 hover:bg-gradient-to-tl  hover:from-custom-blue1 hover:to-custom-purple hover:text-custom-white active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue px-5 py-2.5 w-[182px] h-[54px] mt-3 bg-custom-lightBlue  font-Lato font-medium"
        >
          View All
        </button>
      </div>
      </div>
      
    </div>
  );
};
