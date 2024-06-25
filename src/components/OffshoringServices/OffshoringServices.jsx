import React from "react";
import { CardArray } from "./OffshoringServicesCard";
import { imageGit } from "../../assets/images";
import { ContactSection } from "./ContactSection";
const OffshoringServices = ({ heading, offshoreComparison }) => {
  return (
    <div className="w-full flex flex-col items-center xl:mt-8 xl:mb-8 lg:mt-8 lg:mb-8 md:mt-6 md:mb-6 sm:mt-6 sm:mb-6 xs:mt-6 xs:mb-6 xss:mt-6 xss:mb-6 ">
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
      <div className="mt-4 xl:pl-[4.7rem] xl:pr-[4.7rem] lg:pl-[4.7rem] lg:pr-[4.7rem] md:pl-[4.5rem] md:pr-[4.5rem] sm:pl-[4.5rem] sm:pr-[4.5rem] xs:pl-[0.8rem] xs:pr-[0.8rem] xss:pl-[0.8rem] xss:pr-[0.8rem] w-full">
        <CardArray offshoreComparison={offshoreComparison} />
      </div>
    </div>
  );
};

export default OffshoringServices;
