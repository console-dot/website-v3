import React from "react";
import LandingPage from "../components/Common/services/LandingPage";
import { landingPageDataCaseStudy } from "../constatnts/landingPageData";
import { TopFive } from "../components/CaseStudy/TopFive";
import { BottomFive } from "../components/CaseStudy/BottomFive";
import { TopContent } from "../components/CaseStudy/TopContent";
import { BottomContent } from "../components/CaseStudy/BottomContent";

export const CaseStudy = () => {
  return (
    <div className="w-full mb-8">
      <LandingPage data={landingPageDataCaseStudy} />
      <div className="lg:p-16 xl:p-16 2xl:p-16 md:p-8 sm:p-8 xs:p-4 xxs:p-2 flex flex-col gap-12">
        <div className="">
          <TopFive />
          <TopContent />
        </div>
        <div>
          <BottomFive />
          <BottomContent />
        </div>
      </div>
    </div>
  );
};
