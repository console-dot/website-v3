import React from "react";
import { Divider } from "../../../constatnts/Divider";
import { ServicesImage } from "../../../assets/icons";

export const TopComponent = ({ title, heading, description, image }) => {
  return (
    <div className="flex w-full lg:flex-row xl:flex-row 2xl:flex-row md:flex-col sm:flex-col xs:flex-col xxs:flex-col xl:gap-16 2xl:gap-16 lg:gap-16 md:gap-8 sm:gap-4">
      <div className="flex flex-col gap-2 items-start w-1/2 md:w-full sm:w-full xs:w-full xxs:w-full">
        <h1 className="text-[16px] leading-5 text-dottedBorder">{title}</h1>
        <h1 className="text-[28px] leading-10 text-dottedBorder font-bold">
          {heading.toUpperCase()}
        </h1>
        <div className="mb-8">
          <Divider />
        </div>
        <p className="text-webDescrip text-[16px] leading-6 text-justify">
          {description}
        </p>
      </div>
      <div className="w-1/2 flex md:w-full md:justify-center md:items-center sm:w-full sm:justify-center sm:items-center xs:w-full xxs:w-full xs:justify-center xs:items-center xxs:justify-center xxs:items-center">
        {image}
      </div>
    </div>
  );
};
