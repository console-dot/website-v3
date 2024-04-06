import React from "react";
import { OffshoreModel } from "../components/OffshoreModel";
import { OffShoreModelHero } from "../components/OffshoreModelHero";
import OffshoringServices from "../components/OffshoringServices/OffshoringServices";
import { OffShoreModelText } from "../components/OffShoreModelText";
import { OffShoreModelText1 } from "../components/OffShoreModelText";
import { ContactSection1 } from "../components/OffshoringServices/ContactSection";

export const OffshoringModels = () => {
  return (
    <div className="bg-offwhite w-full flex flex-col justify-center items-center">
      <OffShoreModelHero />

      <div className="w-full flex flex-col justify-start items-center">
        <OffShoreModelText1/>
        <OffshoreModel />
        <OffshoringServices />
        <OffShoreModelText />
        
      </div>
    </div>
  );
};
