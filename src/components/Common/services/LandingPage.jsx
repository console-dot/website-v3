import React from "react";
import { StarEffect } from "../../../assets/images";

export default function LandingPage({data}) {
  return (
    <div className="w-full h-[80vh]"
    style={{
      backgroundImage: `url(${data?.backgroundImage})`, // Using string interpolation for the URL
      opacity: "2", // Set opacity to 40%
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width:"100%"
    }} >
      {/* <div
        className="relative w-full overflow-hidden bg-gradient-to-r from-custom-blue to-custom-purple"
        style={{
          height: "650px",
          borderBottomLeftRadius: "25%",
          borderBottomRightRadius: "25%",
          height:"78vh"
        }}
      > */}
        {/* Add the opacity layer */}
        <div
          
        >
        <div className="flex justify-center items-center w-full h-[60vh]">
          <div className="w-full flex justify-start items-center">
            <div className="pl-16 flex flex-col gap-8">
              <h1 className="text-[16px] text-white">{data.topHeading}</h1>
              <h1 className="text-[28px] text-white mb-4 font-bold">{data.midHeading.toUpperCase()}</h1>
              <h1 className="text-[16px] text-white">{data.bottomHeading}</h1>
            </div>
          </div>
        {/* </div> */}
      </div>
      </div>
    </div>
  );
}