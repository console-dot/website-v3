import React from "react";
import {
  DashedBg,
  Offshore32,
  aboutService,
  circletickicon,
  offshoreimg1,
  offshoreimg2,
  offshoreimg3,
} from "../../assets/images";
import { OffShoreTop, Offshore2 } from "../../assets/icons";
import CheckIcon from "../../assets/icons/CheckIcon";
import { useNavigate } from "react-router-dom";

export const OffshoreModel = ({ offshoreType }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center md:mt-16 mt-8">
        <div className="font-Lato md:text-[16px] text-[12px] text-custom-blue">
          Offshoring Models
        </div>
        <div className="font-Poppins md:text-[28px] text-[18px] font-bold text-custom-purple md:mt-2 mt-1">
          EXPLORE OUR OFFSHORING MODELS
        </div>
        <div className="leading-10 md:mt-2 mt-1">
          <div className="flex items-center">
            <div className="h-0.5 bg-custom-purple md:w-[100px] w-12"></div>
            <div className="w-2 h-2 bg-gradient-to-tl from-custom-blue to-custom-purple rounded-full"></div>
            <div className="h-0.5 bg-custom-purple md:w-[100px] w-12"></div>
          </div>
        </div>
      </div>

      {/* Hourly (Time & Material) start */}
      <div className="w-full md:pl-20 md:pr-20 flex flex-wrap justify-between items-center md:flex-row  bg-offwhite md:mt-9 mt-5">
        {/* Left side */}
        <div className="xl:w-[48%] lg:w-[48%] md:w-[48%] sm:w-[100%] xs:w-[100%] md:p-0 sm:p-0 xss:p-0">
          <div className="w-full flex flex-col">
            <div className="w-[100%]">
              <p className="text-custom-purple font-poppins md:text-[28px] text-[18px] font-semibold leading-8 tracking-normal md:mt-4 mt-2">
                {offshoreType[0]?.type}
              </p>
              <p className="text-aboutustext font-lato text-justify md:text-[16px] text-[12px] leading-6 md:mt-4 mt-2">
                {offshoreType[0]?.description}
              </p>
              <p className="md:text-[16px] text-[12px] font-bold text-black mt-4">
                Advantages:
              </p>
              <div className="flex items-start mt-4">
                <div className="mr-4 lg:mr-4 w-4 h-4 lg:w-6 lg:h-6">
                  <CheckIcon />
                </div>
                <span className="text-aboutustext md:text-[16px] text-[12px]">
                  {offshoreType[0]?.advantages[0]}
                </span>
              </div>
              <div className="flex items-start mt-4">
                <div className="mr-4 lg:mr-4 w-4 h-4 lg:w-6 lg:h-6">
                  <CheckIcon />
                </div>
                <span className="text-aboutustext md:text-[16px] text-[12px]">
                  {offshoreType[0]?.advantages[1]}
                </span>
              </div>
              <div className="flex items-start mt-4">
                <div className="mr-4 lg:mr-4 w-4 h-4 lg:w-6 lg:h-6">
                  <CheckIcon />
                </div>
                <span className="text-aboutustext md:text-[16px] text-[12px]">
                  {offshoreType[0]?.advantages[2]}
                </span>
              </div>
              <div className="flex md:justify-start justify-center sm:mt-7 sm:mb-6 xs:mt-7 xs:mb-6 xss:mt-7 xss:mb-6 md:mt-7 md:mb-6 mt-2 mb-2">
                <button
                  onClick={() => {
                    navigate("/contact");
                  }}
                  className="md:px-24 md:py-2.5 px-16 py-3  bg-custom-lightBlue text-custom-purple rounded-full focus:outline-none transition-colors duration-300 hover:bg-gradient-to-tl  hover:from-custom-blue1 hover:to-custom-purple hover:text-custom-white active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue"
                >
                  <p className="font-Lato text-base font-medium leading-[28px] tracking-normal">
                    Avail Service
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="xl:w-[48%] lg:w-[48%] md:w-[48%] sm:w-[100%] xxs:w-[100%] xs:w-[100%] flex justify-center relative md:order-1 order-2">
          <div className="w-1/2 flex md:w-full md:justify-center md:items-center sm:w-full sm:justify-center sm:items-center xs:w-full xxs:w-full xs:justify-center xs:items-center xxs:justify-center xxs:items-center">
            <OffShoreTop />
          </div>
        </div>
      </div>
      {/* Hourly (Time & Material) End */}

      {/* Fixed-price start */}
      <div className="w-full md:pl-20 md:pr-20 flex flex-wrap justify-between items-center bg-offwhite md:mt-9 mt-5">
        {/* Right side */}
        <div className="xl:w-[48%] lg:w-[48%] md:w-[48%] sm:w-[100%] xs:w-[100%] md:p-0 sm:p-0 xss:p-0 md:order-2 order-1">
          <div className="w-full flex flex-col pl-0">
            <div className="w-[100%]">
              <p className="text-custom-purple font-poppins md:text-[28px] text-[18px] font-semibold leading-8 tracking-normal md:mt-4 mt-2">
                {offshoreType[1]?.type}
              </p>
              <p className="text-aboutustext font-lato text-justify md:text-[16px] text-[12px] leading-6 md:mt-4 mt-2">
                {offshoreType[1]?.description}
              </p>
              <p className="md:text-[16px] text-[12px] font-bold text-black mt-4">
                Advantages:
              </p>
              <div className="flex items-start mt-4">
                <div className="mr-4 lg:mr-4 w-4 h-4 lg:w-6 lg:h-6">
                  <CheckIcon />
                </div>
                <span className="text-aboutustext md:text-[16px] text-[12px]">
                  {offshoreType[1]?.advantages[0]}
                </span>
              </div>
              <div className="flex items-start mt-4">
                <div className="mr-4 lg:mr-4 w-4 h-4 lg:w-6 lg:h-6">
                  <CheckIcon />
                </div>
                <span className="text-aboutustext md:text-[16px] text-[12px]">
                  {offshoreType[1]?.advantages[1]}
                </span>
              </div>
              <div className="flex items-start mt-4">
                <div className="mr-4 lg:mr-4 w-4 h-4 lg:w-6 lg:h-6">
                  <CheckIcon />
                </div>
                <span className="text-aboutustext md:text-[16px] text-[12px]">
                  {offshoreType[1]?.advantages[2]}
                </span>
              </div>
              <div className="flex md:justify-start justify-center sm:mt-7 sm:mb-6 xs:mt-7 xs:mb-6 xss:mt-7 xss:mb-6 md:mt-7 md:mb-6 mt-2 mb-2">
                <button
                  onClick={() => {
                    navigate("/contact");
                  }}
                  className="md:px-24 md:py-2.5 px-16 py-3  bg-custom-lightBlue text-custom-purple rounded-full focus:outline-none transition-colors duration-300 hover:bg-gradient-to-tl  hover:from-custom-blue1 hover:to-custom-purple hover:text-custom-white active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue"
                >
                  <p className="font-Lato text-base font-medium leading-[28px] tracking-normal">
                    Avail Service
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Left side */}
        <div className="xl:w-[48%] lg:w-[48%] md:w-[48%] sm:w-[100%] xs:w-[100%] xxs:w-[100%] flex justify-center relative md:order-1 order-2">
          <div className="w-1/2 flex md:w-full md:justify-start md:items-center sm:w-full sm:justify-center sm:items-center xs:w-full xxs:w-full xs:justify-center xs:items-center xxs:justify-center xxs:items-center">
            <Offshore2 />
          </div>
        </div>
      </div>
      {/* Fixed-price End */}

      <div className="w-full md:pl-20 md:pr-20 flex flex-wrap justify-between items-center bg-offwhite md:mt-9 mt-5">
        {/* Left side */}
        <div className="xl:w-[48%] lg:w-[48%] md:w-[48%] sm:w-[100%] xs:w-[100%] md:p-0 sm:p-0 xss:p-0">
          <div className="w-full flex flex-col">
            <div className="w-[100%]">
              <p className="text-custom-purple font-poppins md:text-[28px] text-[18px] font-semibold leading-8 tracking-normal md:mt-4 mt-2">
                {offshoreType[2]?.type}
              </p>
              <p className="text-aboutustext font-lato text-justify md:text-[16px] text-[12px] leading-6 md:mt-4 mt-2">
                {offshoreType[2]?.description}
              </p>
              <p className="md:text-[16px] text-[12px] font-bold text-black mt-4">
                Advantages:
              </p>
              <div className="flex items-start mt-4">
                <div className="mr-4 lg:mr-4 w-4 h-4 lg:w-6 lg:h-6">
                  <CheckIcon />
                </div>
                <span className="text-aboutustext md:text-[16px] text-[12px]">
                  {offshoreType[2]?.advantages[0]}
                </span>
              </div>
              <div className="flex items-start mt-4">
                <div className="mr-4 lg:mr-4 w-4 h-4 lg:w-6 lg:h-6">
                  <CheckIcon />
                </div>
                <span className="text-aboutustext md:text-[16px] text-[12px]">
                  {offshoreType[2]?.advantages[1]}
                </span>
              </div>
              <div className="flex items-start mt-4">
                <div className="mr-4 lg:mr-4 w-4 h-4 lg:w-6 lg:h-6">
                  <CheckIcon />
                </div>
                <span className="text-aboutustext md:text-[16px] text-[12px]">
                  {offshoreType[2]?.advantages[2]}
                </span>
              </div>
              <div className="flex md:justify-start justify-center sm:mt-7 sm:mb-6 xs:mt-7 xs:mb-6 xss:mt-7 xss:mb-6 md:mt-7 md:mb-6 mt-2 mb-2 ">
                <button
                  onClick={() => {
                    navigate("/contact");
                  }}
                  className="md:px-24 md:py-2.5 px-16 py-3  bg-custom-lightBlue text-custom-purple rounded-full focus:outline-none transition-colors duration-300 hover:bg-gradient-to-tl  hover:from-custom-blue1 hover:to-custom-purple hover:text-custom-white active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue"
                >
                  <p className="font-Lato text-base font-medium leading-[28px] tracking-normal">
                    Avail Service
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="xl:w-[48%] lg:w-[48%] md:w-[48%] sm:w-[100%] xxs:w-[100%] xs:w-[100%] flex justify-center relative md:order-1 order-2">
          <div className="w-1/2 flex md:w-full md:justify-center md:items-center sm:w-full sm:justify-center sm:items-center xs:w-full xxs:w-full xs:justify-center xs:items-center xxs:justify-center xxs:items-center">
            <img
              className="md:w-[528px] md:h-[408px] w-full h-auto"
              src={Offshore32}
              alt="Img not found"
              style={{ position: "relative" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
