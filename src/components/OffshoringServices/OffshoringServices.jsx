import React from "react";
import {CardArray} from "./OffshoringServicesCard";
import { imageGit } from "../../assets/images";
const OffshoringServices = () => {
  return (
    <div className="flex flex-col items-center mt-8 ">
      <div className="font-Lato lg:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] text-custom-blue">
        Explore Our Offshoring Models
      </div>
      <div className="font-Poppins lg:text-[28px] md:text-[28px] sm:text-[18px] xs:text-[18px] font-bold text-custom-purple mt-4">
        Offshoring Services at ConsoleDot
      </div>
      <div className="font-Rubik text-4xl font-normal leading-10 text-center mt-4">
        <div className="flex items-center lg:ml-[8%] sm:ml-auto">
          <div className="h-0.5 bg-custom-purple w-16"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-1"></div>
          <div className="h-0.5 bg-custom-purple w-16"></div>
        </div>
      </div>
      <div className="mt-4">
        <CardArray />
      </div>
      <div className="bg-gradient-to-r from-custom-blue to-custom-purple w-[85%] flex flex-col justify-center items-center p-[2rem] relative mt-12">
        <div className="absolute inset-0 bg-gradient-to-r from-custom-blue to-custom-purple"></div>
        <img
          src={imageGit}
          alt="Background Image"
          className="absolute inset-0 object-cover w-full h-full opacity-20"
        />

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="font-bold lg:text-[28px] md:text-[28px] sm:text-[16px] xs:text-[16px] sm:text-center text-white mb-4 font-poppins">
            Get in touch with ConsoleDot
          </h2>
          <p className="text-white text-center lg:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] font-poppins mb-6">
            Get in touch with us to avail our services
          </p>
          <button
            type="button"
            className="relative flex items-center justify-center bg-transparent border border-white hover:border-custom-blue text-white px-5 py-2.5 w-[182px] rounded-full focus:outline-none active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue"
          >
            <p className="font-Lato text-base font-medium leading-[28px] tracking-normal text-center">
              Get In Touch
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OffshoringServices;
