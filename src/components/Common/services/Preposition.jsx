import React from "react";
import { Divider } from "../../../constatnts/Divider";
import { Inverted1, Inverted2 } from "../../../assets/icons";


export const Preposition = ({title, heading, proposition}) => {
  return (
    <div className="w-full flex justify-center items-center px-36">
      
        <div className="flex flex-col gap-2 items-start w-[30%]">
          <h1 className="text-[16px] leading-5 text-dottedBorder">
            {title}
          </h1>
          <h1 className="text-[28px] leading-10 text-dottedBorder font-bold">
            {heading}
          </h1>
          <div className="mb-8">
            <Divider />
          </div>
        </div>
        <div className="flex flex-row gap-8 justify-center items-center w-[70%]">
           <div className="flex justify-start items-start"> <Inverted1/> </div>
            <p className="text-[16px] leading-6 text-webDescrip">{proposition}</p>
            <div className="flex justify-start items-start"> <Inverted2/></div>
        </div>
      
    </div>
  );
};
