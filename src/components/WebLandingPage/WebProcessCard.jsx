import React from "react";
import { Dot } from "./Dot";
import LinkedinIcon from "../../assets/icons/LinkedinIcon";

export const WebProcessCard = ({ data }) => {
  return (
    <div className="w-full h-[450px] flex justify-start items-start border-2 p-4">
      {data?.map((i) => (
        <div
          className={`w-full h-[162px] relative px-2 flex ${
            parseInt(i?.heading) % 2 === 0 ? "" : "mt-[70px]"
          } ${
            i?.flexDirection ? i?.flexDirection : "flex-col"
          } gap-4 justify-center items-center ${
            i?.borders
          } border-dottedBorder border-dashed`}
        >
          
          <div className="w-[81px] h-[78px] border-2 border-gray-300 bg-cyan-400 flex items-center justify-center rounded-full">
            <LinkedinIcon/>
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
