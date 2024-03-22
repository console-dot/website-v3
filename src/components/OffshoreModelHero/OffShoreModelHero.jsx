import React from "react";
import { Breadcrumbs } from "../BreadCrumbs";
import { StarEffect, offshorehero } from "../../assets/images";

export const OffShoreModelHero = () => {
  return (
    <div
      className="relative w-full overflow-hidden bg-gradient-to-r from-custom-blue to-custom-purple lg:h-[474px] md:h-[474px] sm:h-[250px] xs:h-[250px]"
      style={{
        position: "relative",
        overflow: "hidden",
        borderBottomLeftRadius: "35%",
        borderBottomRightRadius: "35%",
      }}
    >
      {/* Background images */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${StarEffect})`,
          opacity: "0.4",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${offshorehero})`,
          opacity: "0.4",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="absolute inset-0 flex justify-start items-start lg:mt-[80px] lg:ml-[94px] md:mt-[80px] md:ml-[94px] sm:mt-[60px] sm:ml-[40px] xs:mt-[60px] xs:ml-[40px]">
        <div className="text-left text-white">
          <p className="font-lato xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] font-normal leading-none tracking-normal">
            Off Shoring Models
          </p>
          <p className="font-poppins font-bold xl:text-[28px] lg:text-[28px] md:text-[28px] sm:text-[18px] xs:text-[18px]">
            Offshoring Services at ConsoleDot:
            <br className="mt-[-2px]" />
            Your Gateway to Exceptional Development Solutions
          </p>
          <Breadcrumbs />
        </div>
      </div>
    </div>
    
  );
};
