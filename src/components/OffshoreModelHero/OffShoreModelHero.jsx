import React from "react";
import { OffshoreBg, StarEffect, offshorehero } from "../../assets/images";

import { MdKeyboardArrowRight } from "react-icons/md";

export const OffShoreModelHero = () => {
  return (
    <div className="w-full h-[80vh]"
    style={{
      backgroundImage: `url(${OffshoreBg})`, // Using string interpolation for the URL
      opacity: "2", // Set opacity to 40%
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width:"100%"
    }}>
      {/* Background images */}
      <div
        className=""
        style={{
          backgroundImage: `url(${StarEffect})`,
          opacity: "0.4",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className=""
        style={{
          backgroundImage: `url(${offshorehero})`,
          opacity: "0.4",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className=" flex justify-start items-start  md:pt-[110px] md:pl-[130px]  pt-[40px] pl-[40px]">
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
          <p className="md:mt-4 mt-2 md:text-[16px] text-[12px] font-poppins flex-row">
            <a href="/" className="text-white hover:text-custom-purple">
              Home
            </a>{" "}
            <MdKeyboardArrowRight className="inline" />{" "}
            <a
              href="/Offshoringmodels"
              className="text-white hover:text-custom-purple"
            >
              Offshoring Models
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
