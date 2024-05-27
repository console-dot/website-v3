import React from "react";
import { OffshoreBg, StarEffect, offshorehero } from "../../assets/images";

import { MdKeyboardArrowRight } from "react-icons/md";

export const OffShoreModelHero = () => {
  return (
    <div
      className="w-full md:h-[70vh] lg:h-[70vh] h-[30vh]"
      style={{
        backgroundImage: `url(${OffshoreBg})`,
        opacity: "2",
        backgroundSize: "cover",
        backgroundRepeat: "round",
        width: "100%",
      }}
    >
      {/* Background images */}
      <div
        className=""
        style={{
          backgroundImage: `url(${StarEffect})`,
          backgroundSize: "cover",
          backgroundRepeat: "round",
        }}
      ></div>
      <div
        className=""
        style={{
          backgroundImage: `url(${offshorehero})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className=" flex lg:justify-start md:justify-start justify-center items-start md:pl-16 md:pt-36 lg:pl-16 lg:pt-36  pl-8 pt-6">
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
        </div>
      </div>
    </div>
  );
};
