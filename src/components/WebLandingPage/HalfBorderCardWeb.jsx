import React from "react";
import { Dot } from "./Dot";

export const HalfBorderCardWeb = ({ data }) => {
  const gradientStyle = {
    background: "linear-gradient(180deg, #0E7789 0%, #3C5A85 100%)",
  };
  return (
    <div className="w-full h-auto flex justify-start items-start py-4">
      {data?.map((i, index) => (
        <div
          key={index}
          className={`w-full h-[162px] relative px-2 flex ${
            parseInt(i?.heading) % 2 === 0 ? "" : "mt-[70px]"
          } ${
            i?.flexDirection ? i?.flexDirection : "flex-col"
          } gap-4 justify-center items-center ${
            i?.borders
          } border-dottedBorder border-dashed`}
        >
          <div
            style={gradientStyle}
            className={`w-[80px] h-[80px] border-2 border-#c6dde40 hover:bg-webdevHover cursor-pointer bg-dottedBorder flex items-center justify-center rounded-full`}
          >
            <img src={i.icon} alt="" />
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
