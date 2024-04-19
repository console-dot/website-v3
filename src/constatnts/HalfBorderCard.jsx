import React from "react";
import { Vector } from "../assets/icons";
import { Dot } from "../components/WebLandingPage";

export const HalfBorderCard = ({ heading,flexDirection,borders,dotDirection,icon }) => {
  return (
    <div className="w-full h-auto flex justify-start items-start py-4">
    
        <div 
          className={`w-full h-[162px]   relative px-2 flex ${
            parseInt(heading) % 2 === 0 ? "" : "mt-[70px]"
          } ${
            flexDirection ? flexDirection : "flex-col"
          } gap-4 justify-center items-center ${
            borders
          } border-dottedBorder border-dashed`}
        >
          
          <div className={`w-[80px] h-[80px] border-2 border-#c6dde40 hover:bg-webdevHover cursor-pointer bg-dottedBorder flex items-center justify-center rounded-full`}>
            <img src={icon} alt="" />
          </div>
          <div className="flex justify-center items-center ">
            <h1 className="text-[36px] text-primaryText font-bold">
              {heading}
            </h1>
          </div>
          <Dot direction={dotDirection} />
        </div>
      
    </div>
  );
};