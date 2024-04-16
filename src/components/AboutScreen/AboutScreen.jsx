import React from "react";
import { DashedBg, aboutService } from "../../assets/images";

export const AboutScreen = () => {
  return (
    <div className="w-[100%] flex  mt-6 md:mt-16 ">
      <div className="flex flex-wrap  bg-offwhite   ">
        <div className="w-full md:w-1/2 md:p-20 p-8">
          <p className="text-custom-blue font-poppins md:text-[16px] text-[12px] font-normal leading-none tracking-normal">
            About the company
          </p>
          <p className="text-custom-purple font-poppins md:text-[28px] text-[18px] font-bold  tracking-normal md:mt-3 mt-1 ">
            ABOUT CONSOLEDOT
          </p>
          <div class="flex items-center    md:mt-3 mt-1">
            <div class="h-0.5 bg-custom-purple md:w-24 w-16"></div>
            <div class="w-2 h-2 bg-gradient-to-tl from-custom-blue to-custom-purple rounded-full"></div>
            <div class="h-0.5 bg-custom-purple md:w-24 w-16"></div>
          </div>

          <p className="text-aboutustext font-lato  md:text-[16px] text-[12px] font-normal md:leading-10 leading-[28px] mt-4">
            At ConsoleDot, we believe in the power of technology to transform
            businesses and drive societal progress. As a leading software
            solutions provider, we are dedicated to delivering high-quality and
            customer- centric experiences that enable enterprises, associates,
            and society to rise.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center relative md:pl-9 pl-0">
  <div className="w-3/4 relative justify-center">
    <img
      src={DashedBg}
      alt="Loading.."
      className="w-full h-[auto] md:max-w-[500px] xl:max-w-[600px]"
    />
    <img
      className="absolute top-[40px] left-[50%] transform translate-x-[-50%] md:top-[40px] md:left-[50%] xs:w-[200px] xs:h-[150px] md:w-[280px] md:h-[200px] xl:w-[400px] xl:h-[340px]"
      src={aboutService}
      alt="Img not found"
    />
  </div>
</div>

      </div>
    </div>
  );
};
