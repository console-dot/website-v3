import React from "react";
import LandingPage from "../../components/Common/services/LandingPage";
import { landingPageDataCaseStudies } from "../../constatnts/landingPageData";
import { CaseStudiesCard } from "./CaseStudiesCard";

export const CaseStudies = () => {
  return  <div className="w-full mb-8">
  <LandingPage data={landingPageDataCaseStudies} />
  <div className="lg:p-16 xl:p-16 2xl:p-16 sm:p-8 xs:p-4 xxs:p-2">
    <div className="pb-4">
      {" "}
      <CaseStudiesCard />
    </div>
  </div>
</div>;
};




