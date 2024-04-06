import React from "react";
import {Card, OurServicesCard} from "../OurServicesCard/OurServicesCard";
import { image1 } from "../../assets/images";
import { image2 } from "../../assets/images";
import { image3 } from "../../assets/images";
import { image4 } from "../../assets/images";
import useIsMobile from "../../utils/hooks/useIsMobile";
import { OSC } from "../OurServicesCard/OSC";
const OurServices = () => {
  const isMobile = useIsMobile();
  return (
    <>
    <div className="flex flex-col items-center ">
      <div className="font-Lato  md:text-[16px] text-[12px] text-custom-blue">
        Our Expertise
      </div>
      <div className="font-Poppins  md:text-[28px] text-[18px] font-bold text-custom-purple mt-4">
        OUR SERVICES
      </div>
      <div className=" font-normal leading-10 mt-4">
        <div className="flex items-center">
          <div class="h-0.5 bg-custom-purple md:w-20 w-12"></div>
          <div class="w-2 h-2 bg-gradient-to-tl from-custom-blue to-custom-purple rounded-full"></div>
          <div class="h-0.5 bg-custom-purple md:w-20 w-12"></div>
        </div>
      </div>
      </div>

      <div className="pl-24 pr-24 pt-16  ">
        <Card />
        <div className="flex md:justify-end justify-center md:mt-0 2 mb-2 ">
        <button
          type="button"
          onClick=""
          className="text-custom-purple just border-[0.5px] hover:bg-custom-purple hover:text-offwhite px-5 py-2.5 w-[182px] h-[54px] mt-3 bg-custom-lightBlue rounded-full font-Lato font-medium"
        >
          View All
        </button>
      </div>
      </div>
      {/* service Div */}
      <OSC/>
      </>
  );
};

export default OurServices;
