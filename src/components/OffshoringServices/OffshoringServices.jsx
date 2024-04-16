import React from "react";
import { CardArray } from "./OffshoringServicesCard";
import { imageGit } from "../../assets/images";
import { ContactSection } from "./ContactSection";
const OffshoringServices = () => {
  return (
    <div className="w-full flex flex-col items-center mt-8 ">
      <div className="font-Lato lg:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] text-custom-blue">
        Explore Our Offshoring Models
      </div>
      <div className="font-Poppins lg:text-[28px] md:text-[28px] sm:text-[18px] xs:text-[18px] font-bold text-custom-purple mt-4">
        OFFSHORING SERVICES AT CONSOLEDOT
      </div>
      <div className="  leading-10 text-center mt-4">
        <div className="flex items-center ">
          <div class="h-0.5 bg-custom-purple md:w-24 w-12"></div>
          <div class="w-2 h-2 bg-gradient-to-tl from-custom-blue to-custom-purple rounded-full"></div>
          <div class="h-0.5 bg-custom-purple md:w-24 w-12"></div>
        </div>
      </div>
      <div className="mt-4 w-full xl:pl-20 xl:pr-20 lg:pl-8 lg:pr-8 md:pl-6 md:pr-6">
        <CardArray />
      </div>
    </div>
  );
};

export default OffshoringServices;
