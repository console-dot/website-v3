import React from "react";
import LandingPage from "../components/Common/services/LandingPage";
import { landingPageDataCaseStudy } from "../constatnts/landingPageData";
import { TopFive } from "../components/CaseStudy/TopFive";
import { BottomFive } from "../components/CaseStudy/BottomFive";
import { TopContent } from "../components/CaseStudy/TopContent";
import { BottomContent } from "../components/CaseStudy/BottomContent";
import { CaseStudyMob } from "../components/CaseStudy/CaseStudyMob";
import useIsMobile from "../utils/hooks/useIsMobile";
import useScreenSize from "../utils/hooks/useScreenSize";
import { useNavigate } from "react-router-dom";

export const CaseStudy = () => {
  const screenSize = useScreenSize();
  const navigate = useNavigate();

  return (
    <div className="w-full mb-8">
      <LandingPage data={landingPageDataCaseStudy} />
      {screenSize ? (
        <div className="lg:p-16 xl:p-16 2xl:p-16 md:p-8 sm:p-8 xs:p-4 xxs:p-2 flex flex-col gap-12 ">
          <CaseStudyMob />
        </div>
      ) : (
        <div className="lg:p-16 xl:p-16 2xl:p-16 md:p-8 sm:p-8 xs:p-4 xxs:p-2 flex flex-col gap-12 ">
          <div className="">
            <TopFive />
            <TopContent />
          </div>
          <div>
            <BottomFive />
            <BottomContent />
          </div>
          <div className="flex justify-center items-center ">
            <button
              type="button"
              onClick={() => navigate("/CaseStudies")}
              className="text-custom-purple just border-[0.5px]bg-custom-lightBlue  rounded-full focus:outline-none transition-colors duration-300 hover:bg-gradient-to-tl  hover:from-custom-blue1 hover:to-custom-purple hover:text-custom-white active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue px-5 py-2.5 w-[182px] h-[54px] mt-3 bg-custom-lightBlue  font-Lato font-medium"
            >
              Go To Case Studies
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
