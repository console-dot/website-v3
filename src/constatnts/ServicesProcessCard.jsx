import React from "react";
import { Vector } from "../assets/icons";
import { Dot } from "../components/WebLandingPage";

export const ServicesProcessCard = ({ data }) => {
  return (
    <div className="w-full h-auto grid xl:grid-cols-4 2xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 xxs:grid-cols-1 justify-start items-start py-4 2xl:gap-8 xl:gap-8 lg:gap-8 md:gap-8 sm:gap-4 xs:gap-4 xxs:gap-2">
      {data?.map((i, index) => (<div className={`flex flex-col w-full gap-4 ${
            parseInt(i?.heading) % 2 != 0 ? "flex-col-reverse" :"flex-col mt-32" 
          }`}>
        <div
          key={index}
          className={`w-full h-[162px] relative px-2 flex  ${
            i?.flexDirection ? i?.flexDirection : "flex-col"
          } gap-4 justify-center items-center ${
            i?.borders
          } border-dottedBorder border-dashed`}
        >
          <div className="w-[80px] h-[80px] border-2 border-#c6dde40 bg-dottedBorder hover:bg-custom-purple flex items-center justify-center rounded-full">
            <img src={i.icon} alt="" />
          </div>
          <div className="flex justify-center items-center ">
            <h1 className="text-[36px] text-primaryText font-bold">
              {i?.heading}
            </h1>
          </div>
          <Dot direction={i?.dotDirection} />
        </div>
        <div className='flex flex-col w-full'>
            <h1 className='text-[16px] mb-4 leading-6 font-poppins font-bold text-start text-webHeading'>
            {i?.title}
            </h1>
            <p className='text-webDescrip text-[16px] leading-6 text-justify'>
            {i?.desccription}
            </p>
        </div></div>
      ))}
    </div>
  );
};
