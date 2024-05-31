import React from "react";
import LandingPage from "../../components/Common/services/LandingPage";
import { landingPageDataCaseStudies } from "../../constatnts/landingPageData";
import { CaseStudiesCard } from "./CaseStudiesCard";
import { selectcasestudyDetails } from "../../redux";
import { useSelector } from "react-redux";

export const CaseStudies = () => {
  const data = useSelector(selectcasestudyDetails);
  console.log("data",data)
  return  <div className="w-full mb-8 overflow-hidden">
  <LandingPage data={landingPageDataCaseStudies} />
  <div className="lg:p-16 xl:p-16 2xl:p-16 sm:p-8 xs:p-4 xxs:p-2">
    <div className="pb-4">
      {" "}
      <CaseStudiesCard data={data} />
    </div>
  </div>
</div>;
};




