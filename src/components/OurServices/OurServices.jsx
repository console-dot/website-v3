import React from "react";
import CardArray from "../OurServicesCard/OurServicesCard";
import { image1 } from "../../assets/images";
import { image2 } from "../../assets/images";
import { image3 } from "../../assets/images";
import { image4 } from "../../assets/images";
import useIsMobile from "../../utils/hooks/useIsMobile";
const OurServices = () => {
  const isMobile = useIsMobile();
  return (
    <div className="flex flex-col items-center mt-4">
      <div className="font-Lato lg:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] text-custom-blue">
        Our Expertise
      </div>
      <div className="font-Poppins lg:text-[28px] md:text-[28px] sm:text-[18px] xs:text-[18px] font-bold text-custom-purple mt-4">
        Our Services
      </div>
      <div className="font-Rubik text-4xl font-normal leading-10 text-center mt-4">
        <div className="flex items-center lg:ml-[8%] sm:ml-">
          <div className="h-0.5 bg-custom-purple w-16"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-1"></div>
          <div className="h-0.5 bg-custom-purple w-16"></div>
        </div>
      </div>
      {/* Render the CardArray component here */}

      <div className="mt-4">
        <CardArray />
    
      </div>
      {/* service Div */}
      <div className="bg-gradient-to-r from-custom-blue to-custom-purple w-full  flex flex-wrap justify-between gap-3 p-[2rem] pt-[4">
        <div
          className={`flex flex-row items-center sm:flex-row sm:items-center  ${
            isMobile ? "sm:flex-col" : ""
          }`}
          style={{ width: isMobile ? "90%" : "auto", margin: "auto", marginTop: isMobile ? "10%" : 0 }}
        >
          <div className="w-24 h-24 rounded-full border-2 border-white relative">
            <img
              src={image1}
              alt="Image 1"
              className="w-auto h-auto object-cover ml-5 mt-5"
            />
          </div>

          <div className="ml-4">
            <h2 className="font-bold text-[40px] text-white justify-center font-poppins">
              12+
            </h2>
            <p className="text-white justify-center font-poppins text-[16px]">
              Countries where we <br></br>have happy clients
            </p>
          </div>
        </div>

        <div
          className={`flex flex-row items-center sm:flex-row sm:items-center  ${
            isMobile ? "sm:flex-col" : ""
          }`}
          style={{ width: isMobile ? "90%" : "auto", margin: "auto", marginTop: isMobile ? "10%" : 0 }}
        >
          <div className="w-24 h-24 rounded-full border-2 border-white relative">
            <img
              src={image2}
              alt="Image 1"
              className="w-auto h-auto object-cover ml-5 mt-5"
            />
          </div>

          <div className="ml-4">
            <h2 className="font-bold text-[40px] text-white justify-center font-poppins">
              26
            </h2>
            <p className="text-white justify-center font-poppins text-[16px]">
              Experienced Employees
            </p>
          </div>
        </div>

        <div
          className={`flex flex-row items-center sm:flex-row sm:items-center ${
            isMobile ? "sm:flex-col" : ""
          }`}
          style={{ width: isMobile ? "90%" : "auto", margin: "auto", marginTop: isMobile ? "10%" : 0 }}
        >
          <div className="w-24 h-24 rounded-full border-2 border-white relative">
            <img
              src={image3}
              alt="Image 1"
              className="w-auto h-auto object-cover ml-5 mt-5"
            />
          </div>

          <div className="ml-4">
            <h2 className="font-bold text-[40px] text-white justify-center font-poppins">
              05
            </h2>
            <p className="text-white justify-center font-poppins text-[16px]">
              Scrum Teams
            </p>
          </div>
        </div>

        <div
          className={`flex flex-row items-center sm:flex-row sm:items-center ${
            isMobile ? "sm:flex-col" : ""
          }`}
          style={{ width: isMobile ? "90%" : "auto", margin: "auto", marginTop: isMobile ? "10%" : 0 }}
        >
          <div className="w-24 h-24 rounded-full border-2 border-white relative">
            <img
              src={image4}
              alt="Image 1"
              className="w-auto h-auto object-cover ml-5 mt-5"
            />
          </div>

          <div className="ml-4">
            <p className="font-bold text-[40px] text-white justify-center font-poppins">
              06
            </p>
            <p className="text-white justify-center font-poppins text-[16px]">
              Fullstack Developers
            </p>
          </div>
        </div>
      </div>
      {/* service div */}
    </div>
  );
};

export default OurServices;
