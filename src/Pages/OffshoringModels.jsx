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

      <div className="w-full flex flex-col justify-start items-center sm:p-8 xs:p-8 xss:p-8 xl:p-8 lg:p-8  md:p-8">
        <OffShoreModelText1/>
        <OffshoreModel />
        <OffshoringServices title={'Model Comparison'}  heading={"OFFSHORING MODELS COMPARISON"}/>
        <OffShoreModelText />
        
      </div>
    </div>
  );
};
