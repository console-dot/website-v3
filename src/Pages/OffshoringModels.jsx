import React from "react";
import { OffshoreModel } from "../components/OffshoreModel";
import { OffShoreModelHero } from "../components/OffshoreModelHero";
import OffshoringServices from "../components/OffshoringServices/OffshoringServices";
import { OffShoreModelText } from "../components/OffShoreModelText";
import { OffShoreModelText1 } from "../components/OffShoreModelText";
import { useSelector } from "react-redux";
import { selectLandingPageDetails, selectOffShoreDetails } from "../redux";

export const OffshoringModels = () => {
  const data = useSelector(selectOffShoreDetails);
  const data1 = useSelector(selectLandingPageDetails);
  return (
    <div className="bg-offwhite w-full flex flex-col justify-center items-center overflow-hidden">
      <OffShoreModelHero heroDescription={data?.heroDescription} />

      <div className="w-full flex flex-col justify-start items-center  xss:p-8 xl:p-0 lg:p-0 md:p-0 sm:p-4 xs:p-8">
        <OffShoreModelText1 topDescription={data?.topDescription} />
        <OffshoreModel offshoreType={data?.offshoreType} />
      </div>
      <OffshoringServices
        heading={"OFFSHORING MODELS COMPARISON"}
        offshoreComparison={data1?.offshoreComparison?.[0]?.offshoreType}
      />
      <div className="w-full flex flex-col justify-start items-center xss:p-5 xl:p-0 lg:p-0 md:p-0 sm:p-4 xs:p-5 lg:mt-4 lg:mb-4 xl:mt-4 xl:mb-4 md:mt-4 md:mb-4 sm:mt-3 sm:mb-3 xs:mt-3 xs:mb-3 xss:mt-0 xss:mb-2">
        <OffShoreModelText bottomDescription={data?.bottomDescription} />
      </div>
    </div>
  );
};
