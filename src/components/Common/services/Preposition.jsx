import React from "react";
import { Divider } from "../../../constatnts/Divider";
import { Inverted1, Inverted2 } from "../../../assets/icons";

export const Preposition = ({ title, heading, proposition }) => {
  return (
    <div className="w-full flex  mt-16 mb-16">
      <div className="flex items-center justify-center px-12 gap-4 bg-white h-[237px]">
        <div className="flex flex-col gap-2 items-start w-[30%]">
          <h1 className="text-[16px] leading-5 text-dottedBorder">{title}</h1>
          <h1 className="text-[28px] leading-10 text-custom-purple font-bold">
            {heading?.toUpperCase()}
          </h1>
          <div className="mb-8">
            <Divider />
          </div>
        </div>
        <div className="flex flex-row lg:gap-8 xl:gap-8 2xl:gap-8 md:gap-4 sm:gap-2 xs:gap-1  items-start h-full 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-full sm:w-full xs:w-full relative">
          <div className="flex justify-start items-start transform rotate-180 lg:mt-12 xl:mt-12 2xl:mt-12 md:mt-0 sm:mt-0 xs:mt-0 xxs:mt-0">
            <Inverted2 />
          </div>
          <div className="flex w-full h-full justify-center items-center">
            <p className="text-[16px] text-justify xxs:text-start leading-6 text-webDescrip sm:mt-4 xs:mt-4 xxs:mt-6">
              {proposition}
            </p>
          </div>
          <div className="flex justify-end h-full items-center xs:items-end mt-8 s">
            <Inverted2 />
          </div>
        </div>
      </div>
    </div>
  );
};
