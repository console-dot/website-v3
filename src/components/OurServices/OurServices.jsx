import React from "react";
import { Card } from "../OurServicesCard/OurServicesCard";
import useIsMobile from "../../utils/hooks/useIsMobile";
import { useNavigate } from "react-router-dom";
const OurServices = ({ expertise }) => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center pt-6 ">
        <div className="font-Lato  md:text-[16px] text-[12px] text-custom-blue">
          Our Experties
        </div>
        <div className="font-Poppins  md:text-[28px] text-[18px] font-bold text-custom-purple mt-4">
          OUR SERVICES
        </div>
        <div className=" font-normal leading-10 mt-4">
          <div className="flex items-center">
            <div className="h-0.5 bg-custom-purple md:w-20 w-12"></div>
            <div className="w-2 h-2 bg-gradient-to-tl from-custom-blue to-custom-purple rounded-full"></div>
            <div className="h-0.5 bg-custom-purple md:w-20 w-12"></div>
          </div>
        </div>
      </div>

      <div className="xl:pl-16 xl:pr-16 xl:pt-16 lg:pl-16 lg:pr-16 lg:pt-16 md:pl-16 md:pr-16 md:pt-16 pl-5 pr-5 pt-6">
        <Card expertise={expertise} />
        <div className="flex md:justify-end justify-center md:pt-3 pt-10 ">
          <button
            type="button"
            onClick={() => navigate("/services")}
            className="text-custom-purple just border-[0.5px]bg-custom-lightBlue  rounded-full focus:outline-none transition-colors duration-300 hover:bg-gradient-to-tl  hover:from-custom-blue1 hover:to-custom-purple hover:text-custom-white active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue px-5 py-2.5 w-[182px] h-[54px] mt-3 bg-custom-lightBlue  font-Lato font-medium"
          >
            View All
          </button>
        </div>
      </div>
    </>
  );
};

export default OurServices;
