import React from "react";
import { Divider } from "../../../constatnts/Divider";
import { ServicesImage } from "../../../assets/icons";

export const TopComponent = ({ title, heading, description, image }) => {
  return (
    <div className="flex w-full items-center lg:flex-row xl:flex-row 2xl:flex-row md:flex-col sm:flex-col xs:flex-col xxs:flex-col xl:gap-16 2xl:gap-16 lg:gap-16 md:gap-8 sm:gap-4">
      <div className="flex flex-col gap-2 sm:text-center xs:text-center xxs:text-center md:text-center lg:text-start xl:text-start 2xl:text-start w-full md:w-full sm:w-full xs:w-full xxs:w-full">
        <h1 className="text-[16px] leading-5 text-dottedBorder">{title}</h1>
        <h1 className="xl:text-[28px] lg:text-[28px] md:text-[28px] sm:text-[18px] xs:text-[18px] xss:text-[18px] leading-10 text-custom-purple sm:text-center xs:text-center xxs:text-center md:text-center lg:text-start xl:text-start 2xl:text-start  w-full font-bold">
          {heading.toUpperCase()}
        </h1>
        <div className="mb-8 flex w-full sm:justify-center xs:justify-center xxs:justify-center md:justify-center lg:justify-start xl:justify-start 2xl:justify-start">
          <Divider />
        </div>
        <p className="text-webDescrip xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] xss:text-[12px] leading-6 text-justify">
          {description}
        </p>
      </div>
      <div className="w-1/2 flex md:w-full md:justify-center md:items-center sm:w-full sm:justify-center sm:items-center xs:w-full xxs:w-full xs:justify-center xs:items-center xxs:justify-center xxs:items-center">
        {image}
      </div>
    </div>
  );
};
