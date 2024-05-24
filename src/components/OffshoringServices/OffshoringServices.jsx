import React from "react";
import { CardArray } from "./OffshoringServicesCard";
import { imageGit } from "../../assets/images";
import { ContactSection } from "./ContactSection";
const OffshoringServices = ({title,heading}) => {
  
  return (
    <div className="w-full flex flex-col items-center mt-8 ">
      <div className="font-Lato lg:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] text-custom-blue">
        {title}
      </div>
      <div className="font-Poppins lg:text-[28px] md:text-[28px] sm:text-[18px] xs:text-[18px] font-bold text-custom-purple mt-4">
        {heading}
      </div>
      <div className="  leading-10 text-center mt-4">
        <div className="flex items-center ">
          <div className="h-0.5 bg-custom-purple md:w-24 w-12"></div>
          <div className="w-2 h-2 bg-gradient-to-tl from-custom-blue to-custom-purple rounded-full"></div>
          <div className="h-0.5 bg-custom-purple md:w-24 w-12"></div>
        </div>
      </div>
      <div className="mt-4 w-full">
        <CardArray />
      </div>
    </div>
  );
};

export default OffshoringServices;
