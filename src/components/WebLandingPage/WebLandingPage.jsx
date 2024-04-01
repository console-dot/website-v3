import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { StarEffect } from "../../assets/images";
export default function WebLandingPage() {
  return (
    <div className="bg-offwhite " >
      <div
        className="relative w-full overflow-hidden bg-gradient-to-r from-custom-blue to-custom-purple"
        style={{
          height: "650px",
          borderBottomLeftRadius: "25%",
          borderBottomRightRadius: "25%",
          height:"78vh"
        }}
      >
        {/* Add the opacity layer */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${StarEffect})`, // Using string interpolation for the URL
            opacity: "0.4", // Set opacity to 40%
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-full flex justify-start items-start">
            <div className="pl-16 flex flex-col gap-8">
              <h1 className="text-[16px] text-white">Our Services</h1>
              <h1 className="text-[28px] text-white mb-4 font-bold">WEB DEVELOPMENT</h1>
              <h1 className="text-[16px] text-white">{"home > services > Web Development"} </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
