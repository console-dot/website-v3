import React from "react";
import { HomeTop2, aboutService } from "../../assets/images";
import { HomeTop } from "../../assets/icons";

export const AboutScreen = ({description}) => {
  return (
    <div className="w-[100%] flex  mt-6 md:mt-16 ">
      <div className="flex flex-wrap  bg-backgroundColor">
        <div className="w-full md:w-1/2 md:p-20 p-8">
          <p className="text-custom-blue font-poppins md:text-[16px] text-[12px] font-normal leading-none tracking-normal">
            About the company
          </p>
          <p className="text-custom-purple font-poppins md:text-[28px] text-[18px] font-bold  tracking-normal md:mt-3 mt-1 ">
            ABOUT CONSOLEDOT
          </p>
          <div className="flex items-center    md:mt-3 mt-1">
            <div className="h-0.5 bg-custom-purple md:w-24 w-16"></div>
            <div className="w-2 h-2 bg-gradient-to-tl from-custom-blue to-custom-purple rounded-full"></div>
            <div className="h-0.5 bg-custom-purple md:w-24 w-16"></div>
          </div>

          <p className="text-aboutustext text-justify  font-lato  md:text-[16px] text-[12px] font-normal leading-8  mt-4">
          {description}
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:pl-6 lg:pl-8">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] xs:w-[100%]flex justify-center md:order-1 order-2">
            <div className="w-[100%] justify-center">
              <img
                className=" lg:w-[519px] lg:h-[423px] md:w-[519px] md:h-[423px] w-[300px] h-[250px]"
                src={HomeTop2}
                alt="Img not found"
                style={{}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
