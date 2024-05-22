import React from "react";
import { Divider } from "../../../constatnts/Divider";
import { HalfBorderCard } from "../../../constatnts/HalfBorderCard";
import { processCardsMobDev } from "../../../constatnts/ProcessCardsData";
import { ServicesProcessCard } from "../../../constatnts/ServicesProcessCard";

export const Process = ({ data, heading, title, maxRow }) => {
  return (
    <div className="w-full xl:mt-12 lg:mt-12 md:mt-12 sm:mt-0 xs:mt-0 xss:mt-0">
      <div className="flex flex-col gap-2 sm:text-center xs:text-center xss:text-center md:text-center lg:text-center xl:text-center 2xl:text-start w-full md:w-full sm:w-full xs:w-full xss:w-full">
        <h1 className=" flex justify-center items-center text-[16px] leading-5 text-dottedBorder">{title}</h1>
        <h1 className="flex justify-center items-center xl:text-[28px] lg:text-[28px] md:text-[28px] sm:text-[18px] xs:text-[18px] xss:text-[18px] leading-10 text-custom-purple sm:text-center xs:text-center xxs:text-center md:text-center lg:text-center xl:text-center 2xl:text-start  w-full font-bold">
          {heading.toUpperCase()}
        </h1>
        <div className="mb-8 flex w-full justify-center items-center">
          <Divider />
        </div>
      </div>
      <div>
        <div className="">
          <ServicesProcessCard data={data} maxRow={maxRow} />
        </div>
      </div>
    </div>
  );
};
