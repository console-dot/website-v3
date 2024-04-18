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
        <div className="flex flex-row gap-8 items-start h-full  w-[70%] relative">
          <div className="flex justify-start items-start transform rotate-180 mt-12">
            <Inverted2 />
          </div>
          <div className="flex w-full h-full justify-center items-center">
            <p className="text-[16px] leading-6 text-webDescrip">
              {proposition}
            </p>
          </div>
          <div className="flex justify-end h-full items-center mt-8">
            <Inverted2 />
          </div>
        </div>
      </div>
    </div>
  );
};
