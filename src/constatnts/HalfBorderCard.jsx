import React from "react";
import { Vector } from "../assets/icons";
import { Dot } from "../components/WebLandingPage";

export const HalfBorderCard = ({ data }) => {
  return (
    <div className="w-full h-auto flex justify-start items-start py-4">
      {data?.map((i,index) => (
        <div key={index}
          className={`w-full h-[162px] relative px-2 flex ${
            parseInt(i?.heading) % 2 === 0 ? "" : "mt-[70px]"
          } ${
            i?.flexDirection ? i?.flexDirection : "flex-col"
          } gap-4 justify-center items-center ${
            i?.borders
          } border-dottedBorder border-dashed`}
        >
          
          <div className={`w-[80px] h-[80px] border-2 border-#c6dde40 ${i?.heading==="01"? 'bg-firstProcess' : "bg-dottedBorder"} flex items-center justify-center rounded-full`}>
            <Vector/>
          </div>
          <div className="flex justify-center items-center ">
            <h1 className="text-[36px] text-primaryText font-bold">
              {i?.heading}
            </h1>
          </div>
          <Dot direction={i?.dotDirection} />
        </div>
      ))}
    </div>
  );
};