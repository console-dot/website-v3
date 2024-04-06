import React from "react";
import { Divider } from "../../constatnts/Divider";
import { CloudCompIcon } from "../../assets/icons";

export const WhyWeWork = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-2 items-center justify-center w-full">
        <h1 className="text-[16px] leading-5 text-dottedBorder">Why We Work</h1>
        <h1 className="text-[28px] leading-10 text-dottedBorder font-bold">
          HOW CONSOLEDOT DELIVERS:
        </h1>
        <div className="">
          <Divider />
        </div>
      </div>
      <div className="w-full flex justify-end pr-16">
        <div className="flex gap-8 w-[45%] bg-white mr-28 my-4 p-4 hover:border-2 hover:border-primaryText hover:border-dashed">
          <div>
            <div className="w-[80px] h-[80px] bg-dottedBorder rounded-full flex items-center justify-center mb-4">
              <CloudCompIcon />
            </div>
          </div>
          <div className="flex flex-col ">
            <h1 className="text-[16px] text-webHeading leading-6 mb-2 font-bold">
              Expertise in Action
            </h1>
            <h1 className="text-[16px] text-webHeading leading-6 text-justify ">
              ConsoleDot brings a seasoned team of developers, designers, and
              project managers to the table. Expect nothing less than excellence
              in execution and meticulous attention to detail.
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end pr-16">
        <div className="flex gap-8 w-[45%] bg-white  p-4 hover:border-2 hover:border-primaryText hover:border-dashed">
          <div>
            <div className="w-[80px] h-[80px] bg-dottedBorder rounded-full flex items-center justify-center mb-4">
              <CloudCompIcon />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-[16px] text-webHeading leading-6 mb-2 font-bold">
              Expertise in Action
            </h1>
            <h1 className="text-[16px] text-webHeading leading-6 text-justify ">
              ConsoleDot brings a seasoned team of developers, designers, and
              project managers to the table. Expect nothing less than excellence
              in execution and meticulous attention to detail.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
