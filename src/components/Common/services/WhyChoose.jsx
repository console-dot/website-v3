import React from "react";
import { Divider } from "../../../constatnts/Divider";
import { UserCentricIcon } from "../../../assets/icons";

export const WhyChoose = ({ heading, data }) => {
  return (
    <div className="w-full p-12">
      <div className="flex flex-col gap-2 items-center justify-center w-full">
        <h1 className="text-[16px] leading-5 text-dottedBorder">
          Why Choose Us
        </h1>
        <h1 className="text-[28px] leading-10 text-dottedBorder font-bold">
          {heading}
        </h1>
        <div className="">
          <Divider />
        </div>
      </div>
      <div className="w-full grid grid-cols-3">
       {data?.map((i)=> <div className="w-[348px] h-[330px] flex flex-col  hover:border-2 hover:border-primaryText hover:border-dashed justify-between px-2">
          <div className="flex flex-col items-center justify-center p-8 gap-4">
            <div className="w-[80px] h-[80px] bg-dottedBorder rounded-full flex items-center justify-center mb-4">
              {i?.icon}
            </div>

            <h1 className="text-[16px] text-webHeading leading-6 font-bold">
              {i.title}
            </h1>
            <span className="text-[16px] text-webHeading leading-6 ">
              {i.description}
            </span>
          </div>
          <div className=" w-full h-2 bg-gradient-to-r from-fromclr to-toclr"></div>
        </div>)}
      </div>
    </div>
  );
};
