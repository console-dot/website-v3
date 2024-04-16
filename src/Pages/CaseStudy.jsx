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
      <div className="p-16 flex flex-col gap-12">
        <div>
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
