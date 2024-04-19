import React from "react";
import { Divider } from "../../../constatnts/Divider";
import { UserCentricIcon } from "../../../assets/icons";

export const WhyChoose = ({ heading, data, cardsInRow }) => {
  return (
    <div className="w-full mt-12">
      <div className="flex flex-col text-center gap-2 items-center justify-center w-full">
        <h1 className="text-[16px]  leading-5 text-dottedBorder">
          Why Choose Us
        </h1>
        <h1 className="text-[28px] xs:text-[20px] xxs:text-[16px] leading-10 text-custom-purple font-bold">
          {heading.toUpperCase()}
        </h1>
        <div className="">
          <Divider />
        </div>
      </div>
      <div className={`w-full grid ${cardsInRow} gap-8 mt-8`}>
        {data?.map((i) => (
          <div className=" flex flex-col bg-white border-2 border-transparent  hover:border-2 hover:border-primaryText hover:border-dashed justify-between px-4">
            <div className="flex flex-col items-center justify-center p-8 sm:p-4 xs:p-4 xxs:p-2 gap-4">
              <div className="w-[80px] h-[80px] bg-dottedBorder rounded-full flex items-center justify-center mb-4">
                {i?.icon}
              </div>

              <h1 className="text-[16px] text-webHeading leading-6 font-bold">
                {i.title}
              </h1>
              {i?.subHeading && (
                <h1 className="text-[16px] text-center font-poppins my-1 text-dottedBorder leading-6">
                  {i.subHeading}
                </h1>
              )}
              <span className="text-[16px] text-webHeading leading-6 text-justify ">
                {i.description}
              </span>
            </div>
            <div className=" w-full h-2 bg-gradient-to-r from-fromclr to-toclr"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
