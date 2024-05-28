import React from "react";
import { Divider } from "../../../constatnts/Divider";
import { Inverted1, Inverted2 } from "../../../assets/icons";

export const Preposition = ({ title, heading, proposition }) => {
  return (
    <div className="w-full flex lg:mt-16 xl:mt-16 2xl:mt-16 sm:mt-2 xs:mt-2 xss:mt-0 lg:mb-10 xl:mb-10 2xl:mb-10 sm:mb-8 xs:mb-8 xss:mb-8 ">
      <div className="flex pb-8 pt-2 lg:flex-row md:flex-col sm:flex-col xxs:flex-col xs:flex-col items-center justify-center px-12 md:px-8 sm:px-8 xs:px-2 xxs:px-1 gap-4 bg-white lg:h-[237px] xl:h-[237px] 2xl:h-[237px] md:h-[237px] sm:h-[237px] xs:h-full">
        <div className="flex flex-col md:justify-center sm:justify-center xs:justify-center xxs:justify-center gap-2 items-start xl:w-[30%] 2xl:w-[30%] lg:w-[30%] md:w-full sm:w-full xs:w-full xxs:w-full">
          <div className="flex md:justify-center md:w-full sm:justify-center sm:w-full xs:justify-center xs:w-full xxs:justify-center xxs:w-full">
            {" "}
            <h1 className="text-[16px] leading-5 text-dottedBorder">{title}</h1>
          </div>
          <div className="flex md:justify-center md:w-full sm:justify-center sm:w-full xs:justify-center xs:w-full xxs:justify-center xxs:w-full">
            <h1 className="text-[28px] xs:text-[24px] xxs:text-[20px] leading-10 text-custom-purple font-bold">
              {heading?.toUpperCase()}
            </h1>
          </div>
          <div className="lg:mb-8 xl:mb-8 2xl:mb-8 sm:mb-4 xs:mb-4 xss:mb-4 flex md:justify-center md:w-full sm:justify-center sm:w-full xs:justify-center xs:w-full xxs:justify-center xxs:w-full">
            <Divider />
          </div>
        </div>
        <div className="flex flex-row lg:gap-8 xl:gap-8 2xl:gap-8 md:gap-4 sm:gap-2 xs:gap-1  items-start h-full 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-full sm:w-full xs:w-full relative">
          <div className="flex justify- items-start transform rotate-180 lg:mt-12 xl:mt-12 2xl:mt-12 md:mt-[-14px] sm:mt-[-14px] xs:mt-[-14px] xxs:mt-[-14px] ">
            <Inverted2 />
          </div>
          <div className="flex w-[70%] h-full justify-center items-center">
            <p className="text-[16px] text-justify xxs:text-start leading-6 text-webDescrip sm:mt-4 xs:mt-4 xxs:mt-6">
              {proposition}
            </p>
          </div>
          <div className=" absolute lg:left-[85%] xl:left-[85%] 2xl:left-[85%] md:left-[80%] sm:left-[100%] xs:left-[86%] xxs:left-[80%] lg:top-[60%] xl:top-[60%] md:top-[60%] sm:top-[60%] xs:top-[70%] xxs:top-[85%]  2xl:top-[60%] ">
            <Inverted2 />
          </div>
        </div>
      </div>
    </div>
  );
};
