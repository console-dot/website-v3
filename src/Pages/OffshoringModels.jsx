import React from "react";
import { OffshoreModel } from "../components/OffshoreModel";
import { OffShoreModelHero } from "../components/OffshoreModelHero";
import OffshoringServices from "../components/OffshoringServices/OffshoringServices";
import { OffShoreModelText } from "../components/OffShoreModelText";
import { OffShoreModelText1 } from "../components/OffShoreModelText";
import { ContactSection1 } from "../components/OffshoringServices/ContactSection";

export const OffshoringModels = () => {
  return (
    <div className="bg-offwhite w-full flex flex-col justify-center items-center overflow-hidden">
      <OffShoreModelHero />

      <div className="w-full flex flex-col justify-start items-center  xss:p-8 xl:p-0 lg:p-0 md:p-0 sm:p-4 xs:p-8">
        <OffShoreModelText1 />
        <OffshoreModel />
      </div>
      <OffshoringServices
        title={"Model Comparison"}
        heading={"OFFSHORING MODELS COMPARISON"}
      />
      <div className="w-full flex flex-col justify-start items-center xss:p-5 xl:p-0 lg:p-0 md:p-0 sm:p-4 xs:p-5 lg:mt-4 lg:mb-3 xl:mt-4 xl:mb-3 md:mt-4 md:mb-3 sm:mt-3 sm:mb-2 xs:mt-3 xs:mb-2 xss:mt-1 xss:mb-1">
         <OffShoreModelText />
      </div>
    </div>
  );
};
