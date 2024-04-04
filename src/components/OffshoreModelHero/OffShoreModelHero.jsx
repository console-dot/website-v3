import React from "react";
import { Breadcrumb } from "../BreadCrumbs";
import { StarEffect, offshorehero } from "../../assets/images";

export const OffShoreModelHero = () => {
  return (
    <div
      className="relative w-full overflow-hidden bg-gradient-to-r from-custom-blue to-custom-purple  md:h-[474px] h-[250px]"
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
      <div className="absolute inset-0 flex justify-start items-start  md:pt-[110px] md:pl-[130px]  pt-[40px] pl-[40px]">
        <div className="text-left text-white">
          <p className="font-lato md:text-[16px] text-[12px]  leading-2 tracking-normal">
            Off Shoring Models
          </p>
          <p className="font-poppins font-bold md:text-[28px] text-[18px] mt-3">
            OFFSHORING SERVICES AT CONSOLEDOT:
            <span className="md:block md:mt-1"></span> YOUR GATEWAY TO
            EXCEPTIONAL DEVELOPMENT SOLUTIONS
          </p>
          <span className="md:block md:mt-1"></span>
          <p className="md:mt-4 mt-2 md:text-[14px] text-[8px] font-semibold ">
            <a href="/" className="text-white  hover:text-custom-purple">
              Home
            </a>{" "}
            /
            <a
              href="/Offshoringmodels"
              className="text-white  hover:text-custom-purple"
            >
               {" "}Offshoring Models
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
