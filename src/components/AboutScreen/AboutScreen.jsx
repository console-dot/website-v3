import React from "react";
import { aboutService } from "../../assets/images";

export default function AboutScreen() {
  return (
    <>
      {/* About Section */}
      <div className="flex flex-wrap bg-offwhite py-12 mt-8">
        {/* Left side: Text */}
        <div className="w-full md:w-1/2 p-8">
          <p className="text-custom-blue font-poppins lg:text-[16px]  md:text-16px sm:text-[12px] xs:text-[12px] font-normal leading-none tracking-normal">
            About the compny
          </p>
          <p className="text-custom-purple font-poppins lg:text-[28px]  md:text-28px sm:text-[18px] xs:text-[18px] font-bold leading-10 tracking-normal mt-4">
            About Consoledot
          </p>
          <div class="flex items-center lg:ml-[8%] sm: ml-">
            <div class="h-0.5 bg-custom-purple w-16"></div>
            <div class="w-2 h-2 bg-black rounded-full mx-1"></div>
            <div class="h-0.5 bg-custom-purple w-16"></div>
          </div>

          <p className="text-aboutustext font-lato lg:text-[16px]  md:text-16px sm:text-[12px] xs:text-[12px] font-normal leading-7 mt-4">
            At ConsoleDot, we believe in the power of technology to transform
            businesses and drive societal progress. As a leading software
            solutions provider, we are dedicated to delivering high-quality and
            customer- centric experiences that enable enterprises, associates,
            and society to rise.
          </p>
        </div>
        {/* Right side: Image */}
        <div className="w-auto md:w-1/2 flex items-center justify-center ">
          <div className="w-3/4 relative">
            {/* Dashed border */}
            <div class="border-dashed border-2 border-custom-blue  bg-gradient-to-r from- to-cyan-600">
              {/* Overlapping div */}
              <div className="bg-white relative left-[-1.75rem] pl-8 top-[-1.75rem]">
                <img
                  src={aboutService}
                  alt="About"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
